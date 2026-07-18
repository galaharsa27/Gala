import { canonicalBaseUrl } from '@/data/profile';

const images = [
  { src: '/assets/g/studio.jpg', title: 'Galang Kharisma Rizki portrait', caption: 'Portrait of Galang Kharisma Rizki, S.H.' },
  { src: '/assets/g/group.jpg', title: 'Galang Kharisma Rizki community leadership', caption: 'Community leadership context in Galang Kharisma Rizki portfolio.' },
  { src: '/assets/g/hero-helmet.jpg', title: 'Galang Kharisma Rizki riding archive', caption: 'Personal riding archive of Galang Kharisma Rizki.' },
  { src: '/assets/g/fatboy.jpg', title: 'Galang Kharisma Rizki riding culture', caption: 'Riding culture and community context.' },
  { src: '/assets/g/tni.jpg', title: 'Galang Kharisma Rizki TNI AD field context', caption: 'Institutional and field context in Galang Kharisma Rizki portfolio.' },
  { src: '/assets/g/speaking.jpg', title: 'Galang Kharisma Rizki event leadership', caption: 'Event leadership and public-facing work.' },
  { src: '/assets/g/defence-field.jpg', title: 'Galang Kharisma Rizki defence field work', caption: 'Defence technology and field work context.' },
  { src: '/assets/g/nexin.jpg', title: 'Galang Kharisma Rizki Nexin work context', caption: 'Work context from PT. Nexin Maya Vision.' },
  { src: '/assets/g/radar.jpg', title: 'Galang Kharisma Rizki radar defence technology', caption: 'Radar and defence technology context.' },
  { src: '/assets/g/secuan.jpg', title: 'Galang Kharisma Rizki Kawan Secuan team', caption: 'Kawan Secuan team and company-building context.' },
  { src: '/assets/g/night-event.jpg', title: 'Galang Kharisma Rizki event coordination', caption: 'Night event and coordination context.' },
  { src: '/assets/g/patch.jpg', title: 'Galang Kharisma Rizki community identity', caption: 'Community identity visual evidence.' },
  { src: '/assets/g/forest.jpg', title: 'Galang Kharisma Rizki field moment', caption: 'Field and personal archive context.' },
  { src: '/assets/g/littlebike.jpg', title: 'Galang Kharisma Rizki personal riding archive', caption: 'Personal riding archive and visual evidence.' },
  { src: '/assets/g/batik-tni.jpg', title: 'Galang Kharisma Rizki institutional client context', caption: 'Institutional client context and visual evidence.' },
  { src: '/assets/g/produksi.jpg', title: 'Galang Kharisma Rizki production direction', caption: 'Creative production direction context.' },
];

function escapeXml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function GET() {
  const imageEntries = images.map((image) => `
    <image:image>
      <image:loc>${canonicalBaseUrl}${image.src}</image:loc>
      <image:title>${escapeXml(image.title)}</image:title>
      <image:caption>${escapeXml(image.caption)}</image:caption>
    </image:image>`).join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${canonicalBaseUrl}</loc>${imageEntries}
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
