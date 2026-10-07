import { NavLinks } from './nav-client';

export const services = [
  {
    title: 'Brand & product strategy',
    description:
      'We help founders clarify the offer, sharpen messaging, and design digital experiences that are easy to trust and easy to grow.',
    accent: '01',
    tags: ['Research', 'Messaging', 'Positioning'],
  },
  {
    title: 'Web design & development',
    description:
      'High-converting websites and polished product experiences built with performance, clarity, and maintainability in mind.',
    accent: '02',
    tags: ['Next.js', 'UX', 'Conversion'],
  },
  {
    title: 'Mobile product design',
    description:
      'From UX flows to polished interfaces, we create mobile experiences that feel intuitive, premium, and practical.',
    accent: '03',
    tags: ['iOS', 'Android', 'UX'],
  },
  {
    title: 'Cyber Security',
    description:
      'Practical security support for your product and team, from risk reviews and secure architecture to ongoing hardening as you scale.',
    accent: '04',
    tags: ['Risk reviews', 'Hardening', 'Monitoring'],
  },
];

const outcomes = [
  { value: '2+', label: 'Years combined experience' },
  { value: '10+', label: 'Products launched' },
  { value: '98%', label: 'Client retention' },
];

const process = [
  ['Discover', 'We learn the market, user needs, and business goals.'],
  ['Design', 'We shape the product story and interface system.'],
  ['Build', 'We engineer the product with clear milestones and feedback.'],
  ['Launch', 'We ship, refine, and support growth after launch.'],
];

export default function Home() {
  return (
    <main className="landing-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Serendib Code home">
          <img src="/serendib-code-logo.png" alt="Serendib Code logo" className="brand-logo" />
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <NavLinks />
        </nav>

        <a className="button button-primary" href="/start-a-project">
          Start a project <span aria-hidden="true">&rarr;</span>
        </a>
      </header>

      <section className="hero" id="top">
        {/* ── LEFT: copy ──────────────────────────── */}
        <div className="hero-copy">
          <p className="eyebrow">Digital product studio - Sri Lanka</p>

          <h1 className="hero-wordmark">
            <span className="hero-word-reveal">Serendib</span>
            <span className="hero-word-reveal hero-wordmark-accent"> Code</span>
            <span className="hero-cursor" aria-hidden="true" />
          </h1>

          <p className="hero-tagline-strip">
            <span className="hero-tagline-item">BUILD</span>
            <span className="hero-tagline-dot" aria-hidden="true" />
            <span className="hero-tagline-item">INNOVATE</span>
            <span className="hero-tagline-dot" aria-hidden="true" />
            <span className="hero-tagline-item">TRANSFORM</span>
          </p>

          <p className="hero-description">
            We design and build products that feel clear, premium, and ready for real-world growth.
            Strategy, storytelling, UX, development, and security all working as one.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="/start-a-project">
              Start a project
            </a>
            <a className="button button-secondary" href="#services">
              Explore services
            </a>
          </div>

          <ul className="outcome-list" aria-label="Company outcomes">
            {outcomes.map((item) => (
              <li key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ── RIGHT: animated tech orb scene ──────── */}
        <div className="hero-visual" aria-label="Tech animation">
          <div className="hero-orb-scene" aria-hidden="true">
            {/* ── window chrome header ── */}
            <div className="scene-header">
              <div className="scene-header-dots">
                <span className="dot dot-one" />
                <span className="dot dot-two" />
                <span className="dot dot-three" />
              </div>
              <p className="scene-brand-name">
                Serendib<span>Code</span>
              </p>
              <span className="scene-live-badge">
                <span className="scene-live-dot" />
                online
              </span>
            </div>

            <div className="scene-grid" />

            {/* central orb */}
            <div className="scene-orb">
              <span className="scene-orb-icon">&lt;/&gt;</span>
              <div className="scene-orb-pulse" />
              <div className="scene-orb-pulse orb-pulse-2" />
            </div>

            {/* orbit rings */}
            <div className="scene-ring scene-ring-1"><span className="scene-dot" /></div>
            <div className="scene-ring scene-ring-2"><span className="scene-dot" /></div>
            <div className="scene-ring scene-ring-3"><span className="scene-dot" /></div>

            {/* floating code tags */}
            <div className="scene-code scene-code-1">const stack = &#39;modern&#39;;</div>
            <div className="scene-code scene-code-2">&lt;Innovation /&gt;</div>
            <div className="scene-code scene-code-3">$ deploy --prod</div>
            <div className="scene-code scene-code-4">{'// ship it 🚀'}</div>
          </div>
        </div>
      </section>



      <section className="services section" id="services">
        <div className="section-head">
          <p className="section-label">What we do</p>
          <h2>One partner for the full digital journey.</h2>
        </div>

        <div className="service-grid">
          {services.map((service) => (
            <article key={service.title} id={`service-${service.accent}`} className="service-card">
              <span className="service-accent">{service.accent}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <div className="tag-row">
                {service.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

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

      <section className="cta-panel section" id="contact">
        <div className="cta-copy">
          <p className="section-label">Start something</p>
          <h2>Let&apos;s build the next chapter of your product.</h2>
          <p>
            Tell us what you are building, what success looks like, and where you need support.
            We&apos;ll reply with a clear next step.
          </p>
          <p>Tel No: <a href="tel:+94751668705">+94 75 166 8705</a></p>
          <p>Location: Kandy, Colombo, Sri Lanka</p>
          <a href="mailto:hello@serendibcode.com">hello@serendibcode.com</a>
        </div>

        <form className="contact-form">
          <label>
            Name
            <input type="text" name="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" name="email" placeholder="you@company.com" />
          </label>
          <label className="full">
            Project details
            <textarea name="details" rows={5} placeholder="Tell us about your idea, timeline, and goals." />
          </label>
          <button type="submit" className="button button-primary">
            Send inquiry
          </button>
        </form>
      </section>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-about">
            <a className="brand" href="#top" aria-label="Serendib Code home">
              <img src="/serendib-code-logo.png" alt="Serendib Code" className="brand-logo compact-brand-logo" />
            </a>
            <p>Thoughtful digital products for ambitious businesses. We bring strategy, design, development, and security together to build your next chapter.</p>
            <a className="footer-email-button" href="mailto:hello@serendibcode.com" aria-label="Email Serendib Code">
              <span aria-hidden="true">&#9993;</span>
            </a>
          </div>

          <nav className="footer-column" aria-label="Footer services">
            <h2>Services</h2>
            <a href="#services">All services</a>
            {services.map((service) => (
              <a key={service.accent} href={`#service-${service.accent}`}>{service.title}</a>
            ))}
          </nav>

          <nav className="footer-column" aria-label="Footer company">
            <h2>Company</h2>
            <a href="#top">Our studio</a>
            <a href="#approach">Our process</a>
            <a href="/start-a-project">Start a project</a>
            <a href="#contact">Contact</a>
          </nav>

          <div className="footer-column">
            <h2>Contact</h2>
            <p>Location: Kandy, Colombo, Sri Lanka</p>
            <a href="tel:+94751668705">Tel No: +94 75 166 8705</a>
            <a href="mailto:hello@serendibcode.com">hello@serendibcode.com</a>
            <a href="#contact">Book a call <span aria-hidden="true">&rarr;</span></a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Serendib Code. All rights reserved.</p>
          <a href="#top">Back to top <span aria-hidden="true">&uarr;</span></a>
        </div>
      </footer>
    </main>
  );
}
