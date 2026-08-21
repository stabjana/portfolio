import { useState } from 'react';
import { hobbies } from '../data';
import type { HobbyItem } from '../types';
import '../styles/hobbies.css';

export default function Hobbies() {
  return (
    <section className="hobbies-page">
      <div className="hobbies-page__inner">
        <a className="hobbies-page__back" href="/#projects">
          Back to portfolio
        </a>

        <header className="hobbies-page__header">
          <span className="eyebrow">Beyond code</span>
          <h1>Hobbies</h1>
          <p>
            A more personal corner of the portfolio: the things that keep me curious, active and grounded
            outside of work.
          </p>
        </header>

        <div className="hobbies-page__grid">
          {hobbies.map((hobby) => (
            <HobbyCard key={hobby.id} hobby={hobby} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HobbyCard({ hobby }: { hobby: HobbyItem }) {
  return (
    <article className="hobby-card" style={{ '--c': hobby.accent } as React.CSSProperties}>
      {hobby.youtubeId && (
        <div className="hobby-card__media">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${hobby.youtubeId}`}
            title={hobby.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      )}

      {hobby.image && <HobbyImage src={hobby.image.src} alt={hobby.image.alt} title={hobby.title} />}

      <div className="hobby-card__body">
        <span className="hobby-card__eyebrow">{hobby.eyebrow}</span>
        <h2>{hobby.title}</h2>
        <p>{hobby.description}</p>

        {hobby.link && (
          <a className="hobby-card__link" href={hobby.link.href} target="_blank" rel="noreferrer noopener">
            {hobby.link.label}
            <span aria-hidden="true">-&gt;</span>
          </a>
        )}
      </div>
    </article>
  );
}

function HobbyImage({ src, alt, title }: { src: string; alt: string; title: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="hobby-card__photo-placeholder">
        <span>{title}</span>
        <small>Photo placeholder</small>
      </div>
    );
  }

  return (
    <div className="hobby-card__photo">
      <img src={src} alt={alt} onError={() => setFailed(true)} />
    </div>
  );
}
