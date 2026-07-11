/* =============================================
   DATA — Edit these arrays to update the site
   ============================================= */

const PROJECTS = [
  {
    title: "Personal Website",
    description:
      "My personal website highlighting my experiences, skills, values, and achievements, providing an overview of who I am, the work I have done, and what I am passionate about.",
    tags: ["HTML", "CSS", "JavaScript"],
    featured: true,
    links: [
      { label: "GitHub", href: "https://github.com/rajvirrathore" },
    ],
  },
  {
    title: "Facebook Marketplace Scraper",
    description:
      "Built a Python based Facebook Marketplace scraper that automates the collection of motorbike. Filtering listings by criteria and extracting key vehicle information, then cleaning the scraped data, and exporting the results to a structured CSV file.",
    tags: ["Python", "Selenium", "BeautifulSoup", "Splinter"],
    featured: false,
    links: [
      { label: "GitHub", href: "https://github.com/rajvirrathore" },
    ],
  },
  {
    title: "Work in Progress",
    description:
      "...",
    tags: [],
    featured: false,
    links: [
      { label: "GitHub", href: "https://github.com/rajvirrathore" },
    ],
  },
];

const SKILLS = [
  { name: "Python",  level: "Advanced",      pct: 0.90, icon: "🐍" },
  { name: "Java",    level: "Proficient",     pct: 0.80, icon: "☕" },
  { name: "C++",     level: "Proficient",     pct: 0.75, icon: "⚙️" },
  { name: "SQL",     level: "Advanced",       pct: 0.85, icon: "🗄️" },
  { name: "R",       level: "Intermediate",   pct: 0.65, icon: "📊" },
  { name: "HTML",    level: "Proficient",     pct: 0.78, icon: "🌐" },
  { name: "CSS",     level: "Proficient",     pct: 0.75, icon: "🎨" },
];

const HOBBIES = [
  "Gym", "Badminton", "Chess", "Piano",
  "Video Games", "Volleyball", "Swimming", "Running",
];

const LEARNING = [
  {
    status: "Active",
    title: "Advanced Machine Learning",
    desc: "Exploring neural network architectures and building predictive models from scratch.",
  },
  {
    status: "Active",
    title: "Data Science Pipelines",
    desc: "End-to-end workflows: data cleaning, statistical analysis, and publication-quality visualisation.",
  },
  {
    status: "Active",
    title: "Algorithmic Efficiency",
    desc: "Optimising time and space complexity for large-scale dataset processing.",
  },
];

const GOALS = [
  {
    status: "Planned",
    title: "Business Logistics AI",
    desc: "Predictive models for supply chain optimisation and demand forecasting for local retail and food businesses.",
  },
  {
    status: "Planned",
    title: "Sports Analytics",
    desc: "Leveraging data science to track and optimise high-intensity endurance and strength training schedules.",
  },
  {
    status: "Planned",
    title: "Open Source ML",
    desc: "Contributing to accessible machine learning libraries that lower the barrier for entry-level developers.",
  },
];

/* =============================================
   DOM RENDERING
   ============================================= */

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  PROJECTS.forEach((p, i) => {
    const card = document.createElement("article");
    card.className = "project-card reveal";
    card.style.transitionDelay = `${i * 0.1}s`;

    const linksHTML = p.links
      .map(
        (l) =>
          `<a href="${l.href}" target="_blank" rel="noopener noreferrer" class="project-link">
            ${l.label} <span class="arrow">↗</span>
          </a>`
      )
      .join("");

    const tagsHTML = p.tags
      .map((t) => `<span class="project-tag">${t}</span>`)
      .join("");

    card.innerHTML = `
      <div class="project-meta">
        <span class="project-index">${String(i + 1).padStart(2, "0")}</span>
        ${p.featured ? '<span class="project-featured">Featured</span>' : ""}
      </div>
      <h3 class="project-title">${p.title}</h3>
      <p class="project-desc">${p.description}</p>
      <div class="project-tags">${tagsHTML}</div>
      <div class="project-links">${linksHTML}</div>
    `;
    grid.appendChild(card);
  });
}

function renderSkills() {
  const track = document.getElementById("skillsTrack");
  const list  = document.getElementById("skillsList");
  if (!track || !list) return;

  // Marquee — duplicate for seamless loop
  const pills = SKILLS.map(
    (s) =>
      `<div class="skill-pill"><span class="skill-icon">${s.icon}</span>${s.name}</div>`
  ).join("");
  track.innerHTML = pills + pills; // doubled for infinite scroll

  // Grid detail view
  SKILLS.forEach((s, i) => {
    const item = document.createElement("div");
    item.className = "skill-item reveal";
    item.style.transitionDelay = `${i * 0.06}s`;
    item.innerHTML = `
      <div class="skill-name">${s.name}</div>
      <div class="skill-level">${s.level}</div>
      <div class="skill-bar">
        <div class="skill-bar-fill" style="--pct: ${s.pct}"></div>
      </div>
    `;
    list.appendChild(item);
  });
}

function renderHobbies() {
  const grid = document.getElementById("hobbiesGrid");
  if (!grid) return;
  HOBBIES.forEach((h) => {
    const el = document.createElement("span");
    el.className = "hobby-tag";
    el.textContent = h;
    grid.appendChild(el);
  });
}

function renderRoadmap() {
  const learningList = document.getElementById("learningList");
  const goalsList    = document.getElementById("goalsList");
  if (!learningList || !goalsList) return;

  function makeItem(item, i) {
    const li = document.createElement("li");
    li.className = "roadmap-item";
    li.style.transitionDelay = `${i * 0.1}s`;
    li.innerHTML = `
      <div class="roadmap-item-status">
        <span class="status-dot"></span>${item.status}
      </div>
      <div class="roadmap-item-title">${item.title}</div>
      <div class="roadmap-item-desc">${item.desc}</div>
    `;
    return li;
  }

  LEARNING.forEach((item, i) => learningList.appendChild(makeItem(item, i)));
  GOALS.forEach((item, i) => goalsList.appendChild(makeItem(item, i)));
}

/* =============================================
   KINETIC HERO — variable-font weight morphing
   ============================================= */

function initKineticHero() {
  const nameEl = document.getElementById("heroName");
  if (!nameEl) return;

  const lines = nameEl.querySelectorAll(".hero-name-line");

  // Split each line into individual character spans
  lines.forEach((line) => {
    const text = line.dataset.text;
    line.innerHTML = [...text]
      .map((ch) => `<span class="char" data-ch="${ch}">${ch}</span>`)
      .join("");
  });

  const allChars = nameEl.querySelectorAll(".char");
  const WEIGHT_MIN  = 100;
  const WEIGHT_MAX  = 900;
  const RADIUS      = 260; // px influence radius
  const cursorLabel = document.getElementById("heroCursorLabel");
  let hasInteracted = false;

  // Rect cache — update on resize
  let charRects = [];
  function cacheRects() {
    charRects = [...allChars].map((ch) => {
      const r = ch.getBoundingClientRect();
      return { el: ch, cx: r.left + r.width / 2, cy: r.top + r.height / 2 };
    });
  }
  cacheRects();

  window.addEventListener("resize", debounce(cacheRects, 150));

  // Mouse move on hero
  const hero = document.querySelector(".hero");
  hero.addEventListener("mousemove", (e) => {
    if (!hasInteracted) {
      hasInteracted = true;
      if (cursorLabel) cursorLabel.classList.add("hidden");
    }

    const mx = e.clientX;
    const my = e.clientY;

    charRects.forEach(({ el, cx, cy }) => {
      const dx   = mx - cx;
      const dy   = my - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      // Closer → lighter (thin), farther → heavier (bold)
      const t      = Math.max(0, 1 - dist / RADIUS);
      const weight = Math.round(WEIGHT_MAX - t * (WEIGHT_MAX - WEIGHT_MIN));
      el.style.fontVariationSettings = `'wght' ${weight}`;

      // Subtle colour shift — near chars go to accent
      const brightness = Math.round(100 + t * 155); // 100–255
      el.style.color = t > 0.55
        ? `var(--accent)`
        : `rgb(${brightness + 95}, ${brightness + 83}, ${brightness + 72})`;
    });
  });

  hero.addEventListener("mouseleave", () => {
    allChars.forEach((el) => {
      el.style.fontVariationSettings = "'wght' 900";
      el.style.color = "";
    });
  });

  // Touch support — treat single touch as cursor
  hero.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    hero.dispatchEvent(new MouseEvent("mousemove", { clientX: t.clientX, clientY: t.clientY }));
  }, { passive: true });
}

/* =============================================
   SCROLL REVEALS
   ============================================= */

function initScrollReveals() {
  const targets = document.querySelectorAll(
    ".reveal, .project-card, .skill-item, .roadmap-item"
  );

  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  targets.forEach((el) => obs.observe(el));
}

/* =============================================
   NAV — scroll state + hamburger
   ============================================= */

function initNav() {
  const nav     = document.getElementById("nav");
  const burger  = document.getElementById("navHamburger");
  const links   = document.querySelector(".nav-links");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
  }, { passive: true });

  if (burger && links) {
    burger.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      burger.classList.toggle("open", open);
      document.body.style.overflow = open ? "hidden" : "";
    });

    // Close menu when a link is clicked
    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        links.classList.remove("open");
        burger.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }
}

/* =============================================
   UTILITY
   ============================================= */

function debounce(fn, ms) {
  let id;
  return (...args) => {
    clearTimeout(id);
    id = setTimeout(() => fn(...args), ms);
  };
}

/* =============================================
   INIT
   ============================================= */

document.addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderSkills();
  renderHobbies();
  renderRoadmap();

  // Small delay so DOM is painted before we cache rects
  requestAnimationFrame(() => {
    initKineticHero();
    initScrollReveals();
    initNav();
  });
});
