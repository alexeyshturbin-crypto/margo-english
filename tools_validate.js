/* Сквозная валидация всего контента (запуск: node tools_validate.js). */
global.window = {};
const _l = console.log; console.log = () => {};
const fs = require("fs");
// Динамически грузим все файлы контента в правильном порядке.
const files = fs.readdirSync(__dirname)
  .filter(f => /^content.*\.js$/.test(f))
  .sort((a, b) => {
    const rank = (x) => x === "content.js" ? 0 : x === "content_extra.js" ? 1 : 2;
    return rank(a) - rank(b) || a.localeCompare(b);
  });
files.forEach(f => require("./" + f));
console.log = _l;
_l("загружено файлов контента:", files.length);

const C = window.CONTENT;
const LEVELS = ["A2", "B1", "B2", "C1", "C2"];
const ids = new Map();
let errors = [];
const seen = (id, where) => {
  if (!id) errors.push("пустой id в " + where);
  else if (ids.has(id)) errors.push("ДУБЛЬ id '" + id + "' (" + ids.get(id) + " и " + where + ")");
  else ids.set(id, where);
};

const counts = {};
for (const track of Object.keys(C)) {
  counts[track] = {};
  for (const lvl of LEVELS) {
    const arr = (C[track] && C[track][lvl]) || [];
    counts[track][lvl] = arr.length;
    arr.forEach((it, i) => {
      const where = `${track}.${lvl}[${i}]`;
      seen(it.id, where);
      if (track === "grammar") {
        (it.items || []).forEach((q, j) => {
          const n = (q.q.match(/___/g) || []).length;
          if (n !== 1) errors.push(`${where}.items[${j}]: пропусков=${n} (нужно 1) :: ${q.q}`);
          if (!Array.isArray(q.a) || !q.a.length) errors.push(`${where}.items[${j}]: нет ответов`);
        });
      }
      if (track === "reading" || track === "topicCheck") {
        (it.questions || []).forEach((q, j) => {
          if (!Array.isArray(q.options) || q.options.length < 2) errors.push(`${where}.q[${j}]: мало options`);
          if (typeof q.answer !== "number" || q.answer < 0 || q.answer >= (q.options || []).length)
            errors.push(`${where}.q[${j}]: answer вне диапазона (${q.answer})`);
        });
      }
      if (track === "writing") {
        ["prompt", "model", "type"].forEach(k => { if (!it[k]) errors.push(`${where}: нет ${k}`); });
      }
    });
  }
}

// сводка
let total = 0;
for (const track of Object.keys(counts)) {
  const row = LEVELS.map(l => `${l}:${counts[track][l]}`).join(" ");
  const sum = LEVELS.reduce((s, l) => s + counts[track][l], 0);
  total += sum;
  _l(`${track.padEnd(12)} ${row}   = ${sum}`);
}
_l("ВСЕГО единиц контента:", total, "| уникальных id:", ids.size);
_l(errors.length ? ("ОШИБКИ (" + errors.length + "):\n" + errors.slice(0, 40).join("\n")) : "ОШИБОК НЕТ ✓");
