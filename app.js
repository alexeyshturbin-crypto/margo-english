/* =========================================================================
   APP.JS — логика приложения "MyEnglish"
   PWA для самостоятельного изучения английского (B1 → B2 → C1, цель IELTS).
   Без фреймворков и сборки: чистый JS + localStorage + Web Speech API.
   ========================================================================= */

(() => {
  "use strict";

  /* ---------- Состояние и хранилище ------------------------------------ */
  const STORE_KEY = "myenglish_state_v1";

  const defaultState = () => ({
    name: "",
    level: "B1",
    xp: 0,
    streak: 0,
    lastActiveDate: null,   // "YYYY-MM-DD"
    todayDate: null,
    todayXp: 0,
    dailyGoal: 30,          // XP в день — аналог "цели" в Duolingo
    voiceURI: "",           // выбранный пользователем голос озвучки
    srs: {},                // { cardId: { box: 1..5, due: "YYYY-MM-DD" } }
    drafts: {},             // { writingId: "текст черновика" }
    stats: { reading: 0, listening: 0, grammar: 0, vocab: 0, topic: 0, phonetics: 0, writing: 0 },
  });

  let state = load();

  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (!raw) return defaultState();
      return Object.assign(defaultState(), JSON.parse(raw));
    } catch (e) {
      return defaultState();
    }
  }
  function save() {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  }

  /* ---------- Утилиты дат и стрика ------------------------------------- */
  function today() {
    const d = new Date();
    return d.toISOString().slice(0, 10);
  }
  function daysBetween(a, b) {
    return Math.round((new Date(b) - new Date(a)) / 86400000);
  }
  function touchStreak() {
    const t = today();
    if (state.lastActiveDate === t) return;
    if (state.lastActiveDate && daysBetween(state.lastActiveDate, t) === 1) {
      state.streak += 1;
    } else if (!state.lastActiveDate || daysBetween(state.lastActiveDate, t) > 1) {
      state.streak = 1;
    }
    state.lastActiveDate = t;
    save();
  }
  function resetDailyIfNeeded() {
    const t = today();
    if (state.todayDate !== t) {
      state.todayDate = t;
      state.todayXp = 0;
      save();
    }
  }
  function addXp(n) {
    resetDailyIfNeeded();
    touchStreak();
    state.xp += n;
    state.todayXp += n;
    save();
  }

  /* ---------- Навигация ------------------------------------------------ */
  const app = document.getElementById("app");
  let activeInterval = null;   // таймер текущего экрана (Writing) — чистим при переходе

  function go(screen, params) {
    if (activeInterval) { clearInterval(activeInterval); activeInterval = null; }
    stopSpeak();
    window.scrollTo(0, 0);
    routes[screen](params || {});
  }

  /* ---------- Озвучка (Web Speech API / TTS) --------------------------- */
  let voices = [];
  // Самые «дикторские», натуральные голоса (Apple/Google/Microsoft).
  // Чем выше в списке — тем выше приоритет.
  const PREFERRED = [
    "Serena", "Stephanie", "Kate", "Daniel", "Oliver", "Jamie",      // en-GB (Apple enhanced)
    "Ava", "Samantha", "Allison", "Nicky", "Evan", "Tom", "Zoe",     // en-US (Apple enhanced)
    "Karen", "Lee", "Catherine", "James",                            // en-AU
    "Google UK English Female", "Google UK English Male", "Google US English",
    "Microsoft Sonia", "Microsoft Libby", "Microsoft Aria", "Microsoft Ryan", "Microsoft Jenny",
  ];

  function enVoices() { return voices.filter(v => /^en/i.test(v.lang || "")); }
  function loadVoices() {
    voices = window.speechSynthesis ? (window.speechSynthesis.getVoices() || []) : [];
  }
  function scoreVoice(v) {
    let s = 0;
    const name = v.name || "";
    const idx = PREFERRED.findIndex(p => name.toLowerCase().includes(p.toLowerCase()));
    if (idx >= 0) s += (PREFERRED.length - idx) * 10;
    if (/enhanced|premium|natural|neural|siri/i.test(name)) s += 60;   // студийное качество
    if (/compact|eloquence|fred|albert|zarvox|trinoids|whisper|bahh|bells|boing|jester|organ|cellos|wobble|superstar|grandma|grandpa|rocko|bubbles|junior|kathy|ralph|deranged|hysterical|bad news|good news|pipe|sandy|shelley|flo|eddy|reed/i.test(name)) s -= 200; // роботизированные / мультяшные / новелти
    if (/en[-_]GB/i.test(v.lang)) s += 8;                              // британский — ближе к учебникам
    else if (/en[-_]US/i.test(v.lang)) s += 5;
    if (v.localService) s += 3;
    return s;
  }
  function pickBestVoice(overrideURI) {
    const list = enVoices();
    if (!list.length) return null;
    const uri = overrideURI || state.voiceURI;
    if (uri) {
      const chosen = list.find(v => v.voiceURI === uri);
      if (chosen) return chosen;
    }
    return list.slice().sort((a, b) => scoreVoice(b) - scoreVoice(a))[0];
  }
  if (window.speechSynthesis) {
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }

  // Читаем по предложениям — естественные паузы и стабильность на iOS.
  function splitSentences(text) {
    return (String(text).match(/[^.!?]+[.!?]*\s*/g) || [text]).map(s => s.trim()).filter(Boolean);
  }
  // --- Встроенная («запечённая») озвучка: натуральный нейроголос (Piper),
  //     одинаково чистый на любом телефоне, работает офлайн. Главный путь. ---
  let currentAudio = null;
  function audioNorm(s) { return String(s).trim().toLowerCase().replace(/\s+/g, " "); }
  function audioHash(s) { // FNV-1a 32-bit — совпадает с генератором tools_gen_audio.py
    let h = 0x811c9dc5;
    for (let i = 0; i < s.length; i++) { h ^= (s.charCodeAt(i) & 0xffff); h = Math.imul(h, 0x01000193) >>> 0; }
    return ("0000000" + h.toString(16)).slice(-8);
  }
  function bakedSrc(text) {
    if (!window.AUDIO || !window.AUDIO.has) return null;
    const key = audioHash(audioNorm(text));
    return window.AUDIO.has[key] ? ("audio/" + key + "." + (window.AUDIO.ext || "wav")) : null;
  }

  function speak(text, rate = 1.0, overrideURI) {
    stopSpeak();
    const src = bakedSrc(text);
    if (src) {
      const a = new Audio(src);
      try { a.preservesPitch = true; a.mozPreservesPitch = true; a.webkitPreservesPitch = true; } catch (e) {}
      a.playbackRate = (rate && rate < 0.8) ? 0.75 : 1.0;   // «медленно» — чуть замедляем без искажения
      currentAudio = a;
      a.play().catch(() => webSpeak(text, rate, overrideURI)); // нет файла/офлайн без кэша → синтез
      return;
    }
    webSpeak(text, rate, overrideURI);
  }

  // Запасной путь — браузерный синтез (если запечённого аудио нет).
  function webSpeak(text, rate, overrideURI) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    if (!voices.length) loadVoices();
    const voice = pickBestVoice(overrideURI);
    splitSentences(text).forEach(part => {
      const u = new SpeechSynthesisUtterance(part);
      if (voice) { u.voice = voice; u.lang = voice.lang; } else { u.lang = "en-GB"; }
      u.rate = (rate && rate < 1) ? rate : 0.92;
      u.pitch = 1.0;
      window.speechSynthesis.speak(u);
    });
  }

  function stopSpeak() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    if (currentAudio) { try { currentAudio.pause(); } catch (e) {} currentAudio = null; }
  }

  /* ---------- Маленькие помощники для разметки ------------------------- */
  const el = (html) => {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  };
  const esc = (s) => String(s).replace(/[&<>"]/g, c =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  function header(title, back) {
    return `
      <header class="topbar">
        ${back ? `<button class="icon-btn" id="backBtn" aria-label="Назад">‹</button>` : `<span class="icon-btn ghost"></span>`}
        <h1 class="topbar-title">${esc(title)}</h1>
        <span class="streak-badge">🔥 ${state.streak}</span>
      </header>`;
  }
  function wire(scope) {
    const b = scope.querySelector("#backBtn");
    if (b) b.onclick = () => go("home");
  }

  function toast(msg) {
    const t = el(`<div class="toast">${esc(msg)}</div>`);
    document.body.appendChild(t);
    setTimeout(() => t.classList.add("show"), 10);
    setTimeout(() => { t.classList.remove("show"); setTimeout(() => t.remove(), 300); }, 1600);
  }

  /* ===================================================================== */
  /*  ЭКРАНЫ                                                                */
  /* ===================================================================== */
  const routes = {};

  /* ---------- Онбординг (первый запуск) -------------------------------- */
  routes.onboarding = () => {
    app.innerHTML = "";
    const view = el(`
      <div class="screen onboarding">
        <div class="hero">
          <div class="logo-big">📚</div>
          <h1>MyEnglish</h1>
          <p class="subtitle">Твой личный тренажёр английского.<br>Цель — IELTS, шаг за шагом: B1 → B2 → C1.</p>
        </div>
        <label class="field">
          <span>Как тебя зовут?</span>
          <input id="nameInput" type="text" value="Марго" placeholder="Имя" autocomplete="given-name">
        </label>
        <div class="field">
          <span>С какого уровня начнём?</span>
          <div class="seg seg5" id="levelSeg">
            <button data-lvl="A2">A2</button>
            <button data-lvl="B1" class="active">B1</button>
            <button data-lvl="B2">B2</button>
            <button data-lvl="C1">C1</button>
            <button data-lvl="C2">C2</button>
          </div>
        </div>
        <button class="btn-primary big" id="startBtn">Начать 🚀</button>
        <p class="tiny-note">Совет: после запуска нажми в Safari «Поделиться» → «На экран Домой», чтобы приложение появилось иконкой на телефоне.</p>
      </div>`);
    app.appendChild(view);

    let lvl = "B1";
    view.querySelectorAll("#levelSeg button").forEach(b => {
      b.onclick = () => {
        view.querySelectorAll("#levelSeg button").forEach(x => x.classList.remove("active"));
        b.classList.add("active");
        lvl = b.dataset.lvl;
      };
    });
    view.querySelector("#startBtn").onclick = () => {
      const name = view.querySelector("#nameInput").value.trim();
      state.name = name || "друг";
      state.level = lvl;
      save();
      go("home");
    };
  };

  /* ---------- Главный экран -------------------------------------------- */
  routes.home = () => {
    resetDailyIfNeeded();
    const pct = Math.min(100, Math.round((state.todayXp / state.dailyGoal) * 100));
    const due = dueVocabCount();

    app.innerHTML = "";
    const view = el(`
      <div class="screen">
        <header class="home-head">
          <div>
            <p class="greeting">Привет, ${esc(state.name || "друг")}! 👋</p>
            <p class="level-tag">Уровень: <strong>${state.level}</strong></p>
          </div>
          <button class="icon-btn" id="settingsBtn" aria-label="Настройки">⚙️</button>
        </header>

        <section class="goal-card">
          <div class="goal-row">
            <span>🔥 Стрик: <strong>${state.streak}</strong> дн.</span>
            <span>⭐ XP всего: <strong>${state.xp}</strong></span>
          </div>
          <div class="progress-wrap" title="Дневная цель">
            <div class="progress-bar" style="width:${pct}%"></div>
          </div>
          <p class="goal-label">Сегодня: ${state.todayXp} / ${state.dailyGoal} XP ${pct >= 100 ? "✅ цель выполнена!" : ""}</p>
        </section>

        <h2 class="section-title">Чем займёмся?</h2>
        <div class="menu-grid">
          <button class="menu-card c1" data-go="reading">
            <span class="mc-emoji">📖</span><span class="mc-title">Чтение</span>
            <span class="mc-sub">Текст + вопросы</span></button>
          <button class="menu-card c2" data-go="listening">
            <span class="mc-emoji">🎧</span><span class="mc-title">Аудирование</span>
            <span class="mc-sub">Слушай и отвечай</span></button>
          <button class="menu-card c3" data-go="grammar">
            <span class="mc-emoji">✏️</span><span class="mc-title">Грамматика</span>
            <span class="mc-sub">правила · пропуски</span></button>
          <button class="menu-card c4" data-go="vocab">
            <span class="mc-emoji">🃏</span><span class="mc-title">Слова</span>
            <span class="mc-sub">Карточки${due ? ` · ${due} к повтору` : ""}</span></button>
          <button class="menu-card c5" data-go="phonetics">
            <span class="mc-emoji">🗣️</span><span class="mc-title">Фонетика</span>
            <span class="mc-sub">Звуки · ударение</span></button>
          <button class="menu-card c7" data-go="phrasal">
            <span class="mc-emoji">🔗</span><span class="mc-title">Фразовые<br>и идиомы</span>
            <span class="mc-sub">Phrasal verbs</span></button>
          <button class="menu-card c9" data-go="writing">
            <span class="mc-emoji">✍️</span><span class="mc-title">Письмо</span>
            <span class="mc-sub">Эссе IELTS · Task 1/2</span></button>
          <button class="menu-card c8" data-go="topic">
            <span class="mc-emoji">✅</span><span class="mc-title">Проверка темы</span>
            <span class="mc-sub">Мини-тест</span></button>
          <button class="menu-card c6" data-go="progress">
            <span class="mc-emoji">📊</span><span class="mc-title">Прогресс</span>
            <span class="mc-sub">Статистика</span></button>
        </div>

        <button class="btn-primary big" id="roadmapBtn">🎓 Программа обучения (B1 → C1 → IELTS)</button>
        <p class="book-note">📚 В основе — вся линейка Cambridge «… in Use» (грамматика, лексика, фонетика, фразовые глаголы, идиомы) + подготовка к IELTS. Нажми «Программа обучения», чтобы увидеть дорожную карту и учебники.</p>
      </div>`);
    app.appendChild(view);

    view.querySelector("#settingsBtn").onclick = () => go("settings");
    view.querySelector("#roadmapBtn").onclick = () => go("curriculum");
    view.querySelectorAll(".menu-card").forEach(c => {
      c.onclick = () => go(c.dataset.go);
    });
  };

  /* ---------- Выбор уровня перед активностью --------------------------- */
  // Уровни курса (5 лет): A2 → C2, с привязкой к классам
  const LEVELS = [
    { id: "A2", grade: "7 класс · базовый" },
    { id: "B1", grade: "8 класс · средний" },
    { id: "B2", grade: "9–10 класс · уверенный" },
    { id: "C1", grade: "11 класс · продвинутый" },
    { id: "C2", grade: "сертификат · свободный" },
  ];

  function levelPicker(title, onPick) {
    app.innerHTML = "";
    const rows = LEVELS.map(L =>
      `<button class="level-row" data-lvl="${L.id}"><strong>${L.id}</strong> · ${L.grade} <span>${state.level === L.id ? "твой" : ""}</span></button>`
    ).join("");
    const view = el(`
      <div class="screen">
        ${header(title, true)}
        <p class="hint-line">Выбери уровень задания:</p>
        <div class="level-list">${rows}</div>
      </div>`);
    app.appendChild(view);
    wire(view);
    view.querySelectorAll(".level-row").forEach(r => {
      r.onclick = () => onPick(r.dataset.lvl);
    });
  }

  /* ---------- Список заданий внутри уровня ----------------------------- */
  function lessonList(title, items, level, onOpen, labelFn) {
    app.innerHTML = "";
    const rows = items.map((it, i) =>
      `<button class="lesson-row" data-i="${i}">
         <span class="lr-title">${esc(labelFn(it))}</span>
         <span class="lr-go">›</span>
       </button>`).join("");
    const view = el(`
      <div class="screen">
        ${header(`${title} · ${level}`, true)}
        <div class="lesson-list">${rows || `<p class="hint-line">Пока нет заданий для этого уровня.</p>`}</div>
      </div>`);
    app.appendChild(view);
    wire(view);
    view.querySelectorAll(".lesson-row").forEach(r => {
      r.onclick = () => onOpen(items[+r.dataset.i]);
    });
  }

  /* ---------- ЧТЕНИЕ ---------------------------------------------------- */
  routes.reading = () => {
    levelPicker("Чтение", (lvl) => {
      const items = (CONTENT.reading[lvl] || []);
      lessonList("Чтение", items, lvl, (it) => openReading(it, lvl, false), it => it.title);
    });
  };

  /* ---------- АУДИРОВАНИЕ (тот же контент, но с озвучкой) -------------- */
  routes.listening = () => {
    levelPicker("Аудирование", (lvl) => {
      const items = (CONTENT.reading[lvl] || []);
      lessonList("Аудирование", items, lvl, (it) => openReading(it, lvl, true), it => it.title);
    });
  };

  function openReading(item, level, listenMode) {
    app.innerHTML = "";
    const textBlock = listenMode
      ? `<div class="listen-box">
           <p class="hint-line">Сначала послушай текст (можно несколько раз), потом ответь на вопросы. Текст скрыт.</p>
           <div class="audio-controls">
             <button class="btn-primary" id="playBtn">▶︎ Слушать</button>
             <button class="btn-ghost" id="slowBtn">🐢 Медленно</button>
             <button class="btn-ghost" id="stopBtn">⏹ Стоп</button>
           </div>
           <button class="btn-ghost wide" id="revealBtn">👁 Показать текст</button>
           <div class="reading-text hidden" id="textReveal">${esc(item.text)}</div>
         </div>`
      : `<div class="reading-text">${esc(item.text)}</div>
         <div class="audio-controls">
           <button class="btn-ghost" id="playBtn">🔊 Озвучить</button>
           <button class="btn-ghost" id="stopBtn">⏹ Стоп</button>
         </div>`;

    const view = el(`
      <div class="screen">
        ${header(item.title, true)}
        ${textBlock}
        <h2 class="section-title">Вопросы</h2>
        <form id="qform" class="qform"></form>
        <button class="btn-primary big" id="checkBtn">Проверить</button>
      </div>`);
    app.appendChild(view);
    wire(view);

    const playBtn = view.querySelector("#playBtn");
    if (playBtn) playBtn.onclick = () => speak(item.text, 0.95);
    const slowBtn = view.querySelector("#slowBtn");
    if (slowBtn) slowBtn.onclick = () => speak(item.text, 0.7);
    const stopBtn = view.querySelector("#stopBtn");
    if (stopBtn) stopBtn.onclick = stopSpeak;
    const revealBtn = view.querySelector("#revealBtn");
    if (revealBtn) revealBtn.onclick = () => view.querySelector("#textReveal").classList.toggle("hidden");

    const form = view.querySelector("#qform");
    item.questions.forEach((q, qi) => {
      const opts = q.options.map((o, oi) =>
        `<label class="opt"><input type="radio" name="q${qi}" value="${oi}"><span>${esc(o)}</span></label>`).join("");
      form.appendChild(el(`<fieldset class="qcard"><legend>${qi + 1}. ${esc(q.q)}</legend>${opts}</fieldset>`));
    });

    view.querySelector("#checkBtn").onclick = () => {
      stopSpeak();
      let correct = 0;
      item.questions.forEach((q, qi) => {
        const fs = form.querySelectorAll("fieldset")[qi];
        const chosen = form.querySelector(`input[name="q${qi}"]:checked`);
        fs.classList.remove("right", "wrong");
        const labels = fs.querySelectorAll(".opt");
        labels.forEach(l => l.classList.remove("mark-right", "mark-wrong"));
        labels[q.answer].classList.add("mark-right");
        if (chosen && +chosen.value === q.answer) { correct++; fs.classList.add("right"); }
        else { fs.classList.add("wrong"); if (chosen) labels[+chosen.value].classList.add("mark-wrong"); }
      });
      const total = item.questions.length;
      const gained = correct * 5;
      addXp(gained);
      bumpStat(listenMode ? "listening" : "reading");
      showResult(view, correct, total, gained);
    };
  }

  /* ---------- ГРАММАТИКА (gap-fill) ------------------------------------ */
  routes.grammar = () => {
    levelPicker("Грамматика", (lvl) => {
      const items = (CONTENT.grammar[lvl] || []);
      lessonList("Грамматика", items, lvl, (it) => openGrammar(it, lvl),
        it => `${it.title}  ·  ${it.murphy}`);
    });
  };

  function normalize(s) {
    return s.toLowerCase().trim().replace(/\s+/g, " ").replace(/[.]/g, " ").replace(/\s+/g, " ").trim();
  }
  function openGrammar(item, level) {
    app.innerHTML = "";
    const view = el(`
      <div class="screen">
        ${header(item.title, true)}
        <p class="murphy-line">📕 <strong>${esc(item.murphy)}</strong> · тема: ${esc(item.topic)}</p>
        <form id="gform" class="gform"></form>
        <button class="btn-primary big" id="checkBtn">Проверить</button>
      </div>`);
    app.appendChild(view);
    wire(view);

    const form = view.querySelector("#gform");
    item.items.forEach((it, i) => {
      const parts = it.q.split("___");
      const before = esc(parts[0] || "");
      const after = esc(parts[1] || "");
      form.appendChild(el(`
        <div class="gap-card" data-i="${i}">
          <p class="gap-q">${i + 1}. ${before}<input type="text" class="gap-input" autocapitalize="none" autocomplete="off" spellcheck="false">${after}</p>
          <button type="button" class="hint-btn">💡 Подсказка</button>
          <p class="hint-text hidden">${esc(it.hint)}</p>
          <p class="answer-text hidden"></p>
        </div>`));
    });
    form.querySelectorAll(".hint-btn").forEach((b, i) => {
      b.onclick = () => form.querySelectorAll(".hint-text")[i].classList.toggle("hidden");
    });

    view.querySelector("#checkBtn").onclick = () => {
      let correct = 0;
      item.items.forEach((it, i) => {
        const card = form.querySelectorAll(".gap-card")[i];
        const input = card.querySelector(".gap-input");
        const ans = card.querySelector(".answer-text");
        const val = normalize(input.value);
        const ok = it.a.some(a => normalize(a) === val);
        card.classList.remove("right", "wrong");
        if (ok) { correct++; card.classList.add("right"); ans.classList.add("hidden"); }
        else {
          card.classList.add("wrong");
          ans.textContent = "Ответ: " + it.a[0];
          ans.classList.remove("hidden");
        }
      });
      const gained = correct * 4;
      addXp(gained);
      bumpStat("grammar");
      showResult(view, correct, item.items.length, gained);
    };
  }

  /* ---------- СЛОВАРЬ (флэш-карточки + SRS) ---------------------------- */
  function dueVocabCount() {
    const t = today();
    let n = 0;
    Object.values(CONTENT.vocab).flat().forEach(card => {
      const s = state.srs[card.id];
      if (!s || s.due <= t) n++;
    });
    return n;
  }
  function scheduleCard(id, remembered) {
    const t = today();
    const cur = state.srs[id] || { box: 0, due: t };
    let box = remembered ? Math.min(5, cur.box + 1) : 1;
    const intervals = { 1: 1, 2: 2, 3: 4, 4: 7, 5: 15 };
    const next = new Date();
    next.setDate(next.getDate() + (intervals[box] || 1));
    state.srs[id] = { box, due: next.toISOString().slice(0, 10) };
    save();
  }

  routes.vocab = () => {
    levelPicker("Слова", (lvl) => startDeck(CONTENT.vocab[lvl] || [], lvl, "vocab", "Слова", routes.vocab));
  };

  // Фразовые глаголы + идиомы (тот же движок карточек, другой контент)
  routes.phrasal = () => {
    app.innerHTML = "";
    const view = el(`
      <div class="screen">
        ${header("Фразовые и идиомы", true)}
        <p class="hint-line">Что потренируем?</p>
        <div class="level-list">
          <button class="level-row" id="phBtn"><strong>🔗 Фразовые глаголы</strong> <span>Phrasal verbs</span></button>
          <button class="level-row" id="idBtn"><strong>💬 Идиомы</strong> <span>Idioms</span></button>
        </div>
      </div>`);
    app.appendChild(view); wire(view);
    view.querySelector("#phBtn").onclick = () => levelPicker("Фразовые глаголы",
      (lvl) => startDeck(CONTENT.phrasal[lvl] || [], lvl, "vocab", "Фразовые глаголы", routes.phrasal));
    view.querySelector("#idBtn").onclick = () => levelPicker("Идиомы",
      (lvl) => startDeck(CONTENT.idioms[lvl] || [], lvl, "vocab", "Идиомы", routes.phrasal));
  };

  function startDeck(all, lvl, stat, title, againRoute) {
    // приоритет — карточки "к повтору" (по SRS), затем новые
    const queue = all.slice().sort((a, b) => {
      const da = state.srs[a.id]?.due || "0000";
      const db = state.srs[b.id]?.due || "0000";
      return da.localeCompare(db);
    });
    runVocab(queue, lvl, { stat, title, againRoute });
  }

  function runVocab(queue, level, opts) {
    opts = opts || { stat: "vocab", title: "Слова", againRoute: routes.vocab };
    const TITLE = opts.title || "Слова";
    let idx = 0, learned = 0;
    const render = () => {
      if (idx >= queue.length) {
        const gained = learned * 3;
        addXp(gained);
        bumpStat(opts.stat || "vocab");
        app.innerHTML = "";
        const v = el(`<div class="screen">${header(TITLE + " · " + level, true)}
          <div class="result-card">
            <div class="result-emoji">🎉</div>
            <h2>Колода пройдена!</h2>
            <p>Запомнила: <strong>${learned}</strong> из ${queue.length}</p>
            <p class="xp-gain">+${gained} XP</p>
            <button class="btn-primary big" id="againBtn">Ещё раз</button>
            <button class="btn-ghost wide" id="homeBtn">На главную</button>
          </div></div>`);
        app.appendChild(v); wire(v);
        v.querySelector("#againBtn").onclick = () => (opts.againRoute || routes.vocab)();
        v.querySelector("#homeBtn").onclick = () => go("home");
        return;
      }
      const card = queue[idx];
      app.innerHTML = "";
      const v = el(`
        <div class="screen">
          ${header(TITLE + " · " + level, true)}
          <p class="card-counter">${idx + 1} / ${queue.length}</p>
          <div class="flashcard" id="flip">
            <div class="fc-front">
              <p class="fc-en">${esc(card.en)}</p>
              <button class="btn-ghost" id="sayBtn">🔊</button>
              <p class="fc-tap">нажми, чтобы перевернуть</p>
            </div>
            <div class="fc-back hidden">
              <p class="fc-ru">${esc(card.ru)}</p>
              <p class="fc-ex">${esc(card.ex)}</p>
            </div>
          </div>
          <div class="fc-actions hidden" id="fcActions">
            <button class="btn-bad" id="noBtn">Не помню</button>
            <button class="btn-good" id="yesBtn">Знаю ✓</button>
          </div>
        </div>`);
      app.appendChild(v); wire(v);

      const flip = v.querySelector("#flip");
      const back = v.querySelector(".fc-back");
      const front = v.querySelector(".fc-front");
      const actions = v.querySelector("#fcActions");
      flip.onclick = (e) => {
        if (e.target.id === "sayBtn") return;
        back.classList.remove("hidden");
        front.classList.add("hidden");
        actions.classList.remove("hidden");
      };
      v.querySelector("#sayBtn").onclick = (e) => { e.stopPropagation(); speak(card.en, 0.9); };
      v.querySelector("#yesBtn").onclick = () => { scheduleCard(card.id, true); learned++; idx++; render(); };
      v.querySelector("#noBtn").onclick = () => { scheduleCard(card.id, false); idx++; render(); };
    };
    render();
  }

  /* ---------- ПРОВЕРКА ТЕМЫ (квиз) ------------------------------------- */
  routes.topic = () => {
    levelPicker("Проверка темы", (lvl) => {
      const items = (CONTENT.topicCheck[lvl] || []);
      lessonList("Проверка темы", items, lvl, (it) => openTopic(it, lvl), it => it.title);
    });
  };

  function openTopic(item, level) {
    app.innerHTML = "";
    const view = el(`
      <div class="screen">
        ${header(item.title, true)}
        <form id="qform" class="qform"></form>
        <button class="btn-primary big" id="checkBtn">Проверить</button>
      </div>`);
    app.appendChild(view);
    wire(view);
    const form = view.querySelector("#qform");
    item.questions.forEach((q, qi) => {
      const opts = q.options.map((o, oi) =>
        `<label class="opt"><input type="radio" name="q${qi}" value="${oi}"><span>${esc(o)}</span></label>`).join("");
      form.appendChild(el(`<fieldset class="qcard"><legend>${qi + 1}. ${esc(q.q)}</legend>${opts}</fieldset>`));
    });
    view.querySelector("#checkBtn").onclick = () => {
      let correct = 0;
      item.questions.forEach((q, qi) => {
        const fs = form.querySelectorAll("fieldset")[qi];
        const chosen = form.querySelector(`input[name="q${qi}"]:checked`);
        fs.classList.remove("right", "wrong");
        const labels = fs.querySelectorAll(".opt");
        labels.forEach(l => l.classList.remove("mark-right", "mark-wrong"));
        labels[q.answer].classList.add("mark-right");
        if (chosen && +chosen.value === q.answer) { correct++; fs.classList.add("right"); }
        else { fs.classList.add("wrong"); if (chosen) labels[+chosen.value].classList.add("mark-wrong"); }
      });
      const gained = correct * 5;
      addXp(gained);
      bumpStat("topic");
      showResult(view, correct, item.questions.length, gained);
    };
  }

  /* ---------- ФОНЕТИКА -------------------------------------------------- */
  routes.phonetics = () => {
    levelPicker("Фонетика", (lvl) => {
      const items = (CONTENT.phonetics[lvl] || []);
      lessonList("Фонетика", items, lvl, (it) => openPhonetics(it, lvl), it => it.title);
    });
  };

  function openPhonetics(item, level) {
    app.innerHTML = "";
    const exRows = item.examples.map((e, i) =>
      `<button class="lesson-row" data-say="${esc(e.w)}">
         <span class="lr-title">${esc(e.w)} <em style="color:var(--muted);font-style:normal">${esc(e.ipa)}</em></span>
         <span class="lr-go">🔊</span></button>`).join("");

    const view = el(`
      <div class="screen">
        ${header(item.title, true)}
        <p class="murphy-line">📕 ${esc(item.source)}</p>
        <div class="reading-text">${esc(item.note)}</div>
        <h2 class="section-title">Слушай и повторяй</h2>
        <div class="lesson-list">${exRows}</div>
        <h2 class="section-title">🎯 Тренажёр: что ты слышишь?</h2>
        <p class="hint-line">Нажми «Сыграть слово», послушай и выбери, какое слово прозвучало.</p>
        <div id="mpBox" class="listen-box"></div>
      </div>`);
    app.appendChild(view);
    wire(view);

    view.querySelectorAll("[data-say]").forEach(b => {
      b.onclick = () => speak(b.dataset.say, 0.85);
    });

    // Минимальные пары — игра на различение на слух
    const box = view.querySelector("#mpBox");
    let score = 0, rounds = 0;
    const maxRounds = item.pairs.length * 2;

    const nextRound = () => {
      if (rounds >= maxRounds) {
        const gained = score * 4;
        addXp(gained);
        bumpStat("phonetics");
        box.innerHTML = `<div class="result-card" style="margin-top:0">
          <div class="result-emoji">🎧</div>
          <h2>Готово!</h2>
          <p>Угадано: <strong>${score} / ${maxRounds}</strong></p>
          <p class="xp-gain">+${gained} XP</p></div>`;
        const home = el(`<button class="btn-primary big">На главную</button>`);
        box.appendChild(home); home.onclick = () => go("home");
        return;
      }
      const pair = item.pairs[rounds % item.pairs.length];
      const target = pair[Math.floor(Math.random() * pair.length)];
      box.innerHTML = "";
      const play = el(`<button class="btn-primary wide">▶︎ Сыграть слово (${rounds + 1}/${maxRounds})</button>`);
      box.appendChild(play);
      play.onclick = () => speak(target, 0.8);
      const opts = el(`<div class="seg" style="margin-top:12px"></div>`);
      pair.forEach(w => {
        const btn = el(`<button>${esc(w)}</button>`);
        btn.onclick = () => {
          rounds++;
          if (w === target) { score++; toast("Верно! ✓"); }
          else toast(`Это было: ${target}`);
          nextRound();
        };
        opts.appendChild(btn);
      });
      box.appendChild(opts);
      speak(target, 0.8);
    };
    nextRound();
  }

  /* ---------- ПРОГРАММА ОБУЧЕНИЯ (roadmap + учебники) ------------------ */
  routes.curriculum = () => {
    app.innerHTML = "";
    const C = window.CURRICULUM;

    const roadmap = C.roadmap.map(s => {
      const done = state.xp >= s.xp;
      const books = s.books.map(b => `<li class="book-item">${esc(b)}</li>`).join("");
      return `<div class="track-card">
        <div class="track-head"><span class="track-emoji">${s.emoji}</span>
          <span class="track-name">${s.stage}${done ? " ✅" : ""}</span>
          <span style="margin-left:auto;color:var(--muted);font-size:13px">≈ ${s.xp} XP</span></div>
        <p class="track-desc">${esc(s.focus)}</p>
        <ul class="book-list">${books}</ul>
      </div>`;
    }).join("");

    const byTrack = C.tracks.map(tr => {
      const books = C.books.filter(b => b.track === tr.id);
      if (!books.length) return "";
      const rows = books.map(b => {
        const cls = C.levelClass[b.lvl] || "b";
        const lbl = C.levelLabel[b.lvl] || b.lvl;
        return `<li class="book-item"><span class="bk-lvl ${cls}">${lbl}</span>${esc(b.title)} — <em style="color:var(--muted);font-style:normal">${esc(b.author)}</em><br><small style="color:var(--muted)">${esc(b.note)}</small></li>`;
      }).join("");
      return `<div class="track-card">
        <div class="track-head"><span class="track-emoji">${tr.emoji}</span><span class="track-name">${esc(tr.name)}</span></div>
        <p class="track-desc">${esc(tr.desc)}</p>
        <ul class="book-list">${rows}</ul>
      </div>`;
    }).join("");

    const view = el(`
      <div class="screen">
        ${header("Программа обучения", true)}
        <p class="hint-line">Путь от текущего уровня до сертификата IELTS. Приложение растёт вместе с тобой и пополняется новыми материалами.</p>
        <h2 class="section-title">🗺️ Дорожная карта</h2>
        ${roadmap}
        <h2 class="section-title">📚 Учебники по навыкам</h2>
        <p class="hint-line">Вся линейка Cambridge «… in Use» + материалы IELTS. Проходи параллельно с приложением.</p>
        ${byTrack}
        <p class="tiny-note">Этот список — живой: новые издания и учебники можно добавить, и в приложении появятся новые задания. Скажи Клоду «добавь в программу …» — и он расширит контент.</p>
      </div>`);
    app.appendChild(view);
    wire(view);
  };

  /* ---------- ПИСЬМО / WRITING (IELTS Task 1 & 2) ---------------------- */
  routes.writing = () => {
    levelPicker("Письмо", (lvl) => {
      const items = (CONTENT.writing[lvl] || []);
      lessonList("Письмо", items, lvl, (it) => openWriting(it, lvl), it => it.type);
    });
  };

  function countWords(t) { const m = String(t).trim().match(/\S+/g); return m ? m.length : 0; }

  function openWriting(item, level) {
    app.innerHTML = "";
    const draft = (state.drafts && state.drafts[item.id]) || "";
    const tips = item.tips.map(t => `<li>${esc(t)}</li>`).join("");
    const phrases = item.phrases.map(p => `<li class="book-item">${esc(p)}</li>`).join("");
    const checklist = item.checklist.map(c => `<label class="opt"><input type="checkbox"><span>${esc(c)}</span></label>`).join("");

    const view = el(`
      <div class="screen">
        ${header(item.type, true)}
        <div class="writing-task">${esc(item.prompt)}</div>
        <div class="writing-meta">
          <span>🎯 мин. слов: <b>${item.minWords}</b></span>
          <span>⏱ <b id="timer">${item.minutes}:00</b></span>
          <button class="btn-ghost" id="timerBtn">▶︎ Старт</button>
        </div>

        <details class="acc"><summary>💡 План и советы</summary><ul class="tips">${tips}</ul></details>
        <details class="acc"><summary>🧩 Полезные фразы</summary><ul class="book-list">${phrases}</ul></details>

        <textarea id="essay" class="essay" placeholder="Пиши здесь свой ответ на английском…">${esc(draft)}</textarea>
        <div class="writing-meta">
          <span>Слов: <b id="wc">0</b> / ${item.minWords}</span>
          <button class="btn-ghost" id="saveDraft">💾 Сохранить</button>
        </div>

        <details class="acc"><summary>✅ Чек-лист самопроверки</summary><div class="qform" style="margin-top:10px">${checklist}</div></details>
        <details class="acc"><summary>📄 Показать образец ответа</summary><div class="reading-text" style="white-space:pre-wrap;margin-top:10px">${esc(item.model)}</div></details>

        <button class="btn-primary big" id="doneBtn">Готово</button>
      </div>`);
    app.appendChild(view); wire(view);

    const essay = view.querySelector("#essay");
    const wc = view.querySelector("#wc");
    const upd = () => { wc.textContent = countWords(essay.value); };
    essay.oninput = upd; upd();

    // автосохранение черновика
    let saveT = null;
    essay.addEventListener("input", () => {
      if (saveT) clearTimeout(saveT);
      saveT = setTimeout(() => { state.drafts[item.id] = essay.value; save(); }, 800);
    });
    view.querySelector("#saveDraft").onclick = () => { state.drafts[item.id] = essay.value; save(); toast("Черновик сохранён 💾"); };

    // таймер (как на реальном экзамене)
    let remaining = item.minutes * 60, running = false;
    const tEl = view.querySelector("#timer"), tBtn = view.querySelector("#timerBtn");
    const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
    tBtn.onclick = () => {
      if (running) { clearInterval(activeInterval); activeInterval = null; running = false; tBtn.textContent = "▶︎ Продолжить"; return; }
      running = true; tBtn.textContent = "⏸ Пауза";
      activeInterval = setInterval(() => {
        remaining--; tEl.textContent = fmt(remaining);
        if (remaining <= 0) { clearInterval(activeInterval); activeInterval = null; running = false; tBtn.textContent = "▶︎ Старт"; tEl.textContent = "0:00"; toast("Время вышло! ⏰"); }
      }, 1000);
    };

    view.querySelector("#doneBtn").onclick = () => {
      const words = countWords(essay.value);
      state.drafts[item.id] = essay.value; save();
      if (words < item.minWords) { toast(`Нужно ещё минимум ${item.minWords - words} слов`); return; }
      if (activeInterval) { clearInterval(activeInterval); activeInterval = null; }
      addXp(15); bumpStat("writing");
      showResultSimple(view, "✍️", "Отличная работа!", `Ты написал(а) ${words} слов. Сравни свой текст с образцом и пройдись по чек-листу.`, 15);
    };
  }

  function showResultSimple(view, emoji, title, text, gained) {
    const b = el(`<div class="result-banner">
      <div class="result-emoji">${emoji}</div>
      <h2>${esc(title)}</h2>
      <p>${esc(text)}</p>
      <p class="xp-gain">+${gained} XP</p>
      <button class="btn-primary big" id="homeBtnX">На главную</button></div>`);
    view.appendChild(b);
    b.scrollIntoView({ behavior: "smooth", block: "center" });
    b.querySelector("#homeBtnX").onclick = () => go("home");
    toast(`+${gained} XP 🔥`);
  }

  /* ---------- ПРОГРЕСС -------------------------------------------------- */
  routes.progress = () => {
    app.innerHTML = "";
    const s = state.stats;
    const totalActs = s.reading + s.listening + s.grammar + s.vocab + s.topic + (s.phonetics || 0) + (s.writing || 0);
    const view = el(`
      <div class="screen">
        ${header("Прогресс", true)}
        <div class="big-stats">
          <div class="stat-box"><span class="sb-num">${state.streak}</span><span class="sb-lbl">🔥 дней подряд</span></div>
          <div class="stat-box"><span class="sb-num">${state.xp}</span><span class="sb-lbl">⭐ всего XP</span></div>
          <div class="stat-box"><span class="sb-num">${totalActs}</span><span class="sb-lbl">✅ заданий</span></div>
        </div>
        <h2 class="section-title">По видам</h2>
        <ul class="stat-list">
          <li>📖 Чтение <b>${s.reading}</b></li>
          <li>🎧 Аудирование <b>${s.listening}</b></li>
          <li>✏️ Грамматика <b>${s.grammar}</b></li>
          <li>🃏 Слова <b>${s.vocab}</b></li>
          <li>🗣️ Фонетика <b>${s.phonetics || 0}</b></li>
          <li>✍️ Письмо <b>${s.writing || 0}</b></li>
          <li>✅ Проверки тем <b>${s.topic}</b></li>
        </ul>
        <h2 class="section-title">Слова к повторению</h2>
        <p class="hint-line">Сегодня нужно повторить: <strong>${dueVocabCount()}</strong> карточек.</p>
        <div class="cefr-path">
          <div class="cefr-step ${level10(state.xp) >= 0 ? "done" : ""}">B1</div>
          <div class="cefr-line"></div>
          <div class="cefr-step ${state.xp >= 1000 ? "done" : ""}">B2</div>
          <div class="cefr-line"></div>
          <div class="cefr-step ${state.xp >= 3000 ? "done" : ""}">C1</div>
          <div class="cefr-line"></div>
          <div class="cefr-step ${state.xp >= 6000 ? "done" : ""}">IELTS</div>
        </div>
        <p class="tiny-note">Путь до IELTS — ориентир: B2 ≈ 1000 XP, C1 ≈ 3000 XP, готовность к IELTS ≈ 6000 XP. Главное — заниматься каждый день!</p>
      </div>`);
    app.appendChild(view);
    wire(view);
  };
  function level10() { return 0; }

  /* ---------- НАСТРОЙКИ ------------------------------------------------ */
  routes.settings = () => {
    app.innerHTML = "";
    const view = el(`
      <div class="screen">
        ${header("Настройки", true)}
        <label class="field">
          <span>Имя</span>
          <input id="nameInput" type="text" value="${esc(state.name)}">
        </label>
        <div class="field">
          <span>Основной уровень</span>
          <div class="seg seg5" id="levelSeg">
            <button data-lvl="A2" class="${state.level === "A2" ? "active" : ""}">A2</button>
            <button data-lvl="B1" class="${state.level === "B1" ? "active" : ""}">B1</button>
            <button data-lvl="B2" class="${state.level === "B2" ? "active" : ""}">B2</button>
            <button data-lvl="C1" class="${state.level === "C1" ? "active" : ""}">C1</button>
            <button data-lvl="C2" class="${state.level === "C2" ? "active" : ""}">C2</button>
          </div>
        </div>
        <label class="field">
          <span>Дневная цель (XP): <b id="goalVal">${state.dailyGoal}</b></span>
          <input id="goalInput" type="range" min="10" max="100" step="5" value="${state.dailyGoal}">
        </label>
        <div class="field">
          <span>🎙️ Озвучка</span>
          <button class="btn-ghost wide" id="voiceTest">🔊 Прослушать пример голоса</button>
        </div>
        <p class="tiny-note">🎧 Голос <b>встроен в приложение</b> (натуральный, студийный) и работает офлайн — ничего скачивать или настраивать не нужно.</p>
        <button class="btn-primary big" id="saveBtn">Сохранить</button>
        <button class="btn-ghost wide" id="resetBtn">Сбросить весь прогресс</button>
        <p class="tiny-note">Прогресс хранится только на этом телефоне (localStorage). Чтобы добавить иконку на экран: Safari → «Поделиться» → «На экран Домой».</p>
      </div>`);
    app.appendChild(view);
    wire(view);

    let lvl = state.level;
    view.querySelectorAll("#levelSeg button").forEach(b => {
      b.onclick = () => {
        view.querySelectorAll("#levelSeg button").forEach(x => x.classList.remove("active"));
        b.classList.add("active"); lvl = b.dataset.lvl;
      };
    });
    const goalInput = view.querySelector("#goalInput");
    goalInput.oninput = () => view.querySelector("#goalVal").textContent = goalInput.value;

    // --- Прослушать пример встроенного голоса ---
    view.querySelector("#voiceTest").onclick = () =>
      speak("Hello! This is how your reading voice sounds. Let's learn English together.", 1.0);

    view.querySelector("#saveBtn").onclick = () => {
      state.name = view.querySelector("#nameInput").value.trim() || state.name;
      state.level = lvl;
      state.dailyGoal = +goalInput.value;
      save(); toast("Сохранено ✓"); go("home");
    };
    view.querySelector("#resetBtn").onclick = () => {
      if (confirm("Точно сбросить весь прогресс? Это нельзя отменить.")) {
        state = defaultState(); save(); go("onboarding");
      }
    };
  };

  /* ---------- Общий экран результата ----------------------------------- */
  function showResult(view, correct, total, gained) {
    const pct = Math.round((correct / total) * 100);
    const emoji = pct === 100 ? "🏆" : pct >= 70 ? "🎉" : pct >= 40 ? "👍" : "💪";
    const msg = pct === 100 ? "Идеально!" : pct >= 70 ? "Отлично!" : pct >= 40 ? "Неплохо, продолжай!" : "Ещё немного практики!";
    const banner = el(`
      <div class="result-banner">
        <div class="result-emoji">${emoji}</div>
        <h2>${msg}</h2>
        <p>Правильно: <strong>${correct} / ${total}</strong></p>
        <p class="xp-gain">+${gained} XP</p>
        <button class="btn-primary big" id="homeBtn2">На главную</button>
      </div>`);
    view.appendChild(banner);
    banner.scrollIntoView({ behavior: "smooth", block: "center" });
    banner.querySelector("#homeBtn2").onclick = () => go("home");
    if (pct >= 70) toast(`+${gained} XP 🔥`);
  }

  function bumpStat(key) {
    state.stats[key] = (state.stats[key] || 0) + 1;
    save();
  }

  /* ---------- Регистрация Service Worker (офлайн) ---------------------- */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }

  /* ---------- Старт ---------------------------------------------------- */
  resetDailyIfNeeded();
  if (!state.name) go("onboarding");
  else go("home");

})();
