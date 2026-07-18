(() => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGsap = typeof window.gsap !== "undefined";
  const hasScrollTrigger = hasGsap && typeof window.ScrollTrigger !== "undefined";
  const hasLenis = typeof window.Lenis !== "undefined";
  const isCoarse = window.matchMedia("(pointer: coarse)").matches;
  if (hasGsap && hasScrollTrigger) window.gsap.registerPlugin(window.ScrollTrigger);

  const mobileQuery = window.matchMedia("(max-width: 980px)");

  /* ---------- smooth scroll (desktop only) ---------- */
  let lenis = null;
  if (hasLenis && !reduceMotion && !mobileQuery.matches) {
    lenis = new window.Lenis({ duration: 1.05, smoothWheel: true, syncTouch: false });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    if (hasScrollTrigger) {
      lenis.on("scroll", window.ScrollTrigger.update);
      window.gsap.ticker.add((time) => lenis.raf(time * 1000));
      window.gsap.ticker.lagSmoothing(0);
    }
  }

  /* ---------- opening scene ---------- */
  (() => {
    const scene = document.getElementById("opening-scene");
    const barTop = document.querySelector(".letterbox-bar.top");
    const barBottom = document.querySelector(".letterbox-bar.bottom");
    if (!scene) return;

    const seen = sessionStorage.getItem("shl_opened");
    if (seen || reduceMotion) {
      scene.remove();
      if (barTop) barTop.remove();
      if (barBottom) barBottom.remove();
      return;
    }

    sessionStorage.setItem("shl_opened", "1");
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      scene.classList.add("gone");
      if (barTop) barTop.classList.add("open");
      if (barBottom) barBottom.classList.add("open");
      setTimeout(() => {
        scene.remove();
        document.body.style.overflow = "";
      }, 900);
    }, 1100);
  })();

  /* ---------- header scroll state ---------- */
  (() => {
    const header = document.querySelector(".cine-header");
    if (!header) return;
    const onScroll = () => header.classList.toggle("scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  })();

  /* ---------- scene menu (nav overlay) ---------- */
  (() => {
    const toggle = document.querySelector(".cine-nav-toggle");
    const menu = document.querySelector(".scene-menu");
    if (!toggle || !menu) return;
    const close = () => {
      menu.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  })();

  /* ---------- scene slate + running timecode ---------- */
  (() => {
    const scenes = [...document.querySelectorAll("[data-scene-slate]")];
    const label = document.querySelector("[data-scene-label]");
    const tc = document.querySelector("[data-timecode]");
    if (!scenes.length && !tc) return;

    const fmt = (n, len) => String(Math.max(0, Math.floor(n))).padStart(len, "0");

    const update = () => {
      const doc = document.documentElement;
      const max = (doc.scrollHeight || 1) - window.innerHeight;
      const p = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      const totalFrames = Math.floor(p * 3599 * 24);
      const h = fmt(totalFrames / (3600 * 24), 2);
      const m = fmt((totalFrames / (60 * 24)) % 60, 2);
      const s = fmt((totalFrames / 24) % 60, 2);
      const f = fmt(totalFrames % 24, 2);
      if (tc) tc.textContent = `${h}:${m}:${s}:${f}`;

      if (label && scenes.length) {
        let current = scenes[0];
        for (const el of scenes) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) current = el;
        }
        label.textContent = current.dataset.sceneSlate || "";
      }
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
  })();

  /* ---------- custom film cursor (desktop) ---------- */
  (() => {
    const cursor = document.getElementById("film-cursor");
    if (!cursor || isCoarse) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let cx = x;
    let cy = y;

    window.addEventListener("mousemove", (e) => {
      x = e.clientX;
      y = e.clientY;
    });

    const loop = () => {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      cursor.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(loop);
    };
    loop();

    document.querySelectorAll("[data-cursor]").forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.classList.add("hot");
        cursor.querySelector("span").textContent = el.dataset.cursor;
        cursor.querySelector("span").style.opacity = 1;
      });
      el.addEventListener("mouseleave", () => {
        cursor.classList.remove("hot");
        cursor.querySelector("span").style.opacity = 0;
      });
    });
  })();

  /* ---------- film grain ---------- */
  (() => {
    const canvas = document.getElementById("grain-canvas");
    if (!canvas || reduceMotion) return;
    const ctx = canvas.getContext("2d");
    const tile = 128;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const noiseTile = document.createElement("canvas");
    noiseTile.width = tile;
    noiseTile.height = tile;
    const nctx = noiseTile.getContext("2d");
    const imageData = nctx.createImageData(tile, tile);

    const paintNoise = () => {
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 255;
      }
      nctx.putImageData(imageData, 0, 0);
      const pattern = ctx.createPattern(noiseTile, "repeat");
      ctx.fillStyle = pattern;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    let last = 0;
    const tick = (t) => {
      if (t - last > 90) {
        paintNoise();
        last = t;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  })();

  /* ---------- magnetic pill buttons ---------- */
  (() => {
    if (isCoarse) return;
    document.querySelectorAll(".pill-btn").forEach((btn) => {
      const radius = 60;
      let toX, toY;
      if (hasGsap) {
        toX = window.gsap.quickTo(btn, "x", { duration: 0.5, ease: "power3.out" });
        toY = window.gsap.quickTo(btn, "y", { duration: 0.5, ease: "power3.out" });
      }
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        if (dist > radius) return;
        const pull = (1 - dist / radius) * 0.35;
        if (toX && toY) {
          toX(dx * pull);
          toY(dy * pull);
        } else {
          btn.style.transform = `translate(${dx * pull}px, ${dy * pull}px)`;
        }
      });
      btn.addEventListener("mouseleave", () => {
        if (toX && toY) {
          toX(0);
          toY(0);
        } else {
          btn.style.transform = "";
        }
      });
    });
  })();

  /* ---------- scroll reveal ---------- */
  (() => {
    const items = [...document.querySelectorAll(".reveal")];
    if (!items.length) return;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -60px 0px" }
    );
    items.forEach((el) => observer.observe(el));
  })();

  /* ---------- developing photo reveal ---------- */
  (() => {
    const tiles = [...document.querySelectorAll(".work-tile.develop")];
    if (!tiles.length) return;
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry, i) => {
          if (!entry.isIntersecting) return;
          setTimeout(() => entry.target.classList.add("developed"), i * 60);
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );
    tiles.forEach((el) => observer.observe(el));
  })();

  /* ---------- drag strip momentum + lean ---------- */
  document.querySelectorAll(".drag-strip").forEach((strip) => {
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;
    let lastX = 0;
    let lastT = 0;
    let velocity = 0;
    let momentumId = null;

    const applyLean = (v) => {
      const deg = Math.max(-4, Math.min(4, v * -0.06));
      [...strip.children].forEach((child) => {
        child.style.transform = `rotate(${deg}deg)`;
      });
    };

    const settle = () => {
      [...strip.children].forEach((child) => {
        child.style.transform = "";
      });
    };

    const stopMomentum = () => {
      if (momentumId) cancelAnimationFrame(momentumId);
      momentumId = null;
    };

    const momentum = () => {
      if (Math.abs(velocity) < 0.5) {
        stopMomentum();
        settle();
        return;
      }
      strip.scrollLeft -= velocity;
      velocity *= 0.94;
      momentumId = requestAnimationFrame(momentum);
    };

    strip.addEventListener("pointerdown", (e) => {
      isDown = true;
      strip.classList.add("dragging");
      startX = e.clientX;
      scrollStart = strip.scrollLeft;
      lastX = e.clientX;
      lastT = performance.now();
      velocity = 0;
      stopMomentum();
      strip.setPointerCapture(e.pointerId);
    });

    strip.addEventListener("pointermove", (e) => {
      if (!isDown) return;
      const dx = e.clientX - startX;
      strip.scrollLeft = scrollStart - dx;
      const now = performance.now();
      const dt = Math.max(1, now - lastT);
      velocity = ((e.clientX - lastX) / dt) * 16;
      lastX = e.clientX;
      lastT = now;
      if (!reduceMotion) applyLean(velocity);
    });

    const end = () => {
      if (!isDown) return;
      isDown = false;
      strip.classList.remove("dragging");
      if (!reduceMotion && Math.abs(velocity) > 1) {
        momentum();
      } else {
        settle();
      }
    };

    strip.addEventListener("pointerup", end);
    strip.addEventListener("pointercancel", end);
  });

  /* ---------- idle breathing in galleries ---------- */
  (() => {
    if (reduceMotion) return;
    document.querySelectorAll("[data-idle-breathe]").forEach((container) => {
      let timer = null;
      const start = () => {
        container.classList.add("breathe");
      };
      const reset = () => {
        container.classList.remove("breathe");
        clearTimeout(timer);
        timer = setTimeout(start, 8000);
      };
      ["pointermove", "pointerdown", "scroll", "wheel"].forEach((evt) =>
        container.addEventListener(evt, reset, { passive: true })
      );
      reset();
    });
  })();

  /* ---------- gyroscope parallax (mobile) ---------- */
  (() => {
    if (!mobileQuery.matches || reduceMotion) return;
    const targets = [...document.querySelectorAll("[data-parallax-tilt]")];
    if (!targets.length) return;

    const apply = (beta, gamma) => {
      const tx = Math.max(-6, Math.min(6, gamma / 6));
      const ty = Math.max(-6, Math.min(6, (beta - 40) / 8));
      targets.forEach((el) => {
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0)`;
      });
    };

    const bind = () => {
      window.addEventListener("deviceorientation", (e) => {
        if (e.beta === null || e.gamma === null) return;
        apply(e.beta, e.gamma);
      });
    };

    if (typeof DeviceOrientationEvent !== "undefined" && typeof DeviceOrientationEvent.requestPermission === "function") {
      const grant = () => {
        DeviceOrientationEvent.requestPermission().then((state) => {
          if (state === "granted") bind();
        }).catch(() => {});
        window.removeEventListener("touchstart", grant);
      };
      window.addEventListener("touchstart", grant, { once: true });
    } else if (typeof DeviceOrientationEvent !== "undefined") {
      bind();
    }
  })();

  /* ---------- mobile page-to-page snap + dots ---------- */
  (() => {
    const screens = [...document.querySelectorAll(".cine-hero, .snap-screen")];
    const dotsHost = document.querySelector("[data-snap-dots]");
    if (!screens.length) return;

    const applySnap = () => {
      document.documentElement.classList.toggle("snap-mobile", mobileQuery.matches);
    };
    applySnap();
    mobileQuery.addEventListener("change", applySnap);

    if (!dotsHost) return;
    dotsHost.innerHTML = "";
    const dots = screens.map(() => {
      const dot = document.createElement("i");
      dotsHost.appendChild(dot);
      return dot;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const idx = screens.indexOf(entry.target);
          if (idx === -1) return;
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            dots.forEach((d, i) => d.classList.toggle("active", i === idx));
          }
        });
      },
      { threshold: [0.5] }
    );
    screens.forEach((s) => observer.observe(s));
  })();

  /* ---------- bottom sheet ---------- */
  (() => {
    const backdrop = document.querySelector(".sheet-backdrop");
    const sheet = document.querySelector(".sheet");
    if (!backdrop || !sheet) return;
    const titleEl = sheet.querySelector("[data-sheet-title]");
    const bodyEl = sheet.querySelector("[data-sheet-body]");

    const open = (title, body) => {
      if (titleEl) titleEl.textContent = title;
      if (bodyEl) bodyEl.textContent = body;
      backdrop.classList.add("open");
      sheet.classList.add("open");
      document.body.style.overflow = "hidden";
    };
    const close = () => {
      backdrop.classList.remove("open");
      sheet.classList.remove("open");
      document.body.style.overflow = "";
    };

    document.querySelectorAll("[data-sheet-open]").forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        if (!mobileQuery.matches) return;
        e.preventDefault();
        e.stopImmediatePropagation();
        open(trigger.dataset.sheetOpen || "", trigger.dataset.sheetBody || "");
      });
    });

    backdrop.addEventListener("click", close);
    sheet.addEventListener("click", (e) => {
      if (e.target === sheet) close();
    });
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });
  })();

  /* ---------- whatsapp fab ---------- */
  (() => {
    const fab = document.querySelector(".wa-fab");
    if (!fab) return;
    const onScroll = () => fab.classList.toggle("show", window.scrollY > window.innerHeight * 0.85);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  })();

  /* ---------- ambience audio (optional, hides if asset missing) ---------- */
  (() => {
    const toggle = document.querySelector("[data-ambience-toggle]");
    if (!toggle) return;
    const src = "/assets/audio/ambience.mp3";
    const audio = new Audio();
    audio.loop = true;
    audio.volume = 0;
    audio.preload = "none";
    let on = false;
    let ready = false;

    fetch(src, { method: "HEAD" })
      .then((res) => {
        if (!res.ok) throw new Error("missing");
        audio.src = src;
        ready = true;
        toggle.hidden = false;
      })
      .catch(() => {
        toggle.hidden = true;
      });

    toggle.addEventListener("click", () => {
      if (!ready) return;
      on = !on;
      toggle.classList.toggle("on", on);
      if (on) {
        audio.play().catch(() => {});
        if (hasGsap) window.gsap.to(audio, { volume: 0.15, duration: 2 });
        else audio.volume = 0.15;
      } else {
        if (hasGsap) window.gsap.to(audio, { volume: 0, duration: 0.6, onComplete: () => audio.pause() });
        else {
          audio.volume = 0;
          audio.pause();
        }
      }
    });
  })();

  /* ---------- hero video: sound toggle + prev/next switcher ---------- */
  (() => {
    const iframe = document.getElementById("hero-video");
    const soundBtn = document.querySelector("[data-sound-toggle]");
    const videoLabel = document.querySelector("[data-hero-video-label]");
    if (!iframe) return;

    let soundOn = false;
    const videos = (() => {
      try {
        return JSON.parse(iframe.dataset.videos || "[]");
      } catch (e) {
        return [];
      }
    })();
    let currentVideo = 0;

    const videoSrc = (id) =>
      "https://www.youtube.com/embed/" +
      id +
      "?autoplay=1&mute=" +
      (soundOn ? 0 : 1) +
      "&loop=1&playlist=" +
      id +
      "&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1&disablekb=1&enablejsapi=1";

    const send = (func, args = []) => {
      try {
        iframe.contentWindow.postMessage(JSON.stringify({ event: "command", func, args }), "*");
      } catch (e) {}
    };

    const setVideo = (idx, animateSound) => {
      currentVideo = (idx + videos.length) % videos.length;
      iframe.src = videoSrc(videos[currentVideo] || videos[0]);
      if (videoLabel) videoLabel.textContent = "Video " + String(currentVideo + 1).padStart(2, "0");
      if (animateSound) {
        setTimeout(() => {
          send(soundOn ? "unMute" : "mute");
          if (soundOn) send("setVolume", [100]);
        }, 650);
      }
    };

    if (soundBtn) {
      const sync = () => {
        soundBtn.classList.toggle("on", soundOn);
        soundBtn.setAttribute("aria-pressed", String(soundOn));
      };
      sync();
      soundBtn.addEventListener("click", () => {
        soundOn = !soundOn;
        sync();
        send(soundOn ? "unMute" : "mute");
        if (soundOn) send("setVolume", [100]);
      });
    }

    document.querySelectorAll("[data-hero-video-step]").forEach((control) => {
      control.addEventListener("click", () => {
        if (!videos.length) return;
        setVideo(currentVideo + Number(control.dataset.heroVideoStep || 1), true);
      });
    });
  })();

  /* ---------- simple strip carousel (team photos) ---------- */
  document.querySelectorAll("[data-strip-carousel]").forEach((carousel) => {
    const slides = [...carousel.querySelectorAll(".strip-carousel img")];
    const countLabel = carousel.querySelector("[data-strip-count]");
    if (!slides.length) return;
    let current = 0;
    let timer = null;

    const show = (idx) => {
      current = (idx + slides.length) % slides.length;
      slides.forEach((slide, i) => slide.classList.toggle("active", i === current));
      if (countLabel) countLabel.textContent = `${String(current + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")}`;
    };

    const restart = () => {
      clearInterval(timer);
      if (reduceMotion) return;
      timer = setInterval(() => show(current + 1), 7000);
    };

    carousel.querySelectorAll("[data-strip-step]").forEach((control) =>
      control.addEventListener("click", () => {
        show(current + Number(control.dataset.stripStep || 1));
        restart();
      })
    );

    show(0);
    restart();
  });

  /* ---------- pill tab filter (portfolio) ---------- */
  (() => {
    const tabs = [...document.querySelectorAll(".pill-tab")];
    const items = [...document.querySelectorAll("[data-cat]")];
    if (!tabs.length || !items.length) return;

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        const cat = tab.dataset.filter;
        items.forEach((item) => {
          const show = cat === "all" || item.dataset.cat === cat;
          item.style.display = show ? "" : "none";
        });
      });
    });
  })();

  /* ---------- lightbox ---------- */
  (() => {
    const lightbox = document.querySelector(".lightbox");
    if (!lightbox) return;
    const img = lightbox.querySelector("img");
    const cap = lightbox.querySelector(".lightbox-cap");
    const items = [...document.querySelectorAll("[data-lightbox]")];
    let index = 0;

    const show = (i) => {
      index = (i + items.length) % items.length;
      const el = items[index];
      img.src = el.dataset.lightbox;
      img.alt = el.dataset.lightboxAlt || "";
      if (cap) cap.textContent = el.dataset.lightboxCaption || "";
    };

    const open = (i) => {
      show(i);
      lightbox.classList.add("open");
      document.body.style.overflow = "hidden";
    };
    const close = () => {
      lightbox.classList.remove("open");
      document.body.style.overflow = "";
    };

    items.forEach((el, i) =>
      el.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        open(i);
      })
    );

    lightbox.querySelector(".lightbox-close")?.addEventListener("click", close);
    lightbox.querySelector(".lightbox-nav.prev")?.addEventListener("click", () => show(index - 1));
    lightbox.querySelector(".lightbox-nav.next")?.addEventListener("click", () => show(index + 1));
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) close();
    });
    window.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(index - 1);
      if (e.key === "ArrowRight") show(index + 1);
    });
  })();

  /* ---------- chip select (contact form) ---------- */
  (() => {
    const chips = [...document.querySelectorAll(".chip")];
    const input = document.querySelector("[data-project-type]");
    if (!chips.length) return;
    chips.forEach((chip) => {
      chip.addEventListener("click", () => {
        chip.classList.toggle("active");
        if (input) {
          const active = chips.filter((c) => c.classList.contains("active")).map((c) => c.textContent.trim());
          input.value = active.join(", ");
        }
      });
    });
  })();

  /* ---------- contact form confirm ---------- */
  (() => {
    const form = document.querySelector("[data-contact-form]");
    const confirm = document.querySelector(".form-confirm");
    if (!form || !confirm) return;
    form.addEventListener("submit", () => {
      setTimeout(() => confirm.classList.add("show"), 300);
    });
  })();

  /* ---------- internal link page transition ---------- */
  (() => {
    const wipe = document.getElementById("page-wipe");
    if (!wipe) return;
    document.querySelectorAll('a[href^="/"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || link.target === "_blank") return;
        const href = link.getAttribute("href");
        if (!href || href.startsWith("#")) return;
        e.preventDefault();
        wipe.classList.add("active", "in");
        setTimeout(() => {
          window.location.href = href;
        }, 480);
      });
    });
  })();
})();
