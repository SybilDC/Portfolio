/* ============================================================
   main.js  –  taal, navigatie, categorie-/projectpagina’s, character-animatie
   ============================================================ */
(function () {
  "use strict";
  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const { categories, projects, assetBase } = window.PORTFOLIO;
  const SITE = window.SITE;

  let lang = "nl";                                   // Nederlands is de standaardtaal
  const t  = (key) => (window.I18N[lang][key] ?? window.I18N.nl[key] ?? key);
  const tx = (o) => (o && typeof o === "object" && !Array.isArray(o) ? (o[lang] ?? o.nl) : o);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const enc = (path) => encodeURI(path).replace(/'/g, "%27");   // veilig voor bestandsnamen met spaties/apostrof

  /* ---------- zichtbare projecten ---------- */
  const visible = (p) => !p.hidden && p.media && p.media.length > 0;
  const projectsOf = (catId) => projects.filter((p) => p.cat === catId && visible(p));

  /* =========================================================
     1. TAAL
     ========================================================= */
  function applyI18n() {
    document.documentElement.lang = lang;
    $$("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-alt]").forEach((el) => { el.alt = t(el.dataset.i18nAlt); });
    $$("[data-i18n-aria]").forEach((el) => { el.setAttribute("aria-label", t(el.dataset.i18nAria)); });
    $$("[data-i18n-list]").forEach((el) => {
      el.innerHTML = (t(el.dataset.i18nList) || []).map((p) => `<p>${esc(p)}</p>`).join("");
    });
    $$(".lang__btn").forEach((b) => {
      const on = b.dataset.lang === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    $("#brand-name").textContent = SITE.name;
    $("#hero-name").textContent = SITE.name;
    const mail = $("#mail-link");
    mail.textContent = SITE.email;
    mail.href = "mailto:" + SITE.email;
    renderWork();
    renderSkills();
    if (!$("#view-page").hidden) renderRoute();     // categorie-/projectpagina opnieuw tekenen
  }
  function setLang(l) { lang = l; applyI18n(); }

  /* =========================================================
     2. MY WORK – vier categorieën met 2×2-voorbeeld
     ========================================================= */
  function previewHTML(catId) {
    // Kant-en-klaar vierkant (2×2-beelden, afgeronde hoeken) uit assets/categories/
    return `<img class="cat__img" src="assets/categories/${catId}.png" alt="" width="1000" height="1000" loading="lazy" decoding="async" onerror="this.remove()">`;
  }
  function renderWork() {
    const grid = $("#work-grid");
    grid.innerHTML = categories.map((c) => `
      <article class="cat reveal">
        <a class="cat__preview" href="#/work/${c.id}" aria-label="${esc(t("work.open"))}: ${esc(tx(c.title))}">${previewHTML(c.id)}</a>
        <h3 class="cat__title"><a href="#/work/${c.id}">${esc(tx(c.title))}</a></h3>
      </article>`).join("");
    observeReveal();
  }

  /* =========================================================
     3. MY SKILLS
     ========================================================= */
  const SKILLS = [
    { key: "skills.ai",  logo: "assets/software/AI.png",    name: "Adobe Illustrator",   projects: ["character-animation", "lipsync", "explainer"] },
    { key: "skills.ae",  logo: "assets/software/AE.png",    name: "Adobe After Effects", projects: ["character-animation", "lipsync", "parallax", "logo-animation", "explainer"] },
    { key: "skills.c4d", logo: "assets/software/Maxon.png", name: "Cinema 4D",           projects: ["loop-x-procreate", "dynamics", "funko-pop"] }
  ];
  function renderSkills() {
    $("#skills-list").innerHTML = SKILLS.map((s) => {
      const links = s.projects.map((id) => projects.find((p) => p.id === id)).filter((p) => p && visible(p))
        .map((p) => `<a class="chip" href="#/work/${p.cat}/${p.id}">${esc(p.title)}</a>`).join("");
      return `<li class="skill reveal">
        <img class="skill__logo" src="${s.logo}" alt="${esc(s.name)}" width="96" height="96" loading="lazy">
        <div><h3>${esc(s.name)}</h3><p>${esc(t(s.key))}</p>
        <div class="chips" aria-label="${esc(t("skills.see"))}">${links}</div></div></li>`;
    }).join("");
    observeReveal();
  }

  /* =========================================================
     4. CATEGORIE- EN PROJECTPAGINA’S (hash-routing)
     ========================================================= */
  function mediaHTML(m, i, title) {
    const label = m.label ? `<figcaption>${esc(tx(m.label))}</figcaption>` : "";
    if (m.type === "video") {
      return `<figure class="media media--video"><video controls playsinline preload="metadata" poster="${enc(m.poster)}" onerror="this.closest('figure').remove()">
        <source src="${enc(m.src)}" type="video/mp4">${esc(t("proj.noVideo"))}</video>${label}</figure>`;
    }
    return `<figure class="media"><img src="${enc(m.src)}" alt="${esc(title)}${m.label ? " – " + esc(tx(m.label)) : ""}" loading="${i ? "lazy" : "eager"}" decoding="async" onerror="this.closest('figure').remove()">${label}</figure>`;
  }
  function cardHTML(p) {
    const th = p.thumb;
    return `<a class="pcard${th.bg ? " pcard--soft" : ""}" href="#/work/${p.cat}/${p.id}">
      <span class="pcard__img"><img src="${enc(th.src)}" alt="" loading="lazy" decoding="async" onerror="this.closest('.pcard').remove()"></span>
      <span class="pcard__title">${esc(p.title)}</span></a>`;
  }
  function categoryPage(cat) {
    const list = projectsOf(cat.id);
    return `<div class="page__inner">
      <a class="back" href="#work">${esc(t("work.back"))}</a>
      <h1 class="page__title">${esc(tx(cat.title))}</h1>
      <p class="page__intro">${esc(tx(cat.intro))}</p>
      ${list.length ? `<div class="pgrid">${list.map(cardHTML).join("")}</div>` : `<p class="empty">${esc(t("work.empty"))}</p>`}
    </div>`;
  }
  function projectPage(cat, p) {
    const list = projectsOf(cat.id);
    const idx = list.findIndex((x) => x.id === p.id);
    const prev = list[idx - 1], next = list[idx + 1];
    const [first, ...rest] = p.media;
    const desc = p.desc ? (tx(p.desc) || []).map((x) => `<p>${esc(x)}</p>`).join("") : "";
    const meta = [
      p.role ? `<div><h2>${esc(t("proj.role"))}</h2><p>${esc(tx(p.role))}</p></div>` : "",
      p.tools ? `<div><h2>${esc(t("proj.tools"))}</h2><ul class="chips">${p.tools.map((x) => `<li class="chip">${esc(x)}</li>`).join("")}</ul></div>` : ""
    ].join("");
    return `<div class="page__inner">
      <nav class="crumbs"><a class="back" href="#/work/${cat.id}">${esc(t("work.backCat"))} ${esc(tx(cat.title))}</a>
        <a class="back back--alt" href="#work">${esc(t("work.back"))}</a></nav>
      <h1 class="page__title">${esc(p.title)}</h1>
      <div class="proj__main">${mediaHTML(first, 0, p.title)}</div>
      <div class="proj__body">
        <div class="prose">${desc}</div>
        ${meta ? `<aside class="proj__meta">${meta}</aside>` : ""}
      </div>
      ${rest.length ? `<h2 class="proj__more">${esc(t("proj.more"))}</h2><div class="proj__extra">${rest.map((m, i) => mediaHTML(m, i + 1, p.title)).join("")}</div>` : ""}
      <nav class="pager">
        ${prev ? `<a href="#/work/${cat.id}/${prev.id}">← ${esc(t("proj.prev"))}: ${esc(prev.title)}</a>` : "<span></span>"}
        ${next ? `<a href="#/work/${cat.id}/${next.id}">${esc(t("proj.next"))}: ${esc(next.title)} →</a>` : ""}
      </nav>
    </div>`;
  }

  const homeView = $("#view-home"), pageView = $("#view-page");
  function showHome() { homeView.hidden = false; pageView.hidden = true; }
  function showPage(html) {
    pageView.innerHTML = html;
    homeView.hidden = true; pageView.hidden = false;
    window.scrollTo(0, 0);
    pageView.classList.remove("page--in"); void pageView.offsetWidth; pageView.classList.add("page--in");
    $$("video", pageView).forEach((v) => v.addEventListener("play", () => $$("video", pageView).forEach((o) => o !== v && o.pause())));
    setActive("work");
  }
  function renderRoute() {
    const m = location.hash.match(/^#\/work\/([^/]+)(?:\/([^/]+))?$/);
    if (m) {
      const cat = categories.find((c) => c.id === m[1]);
      if (cat) {
        if (m[2]) {
          const p = projects.find((x) => x.id === m[2] && x.cat === cat.id && visible(x));
          if (p) { showPage(projectPage(cat, p)); return; }
        } else { showPage(categoryPage(cat)); return; }
      }
      location.replace("#work"); return;
    }
    // gewone sectie-ankers: #home, #work, #about, #skills, #contact
    const wasPage = homeView.hidden;
    showHome();
    const id = location.hash.slice(1);
    const target = id && document.getElementById(id);
    const go = () => target ? target.scrollIntoView({ behavior: reduced || wasPage ? "auto" : "smooth", block: "start" }) : window.scrollTo(0, 0);
    wasPage ? requestAnimationFrame(go) : go();
    closeMenu();
  }

  /* =========================================================
     5. NAVIGATIE (mobiel menu + actieve sectie)
     ========================================================= */
  const burger = $("#burger"), navLinks = $("#nav-links");
  function closeMenu() { burger.setAttribute("aria-expanded", "false"); navLinks.classList.remove("is-open"); }
  burger.addEventListener("click", () => {
    const open = burger.getAttribute("aria-expanded") !== "true";
    burger.setAttribute("aria-expanded", String(open));
    navLinks.classList.toggle("is-open", open);
  });
  navLinks.addEventListener("click", (e) => { if (e.target.closest("a")) closeMenu(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });
  function setActive(id) { $$("[data-nav]", navLinks).forEach((a) => a.classList.toggle("is-active", a.dataset.nav === id)); }
  if ("IntersectionObserver" in window) {
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting && !homeView.hidden) setActive(en.target.id); });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["home", "work", "about", "skills", "contact"].forEach((id) => spy.observe(document.getElementById(id)));
  }
  $$(".lang__btn").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
  window.addEventListener("hashchange", renderRoute);

  /* zachte "reveal" bij scrollen (alleen als bewegen is toegestaan) */
  let revealObs = null;
  function observeReveal() {
    const els = $$(".reveal:not(.is-in)");
    if (reduced || !("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("is-in")); return; }
    revealObs = revealObs || new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); revealObs.unobserve(en.target); } });
    }, { threshold: 0.12 });
    els.forEach((e) => revealObs.observe(e));
  }

  /* =========================================================
     6. CHARACTER: zwaaien in een loop + tekstballon op 5 s
     ========================================================= */
  function initCharacter() {
    const still = $("#char-still"), video = $("#welcome"), bubbleVideo = $("#bubble-video"), text = $("#bubble-text");
    const [inStart, inEnd] = SITE.bubbleFadeIn, [outStart, outEnd] = SITE.bubbleFadeOut;
    const clamp01 = (x) => Math.min(1, Math.max(0, x));
    // opacity van de tekst op tijdstip t: fade-in, vol zichtbaar, fade-out
    const opacityAt = (t) => (t < outStart ? clamp01((t - inStart) / (inEnd - inStart)) : 1 - clamp01((t - outStart) / (outEnd - outStart)));

    // Reduced motion: stilstaand beeld, geen ballon
    if (reduced) { still.src = "assets/character/01_character_welcome_last.png"; video.remove(); bubbleVideo.remove(); text.remove(); return; }
    const fallback = () => { still.src = "assets/character/01_character_welcome_last.png"; still.classList.remove("is-hidden"); bubbleVideo.remove(); text.remove(); };

    video.addEventListener("playing", () => {
      still.classList.add("is-hidden");
      bubbleVideo.play().catch(() => {});
      const tick = () => {
        const t = video.currentTime;
        text.style.opacity = opacityAt(t);
        if (Math.abs(bubbleVideo.currentTime - t) > 0.12) bubbleVideo.currentTime = t;   // houdt ballon en personage gelijk
        requestAnimationFrame(tick);
      };
      tick();
    }, { once: true });
    video.addEventListener("error", fallback);
    const p = video.play();
    if (p && p.catch) p.catch(fallback);
  }

  /* ---------- start ---------- */
  applyI18n();
  initCharacter();
  renderRoute();
})();
