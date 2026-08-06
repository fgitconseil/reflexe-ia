// BLOC 4 — Méthode S.F.O.I. · 8 slides
module.exports = function(pres, H) {
  const { C, FONT, addBrand, addHeader, hLine, vLine, drawEscalierSFOI } = H;
  const BLOC = 4;

  // --- 4.1 Accroche · Marc ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 4 · L'HISTOIRE DE MARC", null, BLOC);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 1.4, w: 12.1, h: 1.5,
      fill: { color: C.primary_light }, line: { color: C.primary, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("MERCREDI MATIN · RESSOURCES HUMAINES", {
      x: 0.85, y: 1.55, w: 11.6, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.primary_dark, charSpacing: 2,
    });
    s.addText("Marc reçoit la commande : une charte interne d'usage de l'IA pour vendredi.", {
      x: 0.85, y: 1.95, w: 11.6, h: 0.45, fontSize: 18, fontFace: FONT, bold: true,
      color: C.slate900,
    });
    s.addText("3 heures de notes (direction, juridique, IT). Désorganisées. Parfois contradictoires. Pas expert IA.", {
      x: 0.85, y: 2.45, w: 11.6, h: 0.4, fontSize: 13, fontFace: FONT, italic: true,
      color: C.slate700,
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 3.3, w: 5.95, h: 1.6,
      fill: { color: C.slate50 }, line: { color: C.slate300, width: 1 }, rectRadius: 0.08,
    });
    s.addText("CE QUE MARC FAIT", {
      x: 0.85, y: 3.45, w: 5.5, h: 0.3, fontSize: 10, fontFace: FONT, bold: true,
      color: C.slate500, charSpacing: 2,
    });
    s.addText('Il ouvre un assistant et tape :\n« Rédige-moi une charte d\'usage de l\'IA pour notre entreprise. »', {
      x: 0.85, y: 3.8, w: 5.5, h: 0.95, fontSize: 13, fontFace: FONT, italic: true,
      color: C.slate900,
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 6.75, y: 3.3, w: 5.95, h: 1.6,
      fill: { color: C.red_light }, line: { color: C.red, width: 1 }, rectRadius: 0.08,
    });
    s.addText("LE RÉSULTAT", {
      x: 7.0, y: 3.45, w: 5.5, h: 0.3, fontSize: 10, fontFace: FONT, bold: true,
      color: C.red_dark, charSpacing: 2,
    });
    s.addText("L'assistant produit quelque chose. Bien structuré. Ça ressemble à une charte.\nMais ce n'est pas la sienne.", {
      x: 7.0, y: 3.8, w: 5.5, h: 0.95, fontSize: 13, fontFace: FONT,
      color: C.slate900,
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 5.2, w: 12.1, h: 1.0,
      fill: { color: C.amber_light }, line: { color: C.amber, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("Marc a sauté les étapes.", {
      x: 0.85, y: 5.3, w: 11.6, h: 0.5, fontSize: 22, fontFace: FONT, bold: true,
      color: C.amber_dark,
    });
    s.addText("Une méthode existe. Quatre actes, toujours dans le même ordre. Une règle absolue : ne jamais sauter d'étape.", {
      x: 0.85, y: 5.8, w: 11.6, h: 0.4, fontSize: 13, fontFace: FONT, italic: true,
      color: C.slate700,
    });
    s.addText("S · F · O · I — Structurer, Fiabiliser, Optimiser, Industrialiser.", {
      x: 0.6, y: 6.55, w: 12.1, h: 0.5, fontSize: 18, fontFace: FONT, bold: true,
      color: C.primary, align: "center", charSpacing: 2,
    });
    addBrand(s);
  }

  // --- 4.2 Escalier SFOI ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 4 · LA MÉTHODE S.F.O.I.",
      "Quatre actes, toujours dans cet ordre. On ne saute pas une marche.", BLOC);
    drawEscalierSFOI(s, pres, 0.8, 1.95, 11.7, 4.4);
    addBrand(s);
  }

  // --- 4.3 Détail des 4 actes ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 4 · LES 4 ACTES",
      "Chaque acte est une barrière de sécurité. Pas une case à cocher.", BLOC);
    const acts = [
      { x: 0.6, color: C.sfoi_s, dark: C.sfoi_s_dark, light: C.sfoi_s_light, letter: "S",
        verb: "Structurer", obj: "Organiser 100 % de la matière brute. Sans en perdre un seul élément.",
        crit: "Aucune information n'a disparu. Le chaos est devenu un plan." },
      { x: 3.65, color: C.sfoi_f, dark: C.sfoi_f_dark, light: C.sfoi_f_light, letter: "F",
        verb: "Fiabiliser", obj: "Rendre chaque affirmation vérifiable. Sortir de la confiance implicite.",
        crit: "Sources citées · obligations manquantes identifiées · zones d'incertitude signalées." },
      { x: 6.7, color: C.sfoi_o, dark: C.sfoi_o_dark, light: C.sfoi_o_light, letter: "O",
        verb: "Optimiser", obj: "Transformer le contenu fiabilisé en outil exploitable, sans retraitement.",
        crit: "Le livrable peut être utilisé tel quel par son destinataire final." },
      { x: 9.75, color: C.sfoi_i, dark: C.sfoi_i_dark, light: C.sfoi_i_light, letter: "I",
        verb: "Industrialiser", obj: "Intégrer dans un système gouverné. Avec rôles, traçabilité, mécanismes d'arrêt.",
        crit: "Workflow documenté, testé, supervisé, mesuré." },
    ];
    acts.forEach(a => {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: a.x, y: 2.0, w: 2.95, h: 4.7,
        fill: { color: a.light }, line: { color: a.color, width: 1.5 }, rectRadius: 0.1,
      });
      s.addShape(pres.shapes.OVAL, {
        x: a.x + (2.95 - 0.85) / 2, y: 2.2, w: 0.85, h: 0.85,
        fill: { color: a.color }, line: { color: a.color, width: 0 },
      });
      s.addText(a.letter, {
        x: a.x + (2.95 - 0.85) / 2, y: 2.2, w: 0.85, h: 0.85,
        fontSize: 34, fontFace: FONT, bold: true, color: C.white,
        align: "center", valign: "middle", margin: 0,
      });
      s.addText(a.verb, {
        x: a.x + 0.1, y: 3.2, w: 2.75, h: 0.5, fontSize: 18, fontFace: FONT, bold: true,
        color: a.dark, align: "center",
      });
      s.addText("OBJECTIF", {
        x: a.x + 0.2, y: 3.85, w: 2.55, h: 0.3, fontSize: 9, fontFace: FONT, bold: true,
        color: C.slate500, charSpacing: 2,
      });
      s.addText(a.obj, {
        x: a.x + 0.2, y: 4.15, w: 2.55, h: 1.3, fontSize: 11, fontFace: FONT,
        color: C.slate700, valign: "top",
      });
      s.addText("CRITÈRE DE PASSAGE", {
        x: a.x + 0.2, y: 5.5, w: 2.55, h: 0.3, fontSize: 9, fontFace: FONT, bold: true,
        color: a.dark, charSpacing: 2,
      });
      s.addText(a.crit, {
        x: a.x + 0.2, y: 5.8, w: 2.55, h: 0.85, fontSize: 11, fontFace: FONT, italic: true,
        color: C.slate900, valign: "top",
      });
    });
    s.addText("Industrialiser dépasse l'individu. Il engage l'organisation — sujet du bloc 5.", {
      x: 0.6, y: 6.85, w: 12.1, h: 0.35, fontSize: 12, fontFace: FONT, italic: true,
      color: C.slate500, align: "center",
    });
    addBrand(s);
  }

  // --- 4.4 Marc applique · Structurer ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 4 · MARC APPLIQUE · S",
      "Acte 1 — Structurer. Du chaos au plan.", BLOC);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 1.95, w: 12.1, h: 0.55,
      fill: { color: C.sfoi_o_light }, line: { color: C.sfoi_o, width: 0 }, rectRadius: 0.06,
    });
    s.addText([
      { text: "RAPPEL · ", options: { bold: true, color: C.sfoi_o_dark, fontSize: 10, charSpacing: 2 } },
      { text: "Marc fait un prompt de structuration (bloc 3). Il fournit, l'assistant organise.", options: { color: C.slate700, fontSize: 12, italic: true } },
    ], { x: 0.85, y: 1.95, w: 11.6, h: 0.55, fontFace: FONT, valign: "middle" });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 2.75, w: 5.95, h: 4.0,
      fill: { color: C.sfoi_s_light }, line: { color: C.sfoi_s, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("LE PROMPT DE MARC", {
      x: 0.85, y: 2.9, w: 5.5, h: 0.3, fontSize: 10, fontFace: FONT, bold: true,
      color: C.sfoi_s_dark, charSpacing: 2,
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.85, y: 3.3, w: 5.5, h: 3.3,
      fill: { color: C.white }, line: { color: C.sfoi_s, width: 1 }, rectRadius: 0.06,
    });
    s.addText('Transforme ces notes en plan hiérarchique.\n\nNe supprime aucune information.\n\nAjoute une section "Points à clarifier".', {
      x: 1.0, y: 3.5, w: 5.2, h: 2.95, fontSize: 14, fontFace: "Courier New",
      color: C.slate900, valign: "top",
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 6.75, y: 2.75, w: 5.95, h: 4.0,
      fill: { color: C.slate50 }, line: { color: C.slate300, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("LE RÉSULTAT", {
      x: 7.0, y: 2.9, w: 5.5, h: 0.3, fontSize: 10, fontFace: FONT, bold: true,
      color: C.slate500, charSpacing: 2,
    });
    s.addText("Plan en 8 sections.", {
      x: 7.0, y: 3.3, w: 5.5, h: 0.5, fontSize: 18, fontFace: FONT, bold: true,
      color: C.slate900,
    });
    s.addText("✓ Le chaos est devenu un plan", {
      x: 7.0, y: 3.95, w: 5.5, h: 0.4, fontSize: 13, fontFace: FONT,
      color: C.sfoi_s_dark,
    });
    s.addText("✓ Aucune information perdue", {
      x: 7.0, y: 4.4, w: 5.5, h: 0.4, fontSize: 13, fontFace: FONT,
      color: C.sfoi_s_dark,
    });
    s.addText("✓ Points à clarifier identifiés", {
      x: 7.0, y: 4.85, w: 5.5, h: 0.4, fontSize: 13, fontFace: FONT,
      color: C.sfoi_s_dark,
    });
    hLine(s, pres, 7.0, 5.4, 5.5, C.slate300);
    s.addText('La section "Points à clarifier" contient les questions exactes qu\'un juriste lui posera.', {
      x: 7.0, y: 5.55, w: 5.5, h: 1.0, fontSize: 12, fontFace: FONT, italic: true,
      color: C.slate700, valign: "top",
    });
    addBrand(s);
  }

  // --- 4.5 Marc applique · Fiabiliser ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 4 · MARC APPLIQUE · F",
      "Acte 2 — Fiabiliser. Du plan au document sécurisé.", BLOC);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 1.95, w: 12.1, h: 0.55,
      fill: { color: C.amber_light }, line: { color: C.amber, width: 0 }, rectRadius: 0.06,
    });
    s.addText([
      { text: "RAPPEL · ", options: { bold: true, color: C.amber_dark, fontSize: 10, charSpacing: 2 } },
      { text: "Marc fait un prompt de vérification (bloc 3) — avec RGPD et AI Act fournis comme référence.", options: { color: C.slate700, fontSize: 12, italic: true } },
    ], { x: 0.85, y: 1.95, w: 11.6, h: 0.55, fontFace: FONT, valign: "middle" });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 2.75, w: 5.95, h: 4.0,
      fill: { color: C.sfoi_f_light }, line: { color: C.sfoi_f, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("LE PROMPT DE MARC", {
      x: 0.85, y: 2.9, w: 5.5, h: 0.3, fontSize: 10, fontFace: FONT, bold: true,
      color: C.sfoi_f_dark, charSpacing: 2,
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.85, y: 3.3, w: 5.5, h: 3.3,
      fill: { color: C.white }, line: { color: C.sfoi_f, width: 1 }, rectRadius: 0.06,
    });
    s.addText("Vérifie si ce plan respecte le RGPD et l'AI Act ci-joints.\n\n• Si une obligation manque, indique-le\n• Cite les passages exacts utilisés\n• Si une info n'est pas dans les docs, dis-le\n• Aucune hypothèse implicite", {
      x: 1.0, y: 3.5, w: 5.2, h: 2.95, fontSize: 12, fontFace: "Courier New",
      color: C.slate900, valign: "top",
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 6.75, y: 2.75, w: 5.95, h: 4.0,
      fill: { color: C.amber_light }, line: { color: C.amber, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("RAPPORT D'ÉCARTS · EXTRAIT (SIMULÉ)", {
      x: 7.0, y: 2.9, w: 5.5, h: 0.3, fontSize: 10, fontFace: FONT, bold: true,
      color: C.amber_dark, charSpacing: 2,
    });
    s.addText([
      { text: "⚠️ Le plan ne mentionne pas ", options: { bold: true, color: C.red_dark, fontSize: 12 } },
      { text: "le droit de recours des salariés en cas de décision partiellement automatisée.", options: { color: C.slate900, fontSize: 12, breakLine: true } },
      { text: "Référence · ", options: { bold: true, color: C.slate700, fontSize: 11 } },
      { text: "RGPD, Article 22 (Décisions individuelles automatisées).", options: { italic: true, color: C.slate700, fontSize: 11, breakLine: true } },
      { text: "Suggestion · ", options: { bold: true, color: C.sfoi_s_dark, fontSize: 11 } },
      { text: 'ajouter une sous-section "Droits des personnes" : intervention humaine, expression du point de vue, contestation.', options: { color: C.slate700, fontSize: 11 } },
    ], { x: 7.0, y: 3.35, w: 5.5, h: 3.3, fontFace: FONT, valign: "top" });
    s.addText("La vérification est aussi bonne que la source que vous fournissez.", {
      x: 0.6, y: 6.85, w: 12.1, h: 0.35, fontSize: 13, fontFace: FONT, italic: true, bold: true,
      color: C.amber_dark, align: "center",
    });
    addBrand(s);
  }

  // --- 4.6 Trois erreurs ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 4 · LES 3 ERREURS",
      "Trois erreurs reviennent souvent. Toutes ont la même cause : sauter un niveau.", BLOC);
    const errs = [
      { x: 0.6, color: C.red, light: C.red_light,
        label: "LA CONFUSION", title: "Structurer / Résumer",
        desc: "Structurer réorganise 100 % du contenu. Résumer en supprime. Si la sortie est plus courte que l'entrée → l'assistant a résumé." },
      { x: 4.95, color: C.amber, light: C.amber_light,
        label: "LE SAUT", title: 'Fiabiliser car "ça semble bien"',
        desc: "Un plan bien structuré n'est pas un plan fiabilisé. L'assistant peut organiser parfaitement des informations incorrectes." },
      { x: 9.3, color: C.accent, light: C.accent_light,
        label: "LA PRESSION", title: "Démarrer à Optimiser/Industrialiser",
        desc: "Sauter pour gagner du temps. Un livrable mis en forme sur du contenu non vérifié = risque amplifié, pas gain de temps." },
    ];
    errs.forEach(e => {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: e.x, y: 2.4, w: 3.4, h: 4.3,
        fill: { color: e.light }, line: { color: e.color, width: 1.5 }, rectRadius: 0.1,
      });
      s.addShape(pres.shapes.OVAL, {
        x: e.x + (3.4 - 0.7) / 2, y: 2.6, w: 0.7, h: 0.7,
        fill: { color: e.color }, line: { color: e.color, width: 0 },
      });
      s.addText("✗", {
        x: e.x + (3.4 - 0.7) / 2, y: 2.6, w: 0.7, h: 0.7,
        fontSize: 26, fontFace: FONT, bold: true, color: C.white,
        align: "center", valign: "middle", margin: 0,
      });
      s.addText(e.label, {
        x: e.x, y: 3.5, w: 3.4, h: 0.35, fontSize: 11, fontFace: FONT, bold: true,
        color: e.color, charSpacing: 2, align: "center",
      });
      s.addText(e.title, {
        x: e.x + 0.2, y: 3.85, w: 3.0, h: 0.85, fontSize: 16, fontFace: FONT, bold: true,
        color: C.slate900, align: "center",
      });
      s.addText(e.desc, {
        x: e.x + 0.25, y: 4.85, w: 2.9, h: 1.7, fontSize: 12, fontFace: FONT,
        color: C.slate700, valign: "top",
      });
    });
    s.addText("Marc a livré sa charte vendredi matin. Solide. Parce qu'il avait suivi les actes dans l'ordre.", {
      x: 0.6, y: 6.85, w: 12.1, h: 0.35, fontSize: 13, fontFace: FONT, italic: true,
      color: C.slate500, align: "center",
    });
    addBrand(s);
  }

  // --- 4.7 SFOI au quotidien ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 4 · S.F.O.I. AU QUOTIDIEN",
      "Pas que les chartes RH. N'importe quel document de travail.", BLOC);
    const ap = [
      { txt: "Rapport d'analyse", color: C.primary },
      { txt: "Proposition commerciale", color: C.sfoi_o },
      { txt: "Plan de projet", color: C.sfoi_s },
      { txt: "Note stratégique", color: C.accent },
    ];
    ap.forEach((a, i) => {
      const x = 0.6 + i * 3.05;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x, y: 2.0, w: 2.95, h: 0.85,
        fill: { color: C.white }, line: { color: a.color, width: 1.5 }, rectRadius: 0.08,
      });
      s.addText(a.txt, {
        x, y: 2.0, w: 2.95, h: 0.85, fontSize: 14, fontFace: FONT, bold: true,
        color: a.color, align: "center", valign: "middle", margin: 0,
      });
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 3.2, w: 12.1, h: 1.6,
      fill: { color: C.primary_light }, line: { color: C.primary, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("LA QUESTION RÉCURRENTE", {
      x: 0.85, y: 3.4, w: 11.6, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.primary_dark, charSpacing: 2,
    });
    s.addText("« À quel acte suis-je ? Ai-je fait le précédent ? »", {
      x: 0.85, y: 3.75, w: 11.6, h: 0.6, fontSize: 24, fontFace: FONT, bold: true, italic: true,
      color: C.slate900, align: "center",
    });
    s.addText("La méthode personnelle. Quatre actes, toujours dans l'ordre.", {
      x: 0.85, y: 4.4, w: 11.6, h: 0.35, fontSize: 13, fontFace: FONT, italic: true,
      color: C.slate700, align: "center",
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 5.2, w: 12.1, h: 1.65,
      fill: { color: C.amber_light }, line: { color: C.amber, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("MAINTENANT, REGARDONS À UNE AUTRE ÉCHELLE", {
      x: 0.85, y: 5.35, w: 11.6, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.amber_dark, charSpacing: 2,
    });
    s.addText("Pas ce que vous faites, vous, devant votre écran.", {
      x: 0.85, y: 5.7, w: 11.6, h: 0.4, fontSize: 16, fontFace: FONT,
      color: C.slate700,
    });
    s.addText("Ce que votre organisation sait faire collectivement.", {
      x: 0.85, y: 6.2, w: 11.6, h: 0.5, fontSize: 18, fontFace: FONT, bold: true,
      color: C.slate900,
    });
    addBrand(s);
  }

  // --- 4.8 Bascule organisation ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 4 · BASCULE", "Quatre questions à votre organisation", BLOC);
    const qs = [
      { num: "S", color: C.sfoi_s, light: C.sfoi_s_light,
        q: "Vos équipes structurent-elles vraiment leurs usages ?\nOu chacun improvise dans son coin ?" },
      { num: "F", color: C.sfoi_f, light: C.sfoi_f_light,
        q: "La vérification est-elle un réflexe partagé ?\nOu une affaire individuelle ?" },
      { num: "O", color: C.sfoi_o, light: C.sfoi_o_light,
        q: "Les sorties sont-elles capitalisées comme des outils réutilisables ?\nOu produites une fois et perdues ?" },
      { num: "I", color: C.sfoi_i, light: C.sfoi_i_light,
        q: "Les usages industrialisés sont-ils gouvernés (rôles, traçabilité, mécanismes d'arrêt) ?\nOu simplement automatisés et laissés à eux-mêmes ?" },
    ];
    qs.forEach((q, i) => {
      const x = 0.6 + (i % 2) * 6.15;
      const y = 1.95 + Math.floor(i / 2) * 1.85;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x, y, w: 5.95, h: 1.65,
        fill: { color: q.light }, line: { color: q.color, width: 1.5 }, rectRadius: 0.1,
      });
      s.addShape(pres.shapes.OVAL, {
        x: x + 0.25, y: y + 0.35, w: 0.6, h: 0.6,
        fill: { color: q.color }, line: { color: q.color, width: 0 },
      });
      s.addText(q.num, {
        x: x + 0.25, y: y + 0.35, w: 0.6, h: 0.6, fontSize: 22, fontFace: FONT, bold: true,
        color: C.white, align: "center", valign: "middle", margin: 0,
      });
      s.addText(q.q, {
        x: x + 1.0, y: y + 0.2, w: 4.85, h: 1.3, fontSize: 12, fontFace: FONT,
        color: C.slate900, valign: "middle",
      });
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 5.7, w: 12.1, h: 1.4,
      fill: { color: C.primary_light }, line: { color: C.primary, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText([
      { text: "Cette grille devient une carte de maturité organisationnelle. On l'appelle l'", options: { color: C.slate900, fontSize: 14 } },
      { text: "IMIA", options: { bold: true, color: C.primary_dark, fontSize: 16 } },
      { text: ".", options: { color: C.slate900, fontSize: 14 } },
    ], { x: 0.85, y: 5.85, w: 11.6, h: 0.5, fontFace: FONT, valign: "middle" });
    s.addText("S.F.O.I. est la méthode personnelle. L'IMIA est la lecture collective. Sujet du bloc suivant.", {
      x: 0.85, y: 6.4, w: 11.6, h: 0.5, fontSize: 13, fontFace: FONT, italic: true,
      color: C.slate700, valign: "middle",
    });
    addBrand(s);
  }
};