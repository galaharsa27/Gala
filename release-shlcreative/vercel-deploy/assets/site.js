(() => {
  const header = document.getElementById("site-header");
  const btn = document.querySelector(".menu-button");
  const onScroll = () => header && header.classList.toggle("scrolled", window.scrollY > 30);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  if (btn && header) {
    btn.addEventListener("click", () => {
      const open = header.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
    document.querySelectorAll(".site-nav a").forEach((a) =>
      a.addEventListener("click", () => {
        header.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      })
    );
  }

  const sound = document.getElementById("sound-toggle");
  const video = document.getElementById("hero-video");
  const label = document.getElementById("video-label");
  const swipeArea = document.querySelector("[data-video-swipe]");
  let soundOn = true;
  let currentVideo = 0;
  let videos = [];
  let touchStartX = null;

  if (video) {
    try {
      videos = JSON.parse(video.dataset.videos || "[]");
    } catch (e) {
      videos = [];
    }
  }

  const videoSrc = (id) =>
    "https://www.youtube.com/embed/" +
    id +
    "?autoplay=1&mute=" +
    (soundOn ? 0 : 1) +
    "&loop=1&playlist=" +
    id +
    "&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&enablejsapi=1";

  const send = (func, args = []) => {
    if (!video) return;
    try {
      video.contentWindow.postMessage(JSON.stringify({ event: "command", func, args }), "*");
    } catch (e) {}
  };

  const syncSound = () => {
    if (!sound) return;
    sound.classList.toggle("on", soundOn);
    sound.setAttribute("aria-pressed", String(soundOn));
    sound.querySelector("span").textContent = soundOn ? sound.dataset.on || "Sound On" : sound.dataset.off || "Sound Off";
  };

  const setVideo = (idx) => {
    if (!video || !videos.length) return;
    currentVideo = (idx + videos.length) % videos.length;
    const id = videos[currentVideo];
    video.src = videoSrc(id);
    if (label) label.textContent = "Video " + String(currentVideo + 1).padStart(2, "0");
    setTimeout(() => {
      send(soundOn ? "unMute" : "mute");
      if (soundOn) send("setVolume", [100]);
    }, 650);
  };

  const stepVideo = (step) => setVideo(currentVideo + step);

  if (sound && video) {
    syncSound();
    sound.addEventListener("click", () => {
      soundOn = !soundOn;
      syncSound();
      send(soundOn ? "unMute" : "mute");
      if (soundOn) send("setVolume", [100]);
    });
    setTimeout(() => {
      send("unMute");
      send("setVolume", [100]);
    }, 900);
  }

  document.querySelectorAll("[data-video-step]").forEach((control) =>
    control.addEventListener("click", () => stepVideo(Number(control.dataset.videoStep || 1)))
  );

  if (swipeArea && video) {
    swipeArea.addEventListener(
      "touchstart",
      (event) => {
        touchStartX = event.changedTouches[0].clientX;
      },
      { passive: true }
    );

    swipeArea.addEventListener(
      "touchend",
      (event) => {
        if (touchStartX === null) return;
        const deltaX = event.changedTouches[0].clientX - touchStartX;
        touchStartX = null;
        if (Math.abs(deltaX) < 48) return;
        stepVideo(deltaX < 0 ? 1 : -1);
      },
      { passive: true }
    );
  }

  window.addEventListener("keydown", (event) => {
    if (!video || !videos.length) return;
    if (event.key === "ArrowLeft") stepVideo(-1);
    if (event.key === "ArrowRight") stepVideo(1);
  });

  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const slides = [...carousel.querySelectorAll(".about-carousel-track img")];
    const carouselLabel = carousel.querySelector("[data-carousel-label]");
    let current = 0;
    let timer;

    const show = (idx) => {
      if (!slides.length) return;
      current = (idx + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
      if (carouselLabel) carouselLabel.textContent = String(current + 1).padStart(2, "0") + " / " + String(slides.length).padStart(2, "0");
    };

    const start = () => {
      clearInterval(timer);
      timer = setInterval(() => show(current + 1), 7000);
    };

    carousel.querySelectorAll("[data-carousel-step]").forEach((control) =>
      control.addEventListener("click", () => {
        show(current + Number(control.dataset.carouselStep || 1));
        start();
      })
    );

    show(0);
    start();
  });
})();