/* Service Worker — офлайн-кэш для MyEnglish.
   При обновлении контента поменяй версию CACHE, чтобы телефон скачал новое. */
const CACHE = "myenglish-v9";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./curriculum.js",
  "./content.js",
  "./content_extra.js",
  "./content_grammar.js",
  "./content_reading.js",
  "./content_vocab.js",
  "./content_phrasal_idioms.js",
  "./content_phonetics.js",
  "./content_writing.js",
  "./content_topiccheck.js",
  "./content_grammar_w2a.js",
  "./content_grammar_w2b.js",
  "./content_grammar_w2c.js",
  "./content_reading_w2a.js",
  "./content_reading_w2b.js",
  "./content_reading_w2c.js",
  "./content_vocab_w2a.js",
  "./content_vocab_w2b.js",
  "./content_vocab_w2c.js",
  "./content_grammar_w3_A2.js",
  "./content_grammar_w3_B1.js",
  "./content_grammar_w3_B2.js",
  "./content_grammar_w3_C1.js",
  "./content_grammar_w3_C2.js",
  "./content_reading_w3_A2.js",
  "./content_reading_w3_B1.js",
  "./content_reading_w3_B2.js",
  "./content_reading_w3_C1.js",
  "./content_reading_w3_C2.js",
  "./content_vocab_w3_A2.js",
  "./content_vocab_w3_B1.js",
  "./content_vocab_w3_B2.js",
  "./content_vocab_w3_C1.js",
  "./content_vocab_w3_C2.js",
  "./audio_manifest.js",
  "./app.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Cache-first: быстро и работает офлайн.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((cached) =>
      cached || fetch(e.request).then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
        return res;
      }).catch(() => cached)
    )
  );
});
