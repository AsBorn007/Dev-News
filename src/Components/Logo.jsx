import { useId } from "react";

const Logo = ({ className = "h-11 w-auto", showTagline = true }) => {
  const uid = useId().replace(/:/g, "");
  const g1 = `dn-g1-${uid}`;
  const g2 = `dn-g2-${uid}`;
  const glow = `dn-glow-${uid}`;

  return (
    <svg
      className={className}
      viewBox="0 0 250 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="DevNews - Latest Updates for Developers"
    >
      <defs>
        <linearGradient id={g1} x1="0" y1="0" x2="52" y2="52" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7c3aed" />
          <stop offset="1" stopColor="#d946ef" />
        </linearGradient>
        <linearGradient id={g2} x1="0" y1="0" x2="1" y2="0">
          <stop stopColor="#a78bfa" />
          <stop offset="1" stopColor="#e879f9" />
        </linearGradient>
        <filter id={glow} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Icon */}
      <g filter={`url(#${glow})`}>
        <rect x="2" y="4" width="52" height="52" rx="14" fill={`url(#${g1})`} />
        <rect x="2.5" y="4.5" width="51" height="51" rx="13.5" stroke="white" strokeOpacity="0.25" />
      </g>
      {/* </> chevrons */}
      <path d="M22 21 L12 30 L22 39" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M34 21 L44 30 L34 39" stroke="white" strokeOpacity="0.85" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31 19 L25 41" stroke="#fff" strokeOpacity="0.9" strokeWidth="3.5" strokeLinecap="round" />

      {/* Text */}
      <text
        x="66"
        y={showTagline ? 35 : 40}
        fontFamily="Inter, 'Segoe UI', system-ui, sans-serif"
        fontSize="30"
        fontWeight="800"
        letterSpacing="-0.5"
      >
        <tspan fill="#ffffff">Dev</tspan>
        <tspan fill={`url(#${g2})`}>News</tspan>
      </text>
      {showTagline && (
        <text
          x="67"
          y="50"
          fontFamily="Inter, 'Segoe UI', system-ui, sans-serif"
          fontSize="9.5"
          fontWeight="500"
          letterSpacing="0.6"
          fill="#94a3b8"
        >
          Latest Updates for Developers
        </text>
      )}
    </svg>
  );
};

export default Logo;