'use client';

import { useState } from 'react';
import Image from 'next/image';

const galleryTiles = [
  { id: 'group',     cls: 'big w8 h5', tag: 'Komunitas · Touring',      src: '/assets/g/group.jpg' },
  { id: 'studio',    cls: 'w4 h8',     tag: 'Night Ride',               src: '/assets/g/hero-helmet.jpg' },
  { id: 'fatboy',    cls: 'w4 h3',     tag: 'Riding',                   src: '/assets/g/fatboy.jpg' },
  { id: 'tni',       cls: 'w4 h3',     tag: 'Lapangan TNI AD',          src: '/assets/g/tni.jpg' },
  { id: 'speaking',  cls: 'big w8 h4', tag: 'Event · Leadership',       src: '/assets/g/speaking.jpg' },
  { id: 'defence',   cls: 'w4 h5',     tag: 'Field Ops · Defence',      src: '/assets/g/defence-field.jpg' },
  { id: 'nexin',     cls: 'w4 h3',     tag: 'Work · Nexin',             src: '/assets/g/nexin.jpg' },
  { id: 'radar',     cls: 'w4 h3',     tag: 'Radar · Defence',          src: '/assets/g/radar.jpg' },
  { id: 'secuan',    cls: 'w4 h4',     tag: 'Team · Kawan Secuan',      src: '/assets/g/secuan.jpg' },
  { id: 'night',     cls: 'big w8 h4', tag: 'Koordinasi Event',         src: '/assets/g/night-event.jpg' },
  { id: 'patch',     cls: 'w4 h3',     tag: 'The Creator',              src: '/assets/g/patch.jpg' },
  { id: 'forest',    cls: 'w4 h3',     tag: 'Candid',                   src: '/assets/g/forest.jpg' },
  { id: 'littlebike',cls: 'w4 h3',     tag: 'Hobby · Riding',           src: '/assets/g/littlebike.jpg' },
  { id: 'produksi',  cls: 'big w8 h4', tag: 'Produksi · Field Brief',   src: '/assets/g/produksi.jpg' },
  { id: 'batik',     cls: 'w4 h4',     tag: 'Klien · TNI AD',           src: '/assets/g/batik-tni.jpg' },
];

const sections = [
  { id: 'profil',     no: '01', title: 'Profil' },
  { id: 'karir',      no: '02', title: 'Perjalanan Karir' },
  { id: 'perusahaan', no: '03', title: 'Perusahaan' },
  { id: 'build',      no: '04', title: 'What I Build' },
  { id: 'galeri',     no: '05', title: 'Galeri' },
  { id: 'instagram',  no: '06', title: 'Instagram' },
  { id: 'kontak',     no: '07', title: 'Kontak' },
];

export default function HomePage() {
  const [open, setOpen] = useState<string | null>(null);
  const toggle = (id: string) => setOpen((prev) => (prev === id ? null : id));

  return (
    <div className="wrap">

      {/* ===== HERO ===== */}
      <section className="hero">
        <div>
          <div className="kicker">
            Portfolio <span className="red">·</span> Bandung, ID <span className="red">·</span> 2026
          </div>
          <h1>
            Galang
            <span className="r2">Kharisma</span>
            <span className="r3">Rizki<span className="sh">S.H.</span></span>
          </h1>
          <p className="intro">
            <strong>Strategy Planner &amp; Conceptor.</strong> Sepuluh tahun membaca pola, merancang arah,
            dan menggerakkan bisnis dari nol — lintas industri <em>kreatif</em>, <em>politik</em>,
            hingga <em>teknologi pertahanan</em>.
          </p>
          <div className="stats">
            <div>
              <div className="n">10<sup>+</sup></div>
              <div className="l">Tahun</div>
            </div>
            <div>
              <div className="n">4</div>
              <div className="l">Perusahaan</div>
            </div>
            <div>
              <div className="n">3</div>
              <div className="l">Website Live</div>
            </div>
          </div>
        </div>

        <div className="hero-img">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/g/studio.jpg" alt="Galang Kharisma Rizki, S.H." />
          <div className="cap">
            <span>Portrait · Studio</span>
            <span className="red">GKR / 26</span>
          </div>
        </div>

        <div className="scroll-hint">Klik bagian di bawah</div>
      </section>

      {/* ===== ACCORDION MENU ===== */}
      <nav className="menu">

        {sections.map((s) => (
          <div className="acc-item" key={s.id}>
            <button
              className={`acc-btn${open === s.id ? ' open' : ''}`}
              onClick={() => toggle(s.id)}
              aria-expanded={open === s.id}
            >
              <span className="no">{s.no}</span>
              <h2>{s.title}</h2>
              <span className="ic">+</span>
            </button>

            {/* ===== 01 PROFIL ===== */}
            {open === 'profil' && s.id === 'profil' && (
              <div className="panel">
                <p className="intro">
                  Keahlian utama saya di <em>business development</em>, <em>branding</em>, dan <em>manajemen</em>.
                  Yang membedakan bukan seberapa banyak yang bisa dikerjakan, tapi{' '}
                  <strong>kemampuan membaca pola, merancang arahnya, lalu mengeksekusinya</strong> sebelum yang lain selesai berpikir.
                </p>
                <div className="sk"><h3>Business Dev &amp; Partnership</h3><span className="p">96</span></div>
                <div className="sk"><h3>Manajemen Proyek</h3><span className="p">93</span></div>
                <div className="sk"><h3>Creative Direction</h3><span className="p">90</span></div>
                <div className="sk"><h3>Branding &amp; Narasi</h3><span className="p">90</span></div>
                <div className="sk"><h3>Analisis &amp; Negosiasi Hukum</h3><span className="p">88</span></div>
                <div className="sk"><h3>Integrasi AI &amp; Sistem</h3><span className="p">85</span></div>
              </div>
            )}

            {/* ===== 02 KARIR ===== */}
            {open === 'karir' && s.id === 'karir' && (
              <div className="panel">
                <div className="row">
                  <span className="k">2015 — 2019</span>
                  <div className="v">
                    <h3>Kreatif &amp; Brand</h3>
                    <p>Creative Dir — <strong>I AM Management</strong> · Art Dir — <strong>Blacktiger EO</strong> · Branding Consultant — <strong>Roomtoday DC</strong> · Founder — <strong>SMMR Studio</strong> &amp; <strong>Mankey Brothers</strong>.</p>
                  </div>
                </div>
                <div className="row">
                  <span className="k">2018 — 2020</span>
                  <div className="v">
                    <h3>Strategi &amp; Politik</h3>
                    <p>Creative IT — <strong>Kampanye Nasional Bandung Barat</strong> · PM — <strong>Tim Pemenangan Walikota Bukittinggi</strong> · Konsultan — Toby Sagara · BD — Grezeski &amp; William Schone.</p>
                  </div>
                </div>
                <div className="row">
                  <span className="k">2019 — 2025</span>
                  <div className="v">
                    <h3>Defence Tech — BD &amp; Product</h3>
                    <p><strong>Wakil Direktur, BD &amp; Product Lead</strong> di PT. Nexin Maya Vision. BD, branding produk, manajemen klien, dan pengembangan pasar sektor pertahanan — TNI AD, Kemenhan RI, Satpol PP Jabar.</p>
                  </div>
                </div>
                <div className="row">
                  <span className="k">2022 — Skrg</span>
                  <div className="v">
                    <h3>Membangun Ekosistem Sendiri</h3>
                    <p>Founder &amp; Dir — <strong>RFA</strong> · Komisaris &amp; Creative Dir — <strong>SHL</strong> · Presiden Komisaris — <strong>Kawan Secuan</strong> · Direktur — <strong>PT Suplai Energi Nusantara</strong>.</p>
                  </div>
                </div>
              </div>
            )}

            {/* ===== 03 PERUSAHAAN ===== */}
            {open === 'perusahaan' && s.id === 'perusahaan' && (
              <div className="panel">
                <div className="row">
                  <span className="k">RFA</span>
                  <div className="v">
                    <h3>PT. Revolusi Fundamental Asia</h3>
                    <p>Founder &amp; Direktur — Strategic consulting: transformasi organisasi lewat strategi, sistem, dan teknologi. Akses rantai pengadaan internasional defence, rugged tech, dan 100+ brand aviasi global.</p>
                    <div className="tags"><span>Konsultasi</span><span>AI Integration</span><span>ERP/CRM</span><span>Procurement</span></div>
                  </div>
                </div>
                <div className="row">
                  <span className="k">SHL</span>
                  <div className="v">
                    <h3>PT. Samasta Hitakara Lekha — SHL Creative Production</h3>
                    <p>Komisaris &amp; Creative Director — Production house: identitas brand, video komersial, company profile, webseries, event concept, strategi kampanye.</p>
                    <div className="tags"><span>Creative Direction</span><span>Video</span><span>Brand</span><span>Event</span></div>
                  </div>
                </div>
                <div className="row">
                  <span className="k">Kawan Secuan</span>
                  <div className="v">
                    <h3>PT. Kawan Secuan Indonesia</h3>
                    <p>Presiden Komisaris &amp; Chief Conceptor — OSTKA: targeting berbasis data lokasi &amp; preferensi. IMA &amp; Red Eye: analitik perilaku komunitas &amp; market intelligence.</p>
                    <div className="tags"><span>Lead Targeting</span><span>Market Intel</span><span>Data</span></div>
                  </div>
                </div>
                <div className="row">
                  <span className="k">SEN</span>
                  <div className="v">
                    <h3>PT. Suplai Energi Nusantara</h3>
                    <p>Direktur — Rantai pasok energi dan infrastruktur, dari pemetaan kebutuhan klien institusi sampai distribusi terintegrasi.</p>
                    <div className="tags"><span>Energy</span><span>Logistics</span><span>Distribution</span></div>
                  </div>
                </div>
              </div>
            )}

            {/* ===== 04 WHAT I BUILD ===== */}
            {open === 'build' && s.id === 'build' && (
              <div className="panel">
                <p className="intro">Produk digital yang <strong>live dan bisa dibuka sekarang</strong> — klik untuk membuka website-nya.</p>
                <div className="build-grid">
                  <a className="site" href="https://shlcreative.com" target="_blank" rel="noopener noreferrer">
                    <span className="dom">shlcreative<span className="tld">.com</span></span>
                    <span className="info">
                      <h3>Creative Production House</h3>
                      <p>PT. Samasta Hitakara Lekha — SHL Creative Production. Brand identity, video komersial, webseries, event concept.</p>
                    </span>
                    <span className="arrow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></span>
                  </a>
                  <a className="site" href="https://molistra.com" target="_blank" rel="noopener noreferrer">
                    <span className="dom">molistra<span className="tld">.com</span></span>
                    <span className="info">
                      <h3>Digital Platform</h3>
                      <p>Platform digital yang saya bangun dan kembangkan — buka website-nya untuk lihat langsung.</p>
                    </span>
                    <span className="arrow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></span>
                  </a>
                  <a className="site" href="https://magoj.com" target="_blank" rel="noopener noreferrer">
                    <span className="dom">magoj<span className="tld">.com</span></span>
                    <span className="info">
                      <h3>Digital Platform</h3>
                      <p>Platform digital yang saya bangun dan kembangkan — buka website-nya untuk lihat langsung.</p>
                    </span>
                    <span className="arrow"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg></span>
                  </a>
                </div>
              </div>
            )}

            {/* ===== 05 GALERI ===== */}
            {open === 'galeri' && s.id === 'galeri' && (
              <div className="panel">
                <p className="intro">Dokumentasi kegiatan — dari <strong>lapangan defence</strong>, <strong>produksi kreatif</strong>, sampai <strong>komunitas &amp; riding</strong>.</p>
                <div className="gal-note">Galeri foto aktif</div>
                <div className="gal">
                  {galleryTiles.map((tile) => (
                    <div key={tile.id} className={`tile ${tile.cls}`}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={tile.src} alt={tile.tag} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                      <span className="tag">{tile.tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* ===== 06 INSTAGRAM ===== */}
            {open === 'instagram' && s.id === 'instagram' && (
              <div className="panel">
                <div className="soc-grid">
                  <a className="soc" href="https://instagram.com/galaharsa.sh1" target="_blank" rel="noopener noreferrer">
                    <div className="h"><div className="av">G</div><div><div className="hn">@galaharsa.sh1</div><div className="ht">Personal</div></div></div>
                    <p>Catatan harian, momentum, dan refleksi pribadi.</p>
                    <span className="go">Buka ↗</span>
                  </a>
                  <a className="soc" href="https://instagram.com/shl.creative" target="_blank" rel="noopener noreferrer">
                    <div className="h"><div className="av">S</div><div><div className="hn">@shl.creative</div><div className="ht">Production House</div></div></div>
                    <p>Commercial, brand identity, webseries, event concept.</p>
                    <span className="go">Buka ↗</span>
                  </a>
                </div>
              </div>
            )}

            {/* ===== 07 KONTAK ===== */}
            {open === 'kontak' && s.id === 'kontak' && (
              <div className="panel">
                <div className="c-grid">
                  <div>
                    <h5>Email</h5>
                    <a href="mailto:galaharsa.27@gmail.com">galaharsa.27@gmail.com</a>
                  </div>
                  <div>
                    <h5>Telepon / WA</h5>
                    <a href="https://wa.me/6281214131427" target="_blank" rel="noopener noreferrer">+62 812 1413 1427</a>
                  </div>
                  <div>
                    <h5>Lokasi</h5>
                    <p>Bandung, Indonesia</p>
                  </div>
                </div>
              </div>
            )}

          </div>
        ))}
      </nav>

      {/* ===== FOOTER ===== */}
      <footer>
        <span>© 2026 <span className="red">Galang Kharisma Rizki, S.H.</span></span>
        <span>Bandung · ID</span>
      </footer>

    </div>
  );
}

