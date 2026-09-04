'use client';

import { useEffect, useState } from 'react';

const services = [
  { number: '01', title: 'Web development', short: 'Fast, expressive websites and scalable web platforms.', detail: 'From conversion-focused company sites to complex web applications, we engineer responsive experiences that stay quick, accessible, and easy to grow.', tags: ['Next.js', 'E-commerce', 'Web apps'], glyph: '</>' },
  { number: '02', title: 'UI/UX design', short: 'Useful interfaces with a sharp, memorable point of view.', detail: 'We turn business goals and user needs into intuitive flows, clear systems, and polished interfaces your customers will enjoy returning to.', tags: ['Research', 'Prototyping', 'Design systems'], glyph: 'Aa' },
  { number: '03', title: 'Mobile apps', short: 'Mobile products that feel right in every hand.', detail: 'We design and build reliable iOS and Android experiences, from the first interaction model to launch-ready engineering and iteration.', tags: ['iOS', 'Android', 'Cross-platform'], glyph: '[]' },
  { number: '04', title: 'Cyber security', short: 'Practical protection, built into the product.', detail: 'We identify risk, strengthen applications, and help teams ship with confidence through focused assessments and security-minded implementation.', tags: ['Audits', 'Hardening', 'Secure delivery'], glyph: '//' },
];

const process = [
  ['Discover', 'We listen, question, and map the real opportunity.'],
  ['Design', 'We shape the system and make the experience tangible.'],
  ['Build', 'We engineer, test, and refine with visible progress.'],
  ['Launch', 'We ship cleanly and stay close for what comes next.'],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [sent, setSent] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const chooseService = (index: number) => {
    setActiveService(index);
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <a className="brand" href="#top" aria-label="Serendib Code home"><span className="brand-mark">S</span><span>Serendib Code</span></a>
        <nav className={menuOpen ? 'nav-open' : ''} aria-label="Main navigation">
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a><a href="#studio" onClick={() => setMenuOpen(false)}>Studio</a>
          <a className="nav-cta" href="#contact" onClick={() => setMenuOpen(false)}>Start a project <span>↗</span></a>
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span /><span /></button>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow"><span /> Digital product studio · Sri Lanka</p>
          <h1>We build digital<br />ideas that <em>move.</em></h1>
          <p className="hero-intro">Strategy, design, engineering, and security for ambitious businesses ready to make their next move count.</p>
          <div className="hero-actions"><a className="button button-primary" href="#contact">Build with us <span>↗</span></a><a className="text-link" href="#services">Explore our services <span>↓</span></a></div>
        </div>
        <div className="hero-visual" aria-label="Serendib Code logo">
          <img src="/serendib-code-logo.png" alt="Serendib Code glowing S logo" />
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <p className="signal signal-a">DESIGN<span>04</span></p><p className="signal signal-b">BUILD<span>01</span></p><p className="signal signal-c">SECURE<span>03</span></p>
        </div>
        <div className="hero-foot"><span>BUILD</span><i /><span>INNOVATE</span><i /><span>TRANSFORM</span></div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading"><p className="kicker">What we do</p><h2>One team.<br /><span>Every digital layer.</span></h2><p>We connect the thinking, the look, the code, and the protection, so your product feels whole from day one.</p></div>
        <div className="service-list">
          {services.map((service, index) => (
            <article className={`service-item ${activeService === index ? 'active' : ''}`} key={service.title}>
              <button onClick={() => setActiveService(index)} aria-expanded={activeService === index}>
                <span className="service-number">{service.number}</span><span className="service-glyph">{service.glyph}</span><span className="service-title">{service.title}</span><span className="service-short">{service.short}</span><span className="service-toggle">{activeService === index ? '−' : '+'}</span>
              </button>
              <div className="service-detail"><p>{service.detail}</p><div className="tags">{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div><button className="text-link" onClick={() => chooseService(index)}>Discuss this service <span>↗</span></button></div>
            </article>
          ))}
        </div>
      </section>

      <section className="statement" id="studio">
        <div className="statement-art" aria-hidden="true"><span>S</span></div>
        <div className="statement-copy"><p className="kicker">Serendib thinking</p><blockquote>“Good technology should feel less like machinery and more like <em>momentum.</em>”</blockquote><p>Serendib is an ancient name for Sri Lanka and the root of “serendipity.” It captures how we work: rigorous craft, open curiosity, and the ability to discover a stronger answer along the way.</p></div>
      </section>

      <section className="process section" id="approach">
        <div className="section-heading compact"><p className="kicker">How we work</p><h2>Clear from first<br /><span>thought to launch.</span></h2></div>
        <div className="process-track">{process.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><div className="process-dot" /><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-intro"><p className="kicker">Start something</p><h2>Have an idea?<br /><em>Let’s make it real.</em></h2><p>Tell us a little about what you’re building. We’ll reply with a clear next step.</p><a href="mailto:hello@serendibcode.com">hello@serendibcode.com <span>↗</span></a></div>
        {sent ? <div className="form-success" role="status"><span>✓</span><h3>Message received.</h3><p>Thanks for reaching out. We’ll be in touch soon.</p><button className="text-link" onClick={() => setSent(false)}>Send another message <span>↗</span></button></div> :
          <form onSubmit={(event) => { event.preventDefault(); setSent(true); }}>
            <label>Name<input name="name" placeholder="Your name" required /></label><label>Email<input name="email" type="email" placeholder="you@company.com" required /></label>
            <label className="full">I’m interested in<select name="service" value={activeService} onChange={(event) => setActiveService(Number(event.target.value))}>{services.map((service, index) => <option value={index} key={service.title}>{service.title}</option>)}</select></label>
            <label className="full">Project details<textarea name="details" placeholder="A quick outline of your idea, timeline, or goals…" rows={3} required /></label><button className="button button-primary full" type="submit">Send inquiry <span>↗</span></button>
          </form>}
      </section>

      <footer><a className="brand" href="#top"><span className="brand-mark">S</span><span>Serendib Code</span></a><p>Build · Innovate · Transform</p><div><a href="#services">Services</a><a href="#approach">Approach</a><a href="#contact">Contact</a></div><small>© 2026 Serendib Code. Crafted in Sri Lanka.</small></footer>
    </main>
  );
}
