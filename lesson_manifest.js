function buildPrepositionQuestionOptions(focus,fallback){
  const correct=focus?.title||fallback.meaning;
  let pool=[];
  if(focus?.base){
    const sameBase=PREPOSITION_USAGE_PROFILES.filter(x=>x.base===focus.base&&x.id!==focus.id).map(x=>x.title);
    const wider=PREPOSITION_USAGE_PROFILES.filter(x=>x.id!==focus.id).map(x=>x.title);
    pool=[...new Set(sameBase)].length>=3?sameBase:[...sameBase,...wider];
  }else{
    const sameKind=INTEGRATED_PREPOSITION_BANK.filter(x=>x!==fallback&&x.kind===fallback.kind).map(x=>x.meaning);
    const wider=INTEGRATED_PREPOSITION_BANK.filter(x=>x!==fallback).map(x=>x.meaning);
    pool=[...new Set(sameKind)].length>=3?sameKind:[...sameKind,...wider];
  }
  const unique=[...new Set(pool)].filter(x=>x&&x!==correct);
  const key=focus?.id||fallback.form;
  const seed=[...key].reduce((sum,ch)=>sum+ch.charCodeAt(0),0);
  const distractors=[];
  for(let i=0;i<unique.length&&distractors.length<3;i++)distractors.push(unique[(seed+i)%unique.length]);
  return [correct,...distractors];
}
// لا تجعل الإجابة الصحيحة دائماً في الموضع الأول: وزّعها بشكل ثابت ومتوقع.
function balanceCorrect(options,correct,seedIndex){
  const opts=(options||[]).slice();
  if(opts.length<2)return {options:opts,correct:correct||0};
  const target=seedIndex%opts.length;
  const c=correct||0;
  if(target!==c){const tmp=opts[target];opts[target]=opts[c];opts[c]=tmp;}
  return {options:opts,correct:target};
}
const LESSON_NORMAL_SENTENCES = [].concat(LESSON_IO, LESSON_TU, LESSON_LUI, LESSON_LEI, LESSON_NOI, LESSON_VOI, LESSON_LORO);
const LESSON_SENTENCES = (() => {
  const merged=[]; let normalIndex=0, imperativeIndex=0;
  while (normalIndex < LESSON_NORMAL_SENTENCES.length) {
    merged.push(...LESSON_NORMAL_SENTENCES.slice(normalIndex, normalIndex+3)); normalIndex += 3;
    if (imperativeIndex < LESSON_IMPERATIVO.length) merged.push(LESSON_IMPERATIVO[imperativeIndex++]);
  }
  while (imperativeIndex < LESSON_IMPERATIVO.length) merged.push(LESSON_IMPERATIVO[imperativeIndex++]);
  merged.forEach((sentence,index)=>{
    const topic=INTEGRATED_TOPIC_BANK[index % INTEGRATED_TOPIC_BANK.length];
    const prep=INTEGRATED_PREPOSITION_BANK[index % INTEGRATED_PREPOSITION_BANK.length];
    sentence.integratedTopics=[...(sentence.integratedTopics||[]),topic.topic,prep.kind];
    sentence.topicExposure={topic:topic.topic,focus:topic.focus,example:topic.example,status:topic.status,grammarId:topic.grammarId};
    sentence.prepositionExposure={form:prep.form,meaning:prep.meaning,example:prep.example,kind:prep.kind};
    const topicQ=balanceCorrect(topic.options,topic.correct,index);
    const prepQ=balanceCorrect(buildPrepositionQuestionOptions(sentence.prepositionFocus,prep),0,index+2);
    sentence.quiz=[...(sentence.quiz||[]),
      {wordIt:topic.focus,q:`📚 ${topic.topic}: ${topic.example}\n${topic.q}`,options:topicQ.options,correct:topicQ.correct,grammarId:topic.grammarId},
      {wordIt:(sentence.prepositionFocus||prep).form,q:`🎨 حرف الجر ${(sentence.prepositionFocus||prep).form}: في المثال «${(sentence.prepositionFocus||prep).it||prep.example}» ما الاستخدام المقصود؟`,options:prepQ.options,correct:prepQ.correct,grammarId:(sentence.prepositionFocus||prep).grammarId||(prep.kind==='حرف جر غير أصلي'?'improprie':'prep_semplici')}
    ];
  });
  return merged;
})();
