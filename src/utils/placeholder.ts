const PALETTE = ['#4f46e5','#0284c7','#0891b2','#059669','#d97706','#dc2626','#7c3aed','#db2777'];

function textToColor(text: string): string {
  let h = 0;
  for (const c of text) h = (h * 31 + c.charCodeAt(0)) & 0xffffffff;
  return PALETTE[Math.abs(h) % PALETTE.length];
}

export function initials(name: string): string {
  const w = name.trim().split(/\s+/);
  return w.length === 1 ? w[0].slice(0, 2).toUpperCase() : (w[0][0] + w[w.length - 1][0]).toUpperCase();
}

export function placeholderSvg(text: string, width: number, height = width): string {
  const bg       = textToColor(text);
  const cx       = width / 2;
  const cy       = height / 2;
  const fontSize = Math.round(Math.min(width, height) * 0.4);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}"><rect width="${width}" height="${height}" fill="${bg}"/><text x="${cx}" y="${cy + Math.round(fontSize * 0.35)}" font-family="system-ui,sans-serif" font-size="${fontSize}" font-weight="600" fill="white" text-anchor="middle">${text}</text></svg>`;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}
