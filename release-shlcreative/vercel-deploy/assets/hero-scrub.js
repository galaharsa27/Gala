(() => {
  const HERO_SCRUB_CONFIG = {
    mode: "sequence",
    frameBase: "/assets/sequence/frame-",
    frameExt: "webp",
    frameFallbackExt: "svg",
    frameDigits: 3,
    frameCount: 80,
    videoSrc: "/assets/hero-scrub.mp4",
  };

  const wrap = document.querySelector("[data-hero-scrub]");
  const canvas = document.getElementById("hero-scrub-canvas");
  if (!wrap || !canvas) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx = canvas.getContext("2d");
  let dpr = Math.min(window.devicePixelRatio || 1, 2);
  let frames = [];
  let firstFrameReady = false;
  let videoEl = null;
  let mode = HERO_SCRUB_CONFIG.mode;
  let progress = 0;
  let raf = null;

  const pad = (n) => String(n).padStart(HERO_SCRUB_CONFIG.frameDigits, "0");

  const frameUrl = (i, ext) =>
    HERO_SCRUB_CONFIG.frameBase + pad(i) + "." + ext;

  const resize = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(wrap.clientWidth * dpr);
    canvas.height = Math.round(wrap.clientHeight * dpr);
  };

  const drawCover = (source, sw, sh) => {
    if (!sw || !sh) return;
    const cw = canvas.width;
    const ch = canvas.height;
    const scale = Math.max(cw / sw, ch / sh);
    const dw = sw * scale;
    const dh = sh * scale;
    const dx = (cw - dw) / 2;
    const dy = (ch - dh) / 2;
    ctx.drawImage(source, dx, dy, dw, dh);
  };

  const drawFrame = (idx) => {
    const img = frames[idx];
    if (!img || !img.complete || !img.naturalWidth) return;
    drawCover(img, img.naturalWidth, img.naturalHeight);
  };

  const drawVideoFrame = () => {
    if (!videoEl || !videoEl.videoWidth) return;
    drawCover(videoEl, videoEl.videoWidth, videoEl.videoHeight);
  };

  const setupSequence = () => {
    const total = HERO_SCRUB_CONFIG.frameCount;

    const loadAll = (ext) => {
      for (let i = 1; i <= total; i++) {
        const img = new Image();
        img.decoding = "async";
        img.src = frameUrl(i, ext);
        if (i === 1) {
          img.onload = () => {
            firstFrameReady = true;
            resize();
            drawFrame(1);
          };
        }
        frames[i] = img;
      }
    };

    const probe = new Image();
    probe.onload = () => loadAll(HERO_SCRUB_CONFIG.frameExt);
    probe.onerror = () => loadAll(HERO_SCRUB_CONFIG.frameFallbackExt);
    probe.src = frameUrl(1, HERO_SCRUB_CONFIG.frameExt);
  };

  const setupVideo = () => {
    videoEl = document.createElement("video");
    videoEl.src = HERO_SCRUB_CONFIG.videoSrc;
    videoEl.muted = true;
    videoEl.playsInline = true;
    videoEl.preload = "auto";
    videoEl.addEventListener("loadeddata", () => {
      firstFrameReady = true;
      resize();
      drawVideoFrame();
    });
    videoEl.addEventListener("error", () => {
      mode = "sequence";
      setupSequence();
    });
  };

  const render = () => {
    raf = null;
    if (!firstFrameReady) return;
    if (mode === "sequence") {
      const idx = Math.min(
        HERO_SCRUB_CONFIG.frameCount,
        Math.max(1, Math.round(progress * (HERO_SCRUB_CONFIG.frameCount - 1)) + 1)
      );
      drawFrame(idx);
    } else if (mode === "video" && videoEl && videoEl.duration) {
      videoEl.currentTime = progress * videoEl.duration;
      drawVideoFrame();
    }
  };

  const onScroll = () => {
    const rect = wrap.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const total = rect.height + vh;
    const traveled = vh - rect.top;
    progress = Math.min(1, Math.max(0, traveled / total));
    if (!raf) raf = requestAnimationFrame(render);
  };

  window.addEventListener("resize", () => {
    resize();
    if (!raf) raf = requestAnimationFrame(render);
  });

  if (mode === "video") setupVideo();
  else setupSequence();

  if (!reduceMotion) {
    window.addEventListener("scroll", onScroll, { passive: true });
  }
  onScroll();

  window.HeroScrub = {
    getProgress: () => progress,
    isReady: () => firstFrameReady,
  };
})();
