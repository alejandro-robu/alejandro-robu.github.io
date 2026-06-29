let currentLang = localStorage.getItem("portfolio-lang") || "en";
let currentTheme = localStorage.getItem("portfolio-theme") || "dark";
let activeProject = null;

const root = document.documentElement;
const teamGrid = document.getElementById("team-grid");
const personalGrid = document.getElementById("personal-grid");
const modal = document.getElementById("project-modal");
const modalBody = document.getElementById("modal-body");
const closeModalButton = document.querySelector(".close-modal");
const languageToggle = document.getElementById("language-toggle");
const themeToggle = document.getElementById("theme-toggle");

function t(key) {
  return translations[currentLang][key] || translations.en[key] || key;
}

function localize(value) {
  if (typeof value === "string") return value;
  return value[currentLang] || value.en || "";
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio-lang", lang);
  root.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });
  languageToggle.textContent = lang === "en" ? "ES" : "EN";
  renderProjects();
  if (activeProject) renderModal(activeProject);
}

function setTheme(theme) {
  currentTheme = theme;
  localStorage.setItem("portfolio-theme", theme);
  root.dataset.theme = theme;
  themeToggle.textContent = theme === "dark" ? "☾" : "☀";
  themeToggle.setAttribute(
    "aria-label",
    theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
  );
}

function renderProjects() {
  teamGrid.innerHTML = teamProjects
    .map(
      (project) => `
    <article class="project reveal visible" tabindex="0" role="button" aria-label="${t("viewDetails")} ${project.title}" data-project-id="${project.id}">
      <div class="status-row">
        <span>${t(project.statusKey)}</span>
        <span>${project.year}</span>
      </div>
      <div class="project-media">
        <img src="${project.image || "assets/image-placeholder.jpg"}" alt="" loading="lazy">
        <div class="project-media-content">
          <span class="project-media-title">${project.title}</span>
          <span class="project-media-subtitle">${localize(project.type)}</span>
        </div>
      </div>
      <h3>${project.title}</h3>
      <p>${localize(project.short)}</p>
      <p class="project-meta">Engine: ${project.engine} | ${localize(project.type)}</p>
      <span class="project-action">${t("viewDetails")}</span>
    </article>
  `,
    )
    .join("");

  personalGrid.innerHTML = personalProjects
    .map(
      (project) => `
    <article class="project reveal visible" tabindex="0" role="button" aria-label="${t("viewDetails")} ${project.title}" data-project-id="${project.id}">
      <div class="status-row">
        <span>${t(project.statusKey)}</span>
        <span>${project.year}</span>
      </div>
      <div class="project-media">
        <img src="${project.image || "assets/image-placeholder.jpg"}" alt="" loading="lazy">
        <div class="project-media-content">
          <span class="project-media-title">${project.title}</span>
          <span class="project-media-subtitle">${localize(project.type)}</span>
        </div>
      </div>
      <h3>${project.title}</h3>
      <p>${localize(project.short)}</p>
      <p class="project-meta">Engine: ${project.engine} | ${localize(project.type)}</p>
      <span class="project-action">${t("viewDetails")}</span>
    </article>
  `,
    )
    .join("");

  document.querySelectorAll(".project").forEach((card) => {
    const open = () => {
      const project =
        teamProjects.find((p) => p.id === card.dataset.projectId) ||
        personalProjects.find((p) => p.id === card.dataset.projectId);

      if (project) openModal(project);
    };

    card.addEventListener("click", open);

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function renderVideo(project) {
  const videoSrc = project.video || "assets/video-placeholder.mp4";
  const posterSrc = project.image || "assets/image-placeholder.jpg";

  return `
    <div class="video-wrapper">
      <video autoplay muted loop playsinline preload="auto" poster="${posterSrc}">
        <source src="${videoSrc}" type="video/mp4">
      </video>
    </div>
  `;
}
function renderGallery(project) {
  const images =
    project.gallery && project.gallery.length
      ? project.gallery
      : [
          "assets/image-placeholder.jpg",
          "assets/image-placeholder.jpg",
          "assets/image-placeholder.jpg",
        ];

  return `
    <div class="gallery-grid">
      ${images
        .map(
          (src, index) => `
        <figure class="gallery-item">
          <img class="gallery-image" src="${src}" alt="${project.title} image ${index + 1}" loading="lazy" data-full="${src}">
        </figure>
      `,
        )
        .join("")}
    </div>
  `;
}

function renderLinks(project) {
  if (!project.links.length) {
    return `<p class="modal-description" style="text-align:center;">${t("noLinks")}</p>`;
  }

  return `
    <div class="project-links">
      ${project.links
        .map(
          (link, index) => `
        <a class="button ${index === 0 ? "primary" : "secondary"}" href="${link.url}" target="_blank" rel="noreferrer">${t(link.labelKey)}</a>
      `,
        )
        .join("")}
    </div>
  `;
}

function renderModal(project) {
  const features =
    project.contributions[currentLang] || project.contributions.en;
  activeProject = project;

  modalBody.innerHTML = `
    <p class="modal-kicker">${t(project.statusKey)} · ${project.year}</p>
    <h2 class="modal-title" id="modal-title">${project.title}</h2>
    <p class="modal-subtitle">${localize(project.type)}</p>

    <div class="modal-menu" role="tablist" aria-label="Project detail sections">
      <button class="is-active" type="button" data-panel="overview">${t("modalOverview")}</button>
      <button type="button" data-panel="work">${t("modalRole")}</button>
      <button type="button" data-panel="tech">${t("modalTech")}</button>
      <button type="button" data-panel="links">${t("modalLinks")}</button>
    </div>

    <section class="modal-panel is-active" id="overview-panel">
      <div class="project-info-grid">
        <div class="info-item"><span><span class="info-label">${t("roleLabel")}</span><span class="info-value">${localize(project.role)}</span></span></div>
        <div class="info-item"><span><span class="info-label">${t("engineLabel")}</span><span class="info-value">${project.engine}</span></span></div>
        <div class="info-item"><span><span class="info-label">${t("yearLabel")}</span><span class="info-value">${project.year}</span></span></div>
        <div class="info-item"><span><span class="info-label">${t("teamLabel")}</span><span class="info-value">${localize(project.team)}</span></span></div>
      </div>
      <p class="modal-description">${localize(project.description)}</p>
      ${renderVideo(project)}
      ${renderGallery(project)}
    </section>

    <section class="modal-panel" id="work-panel">
      <p class="modal-description">${localize(project.description)}</p>
      <ul class="feature-list">
        ${features.map((feature) => `<li>${feature}</li>`).join("")}
      </ul>
    </section>

    <section class="modal-panel" id="tech-panel">
      <div class="project-info-grid">
        <div class="info-item"><span><span class="info-label">${t("engineLabel")}</span><span class="info-value">${project.engine}</span></span></div>
        <div class="info-item"><span><span class="info-label">${t("typeLabel")}</span><span class="info-value">${localize(project.type)}</span></span></div>
        <div class="info-item"><span><span class="info-label">${t("statusLabel")}</span><span class="info-value">${t(project.statusKey)}</span></span></div>
      </div>
      <div class="tags-row">
        ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </section>

    <section class="modal-panel" id="links-panel">
      <p class="modal-description" style="text-align:center;">${t("projectLinksTitle")}</p>
      ${renderLinks(project)}
    </section>
  `;

  bindModalMenu();
}

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");

function openLightbox(src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt || "";
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}

function bindModalMenu() {
  const menuButtons = modalBody.querySelectorAll(".modal-menu button");
  const panels = modalBody.querySelectorAll(".modal-panel");

  menuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      menuButtons.forEach((btn) => btn.classList.remove("is-active"));
      panels.forEach((panel) => panel.classList.remove("is-active"));
      button.classList.add("is-active");
      const panel = modalBody.querySelector(`#${button.dataset.panel}-panel`);
      if (panel) panel.classList.add("is-active");
    });
  });
}

function openModal(project) {
  renderModal(project);
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  closeModalButton.focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  activeProject = null;
}

function setupReveal() {
  const revealElements = document.querySelectorAll(".reveal:not(.visible)");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealElements.forEach((el) => observer.observe(el));
}

function setupCanvas() {
  const canvas = document.getElementById("network-bg");
  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let particles = [];
  const pointer = { x: null, y: null };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    createParticles();
  }

  function createParticles() {
    const count = Math.min(Math.max(Math.floor(width / 32), 28), 54);
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.6 + 0.8,
      phase: Math.random() * Math.PI * 2,
    }));
  }

  function color(alpha) {
    const isLight = root.dataset.theme === "light";
    return isLight ? `rgba(80,80,80,${alpha})` : `rgba(155,155,155,${alpha})`;
  }

  function tick() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.phase += 0.02;

      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      if (p.y > height + 20) p.y = -20;

      const alpha = 0.2 + Math.abs(Math.sin(p.phase)) * 0.35;
      ctx.beginPath();
      ctx.fillStyle = color(alpha);
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 160) {
          ctx.strokeStyle = color((1 - dist / 160) * 0.18);
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      if (pointer.x !== null) {
        const p = particles[i];
        const dx = p.x - pointer.x;
        const dy = p.y - pointer.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 190) {
          ctx.strokeStyle = color((1 - dist / 190) * 0.32);
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(pointer.x, pointer.y);
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(tick);
  }

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", (event) => {
    pointer.x = event.clientX;
    pointer.y = event.clientY;
  });
  window.addEventListener("mouseleave", () => {
    pointer.x = null;
    pointer.y = null;
  });

  resize();
  tick();
}

languageToggle.addEventListener("click", () => {
  setLanguage(currentLang === "en" ? "es" : "en");
});

themeToggle.addEventListener("click", () => {
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

closeModalButton.addEventListener("click", closeModal);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

modalBody.addEventListener("click", (event) => {
  const img = event.target.closest(".gallery-image");
  if (img) openLightbox(img.dataset.full, img.alt);
});

lightbox.addEventListener("click", closeLightbox);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
    closeLightbox();
  }
});

setTheme(currentTheme);
setLanguage(currentLang);
setupReveal();
setupCanvas();
