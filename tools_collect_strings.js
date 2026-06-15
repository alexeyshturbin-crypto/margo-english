/* Собирает все строки, которые приложение озвучивает, в JSON-массив (stdout).
   Запуск: node tools_collect_strings.js > /tmp/strings.json */
global.window = {};
const _log = console.log;          // глушим логи из content_extra.js, чтобы не сломать JSON
console.log = () => {};
require("./curriculum.js");
require("./content.js");
require("./content_extra.js");
console.log = _log;
const C = window.CONTENT;
const set = new Set();
const add = (s) => { if (s && typeof s === "string") { const n = s.trim(); if (n) set.add(n); } };
// тот же разбиватель предложений, что и в app.js (для «караоке»-озвучки)
const splitSentences = (text) =>
  (String(text).match(/[^.!?]+[.!?]*\s*/g) || [text]).map((s) => s.trim()).filter(Boolean);

["B1", "B2", "C1"].forEach((L) => {
  (C.reading[L] || []).forEach((r) => { add(r.text); splitSentences(r.text).forEach(add); });
  (C.vocab[L] || []).forEach((v) => add(v.en));
  (C.phrasal[L] || []).forEach((v) => add(v.en));
  (C.idioms[L] || []).forEach((v) => add(v.en));
  (C.phonetics[L] || []).forEach((p) => {
    (p.examples || []).forEach((e) => add(e.w));
    (p.pairs || []).forEach((pr) => pr.forEach(add));
  });
});
// служебные фразы озвучки (примеры из настроек)
add("Hello! This is how your reading voice sounds. Let's learn English together.");

console.log(JSON.stringify([...set], null, 0));
