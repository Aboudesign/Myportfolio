function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const backdrop = document.getElementById("menu-backdrop");
  const isOpen = menu.classList.toggle("open");
  icon.classList.toggle("open");
  icon.setAttribute("aria-expanded", isOpen);
  icon.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  if (backdrop) {
    backdrop.hidden = !isOpen;
  }
  document.body.style.overflow = isOpen ? "hidden" : "";
}

const TARGET_EMAIL = "aboudesign01155@gmail.com";
const WHATSAPP_NUMBER = "22604475650";
const WHATSAPP_URL = "https://wa.me/" + WHATSAPP_NUMBER;

const links = [
  { id: 1, net: "whatsapp", url: WHATSAPP_URL },
  { id: 2, net: "github", url: "https://github.com/Aboudesign" },
];

const NETS = {
  whatsapp: {
    label: "WhatsApp",
    ph: WHATSAPP_URL,
    img: "./assets/whatsapp.png",
  },
  github: {
    label: "GitHub",
    ph: "https://github.com/...",
    icon:
      '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#24292f" d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>',
  },
  email: {
    label: "Email",
    ph: "mailto:...",
    icon:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
  },
};

function socialIconHtml(netKey) {
  const n = NETS[netKey] || NETS.github;
  if (n.img) {
    return (
      '<img class="social-logo" src="' +
      n.img +
      '" alt="" aria-hidden="true" />'
    );
  }
  return n.icon;
}

function renderSocials() {
  const socialsEl = document.getElementById("cs-socials");
  if (socialsEl) {
    socialsEl.innerHTML = links
      .map(function (l) {
        const n = NETS[l.net] || NETS.github;
        return (
          '<a class="cs-social-card cs-social-card--' +
          l.net +
          '" href="' +
          l.url +
          '" target="_blank" rel="noopener noreferrer">' +
          socialIconHtml(l.net) +
          "<span>" +
          n.label +
          "</span></a>"
        );
      })
      .join("");
  }

  const heroSocials = document.getElementById("socials-container");
  if (heroSocials) {
    heroSocials.innerHTML = links
      .map(function (l) {
        const n = NETS[l.net] || NETS.github;
        return (
          '<a class="hero-social-link hero-social-link--' +
          l.net +
          '" href="' +
          l.url +
          '" target="_blank" rel="noopener noreferrer" aria-label="' +
          n.label +
          '">' +
          socialIconHtml(l.net) +
          "</a>"
        );
      })
      .join("");
  }

  const footerSocials = document.getElementById("footer-socials");
  if (footerSocials) {
    footerSocials.innerHTML = links
      .map(function (l) {
        const n = NETS[l.net] || NETS.github;
        return (
          '<a class="hero-social-link hero-social-link--' +
          l.net +
          '" href="' +
          l.url +
          '" target="_blank" rel="noopener noreferrer" aria-label="' +
          n.label +
          '">' +
          socialIconHtml(l.net) +
          "</a>"
        );
      })
      .join("");
  }
}

function csSend() {
  const name = document.getElementById("cf-name").value.trim();
  const email = document.getElementById("cf-email").value.trim();
  const subject = document.getElementById("cf-subject").value.trim();
  const msg = document.getElementById("cf-msg").value.trim();
  const errEl = document.getElementById("cs-err");

  errEl.style.display = "none";

  if (!name || !email || !msg) {
    errEl.textContent =
      "Veuillez remplir les champs obligatoires (nom, email, message).";
    errEl.style.display = "block";
    return;
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errEl.textContent = "Adresse email invalide.";
    errEl.style.display = "block";
    return;
  }

  const fullSubject = subject || "Message de " + name;
  const body = "Nom: " + name + "\nEmail: " + email + "\n\n" + msg;
  const mailto =
    "mailto:" +
    TARGET_EMAIL +
    "?subject=" +
    encodeURIComponent(fullSubject) +
    "&body=" +
    encodeURIComponent(body);

  window.location.href = mailto;

  document.getElementById("cs-form-body").style.display = "none";
  const successEl = document.getElementById("cs-success");
  successEl.hidden = false;
}

function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === "#" + entry.target.id
            );
          });
        }
      });
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
}

function initRevealAnimations() {
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  reveals.forEach(function (el) {
    observer.observe(el);
  });
}

function initTypedRole() {
  const el = document.getElementById("typed-role");
  if (!el) return;

  const roles = [
    "Software Engineer",
    "Web Developer",
    "DevOps Enthusiast",
    "Mobile Developer",
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const current = roles[roleIndex];

    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        deleting = true;
        setTimeout(tick, 2000);
        return;
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(tick, deleting ? 40 : 80);
  }

  setTimeout(tick, 800);
}

const SKILL_ICONS = {
  frontend:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
  backend:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
  tools:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  devops:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="7" rx="1"/><rect x="2" y="14" width="20" height="7" rx="1"/><path d="M6 6.5h.01M6 17.5h.01"/></svg>',
};

const SKILL_TAGS = [
  { name: "React Native", slug: "react", color: "61DAFB" },
  { name: "Flutter", slug: "flutter", color: "02569B" },
  { name: "Supabase", slug: "supabase", color: "3FCF8E" },
  { name: "MySQL", slug: "mysql", color: "4479A1" },
  { name: "Django", slug: "django", color: "092E20" },
  { name: "Python", slug: "python", color: "3776AB" },
  { name: "Docker", slug: "docker", color: "2496ED" },
  { name: "Linux", slug: "linux", color: "FCC624" },
  { name: "Git", slug: "git", color: "F05032" },
];

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    title: "Frontend",
    skills: [
      { name: "HTML", level: 90, label: "Avancé" },
      { name: "CSS", level: 88, label: "Avancé" },
      { name: "React.js", level: 68, label: "Intermédiaire" },
      { name: "JavaScript", level: 70, label: "Intermédiaire" },
    ],
  },
  {
    id: "backend",
    title: "Backend & BDD",
    skills: [
      { name: "Django", level: 75, label: "Intermédiaire" },
      { name: "Supabase", level: 72, label: "Intermédiaire" },
      { name: "Python", level: 70, label: "Intermédiaire" },
      { name: "PostgreSQL", level: 60, label: "Intermédiaire" },
      { name: "MySQL", level: 58, label: "Intermédiaire" },
    ],
  },
  {
    id: "tools",
    title: "Mobile",
    skills: [
      { name: "React Native", level: 72, label: "Intermédiaire" },
      { name: "Flutter", level: 45, label: "Débutant" },
      { name: "Supabase Auth", level: 70, label: "Intermédiaire" },
      { name: "REST API", level: 45, label: "Débutant" },
    ],
  },
  {
    id: "devops",
    title: "DevOps",
    skills: [
      { name: "Git", level: 45, label: "Débutant" },
      { name: "Docker", level: 45, label: "Débutant" },
      { name: "Linux", level: 45, label: "Débutant" },
      { name: "CI/CD", level: 40, label: "Débutant" },
    ],
  },
];

const GITHUB_URL = "https://github.com/Aboudesign";

const PROJECTS = [
  {
    title: "ASAP Online",
    type: "E-commerce",
    description:
      "Boutique web pour la marque privée ASAP — catalogue mode, collections limitées, panier, checkout et paiements mobile money (Wave, Orange, Moov) via CinetPay. FR/EN, thème clair/sombre.",
    cover: "./assets/covers/cover-asap-online.svg",
    fallback: "brand",
    tags: ["Django", "Next.js", "React", "CinetPay"],
    github: GITHUB_URL,
    linkLabel: "Voir sur GitHub",
  },
  {
    title: "Seyma Digital Campus",
    type: "LMS",
    description:
      "Plateforme LMS hybride — catalogue public, formations payantes, espace apprenant/formateur, quiz, certificats, messagerie, panier Stripe et outils RH.",
    cover: "./assets/covers/cover-lms-platform.svg",
    fallback: "lms",
    tags: ["Django", "React", "DaisyUI", "Stripe"],
    github: "https://github.com/Aboudesign/seyma-digital-campus",
    linkLabel: "Voir sur GitHub",
  },
  {
    title: "Fullstack Expenses",
    type: "Fullstack",
    description:
      "Application de suivi des dépenses — saisie, historique, statistiques et tableaux de bord. API Django REST et interface Next.js avec DaisyUI.",
    cover: "./assets/covers/cover-fullstack-expenses.svg",
    fallback: "finance",
    tags: ["Django", "Next.js", "REST API", "Recharts"],
    github: "https://github.com/Aboudesign/fullstack-expenses",
    linkLabel: "Voir sur GitHub",
  },
];

const COVER_ICONS = {
  brand:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  lms: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>',
  finance:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>',
};

function renderProjectsShowcase() {
  const showcase = document.getElementById("projects-showcase");
  if (!showcase) return;

  showcase.innerHTML = PROJECTS.map(function (project) {
    const tagsHtml = project.tags
      .map(function (tag) {
        return "<span>" + tag + "</span>";
      })
      .join("");

    return (
      '<a class="project-showcase-card" href="' +
      project.github +
      '" target="_blank" rel="noopener noreferrer">' +
      '<div class="project-showcase-card__cover project-cover--' +
      project.fallback +
      '">' +
      '<img src="' +
      project.cover +
      '" alt="Cover ' +
      project.title +
      '" loading="lazy" onerror="this.classList.add(\'is-hidden\')" />' +
      '<div class="project-showcase-card__cover-fallback" aria-hidden="true">' +
      (COVER_ICONS[project.fallback] || COVER_ICONS.web) +
      "</div>" +
      '<span class="project-showcase-card__type">' +
      project.type +
      "</span>" +
      '<div class="project-showcase-card__overlay">' +
      "<span>" +
      (project.linkLabel || "Voir sur GitHub") +
      "</span>" +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>' +
      "</div>" +
      "</div>" +
      '<div class="project-showcase-card__body">' +
      "<h3>" +
      project.title +
      "</h3>" +
      "<p>" +
      project.description +
      "</p>" +
      '<div class="project-showcase-card__tags">' +
      tagsHtml +
      "</div>" +
      "</div>" +
      "</a>"
    );
  }).join("");
}

function renderSkills() {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  grid.innerHTML = SKILL_CATEGORIES.map(function (cat) {
    const skillsHtml = cat.skills
      .map(function (skill) {
        return (
          '<li class="skill-item">' +
          '<div class="skill-item__top">' +
          '<span class="skill-name">' +
          skill.name +
          "</span>" +
          '<span class="skill-level">' +
          skill.label +
          "</span>" +
          "</div>" +
          '<div class="skill-bar" role="progressbar" aria-valuenow="' +
          skill.level +
          '" aria-valuemin="0" aria-valuemax="100" aria-label="' +
          skill.name +
          " : " +
          skill.label +
          '">' +
          '<div class="skill-bar__fill" style="--level:' +
          skill.level +
          '%"></div>' +
          "</div>" +
          "</li>"
        );
      })
      .join("");

    return (
      '<div class="skill-category">' +
      '<div class="skill-category__header">' +
      '<span class="skill-category__icon">' +
      (SKILL_ICONS[cat.id] || SKILL_ICONS.tools) +
      "</span>" +
      "<h3>" +
      cat.title +
      "</h3>" +
      "</div>" +
      '<ul class="skill-list">' +
      skillsHtml +
      "</ul>" +
      "</div>"
    );
  }).join("");
}

function initSkillBars() {
  const fills = document.querySelectorAll(".skill-bar__fill");
  if (!fills.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("animated");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  fills.forEach(function (fill) {
    observer.observe(fill);
  });
}

function renderSkillTags() {
  const container = document.getElementById("skills-tags-list");
  if (!container) return;

  container.innerHTML = SKILL_TAGS.map(function (tag) {
    return (
      '<span class="skill-tag">' +
      '<img class="skill-tag__icon" src="https://cdn.simpleicons.org/' +
      tag.slug +
      "/" +
      tag.color +
      '" alt="" aria-hidden="true" loading="lazy" />' +
      tag.name +
      "</span>"
    );
  }).join("");
}

function initHeaderScroll() {
  const header = document.getElementById("site-header");
  if (!header) return;

  function updateHeader() {
    header.classList.toggle("is-scrolled", window.scrollY > 12);
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

document.addEventListener("DOMContentLoaded", function () {
  renderSocials();
  renderSkills();
  renderSkillTags();
  renderProjectsShowcase();
  initSkillBars();
  initScrollSpy();
  initHeaderScroll();
  initRevealAnimations();
  initTypedRole();

  document.getElementById("profile").classList.add("visible");
});
