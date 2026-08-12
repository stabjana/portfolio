import { useState } from 'react';
import '../styles/contact.css';

type Status = 'idle' | 'sending' | 'sent';

const EMAIL = 'stefanie.k.jana@gmail.com';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  // Dummy handler for now — no backend wired up yet.
  // Swap this for a real request once you have an email endpoint, e.g.:
  //   await fetch('/api/contact', { method: 'POST', body: formData })
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      e.currentTarget.reset();
    }, 900);
  };

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <h2 className="section-heading">Contact</h2>

        <div className="contact__layout">
          <div className="contact__intro">
            <p>
              Looking for someone who connects product thinking with code? I'd love to
              hear from you — reach out here or find me directly below.
            </p>
            <div className="contact__direct">
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <a href="https://github.com/stabjana" target="_blank" rel="noreferrer noopener">
                github.com/stabjana
              </a>
              <a
                href="https://www.linkedin.com/in/stefanie-jana-a0b094a8/"
                target="_blank"
                rel="noreferrer noopener"
              >
                linkedin.com/in/stefanie-jana
              </a>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" required placeholder="Your name" />
            </div>
            <div className="contact__field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" required rows={4} placeholder="Let's talk about..." />
            </div>

            <button type="submit" className="contact__submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'sent' && (
              <span className="contact__status">Thanks! This is a demo form for now — I'll wire it up to email soon.</span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
