import { useEffect, useState } from 'react';
import '../styles/navbar.css';
import { navLinks } from '../data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <>
      <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
        <a href="#home" className="navbar__mark">
          Steffi Jana
        </a>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="navbar__toggle"
          aria-label="Menu öffnen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <nav className={`navbar__mobile${open ? ' is-open' : ''}`} aria-hidden={!open}>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
