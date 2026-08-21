import '../styles/bio.css';
import { bioEntries } from '../data';

// Experience and education are intentionally merged into one chronological
// timeline with a single "Bio" heading - no "Experience" / "Education"
// sub-headings, per the brief.
export default function Bio() {
  const sorted = [...bioEntries].sort((a, b) => (a.sortKey < b.sortKey ? 1 : -1));

  return (
    <section id="bio" className="section bio">
      <div className="section-inner">
        <h2 className="section-heading">Bio</h2>

        <div className="bio__timeline">
          {sorted.map((entry) => (
            <article className="bio__item" key={entry.id}>
              <span className="bio__date">{entry.date}</span>
              <span className="bio__dot-col">
                <span className="bio__dot" style={{ '--c': entry.accent } as React.CSSProperties} />
              </span>
              <div>
                <span className="bio__date-mobile">{entry.date}</span>
                <h3 className="bio__role">{entry.role}</h3>
                <p className="bio__org">{entry.org}</p>
                <p className="bio__desc">{entry.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
