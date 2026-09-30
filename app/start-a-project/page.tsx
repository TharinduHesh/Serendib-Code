import type { Metadata } from 'next';
import Link from 'next/link';
import ProjectForm from './project-form';

export const metadata: Metadata = {
  title: 'Start a project | Serendib Code',
  description: 'Tell Serendib Code about your next digital product.',
};

export default function StartProjectPage() {
  return (
    <main className="project-page">
      <Link className="project-back" href="/">← Back to Serendib Code</Link>
      <header className="project-intro">
        <h1>Let&apos;s build something <em>exceptional.</em></h1>
        <p>Tell us about your vision, or reach us directly. We&apos;d love to hear what you have in mind.</p>
      </header>
      <div className="project-layout">
        <ProjectForm />
        <aside className="project-contact" aria-label="Contact details">
          <div><h2>Email</h2><a href="mailto:hello@serendibcode.com">hello@serendibcode.com</a></div>
          <div><h2>Tel No</h2><a href="tel:+94751668705">+94 75 166 8705</a></div>
          <div><h2>Location</h2><p>Kandy, Colombo, Sri Lanka</p></div>
          <div><h2>What we do</h2><p>Product strategy, web development, mobile design, and security-minded delivery.</p></div>
          <div><h2>Let&apos;s talk</h2><p>Share your goals, timeline, and any questions. We&apos;ll help you find the next step.</p></div>
        </aside>
      </div>
      <footer className="project-page-footer">&copy; {new Date().getFullYear()} Serendib Code. All rights reserved.</footer>
    </main>
  );
}
