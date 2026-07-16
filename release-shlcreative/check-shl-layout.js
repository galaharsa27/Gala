const http = require("http");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const root = path.join(__dirname, "vercel-deploy");
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".jpg": "image/jpeg",
  ".png": "image/png",
};

function fileFor(urlPath) {
  const clean = decodeURIComponent(urlPath.split("?")[0]);
  let p = clean === "/" ? "/index.html" : clean;
  const abs = path.normalize(path.join(root, p));
  if (!abs.startsWith(root)) return null;
  if (fs.existsSync(abs) && fs.statSync(abs).isDirectory()) return path.join(abs, "index.html");
  if (fs.existsSync(abs)) return abs;
  if (!path.extname(abs) && fs.existsSync(abs + ".html")) return abs + ".html";
  return null;
}

const server = http.createServer((req, res) => {
  const f = fileFor(req.url);
  if (!f || !fs.existsSync(f)) {
    res.writeHead(404);
    res.end("not found");
    return;
  }
  res.writeHead(200, { "content-type": mime[path.extname(f)] || "application/octet-stream" });
  fs.createReadStream(f).pipe(res);
});

(async () => {
  await new Promise((resolve) => server.listen(4177, resolve));
  const browser = await chromium.launch({
    headless: true,
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  });
  const pages = ["/", "/about/", "/services/", "/portfolio/", "/contact/", "/en/", "/en/about/", "/en/services/", "/en/portfolio/", "/en/contact/"];
  for (const viewport of [{ width: 1440, height: 1000 }, { width: 390, height: 844 }]) {
    const page = await browser.newPage({ viewport });
    for (const route of pages) {
      await page.goto("http://127.0.0.1:4177" + route, { waitUntil: "networkidle" });
      const result = await page.evaluate(() => {
        const body = document.body;
        const html = document.documentElement;
        const imgs = [...document.images].map((img) => ({ src: img.currentSrc || img.src, ok: img.complete && img.naturalWidth > 0 }));
        return {
          title: document.title,
          overflow: Math.max(body.scrollWidth, html.scrollWidth) - window.innerWidth,
          imgs,
          figures: document.querySelectorAll(".portfolio-gallery figure").length,
          externalText: body.innerText.includes("external"),
          badText: /[âÂÃ�]/.test(body.innerText),
        };
      });
      if (result.overflow > 2) throw new Error(`${route} overflow ${result.overflow}px at ${viewport.width}`);
      if (result.imgs.some((img) => !img.ok)) throw new Error(`${route} broken image at ${viewport.width}`);
      if ((route === "/portfolio/" || route === "/en/portfolio/") && result.figures !== 10) throw new Error(`portfolio has ${result.figures} figures`);
      if (result.externalText || result.badText) throw new Error(`${route} has bad text`);
      if (viewport.width < 600) {
        await page.click(".menu-button");
        const open = await page.locator(".site-header.open .site-nav").count();
        if (!open) throw new Error(`${route} mobile menu did not open`);
      }
      console.log(`${viewport.width} ${route} ok`);
    }
    await page.close();
  }
  await browser.close();
  server.close();
})().catch((err) => {
  console.error(err);
  server.close();
  process.exit(1);
});
