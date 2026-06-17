const projects = {
  "nike-hero-court": {
    title: "是英雄场上见",
    category: "Marketing Design",
    image: "assets/optimized/nike-cover-card.webp",
    description: "Nike 品牌事件提案，以城市运动场景、AI 视觉生成和强 KV 系统建立普通运动员也是英雄的传播概念。",
    detailPage: "nike-hero-court.html",
    coverMode: "complete"
  },
  "hema-fresh": {
    title: "盒马鲜生出海叙事",
    category: "Marketing Design",
    image: "assets/optimized/hema-card.webp",
    description: "围绕盒马鲜生的海洋、鲜度和角色 IP 资产，构建具备传播记忆点的品牌营销视觉系统。",
    detailPage: "hema-fresh.html",
    coverMode: "complete"
  },
  "mayday-card": {
    title: "组团抽一天",
    category: "Marketing Design",
    image: "assets/optimized/mayday-card.webp",
    description: "围绕五月天小卡抽卡活动建立的营销视觉项目，包含活动主视觉、卡面展示、长图传播和社媒内容延展。",
    detailPage: "mayday-card.html",
    coverMode: "complete"
  },
  "valorant-event": {
    title: "赛事预测活动运营体验设计",
    category: "Marketing Design",
    image: "assets/optimized/valorant-card-hq.webp?v=20260613-1",
    description: "围绕无畏契约赛事节点，搭建预测活动、任务机制、竞猜路径和用户参与规则的运营体验长图方案。",
    detailPage: "valorant-event.html",
    coverMode: "complete"
  },
  "golden-spatula": {
    title: "金铲铲马上发财局",
    category: "Marketing Design",
    image: "assets/optimized/golden-spatula-card.webp",
    description: "围绕春节与马年发财主题，将节庆情绪、游戏角色、好运奖励和视觉转译整合成高氛围感营销长图。",
    detailPage: "golden-spatula.html",
    coverMode: "complete"
  },
  "neo-myth": {
    title: "重装神域",
    category: "Infinite Creative",
    image: "assets/optimized/neo-card.webp",
    description: "围绕机甲角色、异域神话和卡牌视觉建立的幻想世界观项目，展示角色设定、阵营系统和交互视觉延展。",
    detailPage: "neo-myth.html",
    coverMode: "complete"
  },
  "venow-girl-group": {
    title: "VENOW 女团角色设定",
    category: "Infinite Creative",
    image: "assets/optimized/venow-card.webp",
    description: "以四位风格鲜明的女团角色为核心，构建角色海报、姿态展示、组合场景和品牌视觉收束的完整创意设定。",
    detailPage: "venow-girl-group.html",
    coverMode: "complete"
  },
  "super-symbol": {
    title: "超级符号视觉实验",
    category: "Infinite Creative",
    image: "assets/optimized/super-symbol-card-capybara.png?v=20260615-1",
    description: "以蓝色系统界面、动物符号、运动品牌海报和幻想场景为线索，探索 AI 视觉中的超级符号与跨风格叙事。",
    detailPage: "super-symbol.html",
    coverMode: "complete"
  },
  "elephant-opening": {
    title: "小象超市开业长图",
    category: "Long-form Design",
    image: "assets/optimized/elephant-card-hq.webp?v=20260613-1",
    description: "围绕小象超市线下门店开业与年末焕新季，整合开业信息、福利机制、入群转化和地图导流的完整长图。",
    detailPage: "elephant-opening.html",
    coverMode: "complete"
  },
  "winter-camp": {
    title: "冬日新惊喜",
    category: "Long-form Design",
    image: "assets/optimized/winter-card-hq.webp?v=20260613-1",
    description: "以冬季携宠为主线，串联新品上新、节日场景、品牌活动和会员权益，形成氛围场景与利益点的结合。",
    detailPage: "winter-camp.html",
    coverMode: "complete"
  }
};

const galleryMap = {
  marketing: ["nike-hero-court", "hema-fresh", "mayday-card", "valorant-event", "golden-spatula"],
  longform: ["elephant-opening", "winter-camp"],
  creative: ["super-symbol", "neo-myth", "venow-girl-group"]
};

const createCard = (id) => {
  const project = projects[id];
  const card = document.createElement(project.detailPage ? "a" : "button");
  card.className = `project-card reveal${project.coverMode === "complete" ? " project-card-complete" : ""}`;
  card.dataset.projectId = id;
  card.draggable = false;
  if (project.detailPage) {
    card.href = project.detailPage;
    card.dataset.detailPage = project.detailPage;
  } else {
    card.type = "button";
    card.dataset.project = id;
  }
  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}" loading="lazy" decoding="async" draggable="false">
    <span class="project-meta">
      <small>${project.category}</small>
      <h3>${project.title}</h3>
    </span>
  `;
  return card;
};

document.querySelectorAll("[data-gallery]").forEach((gallery) => {
  galleryMap[gallery.dataset.gallery].forEach((id) => gallery.appendChild(createCard(id)));
});

document.querySelectorAll(".project-grid").forEach((grid) => {
  const shell = document.createElement("div");
  shell.className = "gallery-scroll-shell";
  grid.parentNode.insertBefore(shell, grid);
  shell.appendChild(grid);
  shell.insertAdjacentHTML(
    "beforeend",
    '<div class="gallery-control" aria-hidden="false"><div class="gallery-progress" aria-hidden="true"><span></span></div><div class="gallery-index" aria-hidden="true"><span class="gallery-current">01</span><i></i><span class="gallery-total">01</span></div><div class="gallery-nav"><button class="gallery-button gallery-button-prev" type="button" aria-label="上一组作品">←</button><button class="gallery-button gallery-button-next" type="button" aria-label="下一组作品">→</button></div></div>'
  );
});

document.querySelectorAll(".experience-grid-v2 > .profile-panel, .experience-grid-v2 > .experience-card").forEach((card) => {
  card.classList.add("border-glow-card");
  if (!card.querySelector(".edge-light")) {
    card.insertAdjacentHTML(
      "beforeend",
      '<span class="border-glow-border" aria-hidden="true"></span><span class="border-glow-fill" aria-hidden="true"></span><span class="edge-light" aria-hidden="true"></span>'
    );
  }

  const updateBorderGlow = (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const dx = x - cx;
    const dy = y - cy;
    const kx = dx === 0 ? Infinity : cx / Math.abs(dx);
    const ky = dy === 0 ? Infinity : cy / Math.abs(dy);
    const proximity = Math.min(Math.max(1 / Math.min(kx, ky), 0), 1) * 100;
    let angle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
    if (angle < 0) angle += 360;

    card.style.setProperty("--edge-proximity", proximity.toFixed(3));
    card.style.setProperty("--cursor-angle", `${angle.toFixed(3)}deg`);
    card.style.setProperty("--glow-x", `${x}px`);
    card.style.setProperty("--glow-y", `${y}px`);
  };

  card.addEventListener("pointermove", updateBorderGlow);
  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--edge-proximity", "0");
  });
});

const pageTransitionLayer = document.createElement("div");
pageTransitionLayer.className = "page-transition-layer is-entering";
pageTransitionLayer.setAttribute("aria-hidden", "true");
document.body.appendChild(pageTransitionLayer);
window.setTimeout(() => {
  pageTransitionLayer.classList.remove("is-entering");
}, 760);

const navigateWithTransition = (url) => {
  if (!url) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.location.href = url;
    return;
  }

  pageTransitionLayer.classList.remove("is-entering");
  pageTransitionLayer.classList.add("is-leaving");
  window.setTimeout(() => {
    window.location.href = url;
  }, 460);
};

document.addEventListener(
  "click",
  (event) => {
    const activeGrid = event.target.closest(".project-grid");
    if (activeGrid && Number(activeGrid.dataset.suppressClickUntil || 0) > performance.now()) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }

    const projectCard = event.target.closest("a.project-card[href]");
    if (projectCard) return;

    const detailTrigger = event.target.closest("[data-detail-page], a.reel-card[href]");
    if (!detailTrigger) return;

    const targetPage = detailTrigger.dataset.detailPage || detailTrigger.getAttribute("href");
    if (!targetPage) return;

    event.preventDefault();
    event.stopImmediatePropagation();
    navigateWithTransition(targetPage);
  },
  true
);

document.querySelectorAll(".project-grid").forEach((grid) => {
  let startX = 0;
  let lastX = 0;
  let lastTime = 0;
  let startScrollLeft = 0;
  let isDragging = false;
  let didDrag = false;
  let dragDistance = 0;
  let velocity = 0;
  let momentumFrame = 0;
  const shell = grid.closest(".gallery-scroll-shell");
  const progress = shell?.querySelector(".gallery-progress span");
  const currentIndex = shell?.querySelector(".gallery-current");
  const totalIndex = shell?.querySelector(".gallery-total");
  const previousButton = shell?.querySelector(".gallery-button-prev");
  const nextButton = shell?.querySelector(".gallery-button-next");
  const cards = Array.from(grid.querySelectorAll(".project-card"));
  const mobileGalleryQuery = window.matchMedia("(max-width: 640px)");
  let snapTimer = 0;

  totalIndex.textContent = String(Math.max(cards.length, 1)).padStart(2, "0");

  const maxScroll = () => Math.max(0, grid.scrollWidth - grid.clientWidth);
  const nearestCardLeft = () => {
    const closest = cards.reduce(
      (match, card) => {
        const distance = Math.abs(card.offsetLeft - grid.scrollLeft);
        return distance < match.distance ? { distance, left: card.offsetLeft } : match;
      },
      { distance: Infinity, left: 0 }
    );
    return Math.max(0, Math.min(maxScroll(), closest.left));
  };

  const snapToNearestCard = (behavior = "smooth") => {
    if (!mobileGalleryQuery.matches || !cards.length) return;
    grid.scrollTo({ left: nearestCardLeft(), behavior });
  };

  const updateControls = () => {
    const max = maxScroll();
    const ratio = max > 0 ? grid.scrollLeft / max : 0;
    const visibleRatio = grid.scrollWidth > 0 ? grid.clientWidth / grid.scrollWidth : 1;
    const thumbWidth = Math.min(1, visibleRatio) * 100;
    const thumbLeft = Math.max(0, Math.min(1, ratio)) * (100 - thumbWidth);
    progress?.style.setProperty("--gallery-progress-width", `${thumbWidth}%`);
    progress?.style.setProperty("--gallery-progress-left", `${thumbLeft}%`);
    previousButton?.toggleAttribute("disabled", grid.scrollLeft <= 2);
    nextButton?.toggleAttribute("disabled", grid.scrollLeft >= max - 2);
    shell?.classList.toggle("is-scrollable", max > 2);

    const activeCard = cards.reduce(
      (closest, card, index) => {
        const distance = Math.abs(card.offsetLeft - grid.scrollLeft);
        return distance < closest.distance ? { distance, index } : closest;
      },
      { distance: Infinity, index: 0 }
    );
    currentIndex.textContent = String(activeCard.index + 1).padStart(2, "0");
  };

  const stopMomentum = () => {
    if (!momentumFrame) return;
    cancelAnimationFrame(momentumFrame);
    momentumFrame = 0;
  };

  const animateMomentum = () => {
    velocity *= 0.92;
    if (Math.abs(velocity) < 0.18) {
      velocity = 0;
      momentumFrame = 0;
      return;
    }

    grid.scrollLeft -= velocity;
    updateControls();

    if (grid.scrollLeft <= 0 || grid.scrollLeft >= maxScroll()) {
      velocity *= 0.35;
    }

    momentumFrame = requestAnimationFrame(animateMomentum);
  };

  const scrollByPage = (direction) => {
    stopMomentum();
    if (mobileGalleryQuery.matches) {
      const currentIndex = cards.reduce(
        (match, card, index) => {
          const distance = Math.abs(card.offsetLeft - grid.scrollLeft);
          return distance < match.distance ? { distance, index } : match;
        },
        { distance: Infinity, index: 0 }
      ).index;
      const nextIndex = Math.max(0, Math.min(cards.length - 1, currentIndex + direction));
      grid.scrollTo({ left: cards[nextIndex]?.offsetLeft || 0, behavior: "smooth" });
      window.setTimeout(updateControls, 420);
      return;
    }
    grid.scrollBy({
      left: direction * Math.max(grid.clientWidth * 0.86, 320),
      behavior: "smooth"
    });
    window.setTimeout(updateControls, 420);
  };

  grid.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    if (mobileGalleryQuery.matches || event.pointerType === "touch") return;
    stopMomentum();
    isDragging = true;
    didDrag = false;
    dragDistance = 0;
    velocity = 0;
    startX = event.clientX;
    lastX = event.clientX;
    lastTime = performance.now();
    startScrollLeft = grid.scrollLeft;
  });

  grid.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    const distance = event.clientX - startX;
    dragDistance = Math.abs(distance);
    if (dragDistance > 8) {
      didDrag = true;
      grid.dataset.dragIntent = "true";
      grid.classList.add("is-dragging");
      if (!grid.hasPointerCapture(event.pointerId)) {
        grid.setPointerCapture(event.pointerId);
      }
    }

    const now = performance.now();
    const elapsed = Math.max(16, now - lastTime);
    velocity = ((event.clientX - lastX) / elapsed) * 16;
    lastX = event.clientX;
    lastTime = now;

    grid.scrollLeft = startScrollLeft - distance;
    updateControls();
  });

  const stopDragging = (event) => {
    if (!isDragging) return;
    isDragging = false;
    grid.classList.remove("is-dragging");
    if (grid.hasPointerCapture(event.pointerId)) {
      grid.releasePointerCapture(event.pointerId);
    }
    if (didDrag && Math.abs(velocity) > 0.6) {
      momentumFrame = requestAnimationFrame(animateMomentum);
    } else {
      snapToNearestCard();
    }
    if (didDrag) {
      grid.dataset.suppressClickUntil = String(performance.now() + 220);
    }
    window.setTimeout(() => {
      delete grid.dataset.dragIntent;
      delete grid.dataset.suppressClickUntil;
      didDrag = false;
    }, 260);
  };

  previousButton?.addEventListener("click", () => scrollByPage(-1));
  nextButton?.addEventListener("click", () => scrollByPage(1));
  grid.addEventListener("scroll", () => {
    updateControls();
    if (!mobileGalleryQuery.matches) return;
    window.clearTimeout(snapTimer);
    snapTimer = window.setTimeout(() => snapToNearestCard(), 120);
  }, { passive: true });
  window.addEventListener("resize", updateControls);
  grid.addEventListener("pointerup", stopDragging);
  grid.addEventListener("pointercancel", stopDragging);
  grid.addEventListener("pointerleave", (event) => {
    stopDragging(event);
  });

  requestAnimationFrame(updateControls);
});

const reelTrack = document.querySelector(".reel-track");
const reel = document.querySelector(".work-reel");
const canHoverReel = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
if (reel && reelTrack && canHoverReel) {
  const updateReelOffset = (event) => {
    const bounds = reel.getBoundingClientRect();
    const progress = (event.clientX - bounds.left) / bounds.width;
    const direction = Math.max(-1, Math.min(1, progress * 2 - 1));
    const overflow = Math.max(0, reelTrack.scrollWidth - bounds.width + 160);
    reel.style.setProperty("--reel-offset", `${direction * overflow * -0.5}px`);
  };

  reel.addEventListener("pointermove", updateReelOffset);
  reel.addEventListener("pointerleave", () => {
    reel.style.setProperty("--reel-offset", "0px");
  });

  reelTrack.querySelectorAll(".reel-card").forEach((card) => {
    card.addEventListener("pointerenter", () => {
      card.style.transform = "translateY(-18px) scale(1.16)";
      card.style.zIndex = "30";
    });
    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
      card.style.zIndex = "";
    });
  });
}

const contactDialog = document.querySelector(".contact-dialog");
document.querySelectorAll("[data-open-contact]").forEach((button) => {
  button.addEventListener("click", () => contactDialog?.showModal());
});
document.querySelector("[data-close-dialog]")?.addEventListener("click", () => contactDialog?.close());

const brandLink = document.querySelector(".brand");
if (brandLink) {
  const drawerBackdrop = document.createElement("button");
  drawerBackdrop.className = "brand-drawer-backdrop";
  drawerBackdrop.type = "button";
  drawerBackdrop.setAttribute("aria-label", "关闭个人信息面板");

  const drawer = document.createElement("aside");
  drawer.className = "brand-drawer";
  drawer.setAttribute("aria-hidden", "true");
  drawer.innerHTML = `
    <button class="brand-drawer-close" type="button" aria-label="关闭">×</button>
    <p class="brand-drawer-kicker">Lin Helong</p>
    <h2>Visual<br>Designer</h2>
    <p class="brand-drawer-copy">视觉设计 / AI 创意 / 品牌内容。用更快的 AI 工作流，把项目从概念推进到可落地的视觉系统。</p>
    <div class="brand-drawer-links">
      <a href="index.html#marketing"><span>查看作品</span><strong>01</strong></a>
      <a href="index.html#experience"><span>个人经历</span><strong>02</strong></a>
      <button type="button" data-open-contact><span>联系合作</span><strong>03</strong></button>
    </div>
  `;

  document.body.append(drawerBackdrop, drawer);

  const openBrandDrawer = () => {
    drawer.classList.add("is-open");
    drawerBackdrop.classList.add("is-open");
    drawer.setAttribute("aria-hidden", "false");
  };

  const closeBrandDrawer = () => {
    drawer.classList.remove("is-open");
    drawerBackdrop.classList.remove("is-open");
    drawer.setAttribute("aria-hidden", "true");
  };

  brandLink.addEventListener("click", (event) => {
    event.preventDefault();
    openBrandDrawer();
  });

  drawerBackdrop.addEventListener("click", closeBrandDrawer);
  drawer.querySelector(".brand-drawer-close")?.addEventListener("click", closeBrandDrawer);
  drawer.querySelector("[data-open-contact]")?.addEventListener("click", () => {
    closeBrandDrawer();
    contactDialog?.showModal();
  });
  drawer.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeBrandDrawer));
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeBrandDrawer();
  });
}

const projectDialog = document.querySelector(".project-dialog");
const projectImage = document.querySelector("#project-image");
const projectTitle = document.querySelector("#project-title");
const projectCategory = document.querySelector("#project-category");
const projectDescription = document.querySelector("#project-description");

document.body.addEventListener("click", (event) => {
  const trigger = event.target.closest("[data-project]");
  if (!trigger || !projectDialog) return;
  const project = projects[trigger.dataset.project];
  projectImage.src = project.image;
  projectImage.alt = project.title;
  projectTitle.textContent = project.title;
  projectCategory.textContent = project.category;
  projectDescription.textContent = project.description;
  projectDialog.showModal();
});

document.querySelector("[data-close-project]")?.addEventListener("click", () => projectDialog?.close());

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const projectSectionSelector = "#marketing, #longform, #creative";
const homeHashIds = new Set(["home", ""]);
let lastManualScrollAt = 0;

["wheel", "touchmove"].forEach((eventName) => {
  window.addEventListener(
    eventName,
    () => {
      lastManualScrollAt = performance.now();
    },
    { passive: true }
  );
});

const getInitialHashTarget = () => {
  if (!window.location.hash) return null;
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (!id) return null;
  return document.getElementById(id);
};

const getHashTargetId = () => {
  if (!window.location.hash) return "";
  return decodeURIComponent(window.location.hash.slice(1));
};

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual";
}

const runFallbackReveal = () => {
  document.querySelector(".opening-curtain")?.remove();
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  document.querySelectorAll(".reveal").forEach((element, index) => {
    element.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
    revealObserver.observe(element);
  });

  requestAnimationFrame(() => {
    const target = getInitialHashTarget();
    if (!target) return;
    const targetTop = target.getBoundingClientRect().top + window.scrollY - 24;
    window.scrollTo({ top: Math.max(0, targetTop), left: 0, behavior: "auto" });
  });
};

const initMotionSystem = () => {
  const gsapInstance = window.gsap;
  const scrollTrigger = window.ScrollTrigger;
  const curtain = document.querySelector(".opening-curtain");

  if (prefersReducedMotion || !gsapInstance || !scrollTrigger) {
    document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
    runFallbackReveal();
    return;
  }

  document.body.classList.add("motion-ready");
  gsapInstance.registerPlugin(scrollTrigger);
  gsapInstance.defaults({ ease: "power4.out" });

  const clearProjectCardReveal = (scope = document) => {
    const cards = scope.querySelectorAll(".project-card");
    if (!cards.length) return;
    gsapInstance.set(cards, { clearProps: "transform,opacity,visibility,clipPath" });
  };

  const clearVisibleProjectSections = () => {
    document.querySelectorAll(projectSectionSelector).forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.86 && rect.bottom > 0) {
        clearProjectCardReveal(section);
      }
    });
  };

  const scrollToHashTarget = (options = {}) => {
    const target = getInitialHashTarget();
    if (!target) return;
    const targetId = getHashTargetId();
    if (!options.force && homeHashIds.has(targetId)) return;
    if (!options.force && performance.now() - lastManualScrollAt < 520) return;

    requestAnimationFrame(() => {
      if (!options.force && performance.now() - lastManualScrollAt < 520) return;
      const targetTop = target.getBoundingClientRect().top + window.scrollY - 24;
      window.scrollTo({ top: Math.max(0, targetTop), left: 0, behavior: "auto" });
      window.setTimeout(() => {
        clearProjectCardReveal(target);
        clearVisibleProjectSections();
      }, 120);
    });
  };

  gsapInstance.set(".site-nav", { y: -34, autoAlpha: 0 });
  gsapInstance.set(".hero-video", { scale: 1.12, filter: "saturate(0.9) contrast(1.08) brightness(0.78)" });
  gsapInstance.set(".eyebrow", { y: 46, autoAlpha: 0, clipPath: "inset(0 0 100% 0)" });
  gsapInstance.set(".hero-title", {
    y: 122,
    scaleX: 0.78,
    autoAlpha: 0,
    transformOrigin: "left center",
    clipPath: "inset(0 0 100% 0)"
  });
  gsapInstance.set(".hero-copy, .hero-actions", { y: 58, autoAlpha: 0 });
  gsapInstance.set(".reel-card", { y: 80, rotateX: 10, autoAlpha: 0, transformPerspective: 900 });
  gsapInstance.set(".opening-curtain span", { y: 80, scaleX: 0.58, autoAlpha: 0 });

  const opening = gsapInstance.timeline({ delay: 0.12 });
  opening
    .to(".opening-curtain span", { y: 0, scaleX: 0.86, autoAlpha: 0.42, duration: 1.15 })
    .to(curtain, { clipPath: "inset(0 0 100% 0)", duration: 1.25, ease: "expo.inOut" }, "-=0.42")
    .to(".hero-video", { scale: 1, filter: "saturate(0.94) contrast(1.04) brightness(1)", duration: 1.8 }, "-=1.0")
    .to(".site-nav", { y: 0, autoAlpha: 1, duration: 0.92 }, "-=1.0")
    .to(".eyebrow", { y: 0, autoAlpha: 1, clipPath: "inset(0 0 0% 0)", duration: 0.9 }, "-=0.62")
    .to(".hero-title", { y: 0, scaleX: 1, autoAlpha: 1, clipPath: "inset(0 0 0% 0)", duration: 1.35 }, "-=0.56")
    .to(".hero-copy, .hero-actions", { y: 0, autoAlpha: 1, duration: 0.95, stagger: 0.12 }, "-=0.68")
    .to(".reel-card", { y: 0, rotateX: 0, autoAlpha: 1, duration: 1.05, stagger: 0.055 }, "-=0.62")
    .set(".reel-card", { clearProps: "transform,opacity,visibility" })
    .set(curtain, { display: "none" })
    .call(() => scrollToHashTarget({ force: !homeHashIds.has(getHashTargetId()) }));

  document.querySelectorAll(".section").forEach((section) => {
    const kicker = section.querySelector(".section-kicker");
    const title = section.querySelector(".section-head h2");
    const copy = section.querySelector(".section-head p:last-child");
    const cards = section.querySelectorAll(".profile-panel, .info-panel, .project-card");
    const images = section.querySelectorAll(".portrait img");

    const timeline = gsapInstance.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 72%",
        once: true
      }
    });

    timeline
      .from(kicker, {
        x: -170,
        scaleX: 1.42,
        autoAlpha: 0,
        transformOrigin: "left center",
        clipPath: "inset(0 100% 0 0)",
        duration: 1.05
      })
      .from(title, { y: 96, scaleY: 0.78, autoAlpha: 0, transformOrigin: "center bottom", duration: 1.12 }, "-=0.72")
      .from(copy, { x: 74, autoAlpha: 0, duration: 0.9 }, "-=0.76")
      .from(cards, {
        y: 118,
        autoAlpha: 0,
        clipPath: "inset(16% 0 0 0)",
        duration: 1.18,
        stagger: 0.12,
        onComplete: () => {
          const projectCards = section.querySelectorAll(".project-card");
          if (projectCards.length) {
            clearProjectCardReveal(section);
          }
        }
      }, "-=0.52");

    images.forEach((image) => {
      gsapInstance.fromTo(
        image,
        { yPercent: -5, scale: 1.08 },
        {
          yPercent: 5,
          scale: 1.02,
          ease: "none",
          scrollTrigger: {
            trigger: image.closest(".project-card, .portrait") || image,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8
          }
        }
      );
    });
  });

  window.addEventListener("hashchange", () => {
    lastManualScrollAt = 0;
    scrollToHashTarget({ force: true });
  });
  window.setTimeout(() => {
    scrollTrigger.refresh();
    clearVisibleProjectSections();
  }, 900);
  if (!homeHashIds.has(getHashTargetId())) {
    [300, 1400, 2800, 4200].forEach((delay) => {
      window.setTimeout(scrollToHashTarget, delay);
    });
  }
};

initMotionSystem();

const animateDetailStats = () => {
  const statValues = document.querySelectorAll(".detail-stat-row strong, .metric-strip strong");
  if (!statValues.length) return;

  const animateText = (element) => {
    if (element.dataset.counted === "true") return;
    const rawValue = element.textContent.trim();
    const match = rawValue.match(/^(\d+(?:\.\d+)?)(.*)$/);

    element.dataset.counted = "true";
    element.classList.add("stat-value-enter");

    if (!match) {
      element.textContent = rawValue;
      requestAnimationFrame(() => element.classList.add("is-counted"));
      return;
    }

    const target = Number(match[1]);
    const suffix = match[2] || "";
    const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
    const startTime = performance.now();
    const duration = 1250;

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      element.textContent = `${(target * eased).toFixed(decimals)}${suffix}`;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        element.textContent = rawValue;
        element.classList.add("is-counted");
      }
    };

    element.textContent = (0).toFixed(decimals);
    requestAnimationFrame(() => {
      element.classList.add("is-counted");
      requestAnimationFrame(tick);
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.querySelectorAll("strong").forEach(animateText);
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.35 }
  );

  document.querySelectorAll(".detail-stat-row, .metric-strip").forEach((row) => observer.observe(row));
};

animateDetailStats();

const initProfileHoverVideo = () => {
  const video = document.querySelector(".profile-hover-video");
  const shell = video?.closest(".profile-video-shell");
  if (!video || !shell) return;

  let direction = "idle";
  let monitorFrame = 0;
  let isHovering = false;

  const getHalfPoint = () => (video.duration || 0) / 2;

  const stopMonitor = () => {
    if (!monitorFrame) return;
    cancelAnimationFrame(monitorFrame);
    monitorFrame = 0;
  };

  const resetToStart = () => {
    stopMonitor();
    direction = "idle";
    video.pause();
    video.currentTime = 0;
  };

  const monitorPlayback = () => {
    if (!video.duration) return;
    const halfPoint = getHalfPoint();

    if (direction === "forward" && video.currentTime >= halfPoint - 0.025) {
      stopMonitor();
      direction = "idle";
      video.pause();
      video.currentTime = halfPoint;
      return;
    }

    monitorFrame = requestAnimationFrame(monitorPlayback);
  };

  const playSegment = () => {
    stopMonitor();
    video.play().catch(() => {});
    monitorFrame = requestAnimationFrame(monitorPlayback);
  };

  const playForward = () => {
    if (!video.duration) return;
    const halfPoint = getHalfPoint();
    if (video.currentTime > halfPoint) {
      video.currentTime = Math.max(0, video.duration - video.currentTime);
    }
    if (video.currentTime >= halfPoint - 0.04) {
      video.currentTime = 0;
    }
    direction = "forward";
    playSegment();
  };

  const playBack = () => {
    if (!video.duration) return;
    const halfPoint = getHalfPoint();
    if (video.currentTime <= 0.04) {
      resetToStart();
      return;
    }
    if (video.currentTime < halfPoint) {
      video.currentTime = Math.min(video.duration - 0.04, video.duration - video.currentTime);
    }
    direction = "back";
    playSegment();
  };

  const activate = () => {
    if (isHovering && direction === "forward") return;
    isHovering = true;
    playForward();
  };

  const deactivate = () => {
    if (!isHovering && direction === "back") return;
    isHovering = false;
    playBack();
  };

  const syncHoverState = () => {
    const hoveringNow = shell.matches(":hover") || shell.matches(":focus-within");
    if (hoveringNow !== isHovering) {
      if (hoveringNow) {
        activate();
      } else {
        deactivate();
      }
    }
  };

  video.addEventListener("loadedmetadata", resetToStart);
  video.addEventListener("ended", resetToStart);

  shell.addEventListener("pointerenter", activate);
  shell.addEventListener("pointerleave", deactivate);
  shell.addEventListener("mouseenter", activate);
  shell.addEventListener("mouseleave", deactivate);
  shell.addEventListener("mouseover", (event) => {
    if (shell.contains(event.relatedTarget)) return;
    activate();
  });
  shell.addEventListener("mouseout", (event) => {
    if (shell.contains(event.relatedTarget)) return;
    deactivate();
  });
  shell.addEventListener("focusin", activate);
  shell.addEventListener("focusout", deactivate);
  window.setInterval(syncHoverState, 120);
};

initProfileHoverVideo();

const personalBar = document.querySelector(".personal-bar");

const syncScrollState = () => {
  if (!personalBar) return;
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  personalBar.classList.toggle("is-visible", scrollTop / docHeight > 0.82);
};

window.addEventListener("scroll", syncScrollState, { passive: true });
syncScrollState();

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (event) => {
  if (!glow) return;
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});




