// BLOC 3 — Choisir le bon prompt · 7 slides
module.exports = function(pres, H) {
  const { C, FONT, addBrand, addHeader, hLine, vLine, drawCarte4Intentions } = H;
  const BLOC = 3;

  // --- 3.1 Accroche ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 3 · CHOISIR",
      "Le bon prompt n'existe pas. Le bon type, oui.", BLOC);
    s.addText("Le manager : « Analyse ces 3 offres et dis-moi laquelle choisir. »", {
      x: 0.6, y: 2.0, w: 12.1, h: 0.5, fontSize: 16, fontFace: FONT, italic: true,
      color: C.slate700, align: "center",
    });
    const tries = [
      { x: 0.6, label: "TENTATIVE 1", desc: "Réponse longue. Les critères ne sont pas les siens." },
      { x: 4.95, label: "TENTATIVE 2", desc: "Reformule la demande. Même résultat." },
      { x: 9.3, label: "TENTATIVE 3", desc: "Recommandation finale trop catégorique." },
    ];
    tries.forEach(t => {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: t.x, y: 2.7, w: 3.4, h: 1.7,
        fill: { color: C.slate50 }, line: { color: C.slate300, width: 1 }, rectRadius: 0.08,
      });
      s.addText(t.label, {
        x: t.x, y: 2.85, w: 3.4, h: 0.35, fontSize: 10, fontFace: FONT, bold: true,
        color: C.slate500, charSpacing: 2, align: "center",
      });
      s.addText("✗", {
        x: t.x, y: 3.2, w: 3.4, h: 0.4, fontSize: 22, fontFace: FONT,
        color: C.red, align: "center",
      });
      s.addText(t.desc, {
        x: t.x + 0.2, y: 3.6, w: 3.0, h: 0.7, fontSize: 12, fontFace: FONT,
        color: C.slate700, align: "center",
      });
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 4.7, w: 12.1, h: 1.6,
      fill: { color: C.amber_light }, line: { color: C.amber, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("LE PROBLÈME N'EST PAS LE PROMPT", {
      x: 0.85, y: 4.85, w: 11.6, h: 0.35, fontSize: 11, fontFace: FONT, bold: true,
      color: C.amber_dark, charSpacing: 2,
    });
    s.addText([
      { text: "Il avait besoin d'un ", options: { color: C.slate900, fontSize: 16 } },
      { text: "prompt d'exploration", options: { bold: true, color: C.primary_dark, fontSize: 16 } },
      { text: " (« cartographie-moi les options »).", options: { color: C.slate900, fontSize: 16, breakLine: true } },
      { text: "Il a utilisé un ", options: { color: C.slate900, fontSize: 16 } },
      { text: "prompt de production", options: { bold: true, color: C.accent_dark, fontSize: 16 } },
      { text: ' (« fais le choix à ma place »).', options: { color: C.slate900, fontSize: 16 } },
    ], { x: 0.85, y: 5.25, w: 11.6, h: 0.95, fontFace: FONT, valign: "middle" });
    s.addText("Quatre intentions différentes. Chacune a son gabarit, ses règles, ses pièges.", {
      x: 0.6, y: 6.55, w: 12.1, h: 0.4, fontSize: 14, fontFace: FONT, bold: true, italic: true,
      color: C.slate900, align: "center",
    });
    addBrand(s);
  }

  // --- 3.2 Carte 2x2 des 4 intentions ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 3 · LES 4 INTENTIONS",
      "Localiser le bon type avant de rédiger", BLOC);
    drawCarte4Intentions(s, pres, 2.6, 2.3, 8.6, 4.2);
    s.addText("Question avant chaque prompt : « Qu'est-ce que je veux que l'assistant fasse ? »", {
      x: 0.6, y: 6.7, w: 12.1, h: 0.4, fontSize: 14, fontFace: FONT, italic: true, bold: true,
      color: C.slate900, align: "center",
    });
    addBrand(s);
  }

  // --- 3.3 Gabarit Exploration (avec exemple) ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 3 · EXPLORATION", "Comprendre. Cartographier. Préparer une décision.", BLOC);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 2.0, w: 7.5, h: 4.3,
      fill: { color: C.primary_light }, line: { color: C.primary, width: 1.5 }, rectRadius: 0.08,
    });
    s.addText("GABARIT EXPLORATION", {
      x: 0.85, y: 2.1, w: 7.0, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.primary_dark, charSpacing: 2,
    });
    const champs = [
      { k: "Rôle", v: "Expert dans le domaine" },
      { k: "Sujet", v: "Ce qu'on veut explorer" },
      { k: "Périmètre", v: "Quoi inclure, quoi exclure" },
      { k: "Cadre d'analyse", v: "SWOT, PESTEL — ou « choisis et justifie »" },
      { k: "Critères", v: "Ce qui doit être hiérarchisé" },
      { k: "Format", v: "Tableau + synthèse + recommandation" },
      { k: "Réflexion", v: "« Réfléchis étape par étape avant de répondre »", important: true },
    ];
    champs.forEach((c, i) => {
      const y = 2.45 + i * 0.52;
      s.addText(c.k + " :", {
        x: 0.95, y, w: 1.9, h: 0.4, fontSize: 12, fontFace: FONT, bold: true,
        color: c.important ? C.amber_dark : C.primary_dark, valign: "middle",
      });
      s.addText(c.v, {
        x: 2.85, y, w: 5.0, h: 0.4, fontSize: 11, fontFace: FONT,
        color: c.important ? C.slate900 : C.slate700, valign: "middle",
        bold: c.important, italic: c.important,
      });
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 8.3, y: 2.0, w: 4.4, h: 2.05,
      fill: { color: C.amber_light }, line: { color: C.amber, width: 1.5 }, rectRadius: 0.08,
    });
    s.addText("LE CHAMP RÉFLEXION", {
      x: 8.55, y: 2.1, w: 4.0, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.amber_dark, charSpacing: 2,
    });
    s.addText("L'assistant ralentit sa prédiction et décompose étape par étape. Réduit les erreurs de raisonnement.", {
      x: 8.55, y: 2.5, w: 4.0, h: 1.45, fontSize: 11, fontFace: FONT,
      color: C.slate700, valign: "top",
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 8.3, y: 4.25, w: 4.4, h: 2.05,
      fill: { color: C.red_light }, line: { color: C.red, width: 1.5 }, rectRadius: 0.08,
    });
    s.addText("LE RISQUE · DISPERSION", {
      x: 8.55, y: 4.35, w: 4.0, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.red_dark, charSpacing: 2,
    });
    s.addText('Toujours conclure par : « Hiérarchise par impact décroissant » ou « 3 recommandations prioritaires ».', {
      x: 8.55, y: 4.7, w: 4.0, h: 1.5, fontSize: 11, fontFace: FONT,
      color: C.slate700, valign: "top",
    });
    // EXEMPLE
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 6.45, w: 12.1, h: 0.85,
      fill: { color: C.slate100 }, line: { color: C.slate300, width: 1 }, rectRadius: 0.06,
    });
    s.addText("EXEMPLE", {
      x: 0.85, y: 6.55, w: 2.0, h: 0.25, fontSize: 9, fontFace: FONT, bold: true,
      color: C.slate500, charSpacing: 2,
    });
    s.addText([
      { text: "Manager : analyser 3 offres concurrentes avant une réunion stratégique. ", options: { color: C.slate900, fontSize: 11 } },
      { text: "→ ", options: { color: C.slate500, fontSize: 11 } },
      { text: "« Cartographie-moi les options avec leurs critères. SWOT ou choisis le cadre. Conclue par 3 recommandations prioritaires. »", options: { italic: true, color: C.primary_dark, fontSize: 11 } },
    ], { x: 0.85, y: 6.85, w: 11.6, h: 0.4, fontFace: FONT, valign: "middle" });
    addBrand(s);
  }

  // --- 3.4 Gabarit Structuration ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 3 · STRUCTURATION",
      "Organiser sans rien perdre. Vous fournissez. L'assistant met en ordre.", BLOC);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 2.0, w: 7.5, h: 4.4,
      fill: { color: C.sfoi_o_light }, line: { color: C.sfoi_o, width: 1.5 }, rectRadius: 0.08,
    });
    s.addText("GABARIT STRUCTURATION", {
      x: 0.85, y: 2.15, w: 7.0, h: 0.35, fontSize: 11, fontFace: FONT, bold: true,
      color: C.sfoi_o_dark, charSpacing: 2,
    });
    const champs = [
      { k: "Rôle", v: "Expert en structuration documentaire" },
      { k: "Contenu source", v: "Le texte brut, copié-collé" },
      { k: "Objectif", v: "Quel type de document en livrable" },
      { k: "Format cible", v: "Plan / tableau / checklist / sections numérotées" },
      { k: "Contraintes", v: 'Ne rien supprimer · Ajouter "Points à clarifier"', important: true },
      { k: "Suivi", v: "Pour les chantiers en plusieurs sessions" },
    ];
    champs.forEach((c, i) => {
      const y = 2.6 + i * 0.6;
      s.addText(c.k + " :", {
        x: 0.95, y, w: 2.5, h: 0.45, fontSize: 13, fontFace: FONT, bold: true,
        color: c.important ? C.red_dark : C.sfoi_o_dark, valign: "middle",
      });
      s.addText(c.v, {
        x: 3.45, y, w: 4.5, h: 0.45, fontSize: 12, fontFace: FONT,
        color: c.important ? C.slate900 : C.slate700, valign: "middle",
        bold: c.important,
      });
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 8.3, y: 2.0, w: 4.4, h: 4.4,
      fill: { color: C.red_light }, line: { color: C.red, width: 1.5 }, rectRadius: 0.08,
    });
    s.addText("LA RÈGLE D'OR", {
      x: 8.55, y: 2.15, w: 4.0, h: 0.35, fontSize: 11, fontFace: FONT, bold: true,
      color: C.red_dark, charSpacing: 2,
    });
    s.addText("Zéro perte d'information.", {
      x: 8.55, y: 2.55, w: 4.0, h: 0.5, fontSize: 18, fontFace: FONT, bold: true,
      color: C.red_dark,
    });
    hLine(s, pres, 8.55, 3.15, 4.0, C.red);
    s.addText("L'assistant a tendance à synthétiser quand il structure. Ce n'est pas ce qu'on lui demande.", {
      x: 8.55, y: 3.3, w: 4.0, h: 1.2, fontSize: 12, fontFace: FONT,
      color: C.slate700, valign: "top",
    });
    s.addText('« Ne supprime aucune information.\nAjoute une section Points à clarifier pour les éléments ambigus. »', {
      x: 8.55, y: 4.6, w: 4.0, h: 1.7, fontSize: 12, fontFace: FONT, italic: true, bold: true,
      color: C.slate900, valign: "top",
    });
    // EXEMPLE
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 6.45, w: 12.1, h: 0.85,
      fill: { color: C.slate100 }, line: { color: C.slate300, width: 1 }, rectRadius: 0.06,
    });
    s.addText("EXEMPLE", {
      x: 0.85, y: 6.55, w: 2.0, h: 0.25, fontSize: 9, fontFace: FONT, bold: true,
      color: C.slate500, charSpacing: 2,
    });
    s.addText([
      { text: "Marc colle ses 3 h de notes RH. ", options: { color: C.slate900, fontSize: 11 } },
      { text: "→ ", options: { color: C.slate500, fontSize: 11 } },
      { text: '« Transforme ces notes en plan hiérarchique. Ne supprime aucune information. Ajoute une section "Points à clarifier". »', options: { italic: true, color: C.sfoi_o_dark, fontSize: 11 } },
    ], { x: 0.85, y: 6.85, w: 11.6, h: 0.4, fontFace: FONT, valign: "middle" });
    addBrand(s);
  }

  // --- 3.5 Gabarit Production ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 3 · PRODUCTION",
      "Vous savez exactement ce que vous voulez obtenir. L'assistant le produit.", BLOC);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 2.0, w: 7.5, h: 4.3,
      fill: { color: C.accent_light }, line: { color: C.accent, width: 1.5 }, rectRadius: 0.08,
    });
    s.addText("GABARIT PRODUCTION", {
      x: 0.85, y: 2.1, w: 7.0, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.accent_dark, charSpacing: 2,
    });
    const champs = [
      { k: "Rôle", v: "Qui est l'assistant dans ce contexte ?" },
      { k: "Objectif", v: "Quel livrable précis doit être produit ?" },
      { k: "Contexte", v: "Pour qui, dans quel cadre ?" },
      { k: "Données", v: "Ce que vous fournissez, anonymisé" },
      { k: "Format", v: "Structure exacte attendue" },
      { k: "Contraintes", v: "Longueur, ton, ce qu'il faut éviter" },
      { k: "Exemples", v: "1-2 exemples du format attendu", important: true },
    ];
    champs.forEach((c, i) => {
      const y = 2.45 + i * 0.52;
      s.addText(c.k + " :", {
        x: 0.95, y, w: 2.0, h: 0.4, fontSize: 12, fontFace: FONT, bold: true,
        color: c.important ? C.amber_dark : C.accent_dark, valign: "middle",
      });
      s.addText(c.v, {
        x: 2.95, y, w: 4.95, h: 0.4, fontSize: 11, fontFace: FONT,
        color: c.important ? C.slate900 : C.slate700, valign: "middle",
        bold: c.important,
      });
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 8.3, y: 2.0, w: 4.4, h: 4.3,
      fill: { color: C.amber_light }, line: { color: C.amber, width: 1.5 }, rectRadius: 0.08,
    });
    s.addText("LE LEVIER · EXEMPLES", {
      x: 8.55, y: 2.1, w: 4.0, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.amber_dark, charSpacing: 2,
    });
    s.addText("Le champ que la plupart oublient.", {
      x: 8.55, y: 2.45, w: 4.0, h: 0.4, fontSize: 13, fontFace: FONT, bold: true,
      color: C.slate900,
    });
    s.addText("L'assistant produit par imitation autant que par instruction. Lui montrer une réponse validée, un format aimé, un ton utilisé = la méthode la plus fiable.", {
      x: 8.55, y: 2.95, w: 4.0, h: 1.9, fontSize: 11, fontFace: FONT,
      color: C.slate700, valign: "top",
    });
    s.addText('Few-shot prompting :\n1 ou 2 exemples suffisent. Pas dix.', {
      x: 8.55, y: 4.95, w: 4.0, h: 1.2, fontSize: 12, fontFace: FONT, italic: true, bold: true,
      color: C.amber_dark, valign: "top",
    });
    // EXEMPLE
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 6.45, w: 12.1, h: 0.85,
      fill: { color: C.slate100 }, line: { color: C.slate300, width: 1 }, rectRadius: 0.06,
    });
    s.addText("EXEMPLE", {
      x: 0.85, y: 6.55, w: 2.0, h: 0.25, fontSize: 9, fontFace: FONT, bold: true,
      color: C.slate500, charSpacing: 2,
    });
    s.addText([
      { text: "Email annonçant la nouvelle politique IA en interne (managers). ", options: { color: C.slate900, fontSize: 11 } },
      { text: "→ ", options: { color: C.slate500, fontSize: 11 } },
      { text: "Rôle consultant comm. interne · 250 mots · ton pédagogique · RGPD + contrôle humain · joindre 1 email réussi de janvier.", options: { italic: true, color: C.accent_dark, fontSize: 11 } },
    ], { x: 0.85, y: 6.85, w: 11.6, h: 0.4, fontFace: FONT, valign: "middle" });
    addBrand(s);
  }

  // --- 3.6 Gabarit Vérification ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 3 · VÉRIFICATION",
      "Vous avez un document existant. Vous voulez le contrôler.", BLOC);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 2.0, w: 7.5, h: 4.6,
      fill: { color: C.amber_light }, line: { color: C.amber, width: 1.5 }, rectRadius: 0.08,
    });
    s.addText("GABARIT VÉRIFICATION", {
      x: 0.85, y: 2.15, w: 7.0, h: 0.35, fontSize: 11, fontFace: FONT, bold: true,
      color: C.amber_dark, charSpacing: 2,
    });
    const champs = [
      { k: "Rôle", v: "Expert dans le domaine concerné" },
      { k: "Élément", v: "Le document à vérifier, collé dans le prompt" },
      { k: "Critères", v: "Standards, normes, règles auxquels comparer" },
      { k: "Retour", v: "Rapport d'écarts structuré" },
      { k: "Règle", v: "Cite les passages · Si absent, indique-le" },
      { k: "Réflexion", v: "Obligatoire — pas optionnel ici", important: true },
    ];
    champs.forEach((c, i) => {
      const y = 2.6 + i * 0.6;
      s.addText(c.k + " :", {
        x: 0.95, y, w: 1.9, h: 0.45, fontSize: 13, fontFace: FONT, bold: true,
        color: c.important ? C.red_dark : C.amber_dark, valign: "middle",
      });
      s.addText(c.v, {
        x: 2.85, y, w: 5.0, h: 0.45, fontSize: 12, fontFace: FONT,
        color: c.important ? C.slate900 : C.slate700, valign: "middle",
        bold: c.important,
      });
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 8.3, y: 2.0, w: 4.4, h: 4.6,
      fill: { color: C.red_light }, line: { color: C.red, width: 1.5 }, rectRadius: 0.08,
    });
    s.addText("L'AVERTISSEMENT", {
      x: 8.55, y: 2.15, w: 4.0, h: 0.35, fontSize: 11, fontFace: FONT, bold: true,
      color: C.red_dark, charSpacing: 2,
    });
    s.addText("Premier filtre, pas certificat de conformité.", {
      x: 8.55, y: 2.55, w: 4.0, h: 0.7, fontSize: 14, fontFace: FONT, bold: true,
      color: C.red_dark, valign: "top",
    });
    s.addText("La vérification par l'assistant ne remplace pas la vérification par un expert humain.", {
      x: 8.55, y: 3.45, w: 4.0, h: 1.2, fontSize: 12, fontFace: FONT,
      color: C.slate700, valign: "top",
    });
    s.addText("Sur des sujets à fort enjeu (RGPD, droit du travail, conformité sectorielle), la relecture experte reste indispensable.", {
      x: 8.55, y: 4.85, w: 4.0, h: 1.6, fontSize: 12, fontFace: FONT, italic: true,
      color: C.slate900, valign: "top",
    });
    // EXEMPLE
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 6.45, w: 12.1, h: 0.85,
      fill: { color: C.slate100 }, line: { color: C.slate300, width: 1 }, rectRadius: 0.06,
    });
    s.addText("EXEMPLE", {
      x: 0.85, y: 6.55, w: 2.0, h: 0.25, fontSize: 9, fontFace: FONT, bold: true,
      color: C.slate500, charSpacing: 2,
    });
    s.addText([
      { text: "Vérifier la conformité d'une charte IA interne au RGPD (Article 22). ", options: { color: C.slate900, fontSize: 11 } },
      { text: "→ ", options: { color: C.slate500, fontSize: 11 } },
      { text: "Rôle expert RGPD · charte fournie · critères = Article 22 · rapport d'écarts conforme/manquant/ambigu · réflexion obligatoire.", options: { italic: true, color: C.amber_dark, fontSize: 11 } },
    ], { x: 0.85, y: 6.85, w: 11.6, h: 0.4, fontFace: FONT, valign: "middle" });
    addBrand(s);
  }

  // --- 3.7 Synthèse ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 3 · SYNTHÈSE", "La carte mentale des 4 types", BLOC);
    const cols = [
      { x: 0.6, color: C.primary, light: C.primary_light, name: "EXPLORATION", verb: "Comprendre",
        when: "Sujet ouvert, pas de livrable défini", risk: "Dispersion sans décision" },
      { x: 3.65, color: C.sfoi_o, light: C.sfoi_o_light, name: "STRUCTURATION", verb: "Organiser",
        when: "Contenu brut existant", risk: "Perte d'information" },
      { x: 6.7, color: C.accent, light: C.accent_light, name: "PRODUCTION", verb: "Créer",
        when: "Livrable défini", risk: "Résultat générique" },
      { x: 9.75, color: C.amber, light: C.amber_light, name: "VÉRIFICATION", verb: "Contrôler",
        when: "Document existant + critères", risk: "Validation superficielle" },
    ];
    cols.forEach(c => {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: c.x, y: 2.1, w: 2.95, h: 0.65,
        fill: { color: c.color }, line: { color: c.color, width: 0 }, rectRadius: 0.06,
      });
      s.addText(c.name, {
        x: c.x, y: 2.1, w: 2.95, h: 0.65, fontSize: 13, fontFace: FONT, bold: true,
        color: C.white, align: "center", valign: "middle", charSpacing: 2, margin: 0,
      });
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: c.x, y: 2.85, w: 2.95, h: 1.0,
        fill: { color: c.light }, line: { color: c.color, width: 1 }, rectRadius: 0.06,
      });
      s.addText(c.verb, {
        x: c.x, y: 2.85, w: 2.95, h: 1.0, fontSize: 26, fontFace: FONT, bold: true,
        color: c.color, align: "center", valign: "middle", margin: 0,
      });
      s.addText("QUAND L'UTILISER", {
        x: c.x, y: 4.0, w: 2.95, h: 0.3, fontSize: 9, fontFace: FONT, bold: true,
        color: C.slate500, charSpacing: 1, align: "center",
      });
      s.addText(c.when, {
        x: c.x + 0.1, y: 4.3, w: 2.75, h: 1.1, fontSize: 12, fontFace: FONT,
        color: C.slate700, align: "center", valign: "top",
      });
      s.addText("RISQUE SI MAL CHOISI", {
        x: c.x, y: 5.5, w: 2.95, h: 0.3, fontSize: 9, fontFace: FONT, bold: true,
        color: C.red_dark, charSpacing: 1, align: "center",
      });
      s.addText(c.risk, {
        x: c.x + 0.1, y: 5.8, w: 2.75, h: 0.7, fontSize: 12, fontFace: FONT, italic: true,
        color: C.red_dark, align: "center", valign: "top",
      });
    });
    s.addText("Au bloc suivant : on enchaîne ces quatre types dans une méthode au quotidien — S.F.O.I.", {
      x: 0.6, y: 6.75, w: 12.1, h: 0.45, fontSize: 14, fontFace: FONT, bold: true, italic: true,
      color: C.primary_dark, align: "center",
    });
    addBrand(s);
  }
};