import { ImageResponse } from 'next/og';
import { ogPortraitBase64, ogFontBoldBase64, ogFontRegularBase64 } from './_og-assets/data';

export const runtime = 'edge';
export const alt = 'Galaharsa — Strategic Partner for Venture Building and Transformation';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

function base64ToArrayBuffer(base64: string): ArrayBuffer {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes.buffer;
}

export default async function OGImage() {
  const imageSrc = `data:image/jpeg;base64,${ogPortraitBase64}`;
  const bold = base64ToArrayBuffer(ogFontBoldBase64);
  const regular = base64ToArrayBuffer(ogFontRegularBase64);

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#0c0c0e',
          position: 'relative',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '72px',
            width: '640px',
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '48px',
              height: '4px',
              background: '#d32330',
              marginBottom: '32px',
            }}
          />
          <div
            style={{
              display: 'flex',
              fontSize: 68,
              fontWeight: 700,
              color: '#f2f1ed',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '24px',
            }}
          >
            Galang Kharisma Rizki
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              color: 'rgba(242,241,237,0.65)',
              fontWeight: 400,
              letterSpacing: '0.02em',
            }}
          >
            Strategy Planner & Conceptor
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt=""
          width={560}
          height={630}
          style={{ objectFit: 'cover', position: 'absolute', right: 0, top: 0, height: '630px', width: '560px' }}
        />
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            width: '560px',
            height: '630px',
            background: 'linear-gradient(90deg, #0c0c0e 0%, rgba(12,12,14,0) 22%)',
            display: 'flex',
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: 'Manrope', data: regular, weight: 400, style: 'normal' },
        { name: 'Manrope', data: bold, weight: 700, style: 'normal' },
      ],
    }
  );
}
