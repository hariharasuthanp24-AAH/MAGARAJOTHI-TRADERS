// Product Visual Asset Resolver with SVG textures and high-res vector graphics
export const generateProductVisual = (type, title, category) => {
  const isJute = category === 'Jute';
  const isGunny = category === 'Gunny';
  const isPlastic = category === 'Plastic';

  const bgColor = isJute ? '#8B5E3C' : isGunny ? '#6C4E13' : '#0F4C81';
  const accentColor = isJute ? '#C59B27' : isGunny ? '#D4A373' : '#00A896';
  const tagText = isJute ? '100% ECO JUTE' : isGunny ? 'HEAVY GUNNY SACK' : 'HDPE / PP WOVEN';

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="100%" height="100%">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${bgColor}" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#0F2C23" stop-opacity="1"/>
      </linearGradient>
      <pattern id="weave" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 0 10 L 40 10 M 10 0 L 10 40 M 0 30 L 40 30 M 30 0 L 30 40" stroke="rgba(255,255,255,0.07)" stroke-width="2"/>
      </pattern>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000" flood-opacity="0.35"/>
      </filter>
    </defs>
    <rect width="800" height="600" fill="url(#bgGrad)" />
    <rect width="800" height="600" fill="url(#weave)" />
    
    <!-- Bag Illustration -->
    <g transform="translate(250, 100)" filter="url(#shadow)">
      <!-- Sack Body -->
      <path d="M 40 50 C 40 40, 260 40, 260 50 L 280 380 C 280 410, 20 410, 20 380 Z" 
            fill="${accentColor}" stroke="#FFF" stroke-width="3" opacity="0.9"/>
      <!-- Sack Stitch Lines -->
      <path d="M 25 360 L 275 360" stroke="#FFF" stroke-width="4" stroke-dasharray="8,6" opacity="0.8"/>
      <!-- Tie Seal Neck -->
      <ellipse cx="150" cy="50" rx="110" ry="15" fill="#FFF" opacity="0.25"/>
      <path d="M 90 48 Q 150 70 210 48" stroke="#FFF" stroke-width="6" fill="none"/>
      <!-- Brand Seal Badge -->
      <circle cx="150" cy="220" r="65" fill="#0F2C23" stroke="${accentColor}" stroke-width="4"/>
      <text x="150" y="205" text-anchor="middle" fill="#FFF" font-family="sans-serif" font-size="14" font-weight="bold">MAGARAJOTHI</text>
      <text x="150" y="228" text-anchor="middle" fill="${accentColor}" font-family="sans-serif" font-size="16" font-weight="900">EXPORT</text>
      <text x="150" y="248" text-anchor="middle" fill="#FFF" font-family="sans-serif" font-size="11" letter-spacing="1">QUALITY</text>
    </g>

    <!-- Top Badge -->
    <rect x="40" y="40" width="220" height="36" rx="18" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)"/>
    <text x="150" y="63" text-anchor="middle" fill="#FFF" font-family="sans-serif" font-size="13" font-weight="700" letter-spacing="1.5">${tagText}</text>
    
    <!-- Title Text Overlay -->
    <text x="40" y="520" fill="#FFFFFF" font-family="sans-serif" font-size="28" font-weight="800">${title}</text>
    <text x="40" y="555" fill="${accentColor}" font-family="sans-serif" font-size="18" font-weight="600">Magarajothi Traders • Premium Sourcing</text>
  </svg>
  `;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};
