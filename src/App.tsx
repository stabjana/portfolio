import './styles/global.css';
import NeonBackground from './components/NeonBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bio from './components/Bio';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <NeonBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Bio />
        <Projects />
        <Contact />
      </main>
      <footer className="footer">© {new Date().getFullYear()} Stefanie Jana</footer>
    </>
  );
}
