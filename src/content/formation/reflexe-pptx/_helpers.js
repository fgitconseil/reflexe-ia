// ===================================================================
// Helpers Reflexe IA v4.1 — refonte PowerPoint-safe
// • Aucune LINE avec dim ≤ 0 (cause "PowerPoint réparer")
// • Aucune rotation
// • Schémas refaits avec rectangles + cercles uniquement
// ===================================================================

// === PALETTE ===
const C = {
  primary: "2563EB", primary_dark: "1D4ED8", primary_light: "DBEAFE",
  accent: "8B5CF6", accent_dark: "7C3AED", accent_light: "F3E8FF",
  slate900: "0F172A", slate800: "1E293B", slate700: "334155",
  slate500: "64748B", slate400: "94A3B8", slate300: "CBD5E1",
  slate200: "E2E8F0", slate100: "F1F5F9", slate50: "F8FAFC",
  white: "FFFFFF",
  sfoi_s: "22C55E", sfoi_s_dark: "15803D", sfoi_s_light: "DCFCE7",
  sfoi_f: "EAB308", sfoi_f_dark: "A16207", sfoi_f_light: "FEF9C3",
  sfoi_o: "3B82F6", sfoi_o_dark: "1D4ED8", sfoi_o_light: "DBEAFE",
  sfoi_i: "A855F7", sfoi_i_dark: "7C3AED", sfoi_i_light: "F3E8FF",
  red: "DC2626", red_dark: "991B1B", red_light: "FEE2E2",
  green: "16A34A",
  amber: "F59E0B", amber_dark: "B45309", amber_light: "FEF3C7",
  ink: "0B1220", paper: "F5F3EE",
};
const FONT = "Aptos";
const LINE_THICKNESS = 0.013;

// === Wrapper sûr pour les lignes droites (utilise RECTANGLE) ===
function hLine(slide, pres, x, y, length, color, thickness) {
  thickness = thickness || LINE_THICKNESS;
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y: y - thickness / 2, w: length, h: thickness,
    fill: { color }, line: { color, width: 0 },
  });
}
function vLine(slide, pres, x, y, length, color, thickness) {
  thickness = thickness || LINE_THICKNESS;
  slide.addShape(pres.shapes.RECTANGLE, {
    x: x - thickness / 2, y, w: thickness, h: length,
    fill: { color }, line: { color, width: 0 },
  });
}

// === Footer signature ===
function addBrand(slide) {
  slide.addText([
    { text: "Reflexe ", options: { color: C.primary, bold: true } },
    { text: "IA", options: { color: C.accent, bold: true } },
  ], {
    x: 11.5, y: 7.0, w: 1.6, h: 0.4,
    fontSize: 14, fontFace: FONT, align: "right", valign: "middle",
    transparency: 50, margin: 0,
  });
}

// === Fil d'Ariane complet [01─02─03─04─05] ===
function addBreadcrumb(slide, pres, activeBloc) {
  const startX = 9.0;
  const y = 0.42;
  const dotSize = 0.18;
  const numSize = 0.55;
  const gap = 0.62;
  for (let i = 1; i <= 5; i++) {
    const isActive = (i === activeBloc);
    const cx = startX + (i - 1) * gap;
    slide.addShape(pres.shapes.OVAL, {
      x: cx, y, w: dotSize, h: dotSize,
      fill: { color: isActive ? C.primary : C.slate300 },
      line: { color: isActive ? C.primary : C.slate300, width: 0 },
    });
    slide.addText(String(i).padStart(2, '0'), {
      x: cx - (numSize - dotSize) / 2, y: y + dotSize + 0.05, w: numSize, h: 0.22,
      fontSize: 9, fontFace: FONT, bold: isActive,
      color: isActive ? C.primary : C.slate400,
      align: "center", valign: "top", margin: 0,
    });
    if (i < 5) {
      hLine(slide, pres, cx + dotSize, y + dotSize / 2, gap - dotSize, C.slate200);
    }
  }
  hLine(slide, pres, 0.6, 0.95, 12.1, C.slate200, 0.008);
}

// === Header complet ===
function addHeader(slide, pres, kicker, subtitle, activeBloc) {
  slide.addText(kicker, {
    x: 0.6, y: 0.4, w: 7.5, h: 0.35,
    fontSize: 13, fontFace: FONT, color: C.primary, bold: true, charSpacing: 3,
  });
  addBreadcrumb(slide, pres, activeBloc);
  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.6, y: 1.15, w: 12, h: 0.55,
      fontSize: 18, fontFace: FONT, color: C.slate700, italic: true, valign: "top",
    });
  }
}

// =====================================================================
// SCHÉMAS RÉUTILISABLES (PowerPoint-safe)
// =====================================================================

// === Carte 2x2 des 4 intentions (Bloc 3) — flèches selon image fournie ===
function drawCarte4Intentions(slide, pres, x, y, w, h) {
  const cx = x + w / 2, cy = y + h / 2;
  // Légende axe X (au-dessus)
  slide.addText("CONTENU SOURCE À FOURNIR ?", {
    x, y: y - 0.55, w, h: 0.3,
    fontSize: 10, fontFace: FONT, bold: true,
    color: C.slate500, charSpacing: 2, align: "center",
  });
  slide.addText("non →", {
    x, y: y - 0.27, w: w / 2 - 0.1, h: 0.25,
    fontSize: 10, fontFace: FONT, italic: true,
    color: C.slate500, align: "right",
  });
  slide.addText("← oui", {
    x: cx + 0.1, y: y - 0.27, w: w / 2 - 0.1, h: 0.25,
    fontSize: 10, fontFace: FONT, italic: true,
    color: C.slate500, align: "left",
  });
  // Légende axe Y (à gauche)
  slide.addText("LIVRABLE\nDÉFINI ?", {
    x: x - 1.6, y: cy - 0.3, w: 1.4, h: 0.6,
    fontSize: 10, fontFace: FONT, bold: true,
    color: C.slate500, charSpacing: 2, align: "right", valign: "middle",
  });
  slide.addText("non ↑", {
    x: x - 1.6, y: y + 0.3, w: 1.4, h: 0.25,
    fontSize: 10, fontFace: FONT, italic: true, color: C.slate500, align: "right",
  });
  slide.addText("oui ↓", {
    x: x - 1.6, y: cy + 0.5, w: 1.4, h: 0.25,
    fontSize: 10, fontFace: FONT, italic: true, color: C.slate500, align: "right",
  });
  // Croix d'axes — RECTANGLE fin
  hLine(slide, pres, x, cy, w, C.slate400, 0.015);
  vLine(slide, pres, cx, y, h, C.slate400, 0.015);
  // 4 quadrants
  const qw = w / 2 - 0.2, qh = h / 2 - 0.2;
  const quadrants = [
    { name: "EXPLORATION", verb: "Comprendre", desc: "Cartographier des options, identifier des risques",
      color: C.primary, light: C.primary_light, x: x + 0.1, y: y + 0.1 },
    { name: "STRUCTURATION", verb: "Organiser", desc: "Mettre en ordre du contenu brut, sans rien perdre",
      color: C.sfoi_o, light: C.sfoi_o_light, x: cx + 0.1, y: y + 0.1 },
    { name: "PRODUCTION", verb: "Créer", desc: "Générer un livrable défini : email, plan, fiche…",
      color: C.accent, light: C.accent_light, x: x + 0.1, y: cy + 0.1 },
    { name: "VÉRIFICATION", verb: "Contrôler", desc: "Confronter un document existant à des critères",
      color: C.amber, light: C.amber_light, x: cx + 0.1, y: cy + 0.1 },
  ];
  quadrants.forEach(q => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: q.x, y: q.y, w: qw, h: qh,
      fill: { color: q.light }, line: { color: q.color, width: 1.5 }, rectRadius: 0.08,
    });
    slide.addText(q.name, {
      x: q.x, y: q.y + 0.15, w: qw, h: 0.4,
      fontSize: 14, fontFace: FONT, bold: true,
      color: q.color, align: "center", charSpacing: 2,
    });
    slide.addText(q.verb, {
      x: q.x, y: q.y + 0.55, w: qw, h: 0.4,
      fontSize: 18, fontFace: FONT, bold: true,
      color: C.slate900, align: "center",
    });
    slide.addText(q.desc, {
      x: q.x + 0.2, y: q.y + 1.0, w: qw - 0.4, h: 0.7,
      fontSize: 11, fontFace: FONT, italic: true,
      color: C.slate700, align: "center", valign: "top",
    });
  });
}

// === Escalier S.F.O.I. (Bloc 4) ===
function drawEscalierSFOI(slide, pres, x, y, w, h) {
  const steps = [
    { letter: "S", name: "Structurer", desc: "Organiser la pensée", color: C.sfoi_s, dark: C.sfoi_s_dark, light: C.sfoi_s_light },
    { letter: "F", name: "Fiabiliser", desc: "Vérifier les faits", color: C.sfoi_f, dark: C.sfoi_f_dark, light: C.sfoi_f_light },
    { letter: "O", name: "Optimiser", desc: "Rendre exploitable", color: C.sfoi_o, dark: C.sfoi_o_dark, light: C.sfoi_o_light },
    { letter: "I", name: "Industrialiser", desc: "Intégrer au système", color: C.sfoi_i, dark: C.sfoi_i_dark, light: C.sfoi_i_light },
  ];
  const n = steps.length;
  const stepW = (w - 0.3) / n;
  const stepBaseH = 1.0;
  const stepIncH = (h - stepBaseH - 0.5) / (n - 1);
  steps.forEach((s, i) => {
    const sx = x + i * stepW;
    const sh = stepBaseH + i * stepIncH;
    const sy = y + h - sh;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: sx, y: sy, w: stepW - 0.05, h: sh,
      fill: { color: s.light }, line: { color: s.color, width: 1.5 },
    });
    slide.addShape(pres.shapes.OVAL, {
      x: sx + (stepW - 0.05) / 2 - 0.35, y: sy + 0.15, w: 0.7, h: 0.7,
      fill: { color: s.color }, line: { color: s.color, width: 0 },
    });
    slide.addText(s.letter, {
      x: sx + (stepW - 0.05) / 2 - 0.35, y: sy + 0.15, w: 0.7, h: 0.7,
      fontSize: 28, fontFace: FONT, bold: true, color: C.white,
      align: "center", valign: "middle", margin: 0,
    });
    slide.addText(s.name, {
      x: sx, y: sy + 1.0, w: stepW - 0.05, h: 0.4,
      fontSize: 14, fontFace: FONT, bold: true, color: s.dark, align: "center",
    });
    slide.addText(s.desc, {
      x: sx + 0.1, y: sy + 1.4, w: stepW - 0.25, h: 0.5,
      fontSize: 11, fontFace: FONT, color: C.slate700, align: "center",
    });
    if (i < n - 1) {
      slide.addText("⬆", {
        x: sx + stepW - 0.14, y: sy + sh / 2 - 0.15, w: 0.2, h: 0.3,
        fontSize: 14, fontFace: FONT, bold: true,
        color: C.slate500, align: "center", valign: "middle",
      });
    }
  });
  slide.addText("Règle absolue : on ne saute pas une marche.", {
    x, y: y + h + 0.1, w, h: 0.35,
    fontSize: 12, fontFace: FONT, italic: true, color: C.slate500, align: "center",
  });
}

// === Boucle amplificatrice (Bloc 5) — pas de rotation ===
function drawBoucleAmplificatrice(slide, pres, x, y, w, h) {
  const cx = x + w / 2, cy = y + h / 2 - 0.2;
  const r = Math.min(w, h) / 2 - 0.6;
  slide.addShape(pres.shapes.OVAL, {
    x: cx - r, y: cy - r, w: r * 2, h: r * 2,
    fill: { color: C.red_light }, line: { color: C.red, width: 3 },
  });
  // 4 flèches préformes (sans rotation) sur les 4 cardinaux, pointant vers l'intérieur
  slide.addShape(pres.shapes.DOWN_ARROW, {
    x: cx - 0.18, y: cy - r - 0.15, w: 0.36, h: 0.4,
    fill: { color: C.red }, line: { color: C.red, width: 0 },
  });
  slide.addShape(pres.shapes.LEFT_ARROW, {
    x: cx + r - 0.25, y: cy - 0.18, w: 0.4, h: 0.36,
    fill: { color: C.red }, line: { color: C.red, width: 0 },
  });
  slide.addShape(pres.shapes.UP_ARROW, {
    x: cx - 0.18, y: cy + r - 0.25, w: 0.36, h: 0.4,
    fill: { color: C.red }, line: { color: C.red, width: 0 },
  });
  slide.addShape(pres.shapes.RIGHT_ARROW, {
    x: cx - r - 0.15, y: cy - 0.18, w: 0.4, h: 0.36,
    fill: { color: C.red }, line: { color: C.red, width: 0 },
  });
  slide.addText("BOUCLE\nAMPLIFICATRICE", {
    x: cx - r * 0.7, y: cy - 0.35, w: r * 1.4, h: 0.7,
    fontSize: 14, fontFace: FONT, bold: true,
    color: C.red_dark, align: "center", valign: "middle", margin: 0, charSpacing: 1,
  });
  // Choc en sortie (bas-droite)
  slide.addShape(pres.shapes.RIGHT_ARROW, {
    x: cx + r * 0.6, y: cy + r * 0.7, w: 0.7, h: 0.3,
    fill: { color: C.red_dark }, line: { color: C.red_dark, width: 0 },
  });
  slide.addShape(pres.shapes.OVAL, {
    x: cx + r + 0.4, y: cy + r * 0.7 - 0.25, w: 1.5, h: 0.85,
    fill: { color: C.red }, line: { color: C.red_dark, width: 2 },
  });
  slide.addText("CHOC", {
    x: cx + r + 0.4, y: cy + r * 0.7 - 0.25, w: 1.5, h: 0.85,
    fontSize: 16, fontFace: FONT, bold: true, color: C.white,
    align: "center", valign: "middle", margin: 0,
  });
}

// === Reddition cognitive (Bloc 5) — barres décroissantes ===
function drawRedditionCognitive(slide, pres, x, y, w, h) {
  hLine(slide, pres, x + 0.3, y + h - 0.4, w - 0.6, C.slate400, 0.015);
  vLine(slide, pres, x + 0.3, y + 0.3, h - 0.7, C.slate400, 0.015);
  slide.addText("Capacité de\nvérification", {
    x: x + 0.05, y: y + 0.3, w: 1.0, h: 0.6,
    fontSize: 9, fontFace: FONT, italic: true, color: C.slate500, align: "left",
  });
  slide.addText("Temps →", {
    x: x + w - 1.5, y: y + h - 0.3, w: 1.4, h: 0.25,
    fontSize: 9, fontFace: FONT, italic: true, color: C.slate500, align: "right",
  });
  // Couche "Usage" : rectangle horizontal stable
  const usageY = y + 0.7;
  hLine(slide, pres, x + 0.4, usageY, w - 0.8, C.slate500, 0.04);
  slide.addText("Usage stable", {
    x: x + w - 2.0, y: usageY - 0.3, w: 1.8, h: 0.3,
    fontSize: 10, fontFace: FONT, bold: true, color: C.slate500, align: "right",
  });
  // 5 barres décroissantes
  const nBars = 5;
  const barW = (w - 0.8) / (nBars * 1.5);
  const barAreaH = h - 1.3;
  const barColors = [C.primary_dark, C.primary, C.primary_light, C.slate300, C.slate200];
  const barHeights = [0.95, 0.8, 0.6, 0.35, 0.15];
  for (let i = 0; i < nBars; i++) {
    const bx = x + 0.5 + i * barW * 1.5;
    const bh = barAreaH * barHeights[i];
    const by = y + h - 0.4 - bh;
    slide.addShape(pres.shapes.RECTANGLE, {
      x: bx, y: by, w: barW, h: bh,
      fill: { color: barColors[i] },
      line: { color: barColors[i], width: 0 },
    });
  }
  slide.addText("Capacité ↘", {
    x: x + 0.5, y: y + 0.95, w: 2.0, h: 0.3,
    fontSize: 11, fontFace: FONT, bold: true, color: C.primary_dark,
  });
  slide.addText('"Sommes-nous encore capables\nde le détecter ?"', {
    x: x + w - 3.0, y: y + 1.4, w: 2.7, h: 0.85,
    fontSize: 12, fontFace: FONT, italic: true, color: C.slate700, align: "center",
  });
}

// === IMIA — version barres horizontales (pentagone radar à refaire avec custGeom dans nouvelle conv) ===
// === IMIA pentagone radar (Bloc 5) — refait avec custGeom ===
function drawIMIARadar(slide, pres, x, y, w, h) {
  // Centre relatif au shape (toutes les coords des points custGeom sont relatives à x,y du shape)
  const cx = w / 2;
  const cy = h / 2 - 0.15; // un peu remonté pour faire de la place à la légende
  const r = Math.min(w, h) / 2 - 0.85; // marge pour les labels autour

  function vertex(i, factor) {
    factor = factor === undefined ? 1 : factor;
    const angle = -Math.PI / 2 + i * 2 * Math.PI / 5;
    return {
      x: cx + r * factor * Math.cos(angle),
      y: cy + r * factor * Math.sin(angle),
    };
  }

  function polygonPoints(factor) {
    const pts = [];
    for (let i = 0; i < 5; i++) {
      const v = vertex(i, factor);
      pts.push({ x: v.x, y: v.y, moveTo: i === 0 });
    }
    pts.push({ close: true });
    return pts;
  }

  // 3 cercles concentriques (33%, 66%, 100%) en gris très clair
  [0.33, 0.66, 1.0].forEach(factor => {
    slide.addShape(pres.shapes.CUSTOM_GEOMETRY, {
      x, y, w, h,
      fill: { color: "FFFFFF", transparency: 100 },
      line: { color: C.slate300, width: 1 },
      points: polygonPoints(factor),
    });
  });

  // 5 axes radiaux (centre → sommet)
  for (let i = 0; i < 5; i++) {
    const v = vertex(i, 1.0);
    slide.addShape(pres.shapes.CUSTOM_GEOMETRY, {
      x, y, w, h,
      fill: { color: "FFFFFF", transparency: 100 },
      line: { color: C.slate300, width: 1 },
      points: [
        { x: cx, y: cy, moveTo: true },
        { x: v.x, y: v.y },
      ],
    });
  }

  // Polygone T0 (rouge, profil bas)
  // Ordre des dimensions : Gouvernance, Pratique S.F.O.I., Capital intel., Capacités humaines, Infrastructure
  const t0Values = [0.30, 0.25, 0.20, 0.35, 0.40];
  const t0points = [];
  for (let i = 0; i < 5; i++) {
    const v = vertex(i, t0Values[i]);
    t0points.push({ x: v.x, y: v.y, moveTo: i === 0 });
  }
  t0points.push({ close: true });
  slide.addShape(pres.shapes.CUSTOM_GEOMETRY, {
    x, y, w, h,
    fill: { color: C.red, transparency: 80 }, // léger remplissage rouge translucide
    line: { color: C.red, width: 3 },
    points: t0points,
  });

  // Polygone T+90 (bleu, profil élargi)
  const tnValues = [0.65, 0.70, 0.55, 0.70, 0.65];
  const tnpoints = [];
  for (let i = 0; i < 5; i++) {
    const v = vertex(i, tnValues[i]);
    tnpoints.push({ x: v.x, y: v.y, moveTo: i === 0 });
  }
  tnpoints.push({ close: true });
  slide.addShape(pres.shapes.CUSTOM_GEOMETRY, {
    x, y, w, h,
    fill: { color: C.primary, transparency: 85 },
    line: { color: C.primary, width: 3 },
    points: tnpoints,
  });

  // Labels des 5 dimensions (placés à 1.2× le rayon)
  const labels = [
    "Gouvernance\net cadre",
    "Pratique\nS.F.O.I.",
    "Capital\nintellectuel",
    "Capacités\nhumaines",
    "Infrastructure\net outils",
  ];
  for (let i = 0; i < 5; i++) {
    const v = vertex(i, 1.0);
    // Décalage du label vers l'extérieur
    const angle = -Math.PI / 2 + i * 2 * Math.PI / 5;
    const labelOffset = 0.55;
    const labelX = x + v.x + Math.cos(angle) * labelOffset - 0.9;
    const labelY = y + v.y + Math.sin(angle) * labelOffset - 0.25;
    slide.addText(labels[i], {
      x: labelX, y: labelY, w: 1.8, h: 0.5,
      fontSize: 10, fontFace: FONT, bold: true,
      color: C.slate700, align: "center", valign: "middle",
    });
  }

  // Légende en bas du pentagone
  const legendY = y + h - 0.35;
  const legendCx = x + cx;
  // T0
  slide.addShape(pres.shapes.RECTANGLE, {
    x: legendCx - 1.4, y: legendY, w: 0.22, h: 0.16,
    fill: { color: C.red }, line: { color: C.red, width: 0 },
  });
  slide.addText("T0", {
    x: legendCx - 1.13, y: legendY - 0.06, w: 0.4, h: 0.28,
    fontSize: 11, fontFace: FONT, color: C.slate700, valign: "middle",
  });
  // T+90
  slide.addShape(pres.shapes.RECTANGLE, {
    x: legendCx - 0.55, y: legendY, w: 0.22, h: 0.16,
    fill: { color: C.primary }, line: { color: C.primary, width: 0 },
  });
  slide.addText("T+90 jours", {
    x: legendCx - 0.27, y: legendY - 0.06, w: 1.5, h: 0.28,
    fontSize: 11, fontFace: FONT, color: C.slate700, valign: "middle",
  });
}

// === Steward emblème — connecteurs RECTANGLE (pas LINE) ===
function drawStewardEmbleme(slide, pres, x, y, w, h) {
  const cx = x + w / 2, cy = y + h / 2;
  const cardW = 2.6, cardH = 0.85;
  const circleR = Math.min(h * 0.42, 1.0);
  slide.addShape(pres.shapes.OVAL, {
    x: cx - circleR, y: cy - circleR, w: circleR * 2, h: circleR * 2,
    fill: { color: C.accent }, line: { color: C.accent_dark, width: 2 },
  });
  slide.addText("AI Practice\nSteward", {
    x: cx - circleR, y: cy - circleR + 0.15, w: circleR * 2, h: circleR * 2 - 0.3,
    fontSize: circleR > 0.85 ? 14 : 12, fontFace: FONT, bold: true,
    color: C.white, align: "center", valign: "middle", margin: 0,
  });
  const positions = [
    { txt: "Voir les boucles", x: x + 0.2, y: cy - cardH / 2 },
    { txt: "Travailler les 3 niveaux", x: cx - cardW / 2, y: y + 0.1 },
    { txt: "Tenir la résistance", x: x + w - cardW - 0.2, y: cy - cardH / 2 },
  ];
  positions.forEach(p => {
    const pcx = p.x + cardW / 2, pcy = p.y + cardH / 2;
    if (Math.abs(pcy - cy) < 0.1) {
      const fromX = (pcx < cx) ? p.x + cardW : cx - circleR;
      const toX = (pcx < cx) ? cx - circleR : p.x;
      const len = toX - fromX;
      if (len > 0.05) hLine(slide, pres, fromX, cy, len, C.accent, 0.025);
    } else {
      const fromY = p.y + cardH;
      const toY = cy - circleR;
      if (toY - fromY > 0.05) vLine(slide, pres, cx, fromY, toY - fromY, C.accent, 0.025);
    }
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: p.x, y: p.y, w: cardW, h: cardH,
      fill: { color: C.accent_light }, line: { color: C.accent, width: 1.5 }, rectRadius: 0.10,
    });
    slide.addText(p.txt, {
      x: p.x, y: p.y, w: cardW, h: cardH,
      fontSize: 13, fontFace: FONT, bold: true,
      color: C.accent_dark, align: "center", valign: "middle", margin: 0,
    });
  });
}

// === Mille-feuille individu/équipe/organisation (Bloc 5) ===
function drawMilleFeuille(slide, pres, x, y, w, h) {
  const layers = [
    { name: "ORGANISATION", desc: "Gouvernance · normes · infrastructure", color: C.accent, light: C.accent_light },
    { name: "ÉQUIPE", desc: "Pratiques partagées · vérifications collectives", color: C.primary, light: C.primary_light },
    { name: "INDIVIDU", desc: "Méthode S.F.O.I. · réflexes personnels", color: C.sfoi_s, light: C.sfoi_s_light },
  ];
  const n = layers.length;
  const layerH = (h - (n - 1) * 0.1) / n;
  layers.forEach((l, i) => {
    const ly = y + i * (layerH + 0.1);
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y: ly, w, h: layerH,
      fill: { color: l.light }, line: { color: l.color, width: 1.5 }, rectRadius: 0.08,
    });
    slide.addText(l.name, {
      x: x + 0.4, y: ly + 0.15, w: 4, h: 0.4,
      fontSize: 14, fontFace: FONT, bold: true, color: l.color, charSpacing: 3,
    });
    slide.addText(l.desc, {
      x: x + 0.4, y: ly + 0.55, w: w - 0.8, h: layerH - 0.65,
      fontSize: 12, fontFace: FONT, color: C.slate700, valign: "top",
    });
  });
}

module.exports = {
  C, FONT, hLine, vLine,
  addBrand, addBreadcrumb, addHeader,
  drawCarte4Intentions, drawEscalierSFOI,
  drawBoucleAmplificatrice, drawRedditionCognitive,
  drawIMIARadar, drawStewardEmbleme, drawMilleFeuille,
};