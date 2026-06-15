/* Собирает все строки, которые приложение озвучивает, в JSON-массив (stdout).
   Запуск: node tools_collect_strings.js > /tmp/strings.json
   Грузит ВСЕ файлы content*.js динамически. */
global.window = {};
const _log = console.log;          // глушим логи (чтобы не сломать JSON в stdout)
console.log = () => {};
const fs = require("fs");
fs.readdirSync(__dirname)
  .filter((f) => /^content.*\.js$/.test(f))
  .sort((a, b) => {
    const rank = (x) => (x === "content.js" ? 0 : x === "content_extra.js" ? 1 : 2);
    return rank(a) - rank(b) || a.localeCompare(b);
  })
  .forEach((f) => require("./" + f));
console.log = _log;

const C = window.CONTENT;
const LEVELS = ["A2", "B1", "B2", "C1", "C2"];
const set = new Set();
const add = (s) => { if (s && typeof s === "string") { const n = s.trim(); if (n) set.add(n); } };
// тот же разбиватель предложений, что и в app.js (для «караоке»-озвучки)
const splitSentences = (text) =>
  (String(text).match(/[^.!?]+[.!?]*\s*/g) || [text]).map((s) => s.trim()).filter(Boolean);

LEVELS.forEach((L) => {
  (C.reading?.[L] || []).forEach((r) => { add(r.text); splitSentences(r.text).forEach(add); });
  (C.vocab?.[L] || []).forEach((v) => add(v.en));
  (C.phrasal?.[L] || []).forEach((v) => add(v.en));
  (C.idioms?.[L] || []).forEach((v) => add(v.en));
  (C.phonetics?.[L] || []).forEach((p) => {
    (p.examples || []).forEach((e) => add(e.w));
    (p.pairs || []).forEach((pr) => pr.forEach(add));
  });
});
// служебные фразы озвучки (пример из настроек)
add("Hello! This is how your reading voice sounds. Let's learn English together.");

console.log(JSON.stringify([...set], null, 0));
