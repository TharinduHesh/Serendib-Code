'use client';

import { useState, type FormEvent } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { firebaseConfigured, firestore } from '../../lib/firebase';

export default function ProjectForm() {
  const [status, setStatus] = useState<'idle' | 'saving' | 'saved' | 'prepared' | 'error'>('idle');

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const enquiry = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      telephone: String(data.get('telephone') || ''),
      company: String(data.get('company') || ''),
      details: String(data.get('details') || ''),
    };

    if (firebaseConfigured && firestore) {
      setStatus('saving');
      try {
        await addDoc(collection(firestore, 'projectEnquiries'), {
          ...enquiry,
          createdAt: serverTimestamp(),
        });
        setStatus('saved');
        event.currentTarget.reset();
        return;
      } catch {
        setStatus('error');
        return;
      }
    }

    const body = `Name: ${enquiry.name}\nEmail: ${enquiry.email}\nTelephone No: ${enquiry.telephone}\nCompany: ${enquiry.company || 'Not specified'}\n\nProject details:\n${enquiry.details}`;
    window.location.href = `mailto:hello@serendibcode.com?subject=${encodeURIComponent('New project enquiry')}&body=${encodeURIComponent(body)}`;
    setStatus('prepared');
  }

  return (
    <form className="project-form" onSubmit={submit}>
      <h2>Start a project</h2>
      <label>Your name<input name="name" autoComplete="name" placeholder="Jane Doe" maxLength={120} required /></label>
      <label>Email<input name="email" type="email" autoComplete="email" placeholder="jane@company.com" maxLength={254} required /></label>
      <label>Company <span className="field-optional">(optional)</span><input name="company" autoComplete="organization" placeholder="Your company" maxLength={160} /></label>
      <label>Telephone No<input name="telephone" type="tel" autoComplete="tel" placeholder="+94 77 123 4567" maxLength={30} required /></label>
      <label className="project-full">Project details<textarea name="details" rows={6} placeholder="What are you building, and what does success look like?" maxLength={2500} required /></label>
      <div className="project-full">
        <button className="project-submit" type="submit" disabled={status === 'saving'}>
          {status === 'saving' ? 'Saving enquiry...' : 'Send enquiry'} <span aria-hidden="true">→</span>
        </button>
        {!firebaseConfigured && <p className="project-form-note">Opens your email app with your project details ready to send.</p>}
        {status === 'saved' && <p role="status" className="project-form-note">Your enquiry has been sent successfully.</p>}
        {status === 'prepared' && <p role="status" className="project-form-note">Your enquiry is ready in your email app. If no app opened, email hello@serendibcode.com directly.</p>}
        {status === 'error' && <p role="alert" className="project-form-note">We could not save your enquiry. Please try again or email hello@serendibcode.com directly.</p>}
      </div>
    </form>
  );
}
