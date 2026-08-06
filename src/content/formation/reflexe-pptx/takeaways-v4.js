// ===================================================================
// TAKEAWAYS Reflexe IA v2 — 5 fiches A4 PORTRAIT (8.27 × 11.69)
// Format vertical : header haut · schéma central · 3 sections empilées
// ===================================================================
const pptxgen = require("pptxgenjs");
const H = require("./_helpers.js");
const { C, FONT, hLine, vLine,
        drawCarte4Intentions, drawEscalierSFOI,
        drawIMIARadar, drawMilleFeuille } = H;

const pres = new pptxgen();
// Layout custom A4 portrait
pres.defineLayout({ name: "A4P", width: 8.27, height: 11.69 });
pres.layout = "A4P";
pres.title = "Reflexe IA — Takeaways v2 (portrait)";

const W = 8.27;          // largeur A4
const M = 0.5;            // marge gauche/droite
const CW = W - 2 * M;     // largeur utile (7.27)

// === Helper header portrait ===
function addTakeawayHeader(slide, num, title, subtitle, color, light) {
  // Pastille numéro
  slide.addShape(pres.shapes.OVAL, {
    x: M, y: 0.4, w: 0.85, h: 0.85,
    fill: { color }, line: { color, width: 0 },
  });
  slide.addText(String(num).padStart(2, '0'), {
    x: M, y: 0.4, w: 0.85, h: 0.85, fontSize: 22, fontFace: FONT, bold: true,
    color: C.white, align: "center", valign: "middle", margin: 0,
  });
  // Kicker + titre
  slide.addText("TAKEAWAY · BLOC " + String(num).padStart(2, '0'), {
    x: M + 1.0, y: 0.35, w: CW - 2.5, h: 0.3, fontSize: 10, fontFace: FONT, bold: true,
    color, charSpacing: 3,
  });
  slide.addText(title, {
    x: M + 1.0, y: 0.65, w: CW - 2.5, h: 0.55, fontSize: 18, fontFace: FONT, bold: true,
    color: C.slate900,
  });
  if (subtitle) {
    slide.addText(subtitle, {
      x: M + 1.0, y: 1.2, w: CW - 1.5, h: 0.3, fontSize: 11, fontFace: FONT, italic: true,
      color: C.slate500,
    });
  }
  // Logo
  slide.addText([
    { text: "Reflexe ", options: { color: C.primary, bold: true } },
    { text: "IA", options: { color: C.accent, bold: true } },
  ], {
    x: W - M - 1.5, y: 0.45, w: 1.5, h: 0.35, fontSize: 13, fontFace: FONT,
    align: "right", valign: "middle", margin: 0,
  });
  slide.addText("FICHE MÉMO", {
    x: W - M - 1.5, y: 0.85, w: 1.5, h: 0.22, fontSize: 8, fontFace: FONT,
    color: C.slate500, charSpacing: 2, align: "right",
  });
  // Trait fin sous header
  hLine(slide, pres, M, 1.6, CW, light, 0.02);
}

// === Helper 3 sections empilées verticalement (portrait) ===
// Remplace addThreeColumns. Sections : Règles · Checklist · Pièges
function addThreeRows(slide, yStart, regles, checklist, pieges) {
  const rowH = 1.85;
  const gap = 0.18;
  const sections = [
    { y: yStart, color: C.sfoi_s, light: C.sfoi_s_light, dark: C.sfoi_s_dark,
      label: "✓ RÈGLES", items: regles, prefix: "• " },
    { y: yStart + rowH + gap, color: C.primary, light: C.primary_light, dark: C.primary_dark,
      label: "☐ CHECKLIST", items: checklist, prefix: "☐ " },
    { y: yStart + 2 * (rowH + gap), color: C.red, light: C.red_light, dark: C.red_dark,
      label: "✗ PIÈGES", items: pieges, prefix: "✗ " },
  ];
  sections.forEach(sec => {
    slide.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: M, y: sec.y, w: CW, h: rowH,
      fill: { color: sec.light }, line: { color: sec.color, width: 1 }, rectRadius: 0.08,
    });
    slide.addText(sec.label, {
      x: M + 0.25, y: sec.y + 0.12, w: CW - 0.5, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: sec.dark, charSpacing: 2,
    });
    // Items en 2 colonnes pour gagner de la place
    const colW = (CW - 0.6) / 2;
    sec.items.forEach((it, i) => {
      const colIdx = i % 2;
      const rowIdx = Math.floor(i / 2);
      slide.addText(sec.prefix + it, {
        x: M + 0.25 + colIdx * colW,
        y: sec.y + 0.5 + rowIdx * 0.42,
        w: colW - 0.1,
        h: 0.4, fontSize: 11, fontFace: FONT,
        color: C.slate700, valign: "top",
      });
    });
  });
}

// =====================================================================
// FICHE 01 — LLM & Plateforme
// =====================================================================
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addTakeawayHeader(s, 1, "Comprendre le LLM et la plateforme",
    "Forme convaincante ≠ fond vérifié.", C.primary, C.primary_light);
  // Schéma central : LLM seul vs Plateforme empilés verticalement
  // Bloc LLM seul (haut)
  s.addText("LLM SEUL", {
    x: M, y: 1.85, w: CW, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
    color: C.slate500, charSpacing: 3, align: "center",
  });
  s.addShape(pres.shapes.OVAL, {
    x: W / 2 - 0.65, y: 2.2, w: 1.3, h: 1.3,
    fill: { color: C.primary }, line: { color: C.primary, width: 0 },
  });
  s.addText("LLM", {
    x: W / 2 - 0.65, y: 2.2, w: 1.3, h: 1.3, fontSize: 18, fontFace: FONT, bold: true,
    color: C.white, align: "center", valign: "middle", margin: 0,
  });
  s.addText("Moteur de prédiction · Date de coupure stricte.", {
    x: M, y: 3.6, w: CW, h: 0.3, fontSize: 11, fontFace: FONT, italic: true,
    color: C.slate700, align: "center",
  });
  // Flèche descendante
  s.addShape(pres.shapes.DOWN_ARROW, {
    x: W / 2 - 0.2, y: 4.0, w: 0.4, h: 0.4,
    fill: { color: C.slate400 }, line: { color: C.slate400, width: 0 },
  });
  // Bloc Plateforme (bas)
  s.addText("PLATEFORME", {
    x: M, y: 4.55, w: CW, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
    color: C.primary, charSpacing: 3, align: "center",
  });
  s.addShape(pres.shapes.OVAL, {
    x: M + 0.6, y: 4.95, w: CW - 1.2, h: 1.6,
    fill: { color: C.primary_light }, line: { color: C.primary, width: 1.5 },
  });
  s.addShape(pres.shapes.OVAL, {
    x: W / 2 - 0.6, y: 5.4, w: 1.2, h: 0.8,
    fill: { color: C.primary }, line: { color: C.primary, width: 0 },
  });
  s.addText("LLM", {
    x: W / 2 - 0.6, y: 5.4, w: 1.2, h: 0.8, fontSize: 12, fontFace: FONT, bold: true,
    color: C.white, align: "center", valign: "middle", margin: 0,
  });
  // 4 mécanismes accrochés au nuage
  const plf = [
    { txt: "Recherche web", x: M + 0.7, y: 5.0 },
    { txt: "Mémoire", x: W - M - 1.95, y: 5.0 },
    { txt: "Code", x: M + 0.7, y: 6.25 },
    { txt: "Outils", x: W - M - 1.95, y: 6.25 },
  ];
  plf.forEach(p => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: p.x, y: p.y, w: 1.5, h: 0.4,
      fill: { color: C.white }, line: { color: C.primary, width: 1 }, rectRadius: 0.05,
    });
    s.addText(p.txt, {
      x: p.x, y: p.y, w: 1.5, h: 0.4, fontSize: 10, fontFace: FONT, bold: true,
      color: C.primary_dark, align: "center", valign: "middle", margin: 0,
    });
  });
  s.addText("ChatGPT · Claude.ai · Copilot · Gemini", {
    x: M, y: 6.8, w: CW, h: 0.25, fontSize: 9, fontFace: FONT, italic: true,
    color: C.slate500, align: "center",
  });
  // 3 sections empilées
  addThreeRows(s, 7.35,
    ["LLM prédit la suite la plus probable", "Pas d'accès à vos fichiers",
     "Ne signale pas l'incertitude", "Vous restez décisionnaire"],
    ["Donner un rôle dans le prompt", "Vérifier dates/chiffres/citations",
     "Fournir le contexte explicite", "Utiliser les espaces de travail"],
    ["Confondre LLM brut et plateforme", "Hallucination : forme convaincante",
     "Plateforme avec recherche = + de vigilance", "Croire que l'assistant comprend"],
  );
}

// =====================================================================
// FICHE 02 — Risques & cadre
// =====================================================================
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addTakeawayHeader(s, 2, "Risques, cadre et responsabilités",
    "Trois risques. Trois règles essentielles.", C.amber, C.amber_light);
  // 3 cards empilées (les 3 règles)
  const rules = [
    { color: C.primary, light: C.primary_light, label: "EXFILTRATION",
      rule: "Avant de coller : info publique ? Vérifier le type de licence." },
    { color: C.amber, light: C.amber_light, label: "RELECTURE",
      rule: "Avant de publier : yeux humains relisent dates, chiffres, références, engagements." },
    { color: C.accent, light: C.accent_light, label: "INDUSTRIALISATION",
      rule: "Avant d'automatiser : validation et supervision humaine maintenue." },
  ];
  rules.forEach((r, i) => {
    const y = 1.85 + i * 1.65;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: M, y, w: CW, h: 1.5,
      fill: { color: r.light }, line: { color: r.color, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("LA RÈGLE DE", {
      x: M + 0.3, y: y + 0.2, w: 2.5, h: 0.3, fontSize: 9, fontFace: FONT, bold: true,
      color: r.color, charSpacing: 2,
    });
    s.addText(r.label, {
      x: M + 0.3, y: y + 0.5, w: 4, h: 0.55, fontSize: 18, fontFace: FONT, bold: true,
      color: r.color,
    });
    s.addText(r.rule, {
      x: M + 0.3, y: y + 1.0, w: CW - 0.6, h: 0.5, fontSize: 11, fontFace: FONT,
      color: C.slate700, valign: "top",
    });
  });
  // 3 sections empilées
  addThreeRows(s, 7.0,
    ["4 catégories à risque : clients · RH · stratégiques · code",
     "3 niveaux : public / Pro / Enterprise",
     "Vérification ≠ assistant — sources officielles",
     "On ne saute pas une marche S.F.O.I."],
    ["Info publiable sans conséquence ?",
     "Personnes identifiables ?",
     "Avantage concurrentiel ?",
     "Validation, supervision ?"],
    ["Industrialisation prématurée (erreur × N)",
     "Tout coller dans une plateforme gratuite",
     "Faire confirmer une erreur par l'assistant",
     "Oublier l'AI Act Article 4"],
  );
}

// =====================================================================
// FICHE 03 — 4 types de prompts
// =====================================================================
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addTakeawayHeader(s, 3, "Choisir le bon type de prompt",
    "Un type = un gabarit. La carte avant la rédaction.", C.sfoi_o, C.sfoi_o_light);
  // Carte 2x2 — passée à dimensions portrait
  drawCarte4Intentions(s, pres, M + 1.5, 2.6, CW - 3.0, 4.0);
  // 3 sections empilées
  addThreeRows(s, 7.0,
    ["Exploration · ne sait pas encore",
     "Structuration · contenu brut, pas de perte",
     "Production · livrable défini + exemples",
     "Vérification · document + critères + réflexion"],
    ["Qu'est-ce que je veux faire ?",
     "Comprendre · organiser · créer · contrôler ?",
     "Quel gabarit applique cette intention ?",
     "Champ Réflexion activé ?"],
    ["Mauvais type → mauvaise réponse",
     "Pas d'exemples = générique",
     "Synthétiser au lieu de structurer",
     "Vérifier sans source de référence"],
  );
}

// =====================================================================
// FICHE 04 — S.F.O.I.
// =====================================================================
{
  const s = pres.addSlide();
  s.background = { color: C.white };
  addTakeawayHeader(s, 4, "La méthode S.F.O.I.",
    "Quatre actes. Toujours dans cet ordre.", C.sfoi_s, C.sfoi_s_light);
  // Escalier — passé à dimensions portrait
  drawEscalierSFOI(s, pres, M, 1.95, CW, 4.5);
  // 3 sections empilées
  addThreeRows(s, 7.0,
    ["S · Structurer = 100 % matière sans perte",
     "F · Fiabiliser = chaque affirmation vérifiable",
     "O · Optimiser = livrable directement exploitable",
     "I · Industrialiser = système gouverné"],
    ["À quel acte suis-je ?",
     "Ai-je fait le précédent ?",
     "Source de référence fournie ?",
     "Critère de passage rempli ?"],
    ["Confondre Structurer et Résumer",
     "Sauter Fiabiliser car « ça semble bien »",
     "Démarrer à Optimiser sous pression",
     "Industrialiser du contenu non vérifié"],
  );
}

// =====================================================================
// FICHE 05 — IMIA + Steward
// =====================================================================
{
  const s = pres.addSlide();
  s.background = { color: C.paper };
  addTakeawayHeader(s, 5, "IMIA, boucles et AI Practice Steward",
    "S.F.O.I. = méthode personnelle. IMIA = lecture collective.", C.accent, C.accent_light);
  // Mille-feuille (haut, pleine largeur)
  drawMilleFeuille(s, pres, M, 1.85, CW, 2.5);
  // Composition IMIA pondérée (en dessous)
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: M, y: 4.5, w: CW, h: 2.2,
    fill: { color: C.white }, line: { color: C.accent, width: 1.5 }, rectRadius: 0.08,
  });
  s.addText("IMIA · 5 DIMENSIONS PONDÉRÉES (/100)", {
    x: M + 0.25, y: 4.6, w: CW - 0.5, h: 0.3, fontSize: 10, fontFace: FONT, bold: true,
    color: C.accent_dark, charSpacing: 2,
  });
  const dims = [
    { k: "Gouvernance et cadre", v: "30", color: C.primary },
    { k: "Pratique S.F.O.I.", v: "20", color: C.sfoi_s },
    { k: "Capital intellectuel (skills)", v: "20", color: C.sfoi_o },
    { k: "Capacités humaines", v: "20", color: C.sfoi_f },
    { k: "Infrastructure et outils", v: "10", color: C.slate500 },
  ];
  dims.forEach((d, i) => {
    const y = 4.95 + i * 0.32;
    s.addText(d.k, {
      x: M + 0.25, y, w: CW - 1.5, h: 0.3, fontSize: 11, fontFace: FONT,
      color: C.slate900, valign: "middle",
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: W - M - 1.0, y: y + 0.04, w: 0.9, h: 0.22,
      fill: { color: d.color }, line: { color: d.color, width: 0 }, rectRadius: 0.04,
    });
    s.addText(d.v + " pts", {
      x: W - M - 1.0, y: y + 0.04, w: 0.9, h: 0.22, fontSize: 9, fontFace: FONT, bold: true,
      color: C.white, align: "center", valign: "middle", margin: 0,
    });
  });
  // 3 sections empilées
  addThreeRows(s, 7.0,
    ["Boucle ampli · usage↑ vérification↓ choc",
     "Reddition cognitive · capacité↘ silencieuse",
     "Steward = formateur ≠ consultant",
     "3 capacités : voir · niveaux · résistance"],
    ["Mesurer IMIA T0 ?",
     "Visibilité des 2 boucles dans l'équipe ?",
     "Skills capitalisés ou prompts jetables ?",
     "AI Practice Steward identifié en interne ?"],
    ["Confondre déploiement et maturité",
     "Score IMIA = nombre d'utilisateurs",
     "Croire que la formation suffit",
     "Industrialiser sans gouvernance"],
  );
}

pres.writeFile({ fileName: "Reflexe-IA-Takeaways-v2-portrait.pptx" }).then(() => {
  console.log("✓ Takeaways v2 (A4 portrait) → Reflexe-IA-Takeaways-v2-portrait.pptx");
});