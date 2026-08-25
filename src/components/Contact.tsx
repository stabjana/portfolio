import { useState } from 'react';
import '../styles/contact.css';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const EMAIL = 'steff.dev.jana@gmail.com';
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section">
      <div className="section-inner">
        <h2 className="section-heading">Contact</h2>

        <div className="contact__layout">
          <div className="contact__intro">
            <p>
              Are you looking for someone who connects product thinking with code? I'd love to
              hear from you! Reach out here or find me directly below.
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
              <span className="contact__status">Thanks! Your message was sent successfully.</span>
            )}
            {status === 'error' && (
              <span className="contact__status contact__status--error">
                Something went wrong. Please try again or email me directly.
              </span>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
