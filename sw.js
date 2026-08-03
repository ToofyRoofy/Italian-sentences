// Parla Italiano — Service Worker v26 (رجّعنا تبويب أسئلة السياق)
const SHELL_CACHE = 'parla-shell-v26';
// نحافظ على كاش الموديلات بين إصدارات واجهة التطبيق لتجنب إعادة تنزيلها.
const MODEL_CACHE = 'parla-models-v1';

// كل الملفات اللازمة لتشغيل التطبيق والدروس بدون إنترنت.
const CORE_FILES = [
  './',
  './index.html',
  './styles.css',
  './app.js',
  './sentences.js',
  './verbs.js',
  './grammar.js',
  './scenes.js',
  './questions.js',
  './lesson_io.js',
  './lesson_tu.js',
  './lesson_lui.js',
  './lesson_lei.js',
  './lesson_noi.js',
  './lesson_voi.js',
  './lesson_loro.js',
  './lesson_imperativo.js',
  './lesson_topics.js',
  './preposition_profiles.js',
  './lesson_manifest.js'
];

const CDN_HOSTS = [
  'cdn.jsdelivr.net',
  'huggingface.co',
  'fonts.googleapis.com',
  'fonts.gstatic.com'
];

function isTrustedCdn(hostname) {
  return CDN_HOSTS.some(host => hostname === host || hostname.endsWith(`.${host}`));
}

// ===== INSTALL: خزّن الشِل كاملًا، وافشل التثبيت لو ملف أساسي ناقص =====
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then(cache => cache.addAll(CORE_FILES))
      .then(() => self.skipWaiting())
  );
});

// ===== ACTIVATE: امسح إصدارات شِل Parla القديمة فقط =====
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key.startsWith('parla-shell-') && key !== SHELL_CACHE)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

// ===== FETCH =====
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // نفس المصدر: الشبكة أولًا لضمان أحدث محتوى، ثم الكاش عند انقطاع الاتصال.
  if (url.origin === self.location.origin) {
    event.respondWith((async () => {
      try {
        const response = await fetch(event.request);
        if (response.ok && response.status === 200) {
          const cache = await caches.open(SHELL_CACHE);
          await cache.put(event.request, response.clone());
        }
        return response;
      } catch (error) {
        const cached = await caches.match(event.request, {
          ignoreSearch: event.request.mode === 'navigate'
        });
        if (cached) return cached;

        if (event.request.mode === 'navigate') {
          const shell = await caches.match('./index.html', { ignoreSearch: true });
          if (shell) return shell;
        }

        return Response.error();
      }
    })());
    return;
  }

  // مكتبات Whisper والموديلات والخطوط: الكاش أولًا، ثم الشبكة.
  if (isTrustedCdn(url.hostname)) {
    event.respondWith((async () => {
      const cached = await caches.match(event.request);
      if (cached) return cached;

      try {
        const response = await fetch(event.request);
        if ((response.ok || response.type === 'opaque') && response.status !== 206) {
          const cache = await caches.open(MODEL_CACHE);
          await cache.put(event.request, response.clone());
        }
        return response;
      } catch (error) {
        return Response.error();
      }
    })());
  }
});
