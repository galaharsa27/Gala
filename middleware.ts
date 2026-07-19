import { NextResponse, type NextRequest } from 'next/server';

const securityHeaders = {
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()',
  'Cross-Origin-Opener-Policy': 'same-origin-allow-popups',
  'Content-Security-Policy':
    "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'self'; img-src 'self' data: blob: https:; font-src 'self' data: https://fonts.gstatic.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://www.youtube.com https://www.youtube-nocookie.com; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net; frame-src 'self' https://www.youtube.com https://www.youtube-nocookie.com; media-src 'self' https:; form-action 'self' https://wa.me https://api.whatsapp.com; upgrade-insecure-requests",
};

const sensitivePathPattern =
  /^\/(?:_source|source|src|backup|backups|archive|archives|old|tmp|temp|test|tests|dev|staging|node_modules|\.git|\.vercel)(?:\/|$)/i;
const sensitiveFilePattern =
  /^\/(?:\.env(?:\..*)?|package(?:-lock)?\.json|pnpm-lock\.yaml|yarn\.lock|README\.md|vercel\.json|sites\.config\.json|GALA-PRODUCTION-STATUS\.md|OPTIMIZATION\.md|.*\.(?:zip|tar|gz|sql|log|bak|map))$/i;

function withSecurityHeaders(response: NextResponse) {
  for (const [key, value] of Object.entries(securityHeaders)) {
    response.headers.set(key, value);
  }

  return response;
}

export function middleware(request: NextRequest) {
  const host = request.headers.get('host');
  const { pathname } = request.nextUrl;

  if (sensitivePathPattern.test(pathname) || sensitiveFilePattern.test(pathname)) {
    return withSecurityHeaders(new NextResponse('Not Found', { status: 404 }));
  }

  if (host === 'www.galaharsa.com') {
    const url = request.nextUrl.clone();
    url.protocol = 'https';
    url.hostname = 'galaharsa.com';

    return withSecurityHeaders(NextResponse.redirect(url, 308));
  }

  return withSecurityHeaders(NextResponse.next());
}

export const config = {
  matcher: '/:path*',
};
