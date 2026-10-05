import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const out = join(dirname(fileURLToPath(import.meta.url)), "..", "public", "images");
mkdirSync(out, { recursive: true });

const defs = `
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fbf7f1"/>
      <stop offset="1" stop-color="#f0e4d0"/>
    </linearGradient>
    <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.7"/>
      <stop offset="0.4" stop-color="#ffffff" stop-opacity="0.08"/>
      <stop offset="1" stop-color="#c8b08a" stop-opacity="0.28"/>
    </linearGradient>
    <linearGradient id="oil" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f8dc8a"/>
      <stop offset="1" stop-color="#c8892a"/>
    </linearGradient>
    <filter id="soft" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#2c1a0e" flood-opacity="0.16"/>
    </filter>
  </defs>`;

function svg(body, w = 800, h = 800) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
${defs}
<rect width="${w}" height="${h}" fill="url(#bg)"/>
${body}
</svg>`;
}

function ground(y = 640) {
  return `<ellipse cx="400" cy="${y}" rx="250" ry="28" fill="#e6d3b6"/>`;
}

function bottle(oilTop = "#f6d48a", oilBottom = "#c8892a") {
  return `
  <g filter="url(#soft)">
    <path d="M330 250h140v300c0 28-24 48-70 48s-70-20-70-48V250z" fill="${oilBottom}"/>
    <path d="M338 300h124v230c0 22-20 38-62 38s-62-16-62-38V300z" fill="${oilTop}"/>
    <path d="M348 318h28v190c-18 8-28 8-28 0V318z" fill="#fff" opacity="0.28"/>
    <rect x="352" y="168" width="96" height="86" rx="14" fill="#f7f1e6" stroke="#e3d2b6"/>
    <rect x="374" y="142" width="52" height="32" rx="8" fill="#8b5a2b"/>
    <path d="M330 250h140v300c0 28-24 48-70 48s-70-20-70-48V250z" fill="url(#glass)"/>
  </g>`;
}

function jar(fill) {
  return `
  <g filter="url(#soft)">
    <rect x="250" y="250" width="300" height="300" rx="36" fill="${fill}"/>
    <rect x="250" y="250" width="300" height="300" rx="36" fill="url(#glass)"/>
    <rect x="270" y="210" width="260" height="56" rx="16" fill="#6b4423"/>
    <rect x="300" y="188" width="200" height="28" rx="10" fill="#8b5a2b"/>
    <path d="M280 310h40v150" stroke="#fff" stroke-opacity="0.25" stroke-width="16" stroke-linecap="round"/>
  </g>`;
}

const scenes = {
  "groundnut-oil.svg": svg(`${ground()}
    ${bottle()}
    <g fill="#c4a06a">
      <ellipse cx="180" cy="560" rx="36" ry="22" transform="rotate(-20 180 560)"/>
      <ellipse cx="230" cy="600" rx="34" ry="20" transform="rotate(15 230 600)"/>
      <ellipse cx="590" cy="570" rx="36" ry="22" transform="rotate(18 590 570)"/>
    </g>
    <g fill="#8d6a43">
      <ellipse cx="180" cy="560" rx="14" ry="8" transform="rotate(-20 180 560)"/>
      <ellipse cx="230" cy="600" rx="13" ry="7" transform="rotate(15 230 600)"/>
      <ellipse cx="590" cy="570" rx="14" ry="8" transform="rotate(18 590 570)"/>
    </g>`),

  "coconut-oil.svg": svg(`${ground()}
    ${bottle("#f7f3ea", "#e7d7b0")}
    <circle cx="190" cy="560" r="48" fill="#6b4423"/>
    <circle cx="190" cy="560" r="28" fill="#f4efe6"/>
    <ellipse cx="600" cy="575" rx="54" ry="36" fill="#7a5230"/>
    <ellipse cx="600" cy="575" rx="30" ry="18" fill="#f6f1e8"/>`),

  "sesame-oil.svg": svg(`${ground()}
    ${bottle("#e8c56a", "#a86b22")}
    <g fill="#d8b15a">
      ${Array.from({ length: 18 }, (_, i) => {
        const x = 150 + (i % 6) * 18;
        const y = 540 + Math.floor(i / 6) * 16;
        return `<ellipse cx="${i < 9 ? x : 560 + (i % 6) * 14}" cy="${y}" rx="7" ry="4" transform="rotate(${i * 20} ${i < 9 ? x : 560} ${y})"/>`;
      }).join("")}
    </g>`),

  "mustard-oil.svg": svg(`${ground()}
    ${bottle("#f0c84a", "#c48a12")}
    <g fill="#e2b325">
      <circle cx="175" cy="545" r="10"/>
      <circle cx="198" cy="530" r="10"/>
      <circle cx="214" cy="552" r="9"/>
      <circle cx="188" cy="566" r="8"/>
      <circle cx="600" cy="548" r="10"/>
      <circle cx="624" cy="534" r="9"/>
      <circle cx="612" cy="570" r="8"/>
    </g>
    <g fill="#4a7c59">
      <ellipse cx="186" cy="520" rx="16" ry="8" transform="rotate(-30 186 520)"/>
      <ellipse cx="618" cy="518" rx="16" ry="8" transform="rotate(25 618 518)"/>
    </g>`),

  "castor-oil.svg": svg(`${ground()}
    ${bottle("#f3e2b0", "#b8894a")}
    <g fill="#3f6b4a">
      <path d="M150 560c40-70 90-70 110-20-40 10-70 20-110 20z"/>
      <path d="M620 540c-50-60-100-40-90 10 30 8 60 10 90-10z"/>
    </g>`),

  "cow-ghee.svg": svg(`${ground(650)}
    <g filter="url(#soft)">
      <path d="M230 340h340l-30 230c-6 36-40 60-140 60s-134-24-140-60L230 340z" fill="#f6d98a"/>
      <ellipse cx="400" cy="340" rx="170" ry="42" fill="#fbe7a8"/>
      <ellipse cx="400" cy="332" rx="120" ry="26" fill="#fff6d4"/>
      <path d="M250 360h300l-24 180c-6 28-36 46-126 46s-120-18-126-46L250 360z" fill="url(#glass)"/>
    </g>`),

  "buffalo-ghee.svg": svg(`${ground(650)}
    <g filter="url(#soft)">
      <path d="M240 360h320l-26 210c-6 34-38 56-134 56s-128-22-134-56L240 360z" fill="#f0c56a"/>
      <ellipse cx="400" cy="360" rx="160" ry="38" fill="#f8dc9a"/>
      <ellipse cx="400" cy="354" rx="110" ry="22" fill="#fff1c9"/>
    </g>`),

  "desi-ghee.svg": svg(`${ground(650)}
    <g filter="url(#soft)">
      <path d="M250 350h300l-24 220c-5 32-36 54-126 54s-121-22-126-54L250 350z" fill="#e7b84e"/>
      <ellipse cx="400" cy="350" rx="150" ry="36" fill="#f6d27a"/>
      <path d="M470 300c20 20 10 50-16 58" fill="none" stroke="#c8922a" stroke-width="8" stroke-linecap="round"/>
    </g>`),

  "mango-pickle.svg": svg(`${ground()}
    ${jar("#e07a2f")}
    <g fill="#f2b143">
      <ellipse cx="190" cy="575" rx="34" ry="22" transform="rotate(-20 190 575)"/>
      <ellipse cx="610" cy="560" rx="30" ry="20" transform="rotate(16 610 560)"/>
    </g>`),

  "lemon-pickle.svg": svg(`${ground()}
    ${jar("#e6c84a")}
    <g fill="#f2d34a">
      <circle cx="185" cy="565" r="28"/>
      <circle cx="615" cy="555" r="24"/>
    </g>
    <g fill="#f7f3ea">
      <path d="M185 545v40M171 565h28" stroke="#e6c84a" stroke-width="4"/>
    </g>`),

  "mixed-pickle.svg": svg(`${ground()}
    ${jar("#c45c3a")}
    <g>
      <circle cx="175" cy="560" r="16" fill="#6a8f4e"/>
      <circle cx="205" cy="585" r="14" fill="#e07a2f"/>
      <circle cx="600" cy="555" r="16" fill="#d84a3a"/>
      <rect x="618" y="545" width="22" height="36" rx="8" fill="#4a7c59" transform="rotate(20 629 563)"/>
    </g>`),

  "gongura-pickle.svg": svg(`${ground()}
    ${jar("#8d3a45")}
    <g fill="#4a7c59">
      <ellipse cx="175" cy="560" rx="28" ry="14" transform="rotate(-30 175 560)"/>
      <ellipse cx="205" cy="580" rx="26" ry="12" transform="rotate(20 205 580)"/>
      <ellipse cx="610" cy="555" rx="30" ry="14" transform="rotate(25 610 555)"/>
    </g>`),

  "garlic-pickle.svg": svg(`${ground()}
    ${jar("#d8a15a")}
    <g fill="#f4efe4" stroke="#e0d2bc">
      <ellipse cx="180" cy="565" rx="18" ry="26"/>
      <ellipse cx="210" cy="575" rx="14" ry="20"/>
      <ellipse cx="605" cy="560" rx="18" ry="26"/>
    </g>`),

  "process-farm.svg": svg(`
    <ellipse cx="400" cy="560" rx="280" ry="40" fill="#e3d0b0"/>
    <g fill="#4a7c59">
      <path d="M180 540c40-160 80-160 100-40-50 8-80 16-100 40z"/>
      <path d="M300 520c30-180 90-180 100-20-40 0-70 8-100 20z"/>
      <path d="M430 530c36-170 96-150 80 10-36 4-60 8-80-10z"/>
      <path d="M540 545c28-140 80-130 70 8-30 6-52 8-70-8z"/>
    </g>
    <circle cx="620" cy="220" r="46" fill="#f0c84a"/>`),

  "process-press.svg": svg(`
    <ellipse cx="400" cy="620" rx="260" ry="30" fill="#e3d0b0"/>
    <g filter="url(#soft)">
      <rect x="180" y="250" width="440" height="280" rx="24" fill="#6b4423"/>
      <rect x="210" y="280" width="380" height="200" rx="16" fill="#8a5a32"/>
      <circle cx="400" cy="380" r="70" fill="#c8922a"/>
      <circle cx="400" cy="380" r="28" fill="#f6d48a"/>
      <rect x="370" y="180" width="60" height="120" rx="12" fill="#4a2c1a"/>
    </g>`),

  "process-pack.svg": svg(`${ground()}
    ${bottle()}
    <g filter="url(#soft)">
      <rect x="150" y="430" width="120" height="150" rx="12" fill="#f7f1e6" stroke="#e3d2b6"/>
      <rect x="530" y="450" width="110" height="130" rx="12" fill="#f7f1e6" stroke="#e3d2b6"/>
    </g>`),

  "clean-seeds.svg": svg(`
    <ellipse cx="400" cy="560" rx="280" ry="36" fill="#e3d0b0"/>
    <g fill="#c4a06a">
      ${Array.from({ length: 40 }, (_, i) => {
        const x = 160 + (i % 10) * 48;
        const y = 500 + Math.floor(i / 10) * 28;
        return `<ellipse cx="${x}" cy="${y}" rx="8" ry="5"/>`;
      }).join("")}
    </g>
    <circle cx="250" cy="530" r="10" fill="#8d8d8d"/>
    <circle cx="520" cy="560" r="8" fill="#6b4423"/>
    <rect x="560" y="470" width="70" height="50" rx="8" fill="#d8b15a" transform="rotate(18 595 495)"/>`),

  "wash-seeds.svg": svg(`
    <g filter="url(#soft)">
      <ellipse cx="400" cy="430" rx="220" ry="70" fill="#d7e4ea"/>
      <ellipse cx="400" cy="400" rx="200" ry="56" fill="#e7f2f6"/>
      <path d="M190 400c40 80 80 120 210 120s170-40 210-120" fill="#c5dbe4"/>
    </g>
    <g fill="#c4a06a">
      ${Array.from({ length: 18 }, (_, i) => `<ellipse cx="${250 + (i % 6) * 48}" cy="${390 + Math.floor(i / 6) * 22}" rx="8" ry="5"/>`).join("")}
    </g>`),

  "dry-seeds.svg": svg(`
    <rect x="120" y="280" width="560" height="280" rx="16" fill="#e7d3b0"/>
    <g fill="#d8b15a">
      ${Array.from({ length: 48 }, (_, i) => `<ellipse cx="${150 + (i % 12) * 42}" cy="${320 + Math.floor(i / 12) * 50}" rx="7" ry="4" transform="rotate(${i * 12} ${150 + (i % 12) * 42} ${320 + Math.floor(i / 12) * 50})"/>`).join("")}
    </g>
    <circle cx="640" cy="160" r="48" fill="#f0c84a"/>`),

  "cold-press.svg": svg(`
    <ellipse cx="400" cy="640" rx="260" ry="28" fill="#e3d0b0"/>
    <g filter="url(#soft)">
      <rect x="150" y="220" width="360" height="250" rx="20" fill="#3d5c78"/>
      <rect x="180" y="250" width="300" height="160" rx="12" fill="#4e7394"/>
      <circle cx="330" cy="330" r="54" fill="#c8922a"/>
      <rect x="300" y="140" width="60" height="100" rx="10" fill="#2c1a0e"/>
      <path d="M500 360c30 20 40 50 20 90" fill="none" stroke="#e0a84a" stroke-width="14" stroke-linecap="round"/>
    </g>
    <ellipse cx="560" cy="500" rx="70" ry="24" fill="#d9dde2"/>
    <ellipse cx="560" cy="490" rx="56" ry="16" fill="#f6d48a"/>`),

  "settle-oil.svg": svg(`
    <g filter="url(#soft)">
      <path d="M220 280h360l-40 280c-8 40-50 70-140 70s-132-30-140-70L220 280z" fill="#f6d48a"/>
      <ellipse cx="400" cy="280" rx="180" ry="36" fill="#fbe7a8"/>
      <ellipse cx="400" cy="520" rx="120" ry="18" fill="#c8892a" opacity="0.45"/>
    </g>`),

  "bottle-oil.svg": svg(`${ground()}
    ${bottle()}
    <g filter="url(#soft)">
      <g transform="translate(-150 40) scale(0.72)">${bottle("#f7f3ea", "#e7d7b0")}</g>
    </g>`),
};

const hero = svg(`
  <ellipse cx="800" cy="760" rx="560" ry="46" fill="#e6d3b6"/>
  <g transform="translate(80 80) scale(0.92)">
    ${bottle()}
  </g>
  <g transform="translate(430 40) scale(0.85)">
    <g filter="url(#soft)">
      <path d="M230 340h340l-30 230c-6 36-40 60-140 60s-134-24-140-60L230 340z" fill="#f6d98a"/>
      <ellipse cx="400" cy="340" rx="170" ry="42" fill="#fbe7a8"/>
    </g>
  </g>
  <g transform="translate(820 90) scale(0.78)">
    ${jar("#e07a2f")}
  </g>
`, 1600, 900);

writeFileSync(join(out, "hero.svg"), hero);
for (const [name, markup] of Object.entries(scenes)) {
  writeFileSync(join(out, name), markup);
}
console.log(`wrote ${Object.keys(scenes).length + 1} images`);
