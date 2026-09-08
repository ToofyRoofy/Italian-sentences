let deck=[],idx=0,answered=false;
let totalScore=0,passedCount=0,bestScore=0,totalAttempts=0,failCount=0;
const PASS=80;

function shuffle(a){const out=[...a];for(let i=out.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[out[i],out[j]]=[out[j],out[i]];}return out;}
function norm(s){
  return s.toLowerCase()
    .replace(/[àá]/g,'a').replace(/[èéê]/g,'e')
    .replace(/[ìí]/g,'i').replace(/[òó]/g,'o')
    .replace(/[ùú]/g,'u').replace(/[^a-z\s]/g,'').trim();
}

// Words that the sentence-level pronunciation drill (lesson mode) doesn't
// require the learner to say correctly on their own: simple + combined
// prepositions (حروف الجر) and indefinite articles (أدوات التنكير). They're
// still shown in the sentence and still spoken by the TTS, but they never
// turn 'bad' and never trigger the isolated word-drill — only real content
// words (verbs, nouns, adjectives, pronouns, definite articles, etc.) do.
const AUTO_SKIP_WORDS=new Set([
  // حروف الجر البسيطة
  'a','di','da','in','con','su','per','tra','fra',
  // حروف الجر المدمجة (a/da/di/in/su + الأداة)
  'al','allo','alla','ai','agli','alle',
  'dal','dallo','dalla','dai','dagli','dalle',
  'del','dello','della','dei','degli','delle',
  'nel','nello','nella','nei','negli','nelle',
  'sul','sullo','sulla','sui','sugli','sulle',
  'col','coi',
  // أدوات التنكير
  'un','uno','una'
]);
function isAutoSkipWord(it){
  return AUTO_SKIP_WORDS.has(norm(it));
}

// Levenshtein edit distance — used to approximate "how close" the heard
// word is to the target word's spelling/sound, as a stand-in for real
// phoneme-level accent scoring (which needs a server-side model).
function levenshtein(a,b){
  const m=a.length,n=b.length;
  if(m===0)return n;
  if(n===0)return m;
  const dp=Array.from({length:m+1},()=>new Array(n+1).fill(0));
  for(let i=0;i<=m;i++)dp[i][0]=i;
  for(let j=0;j<=n;j++)dp[0][j]=j;
  for(let i=1;i<=m;i++){
    for(let j=1;j<=n;j++){
      dp[i][j]=a[i-1]===b[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1]);
    }
  }
  return dp[m][n];
}
function similarity(a,b){
  const dist=levenshtein(a,b);
  const maxLen=Math.max(a.length,b.length);
  return maxLen===0?1:1-dist/maxLen;
}

// ===== SEGMENT-LEVEL FEEDBACK (word mode) =====
// مهم: لا توجد عندنا موديل يقدر يسمع/يحلل 3 مقاطع صوتية منفصلة فعلياً من التسجيل
// (هذا يحتاج "forced alignment" صوتي حقيقي، وWhisper-tiny في المتصفح مبيرجعش
// توقيتات على مستوى المقطع بشكل موثوق). البديل العملي الذي عملناه هنا:
// 1) نقسم شكل الكلمة نفسها لـ3 مقاطع تقريبية (V/CV heuristic).
// 2) نقارن حروف الكلمة الذي المستخدم قالها (بعد التفريغ النصي) بحروف الكلمة
//    الأصلية حرف بحرف (Levenshtein alignment) لكي نعرف أي حروف "ضاعت"
//    أو اتقالت خطأ.
// 3) أي مقطع يقع فيه أغلب الحروف الخطأ بيتحدد بالأحمر، والمستخدم يُقال له
//    يركّز فيه وهو بيعيد قول الكلمة كاملة مرة أخرى.
// هذا تقريب مفيد لتوجيه الانتباه، ليس تحليل نطق دقيق 100% لكل حرف.

function rawSyllables(word){
  const isVowel=c=>/[aeiouàèéìòù]/i.test(c);
  const vowelIdx=[];
  for(let i=0;i<word.length;i++) if(isVowel(word[i])) vowelIdx.push(i);
  if(vowelIdx.length===0) return [word];
  const nuclei=[];
  let start=vowelIdx[0],prev=vowelIdx[0];
  for(let k=1;k<vowelIdx.length;k++){
    if(vowelIdx[k]===prev+1){prev=vowelIdx[k];}
    else{nuclei.push([start,prev]);start=vowelIdx[k];prev=vowelIdx[k];}
  }
  nuclei.push([start,prev]);
  const bounds=[0];
  for(let i=0;i<nuclei.length-1;i++){
    const consStart=nuclei[i][1]+1,consEnd=nuclei[i+1][0]-1;
    const consLen=consEnd-consStart+1;
    let splitAt;
    if(consLen<=0) splitAt=consStart;
    else if(consLen===1) splitAt=consStart;
    else{
      const cluster=word.slice(consStart,consEnd+1).toLowerCase();
      const lastTwo=cluster.slice(-2);
      const lastChar=cluster.slice(-1);
      if(['gl','gn','sc','ch','gh','qu'].includes(lastTwo)||((lastChar==='l'||lastChar==='r')&&consLen===2)){
        splitAt=consStart;
      } else {
        splitAt=consEnd;
      }
    }
    bounds.push(splitAt);
  }
  bounds.push(word.length);
  const syl=[];
  for(let i=0;i<bounds.length-1;i++) syl.push(word.slice(bounds[i],bounds[i+1]));
  return syl.filter(s=>s.length>0);
}

function syllabify3(word){
  let syl=rawSyllables(word);
  if(syl.length===0) syl=[word];
  while(syl.length>3){
    let bestIdx=0,bestLen=Infinity;
    for(let i=0;i<syl.length-1;i++){
      const len=syl[i].length+syl[i+1].length;
      if(len<bestLen){bestLen=len;bestIdx=i;}
    }
    syl.splice(bestIdx,2,syl[bestIdx]+syl[bestIdx+1]);
  }
  while(syl.length<3){
    let bestIdx=0,bestLen=-1;
    for(let i=0;i<syl.length;i++) if(syl[i].length>bestLen){bestLen=syl[i].length;bestIdx=i;}
    const s=syl[bestIdx];
    if(s.length<2) break;
    const mid=Math.ceil(s.length/2);
    syl.splice(bestIdx,1,s.slice(0,mid),s.slice(mid));
  }
  return syl;
}

function normChar(ch){
  let c=ch.toLowerCase();
  c=c.replace('à','a').replace('á','a').replace('è','e').replace('é','e').replace('ê','e')
    .replace('ì','i').replace('í','i').replace('ò','o').replace('ó','o').replace('ù','u').replace('ú','u');
  return /[a-z\s]/.test(c)?c:'';
}
function mapToNormIndices(word){
  const map=new Array(word.length).fill(-1);
  let ni=0;
  for(let k=0;k<word.length;k++){
    if(normChar(word[k]).length>0){map[k]=ni;ni++;}
  }
  return map;
}

// بيرجع مصفوفة boolean بطول norm(target) — true يعني الحرف هذا اتقال صحيح
// (طابق شيء في المسموع)، false يعني ضاع أو اتبدل بحرف مختلف.
function alignMismatches(target,heard){
  const a=norm(target),b=norm(heard);
  const m=a.length,n=b.length;
  if(m===0) return [];
  const dp=Array.from({length:m+1},()=>new Array(n+1).fill(0));
  for(let i=0;i<=m;i++)dp[i][0]=i;
  for(let j=0;j<=n;j++)dp[0][j]=j;
  for(let i=1;i<=m;i++){
    for(let j=1;j<=n;j++){
      dp[i][j]=a[i-1]===b[j-1]?dp[i-1][j-1]:1+Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1]);
    }
  }
  const matched=new Array(m).fill(false);
  let i=m,j=n;
  while(i>0&&j>0){
    if(a[i-1]===b[j-1]&&dp[i][j]===dp[i-1][j-1]){matched[i-1]=true;i--;j--;}
    else if(dp[i][j]===dp[i-1][j-1]+1){matched[i-1]=false;i--;j--;}
    else if(dp[i][j]===dp[i-1][j]+1){matched[i-1]=false;i--;}
    else{j--;}
  }
  while(i>0){matched[i-1]=false;i--;}
  return matched;
}

// بيقسّم الكلمة لـ3 مقاطع وبيحدد كل مقطع "سليم" أو "محتاج تركيز" بناءً على
// نسبة الحروف الخطأ فيه مقارنة بأسوأ مقطع في الكلمة.
function computeSegmentResults(word,heard){
  const segments=syllabify3(word);
  const matched=alignMismatches(word,heard);
  const charMap=mapToNormIndices(word);
  let charPos=0;
  const raw=segments.map(seg=>{
    const startChar=charPos,endChar=charPos+seg.length;
    charPos=endChar;
    let total=0,bad=0;
    for(let k=startChar;k<endChar;k++){
      const ni=charMap[k];
      if(ni===-1||ni>=matched.length) continue;
      total++;
      if(!matched[ni])bad++;
    }
    return {text:seg,ratio:total?bad/total:0};
  });
  const maxRatio=Math.max(0,...raw.map(r=>r.ratio));
  return raw.map(r=>({text:r.text,ok:!(r.ratio>0&&r.ratio>=maxRatio*0.6)}));
}

function escHtml(s){
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function renderWordSegmentsHtml(results){
  return results.map(r=>r.ok?escHtml(r.text):'<span style="color:#e74c3c;text-decoration:underline wavy;font-weight:800;">'+escHtml(r.text)+'</span>').join('');
}

// بيرسم الكلمة حرف بحرف: الحروف الذي اتثبتت "صحيح" (في mask) بالأخضر، والباقي
// بالأحمر تحته خط متعرج — يُستخدم في drill mode لكي يبيّن للمتعلم أنهي
// حروف قفلها فعلاً وأي حروف ما زال محتاج يركّز فيها.
function renderWordLetterMaskHtml(word,mask){
  const map=mapToNormIndices(word);
  let html='';
  for(let k=0;k<word.length;k++){
    const ni=map[k];
    const ch=escHtml(word[k]);
    if(ni===-1||ni>=mask.length){html+=ch;continue;}
    html+=mask[ni]
      ?'<span style="color:#2ecc71;font-weight:800;">'+ch+'</span>'
      :'<span style="color:#e74c3c;text-decoration:underline wavy;font-weight:800;">'+ch+'</span>';
  }
  return html;
}

// ===== UNIFIED MIC ENGINE =====
// Primary: Whisper-tiny running fully in-browser via WebAssembly (transformers.js) —
// free, no API key, works fully offline once the model is downloaded+cached once.
// Fallback: native browser SpeechRecognition (needs internet, but instant/no
// download) — used automatically while the offline model is still loading,
// or if WASM/the model fails for any reason, so the app never gets fully stuck.
let micBusy=false;
let whisperPipeline=null, whisperReady=false, whisperLoading=false;

function setEngineStatus(text){
  const el=document.getElementById('engineStatus');
  if(!el)return;
  if(text){el.textContent=text;el.style.display='block';}
  else{el.style.display='none';}
}

async function ensureWhisperLoaded(){
  if(whisperReady||whisperLoading)return;
  whisperLoading=true;
  setEngineStatus('⏳ بيحمّل محرك النطق الأوفلاين أول مرة (~40-75 ميجا، مرة واحدة لكن)...');
  try{
    const mod=await import('https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2');
    mod.env.allowLocalModels=false;
    whisperPipeline=await mod.pipeline('automatic-speech-recognition','Xenova/whisper-tiny',{
      // بنفرض النسخة المصغّرة (int8) بشكل صريح لكي نضمن نفس الحجم/السرعة الذي
      // رسالة الحالة فوق واعدة بيها (~40-75 ميجا)، بدل الاعتماد على قيمة
      // افتراضية ممكن تتغيّر بين إصدارات المكتبة وتنزّل نسخة fp32 أكبر
      // وأبطأ بكثيرًا في التحليل، خصوصًا على الموبايل.
      quantized:true,
      progress_callback:(p)=>{
        if(p&&p.status==='progress'&&typeof p.progress==='number'){
          setEngineStatus('⏳ بيحمّل المحرك الأوفلاين... '+Math.round(p.progress)+'%');
        }
      }
    });
    whisperReady=true;
    setEngineStatus('✅ المحرك الأوفلاين جاهز — هيشتغل من غير نت الآن');
    setTimeout(()=>setEngineStatus(''),2500);
  }catch(err){
    setEngineStatus('⚠️ تعذّر تحميل المحرك الأوفلاين، هنستخدم تعرف الصوت الذي محتاج نت لحد ما يتاح');
    setTimeout(()=>setEngineStatus(''),3500);
  }
  whisperLoading=false;
}

// Records mic audio with simple volume-based silence detection so the user
// doesn't have to manually mark "done speaking".
async function recordAudioVAD(maxMs,silenceMs){
  maxMs=maxMs||6000;silenceMs=silenceMs||900;
  const stream=await navigator.mediaDevices.getUserMedia({audio:true});
  const AC=window.AudioContext||window.webkitAudioContext;
  const liveCtx=new AC();
  const source=liveCtx.createMediaStreamSource(stream);
  const analyser=liveCtx.createAnalyser();
  analyser.fftSize=2048;
  source.connect(analyser);

  let mimeType='';
  ['audio/webm;codecs=opus','audio/webm','audio/ogg;codecs=opus','audio/mp4'].some(t=>{
    if(window.MediaRecorder&&MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(t)){mimeType=t;return true;}
    return false;
  });
  const recorder=mimeType?new MediaRecorder(stream,{mimeType}):new MediaRecorder(stream);
  const chunks=[];
  recorder.ondataavailable=(e)=>{if(e.data&&e.data.size>0)chunks.push(e.data);};

  return new Promise((resolve,reject)=>{
    let speechStarted=false,silenceStart=null;
    const dataArr=new Uint8Array(analyser.frequencyBinCount);
    const startTime=Date.now();
    let stopped=false;

    // ثابت 0.02 كان بيفتكر إن في كلام طول ما ضجيج المايك/المكان فوق القيمة
    // هذا (شائع في مايكات الموبايل لكنبب AGC)، فمكانش بيوصل لحالة "سكوت"
    // خالص وكان بيستنى للـ maxMs كمل كل مرة حتى لو المستخدم سكت فعلاً بدري.
    // هنا بنقيس "أرضية الضجيج" الفعلية أول ~250ms قبل ما الكلام يبدأ،
    // وبعدين نبني على ماذا عتبتين: عتبة أعلى لكي نتأكد إن هذا كلام فعلاً،
    // وعتبة أوطى (أقرب لأرضية الضجيج) لكي نعتبره سكوت فور ما الصوت يرجع
    // قريب من الضجيج الطبيعي، ليس لازم يوصل لصفر.
    const CALIBRATE_MS=250;
    let calibSum=0,calibCount=0,noiseFloor=0.006,calibrated=false;
    let speechThresh=0.02,silenceThresh=0.02;

    function finishUp(){
      stream.getTracks().forEach(t=>t.stop());
      try{liveCtx.close();}catch(e){}
    }

    function tick(){
      if(stopped)return;
      analyser.getByteTimeDomainData(dataArr);
      let sum=0;
      for(let i=0;i<dataArr.length;i++){const v=(dataArr[i]-128)/128;sum+=v*v;}
      const rms=Math.sqrt(sum/dataArr.length);
      const now=Date.now();

      if(!calibrated){
        if(now-startTime<CALIBRATE_MS){
          calibSum+=rms;calibCount++;
        } else {
          if(calibCount>0)noiseFloor=calibSum/calibCount;
          // عتبة الكلام: واضح فوق أرضية الضجيج، بحد أدنى 0.02 لكي مايكات
          // نضيفة جداً (أرضية ضجيج شبه صفرية) ما زال محتاجة صوت حقيقي ليس همس.
          speechThresh=Math.max(0.02,noiseFloor*2.5+0.008);
          // عتبة السكوت: أقرب لأرضية الضجيج نفسها (هيستِيريسيس) لكي نلحق
          // لحظة السكوت فعلياً بدل ما نستنى الصوت يوصل صفر ممتاز.
          silenceThresh=Math.max(0.012,noiseFloor*1.5+0.004);
          calibrated=true;
        }
      }

      if(rms>speechThresh){speechStarted=true;silenceStart=null;}
      else if(speechStarted&&rms<=silenceThresh){if(silenceStart===null)silenceStart=now;}
      else if(speechStarted&&rms>silenceThresh){silenceStart=null;}
      const timedOut=now-startTime>maxMs;
      const wentQuiet=speechStarted&&silenceStart&&(now-silenceStart>silenceMs);
      if(timedOut||wentQuiet){
        stopped=true;
        recorder.stop();
        return;
      }
      requestAnimationFrame(tick);
    }

    recorder.onstop=async ()=>{
      finishUp();
      try{
        const blob=new Blob(chunks,{type:mimeType||'audio/webm'});
        const arrayBuf=await blob.arrayBuffer();
        const decodeCtx=new AC();
        const audioBuffer=await decodeCtx.decodeAudioData(arrayBuf);
        const targetLen=Math.max(1,Math.ceil(audioBuffer.duration*16000));
        const offline=new OfflineAudioContext(1,targetLen,16000);
        const src=offline.createBufferSource();
        src.buffer=audioBuffer;
        src.connect(offline.destination);
        src.start();
        const rendered=await offline.startRendering();
        resolve(rendered.getChannelData(0));
      }catch(err){reject(err);}
    };

    recorder.start();
    requestAnimationFrame(tick);
  });
}

// صفارة قصيرة (Beep) بتتشغل قبل ما التسجيل يبدأ فعلياً، لكي يبقى واضح
// للمستخدم متى يتكلم بالضبط. قصيرة عن قصد (120ms) بدل صفارة طويلة مزعجة.
function playBeep(){
  return new Promise(resolve=>{
    try{
      const AC=window.AudioContext||window.webkitAudioContext;
      const ctx=new AC();
      const osc=ctx.createOscillator();
      const gain=ctx.createGain();
      osc.type='sine';
      osc.frequency.value=1000;
      gain.gain.value=0;
      osc.connect(gain);
      gain.connect(ctx.destination);
      const now=ctx.currentTime;
      const dur=0.12;
      gain.gain.linearRampToValueAtTime(0.22,now+0.012);
      gain.gain.linearRampToValueAtTime(0,now+dur);
      osc.start(now);
      osc.stop(now+dur+0.02);
      const done=()=>{try{ctx.close();}catch(e){}resolve();};
      osc.onended=done;
      setTimeout(done,(dur+0.05)*1000+150);
    }catch(e){resolve();}
  });
}

async function whisperTranscribe(float32Audio){
  const out=await whisperPipeline(float32Audio,{language:'italian',task:'transcribe'});
  return (out&&out.text?out.text:'').trim();
}

// Generic mic driver shared by word-mode, lesson sentence-mode, and drill
// mode. Tries the offline Whisper engine first (if ready); otherwise falls
// back to the native browser API (needs internet) so the mic always does
// *something* useful.
async function smartListen({micBtnId,micLblId,errEl,onResult,onError,mode}){
  if(micBusy)return;
  const btn=document.getElementById(micBtnId);
  const lbl=document.getElementById(micLblId);
  micBusy=true;
  btn.classList.add('on');
  lbl.classList.add('on');
  lbl.textContent='🔔 استعد...';

  if(!whisperReady&&!whisperLoading)ensureWhisperLoaded();

  // جُمل الدرس (mode:'sentence') محتاجة وقت تسجيل أطول بكثيرًا من كلمة واحدة،
  // وطبيعي يبقى فيها وقفات نص الجملة (فاصلة، تفكير) أطول من وقفة نهاية كلمة
  // واحدة. استخدام توقيتات وضع الكلمة القصيرة هنا كان بيقطع الجملة قبل ما
  // المستخدم يخلص كلامها — وده السبب الأساسي في إحساسه إن التعرف الأوفلاين
  // "بطيء أو ما زال يُحمّل": كان بيتقطع بدري أو ياخد وقت تحليل أطول من الـ
  // watchdog الثابت الذي كان عندنا.
  const isSentence=mode==='sentence';
  const recMaxMs=isSentence?16000:6000;
  const recSilenceMs=isSentence?1400:450;
  // الـ watchdog لازم يغطي وقت التسجيل + وقت تحليل Whisper (الذي بيكبر مع
  // طول الصوت وبيبقى أبطأ على الأجهزة الضعيفة) — 20 ثانية ثابتة كانت بتنتهي
  // في نص التحليل لجمل طويلة وتلغي نتيجة كانت شكلها هتوصل لو استنينا قليل.
  const watchdogMs=isSentence?45000:25000;

  // صفارة قصيرة (Beep) قبل ما التسجيل يبدأ فعلياً، لكي يبقى واضح ومتفق على ماذا
  // متى المستخدم يتكلم بالظبط — بعد الصفارة على طول — بدل ما يتردد أو
  // يبدأ الكلام قبل ما التسجيل يكون شغال فعلاً.
  lbl.textContent='🔴 بيسمعك...';
  await playBeep();

  let finished=false;
  let watchdog=null;
  function finish(){
    if(finished)return;
    finished=true;
    if(watchdog)clearTimeout(watchdog);
    micBusy=false;
    btn.classList.remove('on');
    lbl.classList.remove('on');
  }
  // Safety net: whatever happens (a stalled WASM call, a recognition session
  // that ends without firing onresult/onerror, etc.) the mic must never stay
  // stuck forever — force a reset + error no matter what.
  watchdog=setTimeout(()=>{
    if(finished)return;
    finish();
    onError('timeout');
  },watchdogMs);

  if(whisperReady){
    try{
      const audio=await recordAudioVAD(recMaxMs,recSilenceMs);
      if(finished)return;
      lbl.textContent='🧠 يحلل النطق...';
      // طمّن المستخدم لو التحليل طوّل بدل ما يفضل الذيبل واقف على "يحلل
      // النطق..." من غير أي تحديث — وده كان بيحسسه إن الشاشة واقفة/ما زالة
      // تحمّل مع إنها شغالة فعلاً في الخلفية.
      const stillWorking=setTimeout(()=>{
        if(!finished)lbl.textContent='🧠 ما زال يحلل... (يأخذ وقت أطول قليل في الجمل الطويلة)';
      },5000);
      const text=await whisperTranscribe(audio);
      clearTimeout(stillWorking);
      if(finished)return;
      finish();
      if(!text){onError('no-speech');return;}
      onResult([text]);
    }catch(err){
      if(finished)return;
      finish();
      const msg=(err&&err.name==='NotAllowedError')?'not-allowed':(err.message||'mic-error');
      onError(msg);
    }
    return;
  }

  // المحرك الأوفلاين ما زال بيحمّل ومحتاجين نرجع للفولباك الذي أساسًا يحتاج نت.
  // لو لا توجد نت خالص، نفشل بسرعة برسالة واضحة بدل ما نستنى الـ watchdog كمل
  // على محاولة SpeechRecognition الذي مستحيل تنجح من غير نت.
  if(!navigator.onLine){
    finish();
    onError(whisperLoading?'offline-not-ready':'network');
    return;
  }

  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){finish();onError('no-engine');return;}
  let recog;
  try{
    recog=new SR();
  }catch(err){
    finish();onError('mic-error');return;
  }
  recog.lang='it-IT';recog.interimResults=false;recog.maxAlternatives=6;
  recog.onresult=(e)=>{
    const alts=[...e.results[0]].map(r=>r.transcript.trim());
    const conf=e.results[0][0].confidence;
    finish();
    onResult(alts,conf);
  };
  recog.onerror=(e)=>{
    finish();
    onError(e.error);
  };
  // Critical: without onend, a session that ends silently (no onresult, no
  // onerror — seen on some Android Chrome builds) leaves micBusy stuck
  // forever and every future tap silently does nothing.
  recog.onend=()=>{
    if(finished)return;
    finish();
    onError('no-speech');
  };
  try{
    recog.start();
  }catch(err){
    finish();
    onError('mic-error');
  }
}

function micErrorMessage(err){
  const m={
    'not-allowed':'⛔ لا توجد إذن ميكروفون',
    'no-speech':'ما سمعتش شيء، جرب مرة أخرى',
    'network':'خطأ في الشبكة',
    'no-engine':'⚠️ المتصفح هذا ليس بيدعم تعرف الصوت — جرب Chrome',
    'timeout':'⌛ ماحصلش رد، جرب مرة أخرى',
    'offline-not-ready':'📡 المحرك الأوفلاين ما زال بيحمّل من النت لأول مرة، ولازم يخلص التحميل مرة واحدة وأنت متوصل بالنت — وبعد هكذا هيشتغل من غيره ممتازًا'
  };
  let base=m[err]||'خطأ: '+err;
  // لو السبب الحقيقي وراء فشل الفولباك (الأونلاين) إن المحرك الأوفلاين ما زال
  // بيحمّل، نوضّح هذا للمستخدم لكي ميفهمهاش عطل دايم في الجهاز.
  if(whisperLoading&&!whisperReady&&(err==='network'||err==='no-speech'||err==='no-engine')){
    base+=' — المحرك الأوفلاين ما زال بيحمّل في الخلفية أول مرة، محتاج نت مرة واحدة لكن';
  }
  return base;
}


// ===== 4-SKILL SCORING LAYER =====
const SKILL_LABELS={pronunciation:'🎙️ النطق',listening:'👂 السمع',writing:'✍️ الكتابة',grammarOrder:'🧩 ترتيب الجملة'};
const skillScores={
  pronunciation:{attempts:0,totalScore:0,best:0,passed:0},
  listening:{attempts:0,totalScore:0,best:0,passed:0,replays:0,reveals:0},
  writing:{attempts:0,totalScore:0,best:0,passed:0,correctWords:0,totalWords:0},
  grammarOrder:{attempts:0,totalScore:0,best:0,passed:0,reveals:0}
};
function skillAvg(k){const s=skillScores[k];return s.attempts?Math.round(s.totalScore/s.attempts):0;}
function addSkillScore(skill,score,passed){
  const s=skillScores[skill]; if(!s)return;
  score=Math.max(0,Math.min(100,Math.round(score||0)));
  s.attempts++; s.totalScore+=score; s.best=Math.max(s.best,score); if(passed)s.passed++;
  saveSkillScores(); updateSkillScoreUI(); setTimeout(saveAppState,0);
}
function addWritingSkillScore(score,correct,total,passed){
  const s=skillScores.writing; s.correctWords+=correct||0; s.totalWords+=total||0; addSkillScore('writing',score,passed);
}
function resetSessionScores(){
  Object.keys(skillScores).forEach(k=>{Object.keys(skillScores[k]).forEach(x=>skillScores[k][x]=0);});
  saveSkillScores(); updateSkillScoreUI();
}
function saveSkillScores(){try{localStorage.setItem('parlaSkillScores',JSON.stringify(skillScores));}catch(e){}}
function loadSkillScores(){
  try{const raw=localStorage.getItem('parlaSkillScores'); if(!raw)return; const saved=JSON.parse(raw);
    Object.keys(skillScores).forEach(k=>{if(saved[k])Object.assign(skillScores[k],saved[k]);});
  }catch(e){}
}
function updateSkillScoreUI(){
  const map={skillPron:'pronunciation',skillListen:'listening',skillWrite:'writing',skillGrammar:'grammarOrder'};
  Object.keys(map).forEach(id=>{const el=document.getElementById(id); if(el)el.textContent=skillAvg(map[id])+'%';});
  updateSessionInsight();
}
function updateSessionInsight(){
  const el=document.getElementById('sessionInsight'); if(!el)return;
  const active=Object.keys(skillScores).filter(k=>skillScores[k].attempts>0);
  if(active.length<2){el.classList.remove('show');return;}
  const sorted=active.map(k=>({k,avg:skillAvg(k)})).sort((a,b)=>a.avg-b.avg);
  const weak=sorted[0],strong=sorted[sorted.length-1];
  el.innerHTML='تحليل سريع: أقوى مهارة عندك '+SKILL_LABELS[strong.k]+' ('+strong.avg+'%) — محتاجة تركيز أكتر: '+SKILL_LABELS[weak.k]+' ('+weak.avg+'%).';
  el.classList.add('show');
}
loadSkillScores();

function collectAppState(){
  return {
    version:8,
    unlockedSentenceIndices:wpUnlockedIndices||[],
    lessonMode:{idx:lIdx||0,studyMode:currentStudyMode||'speak',seqSub:seqSub||'it'},
    scores:skillScores
  };
}
function saveAppState(){
  try{
    localStorage.setItem('parlaAppStateV8',JSON.stringify(collectAppState()));
    localStorage.setItem('parlaUnlockedSentenceIndices',JSON.stringify(wpUnlockedIndices||[]));
    localStorage.setItem('parlaLessonProgress',JSON.stringify({idx:lIdx||0}));
    localStorage.setItem('parlaSkillScores',JSON.stringify(skillScores));
    const n=document.getElementById('autosaveNote'); if(n)n.textContent='✅ اتحفظ تلقائيًا';
  }catch(e){const n=document.getElementById('autosaveNote'); if(n)n.textContent='⚠️ الحفظ ليس متاح في المتصفح هذا';}
}
function loadAppState(){
  try{
    const raw=localStorage.getItem('parlaAppStateV8'); if(!raw)return;
    const st=JSON.parse(raw);
    if(Array.isArray(st.unlockedSentenceIndices))wpUnlockedIndices=[...new Set(st.unlockedSentenceIndices.map(Number).filter(i=>Number.isInteger(i)&&i>=0&&i<LESSON_SENTENCES.length))].sort((a,b)=>a-b);
    if(st.scores)Object.keys(skillScores).forEach(k=>{if(st.scores[k])Object.assign(skillScores[k],st.scores[k]);});
  }catch(e){}
}
function confirmResetAllProgress(){
  if(!confirm('متأكد؟ هذا هيمسح الجمل المفتوحة والسكور وكل التقدم المحفوظ.'))return;
  ['parlaAppStateV8','parlaUnlockedSentenceIndices','parlaLessonProgress','parlaSkillScores','parlaQuestionProgress','parlaCsProgress','parlaViewCounts'].forEach(k=>{try{localStorage.removeItem(k)}catch(e){}});
  wpUnlockedIndices=[]; resetSessionScores(); location.reload();
}
loadAppState();

// ===== CHAIN STATE: دراسة المحادثة/التمارين بتستعير محرك الدرس الإنفينيتي بالكامل =====
let wpChainActive=false;
let wpChainItOnly=false; // true أثناء دراسة المحادثة: نتخطى سب-تبويب "رتّب بالعربي" ونروح على الكتابة على طول
let wpUnlockedIndices=[]; // فهرس بالجمل الذي أنهيت كلماتها في تبويب نطق الكلمات — هذه الذي بتفتح في تبويب الدرس الإنفينيتي

// ===== CONVO STUDY: شرح+حل كل جملة في المحادثة قبل أسئلة السياق (يعيد استخدام محرك الدرس الإنفينيتي بالكامل) =====
let csActive=false;
let csSceneId=null;
let csDeck=[];
let csIdx=0;
let csGated=true;
let csCompletedScenes=new Set();
let currentListenQuestion=null;
let csGrammarQuestions=[];
let csGrammarQIdx=0;
let csGrammarQAnswered=false;

// ===== TOPIC DRILL: زرار "ابدأ الحل" جوه بوب أب أي موضوع قواعد — بيستعير نفس محرك
// دراسة المحادثة (نطق ← ترتيب إيطالي ← كتابة) لكن على جُمل أمثلة الموضوع نفسه، مش جُمل
// محادثة. المواضيع بتتفعّل واحد واحد هنا (مش أوتوماتيك) عشان نضيفها بالتدريج وإحنا متأكدين
// إن أمثلتها كفاية.
const TOPIC_DRILL_READY=['prep_di','prep_a','prep_da','prep_su','prep_con','prep_per','prep_tra_fra','partitivi','colori','numeri'];
let gmDrillActive=false;
let gmDrillTopicId=null;
let gmDrillDeck=[];
let gmDrillIdx=0;
// مواضيع فيها بلوكات "usage" (حروف الجر) بتستخدم وضع تعرّف بدل وضع إنتاج: شرح
// الجملة (من غير تلوين حرف الجر) بعدها سؤال "إيه الاستخدام؟" باختيارات ملوّنة.
let gmRecogActive=false;
let gmRecogTopicId=null;
let gmRecogDeck=[];
let gmRecogIdx=0;
let gmRecogAnswered=false;

// ===== VIEW COUNTS: عدد مرات رؤية كل كلمة/تصريف بمفرده — جوه التاب مش بره بس.
// فتح التاب/الموضوع بيسجل كل الكلمات/التصريفات الظاهرة فيه (لأنها كلها قدامك أول ما تفتح)،
// والدوس على كلمة/تصريف بعينه (تسمعه) بيسجله +1 إضافية لأنه تفاعل أقوى.
// رقم التاب من فوق = مجموع أرقام كل تصريفاته/كلماته من جوا (مش عدّاد منفصل). =====
let verbFormViewCounts={};  // key: infinitive::tab::form
let topicWordViewCounts={}; // key: topicId::word
let currentGmTopicId=null;  // الموضوع المفتوح دلوقتي في بوب أب القواعد، عشان نعرف نربط كليك الكلمة بيه

function loadViewCounts(){
  try{
    const raw=localStorage.getItem('parlaViewCounts');
    if(!raw)return;
    const d=JSON.parse(raw);
    verbFormViewCounts=d.verbForms||{};
    topicWordViewCounts=d.topicWords||{};
  }catch(e){}
}
function saveViewCounts(){
  try{localStorage.setItem('parlaViewCounts',JSON.stringify({verbForms:verbFormViewCounts,topicWords:topicWordViewCounts}));}catch(e){}
}
function bumpVerbFormView(infinitive,tab,person){
  if(!infinitive||!tab||!person)return;
  const key=infinitive+'::'+tab+'::'+person;
  verbFormViewCounts[key]=(verbFormViewCounts[key]||0)+1;
  saveViewCounts();
}
function getVerbFormViews(infinitive,tab,person){
  return verbFormViewCounts[infinitive+'::'+tab+'::'+person]||0;
}
function verbTabRows(v,tab){
  if(tab==='presente')return v.presente||[];
  if(tab==='passato')return (v.passato&&v.passato.rows)||[];
  if(tab==='imperfetto')return (v.imperfetto&&v.imperfetto.rows)||[];
  if(tab==='imperativo')return (v.imperativo&&v.imperativo.rows)||[];
  return [];
}
function getVerbTenseViews(infinitive,tab){ // مجموع تصريفات التاب ده كله — مش عدّاد مستقل
  const v=VERBS.find(x=>x.it===infinitive);
  if(!v)return 0;
  return verbTabRows(v,tab).reduce((s,r)=>s+getVerbFormViews(infinitive,tab,r.person),0);
}
function bumpTopicWordView(topicId,word){
  if(!topicId||!word)return;
  const key=topicId+'::'+word;
  topicWordViewCounts[key]=(topicWordViewCounts[key]||0)+1;
  saveViewCounts();
}
function getTopicWordViews(topicId,word){
  return topicWordViewCounts[topicId+'::'+word]||0;
}
function getTopicTotalViews(topicId){
  const prefix=topicId+'::';
  let sum=0;
  Object.keys(topicWordViewCounts).forEach(k=>{if(k.indexOf(prefix)===0)sum+=topicWordViewCounts[k];});
  return sum;
}
// كل الكلمات الإيطالية القابلة للتتبع جوه موضوع معيّن (من جداوله وأمثلته)
function topicWordKeys(topic){
  const words=new Set();
  (topic.blocks||[]).forEach(b=>{
    if(b.type==='table'){
      (b.rows||[]).forEach(r=>{
        (r||[]).forEach(cell=>{
          const txt=String(cell==null?'':cell);
          const hasArabic=/[\u0600-\u06FF]/.test(txt);
          const hasLatin=/[a-zA-Zàèéìòù]/.test(txt);
          if(hasArabic||!hasLatin)return;
          txt.split(',').forEach(part=>{
            const w=part.trim().replace(/\s*\([^)]*\)\s*/g,'').trim();
            if(w)words.add(w);
          });
        });
      });
    }
    if(Array.isArray(b.examples)){
      b.examples.forEach(ex=>{ if(ex&&ex.it)words.add(ex.it.trim()); });
    }
  });
  return [...words];
}
function bumpTopicAllWordsView(topic){
  topicWordKeys(topic).forEach(w=>bumpTopicWordView(topic.id,w));
}
const AUX_PERSON_HINTS={
  'ho':['Io'],'hai':['Tu'],'ha':['Lui','Lei'],'abbiamo':['Noi'],'avete':['Voi'],'hanno':['Loro'],
  'sono':['Io','Loro'],'sei':['Tu'],'è':['Lui','Lei'],'siamo':['Noi'],'siete':['Voi']
};
function matchVerbFormFromWord(wIt,infinitive,tab,auxIt){
  const v=VERBS.find(x=>x.it===infinitive);
  if(!v)return null;
  const rows=verbTabRows(v,tab);
  const wNorm=norm(wIt);
  let candidates=rows.filter(r=>norm(r.form)===wNorm);
  if(!candidates.length){
    const lastTok=(wIt||'').trim().split(/\s+/).pop()||'';
    candidates=rows.filter(r=>norm(r.form)===norm(lastTok));
  }
  if(!candidates.length){
    // للأزمنة المركبة (Passato Prossimo): الكلمة الجاية من الجملة غالبًا التصريف (participio)
    // بس من غير الفعل المساعد (لأننا بنفصلهم كـ'omesso' في scenes.js) — نقارن آخر كلمة
    // في صف الجدول (بعد ما نشيل الفعل المساعد منها) بدل الصف كله.
    candidates=rows.filter(r=>{
      const rLastTok=(r.form||'').trim().split(/\s+/).pop()||'';
      return norm(rLastTok)===wNorm;
    });
  }
  if(!candidates.length)return null;
  if(candidates.length>1&&auxIt){
    // أفعال Avere: نفس الـparticipio لكل الأشخاص (ho/hai/ha/abbiamo/avete/hanno visto) —
    // الفعل المساعد نفسه (اللي قبل الكلمة دي مباشرة في نفس الجملة) بيضيّق الاحتمالات.
    // ناخد آخر كلمة في auxIt عشان نتعامل مع صيغ منفية زي "non ha".
    const auxLastTok=(auxIt||'').trim().split(/\s+/).pop()||'';
    const hints=AUX_PERSON_HINTS[norm(auxLastTok)];
    if(hints){
      const narrowed=candidates.filter(r=>hints.some(h=>r.person.indexOf(h)===0));
      if(narrowed.length)candidates=narrowed;
    }
  }
  return candidates[0].person;
}
function passiveTrackWord(w,prevWord){
  const gTopicId=w.grammarId||findGrammarTopicId(w.it);
  const vInfo=findVerbFromNote(w.note);
  if(gTopicId){
    const topic=getGrammarTopic(gTopicId);
    if(topic){
      const known=topicWordKeys(topic).find(tw=>tw.toLowerCase()===w.it.toLowerCase());
      bumpTopicWordView(gTopicId,known||w.it);
    }
  }
  if(vInfo){
    const infinitive=VERBS[vInfo.idx].it;
    const auxIt=(prevWord&&prevWord.type==='omesso')?prevWord.it:null;
    const personMatch=matchVerbFormFromWord(w.it,infinitive,vInfo.tab,auxIt);
    if(personMatch)bumpVerbFormView(infinitive,vInfo.tab,personMatch);
  }
  return {gTopicId,vInfo};
}

function saveCsProgress(){
  try{
    localStorage.setItem('parlaCsProgress',JSON.stringify({
      sceneId:csSceneId, idx:csIdx, completed:[...csCompletedScenes]
    }));
  }catch(e){}
}
function loadCsProgress(){
  try{
    const raw=localStorage.getItem('parlaCsProgress');
    if(!raw)return {sceneId:null,idx:0,completed:[]};
    const st=JSON.parse(raw);
    return {
      sceneId:st.sceneId||null,
      idx:Number.isInteger(st.idx)?st.idx:0,
      completed:Array.isArray(st.completed)?st.completed:[]
    };
  }catch(e){return {sceneId:null,idx:0,completed:[]};}
}

function saveUnlockedSentences(){
  try{localStorage.setItem('parlaUnlockedSentenceIndices',JSON.stringify(wpUnlockedIndices));}catch(e){}
  setTimeout(saveAppState,0);
}
function loadUnlockedSentences(){
  try{
    const raw=localStorage.getItem('parlaUnlockedSentenceIndices');
    if(raw){
      const arr=JSON.parse(raw);
      if(Array.isArray(arr)){
        wpUnlockedIndices=[...new Set(arr.map(Number).filter(i=>Number.isInteger(i)&&i>=0&&i<LESSON_SENTENCES.length))].sort((a,b)=>a-b);
      }
    }
  }catch(e){}
  // بما إن تبويب "أسئلة السياق" بقى نظام منفصل ومبيفتحش جُمل الدرس الإنفينيتي (زي ما كان
  // بيحصل قبل كده مع نطق الكلمات)، هنا بنفتح كل جُمل lesson_io/tu/lui...loro من الأول
  // عشان الدرس الإنفينيتي يفضل شغال ومش يقفل للأبد.
  if(typeof LESSON_SENTENCES!=='undefined'&&wpUnlockedIndices.length<LESSON_SENTENCES.length){
    wpUnlockedIndices=[...Array(LESSON_SENTENCES.length).keys()];
    saveUnlockedSentences();
  }
}
loadUnlockedSentences();

function resetAllProgress(){
  resetSessionScores();
  try{localStorage.removeItem('parlaQuestionProgress');}catch(e){}
  try{localStorage.removeItem('parlaCsProgress');}catch(e){}
  qIdx=0;
  csCompletedScenes=new Set();
  csActive=false; wpChainActive=false; wpChainItOnly=false;
}


// ===== QUESTION PIPELINE: نظام أسئلة السياق (REPLY_QUESTIONS من questions.js) =====
// كل محادثة (scene) بتتقدَّم بمرحلتين: (1) دراسة كل جملة فيها — شرح + حل (نطق/ترتيب/كتابة)
// بيستعير محرك الدرس الإنفينيتي بالكامل (lDeck/lRender/setStudyMode/wpChain*) عشان الشرح
// والتمارين تبقى بالظبط زي الدرس الإنفينيتي — من غير ما نمسّ الـ90 جملة بتاعته أو نكرّرها.
// (2) بعد ما تتحل كل جُمل المحادثة، أسئلة "كيف ردّ X؟" على نفس المحادثة، وبعدها شاشة
// قواعد الجرامر الإجبارية، وبعدين المحادثة الجاية. شوف csStartScene/qRender تحت.
let qList=[], qIdx=0, qAnswered=false, qCorrectCount=0, qAttempts=0, qStreak=0, qBestStreak=0, qSceneList=[];

function qBuildList(){
  const sceneOrder={}; if(typeof SCENES!=='undefined')SCENES.forEach((sc,i)=>sceneOrder[sc.id]=i);
  const bank=(typeof REPLY_QUESTIONS!=='undefined')?REPLY_QUESTIONS:[];
  qList=[...bank].sort((a,b)=>{
    const sa=sceneOrder[a.sceneId]??999, sb=sceneOrder[b.sceneId]??999;
    if(sa!==sb)return sa-sb;
    return a.lineIndex-b.lineIndex;
  });
  qSceneList=[...new Set(qList.map(q=>q.sceneId))];
}

function loadQuestionProgress(){try{const raw=localStorage.getItem('parlaQuestionProgress'); if(!raw)return 0; const st=JSON.parse(raw); return Number.isInteger(st.idx)?Math.max(0,st.idx):0;}catch(e){return 0;}}
function saveQuestionProgress(){try{localStorage.setItem('parlaQuestionProgress',JSON.stringify({idx:qIdx}));}catch(e){} setTimeout(saveAppState,0);}

function qInit(){
  qBuildList();
  qIdx=Math.min(loadQuestionProgress(),Math.max(0,qList.length-1));
  qCorrectCount=0;qAttempts=0;qStreak=0;qBestStreak=0;
  clearInterval(convoExplainTimer);
  const ce=document.getElementById('convoExplain'); if(ce)ce.style.display='none';
  csCompletedScenes=new Set(loadCsProgress().completed);
  qRender();
}

function qUpdateScores(){
  document.getElementById('sAvg').textContent=qAttempts?Math.round(qCorrectCount/qAttempts*100)+'%':'0%';
  document.getElementById('sAll').textContent=qAttempts;
  document.getElementById('sBest').textContent=qBestStreak;
  document.getElementById('progFill').style.width=(qList.length?qIdx/qList.length*100:0)+'%';
  const curScene=qList[qIdx]?qList[qIdx].sceneId:null;
  const convoNum=curScene?qSceneList.indexOf(curScene)+1:0;
  document.getElementById('wpProgress').textContent=convoNum?('💬 المحادثة '+toArabicDigits(convoNum)+' من '+toArabicDigits(qSceneList.length)):'';
}

const Q_MSG_COLORS=6;
function speakerColorIndex(scene){
  // كل متكلم بياخد رقم لون ثابت: لو موجود في scene.speakers بناخد ترتيبه فيها
  // (عشان لو المشهد فيه 2 متكلمين بس يبقى دايمًا نفس اللونين)، غير كده hash بالاسم.
  const order=(scene&&Array.isArray(scene.speakers))?scene.speakers:[];
  return function(name){
    const idx=order.indexOf(name);
    if(idx!==-1)return idx%Q_MSG_COLORS;
    let h=0; for(let i=0;i<name.length;i++)h=(h*31+name.charCodeAt(i))>>>0;
    return h%Q_MSG_COLORS;
  };
}
function shuffleArr(arr){const a=[...arr];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}

function qRender(){
  document.getElementById('endScreen').classList.remove('show');
  const ce=document.getElementById('convoExplain'); if(ce)ce.style.display='none';
  if(qList.length===0){document.getElementById('lessonMode').style.display='none';document.getElementById('game').style.display='flex';document.getElementById('qCard').innerHTML='<div class="q-empty">لسه معملناش أسئلة لأي مشهد 🙂</div>';return;}
  if(qIdx>=qList.length){document.getElementById('lessonMode').style.display='none';qEnd();return;}
  const q=qList[qIdx];
  const isFirstOfScene=(qIdx===0)||qList[qIdx-1].sceneId!==q.sceneId;
  if(isFirstOfScene&&!csCompletedScenes.has(q.sceneId)){
    csStartScene(q.sceneId);
    return;
  }
  document.getElementById('lessonMode').style.display='none';
  document.getElementById('game').style.display='flex';
  qAnswered=false;

  const head=document.getElementById('qSceneHead');
  const scene=(typeof SCENES!=='undefined')?SCENES.find(s=>s.id===q.sceneId):null;
  if(q.lineIndex===1&&scene){
    head.style.display='block';
    head.innerHTML='<div class="q-scene-title">'+escHtml(scene.titleAr)+'</div><div class="q-scene-reg">'+escHtml(scene.register)+'</div>';
  } else { head.style.display='none'; head.innerHTML=''; }

  const ctx=document.getElementById('qContext');
  const priorLines=(scene&&Array.isArray(scene.lines))?scene.lines.slice(0,q.lineIndex):null;
  if(priorLines&&priorLines.length){
    const colorOf=speakerColorIndex(scene);
    ctx.className='q-context q-convo';
    ctx.onclick=null;
    ctx.innerHTML=priorLines.map((ln,i)=>{
      const c=colorOf(ln.speaker);
      const latest=(i===priorLines.length-1)?' q-msg-latest':'';
      return '<div class="q-msg q-msg-c'+c+latest+'" data-it="'+escHtml(ln.it)+'">'
        +'<div class="q-msg-speaker">'+escHtml(ln.speaker)+'</div>'
        +'<div class="q-msg-it">'+escHtml(ln.it)+'</div>'
        +'<div class="q-msg-ar">'+escHtml(ln.ar)+'</div></div>';
    }).join('');
    [...ctx.querySelectorAll('.q-msg')].forEach(el=>{
      el.onclick=()=>speakWord(el.getAttribute('data-it'));
    });
  } else {
    ctx.className='q-context';
    ctx.innerHTML='<div class="q-ctx-speaker">'+escHtml(q.contextSpeaker)+'</div>'
      +'<div class="q-ctx-it">'+escHtml(q.contextIt)+'</div>'
      +'<div class="q-ctx-ar">'+escHtml(q.contextAr)+'</div>';
    ctx.onclick=()=>speakWord(q.contextIt);
  }

  document.getElementById('qPrompt').textContent='('+q.speaker+') '+q.promptAr;

  const opts=shuffleArr(q.options);
  const optWrap=document.getElementById('qOptions');
  optWrap.innerHTML='';
  opts.forEach(opt=>{
    const btn=document.createElement('button');
    btn.className='q-opt';
    btn.textContent=opt.it;
    btn.onclick=()=>qSelect(opt,btn);
    optWrap.appendChild(btn);
  });
  document.getElementById('qFeedback').className='q-feedback';
  document.getElementById('qFeedback').innerHTML='';
  document.getElementById('qNextBtn').className='next-btn';
  qUpdateScores();
}

function qSelect(opt,btn){
  if(qAnswered)return;
  qAnswered=true;
  qAttempts++;
  const q=qList[qIdx];
  const allBtns=[...document.getElementById('qOptions').children];
  allBtns.forEach(b=>b.disabled=true);
  if(opt.correct){
    qCorrectCount++;qStreak++;qBestStreak=Math.max(qBestStreak,qStreak);
    btn.classList.add('ok');
    document.getElementById('qFeedback').className='q-feedback ok show';
    document.getElementById('qFeedback').innerHTML='✅ صح! — '+escHtml(q.correctAr);
    floatEmoji('✅');
  } else {
    qStreak=0;
    btn.classList.add('bad');
    const correctBtn=allBtns.find(b=>b.textContent===q.correctIt);
    if(correctBtn)correctBtn.classList.add('ok');
    document.getElementById('qFeedback').className='q-feedback bad show';
    document.getElementById('qFeedback').innerHTML='❌ '+escHtml(opt.why||'')+'<br><b>الصح:</b> '+escHtml(q.correctIt)+' — '+escHtml(q.correctAr);
  }
  document.getElementById('qNextBtn').className='next-btn show';
  qUpdateScores();
}

// ===== CONVO STUDY ORCHESTRATION =====
// شرح + حل كل جملة في المحادثة (نطق ← ترتيب إيطالي ← كتابة) قبل ما تبدأ أسئلة السياق
// بتاعة نفس المحادثة. بيستعير محرك الدرس الإنفينيتي بالكامل (لDeck/lRender/setStudyMode)
// عشان الشرح والتمارين تبقى بالظبط زي الدرس الإنفينيتي، من غير ما نمسّ الـ90 جملة بتاعته.
function csBuildDeck(sceneId){
  const scene=(typeof SCENES!=='undefined')?SCENES.find(s=>s.id===sceneId):null;
  if(!scene||!Array.isArray(scene.lines))return [];
  return scene.lines.map(ln=>({it:ln.it,ar:ln.ar,en:ln.en,pronoun:ln.speaker,words:ln.words}));
}

function csSetChromeVisible(visible){
  const st=document.querySelector('#lessonMode .study-tabs'); if(st)st.style.display=visible?'':'none';
  const fn=document.querySelector('#lessonContentWrap > .free-next-btn'); if(fn)fn.style.display=visible?'':'none';
  const arTab=document.getElementById('seqSubAr'); if(arTab)arTab.style.display=visible?'':'none';
}

function csStartScene(sceneId){
  csActive=true;
  csSceneId=sceneId;
  csDeck=csBuildDeck(sceneId);
  csGrammarQuestions=[];
  csGrammarQIdx=0;
  if(csDeck.length===0){ // مفيش بيانات للمشهد ده لأي سبب — متعطلش، كمّل عادي على الأسئلة
    csCompletedScenes.add(sceneId); saveCsProgress(); qRender(); return;
  }
  const saved=loadCsProgress();
  csIdx=(saved.sceneId===sceneId&&Number.isInteger(saved.idx))?Math.min(saved.idx,Math.max(0,csDeck.length-1)):0;
  csEnterDrillUI();
}

function csEnterDrillUI(){
  wpChainActive=true;
  wpChainItOnly=true;
  seqSub='it';
  const seqItTab=document.getElementById('seqSubIt'); if(seqItTab)seqItTab.classList.add('active');
  const seqArTab=document.getElementById('seqSubAr'); if(seqArTab)seqArTab.classList.remove('active');
  lDeck=csDeck;
  lIdx=csIdx;
  currentStudyMode='speak';
  hideLessonLocked();
  document.getElementById('game').style.display='none';
  const ceEl=document.getElementById('convoExplain'); if(ceEl)ceEl.style.display='none';
  document.getElementById('verbsMode').style.display='none';
  document.getElementById('lessonMode').style.display='flex';
  document.getElementById('lRestartBtn').style.display='none';
  csSetChromeVisible(false);
  lRender();
  csUpdateConvoCountLabel();
  csShowGate();
  window.scrollTo(0,0);
}

function csRenderTranscript(){
  const wrap=document.getElementById('csTranscript');
  if(!wrap)return;
  if(!csActive){wrap.innerHTML='';wrap.style.display='none';return;}
  const scene=(typeof SCENES!=='undefined')?SCENES.find(s=>s.id===csSceneId):null;
  const done=csDeck.slice(0,csIdx);
  if(!done.length){wrap.innerHTML='';wrap.style.display='none';return;}
  const colorOf=speakerColorIndex(scene);
  wrap.style.display='flex';
  wrap.innerHTML=done.map(s=>{
    const c=colorOf(s.pronoun);
    return '<div class="q-msg q-msg-c'+c+'" data-it="'+escHtml(s.it)+'">'
      +'<div class="q-msg-speaker">'+escHtml(s.pronoun)+'</div>'
      +'<div class="q-msg-it">'+escHtml(s.it)+'</div>'
      +'<div class="q-msg-ar">'+escHtml(s.ar)+'</div></div>';
  }).join('');
  [...wrap.querySelectorAll('.q-msg')].forEach(el=>{el.onclick=()=>speakWord(el.getAttribute('data-it'));});
}

// شاشة الشرح: نفس بريكداون الدرس الإنفينيتي بالظبط (lRender بناه أصلاً) لكن من غير
// أي عناصر تفاعلية (مايك/توكنز) لحد ما يدوس "ابتدي الحل".
function csShowGate(){
  csGated=true;
  csRenderTranscript();
  document.getElementById('lMicArea').style.display='none';
  document.getElementById('lTokens').style.display='none';
  document.getElementById('lSkipBtn').style.display='none';
  document.getElementById('lHeard').style.display='none';
  document.getElementById('lBadge').style.display='none';
  document.getElementById('lNextBtn').className='next-btn';
  document.getElementById('csStartBtn').style.display='block';
}
function csDismissGate(){
  csGated=false;
  document.getElementById('csStartBtn').style.display='none';
  // في وضع "الاختبار الشامل" بنستعير محرك gmRecog لعرض أسئلة التمييز، بس من غير
  // ما نحط gmRecogActive=true (عشان مانلخبطش أماكن تانية بتتفاعل مع العلم ده). فلازم
  // نتأكد هنا كمان إن السؤال الحالي في الاختبار الشامل نوعه "تمييز" قبل ما نستخدم
  // نفس شاشة الـMCQ بتاعته.
  const isComboRecog=gmComboActive && gmComboDeck[gmComboIdx] && gmComboDeck[gmComboIdx].type==='recog';
  if(gmRecogActive || isComboRecog){ gmRecogShowQuestion(); return; }
  document.getElementById('lMicArea').style.display='';
  document.getElementById('lHeard').style.display='';
  document.getElementById('lBadge').style.display='';
  setStudyMode('speak');
}

// كل جُمل الأمثلة الموجودة في موضوع القواعد (من كل البلوكات اللي فيها examples)، من غير تكرار
function topicExampleDeck(topic){
  const seen=new Set();
  const deck=[];
  (topic.blocks||[]).forEach(b=>{
    if(Array.isArray(b.examples)){
      b.examples.forEach(ex=>{
        if(!ex||!ex.it||!ex.ar)return;
        if(ex.it.trim().split(/\s+/).length<2)return; // كلمة مفردة مش جملة — متتحلش زي جملة
        const key=ex.it.toLowerCase();
        if(seen.has(key))return;
        seen.add(key);
        const targetForm=ex.form||b.form||null; // شكل حرف الجر بالظبط في المثال ده (بيفرق مع del/nel/sul... المدمجة)
        const targetColor=ex.color||b.color||null; // لون الاستخدام ده تحديدًا (مش لون عام للموضوع كله)
        deck.push({it:ex.it,ar:ex.ar,en:ex.en||'',pronoun:topic.it,words:buildWordsFromSentence(ex.it,topic,targetForm,targetColor)});
      });
    }
  });
  return deck;
}
// بريكداون بسيط بيتولّد تلقائي من نص الجملة (مفيش بيانات كلمة-كلمة زي scenes.js هنا) —
// لو الجملة جايه من بلوك "usage" (زي حروف الجر) بنستخدم الـform/color بتاعت الاستخدام
// ده بالظبط عشان الكلمة تتلوّن بنفس لون النُطاق اللي شرحها منه، مش لون عشوائي. باقي
// حروف الجر/الأدوات بتتعلّم "omesso" زي العادة، والكلمة اللي من نفس الموضوع بتاخد
// grammarId بتاعه عشان تترصد في عداد الرؤية، والباقي كلمات عادية بس قابلة للنطق.
function buildWordsFromSentence(sentenceIt,topic,targetForm,targetColor){
  const topicWordsLc=topicWordKeys(topic).map(w=>w.toLowerCase());
  const targetLc=targetForm?targetForm.toLowerCase():null;
  let targetMatched=false;
  return sentenceIt.split(/\s+/).map(tok=>{
    const clean=tok.replace(/^[.,!?;:'"]+|[.,!?;:'"]+$/g,'');
    if(!clean)return {it:tok,ar:'',type:'altro',note:null};
    if(targetLc&&!targetMatched&&clean.toLowerCase()===targetLc){
      targetMatched=true;
      const w={it:clean,ar:'',type:'preposizione',grammarId:topic.id,note:null};
      if(targetColor)w.color=targetColor;
      return w;
    }
    if(isAutoSkipWord(clean)){
      return {it:clean,ar:'',type:'omesso',skipReason:'ausiliare',note:null};
    }
    if(topicWordsLc.includes(clean.toLowerCase())){
      return {it:clean,ar:'',type:'altro',grammarId:topic.id,note:null};
    }
    return {it:clean,ar:'',type:'altro',note:null};
  });
}
function gmStartDrill(topicId){
  const topic=getGrammarTopic(topicId);
  if(!topic){alert('⚠️ الموضوع ده مش موجود في بيانات القواعد.');return;}
  if(!TOPIC_DRILL_READY.includes(topicId))return; // الزرار أصلاً بيبقى مخفي في الحالة دي
  const isRecognition=(topic.blocks||[]).some(b=>b.type==='usage');
  if(csActive){
    // مذاكرة محادثة شغالة دلوقتي — نوقفها مؤقتًا (تقدمها محفوظ أصلاً) عشان محرك السلسلة
    // مايتلخبطش بين الاتنين، وهترجعلها تكمل عادي لما ترجع لتبويب أسئلة السياق.
    csActive=false; wpChainActive=false; wpChainItOnly=false;
  }
  try{
    if(isRecognition){
      gmRecogDeck=topicRecognitionDeck(topic);
      if(gmRecogDeck.length===0){
        alert('⚠️ لسه مفيش أمثلة كفاية للموضوع ده عشان نبني تمرين منه.');
        return;
      }
      gmRecogTopicId=topicId;
      gmRecogIdx=0;
      closeGrammarModal();
      gmRecogEnter();
      return;
    }
    gmDrillDeck=topicExampleDeck(topic);
    if(gmDrillDeck.length===0){
      alert('⚠️ لسه مفيش أمثلة كفاية للموضوع ده عشان نبني تمرين منه.');
      return;
    }
    gmDrillTopicId=topicId;
    gmDrillIdx=0;
    closeGrammarModal();
    gmEnterDrillUI();
  }catch(e){
    // لو حصل أي خطأ غير متوقع في بناء التمرين، منسيبش الزرار يفضل "ميعملش حاجة" من غير تفسير.
    console.error('gmStartDrill failed for topic', topicId, e);
    alert('⚠️ حصلت مشكلة وإحنا بنجهّز التمرين. جرّب تاني، ولو المشكلة استمرت بلّغنا.');
  }
}
// كل جُمل أمثلة كل استخدامات حرف الجر (مش لون واحد للموضوع كله — كل جملة بلون
// استخدامها الحقيقي)، من غير تلوين حرف الجر نفسه (عشان مايفضحش إجابة السؤال).
function topicRecognitionDeck(topic){
  const usageBlocks=(topic.blocks||[]).filter(b=>b.type==='usage');
  const seen=new Set();
  const deck=[];
  usageBlocks.forEach(b=>{
    (b.examples||[]).forEach(ex=>{
      if(!ex||!ex.it||!ex.ar)return;
      const key=ex.it.toLowerCase();
      if(seen.has(key))return;
      seen.add(key);
      const targetForm=ex.form||b.form||null;
      // لو الجملة معاها كسر كلمات جاهز (زي أمثلة "di" الخمسين) بنستخدمه زي ما هو —
      // فيه ترجمة ومعنى نحوي لكل كلمة. من غير كده بنبني كسر تلقائي بسيط (تلوين
      // حرف الجر بس، من غير ترجمة/شرح للكلمات التانية).
      const words=(ex.words&&ex.words.length)?ex.words:buildWordsFromSentence(ex.it,topic,targetForm,null);
      deck.push({
        it:ex.it,ar:ex.ar,en:ex.en||'',pronoun:topic.it,
        words,
        usageTitle:b.title,usageColor:b.color,usageDescription:b.description
      });
    });
  });
  // مهم: من غير ما نخلط الترتيب، الأسئلة كانت بتيجي مجمّعة حسب كل استخدام (كل 5
  // أمثلة الاستخدام الأول ورا بعض، بعدين كل 5 أمثلة الاستخدام التاني...)، فكان
  // بيحس اليوزر إن نفس الإجابة بتتكرر أربع خمس مرات ورا بعض. بنخلط الديك كله
  // مرة واحدة هنا عشان الاستخدامات تيجي متنوعة من أول سؤال.
  return shuffle(deck);
}
function recognitionQuestionOptions(item,topic,seed){
  const usageBlocks=(topic.blocks||[]).filter(b=>b.type==='usage');
  // بنعرض كل استخدامات حرف الجر كخيارات (مش 4 بس)، عشان اليوزر يشوف الصورة
  // الكاملة كل مرة ويقارن بينهم، مش يحفظ إجابة من مجموعة صغيرة بتتكرر.
  const pool=shuffle(usageBlocks.map(b=>({title:b.title,color:b.color})));
  const colorMap={}; pool.forEach(o=>{colorMap[o.title]=o.color;});
  const correctIdx=pool.findIndex(o=>o.title===item.usageTitle);
  const bal=balanceCorrect(pool.map(o=>o.title),correctIdx<0?0:correctIdx,seed);
  return {options:bal.options.map(t=>({title:t,color:colorMap[t]})),answer:bal.correct};
}
function gmRecogEnter(){
  gmRecogActive=true;
  lDeck=gmRecogDeck;
  lIdx=gmRecogIdx;
  currentStudyMode='speak'; // بس عشان lRender يبني الهيدر والبريكداون — مفيش مايك هيظهر أصلاً
  hideLessonLocked();
  document.getElementById('game').style.display='none';
  const ceEl=document.getElementById('convoExplain'); if(ceEl)ceEl.style.display='none';
  // مهم: بندخل هنا غالبًا من تبويب "مكتبة السكربت" (verbsMode لسه ظاهر) — لازم نخفيه
  // صراحة، وإلا هيفضل قاعد على الشاشة وتبويب الدرس اللي فتحناه هيتعرض تحته من غير
  // ما اليوزر يشوفه، فيحس إن الزرار "مقفلش حاجة" وبس اتقفل زي ما لو دس على X.
  document.getElementById('verbsMode').style.display='none';
  document.getElementById('lessonMode').style.display='flex';
  document.getElementById('lRestartBtn').style.display='none';
  csSetChromeVisible(false);
  // نص السؤال الافتراضي اتكتب أصلًا عشان حروف الجر البسيطة — لو الموضوع مش حرف جر
  // (زي أدوات التبعيض) بنستخدم نص مخصص له بدل "إيه استخدام حرف الجر هنا؟".
  const topic=getGrammarTopic(gmRecogTopicId);
  const lbl=document.getElementById('gmRecogQuestionLabel');
  if(lbl)lbl.textContent=(topic&&topic.recogQuestionLabel)?topic.recogQuestionLabel:'🎨 إيه استخدام حرف الجر هنا؟';
  lRender();
  csShowGate();
  window.scrollTo(0,0);
}
function gmRecogShowQuestion(){
  gmRecogAnswered=false;
  const item=gmRecogDeck[gmRecogIdx];
  const topic=getGrammarTopic(gmRecogTopicId);
  const seed=[...item.it].reduce((s,ch)=>s+ch.charCodeAt(0),0)+gmRecogIdx;
  const q=recognitionQuestionOptions(item,topic,seed);
  gmRecogCorrectIdx=q.answer;
  const box=document.getElementById('gmRecogQuiz');
  box.style.display='block';
  document.getElementById('gmRecogOptions').innerHTML=q.options.map((o,i)=>{
    return '<button class="q-opt" style="background:'+o.color+'22;border-color:'+o.color+';color:'+o.color+'" onclick="gmRecogAnswer('+i+')">'+escHtml(o.title)+'</button>';
  }).join('');
  document.getElementById('gmRecogFeedback').innerHTML='';
  const nextBtn=document.getElementById('lNextBtn');
  nextBtn.className='next-btn';
}
let gmRecogCorrectIdx=null;
function gmRecogAnswer(i){
  if(gmRecogAnswered)return;
  gmRecogAnswered=true;
  const item=gmRecogDeck[gmRecogIdx];
  const btns=[...document.getElementById('gmRecogOptions').children];
  btns.forEach(b=>b.disabled=true);
  const ok=i===gmRecogCorrectIdx;
  if(ok){
    btns[i].classList.add('ok');btns[i].style.background='#00e8961a';btns[i].style.borderColor='var(--green)';
    floatEmoji('✅');
  } else {
    btns[i].classList.add('bad');btns[i].style.background='#ff4d6d1a';btns[i].style.borderColor='var(--red)';
    if(btns[gmRecogCorrectIdx]){
      btns[gmRecogCorrectIdx].classList.add('ok');
      btns[gmRecogCorrectIdx].style.background='#00e8961a';
      btns[gmRecogCorrectIdx].style.borderColor='var(--green)';
    }
  }
  document.getElementById('gmRecogFeedback').innerHTML=(ok?'✅ صح! ':'❌ ')+escHtml(item.usageDescription||'');
  bumpTopicWordView(gmRecogTopicId,item.it);
  const nextBtn=document.getElementById('lNextBtn');
  nextBtn.className='next-btn show';
  // في وضع "الاختبار الشامل" بيبقى فيه أكتر من سؤال قدامنا حتى لو ده آخر واحد من
  // نوع "التمييز" في نفس الديك — النص والزرار بيتحسبوا حسب الاختبار كله مش الديك
  // الفرعي ده بس.
  if(gmComboActive){
    nextBtn.textContent=(gmComboIdx+1>=gmComboDeck.length)?'أنهيت الاختبار 🏆':'السؤال الجاي ←';
    nextBtn.onclick=gmComboNext;
  }else{
    nextBtn.textContent=(gmRecogIdx+1>=gmRecogDeck.length)?'أنهيت المراجعة 🏆':'الجملة الجاية ←';
    nextBtn.onclick=gmRecogNext;
  }
}
function gmRecogNext(){
  if(!gmRecogAnswered)return;
  gmRecogIdx++;
  document.getElementById('gmRecogQuiz').style.display='none';
  if(gmRecogIdx>=gmRecogDeck.length){ gmRecogFinish(); return; }
  lIdx=gmRecogIdx;
  lRender();
  csShowGate();
}
function gmRecogFinish(){
  gmRecogActive=false;
  document.getElementById('gmRecogQuiz').style.display='none';
  document.getElementById('lessonMode').style.display='none';
  // رجّعنا مكتبة السكربت تظهر تاني (هي اللي كانت وراء البوب أب أصلاً قبل ما ندخل التمرين).
  document.getElementById('verbsMode').style.display='flex';
  csSetChromeVisible(true);
  // نفس ملحوظة csFinishScene/gmFinishDrill — كنا مستعيرين lDeck/lIdx لعرض أسئلة
  // التعرّف، لازم نرجّعهم فاضيين عشان الدرس الإنفينيتي الحقيقي يرجع طبيعي.
  lDeck=[];lIdx=0;
  const topicId=gmRecogTopicId;
  gmRecogTopicId=null;
  openGrammarModal(topicId);
}

// ===== FILL-BLANK: نوع سؤال مختلف عن "التعرّف" — بدل ما نعرض الجملة وحرف الجر
// ملوّن قدامك وتختار استخدامه، هنا الجملة بتتعرض وفيها فراغ مكان حرف الجر/الأداة،
// وانت اللي تختار الشكل الصح (استرجاع/إنتاج، مش تمييز بس). بيشتغل على أي موضوع
// مُدرَج في TOPIC_FILLBLANK_READY، وبيستعير نفس ديك "التعرّف" (topicRecognitionDeck)
// لأنه أصلاً فيه كل حاجة محتاجينها (الجملة، الترجمة، والكلمة المستهدفة معلّمة).
const TOPIC_FILLBLANK_READY=['partitivi','colori'];
const TOPIC_COMBO_READY=['partitivi','colori','numeri'];
let gmFillActive=false;
let gmFillTopicId=null;
let gmFillDeck=[];
let gmFillIdx=0;
let gmFillOptions=[];
let gmFillCorrectIdx=null;
let gmFillCurrentOptions=[];
let gmFillAnswered=false;

function capitalizeForm(s){
  return s.charAt(0).toUpperCase()+s.slice(1).toLowerCase();
}
// بيرجّع {prefix, noun} لو الكلمة فيها إليجن (زي dell'acqua) وإلا null.
function splitElidedForm(wordIt){
  const i=wordIt.indexOf("'");
  if(i<0)return null;
  return {prefix:wordIt.slice(0,i+1), noun:wordIt.slice(i+1)};
}
function targetWordOfItem(item){
  return item.words.find(w=>w.type==='preposizione');
}
// شكل العرض في الاختيارات: لو فيه إليجن بنورّي بادئة الإليجن بس (Dell')، عشان
// الاسم اللي بعدها (اللي بيدّي تلميح الجنس/العدد) يفضل ظاهر في الجملة نفسها.
function correctFormLabel(wordIt){
  const el=splitElidedForm(wordIt);
  if(el)return capitalizeForm(el.prefix);
  return capitalizeForm(wordIt);
}
// نص الجملة بالفراغ: بنسيب كل الكلمات زي ما هي، وبس الكلمة المستهدفة بتتبدل
// بفراغ — لو فيها إليجن، الفراغ بياخد مكان البادئة بس ويفضل الاسم بعده ظاهر
// (زي "___'acqua")، عشان السؤال يفضل قابل للحل من غير ما نفقد التلميح النحوي.
function blankSentenceForItem(item){
  const target=targetWordOfItem(item);
  if(!target)return item.it;
  return item.words.map(w=>{
    if(w!==target)return w.it;
    const el=splitElidedForm(w.it);
    if(el)return '___'+el.prefix.slice(-1)+el.noun; // ___'acqua
    return '______';
  }).join(' ');
}
function topicFillFormPool(deck){
  const forms=new Set();
  deck.forEach(item=>{
    const w=targetWordOfItem(item);
    if(w)forms.add(correctFormLabel(w.it));
  });
  return [...forms];
}
function gmFillBtnClicked(){
  gmStartFillBlank(currentGmTopicId);
}
function gmStartFillBlank(topicId){
  const topic=getGrammarTopic(topicId);
  if(!topic){alert('⚠️ الموضوع ده مش موجود في بيانات القواعد.');return;}
  if(!TOPIC_FILLBLANK_READY.includes(topicId))return; // الزرار أصلاً بيبقى مخفي في الحالة دي
  if(csActive){
    csActive=false; wpChainActive=false; wpChainItOnly=false;
  }
  try{
    const deck=topicRecognitionDeck(topic);
    if(deck.length===0){
      alert('⚠️ لسه مفيش أمثلة كفاية للموضوع ده عشان نبني تمرين فراغ منه.');
      return;
    }
    gmFillDeck=deck;
    gmFillOptions=topicFillFormPool(deck);
    if(gmFillOptions.length<2){
      alert('⚠️ الموضوع ده مالوش أشكال كفاية عشان سؤال فراغ (محتاجين خيارين على الأقل).');
      return;
    }
    gmFillTopicId=topicId;
    gmFillIdx=0;
    closeGrammarModal();
    gmFillEnter();
  }catch(e){
    console.error('gmStartFillBlank failed for topic', topicId, e);
    alert('⚠️ حصلت مشكلة وإحنا بنجهّز سؤال الفراغ. جرّب تاني، ولو المشكلة استمرت بلّغنا.');
  }
}
function gmFillEnter(){
  gmFillActive=true;
  document.getElementById('game').style.display='none';
  const ceEl=document.getElementById('convoExplain'); if(ceEl)ceEl.style.display='none';
  document.getElementById('lessonMode').style.display='none';
  document.getElementById('verbsMode').style.display='none';
  document.getElementById('gmFillMode').style.display='flex';
  csSetChromeVisible(false);
  const topic=getGrammarTopic(gmFillTopicId);
  const lbl=document.getElementById('fillTopicLabel');
  if(lbl)lbl.textContent=(topic&&topic.fillQuestionLabel)?topic.fillQuestionLabel:'🧩 اختر الشكل الصح للفراغ';
  gmFillShowQuestion();
  window.scrollTo(0,0);
}
function gmFillShowQuestion(){
  gmFillAnswered=false;
  const item=gmFillDeck[gmFillIdx];
  const target=targetWordOfItem(item);
  const correctLabel=target?correctFormLabel(target.it):null;
  const seed=[...item.it].reduce((s,ch)=>s+ch.charCodeAt(0),0)+gmFillIdx;
  // لو مجموعة الأشكال كلها صغيرة (زي أدوات التبعيض السبعة) بنعرضها كاملة —
  // هي نفسها القاعدة النحوية. لو كبيرة (زي الألوان بـ15 لون مختلف)، عرض الكل
  // في كل سؤال بيحوّل التمرين لحفظ مفردات عشوائي بدل اختبار مركّز؛ فبنعيّن حد
  // أقصى معقول للاختيارات ونسحب عيّنة عشوائية (فيها الإجابة الصح دايمًا).
  const MAX_FILL_OPTIONS=7;
  let questionPool=gmFillOptions;
  if(gmFillOptions.length>MAX_FILL_OPTIONS){
    const others=shuffle(gmFillOptions.filter(o=>o!==correctLabel));
    questionPool=shuffle([correctLabel, ...others.slice(0,MAX_FILL_OPTIONS-1)]);
  }
  const correctIdx=Math.max(0,questionPool.indexOf(correctLabel));
  const bal=balanceCorrect(questionPool,correctIdx,seed);
  gmFillCorrectIdx=bal.correct;
  gmFillCurrentOptions=bal.options;

  document.getElementById('fillProgFill').style.width=Math.round((gmFillIdx/gmFillDeck.length)*100)+'%';
  document.getElementById('fillProgressLbl').textContent='سؤال '+(gmFillIdx+1)+' من '+gmFillDeck.length;
  document.getElementById('fillPrompt').textContent=blankSentenceForItem(item);
  document.getElementById('fillArContext').textContent=item.ar;
  document.getElementById('fillOptions').innerHTML=bal.options.map((o,i)=>
    '<button class="q-opt" onclick="gmFillAnswer('+i+')">'+escHtml(o)+'</button>'
  ).join('');
  document.getElementById('fillFeedback').innerHTML='';
  document.getElementById('fillTtsBtn').style.display='none';
  const nextBtn=document.getElementById('fillNextBtn');
  nextBtn.className='next-btn';
}
function gmFillAnswer(i){
  if(gmFillAnswered)return;
  gmFillAnswered=true;
  const item=gmFillDeck[gmFillIdx];
  const btns=[...document.getElementById('fillOptions').children];
  btns.forEach(b=>b.disabled=true);
  const ok=i===gmFillCorrectIdx;
  if(ok){
    btns[i].classList.add('ok');btns[i].style.background='#00e8961a';btns[i].style.borderColor='var(--green)';
    floatEmoji('✅');
  } else {
    btns[i].classList.add('bad');btns[i].style.background='#ff4d6d1a';btns[i].style.borderColor='var(--red)';
    if(btns[gmFillCorrectIdx]){
      btns[gmFillCorrectIdx].classList.add('ok');
      btns[gmFillCorrectIdx].style.background='#00e8961a';
      btns[gmFillCorrectIdx].style.borderColor='var(--green)';
    }
  }
  document.getElementById('fillFeedback').innerHTML=(ok?'✅ صح! ':'❌ الصح: '+escHtml(gmFillCurrentOptions[gmFillCorrectIdx])+'. ')+escHtml(item.usageDescription||'')+'<br>الجملة كاملة: <span style="direction:ltr;display:inline-block">'+escHtml(item.it)+'</span>';
  document.getElementById('fillTtsBtn').style.display='block';
  bumpTopicWordView(gmFillTopicId,item.it);
  const nextBtn=document.getElementById('fillNextBtn');
  nextBtn.className='next-btn show';
  nextBtn.textContent=(gmFillIdx+1>=gmFillDeck.length)?'أنهيت المراجعة 🏆':'السؤال الجاي ←';
}
function gmFillSpeak(){
  const item=gmFillDeck[gmFillIdx];
  if(item)speakWord(item.it);
}
function gmFillNext(){
  if(!gmFillAnswered)return;
  gmFillIdx++;
  if(gmFillIdx>=gmFillDeck.length){ gmFillFinish(); return; }
  gmFillShowQuestion();
}
function gmFillFinish(){
  gmFillActive=false;
  document.getElementById('gmFillMode').style.display='none';
  document.getElementById('verbsMode').style.display='flex';
  csSetChromeVisible(true);
  const topicId=gmFillTopicId;
  gmFillTopicId=null;
  openGrammarModal(topicId);
}

// ===== COMBO (اختبار شامل): بيخلط نوعين سؤال مختلفين خالص في ديك واحد بالتبادل —
// "تمييز" (زي gmRecog، تعرّف على استخدام/شكل الأداة) و"تحويل" (جملة مفرد، اختار
// صيغة الجمع الكاملة الصح). محتاج بيانات transformPairs على الموضوع نفسه عشان يشتغل،
// فمش كل موضوع هيقدر يعرض الزرار ده (زي ما TOPIC_DRILL_READY وTOPIC_FILLBLANK_READY
// كل واحد ليه شرطه). بيستعير محرك gmRecog* الموجود لجزء "التمييز" (نفس الفانكشنز،
// بس بنحط gmRecogDeck=[العنصر الحالي] وgmRecogIdx=0 قبل ما نناديها) عشان مانكررش
// كود التصحيح/الألوان، وبنعمل شاشة مستقلة بسيطة لجزء "التحويل".
let gmComboActive=false;
let gmComboTopicId=null;
let gmComboDeck=[]; // كل عنصر: {type:'recog', item} أو {type:'transform', item}
let gmComboIdx=0;

function buildComboDeck(topic){
  if(!topic.transformPairs || topic.transformPairs.length===0)return null;
  const recogFull=shuffle(topicRecognitionDeck(topic));
  const transformItems=shuffle(topic.transformPairs.map(p=>({...p})));
  // بنوازن العدد في الاتجاهين — مش بس نقصّ التمييز لعدد التحويل، لازم كمان نقصّ
  // التحويل لعدد التمييز لو هو الأقل (زي numeri: 15 تمييز مقابل 29 تحويل) — وإلا
  // آخر الاختبار هيبقى كله نوع واحد لوحده من غير تداخل، عكس المطلوب بالظبط.
  const balancedLen=Math.min(recogFull.length, transformItems.length);
  const recogSlice=recogFull.slice(0, balancedLen);
  const transformSlice=transformItems.slice(0, balancedLen);
  const merged=[];
  for(let i=0;i<balancedLen;i++){
    merged.push({type:'recog', item:recogSlice[i]});
    merged.push({type:'transform', item:transformSlice[i]});
  }
  return merged;
}
function gmComboBtnClicked(){
  gmStartCombo(currentGmTopicId);
}
function gmStartCombo(topicId){
  const topic=getGrammarTopic(topicId);
  if(!topic){alert('⚠️ الموضوع ده مش موجود في بيانات القواعد.');return;}
  if(!TOPIC_COMBO_READY.includes(topicId))return;
  if(csActive){
    csActive=false; wpChainActive=false; wpChainItOnly=false;
  }
  try{
    const deck=buildComboDeck(topic);
    if(!deck||deck.length===0){
      alert('⚠️ لسه مفيش بيانات كفاية عشان نبني اختبار شامل للموضوع ده.');
      return;
    }
    gmComboDeck=deck;
    gmComboIdx=0;
    gmComboTopicId=topicId;
    closeGrammarModal();
    gmComboEnter();
  }catch(e){
    console.error('gmStartCombo failed for topic', topicId, e);
    alert('⚠️ حصلت مشكلة وإحنا بنجهّز الاختبار الشامل. جرّب تاني، ولو المشكلة استمرت بلّغنا.');
  }
}
function gmComboEnter(){
  gmComboActive=true;
  document.getElementById('game').style.display='none';
  const ceEl=document.getElementById('convoExplain'); if(ceEl)ceEl.style.display='none';
  document.getElementById('verbsMode').style.display='none';
  csSetChromeVisible(false);
  gmComboShowQuestion();
  window.scrollTo(0,0);
}
function gmComboShowQuestion(){
  const entry=gmComboDeck[gmComboIdx];
  if(entry.type==='recog'){
    document.getElementById('gmTransformMode').style.display='none';
    document.getElementById('lessonMode').style.display='flex';
    // بنستعير محرك gmRecog كامل — الحيلة إن الديك بتاعه بقى عنصر واحد بس (العنصر
    // الحالي في الاختبار الشامل)، فكل فانكشناته (التلوين، الفيدباك، إلخ) تشتغل
    // عادي من غير أي تعديل فيها.
    gmRecogDeck=[entry.item];
    gmRecogIdx=0;
    gmRecogTopicId=gmComboTopicId;
    lDeck=gmRecogDeck; lIdx=0;
    currentStudyMode='speak';
    hideLessonLocked();
    document.getElementById('lRestartBtn').style.display='none';
    const lbl=document.getElementById('gmRecogQuestionLabel');
    const topic=getGrammarTopic(gmComboTopicId);
    if(lbl)lbl.textContent=(topic&&topic.recogQuestionLabel)?topic.recogQuestionLabel:'🎨 إيه استخدام حرف الجر هنا؟';
    lRender();
    csShowGate();
  } else {
    document.getElementById('lessonMode').style.display='none';
    document.getElementById('gmTransformMode').style.display='flex';
    const topic=getGrammarTopic(gmComboTopicId);
    const qLbl=document.getElementById('transformQuestionLabel');
    if(qLbl)qLbl.textContent=(topic&&topic.transformQuestionLabel)?topic.transformQuestionLabel:'🔄 لو أكتر من واحد، تقول إيه؟';
    const sLbl=document.getElementById('transformSingLabel');
    if(sLbl)sLbl.textContent=(topic&&topic.transformSingLabel)?topic.transformSingLabel:'الجملة الأصلية:';
    gmComboShowTransformQuestion(entry.item);
  }
  document.getElementById('comboProgFill') && (document.getElementById('comboProgFill').style.width=Math.round((gmComboIdx/gmComboDeck.length)*100)+'%');
  const plbl=document.getElementById('comboProgressLbl');
  if(plbl)plbl.textContent='سؤال '+(gmComboIdx+1)+' من '+gmComboDeck.length;
}
let gmComboTransformAnswered=false;
let gmComboTransformCorrectIdx=null;
let gmComboTransformOptions=[];
function gmComboShowTransformQuestion(item){
  gmComboTransformAnswered=false;
  // بيانات كل سؤال دايمًا بتحط الإجابة الصح في العنصر الأول من options — لو
  // عرضناها زي ما هي كده، الزرار الأول هيبقى هو الصح في كل الأسئلة من غير استثناء!
  // لازم نخلط الترتيب هنا وقت العرض، مش وقت بناء البيانات.
  const seed=[...item.sing].reduce((s,ch)=>s+ch.charCodeAt(0),0);
  const bal=balanceCorrect(item.options,item.correctIdx,seed);
  gmComboTransformOptions=bal.options;
  gmComboTransformCorrectIdx=bal.correct;
  document.getElementById('transformSingPrompt').textContent=item.sing;
  document.getElementById('transformSingAr').textContent=item.singAr;
  document.getElementById('transformOptions').innerHTML=gmComboTransformOptions.map((o,i)=>
    '<button class="q-opt" style="direction:ltr;text-align:left" onclick="gmComboAnswerTransform('+i+')">'+escHtml(o)+'</button>'
  ).join('');
  document.getElementById('transformFeedback').innerHTML='';
  const nextBtn=document.getElementById('transformNextBtn');
  nextBtn.className='next-btn';
}
function gmComboAnswerTransform(i){
  if(gmComboTransformAnswered)return;
  gmComboTransformAnswered=true;
  const entry=gmComboDeck[gmComboIdx];
  const item=entry.item;
  const btns=[...document.getElementById('transformOptions').children];
  btns.forEach(b=>b.disabled=true);
  const ok=i===gmComboTransformCorrectIdx;
  if(ok){
    btns[i].classList.add('ok');btns[i].style.background='#00e8961a';btns[i].style.borderColor='var(--green)';
    floatEmoji('✅');
  } else {
    btns[i].classList.add('bad');btns[i].style.background='#ff4d6d1a';btns[i].style.borderColor='var(--red)';
    if(btns[gmComboTransformCorrectIdx]){
      btns[gmComboTransformCorrectIdx].classList.add('ok');
      btns[gmComboTransformCorrectIdx].style.background='#00e8961a';
      btns[gmComboTransformCorrectIdx].style.borderColor='var(--green)';
    }
  }
  document.getElementById('transformFeedback').innerHTML=(ok?'✅ صح! ':'❌ الصح: '+escHtml(gmComboTransformOptions[gmComboTransformCorrectIdx])+'. ')+escHtml(item.correctAr||'');
  const nextBtn=document.getElementById('transformNextBtn');
  nextBtn.className='next-btn show';
  nextBtn.textContent=(gmComboIdx+1>=gmComboDeck.length)?'أنهيت الاختبار 🏆':'السؤال الجاي ←';
}
function gmComboNext(){
  const entry=gmComboDeck[gmComboIdx];
  if(entry.type==='recog'){ if(!gmRecogAnswered)return; }
  else { if(!gmComboTransformAnswered)return; }
  gmComboIdx++;
  if(gmComboIdx>=gmComboDeck.length){ gmComboFinish(); return; }
  gmComboShowQuestion();
}
function gmComboFinish(){
  gmComboActive=false;
  document.getElementById('lessonMode').style.display='none';
  document.getElementById('gmTransformMode').style.display='none';
  document.getElementById('gmRecogQuiz').style.display='none';
  document.getElementById('verbsMode').style.display='flex';
  csSetChromeVisible(true);
  lDeck=[];lIdx=0;
  const topicId=gmComboTopicId;
  gmComboTopicId=null;
  openGrammarModal(topicId);
}
function gmEnterDrillUI(){
  gmDrillActive=true;
  wpChainActive=true;
  wpChainItOnly=true;
  seqSub='it';
  const seqItTab=document.getElementById('seqSubIt'); if(seqItTab)seqItTab.classList.add('active');
  const seqArTab=document.getElementById('seqSubAr'); if(seqArTab)seqArTab.classList.remove('active');
  lDeck=gmDrillDeck;
  lIdx=gmDrillIdx;
  currentStudyMode='speak';
  hideLessonLocked();
  document.getElementById('game').style.display='none';
  const ceEl=document.getElementById('convoExplain'); if(ceEl)ceEl.style.display='none';
  // نفس ملحوظة gmRecogEnter: لازم نقفل مكتبة السكربت صراحة عشان مايبانش زي ما لو
  // الزرار مقفلش حاجة.
  document.getElementById('verbsMode').style.display='none';
  document.getElementById('lessonMode').style.display='flex';
  document.getElementById('lRestartBtn').style.display='none';
  csSetChromeVisible(false);
  lRender();
  csShowGate();
  window.scrollTo(0,0);
}
function gmFinishDrill(){
  gmDrillActive=false;
  wpChainActive=false;
  wpChainItOnly=false;
  document.getElementById('lessonMode').style.display='none';
  // رجّعنا مكتبة السكربت تظهر تاني (هي اللي كانت وراء البوب أب أصلاً قبل ما ندخل التمرين).
  document.getElementById('verbsMode').style.display='flex';
  csSetChromeVisible(true);
  // نفس ملحوظة csFinishScene: كنا مستعيرين lDeck/lIdx لعرض أمثلة الموضوع —
  // لازم نرجّعهم فاضيين عشان تبويب "الدرس الإنفينيتي" يرجع يبني نفسه من جديد
  // بدل ما يفضل عارض أمثلة الموضوع ده للأبد.
  lDeck=[];lIdx=0;
  const topicId=gmDrillTopicId;
  gmDrillTopicId=null;
  openGrammarModal(topicId);
}
function csFinishScene(){
  csCompletedScenes.add(csSceneId);
  csActive=false;
  wpChainActive=false;
  wpChainItOnly=false;
  saveCsProgress();
  document.getElementById('lessonMode').style.display='none';
  csSetChromeVisible(true);
  // مهم: كنا بنستعير lDeck/lIdx (متغيرات محرك الدرس الإنفينيتي) عشان ندرس جُمل
  // المحادثة بنفس المحرك — لازم نرجّعهم فاضيين لما نخلص، وإلا تبويب "الدرس
  // الإنفينيتي" هيفضل عارض جُمل المحادثة القديمة بدل الجُمل الحقيقية بتاعته
  // (switchMode بيتأكد إن lDeck فاضي قبل ما يعيد بناءه من جديد بـ lStart()).
  lDeck=[];lIdx=0;
  if(csGrammarQuestions.length){
    csGrammarQuizStart();
  } else {
    qRender();
  }
}

// ===== كويز جرامر المحادثة: بيظهر مرة واحدة آخر كل محادثة، سؤال لكل جملة اتكتبت،
// بنفس شكل "أسئلة السياق" (مش بانل صغير جوه كل جملة زي الأول). =====
function csRefreshScoreNumbers(){
  document.getElementById('sAvg').textContent=qAttempts?Math.round(qCorrectCount/qAttempts*100)+'%':'0%';
  document.getElementById('sAll').textContent=qAttempts;
  document.getElementById('sBest').textContent=qBestStreak;
}
function csGrammarQuizStart(){
  csGrammarQIdx=0;
  document.getElementById('convoExplain').style.display='none';
  document.getElementById('game').style.display='flex';
  csGrammarQuizRender();
}
function csGrammarQuizRender(){
  csGrammarQAnswered=false;
  document.getElementById('endScreen').classList.remove('show');
  document.getElementById('wpProgress').textContent='🧩 مراجعة جرامر المحادثة — سؤال '+toArabicDigits(csGrammarQIdx+1)+' من '+toArabicDigits(csGrammarQuestions.length);
  const ctx=document.getElementById('qContext');
  ctx.className='q-context';
  ctx.onclick=null;
  ctx.innerHTML='<div class="q-ctx-speaker">🧩 مراجعة جرامر</div><div class="q-ctx-ar">جاوب على أسئلة القواعد اللي ظهرت في الجُمل اللي كتبتها</div>';
  const q=csGrammarQuestions[csGrammarQIdx];
  document.getElementById('qPrompt').textContent=q.prompt;
  const optWrap=document.getElementById('qOptions');
  optWrap.innerHTML='';
  q.options.forEach((opText,i)=>{
    const btn=document.createElement('button');
    btn.className='q-opt';
    btn.textContent=opText;
    btn.onclick=()=>csGrammarQuizAnswer(i,btn);
    optWrap.appendChild(btn);
  });
  document.getElementById('qFeedback').className='q-feedback';
  document.getElementById('qFeedback').innerHTML='';
  const nextBtn=document.getElementById('qNextBtn');
  nextBtn.className='next-btn';
  nextBtn.onclick=csGrammarQuizNext;
  csRefreshScoreNumbers();
}
function csGrammarQuizAnswer(i,btn){
  if(csGrammarQAnswered)return;
  csGrammarQAnswered=true;
  qAttempts++;
  const q=csGrammarQuestions[csGrammarQIdx];
  const allBtns=[...document.getElementById('qOptions').children];
  allBtns.forEach(b=>b.disabled=true);
  const ok=i===q.answer;
  if(ok){
    qCorrectCount++;qStreak++;qBestStreak=Math.max(qBestStreak,qStreak);
    btn.classList.add('ok');
    document.getElementById('qFeedback').className='q-feedback ok show';
    document.getElementById('qFeedback').innerHTML='✅ صح! '+escHtml(q.explanation||'');
    floatEmoji('✅');
  } else {
    qStreak=0;
    btn.classList.add('bad');
    if(allBtns[q.answer])allBtns[q.answer].classList.add('ok');
    document.getElementById('qFeedback').className='q-feedback bad show';
    document.getElementById('qFeedback').innerHTML='❌ '+escHtml(q.explanation||'');
  }
  csRefreshScoreNumbers();
  const nextBtn=document.getElementById('qNextBtn');
  nextBtn.className='next-btn show';
  nextBtn.textContent=(csGrammarQIdx+1>=csGrammarQuestions.length)?'كمّل المحادثة ←':'السؤال الجاي ←';
}
function csGrammarQuizNext(){
  if(!csGrammarQAnswered)return;
  csGrammarQIdx++;
  if(csGrammarQIdx>=csGrammarQuestions.length){
    document.getElementById('qNextBtn').onclick=qNext; // نرجّع الزرار لسلوكه الأصلي بتاع أسئلة السياق
    qRender();
    return;
  }
  csGrammarQuizRender();
}

// بيتنادى من wpMaybeChainAfterWrite بعد ما يخلص سؤال الجرامر — يفتح شرح الجملة الجاية،
// أو لو دي كانت آخر جملة في المحادثة يسلّم الدفة لأسئلة السياق بتاعتها.
function wpChainAdvanceToNextSentence(){
  if(csActive){
    csIdx++;
    saveCsProgress();
    if(csIdx>=csDeck.length){ csFinishScene(); return; }
    lIdx=csIdx;
    currentStudyMode='speak';
    lRender();
    csShowGate();
    return;
  }
  if(gmDrillActive){
    gmDrillIdx++;
    if(gmDrillIdx>=gmDrillDeck.length){ gmFinishDrill(); return; }
    lIdx=gmDrillIdx;
    currentStudyMode='speak';
    lRender();
    csShowGate();
    return;
  }
}
function qNext(){
  if(!qAnswered)return;
  const finished=qList[qIdx];
  const isLastOfScene=finished&&((qIdx+1>=qList.length)||qList[qIdx+1].sceneId!==finished.sceneId);
  qIdx++;
  saveQuestionProgress();
  if(isLastOfScene){
    const words=collectSceneWordNotes(finished.sceneId);
    if(words.length){
      const scene=(typeof SCENES!=='undefined')?SCENES.find(s=>s.id===finished.sceneId):null;
      showConvoExplain(scene?scene.titleAr:'',words);
      return;
    }
  }
  qRender();
}

function qEnd(){
  document.getElementById('game').style.display='none';
  const pct=qAttempts?Math.round(qCorrectCount/qAttempts*100):0;
  document.getElementById('endEmoji').textContent='🏆';
  document.getElementById('endTitle').textContent='خلصت كل الأسئلة!';
  document.getElementById('endSub').innerHTML='نسبة الصح: <b style="color:var(--gold)">'+pct+'%</b> — أطول streak: <b style="color:var(--green)">'+qBestStreak+'</b>';
  document.getElementById('endScreen').classList.add('show');
}

// ===== CONVO EXPLAIN: شاشة إجبارية بعد كل محادثة، بتجمع كلمات المحادثة كلها في
// ليستة بسيطة (نفس شكل بريكداون الجملة بالظبط) قبل ما نكمل. =====
let convoExplainTimer=null;

// نفس شكل بريكداون الجملة (bd-row/bd-word/bd-note) بالظبط، لكن مجمّع لكل كلمات المحادثة
// كلها، من غير تكرار لنفس الكلمة بنفس الملاحظة.
function collectSceneWordNotes(sceneId){
  const scene=(typeof SCENES!=='undefined')?SCENES.find(s=>s.id===sceneId):null;
  if(!scene||!Array.isArray(scene.lines))return [];
  const seen=new Set(); const out=[];
  scene.lines.forEach(ln=>{
    (ln.words||[]).forEach(w=>{
      const key=w.it+'|'+(w.note||'');
      if(seen.has(key))return;
      seen.add(key);
      out.push(w);
    });
  });
  return out;
}

function showConvoExplain(sceneTitleAr,words){
  document.getElementById('game').style.display='none';
  document.getElementById('endScreen').classList.remove('show');
  const wrap=document.getElementById('convoExplain');
  document.getElementById('ceTitle').textContent='🎓 كلمات وقواعد المحادثة'+(sceneTitleAr?' — '+sceneTitleAr:'');
  document.getElementById('ceSub').textContent='راجع كلمات المحادثة دي ('+toArabicDigits(words.length)+') قبل ما تكمل 👇';
  const body=document.getElementById('ceBody');
  body.innerHTML='<div class="breakdown" style="display:flex">'+words.map(w=>{
    const gTopicId=w.grammarId||findGrammarTopicId(w.it);
    const vInfo=findVerbFromNote(w.note);
    passiveTrackWord(w);
    const cls='bd-word word-tap'+(gTopicId?' has-grammar':'')+(vInfo?' has-verb':'');
    let styleAttr='';
    if(w.color){styleAttr=' style="color:'+w.color+';font-weight:900;background:'+w.color+'18;border-bottom:3px solid '+w.color+';border-radius:6px;padding:1px 4px;"';}
    const itEsc=escHtml(w.it).replace(/'/g,'&#39;');
    const noteTxt=w.note?(escHtml(w.ar)+' — '+escHtml(w.note)):escHtml(w.ar);
    return '<div class="bd-row">'
      +'<span class="'+cls+'"'+styleAttr+' onclick="speakWord(\''+itEsc+'\')">'+escHtml(w.it)+'</span>'
      +(gTopicId?'<span class="bd-grammar-btn" title="القاعدة الجرامرية" onclick="event.stopPropagation();openGrammarModal(\''+escHtml(String(gTopicId)).replace(/'/g,'&#39;')+'\',\''+itEsc+'\')">📘</span>':'')
      +(vInfo?'<span class="bd-verb-btn" title="تصريف الفعل" onclick="event.stopPropagation();openVerbModal('+vInfo.idx+',\''+vInfo.tab+'\')">📗</span>':'')
      +'<span class="bd-note">'+noteTxt+'</span>'
    +'</div>';
  }).join('')+'</div>';
  const btn=document.getElementById('ceContinueBtn');
  btn.disabled=true;
  let secs=Math.max(4,Math.min(20,Math.ceil(words.length/3)));
  const setLabel=()=>{btn.textContent='🔒 راجع الأول… ('+toArabicDigits(secs)+')';};
  setLabel();
  clearInterval(convoExplainTimer);
  convoExplainTimer=setInterval(()=>{
    secs--;
    if(secs<=0){
      clearInterval(convoExplainTimer);
      btn.disabled=false;
      btn.textContent='✅ فهمت، كمّل المحادثة الجديدة ←';
    } else setLabel();
  },1000);
  wrap.style.display='block';
  wrap.scrollTop=0;
}
function convoExplainContinue(){
  const btn=document.getElementById('ceContinueBtn');
  if(btn.disabled)return;
  clearInterval(convoExplainTimer);
  document.getElementById('convoExplain').style.display='none';
  qRender();
}

function start(){
  loadSkillScores();
  loadViewCounts();
  document.getElementById('endScreen').classList.remove('show');
  document.getElementById('game').style.display='flex';
  qInit();
  updateSkillScoreUI();
}
function restart(){resetAllProgress();start();}
function floatEmoji(emoji){
  const el=document.createElement('div');
  el.className='floater';el.textContent=emoji;
  document.body.appendChild(el);
  setTimeout(()=>el.remove(),950);
}

// ===== INFINITE LESSON ENGINE =====
function switchMode(mode){
  seqStopTts();
  if(gmDrillActive){
    // مراجعة موضوع قواعد خفيفة، مفيش تقدّم نحفظه — لو خرج منها نلغيها بس من غير تعقيد.
    // برضو لازم نفضّي lDeck/lIdx (كانوا مستعارين لعرض أمثلة الموضوع) عشان تبويب
    // الدرس الإنفينيتي الحقيقي يرجع يبني نفسه صح لما نرجعله.
    gmDrillActive=false; wpChainActive=false; wpChainItOnly=false;
    csSetChromeVisible(true);
    lDeck=[];lIdx=0;
  }
  if(gmRecogActive){
    gmRecogActive=false;
    const q=document.getElementById('gmRecogQuiz'); if(q)q.style.display='none';
    csSetChromeVisible(true);
    lDeck=[];lIdx=0;
  }
  if(gmFillActive){
    // نفس فكرة gmDrillActive/gmRecogActive: خروج بسيط من غير تعقيد، مفيش تقدّم
    // محفوظ لسؤال الفراغ. هنا مالوش علاقة بـ lDeck/lIdx (شاشة مستقلة تمامًا).
    gmFillActive=false;
    const fm=document.getElementById('gmFillMode'); if(fm)fm.style.display='none';
    csSetChromeVisible(true);
  }
  if(gmComboActive){
    gmComboActive=false;
    const tm=document.getElementById('gmTransformMode'); if(tm)tm.style.display='none';
    const rq=document.getElementById('gmRecogQuiz'); if(rq)rq.style.display='none';
    csSetChromeVisible(true);
    lDeck=[];lIdx=0;
  }
  const isWord=mode==='word';
  const isLesson=mode==='lesson';
  const isVerbs=mode==='verbs';
  const isListening=mode==='listening';
  document.getElementById('tabWord').classList.toggle('active',isWord);
  document.getElementById('tabLesson').classList.toggle('active',isLesson);
  document.getElementById('tabVerbs').classList.toggle('active',isVerbs);
  document.getElementById('tabListening').classList.toggle('active',isListening);
  if(isLesson&&csActive){
    // خارجين من دراسة المحادثة (نص محادثة) لتبويب الدرس الإنفينيتي الحقيقي —
    // نوقف السلسلة الأوتوماتيكية ونرجّع الـ deck الحقيقي، تقدّم المحادثة محفوظ وهيكمل من مكانه لما نرجعله.
    csActive=false; wpChainActive=false; wpChainItOnly=false;
    csSetChromeVisible(true);
    lDeck=[]; lStart();
  }
  if(isWord){
    // مهم: نرندر المحتوى الصح دايمًا (سؤال حالي أو استكمال دراسة محادثة) من غير ما نفترض
    // إن #game لسه فيه محتوى من قبل — أول مرة بيتفتح التطبيق أصلاً بيوجّه على طول لدراسة
    // المحادثة من غير ما #game يترندر خالص، فمجرد إظهاره تاني (display) بيطلع فاضي.
    document.getElementById('verbsMode').style.display='none';
    document.getElementById('listeningMode').style.display='none';
    if(csActive){
      document.getElementById('game').style.display='none';
      document.getElementById('lessonMode').style.display='flex';
    } else {
      document.getElementById('lessonMode').style.display='none';
      qRender();
    }
    return;
  }
  document.getElementById('game').style.display='none';
  document.getElementById('endScreen').classList.remove('show');
  clearInterval(convoExplainTimer);
  const ce=document.getElementById('convoExplain'); if(ce)ce.style.display='none';
  document.getElementById('lessonMode').style.display=isLesson?'flex':'none';
  document.getElementById('verbsMode').style.display=isVerbs?'flex':'none';
  document.getElementById('listeningMode').style.display=isListening?'flex':'none';
  if(isLesson && lDeck.length===0)lStart();
  if(isVerbs && document.getElementById('verbGroups').children.length===0)renderLibrary();
  if(isListening && document.getElementById('listeningPassageList').children.length===0)renderListeningLibrary();
}

// ===== VERBS LIBRARY: grid of all reference verbs grouped by ARE/ERE/IRE + tap-for-full-conjugation popup =====
let vmCurrentIdx=0, vmCurrentTab='meaning';
function verbCategory(it){
  const s=it.toLowerCase();
  if(s.endsWith('arsi')||s.endsWith('are'))return 'are';
  if(s.endsWith('ersi')||s.endsWith('ere'))return 'ere';
  if(s.endsWith('irsi')||s.endsWith('ire'))return 'ire';
  return 'are';
}
// ===== SCRIPT LIBRARY: verbs (unchanged) + every grammar topic, same card style, tap opens the full lesson =====
// ===== LISTENING PASSAGES: تاب مستقل عن الجرامر كله — قطعة نص (من كتاب غالبًا) +
// أسئلة فهم استماع. كل قطعة: عنوان، فقرات (إيطالي+عربي)، وأسئلة MCQ. النص ظاهر
// كامل وانت بتسمع (مش استماع أعمى)، وممكن تسمع القطعة كلها أو فقرة بفقرة.
const LISTENING_PASSAGES=[
  {
    id:'chiara_weekend',
    titleIt:'Il weekend di Chiara',
    titleAr:'شيرا في الويكند',
    paragraphs:[
      {
            "it": "Chiara si sveglia presto la mattina di sabato. Beve un caffè caldo e mangia del pane con la marmellata.",
            "ar": "شيرا بتصحى بدري صباح السبت. بتشرب قهوة سخنة وبتاكل شوية عيش بالمربى.",
            "words": [
                  {
                        "it": "Chiara",
                        "ar": "كيارا (اسم علم)",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "si",
                        "ar": "",
                        "note": "ضمير انعكاسي — جزء من الفعل svegliarsi (تصحى بنفسها)",
                        "type": "altro"
                  },
                  {
                        "it": "sveglia",
                        "ar": "تصحى",
                        "note": "Svegliarsi، Presente (لِيه/هي)",
                        "type": "verbo"
                  },
                  {
                        "it": "presto",
                        "ar": "بدري",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "la",
                        "ar": "ال",
                        "note": "أداة تعريف",
                        "type": "altro"
                  },
                  {
                        "it": "mattina",
                        "ar": "صباح",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "di",
                        "ar": "",
                        "note": "حرف جر",
                        "type": "altro"
                  },
                  {
                        "it": "sabato",
                        "ar": "السبت",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "Beve",
                        "ar": "تشرب",
                        "note": "Bere، Presente",
                        "type": "verbo"
                  },
                  {
                        "it": "un",
                        "ar": "",
                        "note": "أداة تنكير",
                        "type": "altro"
                  },
                  {
                        "it": "caffè",
                        "ar": "قهوة",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "caldo",
                        "ar": "سخن",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "e",
                        "ar": "و",
                        "note": null,
                        "type": "congiunzione"
                  },
                  {
                        "it": "mangia",
                        "ar": "تاكل",
                        "note": "Mangiare، Presente",
                        "type": "verbo"
                  },
                  {
                        "it": "del",
                        "ar": "شوية",
                        "note": "أداة تبعيض (Del) — كمية غير محددة",
                        "type": "altro"
                  },
                  {
                        "it": "pane",
                        "ar": "عيش",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "con",
                        "ar": "مع",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "la",
                        "ar": "ال",
                        "note": "أداة تعريف",
                        "type": "altro"
                  },
                  {
                        "it": "marmellata",
                        "ar": "مربى",
                        "note": null,
                        "type": "altro"
                  }
            ]
      },
      {
            "it": "Dopo colazione, va al mercato con sua madre. Comprano della frutta fresca: mele rosse, banane gialle e arance.",
            "ar": "بعد الفطار، بتروح السوق مع أمها. بيشتروا شوية فاكهة طازة: تفاح أحمر، موز أصفر، وبرتقال.",
            "words": [
                  {
                        "it": "Dopo",
                        "ar": "بعد",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "colazione",
                        "ar": "فطار",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "va",
                        "ar": "تروح",
                        "note": "Andare، Presente",
                        "type": "verbo"
                  },
                  {
                        "it": "al",
                        "ar": "ال",
                        "note": "أداة تعريف مدمجة (a + il)",
                        "type": "altro"
                  },
                  {
                        "it": "mercato",
                        "ar": "سوق",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "con",
                        "ar": "مع",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "sua",
                        "ar": "ـها",
                        "note": "صفة ملكية (لها)",
                        "type": "altro"
                  },
                  {
                        "it": "madre",
                        "ar": "أم",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "Comprano",
                        "ar": "بيشتروا",
                        "note": "Comprare، Presente (هم)",
                        "type": "verbo"
                  },
                  {
                        "it": "della",
                        "ar": "شوية",
                        "note": "أداة تبعيض (Della) — كمية غير محددة",
                        "type": "altro"
                  },
                  {
                        "it": "frutta",
                        "ar": "فاكهة",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "fresca",
                        "ar": "طازة",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "mele",
                        "ar": "تفاح",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "rosse",
                        "ar": "حمرا",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "banane",
                        "ar": "موز",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "gialle",
                        "ar": "صفرا",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "e",
                        "ar": "و",
                        "note": null,
                        "type": "congiunzione"
                  },
                  {
                        "it": "arance",
                        "ar": "برتقال",
                        "note": null,
                        "type": "altro"
                  }
            ]
      },
      {
            "it": "Nel pomeriggio, Chiara studia l''italiano per due ore. Poi esce con un''amica e vanno al cinema.",
            "ar": "بعد الضهر، شيرا بتذاكر إيطالي لمدة ساعتين. بعدين بتخرج مع صاحبتها ويروحوا السينما.",
            "words": [
                  {
                        "it": "Nel",
                        "ar": "في ال",
                        "note": "أداة تعريف مدمجة (in + il)",
                        "type": "altro"
                  },
                  {
                        "it": "pomeriggio",
                        "ar": "بعد الضهر",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "Chiara",
                        "ar": "كيارا (اسم علم)",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "studia",
                        "ar": "تذاكر",
                        "note": "Studiare، Presente",
                        "type": "verbo"
                  },
                  {
                        "it": "l'italiano",
                        "ar": "الإيطالي",
                        "note": "أداة تعريف مختصرة (قبل حرف علة) + اسم اللغة",
                        "type": "altro"
                  },
                  {
                        "it": "per",
                        "ar": "لمدة",
                        "note": "حرف جر (مع مدة زمنية)",
                        "type": "altro"
                  },
                  {
                        "it": "due",
                        "ar": "اتنين",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "ore",
                        "ar": "ساعات",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "Poi",
                        "ar": "بعدين",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "esce",
                        "ar": "تخرج",
                        "note": "Uscire، Presente",
                        "type": "verbo"
                  },
                  {
                        "it": "con",
                        "ar": "مع",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "un'amica",
                        "ar": "صاحبة",
                        "note": "أداة تنكير مؤنثة مختصرة (قبل حرف علة) + اسم",
                        "type": "altro"
                  },
                  {
                        "it": "e",
                        "ar": "و",
                        "note": null,
                        "type": "congiunzione"
                  },
                  {
                        "it": "vanno",
                        "ar": "يروحوا",
                        "note": "Andare، Presente (هم)",
                        "type": "verbo"
                  },
                  {
                        "it": "al",
                        "ar": "ال",
                        "note": "أداة تعريف مدمجة (a + il)",
                        "type": "altro"
                  },
                  {
                        "it": "cinema",
                        "ar": "سينما",
                        "note": null,
                        "type": "altro"
                  }
            ]
      },
      {
            "it": "La sera, torna a casa stanca ma felice. Cena con la famiglia e guarda un film prima di dormire.",
            "ar": "بالليل، بترجع البيت تعبانة بس مبسوطة. بتتعشى مع عيلتها وتتفرج على فيلم قبل ما تنام.",
            "words": [
                  {
                        "it": "La",
                        "ar": "ال",
                        "note": "أداة تعريف",
                        "type": "altro"
                  },
                  {
                        "it": "sera",
                        "ar": "مساء",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "torna",
                        "ar": "ترجع",
                        "note": "Tornare، Presente",
                        "type": "verbo"
                  },
                  {
                        "it": "a",
                        "ar": "",
                        "note": "حرف جر",
                        "type": "altro"
                  },
                  {
                        "it": "casa",
                        "ar": "بيت",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "stanca",
                        "ar": "تعبانة",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "ma",
                        "ar": "بس",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "felice",
                        "ar": "مبسوطة",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "Cena",
                        "ar": "تتعشى",
                        "note": "Cenare، Presente",
                        "type": "verbo"
                  },
                  {
                        "it": "con",
                        "ar": "مع",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "la",
                        "ar": "ال",
                        "note": "أداة تعريف",
                        "type": "altro"
                  },
                  {
                        "it": "famiglia",
                        "ar": "عيلة",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "e",
                        "ar": "و",
                        "note": null,
                        "type": "congiunzione"
                  },
                  {
                        "it": "guarda",
                        "ar": "تتفرج",
                        "note": "Guardare، Presente",
                        "type": "verbo"
                  },
                  {
                        "it": "un",
                        "ar": "",
                        "note": "أداة تنكير",
                        "type": "altro"
                  },
                  {
                        "it": "film",
                        "ar": "فيلم",
                        "note": null,
                        "type": "altro"
                  },
                  {
                        "it": "prima",
                        "ar": "قبل",
                        "note": "جزء من تعبير \"prima di\" = قبل ما",
                        "type": "altro"
                  },
                  {
                        "it": "di",
                        "ar": "",
                        "note": "حرف جر",
                        "type": "altro"
                  },
                  {
                        "it": "dormire",
                        "ar": "تنام",
                        "note": "Dormire، مصدر (بعد \"prima di\" = قبل ما)",
                        "type": "verbo"
                  }
            ]
      }
],
    questions:[
      {q:'شيرا بتصحى بدري صبح إيه؟',
       options:['السبت','الحد','الاتنين','الجمعة'], correctIdx:0,
       explanation:"النص بيقول: \"la mattina di sabato\" = صباح السبت."},
      {q:'بيشتروا إيه من السوق؟',
       options:['شوية فاكهة طازة','شوية عيش','شوية كتب','جزمة'], correctIdx:0,
       explanation:"\"Comprano della frutta fresca\" = بيشتروا شوية فاكهة طازة."},
      {q:'شيرا بتذاكر إيطالي قد إيه؟',
       options:['ساعتين','ساعة واحدة','٣ ساعات','طول اليوم'], correctIdx:0,
       explanation:"\"studia l'italiano per due ore\" = بتذاكر لمدة ساعتين."},
      {q:'بتروح السينما مع مين؟',
       options:['مع صاحبتها','مع أمها','مع عيلتها','لوحدها'], correctIdx:0,
       explanation:"\"esce con un'amica e vanno al cinema\" = بتخرج مع صاحبتها ويروحوا السينما."}
    ]
  },
  {
    id:'centri_commerciali_domenica',
    titleIt:'Centri commerciali aperti anche la domenica?',
    titleAr:'المولات مفتوحة يوم الحد كمان؟ آراء مختلفة',
    paragraphs:[
      {
        "it": "Anna, impiegata: “Sono favorevole all'apertura domenicale dei centri commerciali. È una questione di comodità, tanta gente lavora durante la settimana e non ha tempo di fare la spesa. Io, per esempio, torno a casa ogni giorno alle 18, a volte anche il sabato, e poter fare la spesa la domenica è certamente più pratico. Conosco molte persone che passano il fine settimana nei centri commerciali perché sono più comodi dei negozi del centro storico; e poi nei centri commerciali ci sono molti altri negozi, c'è il cinema e anche se piove non è un problema.”",
        "ar": "أنّا، موظفة: «أنا مع فتح المولات يوم الحد. الموضوع ده مسألة راحة، ناس كتير بتشتغل طول الأسبوع ومالهاش وقت تتسوق. أنا مثلاً بارجع البيت كل يوم الساعة 6 بالليل، وأحياناً حتى يوم السبت، وإني أقدر أتسوق يوم الحد ده أكيد أعملي وأريح. أنا عارفة ناس كتير بتقضي الويكند في المولات لأنها أريح من محلات وسط البلد؛ كمان في المولات فيه محلات تانية كتير، وفيه سينما، وحتى لو الدنيا بتمطر مفيش مشكلة.»",
        "words": [
          {"it":"favorevole","ar":"موافق / مع","note":null,"type":"altro"},
          {"it":"apertura","ar":"فتح","note":null,"type":"altro"},
          {"it":"domenicale","ar":"بتاع يوم الحد","note":"صفة من domenica","type":"altro"},
          {"it":"comodità","ar":"راحة","note":null,"type":"altro"},
          {"it":"lavora","ar":"بتشتغل","note":"Lavorare، Presente (لِيه/هي)","type":"verbo"},
          {"it":"non ha tempo","ar":"مالهاش وقت","note":"Avere، Presente + non","type":"verbo"},
          {"it":"fare la spesa","ar":"يتسوق (المشتريات)","note":"تعبير ثابت مع Fare","type":"verbo"},
          {"it":"torno","ar":"بارجع","note":"Tornare، Presente (أنا)","type":"verbo"},
          {"it":"certamente","ar":"أكيد","note":null,"type":"altro"},
          {"it":"pratico","ar":"عملي","note":null,"type":"altro"},
          {"it":"conosco","ar":"عارف/عارفة","note":"Conoscere، Presente (أنا)","type":"verbo"},
          {"it":"perché","ar":"لأن","note":null,"type":"congiunzione"},
          {"it":"anche se","ar":"حتى لو","note":null,"type":"congiunzione"},
          {"it":"piove","ar":"بتمطر","note":"Piovere، Presente","type":"verbo"}
        ]
      },
      {
        "it": "Paola, casalinga: “Non sono favorevole all'apertura domenicale, perché la domenica dev'essere un giorno di pausa e di riposo per tutti. Certo, per chi lavora è difficile fare la spesa durante la settimana, ma basta organizzarsi e si può andare il sabato. La domenica è bello stare con la famiglia, fare una gita, giocare con i figli; un centro commerciale è un luogo troppo anonimo: andare al lavoro anche la domenica, secondo me, significa non avere più tempo per la famiglia.”",
        "ar": "باولا، ست بيت: «أنا مش مع فتح المولات يوم الحد، لأن يوم الحد المفروض يبقى يوم راحة للجميع. طبعاً، اللي بيشتغل صعب عليه يتسوق طول الأسبوع، بس يكفي إنه ينظم وقته ويروح يوم السبت. يوم الحد حلو إنك تقعد مع عيلتك، تعملوا نزهة، تلعبوا مع الأولاد؛ المول مكان بارد قوي ومفيهوش طابع؛ إنك تشتغل حتى يوم الحد، في رأيي، معناه إنك مبقاش عندك وقت لعيلتك.»",
        "words": [
          {"it":"dev'essere","ar":"لازم يبقى","note":"Dovere + Essere","type":"verbo"},
          {"it":"pausa","ar":"استراحة","note":null,"type":"altro"},
          {"it":"riposo","ar":"راحة","note":null,"type":"altro"},
          {"it":"certo","ar":"طبعاً / أكيد","note":null,"type":"altro"},
          {"it":"difficile","ar":"صعب","note":null,"type":"altro"},
          {"it":"basta","ar":"يكفي","note":"Bastare، Presente","type":"verbo"},
          {"it":"organizzarsi","ar":"ينظم وقته","note":"فعل انعكاسي، مصدر","type":"verbo"},
          {"it":"si può","ar":"ممكن / يقدر حد","note":"Potere + si (صيغة عامة)","type":"verbo"},
          {"it":"gita","ar":"نزهة/رحلة قصيرة","note":null,"type":"altro"},
          {"it":"luogo","ar":"مكان","note":null,"type":"altro"},
          {"it":"anonimo","ar":"بارد / مفيهوش طابع شخصي","note":null,"type":"altro"},
          {"it":"secondo me","ar":"في رأيي","note":null,"type":"altro"},
          {"it":"significa","ar":"معناه","note":"Significare، Presente","type":"verbo"},
          {"it":"ma","ar":"بس","note":null,"type":"congiunzione"}
        ]
      },
      {
        "it": "Antonella, 32 anni: “Adesso che i centri commerciali sono aperti 7 giorni su 7, 12-13 ore al giorno fino alle 21-22, noi commessi stiamo a casa un giorno alla settimana, ma è un giorno infrasettimanale, quando i mariti (o le mogli) sono al lavoro e i figli vanno a scuola. È un giorno senza lavoro, ma è meno piacevole di un giorno festivo. Io per esempio posso uscire la casa e faccio cose che di solito non ho tempo di fare: pagare le bollette, andare in banca o cose del genere. Però è molto difficile il figlio vedo poco, perché sono a scuola e al lavoro.",
        "ar": "أنطونيلا، 32 سنة: «دلوقتي المولات بقت فاتحة 7 أيام في الأسبوع، من 12 لـ13 ساعة في اليوم لحد الساعة 9 أو 10 بالليل، إحنا كبائعين بناخد يوم إجازة بس في نص الأسبوع، يعني يوم اللي جوزها (أو مراته) بيكونوا شغالين والأولاد رايحين المدرسة. يوم من غير شغل، بس أقل متعة من يوم إجازة رسمي. أنا مثلاً أقدر أطلع من البيت وأعمل حاجات مش بلاقيلها وقت عادي: أدفع الفواتير، أروح البنك، وحاجات زي كده. بس صعب قوي إني أشوف ابني كتير، لأنه في المدرسة وأنا في الشغل.",
        "words": [
          {"it":"commessi","ar":"بائعين (محل)","note":"جمع commesso","type":"altro"},
          {"it":"infrasettimanale","ar":"في نص الأسبوع","note":"صفة من settimana","type":"altro"},
          {"it":"mariti","ar":"أزواج","note":null,"type":"altro"},
          {"it":"mogli","ar":"زوجات","note":null,"type":"altro"},
          {"it":"vanno a scuola","ar":"رايحين المدرسة","note":"Andare، Presente (هم)","type":"verbo"},
          {"it":"senza","ar":"من غير","note":null,"type":"altro"},
          {"it":"piacevole","ar":"ممتع","note":null,"type":"altro"},
          {"it":"festivo","ar":"(يوم) إجازة رسمي","note":null,"type":"altro"},
          {"it":"posso uscire","ar":"أقدر أطلع","note":"Potere + Uscire","type":"verbo"},
          {"it":"faccio","ar":"بعمل","note":"Fare، Presente (أنا)","type":"verbo"},
          {"it":"di solito","ar":"عادةً","note":null,"type":"altro"},
          {"it":"pagare le bollette","ar":"يدفع الفواتير","note":"تعبير ثابت","type":"verbo"},
          {"it":"però","ar":"بس / لكن","note":null,"type":"congiunzione"}
        ]
      },
      {
        "it": "Lavorare tutti i fine settimana, avere solo pochissimi giorni festivi, significa non avere una vita familiare come gli altri. Naturalmente i primi a sentire questo disagio sono i figli e per una madre è doloroso sentire la figlia di 5 anni che dice: “Però mamma, le altre mamme la domenica ci sono sempre, tu mai!”",
        "ar": "إني أشتغل كل الويكندات، ومعنديش غير إجازات رسمية قليلة جداً، ده معناه إني معنديش حياة عائلية زي باقي الناس. وطبعاً أول اللي بيحسوا بالمشكلة دي هما الأولاد، وبالنسبة للأم بيكون موجع إنها تسمع بنتها الصغيرة (٥ سنين) بتقولها: «بس ماما، باقي الأمهات موجودين يوم الحد على طول، إنتي لأ!»",
        "words": [
          {"it":"pochissimi","ar":"قليلين جداً","note":"صيغة مبالغة من poco","type":"altro"},
          {"it":"vita familiare","ar":"حياة عائلية","note":null,"type":"altro"},
          {"it":"naturalmente","ar":"طبعاً","note":null,"type":"altro"},
          {"it":"disagio","ar":"إحساس بعدم الراحة / مشكلة","note":null,"type":"altro"},
          {"it":"doloroso","ar":"موجع","note":null,"type":"altro"},
          {"it":"dice","ar":"بتقول","note":"Dire، Presente (لِيه/هي)","type":"verbo"},
          {"it":"sempre","ar":"دايماً","note":null,"type":"altro"},
          {"it":"mai","ar":"أبداً","note":null,"type":"altro"},
          {"it":"e","ar":"و","note":null,"type":"congiunzione"}
        ]
      }
    ],
    questions:[
      {q:'Perché Anna è favorevole all\'apertura domenicale?',
       options:['Perché chi lavora durante la settimana non ha tempo di fare la spesa','Perché i prezzi sono più bassi la domenica','Perché non le piace stare a casa','Perché i suoi amici lavorano in un centro commerciale'], correctIdx:0,
       explanation:"بتقول \"È una questione di comodità... non ha tempo di fare la spesa\" = المسألة راحة، وناس مالهاش وقت تتسوق طول الأسبوع."},
      {q:'Secondo Paola, cosa deve essere la domenica?',
       options:['Un giorno di pausa e di famiglia','Un giorno di lavoro in più','Un giorno solo per fare la spesa','Un giorno solo per dormire'], correctIdx:0,
       explanation:"\"la domenica dev'essere un giorno di pausa e di riposo per tutti\" = يوم الحد لازم يبقى يوم راحة للجميع."},
      {q:'Quanti giorni su 7 sono aperti i centri commerciali?',
       options:['7 giorni','5 giorni','6 giorni','3 giorni'], correctIdx:0,
       explanation:"\"i centri commerciali sono aperti 7 giorni su 7\" = المولات فاتحة 7 أيام في الأسبوع."},
      {q:'Quando fa il suo giorno di riposo Antonella?',
       options:['Un giorno infrasettimanale','La domenica','Solo il sabato','Non ha mai un giorno di riposo'], correctIdx:0,
       explanation:"\"stiamo a casa un giorno alla settimana... un giorno infrasettimanale\" = بياخدوا إجازة يوم في نص الأسبوع مش يوم الحد."},
      {q:'Cosa dice la figlia di Antonella?',
       options:['Che le altre mamme ci sono sempre la domenica, lei mai','Che vuole andare al centro commerciale','Che è triste per la scuola','Che vuole solo giocare con lei'], correctIdx:0,
       explanation:"\"le altre mamme la domenica ci sono sempre, tu mai!\" = باقي الأمهات موجودين يوم الحد على طول، هي لأ."},
      {q:'Vero o falso: "Nei centri commerciali è più facile trovare parcheggio."',
       options:['Vero','Falso'], correctIdx:1,
       explanation:"النص مقالش حاجة عن الباركينج خالص — الجملة دي مش موجودة فيه."},
      {q:'Vero o falso: "Anna va nei centri commerciali anche perché ci sono tanti negozi."',
       options:['Vero','Falso'], correctIdx:0,
       explanation:"\"nei centri commerciali ci sono molti altri negozi\" = في المولات محلات تانية كتير — ده جزء من كلام أنّا."},
      {q:'Vero o falso: "Paola dice che la domenica la gente deve andare in chiesa."',
       options:['Vero','Falso'], correctIdx:1,
       explanation:"باولا اتكلمت عن الراحة والعيلة بس، مقالتش حاجة عن الكنيسة خالص."},
      {q:'Vero o falso: "Secondo Paola i centri commerciali sono luoghi senza identità."',
       options:['Vero','Falso'], correctIdx:0,
       explanation:"\"un centro commerciale è un luogo troppo anonimo\" = المول مكان بلا طابع شخصي قوي — زي ما باولا قالت."},
      {q:'Vero o falso: "Antonella lavora sei giorni la settimana."',
       options:['Vero','Falso'], correctIdx:0,
       explanation:"المولات فاتحة 7 أيام، وهي بتاخد يوم واحد بس إجازة (\"un giorno alla settimana\")، يبقى بتشتغل 6 أيام."},
      {q:'Vero o falso: "Per Antonella non è un problema lavorare quando piove."',
       options:['Vero','Falso'], correctIdx:1,
       explanation:"كلام المطر ده كان في كلام أنّا (\"anche se piove non è un problema\") مش أنطونيلا — أنطونيلا أصلاً محددتش المطر كموضوع خالص."},
      {q:'Vero o falso: "Alla figlia di Antonella non piace questa situazione."',
       options:['Vero','Falso'], correctIdx:0,
       explanation:"\"le altre mamme la domenica ci sono sempre, tu mai!\" — كلام البنت بيوضح إنها زعلانة إن أمها دايمًا مش موجودة يوم الحد."},
      {q:'Vero o falso: "Antonella spera di cambiare presto lavoro."',
       options:['Vero','Falso'], correctIdx:1,
       explanation:"مفيش حاجة في النص بتقول إن أنطونيلا عايزة تغيّر شغلها."}
    ]
  }
];
let currentListeningPassageId=null;
let lpMarkerPos={}; // {paraIdx: charIndex} — آخر نقطة "ابدأ من هنا" اتحددت في كل فقرة
let listeningAnswers={}; // {questionIdx: chosenOptionIdx}

const LIB_SECTIONS=[
  {key:'are',label:'\uD83D\uDCD8 \u0623\u062f\u0648\u0627\u062a \u0648\u0623\u0633\u0645\u0627\u0621 \u0648\u0635\u0641\u0627\u062a \u0648\u0636\u0645\u0627\u0626\u0631',ids:['articoli_determinativi','partitivi','dimostrativi','possessivi','indefiniti','aggettivi_vari','nomi_sostantivi','interrogativi','pronomi_soggetto','pronomi_complemento']},
  {key:'ere',label:'\uD83E\uDDED \u062d\u0631\u0648\u0641 \u0627\u0644\u062c\u0631',ids:['prep_di','prep_a','prep_da','prep_in','prep_con','prep_su','prep_per','prep_tra_fra','prep_semplici','improprie']},
  {key:'ire',label:'\uD83D\uDD17 \u0627\u0644\u0631\u0628\u0637 \u0648\u0627\u0644\u0638\u0631\u0648\u0641 \u0648\u0627\u0644\u0645\u0641\u0631\u062f\u0627\u062a',ids:['congiunzioni','avverbi_tempo','avverbio_modo','parole_multitasking','giorni_settimana','momenti_giornata']},
  {key:'are',label:'\u23F3 \u0627\u0644\u0623\u0632\u0645\u0646\u0629 \u0648\u0627\u0644\u0623\u0641\u0639\u0627\u0644 \u0627\u0644\u0645\u0633\u0627\u0639\u062f\u0629',ids:['ausiliari_passato']},
  {key:'ere',label:'\uD83C\uDFA8 \u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u0648\u0627\u0644\u0623\u0631\u0642\u0627\u0645',ids:['colori','numeri']}
];
function libTopics(){return (typeof GRAMMAR!=='undefined'&&Array.isArray(GRAMMAR))?GRAMMAR:[];}
function renderTopicSections(wrapEl){
  const all=libTopics();
  if(all.length===0)return;
  const placed={};
  const sections=LIB_SECTIONS.map(sec=>({
    key:sec.key,label:sec.label,
    list:sec.ids.map(id=>{const t=all.find(g=>g.id===id);if(t)placed[id]=1;return t;}).filter(Boolean)
  }));
  const rest=all.filter(g=>!placed[g.id]);
  if(rest.length)sections.push({key:'ere',label:'\uD83D\uDCDA \u0645\u0648\u0627\u0636\u064a\u0639 \u0623\u062e\u0631\u0649',list:rest});
  sections.forEach(sec=>{
    if(sec.list.length===0)return;
    const section=document.createElement('div');
    section.className='verb-section '+sec.key;
    const title=document.createElement('div');
    title.className='verb-section-title';
    title.innerHTML='<span class="dot"></span><span>'+escHtml(sec.label)+'</span><span class="cnt">'+sec.list.length+' \u0645\u0648\u0636\u0648\u0639</span>';
    section.appendChild(title);
    const grid=document.createElement('div');
    grid.className='verb-grid';
    sec.list.forEach(t=>{
      const card=document.createElement('div');
      card.className='verb-card';
      card.onclick=()=>openGrammarModal(t.id);
      const itEl=document.createElement('div');
      itEl.className='verb-card-it';
      itEl.textContent=(t.icon?t.icon+' ':'')+(t.it||t.ar||t.id);
      const arEl=document.createElement('div');
      arEl.className='verb-card-ar';
      arEl.textContent=t.ar||'';
      card.appendChild(itEl);card.appendChild(arEl);
      const tViews=getTopicTotalViews(t.id);
      if(tViews>0){
        const vc=document.createElement('div');
        vc.className='verb-card-views';
        vc.textContent='👁️ '+toArabicDigits(tViews);
        card.appendChild(vc);
      }
      grid.appendChild(card);
    });
    section.appendChild(grid);
    wrapEl.appendChild(section);
  });
}
function renderListeningLibrary(){
  const wrap=document.getElementById('listeningPassageList');
  wrap.innerHTML=LISTENING_PASSAGES.map(p=>
    '<div class="card" style="cursor:pointer;margin-bottom:10px" onclick="listeningOpenPassage(\''+p.id+'\')">'
    +'<div class="card-cat">'+escHtml(p.titleAr)+'</div>'
    +'<div class="card-ar" style="direction:ltr;text-align:left">'+escHtml(p.titleIt)+'</div>'
    +'<div style="opacity:.6;font-size:13px;margin-top:6px">'+p.paragraphs.length+' فقرات · '+p.questions.length+' أسئلة فهم</div>'
    +'</div>'
  ).join('');
}
// بيدور على كلمة متلقطة من نص القطعة: أولوية للترجمة المحفوظة (words) لو
// الكلمة اتكتبت لوحدها هناك، وإلا لو هي جزء من عبارة محفوظة (زي "fare la
// spesa")، وإلا بيدور على قاعدة جرامر مرتبطة بيها (triggers). لو مفيش أي حاجة
// بيرجع null والدوسة بتتحول لمجرد نطق الكلمة صوتيًا مفيش بوب أب.
function lpFindWordMatch(paraIdx,rawWord){
  const p=LISTENING_PASSAGES.find(x=>x.id===currentListeningPassageId);
  const para=p&&p.paragraphs[paraIdx];
  const words=(para&&para.words)||[];
  const norm=normalizeGrammarWord(rawWord);
  let exactIdx=-1,phraseIdx=-1;
  words.forEach((w,i)=>{
    const parts=normalizeGrammarWord(w.it).split(/\s+/);
    if(parts.length===1&&parts[0]===norm&&exactIdx===-1)exactIdx=i;
    else if(parts.length>1&&parts.includes(norm)&&phraseIdx===-1)phraseIdx=i;
  });
  if(exactIdx!==-1)return{type:'curated',idx:exactIdx};
  if(phraseIdx!==-1)return{type:'curated',idx:phraseIdx};
  const gTopicId=findGrammarTopicId(rawWord);
  if(gTopicId)return{type:'grammar',topicId:gTopicId};
  return null;
}
// بيقسّم نص القطعة لكلمات قابلة للدوس عليها مباشرة (مش بس القايمة تحت).
function lpRenderInlineText(text,paraIdx){
  const re=/[A-Za-zÀ-öø-ÿ]+/g;
  let out='',last=0,m;
  while((m=re.exec(text))){
    out+=escHtml(text.slice(last,m.index));
    const w=m[0];
    const match=lpFindWordMatch(paraIdx,w);
    const cls='lp-word'+(match?(match.type==='grammar'?' has-grammar':' has-info'):'');
    const wEsc=escHtml(w).replace(/'/g,'&#39;');
    out+='<span class="'+cls+'" id="lpTok'+paraIdx+'_'+m.index+'" onclick="event.stopPropagation();lpWordTap('+paraIdx+',\''+wEsc+'\','+m.index+')">'+escHtml(w)+'</span>';
    last=re.lastIndex;
  }
  out+=escHtml(text.slice(last));
  return out;
}
// دوسة على كلمة جوه نص القطعة: تنطقها، وتحطها "نقطة البداية" الحالية (تحته
// خط دهبي ثابت لحد ما تدوس كلمة تانية)، وبعدين لو عندها قاعدة جرامر بتفتح
// نفس بوب أب الجرامر المستخدم في باقي التطبيق (بوب أب فوق الشاشة، من غير
// ما يحرك مكان قراءتك). كلمة عندها ترجمة محفوظة بس من غير قاعدة جرامر:
// بتتنطق بس، من غير ما ننزلك لقايمة الشرح تحت. زرار "اسمع من هنا" تحت
// الفقرة بيقرا من النقطة دي لحد آخر الفقرة، وتقدر تدوسه كذا مرة براحتك.
function lpWordTap(paraIdx,rawWord,charIndex){
  speakWord(rawWord);
  if(charIndex!==undefined){
    const prevPos=lpMarkerPos[paraIdx];
    if(prevPos!==undefined){
      const prevEl=document.getElementById('lpTok'+paraIdx+'_'+prevPos);
      if(prevEl)prevEl.classList.remove('lp-marker');
    }
    lpMarkerPos[paraIdx]=charIndex;
    const curEl=document.getElementById('lpTok'+paraIdx+'_'+charIndex);
    if(curEl)curEl.classList.add('lp-marker');
    const playBtn=document.getElementById('lpPlayFromBtn'+paraIdx);
    if(playBtn)playBtn.style.display='inline-block';
  }
  const match=lpFindWordMatch(paraIdx,rawWord);
  if(!match)return;
  if(match.type==='grammar'){
    openGrammarModal(match.topicId,rawWord);
    return;
  }
  // كلمة عندها ترجمة محفوظة بس (مش قاعدة جرامر): نكتفي بالنطق، من غير ما
  // ننقل الشاشة لقايمة الشرح تحت — عشان الدوسة ما تضيّعش مكان قراءتك.
}
// بيقرا من نقطة البداية المحفوظة (آخر كلمة دوست عليها) لحد آخر الفقرة —
// تقدر تدوس الزرار ده كذا مرة براحتك عشان تسمع نفس الجزء تاني.
function lpPlayFromMarker(paraIdx){
  const p=LISTENING_PASSAGES.find(x=>x.id===currentListeningPassageId);
  const para=p&&p.paragraphs[paraIdx];
  if(!para)return;
  const pos=lpMarkerPos[paraIdx]||0;
  speakWord(para.it.slice(pos));
}
// نفس شكل بريكداون الكلمات (bd-row/bd-word/bd-note) المستخدم في باقي التطبيق —
// بنعيد استخدامه هنا لقطع الاستماع بدل ما نكرر نفس الشكل بكود مختلف.
function renderListeningWordBreakdown(words,paraIdx){
  return '<div class="breakdown" style="display:flex;margin-top:10px;padding-top:10px;border-top:1px dashed var(--border)">'+words.map((w,wIdx)=>{
    const gTopicId=w.grammarId||findGrammarTopicId(w.it);
    const vInfo=findVerbFromNote(w.note);
    const cls='bd-word word-tap'+(gTopicId?' has-grammar':'')+(vInfo?' has-verb':'');
    const itEsc=escHtml(w.it).replace(/'/g,'&#39;');
    const noteTxt=w.note?(escHtml(w.ar)+' — '+escHtml(w.note)):escHtml(w.ar);
    return '<div class="bd-row" id="lpBdRow'+paraIdx+'_'+wIdx+'">'
      +'<span class="'+cls+'" onclick="event.stopPropagation();speakWord(\''+itEsc+'\')">'+escHtml(w.it)+'</span>'
      +(gTopicId?'<span class="bd-grammar-btn" title="القاعدة الجرامرية" onclick="event.stopPropagation();openGrammarModal(\''+escHtml(String(gTopicId)).replace(/'/g,'&#39;')+'\',\''+itEsc+'\')">📘</span>':'')
      +(vInfo?'<span class="bd-verb-btn" title="تصريف الفعل" onclick="event.stopPropagation();openVerbModal('+vInfo.idx+',\''+vInfo.tab+'\')">📗</span>':'')
      +'<span class="bd-note">'+noteTxt+'</span>'
    +'</div>';
  }).join('')+'</div>';
}
// أكوردية: دوس على الجملة يفتح شرح كلمة بكلمة تحتيها، دوس تاني يقفل. مقفولة
// افتراضيًا عشان الصفحة متاخدش مساحة كبيرة من غير داعي.
function listeningToggleParagraph(i){
  const box=document.getElementById('lpBreakdown'+i);
  const arrow=document.getElementById('lpArrow'+i);
  if(!box)return;
  const isOpen=box.style.display==='block';
  box.style.display=isOpen?'none':'block';
  if(arrow)arrow.textContent=isOpen?'شرح الكلمات ▾':'إخفاء الشرح ▴';
}
function listeningOpenPassage(id){
  const p=LISTENING_PASSAGES.find(x=>x.id===id);
  if(!p)return;
  currentListeningPassageId=id;
  listeningAnswers={};
  lpMarkerPos={};
  document.getElementById('listeningLibrary').style.display='none';
  document.getElementById('listeningDetail').style.display='block';
  document.getElementById('lpTitleAr').textContent=p.titleAr;
  document.getElementById('lpTitleIt').textContent=p.titleIt;
  document.getElementById('lpParagraphs').innerHTML=p.paragraphs.map((para,i)=>
    '<div style="margin-bottom:14px;padding:10px;border:1px solid var(--border);border-radius:10px">'
    +'<div style="display:flex;align-items:flex-start;gap:8px">'
    +'<button class="tts-btn" style="padding:6px 10px;font-size:13px;flex-shrink:0" onclick="event.stopPropagation();listeningSpeakParagraph('+i+')">🔊</button>'
    +'<div style="direction:ltr;text-align:left;font-size:16px;line-height:1.85;flex:1">'+lpRenderInlineText(para.it,i)+'</div>'
    +'</div>'
    +'<div style="opacity:.75;font-size:13.5px;margin-top:8px">'+escHtml(para.ar)+'</div>'
    +'<button class="tts-btn" id="lpPlayFromBtn'+i+'" style="margin-top:8px;font-size:12.5px;padding:5px 10px" onclick="event.stopPropagation();lpPlayFromMarker('+i+')">▶️ اسمع من هنا</button>'
    +(para.words&&para.words.length?(
      '<div class="skip-link" id="lpArrow'+i+'" style="margin-top:8px;cursor:pointer;display:inline-block" onclick="listeningToggleParagraph('+i+')">شرح الكلمات ▾</div>'
      +'<div id="lpBreakdown'+i+'" style="display:none">'+renderListeningWordBreakdown(para.words,i)+'</div>'
    ):'')
    +'</div>'
  ).join('');
  document.getElementById('lpQuestions').innerHTML=p.questions.map((q,qi)=>
    '<div class="drill-box show" style="margin-bottom:12px">'
    +'<div style="margin-bottom:8px;direction:ltr;text-align:left;line-height:1.7">'+(qi+1)+'. '+lpRenderInlineText(q.q,-1)+'</div>'
    +'<div class="q-options" id="lpQOptions'+qi+'">'
    +q.options.map((o,oi)=>'<button class="q-opt" onclick="listeningAnswerQuestion('+qi+','+oi+')">'+escHtml(o)+'</button>').join('')
    +'</div>'
    +'<div class="q-feedback" id="lpQFeedback'+qi+'"></div>'
    +'</div>'
  ).join('');
  document.getElementById('lpResult').style.display='none';
  window.scrollTo(0,0);
}
function listeningBackToLibrary(){
  document.getElementById('listeningDetail').style.display='none';
  document.getElementById('listeningLibrary').style.display='block';
  currentListeningPassageId=null;
}
function listeningSpeakAll(){
  const p=LISTENING_PASSAGES.find(x=>x.id===currentListeningPassageId);
  if(!p)return;
  speakWord(p.paragraphs.map(x=>x.it).join(' '));
}
function listeningSpeakParagraph(i){
  const p=LISTENING_PASSAGES.find(x=>x.id===currentListeningPassageId);
  if(!p||!p.paragraphs[i])return;
  speakWord(p.paragraphs[i].it);
}
function listeningAnswerQuestion(qi,oi){
  if(listeningAnswers[qi]!==undefined)return; // إجابة واحدة لكل سؤال، زي باقي التطبيق
  const p=LISTENING_PASSAGES.find(x=>x.id===currentListeningPassageId);
  const q=p.questions[qi];
  listeningAnswers[qi]=oi;
  const btns=[...document.getElementById('lpQOptions'+qi).children];
  btns.forEach(b=>b.disabled=true);
  const ok=oi===q.correctIdx;
  if(ok){
    btns[oi].classList.add('ok');btns[oi].style.background='#00e8961a';btns[oi].style.borderColor='var(--green)';
    floatEmoji('✅');
  } else {
    btns[oi].classList.add('bad');btns[oi].style.background='#ff4d6d1a';btns[oi].style.borderColor='var(--red)';
    btns[q.correctIdx].classList.add('ok');
    btns[q.correctIdx].style.background='#00e8961a';
    btns[q.correctIdx].style.borderColor='var(--green)';
  }
  document.getElementById('lpQFeedback'+qi).innerHTML=(ok?'✅ صح! ':'❌ ')+escHtml(q.explanation||'');
  if(Object.keys(listeningAnswers).length===p.questions.length){
    let correct=0;
    p.questions.forEach((qq,i2)=>{ if(listeningAnswers[i2]===qq.correctIdx)correct++; });
    const resEl=document.getElementById('lpResult');
    resEl.style.display='block';
    resEl.textContent='🏆 خلصت! '+correct+' من '+p.questions.length+' صح.';
  }
}

function renderLibrary(){
  renderVerbsList();
  renderTopicSections(document.getElementById('verbGroups'));
}
function renderVerbsList(){
  const wrapEl=document.getElementById('verbGroups');
  wrapEl.innerHTML='';
  const cats=[
    {key:'are',label:'🟡 الأفعال -ARE'},
    {key:'ere',label:'🟢 الأفعال -ERE'},
    {key:'ire',label:'🔵 الأفعال -IRE'}
  ];
  cats.forEach(cat=>{
    const list=VERBS.filter(v=>verbCategory(v.it)===cat.key);
    if(list.length===0)return;
    const section=document.createElement('div');
    section.className='verb-section '+cat.key;
    const title=document.createElement('div');
    title.className='verb-section-title';
    title.innerHTML='<span class="dot"></span><span>'+cat.label+'</span><span class="cnt">'+list.length+' فعل</span>';
    section.appendChild(title);
    const grid=document.createElement('div');
    grid.className='verb-grid';
    list.forEach(v=>{
      const idx=VERBS.indexOf(v);
      const card=document.createElement('div');
      card.className='verb-card';
      card.onclick=()=>openVerbModal(idx);
      const itEl=document.createElement('div');
      itEl.className='verb-card-it';
      itEl.textContent=v.it;
      const arEl=document.createElement('div');
      arEl.className='verb-card-ar';
      arEl.textContent=v.ar;
      card.appendChild(itEl);card.appendChild(arEl);
      const views=['presente','passato','imperfetto','imperativo'].reduce((s,t)=>s+getVerbTenseViews(v.it,t),0);
      if(views>0){
        const vc=document.createElement('div');
        vc.className='verb-card-views';
        vc.textContent='👁️ '+toArabicDigits(views);
        card.appendChild(vc);
      }
      grid.appendChild(card);
    });
    section.appendChild(grid);
    wrapEl.appendChild(section);
  });
}
function openVerbModal(i,tab){
  vmCurrentIdx=i;
  vmCurrentTab=tab||'meaning';
  document.getElementById('vmIt').textContent=VERBS[i].it;
  document.getElementById('verbModalOverlay').classList.add('show');
  renderVerbModalTabs();
  renderVerbModalBody();
  speakVerb();
}
function speakVerb(){
  if(vmCurrentIdx==null||!VERBS[vmCurrentIdx])return;
  speakWord(VERBS[vmCurrentIdx].it);
}
function closeVerbModal(){
  document.getElementById('verbModalOverlay').classList.remove('show');
}
function closeVerbModalOnOverlay(e){
  if(e.target && e.target.id==='verbModalOverlay')closeVerbModal();
}
function switchVerbTab(tab){
  vmCurrentTab=tab;
  renderVerbModalTabs();
  renderVerbModalBody();
}
const VM_TAB_LABELS={meaning:'📖 المعنى',presente:'🔵 المضارع',passato:'🟢 الماضي',imperfetto:'🟡 الماضي المستمر',imperativo:'❗ الأمر'};
function renderVerbModalTabs(){
  const infinitive=VERBS[vmCurrentIdx]?VERBS[vmCurrentIdx].it:null;
  ['meaning','presente','passato','imperfetto','imperativo'].forEach(t=>{
    const el=document.getElementById('vmTab'+t.charAt(0).toUpperCase()+t.slice(1));
    el.classList.toggle('active',t===vmCurrentTab);
    const views=(t!=='meaning'&&infinitive)?getVerbTenseViews(infinitive,t):0;
    el.textContent=VM_TAB_LABELS[t]+(views>0?' ('+toArabicDigits(views)+')':'');
  });
}
function verbConjTableHtml(rows,infinitive,tab){
  window.__vmRows=rows;
  return '<table class="conj-tbl">'+rows.map((r,i)=>{
    const views=getVerbFormViews(infinitive,tab,r.person);
    const badge=views>0?' <span class="conj-views">👁'+toArabicDigits(views)+'</span>':'';
    return '<tr class="conj-row" onclick="bumpVerbFormView(\''+infinitive.replace(/'/g,"\\'")+'\',\''+tab+'\',window.__vmRows['+i+'].person);speakWord(window.__vmRows['+i+'].form);renderVerbModalBody();renderVerbModalTabs();"><td>'+r.person+'</td><td>'+r.form+badge+'</td></tr>';
  }).join('')+'</table>';
}
function renderVerbModalBody(){
  const v=VERBS[vmCurrentIdx];
  const body=document.getElementById('vmBody');
  if(vmCurrentTab==='meaning'){
    body.innerHTML='<div class="verb-meaning"><b>'+v.it+'</b><div style="margin-top:8px;color:var(--text);direction:rtl">'+v.ar+'</div></div>';
  } else if(vmCurrentTab==='presente'){
    body.innerHTML=verbConjTableHtml(v.presente,v.it,'presente');
  } else if(vmCurrentTab==='passato'){
    const auxLbl=v.passato.aux==='essere'?'Essere':'Avere';
    body.innerHTML='<div class="verb-aux-note">الفعل المساعد: '+auxLbl+(v.passato.regular?' — فعل منتظم':' — فعل شاذ')+'</div>'+verbConjTableHtml(v.passato.rows,v.it,'passato');
  } else if(vmCurrentTab==='imperfetto'){
    body.innerHTML='<div class="verb-aux-note">'+(v.imperfetto.regular?'فعل منتظم':'فعل شاذ')+'</div>'+verbConjTableHtml(v.imperfetto.rows,v.it,'imperfetto');
  } else if(vmCurrentTab==='imperativo'){
    body.innerHTML=verbConjTableHtml(v.imperativo.rows,v.it,'imperativo')+(v.imperativo.note?'<div class="verb-imp-note">💡 '+v.imperativo.note+'</div>':'');
  }
}

// ===== GRAMMAR GLOSSARY (tap-to-popup) =====
let GRAMMAR_TRIGGER_MAP=null;
function normalizeGrammarWord(w){
  return (w||'').toLowerCase()
    .replace(/[.,!?;:()«»"'’‘]/g,'')
    .trim();
}
function buildGrammarTriggerMap(){
  if(GRAMMAR_TRIGGER_MAP)return GRAMMAR_TRIGGER_MAP;
  GRAMMAR_TRIGGER_MAP={};
  if(typeof GRAMMAR==='undefined')return GRAMMAR_TRIGGER_MAP;
  GRAMMAR.forEach(topic=>{
    (topic.triggers||[]).forEach(t=>{
      const key=normalizeGrammarWord(t);
      if(!GRAMMAR_TRIGGER_MAP[key])GRAMMAR_TRIGGER_MAP[key]=topic.id; // أول موضوع بيسجل الكلمة هو اللي بيفوز، مش آخر واحد
    });
  });
  return GRAMMAR_TRIGGER_MAP;
}
function findGrammarTopicId(word){
  const map=buildGrammarTriggerMap();
  return map[normalizeGrammarWord(word)]||null;
}

// ===== VERB NOTE PARSING (tap-to-popup conjugation for words like "cucinavo") =====
// notes الخاص بـة الأفعال في sentences.js متسقة بالشكل: "InfinitoVerbo، Tense"
// (Tense وحدة من: Presente / Passato Prossimo / Imperfetto)
let VERB_NAME_MAP=null;
function buildVerbNameMap(){
  if(VERB_NAME_MAP)return VERB_NAME_MAP;
  VERB_NAME_MAP={};
  if(typeof VERBS==='undefined')return VERB_NAME_MAP;
  VERBS.forEach((v,i)=>{VERB_NAME_MAP[v.it.toLowerCase()]=i;});
  return VERB_NAME_MAP;
}
const VERB_TENSE_TAB={'Presente':'presente','Passato Prossimo':'passato','Imperfetto':'imperfetto','Imperativo':'imperativo'};
function findVerbFromNote(note){
  if(!note)return null;
  const m=note.match(/^([A-Za-zàèìòùé']+)،\s*(Presente|Passato Prossimo|Imperfetto|Imperativo)\b/);
  if(!m)return null;
  const map=buildVerbNameMap();
  const idx=map[m[1].toLowerCase()];
  if(idx===undefined)return null;
  return {idx, tab:VERB_TENSE_TAB[m[2]]};
}

function getGrammarTopic(id){
  if(typeof GRAMMAR==='undefined')return null;
  return GRAMMAR.find(g=>g.id===id)||null;
}
function refreshGrammarModalBody(){
  const topic=getGrammarTopic(currentGmTopicId);
  if(!topic)return;
  document.getElementById('gmBody').innerHTML=renderGrammarBlocks(topic.blocks||[],currentGmTopicId);
}
function openGrammarModal(topicId,focusWord){
  const topic=getGrammarTopic(topicId);
  if(!topic)return;
  currentGmTopicId=topicId;
  document.getElementById('gmIcon').textContent=topic.icon||'📘';
  document.getElementById('gmIt').textContent=topic.it;
  document.getElementById('gmAr').textContent=topic.ar;
  document.getElementById('gmBody').innerHTML=renderGrammarBlocks(topic.blocks||[],topicId);
  const drillBtn=document.getElementById('gmDrillBtn');
  drillBtn.style.display=TOPIC_DRILL_READY.includes(topicId)?'block':'none';
  const fillBtn=document.getElementById('gmFillBtn');
  if(fillBtn)fillBtn.style.display=TOPIC_FILLBLANK_READY.includes(topicId)?'block':'none';
  const comboBtn=document.getElementById('gmComboBtn');
  if(comboBtn){
    comboBtn.style.display=TOPIC_COMBO_READY.includes(topicId)?'block':'none';
    comboBtn.textContent=topic.comboButtonLabel||'🔀 اختبار شامل (تمييز + تحويل)';
  }
  document.getElementById('grammarModalOverlay').classList.add('show');
  if(focusWord){
    const norm=normalizeGrammarWord(focusWord);
    const body=document.getElementById('gmBody');
    let item=null;
    try{ item=body.querySelector('[data-word~="'+CSS.escape(norm)+'"]'); }catch(e){ item=null; }
    if(item){
      setTimeout(()=>{
        item.scrollIntoView({behavior:'smooth',block:'center'});
        item.classList.add('flash');
        setTimeout(()=>item.classList.remove('flash'),1400);
      },80);
    }
  }
}
function gmDrillBtnClicked(){
  if(!currentGmTopicId)return;
  gmStartDrill(currentGmTopicId);
}
function closeGrammarModal(){
  document.getElementById('grammarModalOverlay').classList.remove('show');
}
function closeGrammarModalOnOverlay(e){
  if(e.target && e.target.id==='grammarModalOverlay')closeGrammarModal();
}
function escGm(s){
  return (s==null?'':String(s)).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function gmSpeakableCell(c,topicId){
  const txt=String(c==null?'':c);
  const hasArabic=/[\u0600-\u06FF]/.test(txt);
  const hasLatin=/[a-zA-Zàèéìòù]/.test(txt);
  if(hasArabic||!hasLatin)return escGm(txt); // فيها عربي (حتى لو فيها مصطلح لاتيني جنبه زي "Copulative") أو مفيهاش لاتيني خالص — من غير نطق
  const tidEsc=(topicId||'').replace(/'/g,"\\'");
  const inner=txt.split(',').map(part=>{
    const trimmed=part.trim();
    if(!trimmed)return '';
    const itOnly=trimmed.replace(/\s*\([^)]*\)\s*/g,'').trim()||trimmed; // نشيل أي شرح بين قوسين قبل ما ننطق
    const views=topicId?getTopicWordViews(topicId,trimmed):0;
    const badge=views>0?' <span class="gm-word-views">👁'+toArabicDigits(views)+'</span>':'';
    return '<span class="gm-cell-word" onclick="bumpTopicWordView(\''+tidEsc+'\',\''+escGm(trimmed).replace(/'/g,"\\'")+'\');speakWord(\''+escGm(itOnly).replace(/'/g,"\\'")+'\');refreshGrammarModalBody();">'+escGm(trimmed)+badge+'</span>';
  }).join(', ');
  return '<span dir="ltr" style="unicode-bidi:isolate;display:inline-block">'+inner+'</span>';
}
function renderGrammarBlocks(blocks,topicId){
  const tid=topicId||currentGmTopicId||'';
  const tidEsc=tid.replace(/'/g,"\\'");
  return blocks.map(b=>{
    if(b.type==='note'){
      return '<div class="gm-note">'+escGm(b.ar)+'</div>';
    }
    if(b.type==='item'){
      const itSpeak=escGm(b.it).replace(/'/g,"\\'");
      const itNorm=normalizeGrammarWord(b.it).replace(/"/g,'&quot;');
      let html='<div class="gm-item" data-word="'+itNorm+'"><div class="gm-item-title" onclick="speakWord(\''+itSpeak+'\')">🔊 '+escGm(b.it)+'</div>';
      html+='<div class="gm-item-note">= '+escGm(b.ar)+(b.note?'<br>💡 '+escGm(b.note):'')+'</div>';
      (b.examples||[]).forEach(ex=>{
        const views=tid?getTopicWordViews(tid,ex.it):0;
        const badge=views>0?' <span class="gm-word-views">👁'+toArabicDigits(views)+'</span>':'';
        html+='<div class="gm-ex-row" onclick="bumpTopicWordView(\''+tidEsc+'\',\''+escGm(ex.it).replace(/'/g,"\\'")+'\');speakWord(\''+escGm(ex.it).replace(/'/g,"\\'")+'\');refreshGrammarModalBody();"><span class="gm-ex-it">'+escGm(ex.it)+badge+'</span><span class="gm-ex-ar">'+escGm(ex.ar)+'</span></div>';
      });
      html+='</div>';
      return html;
    }
    if(b.type==='usage'){
      const formNorm=normalizeGrammarWord(b.form||b.title||'').replace(/"/g,'&quot;');
      let html='<div class="gm-usage-block" data-word="'+formNorm+'" style="border:1px solid '+escGm(b.color||'#64748b')+';border-right:6px solid '+escGm(b.color||'#64748b')+';border-radius:12px;padding:10px;margin:10px 0;background:color-mix(in srgb,'+escGm(b.color||'#64748b')+' 9%,transparent)">';
      html+='<div style="font-weight:900;color:'+escGm(b.color||'#64748b')+'">'+escGm(b.title)+' — '+escGm(b.meaning)+'</div>';
      html+='<div style="margin:5px 0">'+escGm(b.description||'')+'</div>';
      (b.examples||[]).forEach(ex=>{
        let txt=escGm(ex.it);const target=escGm(ex.form||b.form||'');
        if(target)txt=txt.replace(target,'<span style="color:'+escGm(b.color||'#64748b')+';font-weight:900;text-decoration:underline;text-decoration-thickness:3px">'+target+'</span>');
        const views=tid?getTopicWordViews(tid,ex.it):0;
        const badge=views>0?' <span class="gm-word-views">👁'+toArabicDigits(views)+'</span>':'';
        html+='<div class="gm-ex-row" onclick="bumpTopicWordView(\''+tidEsc+'\',\''+escGm(ex.it).replace(/'/g,"\\'")+'\');speakWord(\''+escGm(ex.it).replace(/'/g,"\\'")+'\');refreshGrammarModalBody();"><span class="gm-ex-it">'+txt+badge+'</span><span class="gm-ex-ar">'+escGm(ex.ar)+'</span></div>';
      });
      return html+'</div>';
    }
    if(b.type==='table'){
      let html='<div class="gm-table-title">'+escGm(b.title||'')+'</div><table class="gm-table">';
      html+='<tr>'+(b.headers||[]).map(h=>'<th>'+escGm(h)+'</th>').join('')+'</tr>';
      (b.rows||[]).forEach(r=>{
        const rowForms=String(r[0]||'').split(/[\/,]/).map(x=>normalizeGrammarWord(x)).filter(Boolean).join(' ').replace(/"/g,'&quot;');
        html+='<tr data-word="'+rowForms+'">'+r.map(c=>'<td>'+gmSpeakableCell(c,tid)+'</td>').join('')+'</tr>';
      });
      html+='</table>';
      return html;
    }
    return '';
  }).join('');
}

// ===== INFINITE LESSON ENGINE =====
// Merges: (1) live per-word matching + isolated drill-on-failure from the
// reference build, with (2) our deep grammar breakdown + conjugation tables
// + tap-any-word-to-hear-it + always-available free navigation.
let lDeck=[],lIdx=0;

function saveLessonProgress(){try{localStorage.setItem('parlaLessonProgress',JSON.stringify({idx:lIdx}));}catch(e){} setTimeout(saveAppState,0);}
function loadLessonProgress(){try{const raw=localStorage.getItem('parlaLessonProgress'); if(!raw)return 0; const st=JSON.parse(raw); return Number.isInteger(st.idx)?Math.max(0,st.idx):0;}catch(e){return 0;}}

let lPassed=0,lStreak=0,lAttempts=0;
let currentStudyMode='speak'; // 'speak' | 'listen' | 'write'
let seqPlaced=[],seqPoolOrder=[],seqChecked=false,seqSub='it';
let arSeqDeck=[],arSeqIdx=0;
let seqTtsTimer=null; // بيتخزّن فيه الـ setTimeout الخاص بـتشغيل النطق التلقائي في AR mode، لكي نقدر نلغيه لو الجملة اتغيّرت قبل ما يجري
function seqStopTts(){ // يلغي أي نطق متأخر (التايمر) + أي نطق شغال الآن
  clearTimeout(seqTtsTimer);
  seqTtsTimer=null;
  speechSynthesis.cancel();
}
function seqS(){return (seqSub==='ar'&&!wpChainActive)?arSeqDeck[arSeqIdx]:lDeck[lIdx];}
function seqIsLast(){return (seqSub==='ar'&&!wpChainActive)?arSeqIdx+1>=arSeqDeck.length:lIdx+1>=lDeck.length;}
function seqAdvance(){ // كمّل للجملة الجاية في AR sub-mode (لما المستخدم يبدّل تبويب أو سب-تبويب)
  // ملحوظة: IT sub-mode يُستخدم lDeck/lIdx الذي هي نفسها المستخدمة في تبويبات
  // النطق والكتابة، فمَنفعش نـ advance فيها هنا لكي ما نبوّظ تقدّم المستخدم
  // في التبويبات الآخرة. الـ advance هنا خاص بـ AR deck لكن (arSeqDeck/arSeqIdx).
  // لما السلسلة الأوتوماتيكية شغالة، الترتيب بالعربي يعمل على نفس lDeck/lIdx ليس على arSeqDeck — فمَنفعش نلمس arSeqDeck خالص.
  if(wpChainActive)return;
  if(seqSub!=='ar')return;
  if(arSeqDeck.length===0)return; // ما زال لا توجد deck — seqSetup هيعمله من الصفر
  arSeqIdx++;
  if(arSeqIdx>=arSeqDeck.length){arSeqDeck=shuffle([...AR_SEQ_SENTENCES]);arSeqIdx=0;}
}
function seqWordCount(){return seqS().words.length;}

// drill state — isolates and re-tests just the mispronounced word
let drillMode=false;
let drillTokenIdx=null;
let drillFails=0;
// Per-letter mastery mask for the word currently being drilled. Once a
// letter is heard correctly in ANY attempt it stays "locked" green forever
// for this word, even if a later attempt's alignment doesn't happen to
// match it again — so correct letters are never "forgotten" between
// retries. Reset only when a *new* word starts drilling (see startDrill).
let drillLetterMask=[];

// whole-sentence mic state
let tokenStates=[];           // 'pending'|'ok'|'bad'|'drill'|'skipped'|'auto', one per word
                               // ('auto' = preposition/indefinite article, never graded)
let sentenceAnswered=false;
let sentenceFails=0;

function showLessonLocked(){
  document.getElementById('lLockedMsg').style.display='block';
  document.getElementById('lessonContentWrap').style.display='none';
}
function hideLessonLocked(){
  document.getElementById('lLockedMsg').style.display='none';
  document.getElementById('lessonContentWrap').style.display='';
}
function lStart(){
  loadUnlockedSentences();
  if(wpUnlockedIndices.length===0){
    lDeck=[];lIdx=0;
    showLessonLocked();
    return;
  }
  lDeck=wpUnlockedIndices.map(i=>LESSON_SENTENCES[i]);lIdx=Math.min(loadLessonProgress(),Math.max(0,lDeck.length-1));
  lPassed=0;lStreak=0;lAttempts=0;
  document.getElementById('lRestartBtn').style.display='none';
  hideLessonLocked();
  lRender();
}
function restartLesson(){lStart();}

function lRender(){
  drillMode=false;sentenceAnswered=false;sentenceFails=0;
  pipelineSeenWords=new Set();
  const isSp=currentStudyMode==='speak';
  const isLi=currentStudyMode==='listen';
  const isWr=currentStudyMode==='write';
  const s=lDeck[lIdx];
  tokenStates=s.words.map(w=>(w.type==='omesso'||isAutoSkipWord(w.it))?'auto':'pending');

  document.getElementById('lPronoun').textContent=s.pronoun;
  document.getElementById('lAr').textContent=s.ar;
  document.getElementById('lEn').textContent=s.en;
  document.getElementById('lAr').style.display='';
  document.getElementById('lEn').style.display='';

  // breakdown panel (deep grammar notes, tap any word to hear it)
  const bd=document.getElementById('lBreakdown');
  bd.innerHTML='';
  s.words.forEach((w,wIdx)=>{
    const row=document.createElement('div');
    row.className='bd-row';
    const wordSpan=document.createElement('span');
    const gTopicId=w.grammarId||findGrammarTopicId(w.it);
    const vInfo=findVerbFromNote(w.note);
    let auxWord=null;
    for(let j=wIdx-1;j>=0;j--){
      if(s.words[j].type==='omesso'){auxWord=s.words[j];break;}
      if(s.words[j].type==='verbo')break; // فعل سابق مختلف — منوقفش هنا
    }
    passiveTrackWord(w,auxWord);
    wordSpan.className='bd-word word-tap'+(gTopicId?' has-grammar':'')+(vInfo?' has-verb':'');
    wordSpan.textContent=w.it;
    if(w.color){wordSpan.style.color=w.color;wordSpan.style.fontWeight='900';wordSpan.style.background=w.color+'18';wordSpan.style.borderBottom='3px solid '+w.color;wordSpan.style.borderRadius='6px';wordSpan.style.padding='1px 4px';}
    wordSpan.onclick=()=>speakWord(w.it);
    row.appendChild(wordSpan);
    if(gTopicId){
      const gBtn=document.createElement('span');
      gBtn.className='bd-grammar-btn';
      gBtn.textContent='📘';
      gBtn.title='القاعدة الجرامرية';
      gBtn.onclick=(e)=>{e.stopPropagation();openGrammarModal(gTopicId,w.it);};
      row.appendChild(gBtn);
    }
    if(vInfo){
      const vBtn=document.createElement('span');
      vBtn.className='bd-verb-btn';
      vBtn.textContent='📗';
      vBtn.title='تصريف الفعل';
      vBtn.onclick=(e)=>{e.stopPropagation();openVerbModal(vInfo.idx,vInfo.tab);};
      row.appendChild(vBtn);
    }
    const noteSpan=document.createElement('span');
    noteSpan.className='bd-note';
    noteSpan.textContent=w.note?(w.ar+' — '+w.note):w.ar;
    row.appendChild(noteSpan);
    bd.appendChild(row);
  });


  document.getElementById('lHeard').textContent='';
  document.getElementById('lBadge').className='badge';
  document.getElementById('lNextBtn').className='next-btn';
  document.getElementById('lSkipBtn').style.display=isSp?'inline-block':'none';
  document.getElementById('lCard').className='card';
  document.getElementById('drillBox').classList.remove('show');
  document.getElementById('lMicBtn').className='mic-btn';
  document.getElementById('lMicBtn').disabled=false;
  document.getElementById('lMicBtn').onclick=lToggleMic;
  document.getElementById('lMicLbl').className='mic-lbl';
  document.getElementById('lMicLbl').textContent='اضغط وقل الجملة كلها';
  document.getElementById('lTtsBtn').style.display='inline-block';
  document.getElementById('lProgFill').style.width=(lIdx/lDeck.length*100)+'%';
  lUpdateScore();
  lRenderTokens();

  // Show the correct panel for current study mode
  document.getElementById('lTokens').style.display=isSp?'flex':'none';
  document.getElementById('listenPanel').style.display=isLi?'block':'none';
  if(!isLi)hideListenQuestion();
  document.getElementById('writePanel').style.display=isWr?'flex':'none';
  document.getElementById('lMicBtn').style.display=isSp?'flex':'none';
  document.getElementById('lMicLbl').style.display=isSp?'block':'none';
  if(isLi)seqSetup();
  if(isWr)writeSetup();
}

function lRenderTokens(){
  const s=lDeck[lIdx];
  const wrap=document.getElementById('lTokens');
  wrap.innerHTML='';
  s.words.forEach((w,i)=>{
    const span=document.createElement('span');
    span.className='token '+tokenStates[i];
    span.textContent=w.it;
    if(w.color){span.style.color=w.color;span.style.fontWeight='900';span.style.borderColor=w.color;span.style.background=w.color+'18';}
    span.title=tokenStates[i]==='auto'?w.ar+' (ليس لازم تتنطق لوحدها)':w.ar;
    span.onclick=()=>speakWord(w.it);
    wrap.appendChild(span);
  });
}

function lUpdateScore(){
  document.getElementById('lAvg').textContent=lAttempts?Math.round(lPassed/lAttempts*100)+'%':'0%';
  document.getElementById('lAll').textContent=(lIdx+1)+'/'+lDeck.length;
  if(csActive){ csUpdateConvoCountLabel(); }
  else { document.getElementById('lStreakLbl').textContent='🔥 streak'; document.getElementById('lStreak').textContent=lStreak; }
}
// أثناء دراسة المحادثة، نعرض رقم المحادثة الحالية بدل الـ streak (مش مفيد وقت الدراسة الموجّهة).
function csUpdateConvoCountLabel(){
  const num=qSceneList.indexOf(csSceneId)+1;
  document.getElementById('lStreakLbl').textContent='💬 المحادثة';
  document.getElementById('lStreak').textContent=toArabicDigits(Math.max(num,1))+'/'+toArabicDigits(qSceneList.length||1);
}

function lSpeak(){
  const s=(currentStudyMode==='listen'&&seqSub==='ar'&&arSeqDeck[arSeqIdx])
    ?arSeqDeck[arSeqIdx]:lDeck[lIdx];
  speakWord(s.it);
}

// بيقسّم جملة طويلة لأجزاء طبيعية (عند علامات الترقيم، وعند حروف عطف زي
// e/ma/perché لو الجزء طويل قوي) عشان القراءة تطلع بفواصل شبه الإنسان
// بدل ما تتقال دفعة واحدة على نفس واحد.
function lpSplitSpeechChunks(text){
  const rough=text.split(/([,;:.!?]+)/);
  let chunks=[];
  for(let i=0;i<rough.length;i+=2){
    const seg=(rough[i]||'').trim();
    const punct=rough[i+1]||'';
    if(seg)chunks.push(seg+punct);
  }
  if(!chunks.length)chunks=[text];
  const conj=/\b(e|ma|o|però|perché|quando|che)\b/i;
  const out=[];
  chunks.forEach(c=>{
    const words=c.trim().split(/\s+/);
    if(words.length<=6){out.push(c.trim());return;}
    const m=conj.exec(c);
    if(m&&m.index>0){
      out.push(c.slice(0,m.index).trim());
      out.push(c.slice(m.index).trim());
    }else{
      out.push(c.trim());
    }
  });
  return out.filter(Boolean);
}
// بيختار أحسن صوت إيطالي متاح على جهاز المستخدم (مش الصوت الافتراضي)، لأن
// أجهزة كتير عندها أصوات "Enhanced/Premium/Google" أطبع بكتير من الافتراضي.
// الأصوات بتتحمّل بشكل غير متزامن في بعض المتصفحات، فبنكاش النتيجة أول ما
// تتحمّل وبنعيد المحاولة لو لسه مفيش أصوات.
let lpItalianVoice=null,lpVoicesReady=false;
function lpEnsureItalianVoice(){
  if(lpVoicesReady)return;
  const pick=()=>{
    const voices=speechSynthesis.getVoices();
    if(!voices.length)return;
    const itVoices=voices.filter(v=>v.lang&&v.lang.toLowerCase().startsWith('it'));
    if(!itVoices.length){lpVoicesReady=true;return;}
    const score=v=>{
      const n=(v.name||'').toLowerCase();
      let s=0;
      if(n.includes('enhanced')||n.includes('premium')||n.includes('neural')||n.includes('natural'))s+=3;
      if(n.includes('google'))s+=2;
      if(v.localService===false)s+=1;
      return s;
    };
    itVoices.sort((a,b)=>score(b)-score(a));
    lpItalianVoice=itVoices[0];
    lpVoicesReady=true;
  };
  pick();
  if(!lpVoicesReady)speechSynthesis.onvoiceschanged=pick;
}
// كل نطق بياخد رقم (token) خاص بيه؛ لو اتنادى speakWord أو lpStopSpeaking
// تاني قبل ما السلسلة تخلص، الرقم بيتغيّر فتوقف السلسلة القديمة تلقائيًا
// بدل ما تكمل تقول أجزاء إضافية بعد الإيقاف أو فوق نطق جديد.
let lpSpeechToken=0;
function speakWord(text){
  const clean=text.replace(/^[.,!?;:"'""'']+|[.,!?;:"'""'']+$/g,'').trim();
  if(!clean)return;
  speechSynthesis.cancel();
  lpEnsureItalianVoice();
  const myToken=++lpSpeechToken;
  const parts=lpSplitSpeechChunks(clean);
  let idx=0;
  const speakNext=()=>{
    if(myToken!==lpSpeechToken||idx>=parts.length)return;
    const utt=new SpeechSynthesisUtterance(parts[idx]);
    utt.lang='it-IT';utt.rate=0.72;
    if(lpItalianVoice)utt.voice=lpItalianVoice;
    utt.onend=()=>{
      if(myToken!==lpSpeechToken)return;
      idx++;
      if(idx<parts.length)setTimeout(speakNext,parts.length>1?200:0);
    };
    speechSynthesis.speak(utt);
  };
  speakNext();
}
// زرار "إيقاف" في تاب الاستماع — بيوقف أي قراءة شغالة فورًا (سواء كانت
// الفقرة كاملة، أو "اسمع من هنا"، أو كلمة واحدة). شغال في كل القطع من غير
// ما يحتاج كود منفصل لكل قطعة، لأنه بيوقف محرك النطق نفسه مباشرة.
function lpStopSpeaking(){
  lpSpeechToken++;
  speechSynthesis.cancel();
}

// ── Sentence-level mic (first pass at the whole sentence) ──
function lToggleMic(){
  if(sentenceAnswered||micBusy||drillMode)return;
  smartListen({
    micBtnId:'lMicBtn',micLblId:'lMicLbl',mode:'sentence',
    onResult:(alts)=>{
      document.getElementById('lMicLbl').textContent='اضغط وقل الجملة كلها';
      lJudgeSentence(alts);
    },
    onError:(err)=>{
      document.getElementById('lMicLbl').textContent='اضغط وقل الجملة كلها';
      document.getElementById('lHeard').textContent=micErrorMessage(err);
    }
  });
}

// Tokenizes what was heard and best-fit matches it word-by-word against the
// target sentence, marking each word ok/bad individually (instead of one
// score for the whole sentence).
function lJudgeSentence(alts){
  lAttempts++;
  sentenceFails++;
  const s=lDeck[lIdx];
  const heard=alts[0];
  document.getElementById('lHeard').textContent='🎧 سمعت: "'+heard+'"';

  const heardTokens=norm(heard).split(/\s+/).filter(Boolean);
  const used=new Array(heardTokens.length).fill(false);
  const matched=[];
  s.words.forEach(w=>{
    const target=norm(w.it);
    let best=-1,bestScore=0;
    heardTokens.forEach((ht,hi)=>{
      if(used[hi])return;
      const sc=similarity(norm(ht),target);
      if(sc>bestScore){bestScore=sc;best=hi;}
    });
    matched.push({score:bestScore,heardIdx:best});
    if(best>=0)used[best]=true;
  });

  const THRESH=0.72;
  let allOk=true;
  const badIdxs=[];
  s.words.forEach((w,i)=>{
    if(tokenStates[i]==='ok'||tokenStates[i]==='skipped'||tokenStates[i]==='auto')return;
    if(matched[i].score>=THRESH){tokenStates[i]='ok';}
    else{tokenStates[i]='bad';badIdxs.push(i);allOk=false;}
  });
  lRenderTokens();

  if(allOk){
    // flip auto tokens to ok so the whole sentence row turns green
    const okIdxsThisPass=s.words.map((w,i)=>i).filter(i=>tokenStates[i]==='ok');
    addSkillScore('pronunciation',100,true);
    tokenStates=tokenStates.map(st=>st==='auto'?'ok':st);
    lPassed++;lStreak++;
    sentenceAnswered=true;
    const showDone=()=>{
      document.getElementById('lBadge').innerHTML='🌟 ممتاز! الجملة كلها صحيحة ✅';
      document.getElementById('lBadge').className='badge ok show';
      document.getElementById('lCard').className='card ok';
      floatEmoji('🌟');
      document.getElementById('lMicBtn').disabled=true;
      document.getElementById('lSkipBtn').style.display='none';
      document.getElementById('lNextBtn').className='next-btn show';
      document.getElementById('lNextBtn').textContent=lIdx+1>=lDeck.length?'أنهيت المجموعة 🏆':'← الجملة التالية';
      wpMaybeChainAfterSpeak();
    };
    document.getElementById('lMicBtn').disabled=true;
    maybeRunWordPipeline(okIdxsThisPass,showDone);
  } else {
    const okCount=s.words.filter((w,i)=>tokenStates[i]==='ok'||tokenStates[i]==='auto').length;
    addSkillScore('pronunciation',Math.round(okCount/s.words.length*100),false);
    lStreak=0;
    document.getElementById('lBadge').innerHTML='⚠️ في كلمات خطأ — سنتدرّب عليها';
    document.getElementById('lBadge').className='badge mid show';
    document.getElementById('lSkipBtn').style.display='inline-block';
    startDrill(badIdxs[0]);
  }
  lUpdateScore();
}

// لما الجملة تعدي كاملة في وضع النطق والسلسلة كانت انطلقت من تبويب نطق الكلمات، نكمل أوتوماتيكيا لتبويب الترتيب.
function wpMaybeChainAfterSpeak(){
  if(!wpChainActive)return;
  setTimeout(()=>setStudyMode('listen'),900);
}

// ── Drill mode: isolate one mispronounced word and retest just that word ──
function startDrill(tokenIdx){
  drillMode=true;
  drillTokenIdx=tokenIdx;
  drillFails=0;
  const s=lDeck[lIdx];
  const w=s.words[tokenIdx];
  tokenStates[tokenIdx]='drill';
  lRenderTokens();

  drillLetterMask=new Array(norm(w.it).length).fill(false);
  document.getElementById('drillWord').textContent=w.it;
  document.getElementById('drillAr').textContent=w.ar;
  document.getElementById('drillNote').textContent=w.note||'';
  document.getElementById('drillAttempts').textContent='قول هذه الكلمة لوحدها';
  document.getElementById('drillBox').classList.add('show');
  document.getElementById('lTtsBtn').style.display='none';

  document.getElementById('lMicBtn').className='mic-btn';
  document.getElementById('lMicBtn').disabled=false;
  document.getElementById('lMicBtn').onclick=drillToggleMic;
  document.getElementById('lMicLbl').textContent='اضغط وقل الكلمة';

  setTimeout(()=>speakWord(w.it),300);
}

function drillToggleMic(){
  if(micBusy)return;
  smartListen({
    micBtnId:'lMicBtn',micLblId:'lMicLbl',mode:'word',
    onResult:(alts)=>{
      document.getElementById('lMicLbl').textContent='اضغط وقل الكلمة';
      drillJudge(alts);
    },
    onError:(err)=>{
      document.getElementById('lMicLbl').textContent='اضغط وقل الكلمة';
      document.getElementById('lHeard').textContent=micErrorMessage(err);
    }
  });
}

function drillJudge(alts){
  const s=lDeck[lIdx];
  const w=s.words[drillTokenIdx];
  const target=norm(w.it);
  let bestSim=0;
  alts.forEach(a=>{const sc=similarity(norm(a),target);if(sc>bestSim)bestSim=sc;});
  const heard=alts[0];
  document.getElementById('lHeard').textContent='🎧 سمعت: "'+heard+'"';

  // ثبّت أي حرف اتقال صحيح في المحاولة هذه فوق أي حروف كانت متثبتة من قبل —
  // الحرف الذي يتثبت "صحيح" مرة، يفضل صحيح لهذه الكلمة لحد ما تخلص أو تتخطاها،
  // حتى لو محاولة أخرى مختلفة مالقتهوش في نفس المكان.
  if(drillLetterMask.length!==target.length) drillLetterMask=new Array(target.length).fill(false);
  alts.forEach(a=>{
    const m=alignMismatches(w.it,a);
    m.forEach((ok,i)=>{ if(ok) drillLetterMask[i]=true; });
  });
  const totalLetters=drillLetterMask.length;
  const okLetters=drillLetterMask.filter(Boolean).length;
  const fullyCorrect=totalLetters>0&&okLetters>=totalLetters;

  if(fullyCorrect||bestSim>=0.72){
    tokenStates[drillTokenIdx]='ok';
    lRenderTokens();
    floatEmoji('✅');
    document.getElementById('drillWord').innerHTML=renderWordLetterMaskHtml(w.it,new Array(totalLetters).fill(true));
    document.getElementById('drillAttempts').textContent='✅ جيد!';
    finishDrillWord();
  } else {
    drillFails++;
    document.getElementById('drillWord').innerHTML=renderWordLetterMaskHtml(w.it,drillLetterMask);
    if(drillFails>=5){
      // 5 tries on this one word without finishing all its letters — skip
      // it automatically instead of trapping the learner in an endless loop.
      tokenStates[drillTokenIdx]='skipped';
      lRenderTokens();
      floatEmoji('⏭️');
      document.getElementById('drillAttempts').textContent='⏭️ تخطينا هذه الكلمة، يلا نكمل';
      finishDrillWord();
    } else {
      floatEmoji('🔁');
      document.getElementById('drillAttempts').textContent='ثبّتنا '+okLetters+' من '+totalLetters+' حروف صحيح — قول الكلمة مرة أخرى وركّز في الحروف الحمرا';
      setTimeout(()=>speakWord(w.it),300);
    }
  }
}

// Shared "leave the drill box" step for both a correct attempt and an
// auto-skip after 3 fails — moves on to the next bad word, or wraps up the
// sentence if that was the last one.
function skipCurrentDrillWord(){
  if(!drillMode||drillTokenIdx==null)return;
  tokenStates[drillTokenIdx]='skipped';
  lRenderTokens();
  document.getElementById('drillAttempts').textContent='⏭️ تم تخطي هذه الكلمة';
  finishDrillWord();
}

function finishDrillWord(){
  const completedIdx=drillTokenIdx;
  const wasSkipped=tokenStates[completedIdx]==='skipped';
  setTimeout(()=>{
    document.getElementById('lTtsBtn').style.display='inline-block';
    document.getElementById('lMicBtn').onclick=lToggleMic;
    document.getElementById('lMicLbl').textContent='اضغط وقل الجملة كلها';
    document.getElementById('drillBox').classList.remove('show');
    drillMode=false;

    const runNext=()=>{
      const nextBad=tokenStates.findIndex(st=>st==='bad');
      if(nextBad>=0){
        startDrill(nextBad);
      } else {
        sentenceAnswered=true;
        tokenStates=tokenStates.map(st=>st==='auto'?'ok':st);
        const hadSkips=tokenStates.includes('skipped');
        if(!hadSkips){lPassed++;lStreak++;}
        else{lPassed+=0.5;lStreak=0;}
        document.getElementById('lBadge').innerHTML=hadSkips?'👍 خلصنا الجملة — كملنا بعض الكلمات مرة أخرى وقت':'🌟 ممتاز! عديت الجملة كلها ✅';
        document.getElementById('lBadge').className='badge ok show';
        document.getElementById('lCard').className='card ok';
        document.getElementById('lMicBtn').disabled=true;
        document.getElementById('lSkipBtn').style.display='none';
        document.getElementById('lNextBtn').className='next-btn show';
        document.getElementById('lNextBtn').textContent=lIdx+1>=lDeck.length?'أنهيت المجموعة 🏆':'← الجملة التالية';
        floatEmoji(hadSkips?'👍':'🏆');
        lUpdateScore();
        wpMaybeChainAfterSpeak();
      }
    };

    if(wasSkipped){ runNext(); return; }
    maybeRunWordPipeline([completedIdx], runNext);
  },700);
}

// ===== WORD INFO + MCQ PIPELINE (مبني على spec_word_pipeline.md) =====
// بعد ما المتعلم ينطق كلمة صحيحة يأتي بانيل معلومة قصير عن هذه الكلمة (فعل/اسم/حرف جر/أداة ربط)
// وبعدين سؤال اختيار من متعدد لازم يأجب صحيح قبل ما يكمل. الكلمات المحذوفة (omesso) والغير
// مصنفة (altro) بتعدي المرحلة هذه ممتازًا لكي متتعطلشش اللعبة مع بيانات قديمة/غير مصنفة.
let pipelineSeenWords=new Set();
let pipelineCurrentWordIdx=null;

function maybeRunWordPipeline(idxs,callback){
  const s=lDeck[lIdx];
  const queue=idxs.filter(i=>{
    if(pipelineSeenWords.has(i))return false;
    const w=s.words[i];
    return w&&w.type&&Array.isArray(w.quiz)&&w.quiz.length>0&&w.type!=='omesso'&&w.type!=='altro';
  });
  queue.forEach(i=>pipelineSeenWords.add(i));
  runPipelineQueue(queue,0,callback);
}
function runPipelineQueue(queue,pos,callback){
  if(pos>=queue.length){callback();return;}
  const idx=queue[pos];
  showWordInfo(idx,pos,queue.length,()=>{
    runWordQuiz(idx,0,()=>{runPipelineQueue(queue,pos+1,callback);});
  });
}
function toArabicDigits(n){
  return String(n).replace(/[0-9]/g,d=>'٠١٢٣٤٥٦٧٨٩'[d]);
}
function buildWordInfoHtml(w){
  const TENSE_AR={presente:'المضارع (Presente)',passato:'الماضي القريب (Passato Prossimo)',imperfetto:'الماضي الناقص (Imperfetto)',imperativo:'الأمر (Imperativo)'};
  if(w.type==='verbo'){
    let html='';
    html+='<div>🔤 الفعل الأصلي (المصدر): <b>'+escHtml(w.verbInfinitive||'')+'</b></div>';
    if(w.group)html+='<div>📚 مجموعة الفعل: <b>'+w.group+'</b></div>';
    if(w.tense)html+='<div>⏱️ الزمن: <b>'+(TENSE_AR[w.tense]||w.tense)+'</b></div>';
    html+='<div>✅ '+(w.regular?'فعل منتظم (يُصرَّف على القاعدة العادية)':'فعل شاذ (له تصريف خاص، احفظه لوحده)')+'</div>';
    if(w.tense==='passato')html+='<div>🤝 الفعل المساعد الخاص به: <b>'+(w.aux==='essere'?'essere':'avere')+'</b></div>';
    html+='<div>🎯 '+(w.transitive?'فعل متعدٍ (يأخذ مفعول به مباشر)':'فعل لازم (ليس يأخذ مفعول به مباشر)')+'</div>';
    return html;
  }
  if(w.type==='nome_unit'){
    let html='';
    html+='<div>🚻 الجنس: <b>'+(w.gender==='f'?'مؤنث':'مذكر')+'</b></div>';
    if(w.plural)html+='<div>🔢 صيغة الجمع (تقريبية): <b>'+escHtml(w.plural)+'</b></div>';
    return html;
  }
  if(w.type==='congiunzione'){
    let html='';
    html+='<div>🔗 المعنى هنا: <b>'+escHtml(w.meaning||'')+'</b></div>';
    if(w.grammarId)html+='<div><button class="bd-grammar-btn" style="font-size:22px" onclick="openGrammarModal(\''+escHtml(String(w.grammarId||'')).replace(/'/g,'\\\'')+'\',\''+escHtml(String(w.it||'')).replace(/'/g,'\\\'')+'\')">📘 اعرض القاعدة كاملة</button></div>';
    return html;
  }
  if(w.type==='avverbio'){
    return '<div>⚡ ظرف ثابت: '+escHtml(w.usage||w.note||w.ar||'')+'</div>';
  }
  if(w.type==='pronome'){
    return '<div>👤 ضمير: '+escHtml(w.usage||w.note||w.ar||'')+'</div>';
  }
  if(w.type==='sintagma_prep'){
    let html='';
    html+='<div>🧩 حرف الجر: <b>'+escHtml(w.prep||'')+'</b></div>';
    if(w.prepNote)html+='<div>💡 '+escHtml(w.prepNote)+'</div>';
    return html;
  }
  if(w.type==='aggettivo'){
    let html='';
    if(w.invariant||!w.forms){
      html+='<div>🧷 كلمة ثابتة الشكل (ظرف/صفة بلا تصريف حسب الجنس أو العدد)</div>';
    } else {
      html+='<div>📐 صيغها:</div>';
      html+='<div>مذكر مفرد: <b>'+escHtml(w.forms.ms||'')+'</b> — مؤنث مفرد: <b>'+escHtml(w.forms.fs||'')+'</b></div>';
      html+='<div>مذكر جمع: <b>'+escHtml(w.forms.mp||'')+'</b> — مؤنث جمع: <b>'+escHtml(w.forms.fp||'')+'</b></div>';
    }
    return html;
  }
  return '<div>'+escHtml(w.note||'')+'</div>';
}
function showWordInfo(idx,pos,total,next){
  const s=lDeck[lIdx];
  const w=s.words[idx];
  pipelineCurrentWordIdx=idx;
  document.getElementById('drillBox').classList.remove('show');
  document.getElementById('wordQuizBox').style.display='none';
  document.getElementById('wordInfoProgress').textContent='معلومة عن الكلمة — '+toArabicDigits(pos+1)+'/'+toArabicDigits(total)+' كلمات';
  document.getElementById('wordInfoWord').textContent=w.it;
  document.getElementById('wordInfoBody').innerHTML=buildWordInfoHtml(w);
  document.getElementById('wordInfoBox').style.display='block';
  document.getElementById('lMicBtn').style.display='none';
  document.getElementById('lMicLbl').style.display='none';
  document.getElementById('lTtsBtn').style.display='none';
  setTimeout(()=>speakWord(w.it),200);
  document.getElementById('wordInfoNextBtn').onclick=()=>{
    document.getElementById('wordInfoBox').style.display='none';
    next();
  };
}
function wordPipelineAfterInfo(){ /* placeholder kept for the inline onclick in HTML; real handler is bound per-word in showWordInfo */ }
function runWordQuiz(idx,qPos,next){
  const s=lDeck[lIdx];
  const w=s.words[idx];
  if(!w.quiz||qPos>=w.quiz.length){
    document.getElementById('wordQuizBox').style.display='none';
    document.getElementById('lMicBtn').style.display='';
    document.getElementById('lMicLbl').style.display='';
    document.getElementById('lTtsBtn').style.display='inline-block';
    next();
    return;
  }
  const item=w.quiz[qPos];
  document.getElementById('wordQuizQ').textContent=item.q;
  document.getElementById('wordQuizFeedback').textContent='';
  const optsWrap=document.getElementById('wordQuizOptions');
  optsWrap.innerHTML='';
  item.options.forEach((opt,oi)=>{
    const btn=document.createElement('button');
    btn.className='write-check-btn';
    btn.style.width='100%';
    btn.textContent=opt;
    btn.onclick=()=>{
      if(oi===item.correct){
        document.getElementById('wordQuizFeedback').textContent='✅ صحيح!';
        floatEmoji('✅');
        setTimeout(()=>runWordQuiz(idx,qPos+1,next),500);
      } else {
        document.getElementById('wordQuizFeedback').textContent='❌ ليس هكذا، جرب مرة أخرى';
      }
    };
    optsWrap.appendChild(btn);
  });
  document.getElementById('wordInfoBox').style.display='none';
  document.getElementById('wordQuizBox').style.display='block';
}

function lSkipSentence(){
  tokenStates=tokenStates.map(st=>st==='ok'?'ok':'skipped');
  lRenderTokens();
  if(drillMode){
    drillMode=false;
    document.getElementById('drillBox').classList.remove('show');
    document.getElementById('lMicBtn').onclick=lToggleMic;
    document.getElementById('lTtsBtn').style.display='inline-block';
  }
  lStreak=0;
  sentenceAnswered=true;
  document.getElementById('lMicBtn').disabled=true;
  document.getElementById('lSkipBtn').style.display='none';
  document.getElementById('lNextBtn').className='next-btn show';
  document.getElementById('lNextBtn').textContent=lIdx+1>=lDeck.length?'أنهيت المجموعة 🏆':'← الجملة التالية';
  wpMaybeChainAfterSpeak();
}

function lNext(){
  if(wpChainActive){
    // في دراسة المحادثة التقدّم بين المراحل أوتوماتيكي — دوس "التالي" يدفعها للمرحلة
    // الجاية على طول من غير ما ننزل على lEnd() بتاعة الديك الحقيقي بالغلط.
    if(currentStudyMode==='speak'){ setStudyMode('listen'); return; }
    if(currentStudyMode==='listen'){ if(seqSub==='it'){ setStudyMode('write'); } return; }
    if(currentStudyMode==='write'){ wpChainAdvanceToNextSentence(); return; }
    return;
  }
  saveLessonProgress();
  if(currentStudyMode==='listen'&&seqSub==='ar'&&!wpChainActive){
    arSeqIdx++;
    if(arSeqIdx>=arSeqDeck.length){
      arSeqDeck=shuffle([...AR_SEQ_SENTENCES]);arSeqIdx=0;
      document.getElementById('lBadge').innerHTML='🏆 عدّيت كل الجمل! هنرجّع نبدأ من الأول.';
      document.getElementById('lBadge').className='badge ok show';
      setTimeout(()=>seqSetup(),1400);
    } else { seqSetup(); }
    return;
  }
  // لو دس على "جملة أخرى" قبل ما يحل الجملة الحالية (يعني تخطّاها من غير إجابة)،
  // بتتحسب محاولة فاشلة (صفر) لكي النسبة متبقاش بتتجاهل الجمل الذي اتخطّت.
  if(!sentenceAnswered){
    lAttempts++;
    lStreak=0;
  }
  lIdx++;
  saveLessonProgress();
  if(lIdx>=lDeck.length){lEnd();return;}
  lRender();
}

function lEnd(){
  document.getElementById('lMicBtn').disabled=true;
  document.getElementById('lNextBtn').className='next-btn';
  document.getElementById('lSkipBtn').style.display='none';
  const pct=lAttempts?Math.round(lPassed/lAttempts*100):0;
  document.getElementById('lBadge').innerHTML='🏆 أنهيت كل الـ '+lDeck.length+' جملة! نسبة النجاح: <b>'+pct+'%</b>';
  document.getElementById('lBadge').className='badge ok show';
  document.getElementById('lRestartBtn').style.display='inline-block';
  floatEmoji('🏆');
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js').catch(() => {});
}

start();
// Start loading the offline speech engine in the background right away, so
// it's hopefully ready by the time the user presses the mic. If it's not
// ready yet, the mic falls back to the online engine automatically.
ensureWhisperLoaded();

// ── Study mode switcher ──
// بيبدّل البانيل لكن من غير ما يعيد تحميل الجملة أو يمسح tokenStates —
// هكذا لو المستخدم بدّل موود وهو في نص جملة، التقدم في وضع النطق بيتحفظ.
// لما وضع الترتيب (listen) يخلص والسلسلة كانت من تبويب نطق الكلمات، نكمل أوتوماتيكيا لوضع الكتابة.
function wpMaybeChainAfterListen(){
  if(!wpChainActive)return;
  if(seqSub==='it'&&!wpChainItOnly){
    setTimeout(()=>{ setSeqSub('ar'); },900);
  } else {
    setTimeout(()=>setStudyMode('write'),900);
  }
}

function setStudyMode(mode){
  if(micBusy)return;
  grammarHide();
  const prevMode=currentStudyMode;
  currentStudyMode=mode;
  seqStopTts(); // قفل أي نطق AR متأخر أو شغال من التبويب الذي كنا فيه، قبل ما نبدّل
  ['speak','listen','write'].forEach(m=>{
    document.getElementById('st'+m.charAt(0).toUpperCase()+m.slice(1))
      .classList.toggle('active',m===mode);
  });

  // إيقاف الـ drill بنظافة لو كان شغّال
  if(drillMode){
    drillMode=false;
    document.getElementById('drillBox').classList.remove('show');
    document.getElementById('lMicBtn').onclick=lToggleMic;
    document.getElementById('lTtsBtn').style.display='inline-block';
    document.getElementById('lMicLbl').textContent='اضغط وقل الجملة كلها';
  }

  const isSp=mode==='speak', isLi=mode==='listen', isWr=mode==='write';

  // ── إظهار / إخفاء البانيلات ──
  document.getElementById('lTokens').style.display=isSp?'flex':'none';
  document.getElementById('listenPanel').style.display=isLi?'block':'none';
  if(!isLi)hideListenQuestion();
  document.getElementById('writePanel').style.display=isWr?'flex':'none';
  document.getElementById('lMicBtn').style.display=isSp?'flex':'none';
  document.getElementById('lMicLbl').style.display=isSp?'block':'none';

  // ── مسح الـ UI الليسترك ──
  document.getElementById('lHeard').textContent='';
  document.getElementById('lBadge').className='badge';
  document.getElementById('lSkipBtn').style.display=isSp?'inline-block':'none';
  document.getElementById('lCard').className='card';
  document.getElementById('lNextBtn').className='next-btn';

  if(isSp){
    // رجوع لوضع النطق — حافظ على tokenStates و sentenceAnswered كما هم
    document.getElementById('lTtsBtn').style.display='inline-block';
    document.getElementById('lMicBtn').onclick=lToggleMic;
    document.getElementById('lMicBtn').disabled=sentenceAnswered;
    document.getElementById('lMicBtn').className='mic-btn';
    document.getElementById('lMicLbl').className='mic-lbl';
    document.getElementById('lMicLbl').textContent='اضغط وقل الجملة كلها';
    document.getElementById('lBreakdown').style.display='flex';
    document.getElementById('lSkipBtn').style.display='inline-block';
    const sc=lDeck[lIdx];
    lRenderTokens();
    if(sentenceAnswered){
      document.getElementById('lNextBtn').className='next-btn show';
      document.getElementById('lNextBtn').textContent=lIdx+1>=lDeck.length?'أنهيت المجموعة 🏆':'← الجملة التالية';
    }
  }
  if(isLi){
    if(prevMode!==mode) seqAdvance(); // بدّلنا للتبويب هذا من تبويب مرة أخرى — كمّل للجملة الجاية، ليس نفس القديمة
    seqSetup(); // seqSetup يدير الـ breakdown بنفسه
    showListenQuestion();
  }
  if(isWr){
    document.getElementById('lBreakdown').style.display='flex';
    document.getElementById('lSkipBtn').style.display='inline-block';
    const sc=lDeck[lIdx];
    writeSetup();
  }
}


// ── LISTENING MICRO-QUIZ ──
function hideListenQuestion(){const p=document.getElementById('listenQuizPanel'); if(p)p.classList.remove('show'); currentListenQuestion=null;}
function makeListenQuestion(s){
  const pool=LESSON_SENTENCES.filter(x=>x!==s);
  const distractors=shuffle(pool).slice(0,3).map(x=>x.ar||x.en||x.it);
  const options=shuffle([s.ar||s.en||s.it,...distractors]);
  return {prompt:'استمع إلى الجملة، واختار معناها الصحيح:',answer:options.indexOf(s.ar||s.en||s.it),options};
}
function showListenQuestion(){
  const s=seqS(); if(!s)return;
  currentListenQuestion=makeListenQuestion(s);
  document.getElementById('listenQPrompt').textContent=currentListenQuestion.prompt;
  const wrap=document.getElementById('listenQOptions'); wrap.innerHTML='';
  currentListenQuestion.options.forEach((op,i)=>{const b=document.createElement('button'); b.className='listen-q-option'; b.textContent=op; b.onclick=()=>answerListenQuestion(i); wrap.appendChild(b);});
  document.getElementById('listenQuizPanel').classList.add('show');
  setTimeout(()=>speakWord(s.it),250);
}
function answerListenQuestion(i){
  if(!currentListenQuestion)return;
  const q=currentListenQuestion, opts=[...document.getElementById('listenQOptions').children];
  opts.forEach((b,idx)=>{b.disabled=true; if(idx===q.answer)b.classList.add('ok');});
  const ok=i===q.answer; if(!ok&&opts[i])opts[i].classList.add('bad');
  addSkillScore('listening',ok?100:35,ok);
  currentListenQuestion=null;
}

// ── SEQUENCE MODE ──
// IT sub-mode: shuffled Italian tiles; word audio plays on each pick (no full-sentence auto-play).
// AR sub-mode: full sentence auto-plays in Italian; user arranges Arabic-labelled tiles.
// Tiles where ar is a grammar description (starts with '(') keep the Italian word as their label.

function seqArLabel(w){
  // If Arabic translation is a grammar placeholder, show Italian word instead
  return (!w.ar||w.ar.startsWith('('))?w.it:w.ar;
}

function setSeqSub(sub){
  hideListenQuestion();
  seqStopTts(); // قفل أي نطق متأخر من السب-تبويب الذي كنا فيه
  const prevSub=seqSub;
  seqSub=sub;
  document.getElementById('seqSubIt').classList.toggle('active',sub==='it');
  document.getElementById('seqSubAr').classList.toggle('active',sub==='ar');
  document.getElementById('lAr').style.display='';
  document.getElementById('lEn').style.display='';
  if(sub==='ar'&&prevSub!=='ar') seqAdvance(); // داخلين على AR من تبويب مرة أخرى — كمّل للجملة الجاية
  seqSetup();
  showListenQuestion();
}

function seqSetup(){
  if(seqSub==='ar'&&!wpChainActive&&arSeqDeck.length===0){arSeqDeck=shuffle([...AR_SEQ_SENTENCES]);arSeqIdx=0;}
  const s=seqS();
  seqChecked=false;
  seqPlaced=[];
  seqPoolOrder=shuffle(s.words.map((_,i)=>i));

  // Tile containers flow LTR for Italian tiles (correct reading order while
  // building an Italian sentence) and RTL for Arabic tiles.
  document.getElementById('seqAnswer').classList.toggle('dir-rtl',seqSub==='ar');
  document.getElementById('seqPool').classList.toggle('dir-rtl',seqSub==='ar');

  // ── Sync the header translations to THIS sentence (not lDeck[lIdx]) ──
  // AR mode: hide the Arabic (it's the answer) — show English hint only
  // IT mode: show both Arabic + English as usual
  const arEl=document.getElementById('lAr');
  const enEl=document.getElementById('lEn');
  arEl.textContent=s.ar;
  enEl.textContent=s.en;
  if(seqSub==='ar'){
    arEl.style.display='none';   // الإجابة — نخبّيها
    enEl.style.display='';       // الإنجليمثل فقط كتلميح
  } else {
    arEl.style.display='';
    enEl.style.display='';
  }

  // AR mode: auto-play full Italian sentence (task = hear then arrange Arabic)
  // IT mode: no auto-play — individual word plays on pick
  if(seqSub==='ar'){
    const utt=new SpeechSynthesisUtterance(s.it);
    utt.lang='it-IT';utt.rate=0.75;
    clearTimeout(seqTtsTimer); // امسح أي تايمر قديم متأخر، لكي ما يجيش يشغّل جملة قديمة بعد ما الجملة اتغيّرت
    seqTtsTimer=setTimeout(()=>{speechSynthesis.cancel();speechSynthesis.speak(utt);},700);
  }

  // TTS button: visible in both modes
  document.getElementById('lTtsBtn').style.display='inline-block';

  // Update zone label
  document.getElementById('seqZoneLbl').textContent=
    seqSub==='it'?'رتّب بالإيطالي 🔀':'رتّب بالعربي 🔀';

  document.getElementById('lHeard').textContent='';
  document.getElementById('lBadge').className='badge';
  document.getElementById('lBreakdown').style.display='none';
  document.getElementById('seqRevealBtn').style.display='inline-block';
  seqRender();
}

// Returns tile class string including ar modifier when needed
function seqTileClass(...states){
  return ['seq-tile',seqSub==='ar'?'ar':'',...states].filter(Boolean).join(' ');
}

function seqRender(){
  const s=seqS();
  const ar=seqSub==='ar';

  // ── answer zone ──
  const az=document.getElementById('seqAnswer');
  az.innerHTML='';
  if(seqPlaced.length===0){
    const hint=document.createElement('span');
    hint.className='seq-empty-hint';
    hint.textContent=ar?'اختار الكلمات بالعربي بالترتيب الصحيح':'اضغط على الكلمات بالترتيب الصحيح';
    az.appendChild(hint);
    az.classList.remove('has-tiles');
  } else {
    seqPlaced.forEach(wi=>{
      const w=s.words[wi];
      const t=document.createElement('span');
      t.className=seqTileClass('placed');
      t.textContent=ar?seqArLabel(w):w.it;
      t.title=ar?w.it:w.ar;
      if(!seqChecked)t.onclick=()=>seqReturn(wi);
      az.appendChild(t);
    });
    az.classList.add('has-tiles');
  }

  // ── pool ──
  const pl=document.getElementById('seqPool');
  pl.innerHTML='';
  seqPoolOrder.forEach(wi=>{
    if(seqPlaced.includes(wi))return;
    const w=s.words[wi];
    const t=document.createElement('span');
    t.className=seqTileClass();
    t.textContent=ar?seqArLabel(w):w.it;
    t.title=ar?w.it:w.ar;
    if(!seqChecked)t.onclick=()=>seqPick(wi);
    pl.appendChild(t);
  });
}

function seqPick(wi){
  if(seqChecked)return;
  // IT mode: play the individual word audio on selection
  if(seqSub==='it')speakWord(seqS().words[wi].it);
  seqPlaced.push(wi);
  seqRender();
  if(seqPlaced.length===seqWordCount())setTimeout(seqCheck,800);
}

function seqReturn(wi){
  if(seqChecked)return;
  const pos=seqPlaced.indexOf(wi);
  if(pos>=0)seqPlaced.splice(pos,1);
  seqRender();
}

// Arabic word order is more flexible than Italian's, so the AR side of
// sequence-mode can accept more than one correct arrangement. A sentence
// may optionally carry `arOrders`: an array of alternate accepted orders,
// each itself an array of the original word indices (0..n-1) in that
// order — e.g. arOrders:[[6,7,0,1,2,3,4,5]] means "ogni/sera first, then
// Io/leggevo/..." is also correct, in addition to the literal default
// (Italian-mirroring) order. The Italian side (رتّب بالإيطالي) always has
// exactly one correct order: the sentence's actual word order, since
// that's literally what's being practiced there.
function seqAcceptedOrders(s){
  const n=s.words.length;
  const defaultOrder=Array.from({length:n},(_,i)=>i);
  if(seqSub==='it'||!s.arOrders||!s.arOrders.length)return [defaultOrder];
  return [defaultOrder,...s.arOrders];
}

function seqCheck(){
  if(seqChecked)return;
  seqChecked=true;
  const s=seqS();
  // Grade against whichever accepted order the learner's placement matches
  // best, so a valid alternate Arabic ordering doesn't get marked wrong
  // just because it differs from the default literal order.
  const candidates=seqAcceptedOrders(s);
  let best=candidates[0],bestMatches=-1;
  candidates.forEach(c=>{
    let m=0;
    seqPlaced.forEach((wi,pos)=>{if(wi===c[pos])m++;});
    if(m>bestMatches){bestMatches=m;best=c;}
  });
  let correct=0;
  const tiles=document.getElementById('seqAnswer').querySelectorAll('.seq-tile');
  seqPlaced.forEach((wi,pos)=>{
    const ok=(wi===best[pos]);
    if(ok)correct++;
    if(tiles[pos])tiles[pos].className=seqTileClass(ok?'ok':'bad');
  });
  const pct=Math.round(correct/s.words.length*100);
  lAttempts++;
  addSkillScore('grammarOrder',pct,pct>=80);
  if(seqSub==='ar')addSkillScore('listening',Math.round(pct*0.85+15),pct>=80);
  if(pct>=80){lPassed++;lStreak++;floatEmoji('✅');}
  else{lStreak=0;floatEmoji('🔀');}
  lUpdateScore();

  const badge=document.getElementById('lBadge');
  badge.innerHTML=correct+'/'+s.words.length+' كلمة في مكانها الصحيح — <b>'+pct+'%</b>';
  badge.className='badge '+(pct>=80?'ok':pct>=50?'mid':'bad')+' show';
  document.getElementById('lCard').className='card '+(pct>=80?'ok':pct>=50?'mid':'bad');

  document.getElementById('lBreakdown').style.display='flex';
  document.getElementById('lNextBtn').className='next-btn show';
  document.getElementById('lNextBtn').textContent=seqIsLast()?'أنهيت المجموعة 🏆':'← الجملة التالية';
  document.getElementById('seqRevealBtn').style.display='none';
  wpMaybeChainAfterListen();
}

function seqReveal(){
  if(seqChecked)return;
  seqChecked=true;
  const s=seqS();
  const az=document.getElementById('seqAnswer');
  az.innerHTML='';az.classList.add('has-tiles');
  const ar=seqSub==='ar';
  s.words.forEach(w=>{
    const t=document.createElement('span');
    t.className=seqTileClass('ok');
    t.textContent=ar?seqArLabel(w):w.it;
    t.title=ar?w.it:w.ar;
    az.appendChild(t);
  });
  document.getElementById('seqPool').innerHTML='';
  document.getElementById('lBreakdown').style.display='flex';
  document.getElementById('lNextBtn').className='next-btn show';
  document.getElementById('lNextBtn').textContent=seqIsLast()?'أنهيت المجموعة 🏆':'← الجملة التالية';
  document.getElementById('seqRevealBtn').style.display='none';
  skillScores.grammarOrder.reveals++; if(seqSub==='ar')skillScores.listening.reveals++;
  addSkillScore('grammarOrder',35,false); if(seqSub==='ar')addSkillScore('listening',35,false);
  lStreak=0;lUpdateScore();
  wpMaybeChainAfterListen();
}


// ── GRAMMAR MICRO-QUESTIONS (appear after Writing) ──
let currentGrammarQuestion=null;
function grammarHide(){
  const panel=document.getElementById('grammarQuizPanel'); if(panel)panel.classList.remove('show');
  currentGrammarQuestion=null;
}
function sentenceText(s){return (s.it||s.words.map(w=>w.it).join(' ')).trim();}
// النطق يستخدم الجملة الأساسية فقط (s.words).
// الكتابة تستخدم الجملة الأساسية + مثال حرف الجر (s.prepWords).
function writeWords(s){return (s.words||[]).concat(s.prepWords||[]);}
// الجملة كاملة مقسّمة كلمة كلمة (زي ما المستخدم بيكتبها بالظبط) — مش words[] بتاعة
// scenes.js لأنها ممكن تجمع أكتر من كلمة في عنصر واحد (زي "le chiavi")، وده كان
// بيكسر محاذاة المقارنة كلمة-بكلمة في checkWrite() أول ما يوصل لعنصر زي ده.
function writeTargetTokens(s){
  return writeTextIt(s).split(/\s+/).filter(Boolean);
}
function writeTextIt(s){return s.writingIt||sentenceText(s);}
function writeTextAr(s){return s.writingAr||s.ar||'';}
function hasWord(s,rx){return s.words.some(w=>rx.test(norm(w.it)));}
function makeGrammarQuestion(s){
  const txt=sentenceText(s);
  const low=txt.toLowerCase();
  if(/(ho|hai|ha|abbiamo|avete|hanno)\s+\w*(ato|uto|ito)/i.test(txt)){
    const aux=(txt.match(/(ho|hai|ha|abbiamo|avete|hanno)/i)||['ho'])[0];
    return {prompt:'لماذا استخدمنا "'+aux+'" في الجملة؟',options:['لأن الفعل هنا في Passato Prossimo ويُستخدم avere','لأن الفاعل مؤنث مفرد','لأن الجملة في المستقبل','لأن بعد mentre لازم avere'],answer:0,explanation:'في الماضي المركب Passato Prossimo أفعال كثيرًا مثل mangiare / guardare / parlare تأخذ avere: ho mangiato, ho guardato.'};
  }
  if(/(sono|sei|è|e|siamo|siete)\s+\w*(ato|ata|ati|ate)/i.test(txt)){
    return {prompt:'ما القاعدة المهمة مع الأفعال الذي تأخذ essere؟',options:['آخر التصريف بيتفق مع الفاعل في النوع والعدد','نستخدم نفس النهاية دائمًا: -o','لازم نحط avere بعد الفعل','الفاعل لازم يتحذف'],answer:0,explanation:'مع essere في Passato Prossimo لازم الـ participio يتفق مع الفاعل: andato / andata / andati / andate.'};
  }
  if(/mentre/i.test(txt) || /avo|evo|ivo/i.test(txt)){
    return {prompt:'لماذا استخدمنا فعل مثل "guardavo / mangiavo"؟',options:['لكي يوصف حدث مستمر أو خلفية في الماضي','لكي هذا أمر مباشر','لكي هذا مستقبل قريب','لكي الفاعل جمع'],answer:0,explanation:'Imperfetto نستخدمه للخلفية أو العادة أو الحدث المستمر في الماضي. مع mentre شائع جدًا: mentre guardavo = وأنا كنت أشاهد.'};
  }
  const tagged=s.words.find(w=>w.grammarId&&!w.grammarId.startsWith('prep_'));
  if(tagged&&typeof GRAMMAR!=='undefined'){
    const topic=getGrammarTopic(tagged.grammarId);
    if(topic){
      const others=GRAMMAR.filter(g=>g.id!==topic.id);
      const seed=[...tagged.it].reduce((sum,ch)=>sum+ch.charCodeAt(0),0);
      const distractors=[];
      for(let i=0;i<others.length&&distractors.length<3;i++)distractors.push(others[(seed+i*7)%others.length].ar);
      const bal=balanceCorrect([topic.ar,...distractors],0,seed);
      return {prompt:'الكلمة "'+tagged.it+'" هنا مثال على أي قاعدة؟',options:bal.options,answer:bal.correct,explanation:(topic.it?topic.it+' — ':'')+'راجع 📘 '+topic.ar+' لو عايز تفاصيل أكتر.'};
    }
  }
  const prep=s.words.find(w=>['a','in','con','per','da','di'].includes(norm(w.it)));
  if(prep){
    const base=norm(prep.it);
    const profiles=(typeof PREPOSITION_USAGE_PROFILES!=='undefined')?PREPOSITION_USAGE_PROFILES.filter(p=>p.base===base):[];
    if(profiles.length){
      // نفس آلية بناء أسئلة حروف الجر بتاعة جُمل الدرس الإنفينيتي (lesson_manifest.js) —
      // بدائل حقيقية من نفس حرف الجر، مش خيارات عشوائية من فئة تانية خالص.
      const lastWord=norm((prep.it.split(/\s+/).pop()||prep.it));
      const focus=profiles.find(p=>norm(p.it).includes(lastWord)&&norm(p.it)!==base)||profiles[0];
      const optsRaw=buildPrepositionQuestionOptions(focus,{meaning:focus.meaning,form:focus.form,kind:'حرف جر بسيط'});
      const seed=prep.it.length+[...sentenceText(s)].reduce((sum,ch)=>sum+ch.charCodeAt(0),0);
      const bal=balanceCorrect(optsRaw,0,seed);
      return {prompt:'حرف الجر "'+prep.it+'" هنا معناه إيه بالظبط؟',options:bal.options,answer:bal.correct,explanation:focus.description+' — مثال: '+focus.it+' ('+focus.ar+')'};
    }
    return {prompt:'الكلمة "'+prep.it+'" هنا ما وظيفتها؟',options:['حرف جر يربط المعنى بين الكلمات','فعل مساعد في الماضي','ظرف زمن','صفة وصف'],answer:0,explanation:'حروف الجر مثل a / in / con / per / da / di صغيرة، لكنها تُحدّد العلاقة: إلى، في، مع، من، لكي...'};
  }
  const art=s.words.find(w=>['il','lo','la','l','un','una','uno','i','gli','le'].includes(norm(w.it).replace(/'/g,'')));
  if(art){
    return {prompt:'الكلمة "'+art.it+'" تعتبر ما؟',options:['أداة تعريف أو تنكير مرتبطة بالاسم','فعل في الماضي','حرف جر','صفة ملكية'],answer:0,explanation:'الأدوات في الإيطالي تتغير حسب النوع والعدد وبداية الاسم: il/un للمذكر، la/una للمؤنث، وهكذا.'};
  }
  return {prompt:'ما أول شيء نبحث عنه لفهم تركيب الجملة الإيطالية؟',options:['الفعل: زمنه ومَن الفاعل الخاص به','آخر كلمة لكن','علامات الترقيم فقط','الترجمة الحرفية كلمة بكلمة'],answer:0,explanation:'الفعل هو قلب الجملة: منه نعرف الزمن والفاعل، وبعدها نفهم باقي الكلمات حولها.'};
}
function showGrammarQuestion(){
  const s=lDeck[lIdx]; if(!s)return;
  currentGrammarQuestion=makeGrammarQuestion(s);
  const panel=document.getElementById('grammarQuizPanel');
  const prompt=document.getElementById('grammarQPrompt');
  const opts=document.getElementById('grammarQOptions');
  const exp=document.getElementById('grammarQExplain');
  prompt.textContent=currentGrammarQuestion.prompt; opts.innerHTML=''; exp.className='grammar-explain'; exp.textContent='';
  currentGrammarQuestion.options.forEach((op,i)=>{
    const b=document.createElement('button'); b.className='grammar-q-option'; b.textContent=op;
    b.onclick=()=>answerGrammarQuestion(i); opts.appendChild(b);
  });
  panel.classList.add('show');
  document.getElementById('lNextBtn').className='next-btn';
}
function answerGrammarQuestion(i){
  if(!currentGrammarQuestion)return;
  const q=currentGrammarQuestion;
  const opts=[...document.getElementById('grammarQOptions').children];
  opts.forEach((b,idx)=>{b.disabled=true; if(idx===q.answer)b.classList.add('ok');});
  const ok=i===q.answer; if(!ok&&opts[i])opts[i].classList.add('bad');
  addSkillScore('grammarOrder',ok?100:35,ok);
  const exp=document.getElementById('grammarQExplain');
  exp.innerHTML=(ok?'✅ صحيح. ':'❌ ليس تماماً. ')+q.explanation; exp.className='grammar-explain show';
  document.getElementById('lBadge').innerHTML=(ok?'🧩 إجابة الجرامر صحيحة ✅':'🧩 راجع سبب القاعدة فوق') ;
  document.getElementById('lBadge').className='badge '+(ok?'ok':'mid')+' show';
  document.getElementById('lNextBtn').className='next-btn show';
  document.getElementById('lNextBtn').textContent=lIdx+1>=lDeck.length?'أنهيت المجموعة 🏆':'← الجملة التالية';
  currentGrammarQuestion=null;
  wpMaybeChainAfterWrite();
}

// ── WRITE MODE ──
// Show Arabic (+ audio hint via TTS button); user types the Italian sentence.
// Token-by-token Levenshtein check gives per-word green/red feedback.
function writeSetup(){
  const inp=document.getElementById('writeInput');
  inp.value='';inp.disabled=false;
  // في تمرين الكتابة نعرض الجملة الأساسية + مثال حرف الجر معًا
  const sW=lDeck[lIdx];
  if(sW){
    const arEl=document.getElementById('lAr');
    if(arEl){arEl.textContent=writeTextAr(sW);arEl.style.display='';}
  }
  document.getElementById('writeResult').innerHTML='';
  document.getElementById('writeScore').textContent='';
  document.getElementById('writeCheckBtn').disabled=false;
  document.getElementById('lNextBtn').className='next-btn';
  document.getElementById('lHeard').textContent='';
  document.getElementById('lBadge').className='badge';
  grammarHide();
  inp.onkeydown=(e)=>{
    if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();checkWrite();}
  };
  setTimeout(()=>inp.focus(),150);
}

function checkWrite(){
  const s=lDeck[lIdx];
  const inp=document.getElementById('writeInput');
  const typed=inp.value.trim();
  if(!typed)return;

  inp.disabled=true;
  document.getElementById('writeCheckBtn').disabled=true;

  const typedToks=typed.split(/\s+/).filter(Boolean);
  const resultWrap=document.getElementById('writeResult');
  resultWrap.innerHTML='';
  let correctCount=0, gradedCount=0;

  writeTargetTokens(s).forEach((tIt,i)=>{
    const div=document.createElement('div');

    // حروف الجر والمقالات — دائماً صحيح تلقائياً مثل speak mode
    if(isAutoSkipWord(tIt)){
      div.className='wr-tok auto';
      div.textContent=tIt;
      resultWrap.appendChild(div);
      return;
    }

    gradedCount++;
    const target=norm(tIt);
    const userWord=typedToks[i]||'';
    const isOk=similarity(norm(userWord),target)>=0.72;
    if(isOk)correctCount++;

    div.className='wr-tok '+(isOk?'ok':'bad');
    div.textContent=isOk?tIt:(userWord||'—');
    if(!isOk){
      const sp=document.createElement('span');
      sp.className='correct-form';
      sp.textContent='✓ '+tIt;
      div.appendChild(sp);
    }
    resultWrap.appendChild(div);
  });

  // النسبة من الكلمات الأساسية (ليس حروف الجر)
  const pct=gradedCount?Math.round(correctCount/gradedCount*100):0;
  const scoreEl=document.getElementById('writeScore');
  scoreEl.textContent=correctCount+'/'+gradedCount+' كلمة صحيحة — '+pct+'%';
  scoreEl.style.color=pct>=80?'var(--green)':pct>=50?'var(--gold)':'var(--red)';

  lAttempts++;
  addWritingSkillScore(pct,correctCount,gradedCount,pct>=80);
  if(pct>=80){lPassed++;lStreak++;floatEmoji('✅');}
  else{lStreak=0;floatEmoji('📝');}
  lUpdateScore();

  if(csActive){
    csCollectGrammarQuestion();
    document.getElementById('lNextBtn').className='next-btn show';
    document.getElementById('lNextBtn').textContent=lIdx+1>=lDeck.length?'أنهيت المجموعة 🏆':'← الجملة التالية';
    wpMaybeChainAfterWrite();
  } else if(gmDrillActive){
    document.getElementById('lNextBtn').className='next-btn show';
    document.getElementById('lNextBtn').textContent=lIdx+1>=lDeck.length?'أنهيت المراجعة 🏆':'← الجملة التالية';
    wpMaybeChainAfterWrite();
  } else {
    showGrammarQuestion();
  }
}
// نفس منطق showGrammarQuestion لكن من غير ما نعرض بانل — بنجمع السؤال بس عشان
// يتسأل في الكويز اللي بيظهر آخر المحادثة (مش بعد كل جملة لوحدها).
function csCollectGrammarQuestion(){
  const s=lDeck[lIdx]; if(!s)return;
  const q=makeGrammarQuestion(s);
  if(q)csGrammarQuestions.push(q);
}

// لما الكتابة تخلص والسلسلة كانت من تبويب نطق الكلمات، نرجعله للجملة الجاية في نفس التبويب.
function wpMaybeChainAfterWrite(){
  if(!wpChainActive)return;
  setTimeout(()=>wpChainAdvanceToNextSentence(),1400);
}
