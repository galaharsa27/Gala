import Script from 'next/script';

const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

export function AnalyticsScript() {
  const config = {
    siteId: 'galaharsa',
    domain: 'galaharsa.com',
    measurementId,
    analyticsConsent: 'granted',
    ventureDomains: [
      'shlcreative.com',
      'magoj.com',
      'molistra.com',
      'rob1performance.com',
      'arinoveriana.com',
    ],
  };

  return (
    <>
      <Script
        id="gala-analytics-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: `window.__GALA_ANALYTICS_CONFIG__=${JSON.stringify(config)};` }}
      />
      <Script id="gala-analytics" src="/analytics/browser-ga4.js" strategy="afterInteractive" />
    </>
  );
}
