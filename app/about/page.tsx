import { NavLinks } from '../nav-client';
import { services } from '../page';
import Link from 'next/link';

const pillars = [
  {
    kicker: 'Strategy',
    heading: 'Clarity before code.',
    body: 'We start with the market, the user, and the business goal — so every decision has purpose before a line of code is written.',
  },
  {
    kicker: 'Design',
    heading: 'Simple ideas, polished execution.',
    body: 'Great interfaces are felt, not just seen. We create digital experiences that are elegant, fast, and immediately trustworthy.',
  },
  {
    kicker: 'Delivery',
    heading: 'Built for momentum and trust.',
    body: 'Clear milestones, transparent communication, and code that scales — we build products your team can own and grow confidently.',
  },
];

const process = [
  ['Discover', 'We learn the market, user needs, and business goals.'],
  ['Design', 'We shape the product story and interface system.'],
  ['Build', 'We engineer the product with clear milestones and feedback.'],
  ['Launch', 'We ship, refine, and support growth after launch.'],
];

const values = [
  { icon: '◈', title: 'Transparency', desc: 'No jargon, no surprises. You always know where things stand.' },
  { icon: '◎', title: 'Craftsmanship', desc: 'We care about the details that make the difference between good and great.' },
  { icon: '⬡', title: 'Partnership', desc: 'Your success is our metric. We think long-term, not just delivery.' },
];

export default function About() {
  return (
    <main className="landing-shell">
      {/* ── Topbar ────────────────────────────────── */}
      <header className="topbar">
        <Link className="brand" href="/" aria-label="Serendib Code home">
          <img src="/serendib-code-logo.png" alt="Serendib Code logo" className="brand-logo" />
        </Link>

        <nav className="main-nav" aria-label="Main navigation">
          <NavLinks />
        </nav>

        <a className="button button-primary" href="/start-a-project">
          Start a project <span aria-hidden="true">&rarr;</span>
        </a>
      </header>

      {/* ── Page hero ─────────────────────────────── */}
      <section className="about-hero">
        <p className="eyebrow">How we work</p>
        <h1 className="about-hero-title">
          Strategy, design, and delivery —<br />
          <span className="hero-wordmark-accent">all working as one.</span>
        </h1>
        <p className="about-hero-sub">
          We are a digital product studio based in Sri Lanka. We bring together the disciplines
          that most agencies split apart — so nothing gets lost in translation.
        </p>
      </section>

      {/* ── Feature strip (moved from home) ──────── */}
      <section className="feature-strip about-feature-strip">
        {pillars.map((p) => (
          <div key={p.kicker} className="feature-item feature-item-expanded">
            <span className="feature-kicker">{p.kicker}</span>
            <h3>{p.heading}</h3>
            <p className="feature-body">{p.body}</p>
          </div>
        ))}
      </section>

      {/* ── Our values ────────────────────────────── */}
      <section className="section about-values">
        <div className="section-head">
          <p className="section-label">What drives us</p>
          <h2>Built on a few strong beliefs.</h2>
        </div>
        <div className="values-grid">
          {values.map((v) => (
            <div key={v.title} className="value-card">
              <span className="value-icon">{v.icon}</span>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ───────────────────────────────── */}
      <section className="process section" id="approach">
        <div className="section-head narrower">
          <p className="section-label">How we work</p>
          <h2>Focused, transparent, and built for momentum.</h2>
        </div>

        <div className="process-grid">
          {process.map(([step, detail], index) => (
            <div key={step} className="process-step">
              <span>{`0${index + 1}`}</span>
              <h3>{step}</h3>
              <p>{detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────── */}
      <section className="cta-panel section" id="contact">
        <div className="cta-copy">
          <p className="section-label">Start something</p>
          <h2>Ready to build together?</h2>
          <p>Tell us what you are building and where you need support. We&apos;ll reply with a clear next step.</p>
          <a href="/start-a-project" className="button button-primary" style={{ marginTop: '22px' }}>
            Start a project &rarr;
          </a>
        </div>

        <div className="about-cta-stats">
          <div className="about-stat">
            <strong>2+</strong>
            <span>Years combined experience</span>
          </div>
          <div className="about-stat">
            <strong>10+</strong>
            <span>Products launched</span>
          </div>
          <div className="about-stat">
            <strong>98%</strong>
            <span>Client retention</span>
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────── */}
      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-about">
            <Link className="brand" href="/" aria-label="Serendib Code home">
              <img src="/serendib-code-logo.png" alt="Serendib Code" className="brand-logo compact-brand-logo" />
            </Link>
            <p>Thoughtful digital products for ambitious businesses.</p>
            <a className="footer-email-button" href="mailto:hello@serendibcode.com" aria-label="Email Serendib Code">
              <span aria-hidden="true">&#9993;</span>
            </a>
          </div>

          <nav className="footer-column" aria-label="Footer services">
            <h2>Services</h2>
            <Link href="/#services">All services</Link>
            {services.map((service) => (
              <Link key={service.accent} href={`/#service-${service.accent}`}>{service.title}</Link>
            ))}
          </nav>

          <nav className="footer-column" aria-label="Footer company">
            <h2>Company</h2>
            <Link href="/">Home</Link>
            <a href="/about">About &amp; process</a>
            <a href="/start-a-project">Start a project</a>
            <Link href="/#contact">Contact</Link>
          </nav>

          <div className="footer-column">
            <h2>Contact</h2>
            <p>Location: Kandy, Colombo, Sri Lanka</p>
            <a href="tel:+94751668705">Tel No: +94 75 166 8705</a>
            <a href="mailto:hello@serendibcode.com">hello@serendibcode.com</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Serendib Code. All rights reserved.</p>
          <a href="#">Back to top <span aria-hidden="true">&uarr;</span></a>
        </div>
      </footer>
    </main>
  );
}
