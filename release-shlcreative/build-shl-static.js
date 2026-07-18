const fs = require("fs");
const path = require("path");

const root = __dirname;
const deploy = path.join(root, "vercel-deploy");
const output = path.join(deploy, ".vercel", "output", "static");
const targets = [root, deploy, output];
const shlInstagram = "https://www.instagram.com/shl.creative?igsh=MTcwcHpoNGtvb2ZiYg==";
const socialPreviewImage = "https://shlcreative.com/assets/social-preview.jpg";
const aboutSlides = [
  ["about-team-studio-wide.png", "SHL Creative Production team in studio"],
  ["about-team-action-truck.png", "SHL Creative Production action truck concept"],
  ["about-team-night-scene.png", "SHL Creative Production night production concept"],
  ["about-team-city-truck.png", "SHL Creative Production city production concept"],
  ["about-team-car-interior.png", "SHL Creative Production inside vehicle concept"],
  ["about-team-lounge.png", "SHL Creative Production studio lounge"],
  ["about-team-workshop.png", "SHL Creative Production workshop"],
  ["about-team-sofa.png", "SHL Creative Production team portrait"],
];
const aboutCtaImage = "about-team-car-interior.png";

const pageDefs = [
  { id: "home", title: { id: "SHL Creative Production", en: "SHL Creative Production" }, slug: "" },
  { id: "about", title: { id: "Tentang - SHL Creative Production", en: "About - SHL Creative Production" }, slug: "about" },
  { id: "services", title: { id: "Layanan - SHL Creative Production", en: "Services - SHL Creative Production" }, slug: "services" },
  { id: "portfolio", title: { id: "Portofolio - SHL Creative Production", en: "Portfolio - SHL Creative Production" }, slug: "portfolio" },
  { id: "contact", title: { id: "Kontak - SHL Creative Production", en: "Contact - SHL Creative Production" }, slug: "contact" },
];

const langMeta = {
  id: {
    code: "id",
    prefix: "",
    label: "ID",
    locale: "id_ID",
    desc: "SHL Creative Production - PT Samasta Hitakara Lekha. Creative direction, produksi video, fotografi, branding, campaign, website, aplikasi mobile, dan solusi IT di Bandung.",
    nav: { home: "Beranda", about: "Tentang", services: "Layanan", portfolio: "Portofolio", contact: "Kontak", cta: "Mulai Proyek" },
    footerText: "Ekosistem kreatif untuk visual storytelling yang sinematik. Autentik. Kreatif. Tak lekang waktu.",
    sitemap: "Peta Situs",
    office: "Studio",
    social: "Sosial",
    rights: "SELURUH HAK CIPTA DILINDUNGI.",
  },
  en: {
    code: "en",
    prefix: "/en",
    label: "EN",
    locale: "en_US",
    desc: "SHL Creative Production - PT Samasta Hitakara Lekha. Creative direction, video production, photography, branding, campaigns, websites, mobile apps, and IT solutions in Bandung.",
    nav: { home: "Home", about: "About", services: "Services", portfolio: "Portfolio", contact: "Contact", cta: "Start Project" },
    footerText: "A creative ecosystem for cinematic visual storytelling. Authentic. Creative. Timeless.",
    sitemap: "Sitemap",
    office: "Office",
    social: "Social",
    rights: "ALL RIGHTS RESERVED.",
  },
};

const pageDescriptions = {
  id: {
    home: "SHL Creative Production adalah studio kreatif Bandung untuk produksi video, fotografi, branding, campaign, website, aplikasi, dan solusi digital.",
    about: "Kenali PT Samasta Hitakara Lekha, ekosistem kreatif yang menyatukan ide, manusia, teknologi, dan seni dalam satu kolaborasi.",
    services: "Layanan SHL mencakup arah kreatif, produksi video, fotografi, branding, social media, website, aplikasi mobile, dan solusi IT.",
    portfolio: "Lihat portofolio SHL Creative Production: dokumentasi event, otomotif, lifestyle, stage, brand film, dan visual storytelling.",
    contact: "Hubungi SHL Creative Production untuk produksi video, fotografi, branding, campaign, website, aplikasi mobile, dan kolaborasi kreatif.",
  },
  en: {
    home: "SHL Creative Production is a Bandung creative studio for video production, photography, branding, campaigns, websites, apps, and digital solutions.",
    about: "Meet PT Samasta Hitakara Lekha, a creative ecosystem uniting ideas, people, technology, and art through collaboration.",
    services: "SHL services include creative direction, video production, photography, branding, social media, websites, mobile apps, and IT solutions.",
    portfolio: "Explore SHL Creative Production portfolio: events, automotive, lifestyle, stage, brand films, and visual storytelling.",
    contact: "Contact SHL Creative Production for video production, photography, branding, campaigns, websites, mobile apps, and creative collaboration.",
  },
};

function urlFor(pageId, lang = "id") {
  const page = pageDefs.find((p) => p.id === pageId);
  const prefix = langMeta[lang].prefix;
  if (!page || !page.slug) return prefix ? `${prefix}/` : "/";
  return `${prefix}/${page.slug}/`;
}

function fileFor(pageId, lang = "id") {
  if (lang === "id") return pageId === "home" ? "index.html" : `${pageId}.html`;
  return pageId === "home" ? path.join("en", "index.html") : path.join("en", pageId, "index.html");
}

const services = {
  id: [
    ["01", "Arah Kreatif", "Konsep, arahan seni, dan bahasa visual untuk keseluruhan brand."],
    ["02", "Produksi Video Komersial", "Iklan, brand film, dan product cinema dari awal sampai final."],
    ["03", "Fotografi", "Foto campaign, produk, corporate, editorial, dan dokumentasi."],
    ["04", "Identitas Brand", "Logo, sistem visual, panduan brand, dan gaya komunikasi."],
    ["05", "Branding Perusahaan", "Identitas perusahaan yang dibangun untuk dipercaya dan mudah dikenali."],
    ["06", "Branding Personal", "Positioning dan konten untuk founder, profesional, dan public figure."],
    ["07", "Branding Komunitas", "Identitas dan konten untuk komunitas, gerakan, dan kolektif."],
    ["08", "Pembuatan Konten", "Konten yang punya tujuan, terasa kuat, dan tetap perform."],
    ["09", "Manajemen Media Sosial", "Strategi, kalender konten, publikasi, dan laporan performa."],
    ["10", "Konsep Event", "Pengalaman event yang dirancang dan didokumentasikan dari awal sampai akhir."],
    ["11", "Campaign Kreatif", "Campaign terintegrasi lintas kanal."],
    ["12", "Pengembangan Website", "Website cepat, elegan, dan fokus pada konversi."],
    ["13", "Pengembangan Aplikasi Mobile", "Desain produk dan pengembangan aplikasi mobile."],
    ["14", "Solusi IT", "Sistem dan infrastruktur digital yang siap berkembang."],
  ],
  en: [
    ["01", "Creative Direction", "Concept, art direction, and visual language for the whole brand."],
    ["02", "Commercial Video Production", "TVC, brand films, and product cinema, end to end."],
    ["03", "Photography", "Campaign, product, corporate, and editorial photography."],
    ["04", "Brand Identity", "Logo, systems, guidelines, and verbal voice."],
    ["05", "Company Branding", "Corporate identity built for trust and recognition."],
    ["06", "Personal Branding", "Positioning and content for founders and leaders."],
    ["07", "Community Branding", "Identity and content for movements and collectives."],
    ["08", "Content Creation", "Purposeful content, made to be felt and to perform."],
    ["09", "Social Media Management", "Strategy, calendar, publishing, and reporting."],
    ["10", "Event Concept", "Experiences designed and documented end to end."],
    ["11", "Creative Campaign", "Integrated campaigns across every channel."],
    ["12", "Website Development", "Fast, elegant, conversion-focused websites."],
    ["13", "Mobile App Development", "Product design and native application builds."],
    ["14", "IT Solutions", "Systems and infrastructure that scale with you."],
  ],
};

const gallery = [
  ["gallery-ride-wide.jpg", "wide", "Road Culture", "Motorcycle convoy on the road"],
  ["gallery-stage-vocal.jpg", "wide", "Stage", "Live performance documentation"],
  ["gallery-landcruiser-color.jpg", "portrait", "Automotive", "Land Cruiser motion frame"],
  ["gallery-landcruiser-bw.jpg", "portrait", "Documentary", "Black and white road frame"],
  ["gallery-custom-bike-blue.jpg", "wide", "Custom Culture", "Custom motorcycle detail"],
  ["gallery-camp-chopper.jpg", "wide", "Lifestyle", "Chopper in a forest camp"],
  ["gallery-rider-portrait.jpg", "wide", "Portrait", "Rider portrait in the woods"],
  ["gallery-americana-chopper.jpg", "wide", "Showcase", "Classic chopper display"],
  ["gallery-vw-lineup.jpg", "wide", "Event", "Classic Volkswagen lineup"],
  ["gallery-wrx-blue.jpg", "portrait", "Automotive", "Blue WRX detail"],
];

function esc(s) {
  return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c]));
}

function logo(lang = "id") {
  return `<a class="brand" href="${urlFor("home", lang)}">
    <img class="brand-logo" src="/assets/shl-logo-mark.png" alt="SHL">
    <span><b>SHL CREATIVE PRODUCTION</b><i>PT SAMASTA HITAKARA LEKHA</i></span>
  </a>`;
}

function nav(active, lang = "id") {
  const meta = langMeta[lang];
  return `<header class="site-header" id="site-header">
    ${logo(lang)}
    <button class="menu-button" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
    <nav class="site-nav" aria-label="Primary">
      ${pageDefs.map((p) => `<a class="${active === p.id ? "active" : ""}" href="${urlFor(p.id, lang)}">${meta.nav[p.id]}</a>`).join("")}
      <span class="lang-switch"><a class="${lang === "id" ? "active" : ""}" href="${urlFor(active, "id")}">ID</a><a class="${lang === "en" ? "active" : ""}" href="${urlFor(active, "en")}">EN</a></span>
      <a class="nav-cta" href="${urlFor("contact", lang)}">${meta.nav.cta}</a>
    </nav>
  </header>`;
}

function footer(lang = "id") {
  const meta = langMeta[lang];
  return `<footer class="site-footer">
    <div class="footer-grid">
      <div>${logo(lang)}<p>${meta.footerText}</p></div>
      <div><b>${meta.sitemap}</b>${pageDefs.map((p) => `<a href="${urlFor(p.id, lang)}">${meta.nav[p.id]}</a>`).join("")}</div>
      <div><b>${meta.office}</b><p>Jl. Babakan Jeruk IV No. 9<br>Bandung, West Java, Indonesia</p><a href="tel:+6281214131427">+62 812-1413-1427</a></div>
      <div><b>${meta.social}</b><a href="${shlInstagram}" target="_blank" rel="noopener">Instagram</a><a href="mailto:Shlcreativeproduction@gmail.com">Email</a></div>
    </div>
    <div class="footer-bottom"><span>&copy; 2026 PT SAMASTA HITAKARA LEKHA. ${meta.rights}</span><span>AUTHENTIC / CREATIVE / TIMELESS</span></div>
  </footer>`;
}

const css = `:root{--bg:#050505;--panel:#111;--ink:#fff;--muted:#b5b5b5;--dim:#6b7db3;--red:#e51424;--blue:#071b50;--line:rgba(255,255,255,.1)}*{box-sizing:border-box}html{background:var(--bg);scroll-behavior:smooth}body{margin:0;background:var(--bg);color:var(--ink);font-family:Archivo,Arial,sans-serif;-webkit-font-smoothing:antialiased;overflow-x:hidden}img{display:block;max-width:100%;height:auto}a{color:inherit}.site-header{position:fixed;inset:0 0 auto;z-index:50;display:flex;align-items:center;justify-content:space-between;padding:20px 42px;border-bottom:1px solid transparent;transition:.3s;background:transparent}.site-header.scrolled,.site-header.open{background:rgba(5,5,5,.88);backdrop-filter:blur(18px);border-color:var(--line);padding-top:13px;padding-bottom:13px}.brand{display:flex;align-items:center;gap:14px;text-decoration:none;color:#fff;min-width:0}.brand-logo{width:44px;height:44px;border-radius:50%;object-fit:cover;flex:none;box-shadow:0 0 0 1px rgba(255,255,255,.12);background:#202327}.brand b{display:block;font-size:13px;letter-spacing:2.6px;line-height:1.15}.brand i{display:block;margin-top:3px;font-style:normal;font-size:8px;letter-spacing:2.2px;color:var(--muted)}.site-nav{display:flex;align-items:center;gap:22px}.site-nav a{text-decoration:none;text-transform:uppercase;font-size:11px;letter-spacing:2px;color:var(--muted);transition:.2s}.site-nav a:hover,.site-nav a.active{color:#fff}.site-nav .active{color:var(--red)}.lang-switch{display:inline-flex;align-items:center;gap:0;border:1px solid rgba(255,255,255,.18);height:34px}.lang-switch a{display:inline-flex;align-items:center;height:100%;padding:0 10px;font-size:10px;letter-spacing:1.4px}.lang-switch a+a{border-left:1px solid rgba(255,255,255,.18)}.lang-switch a.active{background:var(--red);color:#fff}.nav-cta,.btn{display:inline-flex;align-items:center;justify-content:center;min-height:46px;background:var(--red);color:#fff!important;text-decoration:none;text-transform:uppercase;font-weight:700;font-size:11px;letter-spacing:1.8px;padding:13px 22px;border:1px solid var(--red);transition:.25s}.nav-cta:hover,.btn:hover{background:#0d2f73;border-color:#0d2f73}.btn.ghost{background:transparent;border-color:rgba(255,255,255,.22)}.btn.ghost:hover{border-color:var(--red);background:#111}.menu-button{display:none;background:transparent;border:0;width:44px;height:44px;padding:10px;gap:7px;flex-direction:column;justify-content:center}.menu-button span{display:block;height:2px;background:#fff}.wrap{width:min(1320px,calc(100% - 84px));margin:0 auto}.narrow{width:min(900px,calc(100% - 84px));margin:0 auto}.eyebrow{text-transform:uppercase;font-size:10px;letter-spacing:3.2px;color:var(--red);font-weight:600;margin-bottom:24px}.hero{position:relative;min-height:100vh;display:grid;align-items:end;overflow:hidden;padding:140px 0 82px;background:#060606}.hero-media{position:absolute;inset:0;overflow:hidden}.hero-media iframe{position:absolute;top:50%;left:50%;width:100vw;height:56.25vw;min-height:100vh;min-width:177.78vh;transform:translate(-50%,-50%);border:0;pointer-events:none}.hero-media:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(5,5,5,.48),rgba(5,5,5,.22) 46%,rgba(5,5,5,.9))}.hero-content{position:relative;z-index:2}.hero-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}.sound-toggle{position:relative;z-index:3;display:inline-flex;align-items:center;gap:10px;min-height:46px;background:rgba(5,5,5,.44);border:1px solid rgba(255,255,255,.28);color:#fff;text-transform:uppercase;font-weight:700;font-size:11px;letter-spacing:1.8px;padding:13px 18px;cursor:pointer}.sound-toggle i{width:8px;height:8px;border-radius:50%;background:#666}.sound-toggle.on i{background:var(--red)}.video-switch{position:relative;z-index:3;display:inline-grid;grid-template-columns:56px minmax(92px,auto) 56px;align-items:center;min-height:46px;border:1px solid rgba(255,255,255,.24);background:rgba(5,5,5,.38);color:#fff}.video-switch button{height:44px;border:0;background:transparent;color:#fff;text-transform:uppercase;font-weight:700;font-size:10px;letter-spacing:1.4px;cursor:pointer}.video-switch button:hover{background:rgba(229,20,36,.72)}.video-switch span{display:inline-flex;align-items:center;justify-content:center;height:44px;padding:0 13px;border-left:1px solid rgba(255,255,255,.14);border-right:1px solid rgba(255,255,255,.14);color:var(--muted);font-size:10px;font-weight:700;letter-spacing:1.7px;text-transform:uppercase;white-space:nowrap}.hero h1,.page-hero h1{margin:0;font-size:clamp(42px,7vw,112px);line-height:.94;letter-spacing:0;font-weight:800;max-width:980px}.page-hero h1{font-size:clamp(38px,5.8vw,88px);max-width:920px}.hero p,.page-hero p{max-width:640px;color:var(--muted);font-size:17px;line-height:1.75;font-weight:300}.script{font-family:Georgia,serif;font-style:italic;color:var(--red);font-weight:400}.section{padding:118px 0}.section.alt{background:#111}.section.blue{background:linear-gradient(180deg,#071b50,#0a1330)}.split{display:grid;grid-template-columns:minmax(260px,.85fr) minmax(300px,1.15fr);gap:60px;align-items:start}.section h2{margin:0;font-size:clamp(30px,4.2vw,56px);line-height:1.05;letter-spacing:0}.lead{margin:0;color:#fff;font-size:18px;line-height:1.75;font-weight:300}.muted{color:var(--muted);line-height:1.8}.about-team{margin-top:58px;overflow:hidden;background:#0a1330;border:1px solid rgba(255,255,255,.08)}.about-team img{width:100%;height:auto}.about-team figcaption{display:flex;justify-content:space-between;gap:20px;padding:16px 18px;color:var(--muted);font-size:11px;letter-spacing:1.6px;text-transform:uppercase}.about-carousel-track{position:relative;aspect-ratio:16/9;background:#050505}.about-carousel-track img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;object-position:center center;opacity:0;transition:opacity .55s ease}.about-carousel-track img.active{opacity:1}.about-carousel figcaption span:last-child{display:inline-flex;align-items:center;gap:12px}.about-carousel button{border:1px solid rgba(255,255,255,.18);background:transparent;color:#fff;text-transform:uppercase;font:inherit;font-size:10px;letter-spacing:1.4px;padding:7px 10px;cursor:pointer}.about-carousel button:hover{background:var(--red);border-color:var(--red)}.about-carousel b{font-weight:700;color:#fff}.about-cta{display:grid;grid-template-columns:1.15fr .85fr;gap:46px;align-items:center;background:#0b0b0b;border:1px solid var(--line)}.about-cta img{width:100%;height:100%;min-height:420px;object-fit:cover;object-position:center top}.about-cta>div{padding:42px 42px 42px 0}.about-cta .btn{margin-top:22px}.service-groups{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;margin-top:46px}.service-group{background:#0b0b0b;border:1px solid var(--line);padding:30px}.service-group h3{margin:0 0 24px;font-size:22px}.service-list{border-top:1px solid var(--line)}.service-row{display:grid;grid-template-columns:52px 1fr;gap:18px;padding:20px 0;border-bottom:1px solid var(--line);text-decoration:none;transition:.22s}.service-row:hover{background:#111;padding-left:12px}.service-row small{color:#555;letter-spacing:2px}.service-row strong{display:block;font-size:clamp(17px,1.45vw,24px);font-weight:650}.service-row span{display:block;margin-top:6px;color:var(--muted);font-size:13.5px;line-height:1.6}.cards{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--line);border:1px solid var(--line)}.card{background:#0a1330;padding:30px 26px;min-height:180px}.card small{display:block;color:var(--red);letter-spacing:2px;margin-bottom:18px}.card h3{margin:0 0 10px;font-size:19px}.leader-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:22px}.leader{border:1px solid var(--line);background:#0b0b0b}.leader-photo{aspect-ratio:4/5;background:#070707;overflow:hidden}.leader-photo img{width:100%;height:100%;object-fit:cover}.leader-body{padding:22px}.leader h3{margin:0;font-size:20px;line-height:1.2}.leader em{display:block;margin:9px 0 14px;color:var(--red);font-style:normal;font-size:10px;letter-spacing:2.3px}.leader a{display:inline-block;margin-right:16px;color:#fff;text-decoration:none;border-bottom:1px solid var(--red);padding-bottom:5px;font-size:11px;letter-spacing:1.8px;text-transform:uppercase}.portfolio-gallery{column-count:3;column-gap:20px}.portfolio-gallery figure{break-inside:avoid;margin:0 0 20px;background:#0a1330;border:1px solid rgba(255,255,255,.08)}.portfolio-gallery img{width:100%;height:auto}.portfolio-gallery figcaption{display:flex;justify-content:space-between;gap:14px;padding:15px 16px;color:var(--muted);font-size:12px;letter-spacing:1.1px;text-transform:uppercase}.contact-grid{display:grid;grid-template-columns:1.25fr .75fr;gap:56px}.contact-form{background:#111;border:1px solid var(--line);padding:38px}.field-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}.contact-form label{display:grid;gap:10px;margin-bottom:24px}.contact-form span{text-transform:uppercase;font-size:10px;letter-spacing:3px;color:var(--muted)}input,textarea{width:100%;background:transparent;border:0;border-bottom:1px solid rgba(255,255,255,.22);color:#fff;font:inherit;padding:12px 0;outline:0}.pill-row{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:24px}.pill{border:1px solid rgba(255,255,255,.18);color:var(--muted);font-size:11px;letter-spacing:1.8px;padding:10px 14px;text-transform:uppercase}.direct a{display:flex;justify-content:space-between;gap:16px;text-decoration:none;border:1px solid var(--line);padding:20px;margin-bottom:12px}.direct a:hover{border-color:var(--red);background:#111}.site-footer{background:#071b50;padding:64px 42px 36px}.footer-grid{max-width:1320px;margin:0 auto;display:grid;grid-template-columns:1.45fr repeat(3,1fr);gap:36px}.site-footer b{display:block;text-transform:uppercase;font-size:10px;letter-spacing:3px;color:#8ea0dc;margin-bottom:16px}.site-footer p,.site-footer a{display:block;color:var(--muted);text-decoration:none;font-size:13px;line-height:1.8;margin:0 0 8px}.site-footer a:hover{color:#fff}.footer-bottom{max-width:1320px;margin:50px auto 0;padding-top:24px;border-top:1px solid rgba(255,255,255,.12);display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;color:#8ea0dc;font-size:11px;letter-spacing:1.3px}.compat{min-height:100vh;display:grid;place-items:center;background:#050505;color:#fff;font-family:Arial,sans-serif}.compat a{color:#fff}@media(max-width:980px){.site-header{padding:15px 20px}.site-header.scrolled,.site-header.open{padding:12px 20px}.brand-logo{width:40px;height:40px}.brand b{font-size:11px;letter-spacing:1.8px}.brand i{display:none}.menu-button{display:flex}.site-nav{position:absolute;left:0;right:0;top:100%;display:none;flex-direction:column;align-items:stretch;background:rgba(5,5,5,.96);border-bottom:1px solid var(--line);padding:14px 20px 24px}.site-header.open .site-nav{display:flex}.site-nav a{padding:13px 0}.lang-switch{width:max-content;margin:6px 0 8px}.nav-cta{width:100%;margin-top:6px}.wrap,.narrow{width:min(100% - 36px,1320px)}.hero{min-height:680px;padding:128px 0 58px}.hero h1{font-size:clamp(38px,11vw,68px)}.page-hero h1{font-size:clamp(34px,10vw,62px)}.hero p,.page-hero p{font-size:15.5px}.section{padding:82px 0}.split,.contact-grid,.service-groups{grid-template-columns:1fr;gap:30px}.cards,.leader-grid{grid-template-columns:1fr}.portfolio-gallery{column-count:1}.field-grid{grid-template-columns:1fr}.about-carousel figcaption{align-items:flex-start;flex-direction:column}.about-carousel-track{aspect-ratio:16/9}.about-cta{grid-template-columns:1fr;gap:0}.about-cta img{min-height:260px;aspect-ratio:4/3}.about-cta>div{padding:28px 20px 30px}.contact-form{padding:26px 20px}.site-footer{padding:52px 20px 32px}.footer-grid{grid-template-columns:1fr;gap:28px}}@media(min-width:981px) and (max-width:1180px){.cards,.leader-grid{grid-template-columns:repeat(2,1fr)}.portfolio-gallery{column-count:2}.site-nav{gap:16px}.site-nav a{letter-spacing:1.5px}}`;

function layout(page, body, lang = "id") {
  const meta = langMeta[lang];
  const canonical = `https://shlcreative.com${urlFor(page.id, lang)}`;
  const alternateId = `https://shlcreative.com${urlFor(page.id, "id")}`;
  const alternateEn = `https://shlcreative.com${urlFor(page.id, "en")}`;
  const desc = pageDescriptions[lang][page.id] || meta.desc;
  return `<!doctype html>
<html lang="${meta.code}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(page.title[lang])}</title>
  <meta name="description" content="${esc(desc)}">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="${canonical}">
  <link rel="alternate" hreflang="id" href="${alternateId}">
  <link rel="alternate" hreflang="en" href="${alternateEn}">
  <link rel="alternate" hreflang="x-default" href="${alternateId}">
  <meta property="og:type" content="website">
  <meta property="og:site_name" content="SHL Creative Production">
  <meta property="og:title" content="${esc(page.title[lang])}">
  <meta property="og:description" content="${esc(desc)}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${socialPreviewImage}">
  <meta property="og:image:secure_url" content="${socialPreviewImage}">
  <meta property="og:image:type" content="image/jpeg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:locale" content="${meta.locale}">
  <meta property="og:locale:alternate" content="${lang === "id" ? "en_US" : "id_ID"}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(page.title[lang])}">
  <meta name="twitter:description" content="${esc(desc)}">
  <meta name="twitter:image" content="${socialPreviewImage}">
  <link rel="icon" href="/favicon.ico" sizes="any">
  <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
  <link rel="icon" type="image/png" sizes="64x64" href="/favicon-64x64.png">
  <link rel="icon" type="image/png" href="/favicon.png">
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="manifest" href="/manifest.webmanifest">
  <meta name="msapplication-config" content="/browserconfig.xml">
  <meta name="msapplication-TileColor" content="#050505">
  <meta name="msapplication-TileImage" content="/mstile-150x150.png">
  <meta name="theme-color" content="#050505">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/assets/site.css">
  <script type="application/ld+json">${JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "SHL Creative Production",
    legalName: "PT Samasta Hitakara Lekha",
    url: "https://shlcreative.com/",
    logo: "https://shlcreative.com/assets/shl-logo-mark.png",
    email: "Shlcreativeproduction@gmail.com",
    telephone: "+62 812-1413-1427",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Jl. Babakan Jeruk IV No. 9",
      addressLocality: "Bandung",
      addressRegion: "West Java",
      addressCountry: "ID"
    },
    sameAs: [shlInstagram]
  })}</script>
</head>
<body data-page="${page.id}">
${nav(page.id, lang)}
${body}
${footer(lang)}
<script src="/assets/site.js"></script>
</body>
</html>`;
}

function home(lang = "id") {
  const s = services[lang];
  const heroVideos = [
    ["HYix8fbR7yA", lang === "id" ? "Video 01" : "Video 01"],
    ["aAOPDXG4qBU", lang === "id" ? "Video 02" : "Video 02"],
  ];
  const copy = lang === "id" ? {
    eyebrow: "Autentik / Kreatif / Tak Lekang Waktu",
    body: "PT Samasta Hitakara Lekha menyatukan ide, manusia, teknologi, dan seni dalam satu semesta kolaborasi - mitra kreatif untuk cerita yang dibuat dengan tujuan.",
    gallery: "Masuk Galeri",
    sound: "Suara Mati",
    what: "Yang Kami Kerjakan",
    titleA: "Storytelling,",
    titleB: "dari awal sampai akhir.",
  } : {
    eyebrow: "Authentic / Creative / Timeless",
    body: "PT Samasta Hitakara Lekha unites ideas, people, technology, and art in one universe of collaboration - a creative partner for stories told with intention.",
    gallery: "Enter Full Gallery",
    sound: "Sound Off",
    what: "What We Do",
    titleA: "Storytelling,",
    titleB: "end to end.",
  };
  return `<main>
    <section class="hero">
      <div class="hero-media" data-video-swipe><iframe id="hero-video" data-videos="${esc(JSON.stringify(heroVideos.map(([id]) => id)))}" src="https://www.youtube.com/embed/${heroVideos[0][0]}?autoplay=1&mute=0&loop=1&playlist=${heroVideos[0][0]}&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&enablejsapi=1" title="SHL Creative Production hero video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe></div>
      <div class="wrap hero-content">
        <div class="eyebrow">${copy.eyebrow}</div>
        <h1>SHL Creative<br><span class="script">Production</span></h1>
        <p>${copy.body}</p>
        <div class="hero-actions">
          <a class="btn" href="${urlFor("portfolio", lang)}">${copy.gallery}</a>
          <button class="sound-toggle on" id="sound-toggle" type="button" aria-pressed="true" data-off="${copy.sound}" data-on="${lang === "id" ? "Suara Hidup" : "Sound On"}"><i></i><span>${lang === "id" ? "Suara Hidup" : "Sound On"}</span></button>
          <div class="video-switch" aria-label="${lang === "id" ? "Pilih video pembuka" : "Choose hero video"}">
            <button type="button" data-video-step="-1" aria-label="${lang === "id" ? "Video sebelumnya" : "Previous video"}">Prev</button>
            <span id="video-label">${heroVideos[0][1]}</span>
            <button type="button" data-video-step="1" aria-label="${lang === "id" ? "Video berikutnya" : "Next video"}">Next</button>
          </div>
        </div>
      </div>
    </section>
    <section class="section blue">
      <div class="wrap">
        <div class="eyebrow">${copy.what}</div>
        <h2>${copy.titleA}<br><span class="script">${copy.titleB}</span></h2>
        <div class="service-list" style="margin-top:56px">${s.slice(0, 6).map(([n, t, d]) => `<a class="service-row" href="${urlFor("services", lang)}"><small>${n}</small><div><strong>${esc(t)}</strong><span>${esc(d)}</span></div></a>`).join("")}</div>
      </div>
    </section>
  </main>`;
}

function about(lang = "id") {
  const isId = lang === "id";
  const pillars = isId ? [
    ["01", "Ide", "Konsep yang punya niat dan alasan sebelum masuk ke bentuk visual."],
    ["02", "Manusia", "Kolaborasi lintas disiplin bersama setiap klien dan partner."],
    ["03", "Teknologi", "Tools dan craft yang tepat untuk mewujudkan ide dengan standar tinggi."],
    ["04", "Seni", "Estetika yang bergerak - visual dan narasi yang dibuat untuk terasa."],
  ] : [
    ["01", "Ideas", "Concepts with intent - a reason to exist before a form to take."],
    ["02", "People", "Collaboration across disciplines, and with every client we partner."],
    ["03", "Technology", "The right tools and craft to realize ideas at the highest standard."],
    ["04", "Art", "Aesthetics that move - visuals and narratives made to be felt."],
  ];
  const leaders = [
    ["leader-galang.jpg", "Galang Kharisma Rizki", isId ? "Direktur" : "Director", isId ? "Memimpin visi perusahaan, arahan kreatif, kemitraan strategis, inovasi, dan pengembangan bisnis." : "Leads company vision, creative direction, strategic partnerships, innovation, and business development.", "https://www.instagram.com/galaharsa.sh1/", "https://galaharsa.com"],
    ["leader-deni.jpg", "Deni Surachmat", isId ? "Manajer Keuangan" : "Finance Manager", isId ? "Bertanggung jawab atas perencanaan keuangan, budgeting, cash flow, accounting, dan keberlanjutan perusahaan." : "Responsible for financial planning, budgeting, cash flow, accounting, and company sustainability.", "https://www.instagram.com/denisurachmat/", ""],
    ["leader-amir.jpg", "Amir Maulana", isId ? "Manajer Operasional" : "Operations Manager", isId ? "Bertanggung jawab atas alur produksi, jadwal, eksekusi, logistik, quality assurance, dan operasional." : "Responsible for production workflow, scheduling, execution, logistics, quality assurance, and operational excellence.", "", ""],
    ["leader-uta.jpg", "Frisardi Ramadhana (Uta)", isId ? "Manajer Komunikasi Kreatif" : "Creative Communications Manager", isId ? "Mengembangkan strategi komunikasi, konsep kreatif, narasi brand, dan konten, serta menerjemahkan arahan kreatif menjadi eksekusi bersama tim produksi." : "Develops communication strategy, creative concepts, brand narratives, and content, while translating creative direction into execution with the production team.", "https://www.instagram.com/utautinn?igsh=MW55ZDlqdG8xanpjaA==", ""],
  ];
  return `<main>
    <section class="page-hero section"><div class="wrap"><div class="eyebrow">${isId ? "Tentang SHL" : "About SHL"}</div><h1>${isId ? "Ekosistem kreatif tempat ide menjadi makna." : "A creative ecosystem where ideas become meaning."}</h1><p>${isId ? "PT Samasta Hitakara Lekha menyatukan ide, manusia, teknologi, dan seni dalam satu semesta kolaborasi - mitra kreatif, bukan pabrik konten." : "PT Samasta Hitakara Lekha unites ideas, people, technology, and art in one universe of collaboration - a creative partner, not a content factory."}</p><figure class="about-team about-carousel" data-carousel><div class="about-carousel-track">${aboutSlides.map(([file, alt], i) => `<img class="${i === 0 ? "active" : ""}" src="/assets/${file}" alt="${esc(alt)}">`).join("")}</div><figcaption><span>SHL Creative Production</span><span><button type="button" data-carousel-step="-1" aria-label="${isId ? "Foto sebelumnya" : "Previous photo"}">Prev</button><b data-carousel-label>01 / ${String(aboutSlides.length).padStart(2, "0")}</b><button type="button" data-carousel-step="1" aria-label="${isId ? "Foto berikutnya" : "Next photo"}">Next</button></span></figcaption></figure></div></section>
    <section class="section alt"><div class="split wrap"><div><div class="eyebrow">${isId ? "Siapa Kami" : "Who We Are"}</div><h2>${isId ? "Tujuan dulu," : "Purpose first,"}<br><span class="script">${isId ? "craft selalu." : "craft always."}</span></h2></div><div><p class="lead">${isId ? "Kami bukan sekadar rumah produksi. Kami adalah ekosistem kreatif yang menyatukan ide, manusia, teknologi, dan seni ke dalam satu semesta kolaborasi." : "We are not just a production house. We are a creative ecosystem that brings ideas, people, technology, and art into one collaborative universe."}</p><p class="muted">${isId ? "Kami percaya setiap karya lahir dengan tujuan - bukan sekadar untuk dilihat, tetapi untuk dirasakan, dipahami, dan diberi makna. Dari keyakinan itu, kami menghadirkan visual, narasi, pengalaman, dan solusi digital yang matang sekaligus memikat." : "We believe every work is born with purpose - not only to be seen, but to be felt, understood, and given meaning. From that belief, we create visuals, narratives, experiences, and digital solutions with craft and clarity."}</p></div></div></section>
    <section class="section blue"><div class="narrow" style="text-align:center"><div class="eyebrow">${isId ? "Filosofi Kami" : "Our Philosophy"}</div><p class="lead" style="font-size:clamp(24px,3vw,40px);font-family:Georgia,serif;font-style:italic">"${isId ? "Samasta Hitakara Lekha merupakan sebuah ekosistem kreatif yang menyatukan ide, manusia, teknologi, dan seni dalam satu semesta kolaborasi." : "Samasta Hitakara Lekha is a creative ecosystem that unites ideas, people, technology, and art in one universe of collaboration."}"</p><p class="muted">${isId ? "Bagi kami, kreativitas bukan sekadar proses menghasilkan konten. Kreativitas adalah cara menciptakan dampak. Melalui kolaborasi, inovasi, dan standar kualitas yang tinggi, kami berkomitmen menjadi mitra kreatif yang membantu mewujudkan gagasan menjadi karya yang autentik, relevan, dan memiliki nilai yang bertahan melampaui waktu." : "For us, creativity is not merely the process of producing content. It is a way to create impact. Through collaboration, innovation, and high standards, we become a creative partner that turns ideas into authentic, relevant work with long-term value."}</p></div></section>
    <section class="section"><div class="wrap"><div class="eyebrow">${isId ? "Alasan Kami Ada" : "Why We Exist"}</div><h2>${isId ? "Mengubah ide menjadi karya yang meninggalkan" : "To turn ideas into work that leaves a"} <span class="script">${isId ? "jejak bermakna." : "meaningful trace."}</span></h2><div class="cards" style="margin-top:56px">${pillars.map(([n, t, d]) => `<div class="card"><small>${n}</small><h3>${esc(t)}</h3><p class="muted">${esc(d)}</p></div>`).join("")}</div></div></section>
    <section class="section alt"><div class="wrap"><div class="eyebrow">${isId ? "Pimpinan" : "Leadership"}</div><h2>${isId ? "Orang-orang di balik ekosistem." : "The people behind the ecosystem."}</h2><div class="leader-grid" style="margin-top:58px">${leaders.map(([photo, name, role, bio, ig, web]) => `<div class="leader"><div class="leader-photo"><img src="/assets/${photo}" alt="${esc(name)}"></div><div class="leader-body"><h3>${esc(name)}</h3><em>${esc(role)}</em><p class="muted">${esc(bio)}</p>${ig ? `<a href="${ig}" target="_blank" rel="noopener">Instagram</a>` : ""}${web ? `<a href="${web}" target="_blank" rel="noopener">Website</a>` : ""}</div></div>`).join("")}</div></div></section>
    <section class="section"><div class="wrap"><div class="about-cta"><img src="/assets/${aboutCtaImage}" alt="SHL Creative Production mobile production team"><div><div class="eyebrow">${isId ? "Siap Bergerak" : "Ready To Move"}</div><h2>${isId ? "Produksi yang ikut masuk ke ritme cerita." : "Production that moves with the story."}</h2><p class="muted">${isId ? "Dari konsep, set, jalan, sampai layar final - kami menyiapkan tim, kamera, dan eksekusi untuk karya yang terasa hidup." : "From concept, set, road, to final screen - we prepare the team, camera, and execution for work that feels alive."}</p><a class="btn" href="${urlFor("contact", lang)}">${isId ? "Mulai Proyek" : "Start A Project"}</a></div></div></div></section>
  </main>`;
}

function servicesPage(lang = "id") {
  const isId = lang === "id";
  const s = services[lang];
  const benefits = isId ? [
    ["Gambar cinema-grade", "Diproduksi dengan kamera profesional, lighting terkontrol, dan warna yang dikalibrasi."],
    ["Script berbasis cerita", "Konsep ditulis sesuai positioning brand dan disetujui sebelum produksi."],
    ["Delivery siap tayang", "Master disiapkan untuk TVC, web, social, dan kebutuhan layar lainnya."],
    ["Lisensi jelas", "Kebutuhan musik, talent, dan lokasi ditangani dengan dokumentasi yang rapi."],
    ["Post-production matang", "Editing, color grading, sound design, dan motion graphics dalam satu alur kerja."],
  ] : [
    ["Cinema-grade image", "Shot on professional cinema cameras with controlled lighting and calibrated color."],
    ["Story-first scripts", "Concepts written around your positioning, approved before production begins."],
    ["Broadcast-ready delivery", "Masters in every aspect ratio and platform spec - TVC, web, social, OOH."],
    ["Full licensing clarity", "Music, talent, and location rights handled and documented."],
    ["Post-production depth", "Edit, grade, sound design, and motion graphics in-house."],
  ];
  const workflow = isId ? ["Brief", "Konsep", "Pre-production", "Produksi", "Post", "Delivery"] : ["Brief", "Concept", "Pre-production", "Shoot", "Post", "Delivery"];
  const groups = [
    [isId ? "Kreatif & Brand" : "Creative & Brand", s.slice(0, 7)],
    [isId ? "Produksi & Digital" : "Production & Digital", s.slice(7, 14)],
  ];
  return `<main>
    <section class="page-hero section"><div class="wrap"><div class="eyebrow">${isId ? "Layanan Kami" : "Our Services"}</div><h1>${isId ? "Creative, production, dan technology dalam satu tim." : "Creative, production, and technology by one accountable team."}</h1><p>${isId ? "Dari konsep pertama sampai deployment final - visual storytelling, brand system, campaign, website, aplikasi mobile, dan solusi IT." : "From first concept to final deployment - visual storytelling, brand systems, campaigns, websites, mobile apps, and IT solutions."}</p></div></section>
    <section class="section"><div class="wrap"><div class="split"><div><div class="eyebrow">${isId ? "Daftar Layanan" : "Service Index"}</div><h2>${isId ? "Dibangun untuk kebutuhan kerja, bukan sekadar ramai." : "Built around the work, not around noise."}</h2></div><p class="lead">${isId ? "Layanan disusun dari strategi, produksi, distribusi, sampai pengembangan digital agar setiap kebutuhan punya alur kerja yang jelas." : "Services are arranged from strategy, production, distribution, to digital development so every need has a clear workflow."}</p></div><div class="service-groups">${groups.map(([title, list]) => `<div class="service-group"><h3>${esc(title)}</h3><div class="service-list">${list.map(([n, t, d]) => `<a class="service-row" href="${urlFor("contact", lang)}"><small>${n}</small><div><strong>${esc(t)}</strong><span>${esc(d)}</span></div></a>`).join("")}</div></div>`).join("")}</div></div></section>
    <section class="section alt"><div class="split wrap"><div><div class="eyebrow">${isId ? "Layanan Utama" : "Featured Service"}</div><h2>${isId ? "Produksi Video Komersial" : "Commercial Video Production"}</h2><p class="lead">${isId ? "Brand film, TVC, dan product cinema yang diproduksi dengan standar profesional, color grade matang, dan editing yang dibuat untuk menggerakkan audiens." : "Brand films, TVCs, and product cinema shot on cinema-grade equipment, graded to broadcast standard, and cut to move audiences - not just fill a feed."}</p></div><div><div class="service-list">${benefits.map(([t, d], i) => `<div class="service-row"><small>${String(i + 1).padStart(2, "0")}</small><div><strong>${esc(t)}</strong><span>${esc(d)}</span></div></div>`).join("")}</div></div></div></section>
    <section class="section blue"><div class="wrap"><div class="eyebrow">${isId ? "Alur Kerja" : "Workflow"}</div><div class="cards">${workflow.map((w, i) => `<div class="card"><small>${String(i + 1).padStart(2, "0")}</small><h3>${esc(w)}</h3></div>`).join("")}</div><div style="margin-top:42px"><a class="btn" href="${urlFor("contact", lang)}">${isId ? "Mulai Diskusi" : "Start The Conversation"}</a></div></div></section>
  </main>`;
}

const staticSiteJs = fs.readFileSync(path.join(root, "assets", "site.js"), "utf8");
function portfolio(lang = "id") {
  const isId = lang === "id";
  return `<main>
    <section class="page-hero section"><div class="wrap"><div class="eyebrow">${isId ? "Portofolio" : "Portfolio"}</div><h1>${isId ? "Karya berbicara" : "The work speaks"}<br><span class="script">${isId ? "dengan sendirinya." : "for itself."}</span></h1><p>${isId ? "Galeri ini memakai foto asli yang sudah disiapkan, ditata full image supaya tidak ada bagian penting yang hilang di desktop maupun HP." : "This gallery uses approved original photos, arranged as full images so no important detail disappears on desktop or mobile."}</p></div></section>
    <section class="section" style="padding-top:30px"><div class="wrap"><div class="portfolio-gallery">${gallery.map(([file, kind, cat, alt]) => `<figure class="${kind}"><img src="/assets/${file}" alt="${esc(alt)}" loading="lazy"><figcaption><span>${esc(cat)}</span><span>SHL</span></figcaption></figure>`).join("")}</div></div></section>
    <section class="section alt" style="text-align:center"><div class="wrap"><h2>${isId ? "Cerita Anda layak masuk" : "Your story belongs"}<br><span class="script">${isId ? "ke galeri ini." : "in this gallery."}</span></h2><div style="margin-top:44px"><a class="btn" href="${urlFor("contact", lang)}">${isId ? "Mulai Proyek" : "Start A Project"}</a></div></div></section>
  </main>`;
}

function contact(lang = "id") {
  const isId = lang === "id";
  const interests = isId ? ["Brand Film", "Brand Identity", "Fotografi", "Event", "Social Media", "Website / App", "Lainnya"] : ["Brand Film", "Brand Identity", "Photography", "Event", "Social Media", "Website / App", "Other"];
  return `<main>
    <section class="page-hero section"><div class="wrap"><div class="eyebrow">${isId ? "Kontak" : "Contact"}</div><h1>${isId ? "Mari buat sesuatu" : "Let's create something"}<br><span class="script">${isId ? "yang luar biasa." : "extraordinary."}</span></h1><p>${isId ? "Ceritakan tujuan, timeline, dan jenis cerita yang ingin Anda bangun. Kami akan membalas dalam satu hari kerja." : "Tell us the goal, timeline, and the kind of story you want to build. We will reply within one business day."}</p></div></section>
    <section class="section" style="padding-top:30px"><div class="contact-grid wrap">
      <form class="contact-form" action="mailto:Shlcreativeproduction@gmail.com" method="post" enctype="text/plain">
        <div class="field-grid"><label><span>${isId ? "Nama" : "Your Name"}</span><input name="name" placeholder="${isId ? "Nama lengkap" : "Full name"}"></label><label><span>${isId ? "Perusahaan / Komunitas" : "Company / Community"}</span><input name="company" placeholder="${isId ? "Opsional" : "Optional"}"></label></div>
        <div class="field-grid"><label><span>Email</span><input name="email" type="email" placeholder="you@company.com"></label><label><span>Phone / WhatsApp</span><input name="phone" placeholder="+62"></label></div>
        <label><span>${isId ? "Apa yang ingin dibuat?" : "What are you making?"}</span><div class="pill-row">${interests.map((x) => `<i class="pill">${esc(x)}</i>`).join("")}</div></label>
        <label><span>${isId ? "Ceritakan proyeknya" : "Tell us about the project"}</span><textarea name="message" rows="5" placeholder="${isId ? "Tujuan, timeline, kisaran budget - apa pun akan membantu." : "Goals, timeline, budget range - anything helps."}"></textarea></label>
        <button class="btn" type="submit">${isId ? "Kirim Pesan" : "Send Message"}</button>
      </form>
      <aside>
        <div class="eyebrow">${isId ? "Kontak Langsung" : "Direct Lines"}</div>
        <div class="direct">
          <a href="https://wa.me/6281214131427"><strong>WhatsApp</strong><span>+62 812-1413-1427</span></a>
          <a href="${shlInstagram}" target="_blank" rel="noopener"><strong>Instagram</strong><span>@shl.creative</span></a>
          <a href="mailto:Shlcreativeproduction@gmail.com"><strong>Email</strong><span>Shlcreativeproduction@gmail.com</span></a>
        </div>
        <div style="margin-top:46px"><div class="eyebrow">${isId ? "Studio" : "The Studio"}</div><p class="muted">Jl. Babakan Jeruk IV No. 9<br>Bandung, West Java, Indonesia</p></div>
        <div style="margin-top:46px"><div class="eyebrow">${isId ? "Jam Kerja" : "Business Hours"}</div><p class="muted">${isId ? "Senin - Jumat: 09.00 - 18.00 WIB<br>Sabtu: 10.00 - 15.00 WIB<br>Minggu: Dengan janji temu" : "Monday - Friday: 09.00 - 18.00 WIB<br>Saturday: 10.00 - 15.00 WIB<br>Sunday: By appointment"}</p></div>
      </aside>
    </div></section>
  </main>`;
}

const bodies = { home, about, services: servicesPage, portfolio, contact };
const js = `(() => {const header=document.getElementById("site-header");const btn=document.querySelector(".menu-button");const onScroll=()=>header&&header.classList.toggle("scrolled",window.scrollY>30);onScroll();window.addEventListener("scroll",onScroll,{passive:true});if(btn&&header){btn.addEventListener("click",()=>{const open=header.classList.toggle("open");btn.setAttribute("aria-expanded",String(open));});document.querySelectorAll(".site-nav a").forEach(a=>a.addEventListener("click",()=>{header.classList.remove("open");btn.setAttribute("aria-expanded","false");}));}const sound=document.getElementById("sound-toggle");const video=document.getElementById("hero-video");const label=document.getElementById("video-label");let soundOn=false;let currentVideo=0;let videos=[];if(video){try{videos=JSON.parse(video.dataset.videos||"[]")}catch(e){videos=[]}}const videoSrc=(id)=>"https://www.youtube.com/embed/"+id+"?autoplay=1&mute="+(soundOn?0:1)+"&loop=1&playlist="+id+"&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&enablejsapi=1";const send=(func,args=[])=>{if(!video)return;try{video.contentWindow.postMessage(JSON.stringify({event:"command",func,args}),"*")}catch(e){}};const syncSound=()=>{if(!sound)return;sound.classList.toggle("on",soundOn);sound.setAttribute("aria-pressed",String(soundOn));sound.querySelector("span").textContent=soundOn?(sound.dataset.on||"Sound On"):(sound.dataset.off||"Sound Off");};const setVideo=(idx)=>{if(!video||!videos.length)return;currentVideo=(idx+videos.length)%videos.length;const id=videos[currentVideo];video.src=videoSrc(id);if(label)label.textContent="Video "+String(currentVideo+1).padStart(2,"0");setTimeout(()=>{send(soundOn?"unMute":"mute");if(soundOn)send("setVolume",[100]);},650);};if(sound&&video){syncSound();sound.addEventListener("click",()=>{soundOn=!soundOn;syncSound();send(soundOn?"unMute":"mute");if(soundOn)send("setVolume",[100]);});}document.querySelectorAll("[data-video-step]").forEach((control)=>control.addEventListener("click",()=>setVideo(currentVideo+Number(control.dataset.videoStep||1))));document.querySelectorAll("[data-carousel]").forEach((carousel)=>{const slides=[...carousel.querySelectorAll(".about-carousel-track img")];const label=carousel.querySelector("[data-carousel-label]");let current=0;let timer;const show=(idx)=>{if(!slides.length)return;current=(idx+slides.length)%slides.length;slides.forEach((slide,i)=>slide.classList.toggle("active",i===current));if(label)label.textContent=String(current+1).padStart(2,"0")+" / "+String(slides.length).padStart(2,"0");};const start=()=>{clearInterval(timer);timer=setInterval(()=>show(current+1),7000);};carousel.querySelectorAll("[data-carousel-step]").forEach((control)=>control.addEventListener("click",()=>{show(current+Number(control.dataset.carouselStep||1));start();}));show(0);start();});})();`;
function redirect(to) {
  return `<!doctype html><html><head><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=${to}"><meta name="robots" content="noindex"><title>Redirecting</title></head><body class="compat">Redirecting to <a href="${to}">${to}</a></body></html>`;
}

for (const target of targets) {
  fs.mkdirSync(path.join(target, "assets"), { recursive: true });
  fs.writeFileSync(path.join(target, "assets", "site.css"), css);
  fs.writeFileSync(path.join(target, "assets", "site.js"), staticSiteJs);
  fs.writeFileSync(path.join(target, "robots.txt"), "User-agent: *\nAllow: /\nSitemap: https://shlcreative.com/sitemap.xml\n");
  const sitemapUrls = ["id", "en"].flatMap((lang) => pageDefs.map((p) => `  <url><loc>https://shlcreative.com${urlFor(p.id, lang)}</loc><changefreq>weekly</changefreq><priority>${p.id === "home" ? "1.0" : "0.8"}</priority></url>`));
  fs.writeFileSync(path.join(target, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls.join("\n")}\n</urlset>\n`);
  for (const lang of ["id", "en"]) {
    for (const page of pageDefs) {
      const html = layout(page, bodies[page.id](lang), lang);
      const outFile = path.join(target, fileFor(page.id, lang));
      fs.mkdirSync(path.dirname(outFile), { recursive: true });
      fs.writeFileSync(outFile, html);
      if (lang === "id" && page.id !== "home") {
        const dir = path.join(target, page.id);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, "index.html"), html);
      }
    }
  }
  const aliases = {
    "Home.dc.html": "/",
    "About.dc.html": "/about/",
    "Services.dc.html": "/services/",
    "Portfolio.dc.html": "/portfolio/",
    "Contact.dc.html": "/contact/",
  };
  for (const [name, to] of Object.entries(aliases)) fs.writeFileSync(path.join(target, name), redirect(to));
}

console.log("SHL static pages generated.");
