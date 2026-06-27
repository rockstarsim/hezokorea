(function () {
  'use strict';

  var LANG_KEY = 'hezo-lang';
  var currentLang = localStorage.getItem(LANG_KEY) || 'en';
  var activeCat = '';

  var STORE_LOGOS = [
    { name: 'Coupang', svg: '<svg class="store-logo shrink-0" viewBox="0 0 128 36" width="104" height="30" role="img" aria-label="Coupang"><title>Coupang</title><rect width="128" height="36" rx="8" fill="#E02020"/><path d="M20 10 L30 18 L20 26 L15 21 L20 18 L15 15 Z" fill="#fff"/><text x="38" y="24" font-family="Arial Black,Helvetica,sans-serif" font-weight="900" font-size="15" fill="#fff" letter-spacing="-0.5">coupang</text></svg>' },
    { name: 'Naver Smart Store', svg: '<svg class="store-logo shrink-0" viewBox="0 0 132 36" width="108" height="30" role="img" aria-label="Naver Smart Store"><title>Naver Smart Store</title><rect width="132" height="36" rx="8" fill="#03C75A"/><rect x="10" y="8" width="20" height="20" rx="4" fill="#fff"/><text x="14" y="23" font-family="Arial Black,Helvetica,sans-serif" font-weight="900" font-size="16" fill="#03C75A">N</text><text x="38" y="17" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="11" fill="#fff">Smart</text><text x="38" y="28" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="11" fill="#fff">Store</text></svg>' },
    { name: 'Bunjang', svg: '<svg class="store-logo shrink-0" viewBox="0 0 120 36" width="100" height="30" role="img" aria-label="Bunjang"><title>Bunjang</title><rect width="120" height="36" rx="8" fill="#FF4D4D"/><path d="M16 26 L22 10 L26 10 L20 26 Z M24 10 L30 26 L26 26 L20 10 Z" fill="#fff"/><text x="38" y="24" font-family="Arial Black,Helvetica,sans-serif" font-weight="900" font-size="14" fill="#fff">BUNJANG</text></svg>' },
    { name: 'Danggeun Market', svg: '<svg class="store-logo shrink-0" viewBox="0 0 148 36" width="120" height="30" role="img" aria-label="Danggeun Market"><title>Danggeun Market</title><rect width="148" height="36" rx="8" fill="#FF6F0F"/><path d="M22 24 C16 24 14 18 14 14 C14 10 17 8 20 8 C22 8 23 9 24 11 C25 9 26 8 28 8 C31 8 34 10 34 14 C34 18 32 24 26 24" fill="#fff"/><path d="M20 8 L18 4 M28 8 L30 4" stroke="#fff" stroke-width="2" stroke-linecap="round"/><rect x="17" y="13" width="14" height="3" rx="1.5" fill="#FF6F0F"/><text x="42" y="24" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="13" fill="#fff">Danggeun</text></svg>' },
    { name: 'Gmarket', svg: '<svg class="store-logo shrink-0" viewBox="0 0 120 36" width="100" height="30" role="img" aria-label="Gmarket"><title>Gmarket</title><rect width="120" height="36" rx="8" fill="#00C73C"/><path d="M14 22 Q24 8 34 22" stroke="#fff" stroke-width="4" fill="none" stroke-linecap="round"/><circle cx="24" cy="22" r="3" fill="#fff"/><text x="42" y="24" font-family="Arial Black,Helvetica,sans-serif" font-weight="900" font-size="14" fill="#fff">Gmarket</text></svg>' },
    { name: '11st', svg: '<svg class="store-logo shrink-0" viewBox="0 0 96 36" width="84" height="30" role="img" aria-label="11st"><title>11st</title><rect width="96" height="36" rx="8" fill="#FF0036"/><text x="12" y="25" font-family="Arial Black,Helvetica,sans-serif" font-weight="900" font-size="18" fill="#fff">11</text><text x="44" y="24" font-family="Arial,Helvetica,sans-serif" font-weight="700" font-size="14" fill="#fff">st</text><circle cx="82" cy="18" r="4" fill="#fff"/></svg>' }
  ];

  function t(lang, key) {
    var pack = window.HEZO_I18N.get(lang);
    return (pack.keys && pack.keys[key]) || window.HEZO_I18N.get('en').keys[key] || '';
  }

  function esc(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function buildMarquee() {
    var el = document.getElementById('storeMarquee');
    if (!el) return;
    var html = '';
    for (var r = 0; r < 2; r++) {
      STORE_LOGOS.forEach(function (s) { html += s.svg; });
    }
    el.innerHTML = html;
  }

  function renderDocAccordion(lang) {
    var root = document.getElementById('docAccordionRoot');
    if (!root) return;
    var pack = window.HEZO_I18N.get(lang);
    var cats = pack.catKeys;
    var html = '';
    pack.docs.forEach(function (doc, i) {
      var title = t(lang, 'cat.' + cats[i]);
      var open = i === 0 ? ' open' : '';
      var priceClass = doc.price.indexOf('Case') >= 0 || doc.price.indexOf('건별') >= 0 || doc.price.indexOf('视') >= 0 ? 'text-ink-soft' : 'text-accent';
      html += '<details class="doc-card group bg-cream/50 border border-cream-dark rounded-2xl overflow-hidden"' + open + '>' +
        '<summary class="flex items-center justify-between gap-4 p-5 sm:p-6 cursor-pointer hover:bg-cream transition-colors">' +
        '<div class="flex items-center gap-4 min-w-0"><span class="shrink-0 w-8 h-8 rounded-lg bg-periwinkle/15 text-periwinkle-dark text-sm font-bold flex items-center justify-center">' + (i + 1) + '</span>' +
        '<div class="min-w-0"><h3 class="font-bold text-ink">' + esc(title) + '</h3><p class="text-sm text-ink-soft truncate">' + esc(doc.covers) + '</p></div></div>' +
        '<div class="flex items-center gap-3 shrink-0"><span class="hidden sm:inline text-sm font-semibold ' + priceClass + '">' + esc(doc.price) + '</span>' +
        '<svg class="doc-chevron w-5 h-5 text-ink-soft transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m6 9 6 6 6-6"/></svg></div></summary>' +
        '<div class="px-5 sm:px-6 pb-6 pt-0 border-t border-cream-dark/60"><div class="grid sm:grid-cols-2 gap-4 pt-4 text-sm">' +
        '<div><p class="font-semibold text-ink-muted mb-1">' + esc(t(lang, 'doc.common')) + '</p><p class="text-ink-soft leading-relaxed">' + esc(doc.requests) + '</p></div>' +
        '<div><p class="font-semibold text-ink-muted mb-1">' + esc(t(lang, 'doc.notes')) + '</p><p class="text-ink-soft leading-relaxed">' + esc(doc.notes) + '</p></div></div>' +
        '<p class="mt-3 sm:hidden text-sm font-semibold text-accent">' + esc(doc.priceM || doc.price) + '</p></div></details>';
    });
    root.innerHTML = html;
  }

  function renderExpandedTable(lang) {
    var tbody = document.getElementById('expandedTableBody');
    if (!tbody) return;
    var pack = window.HEZO_I18N.get(lang);
    var html = '';
    pack.expanded.forEach(function (row, i) {
      var price = row[2] === 'flex' ? t(lang, 'doc.flexible') : row[2];
      var priceClass = row[2] === 'flex' ? 'text-ink-soft' : 'text-accent';
      html += '<tr><td class="px-4 py-3 font-semibold">' + (i + 1) + '</td><td class="px-4 py-3 font-medium">' + esc(row[0]) + '</td><td class="px-4 py-3 text-ink-soft">' + esc(row[1]) + '</td><td class="px-4 py-3 ' + priceClass + ' font-medium whitespace-nowrap">' + esc(price) + '</td></tr>';
    });
    tbody.innerHTML = html;
  }

  function renderCatHints(lang) {
    var root = document.getElementById('catHints');
    if (!root) return;
    var pack = window.HEZO_I18N.get(lang);
    var html = '';
    pack.catKeys.forEach(function (key) {
      var active = activeCat === key ? ' active' : '';
      html += '<div class="cat-hint' + active + ' p-3 bg-periwinkle/5 border border-periwinkle/15 rounded-xl text-xs text-ink-soft leading-relaxed" data-cat="' + key + '">' + (pack.hints[key] || '') + '</div>';
    });
    root.innerHTML = html;
  }

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;

    var pack = window.HEZO_I18N.get(lang);

    document.getElementById('page-title').textContent = pack.meta.title;
    var metaDesc = document.getElementById('meta-desc');
    if (metaDesc) metaDesc.setAttribute('content', pack.meta.description);

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (pack.keys[k] != null) el.textContent = pack.keys[k];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      if (pack.keys[k] != null) el.innerHTML = pack.keys[k];
    });
    document.querySelectorAll('[data-i18n-opt]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-opt');
      if (pack.keys[k] != null) el.textContent = pack.keys[k];
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-ph');
      if (pack.keys[k] != null) el.placeholder = pack.keys[k];
    });

    document.getElementById('langLabel').textContent = window.HEZO_I18N.codes[lang] || lang.toUpperCase();
    var mob = document.getElementById('langMob');
    if (mob) mob.value = lang;

    renderDocAccordion(lang);
    renderExpandedTable(lang);
    renderCatHints(lang);
  }

  /* Language dropdown */
  var langBtn = document.getElementById('langBtn');
  var langPanel = document.getElementById('langPanel');
  var langOpen = false;

  function setLangPanel(open) {
    langOpen = open;
    langPanel.classList.toggle('open', open);
    langBtn.setAttribute('aria-expanded', String(open));
  }

  langBtn.addEventListener('click', function (e) { e.stopPropagation(); setLangPanel(!langOpen); });
  document.querySelectorAll('.lang-opt').forEach(function (opt) {
    opt.addEventListener('click', function () {
      applyLang(this.getAttribute('data-lang'));
      setLangPanel(false);
    });
  });
  document.getElementById('langMob').addEventListener('change', function () { applyLang(this.value); });
  document.addEventListener('click', function () { if (langOpen) setLangPanel(false); });
  langPanel.addEventListener('click', function (e) { e.stopPropagation(); });

  /* Document tabs */
  var tabCurrent = document.getElementById('docTabCurrent');
  var tabExpanded = document.getElementById('docTabExpanded');
  var panelCurrent = document.getElementById('docPanelCurrent');
  var panelExpanded = document.getElementById('docPanelExpanded');

  function setDocTab(which) {
    var isCurrent = which === 'current';
    panelCurrent.classList.toggle('hidden', !isCurrent);
    panelExpanded.classList.toggle('hidden', isCurrent);
    tabCurrent.className = 'doc-tab px-4 py-2 text-sm font-semibold rounded-xl ' + (isCurrent ? 'bg-ink text-white' : 'bg-cream text-ink-soft hover:bg-cream-dark');
    tabExpanded.className = 'doc-tab px-4 py-2 text-sm font-semibold rounded-xl ' + (!isCurrent ? 'bg-ink text-white' : 'bg-cream text-ink-soft hover:bg-cream-dark');
  }
  tabCurrent.addEventListener('click', function () { setDocTab('current'); });
  tabExpanded.addEventListener('click', function () { setDocTab('expanded'); });

  /* Scroll reveal */
  var reveals = document.querySelectorAll('.reveal');
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(function (el) { io.observe(el); });
  document.querySelectorAll('.hero-glow .reveal').forEach(function (el) { el.classList.add('visible'); });

  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = this.getAttribute('href');
      if (id === '#') return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 80, behavior: 'smooth' });
    });
  });

  /* Mobile menu */
  var menuBtn = document.getElementById('menuBtn');
  var drawer = document.getElementById('drawer');
  var overlay = document.getElementById('overlay');
  var menuOpen = false;

  function setMenu(open) {
    menuOpen = open;
    menuBtn.classList.toggle('on', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? t(currentLang, 'nav.menuClose') : t(currentLang, 'nav.menuOpen'));
    drawer.classList.toggle('open', open);
    overlay.classList.toggle('open', open);
    drawer.setAttribute('aria-hidden', String(!open));
    overlay.setAttribute('aria-hidden', String(!open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  menuBtn.addEventListener('click', function () { setMenu(!menuOpen); });
  overlay.addEventListener('click', function () { setMenu(false); });
  document.querySelectorAll('.nav-mob').forEach(function (l) { l.addEventListener('click', function () { setMenu(false); }); });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { setMenu(false); setLangPanel(false); }
  });

  /* Form toggles */
  var fType = document.getElementById('f-type');
  var proxyExtra = document.getElementById('proxyExtra');
  var docExtra = document.getElementById('docExtra');
  var fDocCat = document.getElementById('f-doc-cat');

  function updateFormSections() {
    var v = fType.value;
    proxyExtra.classList.toggle('open', v === 'proxy');
    docExtra.classList.toggle('open', v === 'document');
    if (v !== 'document') {
      activeCat = '';
      fDocCat.value = '';
      renderCatHints(currentLang);
    }
  }

  fType.addEventListener('change', updateFormSections);

  fDocCat.addEventListener('change', function () {
    activeCat = fDocCat.value;
    renderCatHints(currentLang);
  });

  var form = document.getElementById('contactForm');
  var formWrap = document.getElementById('formWrap');
  var formDone = document.getElementById('formDone');
  var formError = document.getElementById('formError');
  var submitBtn = document.getElementById('f-submit');
  var submitLabel = document.getElementById('f-submit-label');
  var replyToField = document.getElementById('f-replyto');

  var FORM_ENDPOINT = 'https://formsubmit.co/ajax/info@hezokorea.com';
  var INQUIRY_EMAIL = 'info@hezokorea.com';

  function buildInquiryBody(fd) {
    var lines = [];
    fd.forEach(function (value, key) {
      if (key.charAt(0) === '_' || key === '_honey') return;
      lines.push(key + ': ' + value);
    });
    return lines.join('\n');
  }

  function showFormError(msg) {
    formError.textContent = msg;
    formError.classList.remove('hidden');
  }

  function hideFormError() {
    formError.textContent = '';
    formError.classList.add('hidden');
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    hideFormError();
    if (fType.value === 'document' && !fDocCat.value) {
      fDocCat.focus();
      fDocCat.setCustomValidity(t(currentLang, 'form.catRequired'));
      fDocCat.reportValidity();
      fDocCat.setCustomValidity('');
      return;
    }
    if (!form.checkValidity()) { form.reportValidity(); return; }

    submitBtn.disabled = true;
    submitLabel.textContent = t(currentLang, 'form.sending');

    var fd = new FormData(form);
    var customerEmail = fd.get('email') || '';
    replyToField.value = customerEmail;
    fd.set('_replyto', customerEmail);
    fd.set('_subject', 'HezoKorea inquiry — ' + fd.get('name'));
    fd.set('_template', 'table');
    fd.set('_captcha', 'false');

    fetch(FORM_ENDPOINT, { method: 'POST', body: fd, headers: { Accept: 'application/json' } })
      .then(function (res) { return res.json().then(function (data) { return { ok: res.ok, data: data }; }); })
      .then(function (result) {
        if (!result.ok || (result.data && result.data.success === false)) {
          throw new Error((result.data && result.data.message) || 'submit failed');
        }
        formWrap.style.display = 'none';
        formDone.classList.add('show');
      })
      .catch(function () {
        var subject = encodeURIComponent('HezoKorea inquiry — ' + fd.get('name'));
        var body = encodeURIComponent(buildInquiryBody(fd));
        showFormError('Could not send automatically. Opening your email app — please send to ' + INQUIRY_EMAIL + '.');
        window.location.href = 'mailto:' + INQUIRY_EMAIL + '?subject=' + subject + '&body=' + body;
      })
      .finally(function () {
        submitBtn.disabled = false;
        submitLabel.textContent = t(currentLang, 'form.submit');
      });
  });

  document.getElementById('f-reset').addEventListener('click', function () {
    form.reset();
    activeCat = '';
    proxyExtra.classList.remove('open');
    docExtra.classList.remove('open');
    formDone.classList.remove('show');
    formWrap.style.display = 'block';
    hideFormError();
    applyLang(currentLang);
  });

  buildMarquee();
  applyLang(currentLang);
})();
