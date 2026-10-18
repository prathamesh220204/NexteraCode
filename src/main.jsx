import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import "./styles.css";

const services = [
  {
    icon: "✦",
    title: "Full Stack Web Development",
    desc: "Fast, accessible and responsive websites designed around your business goals.",
    tags: ["React", "Java", "Node.js"],
  },
  {
    icon: "▣",
    title: "Application Development",
    desc: "Intuitive web and mobile applications that make everyday work simpler.",
    tags: ["UI/UX", "API", "Mobile"],
  },
  {
    icon: "⌘",
    title: "AI / ML Solutions",
    desc: "Practical data-driven tools that help teams discover patterns and make better decisions.",
    tags: ["Automation", "Analytics", "ML"],
  },
  {
    icon: "↻",
    title: "Maintenance & Support",
    desc: "Ongoing updates, performance improvements and dependable technical support.",
    tags: ["Security", "Performance", "Care"],
  },
  {
    icon: "◈",
    title: "E-commerce Solutions",
    desc: "Smooth online shopping experiences with clear product journeys and checkout flows.",
    tags: ["Storefront", "Payments", "SEO"],
  },
  {
    icon: "⌁",
    title: "Custom Software",
    desc: "Purpose-built digital tools that fit your processes instead of forcing a new workflow.",
    tags: ["Integration", "Cloud", "Scale"],
  },
];
const projects = [
  {
    type: "Web platform",
    title: "Digital commerce experience",
    desc: "A clear, responsive storefront experience built to help customers discover products and take action.",
    image: "/image/p1.png",
  },
  {
    type: "Business solution",
    title: "Connected customer journey",
    desc: "A consistent digital experience with thoughtful navigation and accessible content.",
    image: "/image/p2.png",
  },
  {
    type: "Product design",
    title: "Modern service interface",
    desc: "A polished interface that brings useful information and key actions into one place.",
    image: "/image/p3.png",
  },
];
const faqs = [
  [
    "What services does Next Era Code offer?",
    "We offer web and application development, AI/ML solutions, e-commerce development, custom software and ongoing maintenance.",
  ],
  [
    "Can you build a responsive website?",
    "Yes. We design for mobile, tablet and desktop, with layouts that adapt to the available screen size.",
  ],
  [
    "How does a project usually begin?",
    "We start by understanding your goals, users, scope and timeline, then agree on the approach and milestones.",
  ],
  [
    "Do you support existing websites?",
    "Yes. We can help with updates, bug fixes, performance improvements and ongoing maintenance.",
  ],
  [
    "How can I request a quote?",
    "Use the contact form on this site and share a few details about your project. We can then discuss the next steps.",
  ],
];
function Header() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Home", "/"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Projects", "/projects"],
    ["Blog", "/blog"],
    ["FAQ", "/faq"],
    ["Contact", "/contact"],
  ];
  return (
    <header className="header">
      <div className="nav-wrap">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <img src="/image/logo.png" alt="" />
          <span>
            next era <b>code</b>
          </span>
        </Link>
        <button
          className="menu-btn"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
        <nav className={open ? "nav open" : "nav"}>
          {links.map(([label, path]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <Link
            className="nav-cta"
            to="/contact"
            onClick={() => setOpen(false)}
          >
            Let's talk <span>↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand footer-brand">
            <img src="/image/logo.png" alt="" />
            <span>
              next era <b>code</b>
            </span>
          </Link>
          <p>
            Thoughtful digital experiences for businesses ready for what's next.
          </p>
        </div>
        <div>
          <h4>Explore</h4>
          <Link to="/about">About us</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
        </div>
        <div>
          <h4>Get in touch</h4>
          <Link to="/contact">Start a project ↗</Link>
          <a href="mailto:hello@nexteracode.com">hello@nexteracode.com</a>
          <span className="muted">Building the future of web solutions.</span>
        </div>
      </div>
      <div className="container copyright">
        <span>
          © {new Date().getFullYear()} Next Era Code. All rights reserved.
        </span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
function Button({
  to = "/contact",
  children = "Start a project",
  secondary = false,
}) {
  return (
    <Link className={`button ${secondary ? "button-secondary" : ""}`} to={to}>
      {children}
      <span>↗</span>
    </Link>
  );
}
function Eyebrow({ children }) {
  return (
    <div className="eyebrow">
      <span /> {children}
    </div>
  );
}
function SectionTitle({ eyebrow, title, desc }) {
  return (
    <div className="section-title">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{title}</h2>
      {desc && <p>{desc}</p>}
    </div>
  );
}
function Home() {
  return (
    <>
      <section className="hero" id="top">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <Eyebrow>YOUR IDEAS, BUILT FOR WHAT'S NEXT</Eyebrow>
            <h1>
              We turn bold ideas into <em>digital reality.</em>
            </h1>
            <p>
              We design and build digital experiences that help businesses move
              forward — from the first idea to the final detail.
            </p>
            <div className="hero-actions">
              <Button>Let's build together</Button>
              <Button to="/projects" secondary>
                Explore our work
              </Button>
            </div>
            <div className="hero-note">
              <span className="avatar-stack">
                <i>N</i>
                <i>E</i>
                <i>C</i>
              </span>
              <span>
                <b>People-first. Future-ready.</b>
                <small>Technology with purpose.</small>
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-a" />
            <div className="visual-orbit orbit-b" />
            <div className="visual-center">
              <img src="/image/logo.png" alt="Next Era Code" />
              <span>Ideas into impact</span>
            </div>
            <div className="float-card card-top">
              <span className="status-dot" /> Thoughtful design <b>✓</b>
            </div>
            <div className="float-card card-bottom">
              <span className="mini-icon">⌘</span>
              <div>
                <b>Built to scale</b>
                <small>Ready for what's next</small>
              </div>
            </div>
            <div className="visual-cross cross-one">✳</div>
            <div className="visual-cross cross-two">✦</div>
          </div>
        </div>
        <div className="container hero-bottom">
          <span>WHAT WE BRING TO THE TABLE</span>
          <div>
            <b>Strategy</b>
            <i>✳</i>
            <b>Design</b>
            <i>✳</i>
            <b>Engineering</b>
            <i>✳</i>
            <b>Growth</b>
          </div>
        </div>
      </section>
      <section className="trust-strip">
        <div className="container trust-inner">
          <span>Technology that works for people</span>
          <div className="trust-logos">
            <b>React</b>
            <b>JAVA</b>
            <b>AI / ML</b>
            <b>Cloud</b>
            <b>UX + UI</b>
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionTitle
          eyebrow="WHAT WE DO"
          title={
            <>
              Digital solutions, <em>thoughtfully made.</em>
            </>
          }
          desc="From a first launch to the next stage of growth, we bring strategy, design and technology together."
        />
        <div className="service-grid">
          {services.slice(0, 4).map((s, i) => (
            <article className="service-card" key={s.title}>
              <div className="service-icon">{s.icon}</div>
              <span className="card-number">0{i + 1}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <Link to="/services" className="text-link">
                Explore service <span>↗</span>
              </Link>
            </article>
          ))}
        </div>
        <div className="section-bottom">
          <span>Have something different in mind?</span>
          <Button to="/services" secondary>
            See all services
          </Button>
        </div>
      </section>
      <section className="dark-section">
        <div className="container section">
          <SectionTitle
            eyebrow="SELECTED WORK"
            title={
              <>
                Made with purpose. <em>Built to matter.</em>
              </>
            }
            desc="A glimpse of the digital experiences and solutions we love creating."
          />
          <div className="project-grid">
            {projects.map((p, i) => (
              <article className="project-card" key={p.title}>
                <Link to="/projects" className="project-image">
                  <img src={p.image} alt={p.title} />
                  <span className="image-arrow">↗</span>
                </Link>
                <div className="project-meta">
                  {p.type}
                  <span>0{i + 1}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </article>
            ))}
          </div>
          <div className="center-action">
            <Button to="/projects" secondary>
              View our projects
            </Button>
          </div>
        </div>
      </section>
      <section className="section container split-section">
        <div className="about-image">
          <img
            src="/image/aboutus.jpg"
            alt="Team collaborating on digital solutions"
          />
          <div className="image-caption">
            <span>✳</span>
            <div>
              <b>Curiosity drives us.</b>
              <small>Good work starts with good questions.</small>
            </div>
          </div>
        </div>
        <div className="split-copy">
          <Eyebrow>WHO WE ARE</Eyebrow>
          <h2>
            We believe better technology starts with{" "}
            <em>understanding people.</em>
          </h2>
          <p>
            At Next Era Code, we bring creativity and practical engineering
            together to solve real problems. We listen first, work
            collaboratively and build with the bigger picture in mind.
          </p>
          <div className="value-list">
            <div>
              <b>01</b>
              <span>
                <strong>Purpose before pixels</strong>
                <small>Every decision starts with the user and the goal.</small>
              </span>
            </div>
            <div>
              <b>02</b>
              <span>
                <strong>Clarity at every step</strong>
                <small>Open communication from planning to delivery.</small>
              </span>
            </div>
            <div>
              <b>03</b>
              <span>
                <strong>Built for tomorrow</strong>
                <small>Flexible solutions that can grow with you.</small>
              </span>
            </div>
          </div>
          <Button to="/about" secondary>
            More about us
          </Button>
        </div>
      </section>
      <section className="cta-section">
        <div className="container cta-inner">
          <div>
            <Eyebrow>HAVE A PROJECT IN MIND?</Eyebrow>
            <h2>
              Let's make something <em>meaningful.</em>
            </h2>
            <p>
              Tell us what you're imagining. We'll help you find the right way
              to build it.
            </p>
          </div>
          <Button>Tell us about it</Button>
          <span className="cta-star">✳</span>
        </div>
      </section>
    </>
  );
}
function PageHero({ eyebrow, title, desc }) {
  return (
    <section className="page-hero">
      <div className="container page-hero-inner">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </section>
  );
}
function About() {
  const [activeValue, setActiveValue] = useState("Mission");
  const story = {
    Mission: {
      title: "Make technology genuinely useful.",
      text: "We turn business needs into clear, accessible digital experiences. We begin with the people using the product and the problem it needs to solve.",
    },
    Vision: {
      title: "Build for what comes next.",
      text: "We aim to create digital products that stay useful as teams, customers and technology change — with thoughtful design and room to grow.",
    },
    Approach: {
      title: "Listen first. Build together.",
      text: "We keep the process collaborative: align on goals, make the work visible, share feedback early and improve based on what we learn.",
    },
  };
  const [expanded, setExpanded] = useState(-1);
  const values = [
    [
      "✦",
      "Stay curious",
      "We keep asking questions, learning and looking for better ways to solve a problem.",
    ],
    [
      "◎",
      "Work together",
      "The best outcomes come from listening carefully and building with people, not just for them.",
    ],
    [
      "↗",
      "Make it useful",
      "We focus on clear experiences, reliable engineering and outcomes that matter.",
    ],
  ];
  return (
    <>
      <PageHero
        eyebrow="A LITTLE ABOUT US"
        title={
          <>
            Good people. Clear thinking. <em>Better digital.</em>
          </>
        }
        desc="We're a digital solutions team that believes the best work happens when people, purpose and technology come together."
      />
      <section className="section container split-section about-page">
        <div className="about-image">
          <img src="/image/story.jpg" alt="Our story" />
          <div className="image-caption">
            <span>✳</span>
            <div>
              <b>Curiosity drives us.</b>
              <small>Good work starts with good questions.</small>
            </div>
          </div>
        </div>
        <div className="split-copy">
          <Eyebrow>OUR STORY</Eyebrow>
          <h2>
            Built around a simple idea: make technology <em>work better.</em>
          </h2>
          <p>
            Every business has a story and a challenge worth solving. Our role
            is to understand both, then shape a digital solution that feels
            useful, intuitive and ready to grow.
          </p>
          <p>
            We value thoughtful planning, honest collaboration and the small
            details that make a big difference to the people using what we
            build.
          </p>
          <div className="about-tabs" role="tablist" aria-label="Our purpose">
            {Object.keys(story).map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeValue === tab}
                className={activeValue === tab ? "active" : ""}
                onClick={() => setActiveValue(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="about-tab-panel" role="tabpanel">
            <h3>{story[activeValue].title}</h3>
            <p>{story[activeValue].text}</p>
          </div>
          <Button>Work with us</Button>
        </div>
      </section>
      <section className="soft-section">
        <div className="container section">
          <SectionTitle
            eyebrow="WHAT GUIDES US"
            title={
              <>
                The principles behind <em>the work.</em>
              </>
            }
            desc="Select a principle to learn more about how it shapes the way we work."
          />
          <div className="three-grid">
            {values.map((x, i) => (
              <button
                type="button"
                className={`value-card value-card-button ${expanded === i ? "selected" : ""}`}
                key={x[1]}
                onClick={() => setExpanded(expanded === i ? -1 : i)}
                aria-expanded={expanded === i}
              >
                <span>{x[0]}</span>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
                {expanded === i && (
                  <small className="value-extra">
                    In practice: clear goals, open feedback and decisions
                    focused on the people who use the product.
                  </small>
                )}
                <b className="value-toggle">{expanded === i ? "−" : "+"}</b>
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="section container">
        <SectionTitle
          eyebrow="HOW WE THINK"
          title={
            <>
              Progress is a process, <em>not a finish line.</em>
            </>
          }
        />
        <div className="stats-grid">
          <div>
            <strong>01</strong>
            <span>People-first mindset</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Curiosity in every project</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Built for real-world use</span>
          </div>
          <div>
            <strong>∞</strong>
            <span>Room to keep improving</span>
          </div>
        </div>
      </section>
    </>
  );
}
function Services() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  const categories = [
    "All",
    "Development",
    "Design & Commerce",
    "AI & Support",
  ];
  const serviceDetails = {
    "Full Stack Web Development":
      "Responsive websites and web applications built around your users, content and business goals. We can help shape the experience from interface to backend integration.",
    "Application Development":
      "Practical application experiences with clear user flows, thoughtful interface design and room to grow as needs evolve.",
    "AI / ML Solutions":
      "Data-driven prototypes and automation ideas that help teams explore patterns, reduce repetitive work and make informed decisions.",
    "Maintenance & Support":
      "Ongoing updates, bug fixing, security-minded improvements and performance checks to keep your digital experience reliable.",
    "E-commerce Solutions":
      "Product discovery, responsive storefronts and streamlined shopping journeys designed to make buying feel simple.",
    "Custom Software":
      "Purpose-built digital tools designed around your workflow, integrations and operational needs.",
  };
  const categorized = services.map((s) => ({
    ...s,
    category:
      s.title === "AI / ML Solutions" || s.title === "Maintenance & Support"
        ? "AI & Support"
        : s.title === "E-commerce Solutions" ||
            s.title === "Application Development"
          ? "Design & Commerce"
          : "Development",
  }));
  const filtered = categorized.filter(
    (s) =>
      (category === "All" || s.category === category) &&
      `${s.title} ${s.desc} ${s.tags.join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase().trim()),
  );
  return (
    <>
      <PageHero
        eyebrow="OUR SERVICES"
        title={
          <>
            The right tools for your <em>next chapter.</em>
          </>
        }
        desc="Explore our services, find the right fit for your needs, and open any service to learn more."
      />
      <section className="section container">
        <div className="service-controls">
          <label className="service-search">
            <span>⌕</span>
            <input
              aria-label="Search services"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services or technologies..."
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </label>
          <div
            className="filter-chips"
            role="group"
            aria-label="Filter services"
          >
            {categories.map((c) => (
              <button
                type="button"
                key={c}
                onClick={() => setCategory(c)}
                className={category === c ? "active" : ""}
                aria-pressed={category === c}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="results-count">
            Showing <b>{filtered.length}</b> of {services.length} services
          </p>
        </div>
        {filtered.length ? (
          <div className="service-grid service-grid-all">
            {filtered.map((s, i) => (
              <article
                className="service-card service-card-interactive"
                key={s.title}
              >
                <div className="service-icon">{s.icon}</div>
                <span className="card-number">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="service-category">{s.category}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="tag-row">
                  {s.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <button
                  type="button"
                  className="text-link"
                  onClick={() => setSelected(s)}
                >
                  Explore service <span>↗</span>
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>⌕</span>
            <h3>No matching services</h3>
            <p>Try another keyword or clear the category filter.</p>
            <button
              className="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Clear filters ↗
            </button>
          </div>
        )}
      </section>
      <section className="soft-section">
        <div className="container section">
          <SectionTitle
            eyebrow="OUR APPROACH"
            title={
              <>
                Clear steps. <em>Shared direction.</em>
              </>
            }
            desc="A collaborative process that keeps goals and progress visible."
          />
          <div className="steps-grid">
            {[
              [
                "01",
                "Discover",
                "We learn about your users, goals and constraints.",
              ],
              [
                "02",
                "Plan",
                "We map the right scope, priorities and delivery approach.",
              ],
              ["03", "Build", "We design, develop and test with care."],
              [
                "04",
                "Improve",
                "We learn from feedback and keep making it better.",
              ],
            ].map((s) => (
              <div className="step" key={s[0]}>
                <span>{s[0]}</span>
                <h3>{s[1]}</h3>
                <p>{s[2]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selected && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          <section
            className="detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close service details"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            <div className="service-icon">{selected.icon}</div>
            <Eyebrow>{selected.category}</Eyebrow>
            <h2 id="service-modal-title">{selected.title}</h2>
            <p>{serviceDetails[selected.title]}</p>
            <div className="tag-row">
              {selected.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="modal-actions">
              <Button>Discuss this service</Button>
              <button
                type="button"
                className="button button-secondary"
                onClick={() => setSelected(null)}
              >
                Keep exploring
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
function Projects() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(null);
  const projectItems = projects.map((p, i) => ({
    ...p,
    category: ["Web", "Business", "Design"][i],
    tools: [
      ["React", "Responsive UI", "E-commerce"],
      ["UX/UI", "Integration", "Web"],
      ["UI/UX", "Frontend", "Accessibility"],
    ][i],
    detail: [
      "A responsive digital storefront concept focused on product discovery, clear navigation and an easy path from browsing to action.",
      "A connected customer experience concept that brings important information and actions together in a consistent interface.",
      "A service interface concept focused on clarity, accessible content and presenting useful information without unnecessary friction.",
    ][i],
  }));
  const filters = ["All", "Web", "Business", "Design"];
  const filtered = projectItems.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      `${p.title} ${p.type} ${p.desc} ${p.tools.join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase().trim()),
  );
  return (
    <>
      <PageHero
        eyebrow="SELECTED WORK"
        title={
          <>
            Ideas made real. <em>Experiences made useful.</em>
          </>
        }
        desc="Explore project concepts, filter by focus area, or open a project to see more details."
      />
      <section className="section container">
        <div className="project-controls">
          <label className="service-search">
            <span>⌕</span>
            <input
              aria-label="Search projects"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects or technologies..."
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </label>
          <div
            className="filter-chips"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((c) => (
              <button
                type="button"
                key={c}
                onClick={() => setCategory(c)}
                className={category === c ? "active" : ""}
                aria-pressed={category === c}
              >
                {c}
              </button>
            ))}
          </div>
          <p className="results-count">
            {filtered.length} {filtered.length === 1 ? "project" : "projects"}{" "}
            found
          </p>
        </div>
        {filtered.length ? (
          <div className="project-grid project-grid-page">
            {filtered.map((p, i) => (
              <article
                className="project-card project-card-clickable"
                key={p.title}
              >
                <button
                  type="button"
                  className="project-image project-image-button"
                  onClick={() => setSelected(p)}
                  aria-label={`View details for ${p.title}`}
                >
                  <img src={p.image} alt={p.title} />
                  <span className="image-arrow">↗</span>
                </button>
                <div className="project-meta">
                  {p.type}
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <div className="tag-row">
                  {p.tools.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <button
                  type="button"
                  className="text-link"
                  onClick={() => setSelected(p)}
                >
                  View project details <span>↗</span>
                </button>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>⌕</span>
            <h3>No projects found</h3>
            <p>Try a different search or reset the filters.</p>
            <button
              className="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Clear filters ↗
            </button>
          </div>
        )}
        <div className="project-note">
          <span className="service-icon">✳</span>
          <div>
            <h3>Your project could be next.</h3>
            <p>
              Have a challenge in mind? Let's talk about what you want to build.
            </p>
          </div>
          <Button>Start a conversation</Button>
        </div>
      </section>
      {selected && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          <section
            className="detail-modal project-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close project details"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            <img
              className="modal-project-image"
              src={selected.image}
              alt={selected.title}
            />
            <Eyebrow>
              {selected.type} · {selected.category}
            </Eyebrow>
            <h2 id="project-modal-title">{selected.title}</h2>
            <p>{selected.detail}</p>
            <div className="tag-row">
              {selected.tools.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <div className="modal-actions">
              <Button>Discuss a similar project</Button>
              <button
                type="button"
                className="button button-secondary"
                onClick={() => setSelected(null)}
              >
                Back to projects
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
function Blog() {
  const posts = [
    {
      category: "WEB DESIGN",
      title: "Modern web design trends worth paying attention to",
      desc: "A good website balances visual character with clarity, speed and accessibility.",
      body: "Strong web design is not just about following trends. It is about making content easy to understand, helping people find their next step, and keeping the experience fast and accessible. Start with clear hierarchy, readable type, thoughtful spacing and useful feedback for every action.",
      icon: "✳",
      read: "5 MIN READ",
    },
    {
      category: "DEVELOPMENT",
      title: "A practical guide to responsive design",
      desc: "Learn why flexible layouts and thoughtful breakpoints matter across devices.",
      body: "Responsive design begins with flexible layouts, content-first breakpoints and controls that work with touch as well as a mouse. Test real content at different widths, keep tap targets comfortable, and avoid locking important content to fixed dimensions.",
      icon: "⌘",
      read: "4 MIN READ",
    },
    {
      category: "TOOLS & WORKFLOW",
      title: "Version control with Git: a team essential",
      desc: "A look at how version control helps teams collaborate and ship changes confidently.",
      body: "Git gives a team a shared history of its code. Small commits, descriptive messages, feature branches and regular integration make changes easier to review and bugs easier to trace. Keep the main branch stable and use pull requests to share context.",
      icon: "↗",
      read: "6 MIN READ",
    },
    {
      category: "CLIENT STORIES",
      title: "Transforming an online customer journey",
      desc: "How a considered digital experience can make it easier for customers to find what they need.",
      body: "A better customer journey removes unnecessary steps. Understand what visitors came to do, make navigation predictable, explain products in plain language and provide clear calls to action. Use feedback and analytics to find points where people get stuck.",
      icon: "◎",
      read: "5 MIN READ",
    },
    {
      category: "ENGINEERING",
      title: "Choosing the right tools for your next project",
      desc: "Start with the problem, the people and the constraints — not just the latest trend.",
      body: "Choose a technology stack based on the problem, team skills, delivery timeline, maintenance needs and expected scale. A familiar, well-supported tool that solves the real requirement is often better than adding complexity for its own sake.",
      icon: "✦",
      read: "7 MIN READ",
    },
    {
      category: "PRODUCT THINKING",
      title: "Small details that make interfaces feel better",
      desc: "Helpful feedback, readable content and clear actions add up to a better experience.",
      body: "The details matter: show a loading state, confirm a successful action, explain validation errors next to the field and make keyboard focus visible. These small moments reduce uncertainty and help users feel in control.",
      icon: "◇",
      read: "3 MIN READ",
    },
  ];
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  const categories = ["All", ...new Set(posts.map((p) => p.category))];
  const filtered = posts.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      `${p.title} ${p.desc} ${p.category}`
        .toLowerCase()
        .includes(query.toLowerCase().trim()),
  );
  return (
    <>
      <PageHero
        eyebrow="IDEAS & INSIGHTS"
        title={
          <>
            Notes on building better <em>digital experiences.</em>
          </>
        }
        desc="Search practical notes on design, development, tools and the details that make digital work more useful."
      />
      <section className="section container">
        <div className="blog-controls">
          <label className="service-search">
            <span>⌕</span>
            <input
              aria-label="Search articles"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles or topics..."
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </label>
          <div
            className="filter-chips"
            role="group"
            aria-label="Filter articles"
          >
            {categories.map((c) => (
              <button
                type="button"
                key={c}
                onClick={() => setCategory(c)}
                className={category === c ? "active" : ""}
                aria-pressed={category === c}
              >
                {c === "All" ? "All topics" : c}
              </button>
            ))}
          </div>
          <p className="results-count">
            {filtered.length} {filtered.length === 1 ? "article" : "articles"}{" "}
            found
          </p>
        </div>
        {filtered.length ? (
          <div className="blog-grid">
            {filtered.map((p) => (
              <article className="blog-card" key={p.title}>
                <button
                  type="button"
                  className="blog-art blog-art-button"
                  onClick={() => setSelected(p)}
                  aria-label={`Read ${p.title}`}
                >
                  <span>{p.icon}</span>
                  <small>NEC / JOURNAL</small>
                  <b className="blog-open-label">Read article ↗</b>
                </button>
                <div className="blog-content">
                  <div className="project-meta">
                    {p.category}
                    <span>{p.read}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <button
                    type="button"
                    className="text-link"
                    onClick={() => setSelected(p)}
                  >
                    Read article <span>↗</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <span>⌕</span>
            <h3>No articles found</h3>
            <p>Try another keyword or reset the topic filter.</p>
            <button
              className="button"
              onClick={() => {
                setQuery("");
                setCategory("All");
              }}
            >
              Clear filters ↗
            </button>
          </div>
        )}
      </section>
      {selected && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setSelected(null);
          }}
        >
          <section
            className="detail-modal article-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="article-modal-title"
          >
            <button
              type="button"
              className="modal-close"
              aria-label="Close article"
              onClick={() => setSelected(null)}
            >
              ×
            </button>
            <Eyebrow>
              {selected.category} · {selected.read}
            </Eyebrow>
            <h2 id="article-modal-title">{selected.title}</h2>
            <p className="article-lead">{selected.desc}</p>
            <p>{selected.body}</p>
            <div className="modal-actions">
              <Link
                className="button"
                to="/contact"
                onClick={() => setSelected(null)}
              >
                Discuss this with us <span>↗</span>
              </Link>
              <button
                type="button"
                className="button button-secondary"
                onClick={() => setSelected(null)}
              >
                Back to articles
              </button>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
function FAQ() {
  const [active, setActive] = useState(0);
  return (
    <>
      <PageHero
        eyebrow="FREQUENTLY ASKED QUESTIONS"
        title={
          <>
            A few things you might <em>want to know.</em>
          </>
        }
        desc="Here are answers to common questions about our services and how we work. Still curious? Just ask."
      />
      <section className="section container faq-layout">
        <div className="faq-aside">
          <Eyebrow>NEED A HAND?</Eyebrow>
          <h2>
            Let's clear things <em>up.</em>
          </h2>
          <p>
            Every project is different. If you don't see your question here,
            we're happy to talk it through.
          </p>
          <Button>Contact us</Button>
        </div>
        <div className="faq-list">
          {faqs.map(([q, a], i) => (
            <article
              className={`faq-item ${active === i ? "active" : ""}`}
              key={q}
            >
              <button
                onClick={() => setActive(active === i ? -1 : i)}
                aria-expanded={active === i}
              >
                <span>{q}</span>
                <b>{active === i ? "−" : "+"}</b>
              </button>
              {active === i && <p>{a}</p>}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Web development",
    message: "",
  });
  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function submit(e) {
    e.preventDefault();
    const submission = { ...form, submittedAt: new Date().toISOString() };
    try {
      const previous = JSON.parse(
        localStorage.getItem("nextera-contact-submissions") || "[]",
      );
      localStorage.setItem(
        "nextera-contact-submissions",
        JSON.stringify([...previous, submission]),
      );
      setSent(true);
    } catch (error) {
      setSent("storage-error");
    }
  }
  return (
    <>
      <PageHero
        eyebrow="LET'S TALK"
        title={
          <>
            Have a good idea? <em>Let's get it moving.</em>
          </>
        }
        desc="Tell us a little about what you're working on. We'll take it from there, one thoughtful step at a time."
      />
      <section className="section container contact-layout">
        <div className="contact-info">
          <Eyebrow>START A CONVERSATION</Eyebrow>
          <h2>
            Big idea or small question — <em>we're listening.</em>
          </h2>
          <p>
            Share your goals, challenges or the thing you wish worked a little
            better. We'll get back to you about the next step.
          </p>
          <div className="contact-detail">
            <span>✉</span>
            <div>
              <small>EMAIL US</small>
              <a href="mailto:hello@nexteracode.com">hello@nexteracode.com</a>
            </div>
          </div>
          <div className="contact-detail">
            <span>↗</span>
            <div>
              <small>WHAT HAPPENS NEXT?</small>
              <b>
                We'll review your message and discuss a practical way forward.
              </b>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={submit}>
          {sent === true ? (
            <div className="success-state">
              <span>✓</span>
              <h3>Thanks for reaching out!</h3>
              <p>
                Your message has been saved in this browser for this demo. To
                receive messages from real visitors, connect the form to a
                backend or form service.
              </p>
              <button
                className="button"
                type="button"
                onClick={() => {
                  setSent(false);
                  setForm({
                    name: "",
                    email: "",
                    service: "Web development",
                    message: "",
                  });
                }}
              >
                Send another message ↗
              </button>
            </div>
          ) : sent === "storage-error" ? (
            <div className="success-state">
              <span>!</span>
              <h3>Message not saved</h3>
              <p>
                Your browser could not save this demo submission. Please try
                again or email hello@nexteracode.com.
              </p>
              <button
                className="button"
                type="button"
                onClick={() => setSent(false)}
              >
                Try again ↗
              </button>
            </div>
          ) : (
            <>
              <div className="form-heading">
                <h3>Tell us about your project</h3>
                <p>Fields marked with * are required.</p>
              </div>
              <label>
                Your name *
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  required
                  placeholder="What should we call you?"
                />
              </label>
              <label>
                Email address *
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={update}
                  required
                  placeholder="you@example.com"
                />
              </label>
              <label>
                What do you need help with?
                <select name="service" value={form.service} onChange={update}>
                  <option>Web development</option>
                  <option>Application development</option>
                  <option>AI / ML solution</option>
                  <option>E-commerce</option>
                  <option>Maintenance & support</option>
                  <option>Something else</option>
                </select>
              </label>
              <label>
                Tell us a little more *
                <textarea
                  name="message"
                  value={form.message}
                  onChange={update}
                  required
                  rows="4"
                  placeholder="A few details about your goals, timeline or challenge..."
                />
              </label>
              <button className="button" type="submit">
                Send your message <span>↗</span>
              </button>
              <small className="form-note">
                This demo form doesn't send data to a server yet.
              </small>
            </>
          )}
        </form>
      </section>
    </>
  );
}
function NotFound() {
  return (
    <PageHero
      eyebrow="404"
      title={
        <>
          This page took a <em>different turn.</em>
        </>
      }
      desc="The page you're looking for may have moved. Let's get you back on track."
    />
  );
}
function App() {
  return (
    <BrowserRouter>
      <div id="top">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
