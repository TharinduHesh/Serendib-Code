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
          <a href="#services">Services</a>
          <a href="#approach">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="button button-primary" href="/start-a-project">
          Start a project <span aria-hidden="true">&rarr;</span>
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Digital product studio - Sri Lanka</p>
          <div className="hero-branding">
            <img src="/serendib-code-logo.png" alt="Serendib Code logo" className="hero-logo" />
          </div>
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

        <div className="hero-visual" aria-label="Studio overview preview">
          <div className="visual-card">
            <div className="visual-header">
              <span className="dot dot-one" />
              <span className="dot dot-two" />
              <span className="dot dot-three" />
            </div>

            <div className="visual-content">
              <div className="mini-panel panel-left">
                <span className="mini-label">Launch pulse</span>
                <strong>+48%</strong>
                <small>engagement uplift</small>
              </div>

              <div className="mini-panel panel-main">
                <div className="panel-header-row">
                  <span className="mini-label">Growth sprint</span>
                  <span className="panel-tag">Live</span>
                </div>

                <div className="chart-bars" aria-hidden="true">
                  <span style={{ height: '38%' }} />
                  <span style={{ height: '58%' }} />
                  <span style={{ height: '74%' }} />
                  <span style={{ height: '52%' }} />
                  <span style={{ height: '88%' }} />
                  <span style={{ height: '100%' }} />
                </div>
              </div>
            </div>

            <div className="visual-badges">
              <div className="floating-card">
                <span>Design system</span>
                <strong>01</strong>
              </div>
              <div className="floating-card">
                <span>UX design</span>
                <strong>02</strong>
              </div>
              <div className="floating-card">
                <span>Product build</span>
                <strong>03</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="feature-strip">
        <div className="feature-item">
          <span className="feature-kicker">Strategy</span>
          <h3>Clarity before code.</h3>
        </div>
        <div className="feature-item">
          <span className="feature-kicker">Design</span>
          <h3>Simple ideas, polished execution.</h3>
        </div>
        <div className="feature-item">
          <span className="feature-kicker">Delivery</span>
          <h3>Built for momentum and trust.</h3>
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
          <h2>Let's build the next chapter of your product.</h2>
          <p>
            Tell us what you are building, what success looks like, and where you need support.
            We'll reply with a clear next step.
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
