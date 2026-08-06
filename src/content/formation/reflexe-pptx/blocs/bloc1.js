// BLOC 1 — Comprendre l'IA générative · 8 slides
// Principe : slide = ancre, voix = chair. Mots-clés et structure visuelle.
module.exports = function(pres, H) {
  const { C, FONT, addBrand, addHeader, hLine, vLine } = H;
  const BLOC = 1;

  // --- 1.1 Accroche ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 1 · COMPRENDRE", null, BLOC);
    const tools = ["Claude", "ChatGPT", "Copilot", "Gemini"];
    tools.forEach((t, i) => {
      const x = 0.6 + i * 3.05;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x, y: 2.8, w: 2.85, h: 1.2,
        fill: { color: C.primary_light }, line: { color: C.primary, width: 1.5 }, rectRadius: 0.1,
      });
      s.addText(t, {
        x, y: 2.8, w: 2.85, h: 1.2, fontSize: 24, fontFace: FONT, bold: true,
        color: C.primary_dark, align: "center", valign: "middle", margin: 0,
      });
    });
    s.addText("La différence ne vient pas du talent.", {
      x: 0.6, y: 5.2, w: 12.1, h: 0.6, fontSize: 22, fontFace: FONT,
      color: C.slate700, align: "center",
    });
    s.addText("Elle vient de la compréhension.", {
      x: 0.6, y: 5.8, w: 12.1, h: 0.7, fontSize: 26, fontFace: FONT, bold: true, italic: true,
      color: C.primary, align: "center",
    });
    addBrand(s);
  }

  // --- 1.2 Le LLM ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 1 · LLM", null, BLOC);
    s.addText("Large Language Model", {
      x: 0.6, y: 1.4, w: 12.1, h: 0.5, fontSize: 16, fontFace: FONT, italic: true,
      color: C.slate500, align: "center",
    });
    // Sources (gauche)
    s.addText("Milliards de textes", {
      x: 0.6, y: 2.4, w: 3.5, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.slate500, charSpacing: 2, align: "center",
    });
    ["Livres", "Articles", "Code", "Conversations", "Sites web"].forEach((t, i) => {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 1.0, y: 2.85 + i * 0.5, w: 2.5, h: 0.4,
        fill: { color: C.slate100 }, line: { color: C.slate300, width: 1 }, rectRadius: 0.05,
      });
      s.addText(t, {
        x: 1.0, y: 2.85 + i * 0.5, w: 2.5, h: 0.4, fontSize: 12, fontFace: FONT,
        color: C.slate700, align: "center", valign: "middle", margin: 0,
      });
    });
    s.addShape(pres.shapes.RIGHT_ARROW, {
      x: 3.85, y: 3.95, w: 0.6, h: 0.4,
      fill: { color: C.slate400 }, line: { color: C.slate400, width: 0 },
    });
    // LLM central
    s.addShape(pres.shapes.OVAL, {
      x: 5.1, y: 3.15, w: 2.6, h: 2.0,
      fill: { color: C.primary }, line: { color: C.primary_dark, width: 2 },
    });
    s.addText("LLM", {
      x: 5.1, y: 3.15, w: 2.6, h: 2.0, fontSize: 38, fontFace: FONT, bold: true,
      color: C.white, align: "center", valign: "middle", margin: 0,
    });
    s.addShape(pres.shapes.RIGHT_ARROW, {
      x: 8.0, y: 3.95, w: 0.6, h: 0.4,
      fill: { color: C.slate400 }, line: { color: C.slate400, width: 0 },
    });
    // Sortie
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 9.0, y: 3.25, w: 3.7, h: 1.8,
      fill: { color: C.amber_light }, line: { color: C.amber, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("La suite\nla plus probable\nde mots", {
      x: 9.0, y: 3.25, w: 3.7, h: 1.8, fontSize: 16, fontFace: FONT, bold: true,
      color: C.amber_dark, align: "center", valign: "middle", margin: 0,
    });
    // Pivot
    s.addText("Il ne comprend pas. Il prédit.", {
      x: 0.6, y: 6.1, w: 12.1, h: 0.7, fontSize: 28, fontFace: FONT, bold: true, italic: true,
      color: C.slate900, align: "center",
    });
    addBrand(s);
  }

  // --- 1.3 Métaphore stagiaire ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 1 · MÉTAPHORE", null, BLOC);
    s.addText("Un stagiaire extrêmement cultivé. Premier jour chez vous.", {
      x: 0.6, y: 1.4, w: 12.1, h: 0.5, fontSize: 18, fontFace: FONT, italic: true,
      color: C.slate700, align: "center",
    });
    // Card gauche
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 2.3, w: 5.95, h: 4.0,
      fill: { color: C.sfoi_s_light }, line: { color: C.sfoi_s, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("LE SAVOIR", {
      x: 0.85, y: 2.5, w: 5.5, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.sfoi_s_dark, charSpacing: 2,
    });
    ["Lit · livres · rapports", "Droit · finance · marketing",
     "Gestion de projet", "Français · anglais"].forEach((line, i) => {
      s.addText("✓ " + line, {
        x: 0.85, y: 3.05 + i * 0.7, w: 5.5, h: 0.5, fontSize: 16, fontFace: FONT,
        color: C.slate900, valign: "top",
      });
    });
    // Card droite
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 6.75, y: 2.3, w: 5.95, h: 4.0,
      fill: { color: C.red_light }, line: { color: C.red, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("VOTRE CONTEXTE", {
      x: 7.0, y: 2.5, w: 5.5, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.red_dark, charSpacing: 2,
    });
    ["Vos clients", "Vos procédures", "Vos contraintes sectorielles",
     "La réunion de lundi"].forEach((line, i) => {
      s.addText("✗ " + line, {
        x: 7.0, y: 3.05 + i * 0.7, w: 5.5, h: 0.5, fontSize: 16, fontFace: FONT,
        color: C.slate900, valign: "top",
      });
    });
    // Pivot
    s.addText("À vous de fournir le contexte.", {
      x: 0.6, y: 6.6, w: 12.1, h: 0.5, fontSize: 20, fontFace: FONT, bold: true, italic: true,
      color: C.slate900, align: "center",
    });
    addBrand(s);
  }

  // --- 1.4 Nuance plateforme ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 1 · NUANCE",
      "Vous n'utilisez pas un LLM. Vous utilisez une plateforme.", BLOC);
    // Gauche : LLM seul
    s.addText("LLM SEUL", {
      x: 0.6, y: 2.3, w: 5.5, h: 0.4, fontSize: 13, fontFace: FONT, bold: true,
      color: C.slate500, charSpacing: 3, align: "center",
    });
    s.addShape(pres.shapes.OVAL, {
      x: 2.7, y: 2.85, w: 1.4, h: 1.4,
      fill: { color: C.primary }, line: { color: C.primary, width: 0 },
    });
    s.addText("LLM", {
      x: 2.7, y: 2.85, w: 1.4, h: 1.4, fontSize: 14, fontFace: FONT, bold: true,
      color: C.white, align: "center", valign: "middle", margin: 0,
    });
    s.addText("Date de coupure stricte", {
      x: 0.6, y: 4.35, w: 5.5, h: 0.35, fontSize: 12, fontFace: FONT, italic: true,
      color: C.slate700, align: "center",
    });
    s.addShape(pres.shapes.RIGHT_ARROW, {
      x: 6.05, y: 3.4, w: 0.6, h: 0.4,
      fill: { color: C.slate400 }, line: { color: C.slate400, width: 0 },
    });
    // Droite : Plateforme
    s.addText("PLATEFORME", {
      x: 6.8, y: 2.3, w: 5.9, h: 0.4, fontSize: 13, fontFace: FONT, bold: true,
      color: C.primary, charSpacing: 3, align: "center",
    });
    s.addShape(pres.shapes.OVAL, {
      x: 6.5, y: 2.85, w: 6.2, h: 2.2,
      fill: { color: C.primary_light }, line: { color: C.primary, width: 1.5 },
    });
    s.addShape(pres.shapes.OVAL, {
      x: 9.05, y: 3.45, w: 1.4, h: 1.0,
      fill: { color: C.primary }, line: { color: C.primary, width: 0 },
    });
    s.addText("LLM", {
      x: 9.05, y: 3.45, w: 1.4, h: 1.0, fontSize: 14, fontFace: FONT, bold: true,
      color: C.white, align: "center", valign: "middle", margin: 0,
    });
    const plf = [
      { txt: "Recherche web", x: 6.7, y: 3.0 },
      { txt: "Mémoire", x: 11.05, y: 3.0 },
      { txt: "Code", x: 6.7, y: 4.5 },
      { txt: "Outils", x: 11.05, y: 4.5 },
    ];
    plf.forEach(p => {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: p.x, y: p.y, w: 1.5, h: 0.4,
        fill: { color: C.white }, line: { color: C.primary, width: 1 }, rectRadius: 0.05,
      });
      s.addText(p.txt, {
        x: p.x, y: p.y, w: 1.5, h: 0.4, fontSize: 11, fontFace: FONT, bold: true,
        color: C.primary_dark, align: "center", valign: "middle", margin: 0,
      });
    });
    s.addText("ChatGPT · Claude.ai · Copilot · Gemini", {
      x: 6.5, y: 5.1, w: 6.2, h: 0.3, fontSize: 10, fontFace: FONT, italic: true,
      color: C.slate500, align: "center",
    });
    // Pivot
    s.addText("Connaître ce qui parle.", {
      x: 0.6, y: 6.4, w: 12.1, h: 0.6, fontSize: 24, fontFace: FONT, bold: true, italic: true,
      color: C.slate900, align: "center",
    });
    addBrand(s);
  }

  // --- 1.5 Hallucination · faux-chat ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 1 · HALLUCINATION", null, BLOC);
    s.addText("L'hallucination.", {
      x: 0.6, y: 1.4, w: 12.1, h: 0.6, fontSize: 32, fontFace: FONT, bold: true,
      color: C.slate900,
    });
    s.addText("Forme correcte. Fond potentiellement faux.", {
      x: 0.6, y: 1.95, w: 12.1, h: 0.4, fontSize: 14, fontFace: FONT,
      color: C.slate500,
    });

    // === Faux écran de chat (gauche) ===
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 2.55, w: 8.0, h: 4.1,
      fill: { color: C.white }, line: { color: C.slate200, width: 1.5 }, rectRadius: 0.12,
    });
    // Bulle utilisateur (en haut, fond bleu très clair)
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.95, y: 2.8, w: 7.3, h: 0.5,
      fill: { color: "EFF6FF" }, line: { color: C.primary_light, width: 1 }, rectRadius: 0.08,
    });
    s.addText("Cite-moi la référence légale qui encadre les CDD en France.", {
      x: 1.1, y: 2.8, w: 7.0, h: 0.5, fontSize: 12, fontFace: FONT,
      color: C.slate700, valign: "middle", margin: 0,
    });
    // Bulle réponse (faux article juridique)
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.95, y: 3.5, w: 7.3, h: 2.4,
      fill: { color: C.white }, line: { color: C.slate200, width: 1 }, rectRadius: 0.08,
    });
    s.addText("Selon l'article L1242-12-3 du Code du travail, modifié par la loi n° 2024-148 du 27 février 2024, la durée maximale d'un CDD de remplacement est de 18 mois renouvellements compris. Le délai de carence est régi par l'article L1244-3…", {
      x: 1.1, y: 3.6, w: 7.0, h: 2.2, fontSize: 11, fontFace: FONT,
      color: C.slate900, valign: "top",
      paraSpaceAfter: 6,
    });
    // Tampon rouge oblique (rectangle avec rotation légère)
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 5.4, y: 5.0, w: 2.7, h: 0.55,
      fill: { color: C.red }, line: { color: C.red_dark, width: 2 }, rectRadius: 0.05,
      rotate: -8,
    });
    s.addText("L1242-12-3 N'EXISTE PAS", {
      x: 5.4, y: 5.0, w: 2.7, h: 0.55, fontSize: 12, fontFace: FONT, bold: true,
      color: C.white, align: "center", valign: "middle", margin: 0,
      rotate: -8, charSpacing: 1,
    });
    // Légende sous le faux-chat
    s.addText("Style juridique parfait. Article inventé.", {
      x: 0.6, y: 6.15, w: 8.0, h: 0.35, fontSize: 12, fontFace: FONT, italic: true,
      color: C.slate500, align: "center",
    });

    // === Card crème POURQUOI (droite) ===
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 8.85, y: 2.55, w: 3.85, h: 4.1,
      fill: { color: C.amber_light }, line: { color: C.amber, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("POURQUOI", {
      x: 9.1, y: 2.7, w: 3.45, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.amber_dark, charSpacing: 2,
    });
    s.addText("Une citation juridique bien formatée est statistiquement très plausible. Le modèle a lu des milliers de références. Il en produit une qui ressemble à du vrai.", {
      x: 9.1, y: 3.1, w: 3.45, h: 2.1, fontSize: 12, fontFace: FONT,
      color: C.slate900, valign: "top",
    });
    hLine(s, pres, 9.1, 5.4, 3.35, C.amber);
    s.addText("Pas un mensonge.", {
      x: 9.1, y: 5.55, w: 3.45, h: 0.4, fontSize: 14, fontFace: FONT, bold: true,
      color: C.slate900,
    });
    s.addText("Le résultat normal de la prédiction.", {
      x: 9.1, y: 5.95, w: 3.45, h: 0.55, fontSize: 13, fontFace: FONT, italic: true,
      color: C.slate700,
    });

    // Pivot final
    s.addText("La forme convaincante n'est pas une preuve de véracité.", {
      x: 0.6, y: 6.85, w: 12.1, h: 0.4, fontSize: 14, fontFace: FONT, bold: true, italic: true,
      color: C.slate900, align: "center",
    });
    addBrand(s);
  }

  // --- 1.6 Trois limites ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 1 · LIMITES", "Trois choses qu'il ne fait pas.", BLOC);
    const limits = [
      { num: "1", color: C.primary, light: C.primary_light, title: "La date de coupure",
        desc: "Il ne sait pas qu'il ne sait pas." },
      { num: "2", color: C.amber, light: C.amber_light, title: "Pas vos documents",
        desc: "Sauf si vous les lui fournissez." },
      { num: "3", color: C.red, light: C.red_light, title: "Pas l'incertitude",
        desc: "Toujours la même assurance.\nC'est à vous de douter." },
    ];
    limits.forEach((l, i) => {
      const x = 0.6 + i * 4.2;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x, y: 2.0, w: 4.0, h: 4.7,
        fill: { color: l.light }, line: { color: l.color, width: 1.5 }, rectRadius: 0.1,
      });
      s.addShape(pres.shapes.OVAL, {
        x: x + 0.3, y: 2.2, w: 0.7, h: 0.7,
        fill: { color: l.color }, line: { color: l.color, width: 0 },
      });
      s.addText(l.num, {
        x: x + 0.3, y: 2.2, w: 0.7, h: 0.7,
        fontSize: 24, fontFace: FONT, bold: true, color: C.white,
        align: "center", valign: "middle", margin: 0,
      });
      s.addText(l.title, {
        x: x + 0.3, y: 3.2, w: 3.4, h: 0.8, fontSize: 22, fontFace: FONT, bold: true,
        color: C.slate900, valign: "top",
      });
      s.addText(l.desc, {
        x: x + 0.3, y: 4.5, w: 3.4, h: 1.8, fontSize: 14, fontFace: FONT, italic: true,
        color: C.slate700, valign: "top",
      });
    });
    addBrand(s);
  }

  // --- 1.7 Quatre implications ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 1 · IMPLICATIONS", "Dans votre quotidien.", BLOC);
    const items = [
      { x: 0.6, y: 1.95, color: C.primary, light: C.primary_light,
        title: "La qualité de la demande",
        desc: "= la qualité de la réponse." },
      { x: 6.75, y: 1.95, color: C.amber, light: C.amber_light,
        title: "À vérifier toujours",
        desc: "Dates · chiffres · citations · références." },
      { x: 0.6, y: 4.5, color: C.accent, light: C.accent_light,
        title: "Vous restez décisionnaire",
        desc: "L'assistant propose. Vous validez." },
      { x: 6.75, y: 4.5, color: C.sfoi_s, light: C.sfoi_s_light,
        title: "Espaces dédiés",
        desc: "Projets · instructions · mémoire pour les tâches récurrentes." },
    ];
    items.forEach(it => {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: it.x, y: it.y, w: 5.95, h: 2.45,
        fill: { color: it.light }, line: { color: it.color, width: 1.5 }, rectRadius: 0.1,
      });
      s.addText(it.title, {
        x: it.x + 0.25, y: it.y + 0.4, w: 5.5, h: 0.7, fontSize: 22, fontFace: FONT, bold: true,
        color: it.color, valign: "top",
      });
      s.addText(it.desc, {
        x: it.x + 0.25, y: it.y + 1.3, w: 5.5, h: 1.0, fontSize: 16, fontFace: FONT, italic: true,
        color: C.slate700, valign: "top",
      });
    });
    addBrand(s);
  }

  // --- 1.8 Clôture ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 1 · CLÔTURE", null, BLOC);
    // 2 cards : LLM vs Plateforme
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 1.5, w: 5.95, h: 1.4,
      fill: { color: C.primary_light }, line: { color: C.primary, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("LLM", {
      x: 0.85, y: 1.6, w: 5.5, h: 0.4, fontSize: 13, fontFace: FONT, bold: true,
      color: C.primary_dark, charSpacing: 2,
    });
    s.addText("Moteur de prédiction", {
      x: 0.85, y: 2.0, w: 5.5, h: 0.5, fontSize: 18, fontFace: FONT, bold: true,
      color: C.slate900,
    });
    s.addText("Il prédit. Il ne comprend pas.", {
      x: 0.85, y: 2.5, w: 5.5, h: 0.4, fontSize: 12, fontFace: FONT, italic: true,
      color: C.slate700,
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 6.75, y: 1.5, w: 5.95, h: 1.4,
      fill: { color: C.accent_light }, line: { color: C.accent, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("PLATEFORME", {
      x: 7.0, y: 1.6, w: 5.5, h: 0.4, fontSize: 13, fontFace: FONT, bold: true,
      color: C.accent_dark, charSpacing: 2,
    });
    s.addText("LLM + recherche · mémoire · outils", {
      x: 7.0, y: 2.0, w: 5.5, h: 0.5, fontSize: 18, fontFace: FONT, bold: true,
      color: C.slate900,
    });
    s.addText("Connaître ce qui parle.", {
      x: 7.0, y: 2.5, w: 5.5, h: 0.4, fontSize: 12, fontFace: FONT, italic: true,
      color: C.slate700,
    });
    // 3 limites
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 3.1, w: 5.95, h: 2.5,
      fill: { color: C.red_light }, line: { color: C.red, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("3 LIMITES", {
      x: 0.85, y: 3.2, w: 5.5, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.red_dark, charSpacing: 2,
    });
    ["Date de coupure", "Pas d'accès à vos fichiers", "Pas l'incertitude"].forEach((line, i) => {
      s.addText("✗ " + line, {
        x: 0.85, y: 3.65 + i * 0.55, w: 5.5, h: 0.5, fontSize: 16, fontFace: FONT,
        color: C.slate900, valign: "top",
      });
    });
    // 4 implications
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 6.75, y: 3.1, w: 5.95, h: 2.5,
      fill: { color: C.sfoi_s_light }, line: { color: C.sfoi_s, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("4 IMPLICATIONS", {
      x: 7.0, y: 3.2, w: 5.5, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.sfoi_s_dark, charSpacing: 2,
    });
    ["Donner un rôle", "Vérifier dates · chiffres",
     "Garder la décision", "Espaces dédiés"].forEach((line, i) => {
      s.addText("✓ " + line, {
        x: 7.0, y: 3.65 + i * 0.45, w: 5.5, h: 0.4, fontSize: 14, fontFace: FONT,
        color: C.slate900, valign: "top",
      });
    });
    // Pivot final
    s.addText("Au bloc suivant : les risques concrets et les règles pour les éviter.", {
      x: 0.6, y: 6.4, w: 12.1, h: 0.5, fontSize: 14, fontFace: FONT, italic: true, bold: true,
      color: C.primary_dark, align: "center",
    });
    addBrand(s);
  }
};