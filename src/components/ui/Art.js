// Procedural SVG art for project thumbnails and visuals (no remote images or external assets).
const pal = [['#6657FF', '#23C8B8'], ['#23C8B8', '#6657FF'], ['#6657FF', '#A0A9BA'], ['#23C8B8', '#A0A9BA']];

export default function Art({ seed = 0, label, className = '' }) {
  const [a, b] = pal[seed % pal.length];
  const id = `g${seed}`;
  const bars = Array.from({ length: 7 }, (_, i) => 30 + ((i * 37 + seed * 53) % 70));
  return (
    <svg viewBox="0 0 400 260" role="img" aria-label={label || 'Abstract technical illustration'} className={className} preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor={a} stopOpacity=".55" /><stop offset="1" stopColor={b} stopOpacity=".12" /></linearGradient>
        <pattern id={`p${seed}`} width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#fff" strokeOpacity=".06" /></pattern>
      </defs>
      <rect width="400" height="260" fill="#0D1220" />
      <rect width="400" height="260" fill={`url(#p${seed})`} />
      <circle cx={90 + seed * 40} cy="70" r="110" fill={`url(#${id})`} />
      <rect x="40" y="150" width="320" height="76" rx="6" fill="#121A29" stroke="#fff" strokeOpacity=".1" />
      {bars.map((h, i) => <rect key={i} x={58 + i * 42} y={216 - h * 0.5} width="22" height={h * 0.5} rx="2" fill={i % 3 === 0 ? a : b} fillOpacity=".75" />)}
      <rect x="230" y="36" width="130" height="86" rx="6" fill="#121A29" stroke="#fff" strokeOpacity=".12" />
      {[0, 1, 2, 3].map((i) => <rect key={i} x="244" y={52 + i * 16} width={40 + ((i * 29 + seed * 11) % 60)} height="5" rx="2.5" fill={i % 2 ? b : a} fillOpacity=".8" />)}
    </svg>
  );
}
