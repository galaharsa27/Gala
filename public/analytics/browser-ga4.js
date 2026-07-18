(function () {
  var STANDARD_EVENTS = {
    contact_click: true,
    whatsapp_click: true,
    email_click: true,
    form_submit: true,
    venture_visit: true,
    waitlist_signup: true,
    discord_join: true,
    kickstarter_interest: true,
    playtest_signup: true,
    product_inquiry: true,
    partnership_inquiry: true,
    service_inquiry: true,
    portfolio_interaction: true,
    newsletter_signup: true,
    community_signup: true,
    build_consultation: true,
    collaboration_click: true
  };

  function isProductionDomain(config) {
    var host = window.location.hostname;
    if (!config || !config.domain) return false;
    if (host === 'localhost' || host === '127.0.0.1' || host === '0.0.0.0') return false;
    if (host.slice(-11) === '.vercel.app') return false;
    return host === config.domain || host === 'www.' + config.domain;
  }

  function appendScript(id, src) {
    if (document.getElementById(id)) return;
    var script = document.createElement('script');
    script.id = id;
    script.async = true;
    script.src = src;
    document.head.appendChild(script);
  }

  function cleanParams(params) {
    var clean = {};
    Object.keys(params || {}).forEach(function (key) {
      if (/email|phone|name|message|whatsapp|wa|address|discord/i.test(key)) return;
      if (params[key] === undefined || params[key] === null) return;
      clean[key] = String(params[key]).slice(0, 120);
    });
    return clean;
  }

  function pageParams(config) {
    return {
      site_id: config.siteId,
      page_path: window.location.pathname
    };
  }

  function track(eventName, params) {
    var config = window.__GALA_ANALYTICS_CONFIG__;
    if (!config || !config.enabled || !STANDARD_EVENTS[eventName]) return false;
    var payload = cleanParams(Object.assign(pageParams(config), params || {}));
    if (typeof window.gtag === 'function') window.gtag('event', eventName, payload);
    if (window.dataLayer) window.dataLayer.push(Object.assign({ event: eventName }, payload));
    return true;
  }

  function destinationDomain(href) {
    try {
      return new URL(href, window.location.href).hostname.replace(/^www\./, '');
    } catch (_) {
      return '';
    }
  }

  function inferClickEvent(anchor, config) {
    var href = anchor.getAttribute('href') || '';
    var text = (anchor.textContent || '').toLowerCase();
    var explicit = anchor.getAttribute('data-ga-event');
    if (explicit) return explicit;
    if (href.indexOf('wa.me') !== -1 || /whatsapp/i.test(href + text)) return 'whatsapp_click';
    if (href.indexOf('mailto:') === 0) return 'email_click';
    if (href.indexOf('discord') !== -1) return 'discord_join';
    if (href.indexOf('kickstarter') !== -1) return 'kickstarter_interest';
    if (/portfolio/.test(href + text)) return 'portfolio_interaction';
    if (/service|layanan/.test(href + text)) return 'service_inquiry';
    if (/partner|mitra|kolaborasi|collaboration/.test(href + text)) return config.siteId === 'aribaba' ? 'collaboration_click' : 'partnership_inquiry';
    if (/product|produk|build|component|consult/.test(href + text)) return 'product_inquiry';
    if (/contact|kontak/.test(href + text)) return 'contact_click';
    if ((config.ventureDomains || []).indexOf(destinationDomain(href)) !== -1) return 'venture_visit';
    return '';
  }

  function inferFormEvent(form) {
    var explicit = form.getAttribute('data-ga-event');
    if (explicit) return explicit;
    var label = ((form.getAttribute('name') || '') + ' ' + (form.id || '') + ' ' + (form.textContent || '')).toLowerCase();
    if (/waitlist|notify|launch|witness/.test(label)) return 'waitlist_signup';
    if (/newsletter/.test(label)) return 'newsletter_signup';
    if (/playtest/.test(label)) return 'playtest_signup';
    return 'form_submit';
  }

  function install(config) {
    if (!config || !config.measurementId || !isProductionDomain(config)) return;
    if (window.__galaGa4Installed) return;
    window.__galaGa4Installed = true;
    config.enabled = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag('consent', 'default', {
      ad_storage: 'denied',
      analytics_storage: config.analyticsConsent === 'granted' ? 'granted' : 'denied',
      functionality_storage: 'granted',
      personalization_storage: 'denied',
      security_storage: 'granted'
    });
    window.gtag('js', new Date());
    window.gtag('config', config.measurementId, {
      anonymize_ip: true,
      send_page_view: true
    });
    appendScript('gala-ga4', 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(config.measurementId));
  }

  function bindEvents(config) {
    if (window.__galaGa4EventsBound) return;
    window.__galaGa4EventsBound = true;
    document.addEventListener('click', function (event) {
      var anchor = event.target.closest && event.target.closest('a[href]');
      if (!anchor) return;
      var eventName = inferClickEvent(anchor, config);
      if (!eventName) return;
      track(eventName, {
        link_type: anchor.getAttribute('href').indexOf('mailto:') === 0 ? 'email' : 'link',
        destination_domain: destinationDomain(anchor.getAttribute('href') || ''),
        content_section: anchor.getAttribute('data-ga-section') || ''
      });
    }, { passive: true });
    document.addEventListener('submit', function (event) {
      var form = event.target;
      if (!form || !form.matches || !form.matches('form')) return;
      track(inferFormEvent(form), {
        content_section: form.getAttribute('data-ga-section') || form.id || form.getAttribute('name') || ''
      });
    }, true);
  }

  var config = window.__GALA_ANALYTICS_CONFIG__ || {};
  install(config);
  bindEvents(config);
  window.GalaAnalytics = {
    track: track
  };
})();
