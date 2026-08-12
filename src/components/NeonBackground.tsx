import '../styles/neon-background.css';

interface Orb {
  color: string;
  size: number; // px
  top: string; // %
  left: string; // %
  dx: number; // px drift
  dy: number; // px drift
  duration: number; // seconds
  delay: number; // seconds
}

// Loosely arranged like the accent circles on Steffi's CV — scattered,
// a few larger anchor orbs plus smaller ones, no rigid grid.
const orbs: Orb[] = [
  { color: 'var(--pink)', size: 220, top: '8%', left: '78%', dx: -50, dy: 40, duration: 24, delay: 0 },
  { color: 'var(--cyan)', size: 340, top: '62%', left: '82%', dx: -60, dy: -35, duration: 30, delay: 2 },
  { color: 'var(--purple)', size: 160, top: '20%', left: '10%', dx: 40, dy: 30, duration: 20, delay: 1 },
  { color: 'var(--green)', size: 120, top: '78%', left: '18%', dx: 35, dy: -45, duration: 22, delay: 3 },
  { color: 'var(--blue)', size: 90, top: '40%', left: '48%', dx: -30, dy: 50, duration: 18, delay: 0.5 },
  { color: 'var(--indigo)', size: 260, top: '85%', left: '55%', dx: 45, dy: -25, duration: 28, delay: 1.5 },
  { color: 'var(--pink)', size: 70, top: '32%', left: '88%', dx: -20, dy: -40, duration: 16, delay: 2.5 },
  { color: 'var(--cyan)', size: 60, top: '5%', left: '38%', dx: 25, dy: 35, duration: 19, delay: 0.8 },
];

// A few faint lines connecting orb positions, echoing a constellation.
const connections: Array<[number, number]> = [
  [0, 7],
  [2, 3],
  [1, 5],
  [4, 6],
];

function toXY(orb: Orb) {
  return { x: orb.left, y: orb.top };
}

export default function NeonBackground() {
  return (
    <div className="neon-bg" aria-hidden="true">
      <div className="neon-bg__stars" />
      <svg className="neon-bg__lines" preserveAspectRatio="none">
        {connections.map(([a, b], i) => {
          const p1 = toXY(orbs[a]);
          const p2 = toXY(orbs[b]);
          return (
            <line
              key={i}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke="url(#neon-line-gradient)"
              strokeWidth={1}
            />
          );
        })}
        <defs>
          <linearGradient id="neon-line-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--cyan)" />
            <stop offset="100%" stopColor="var(--pink)" />
          </linearGradient>
        </defs>
      </svg>
      {orbs.map((orb, i) => (
        <span
          key={i}
          className="neon-bg__orb"
          style={
            {
              '--c': orb.color,
              '--dx': `${orb.dx}px`,
              '--dy': `${orb.dy}px`,
              '--dur': `${orb.duration}s`,
              width: orb.size,
              height: orb.size,
              top: orb.top,
              left: orb.left,
              animationDelay: `${orb.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
