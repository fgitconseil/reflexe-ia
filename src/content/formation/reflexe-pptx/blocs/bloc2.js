// BLOC 2 — Risques · 14 slides
module.exports = function(pres, H) {
  const { C, FONT, addBrand, addHeader, hLine, vLine } = H;
  const BLOC = 2;

  // --- 2.1 Accroche · 18h appel d'offres ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 2 · RISQUES",
      "Une situation qu'on rencontre souvent", BLOC);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 2.0, w: 12.1, h: 1.4,
      fill: { color: C.amber_light }, line: { color: C.amber, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("18 h.", {
      x: 0.85, y: 2.1, w: 11.6, h: 0.6, fontSize: 36, fontFace: FONT, bold: true,
      color: C.amber_dark,
    });
    s.addText("Appel d'offres pour le lendemain.", {
      x: 0.85, y: 2.7, w: 11.6, h: 0.55, fontSize: 18, fontFace: FONT, italic: true,
      color: C.slate900,
    });
    s.addText("Le manager colle l'intégralité du cahier des charges dans un assistant", {
      x: 0.6, y: 3.7, w: 12.1, h: 0.45, fontSize: 16, fontFace: FONT,
      color: C.slate900, align: "center",
    });
    s.addText("avec les noms des clients, les volumes, les prix.", {
      x: 0.6, y: 4.15, w: 12.1, h: 0.45, fontSize: 16, fontFace: FONT, bold: true,
      color: C.red_dark, align: "center",
    });
    s.addText([
      { text: "→ Proposition envoyée. Appel d'offres gagné.", options: { color: C.sfoi_s_dark, fontSize: 14, breakLine: true } },
      { text: "→ Données commerciales transmises à un serveur externe. Sans le savoir.", options: { color: C.red_dark, fontSize: 14, bold: true } },
    ], { x: 0.6, y: 4.85, w: 12.1, h: 1.0, fontFace: FONT, align: "center" });
    s.addText("Trois grilles de lecture pour reconnaître ces situations et poser les bonnes règles.", {
      x: 0.6, y: 6.65, w: 12.1, h: 0.45, fontSize: 14, fontFace: FONT, italic: true, bold: true,
      color: C.primary_dark, align: "center",
    });
    addBrand(s);
  }

  // --- 2.2 Risque 1 · Exfiltration ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 2 · RISQUE 1 · EXFILTRATION", null, BLOC);
    s.addText("Le risque le plus invisible.", {
      x: 0.6, y: 1.5, w: 12.1, h: 0.6, fontSize: 26, fontFace: FONT, bold: true,
      color: C.slate900,
    });
    // Périmètre (gauche)
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 2.7, w: 5.5, h: 3.5,
      fill: { color: C.white }, line: { color: C.slate400, width: 2, dashType: "dash" }, rectRadius: 0.1,
    });
    s.addText("VOTRE PÉRIMÈTRE", {
      x: 0.85, y: 2.85, w: 5.0, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.slate500, charSpacing: 2,
    });
    s.addText("Fichiers · emails · contrats\ndonnées clients · code", {
      x: 0.85, y: 3.4, w: 5.0, h: 2.0, fontSize: 14, fontFace: FONT,
      color: C.slate700, align: "center", valign: "middle",
    });
    // Flèche
    s.addShape(pres.shapes.RIGHT_ARROW, {
      x: 6.25, y: 4.25, w: 0.85, h: 0.4,
      fill: { color: C.red }, line: { color: C.red, width: 0 },
    });
    s.addText("Sans bruit", {
      x: 6.0, y: 3.85, w: 1.4, h: 0.3, fontSize: 10, fontFace: FONT, italic: true, bold: true,
      color: C.red, align: "center",
    });
    // Serveur externe
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 7.25, y: 2.7, w: 5.45, h: 3.5,
      fill: { color: C.red_light }, line: { color: C.red, width: 2 }, rectRadius: 0.1,
    });
    s.addText("SERVEUR EXTERNE", {
      x: 7.5, y: 2.85, w: 5.0, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.red_dark, charSpacing: 2,
    });
    s.addText("Tout ce que vous collez\ndans la fenêtre de chat.", {
      x: 7.5, y: 3.4, w: 5.0, h: 2.0, fontSize: 14, fontFace: FONT, bold: true,
      color: C.red_dark, align: "center", valign: "middle",
    });
    s.addText("Vous n'avez pas l'impression d'envoyer un fichier. Vous transmettez à un serveur.", {
      x: 0.6, y: 6.65, w: 12.1, h: 0.4, fontSize: 13, fontFace: FONT, italic: true,
      color: C.slate700, align: "center",
    });
    addBrand(s);
  }

  // --- 2.3 Quatre catégories à risque ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 2 · EXFILTRATION", "Quatre catégories de données à risque", BLOC);
    const cats = [
      { num: "1", color: C.primary, light: C.primary_light, label: "Données clients",
        desc: "Noms, coordonnées, historiques d'achat, contrats, prix négociés." },
      { num: "2", color: C.amber, light: C.amber_light, label: "Données RH",
        desc: "Salaires, évaluations, informations médicales, projets de réorganisation, RGPD." },
      { num: "3", color: C.red, light: C.red_light, label: "Données stratégiques",
        desc: "Plans de développement, analyses concurrentielles, informations financières." },
      { num: "4", color: C.accent, light: C.accent_light, label: "Code propriétaire",
        desc: "Algorithmes métier, code source d'un avantage stratégique." },
    ];
    cats.forEach((c, i) => {
      const x = 0.6 + i * 3.05;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x, y: 2.0, w: 2.95, h: 4.7,
        fill: { color: c.light }, line: { color: c.color, width: 1.5 }, rectRadius: 0.1,
      });
      s.addShape(pres.shapes.OVAL, {
        x: x + (2.95 - 0.7) / 2, y: 2.2, w: 0.7, h: 0.7,
        fill: { color: c.color }, line: { color: c.color, width: 0 },
      });
      s.addText(c.num, {
        x: x + (2.95 - 0.7) / 2, y: 2.2, w: 0.7, h: 0.7,
        fontSize: 24, fontFace: FONT, bold: true, color: C.white,
        align: "center", valign: "middle", margin: 0,
      });
      s.addText(c.label, {
        x: x + 0.2, y: 3.1, w: 2.55, h: 0.85, fontSize: 16, fontFace: FONT, bold: true,
        color: c.color, align: "center", valign: "top",
      });
      s.addText(c.desc, {
        x: x + 0.25, y: 4.05, w: 2.45, h: 2.4, fontSize: 11, fontFace: FONT,
        color: C.slate700, align: "center", valign: "top",
      });
    });
    addBrand(s);
  }

  // --- 2.4 Règle des 3 questions ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 2 · EXFILTRATION", "La règle des 3 questions avant de coller", BLOC);
    const qs = [
      { num: "1", color: C.primary, light: C.primary_light,
        q: "Cette information peut-elle être rendue publique sans conséquence ?" },
      { num: "2", color: C.amber, light: C.amber_light,
        q: "Concerne-t-elle des personnes identifiables ?" },
      { num: "3", color: C.red, light: C.red_light,
        q: "Représente-t-elle un avantage concurrentiel ou une information stratégique ?" },
    ];
    qs.forEach((q, i) => {
      const y = 2.0 + i * 1.35;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 0.6, y, w: 12.1, h: 1.15,
        fill: { color: q.light }, line: { color: q.color, width: 1.5 }, rectRadius: 0.1,
      });
      s.addShape(pres.shapes.OVAL, {
        x: 0.85, y: y + 0.27, w: 0.6, h: 0.6,
        fill: { color: q.color }, line: { color: q.color, width: 0 },
      });
      s.addText(q.num, {
        x: 0.85, y: y + 0.27, w: 0.6, h: 0.6, fontSize: 22, fontFace: FONT, bold: true,
        color: C.white, align: "center", valign: "middle", margin: 0,
      });
      s.addText(q.q, {
        x: 1.65, y, w: 10.8, h: 1.15, fontSize: 16, fontFace: FONT,
        color: C.slate900, valign: "middle",
      });
    });
    s.addText("Si non à 1, ou oui à 2 ou 3 → vous n'utilisez pas un assistant public.", {
      x: 0.6, y: 6.6, w: 12.1, h: 0.45, fontSize: 14, fontFace: FONT, bold: true, italic: true,
      color: C.red_dark, align: "center",
    });
    addBrand(s);
  }

  // --- 2.5 Trois niveaux de licence ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 2 · EXFILTRATION", "Trois niveaux de protection selon l'outil", BLOC);
    const niv = [
      { x: 0.6, color: C.red, light: C.red_light, label: "PUBLIC GRATUIT",
        title: "Risque maximum",
        desc: "Vos données peuvent servir à entraîner les modèles." },
      { x: 4.95, color: C.amber, light: C.amber_light, label: "PRO / TEAMS",
        title: "Risque modéré",
        desc: "Entraînement désactivé par défaut, ou option dans les paramètres. Vérifier votre compte." },
      { x: 9.3, color: C.sfoi_s, light: C.sfoi_s_light, label: "ENTERPRISE",
        title: "Risque maîtrisé",
        desc: "Politique de non-rétention garantie contractuellement. Environnement sécurisé." },
    ];
    niv.forEach(n => {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: n.x, y: 2.0, w: 3.4, h: 4.4,
        fill: { color: n.light }, line: { color: n.color, width: 1.5 }, rectRadius: 0.1,
      });
      s.addText(n.label, {
        x: n.x, y: 2.2, w: 3.4, h: 0.4, fontSize: 11, fontFace: FONT, bold: true,
        color: n.color, charSpacing: 2, align: "center",
      });
      s.addText(n.title, {
        x: n.x, y: 2.8, w: 3.4, h: 0.6, fontSize: 18, fontFace: FONT, bold: true,
        color: C.slate900, align: "center",
      });
      s.addText(n.desc, {
        x: n.x + 0.2, y: 3.7, w: 3.0, h: 2.4, fontSize: 12, fontFace: FONT,
        color: C.slate700, align: "center", valign: "top",
      });
    });
    s.addText("Vérifier le type de licence avant tout usage avec des données professionnelles.", {
      x: 0.6, y: 6.6, w: 12.1, h: 0.45, fontSize: 13, fontFace: FONT, italic: true, bold: true,
      color: C.slate700, align: "center",
    });
    addBrand(s);
  }

  // --- 2.6 Risque 2 · Réputationnel · 4 zones ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 2 · RISQUE 2 · RÉPUTATIONNEL",
      "Quatre zones à relire systématiquement", BLOC);
    const z = [
      { x: 0.6, y: 2.0, color: C.amber, light: C.amber_light, icon: "📅", label: "Dates",
        desc: "Années de référence, délais légaux. Dates d'entrée en vigueur. Engagement involontaire." },
      { x: 6.75, y: 2.0, color: C.amber, light: C.amber_light, icon: "🔢", label: "Chiffres",
        desc: "Statistiques, %, données financières — plausibles mais fausses → crédibilité exposée." },
      { x: 0.6, y: 4.55, color: C.red, light: C.red_light, icon: "📚", label: "Citations & références",
        desc: "Articles de loi, normes techniques, réglementations sectorielles — cf. bloc 1, citation juridique inventée." },
      { x: 6.75, y: 4.55, color: C.accent, light: C.accent_light, icon: "📋", label: "Engagements contractuels",
        desc: "Garanties ou conditions formulées que vous n'offrez pas réellement." },
    ];
    z.forEach(zo => {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: zo.x, y: zo.y, w: 5.95, h: 2.4,
        fill: { color: zo.light }, line: { color: zo.color, width: 1.5 }, rectRadius: 0.1,
      });
      s.addText(zo.icon + "  " + zo.label, {
        x: zo.x + 0.25, y: zo.y + 0.25, w: 5.5, h: 0.55, fontSize: 18, fontFace: FONT, bold: true,
        color: zo.color, valign: "middle",
      });
      s.addText(zo.desc, {
        x: zo.x + 0.25, y: zo.y + 0.95, w: 5.5, h: 1.3, fontSize: 12, fontFace: FONT,
        color: C.slate700, valign: "top",
      });
    });
    addBrand(s);
  }

  // --- 2.7 Usurpation · deepfake ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 2 · USURPATION", "Le risque deepfake monte en puissance depuis 2024", BLOC);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 1.95, w: 12.1, h: 1.2,
      fill: { color: C.amber }, line: { color: C.amber, width: 0 }, rectRadius: 0.1,
    });
    s.addText("ALERTE 2025", {
      x: 0.85, y: 2.05, w: 11.5, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.white, charSpacing: 3,
    });
    s.addText("Les hypertrucages permettent aujourd'hui de recréer la voix ou l'image d'une personne de façon convaincante.", {
      x: 0.85, y: 2.35, w: 11.5, h: 0.7, fontSize: 16, fontFace: FONT, bold: true,
      color: C.white, valign: "middle",
    });
    const cas = [
      { txt: "Faux message vocal", desc: "Faux PDG demandant un virement urgent." },
      { txt: "Vidéo / enregistrement", desc: "Semblant prouver d'un comportement ou d'une décision." },
      { txt: "Usurpation de marque", desc: "Dans une campagne externe, votre marque, vos messages." },
    ];
    cas.forEach((c, i) => {
      const x = 0.6 + i * 4.2;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x, y: 3.45, w: 4.0, h: 2.5,
        fill: { color: C.amber_light }, line: { color: C.amber, width: 1.5 }, rectRadius: 0.1,
      });
      s.addText(c.txt, {
        x, y: 3.65, w: 4.0, h: 0.5, fontSize: 16, fontFace: FONT, bold: true,
        color: C.amber_dark, align: "center",
      });
      s.addText(c.desc, {
        x: x + 0.25, y: 4.25, w: 3.5, h: 1.55, fontSize: 12, fontFace: FONT,
        color: C.slate700, align: "center", valign: "top",
      });
    });
    s.addText("L'entraînement à douter devient une compétence utile.", {
      x: 0.6, y: 6.4, w: 12.1, h: 0.45, fontSize: 14, fontFace: FONT, bold: true, italic: true,
      color: C.amber_dark, align: "center",
    });
    addBrand(s);
  }

  // --- 2.8 Protocole 3 temps relecture ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 2 · PROTOCOLE", "Trois temps pour le risque réputationnel", BLOC);
    const t = [
      { num: "1", color: C.primary, light: C.primary_light, label: "IDENTIFIER",
        desc: "les zones sensibles dans le texte généré : dates, chiffres, citations, toute source officielle attendue, engagement." },
      { num: "2", color: C.amber, light: C.amber_light, label: "VÉRIFIER",
        desc: "chaque zone dans une source de référence. Pas en redemandant à l'assistant. Aller à la source : registre officiel, texte de loi, document contractuel." },
      { num: "3", color: C.red, light: C.red_light, label: "RELIRE",
        desc: "humainement et systématiquement avant tout envoi externe : jamais publié sur la part d'un assistant n'est public sous des yeux humains." },
    ];
    t.forEach((te, i) => {
      const x = 0.6 + i * 4.2;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x, y: 2.0, w: 4.0, h: 4.7,
        fill: { color: te.light }, line: { color: te.color, width: 1.5 }, rectRadius: 0.1,
      });
      s.addShape(pres.shapes.OVAL, {
        x: x + (4.0 - 0.7) / 2, y: 2.2, w: 0.7, h: 0.7,
        fill: { color: te.color }, line: { color: te.color, width: 0 },
      });
      s.addText(te.num, {
        x: x + (4.0 - 0.7) / 2, y: 2.2, w: 0.7, h: 0.7,
        fontSize: 24, fontFace: FONT, bold: true, color: C.white,
        align: "center", valign: "middle", margin: 0,
      });
      s.addText(te.label, {
        x, y: 3.1, w: 4.0, h: 0.5, fontSize: 17, fontFace: FONT, bold: true,
        color: te.color, align: "center", charSpacing: 2,
      });
      s.addText(te.desc, {
        x: x + 0.25, y: 3.8, w: 3.5, h: 2.7, fontSize: 12, fontFace: FONT,
        color: C.slate700, align: "center", valign: "top",
      });
    });
    addBrand(s);
  }

  // --- 2.9 Risque 3 · Industrialisation prématurée ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 2 · RISQUE 3 · INDUSTRIALISATION PRÉMATURÉE", null, BLOC);
    s.addText("Automatiser ce qu'on n'a pas encore sécurisé.", {
      x: 0.6, y: 1.65, w: 12.1, h: 0.65, fontSize: 24, fontFace: FONT, bold: true,
      color: C.slate900, align: "center",
    });
    const phases = [
      { x: 0.6, color: C.sfoi_s, light: C.sfoi_s_light, label: "PHASE 1 · USAGE MANUEL",
        txt: "Une équipe commerciale utilise l'assistant pour rédiger des propositions clients. Ça fonctionne bien." },
      { x: 4.95, color: C.amber, light: C.amber_light, label: "PHASE 2 · AUTOMATISATION",
        txt: "On responsabilise : le manager décide d'automatiser : un script génère des propositions à la chaîne. Ça va plus vite." },
      { x: 9.3, color: C.red, light: C.red_light, label: "PHASE 3 · ERREUR MULTIPLIÉE",
        txt: "Personne n'avait remarqué que l'assistant confondait deux offres tarifaires.\nÀ faible volume, le commercial corrigeait. Automatisée → 200 clients." },
    ];
    phases.forEach((p, i) => {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: p.x, y: 2.7, w: 3.4, h: 3.5,
        fill: { color: p.light }, line: { color: p.color, width: 1.5 }, rectRadius: 0.1,
      });
      s.addText(p.label, {
        x: p.x, y: 2.85, w: 3.4, h: 0.4, fontSize: 11, fontFace: FONT, bold: true,
        color: p.color, charSpacing: 2, align: "center",
      });
      s.addText(p.txt, {
        x: p.x + 0.25, y: 3.4, w: 3.0, h: 2.7, fontSize: 13, fontFace: FONT,
        color: C.slate900, valign: "top",
      });
    });
    s.addText("L'erreur invisible à l'unité devient catastrophique à l'échelle.", {
      x: 0.6, y: 6.45, w: 12.1, h: 0.5, fontSize: 16, fontFace: FONT, bold: true, italic: true,
      color: C.red_dark, align: "center",
    });
    addBrand(s);
  }

  // --- 2.10 Annonce S.F.O.I. ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 2 · ANNONCE SFOI",
      "C'est pour éviter ça que la formation s'appuie sur une progression en quatre niveaux", BLOC);
    const lvl = [
      { letter: "S", color: C.sfoi_s, dark: C.sfoi_s_dark, light: C.sfoi_s_light, name: "Structurer", verb: "Organiser. Vérifier que rien ne se perd." },
      { letter: "F", color: C.sfoi_f, dark: C.sfoi_f_dark, light: C.sfoi_f_light, name: "Fiabiliser", verb: "Rendre chaque affirmation vérifiable." },
      { letter: "O", color: C.sfoi_o, dark: C.sfoi_o_dark, light: C.sfoi_o_light, name: "Optimiser", verb: "Transformer en outil exploitable." },
      { letter: "I", color: C.sfoi_i, dark: C.sfoi_i_dark, light: C.sfoi_i_light, name: "Industrialiser", verb: "Intégrer au système, avec rôles et traçabilité." },
    ];
    lvl.forEach((l, i) => {
      const x = 0.6 + i * 3.05;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x, y: 2.0, w: 2.95, h: 3.7,
        fill: { color: l.light }, line: { color: l.color, width: 1.5 }, rectRadius: 0.1,
      });
      s.addShape(pres.shapes.OVAL, {
        x: x + (2.95 - 0.85) / 2, y: 2.2, w: 0.85, h: 0.85,
        fill: { color: l.color }, line: { color: l.color, width: 0 },
      });
      s.addText(l.letter, {
        x: x + (2.95 - 0.85) / 2, y: 2.2, w: 0.85, h: 0.85,
        fontSize: 30, fontFace: FONT, bold: true, color: C.white,
        align: "center", valign: "middle", margin: 0,
      });
      s.addText(l.name, {
        x, y: 3.2, w: 2.95, h: 0.5, fontSize: 18, fontFace: FONT, bold: true,
        color: l.dark, align: "center",
      });
      s.addText(l.verb, {
        x: x + 0.25, y: 3.85, w: 2.45, h: 1.7, fontSize: 11, fontFace: FONT,
        color: C.slate700, align: "center", valign: "top",
      });
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 6.0, w: 12.1, h: 1.05,
      fill: { color: C.red_light }, line: { color: C.red, width: 1.5 }, rectRadius: 0.08,
    });
    s.addText("RÈGLE ABSOLUE", {
      x: 0.85, y: 6.1, w: 11.6, h: 0.3, fontSize: 10, fontFace: FONT, bold: true,
      color: C.red_dark, charSpacing: 2,
    });
    s.addText("On ne passe pas directement de Structurer à Industrialiser. On ne saute pas les étapes.", {
      x: 0.85, y: 6.45, w: 11.6, h: 0.5, fontSize: 14, fontFace: FONT, bold: true, italic: true,
      color: C.slate900,
    });
    addBrand(s);
  }

  // --- 2.11 Trois questions avant d'automatiser ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 2 · AUTOMATISATION", "Trois questions avant d'automatiser quoi que ce soit", BLOC);
    const qs = [
      { num: "1", color: C.primary, light: C.primary_light,
        q: "Le contenu a-t-il été validé humainement",
        sub: "pendant une durée suffisante sur le cas d'usage prévu ?" },
      { num: "2", color: C.amber, light: C.amber_light,
        q: "Les erreurs ont-elles été identifiées et corrigées",
        sub: "avant automatisation ?" },
      { num: "3", color: C.accent, light: C.accent_light,
        q: "Y a-t-il une supervision humaine dans le processus —",
        sub: "pas seulement à la fin, mais en cours de route ?" },
    ];
    qs.forEach((q, i) => {
      const y = 2.0 + i * 1.35;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 0.6, y, w: 12.1, h: 1.15,
        fill: { color: q.light }, line: { color: q.color, width: 1.5 }, rectRadius: 0.1,
      });
      s.addShape(pres.shapes.OVAL, {
        x: 0.85, y: y + 0.27, w: 0.6, h: 0.6,
        fill: { color: q.color }, line: { color: q.color, width: 0 },
      });
      s.addText(q.num, {
        x: 0.85, y: y + 0.27, w: 0.6, h: 0.6, fontSize: 22, fontFace: FONT, bold: true,
        color: C.white, align: "center", valign: "middle", margin: 0,
      });
      s.addText([
        { text: q.q + " ", options: { color: C.slate900, fontSize: 14, bold: true } },
        { text: q.sub, options: { color: C.slate700, fontSize: 13, italic: true } },
      ], { x: 1.65, y, w: 10.8, h: 1.15, fontFace: FONT, valign: "middle" });
    });
    s.addText("Si non à l'une des trois → vous n'êtes pas prêt à automatiser.", {
      x: 0.6, y: 6.55, w: 12.1, h: 0.45, fontSize: 14, fontFace: FONT, bold: true, italic: true,
      color: C.red_dark, align: "center",
    });
    addBrand(s);
  }

  // --- 2.12 AI Act Article 4 ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 2 · AI ACT", "L'Article 4 et votre obligation de formation", BLOC);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 1.95, w: 12.1, h: 1.05,
      fill: { color: C.primary_light }, line: { color: C.primary, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("ARTICLE 4 · AI Act (Règlement européen)", {
      x: 0.85, y: 2.05, w: 11.6, h: 0.35, fontSize: 12, fontFace: FONT, bold: true,
      color: C.primary_dark, charSpacing: 2,
    });
    s.addText("Les organisations doivent assurer un niveau suffisant de maîtrise de l'IA pour leur personnel, en particulier pour ceux qui utilisent ou déploient des systèmes d'IA.", {
      x: 0.85, y: 2.4, w: 11.6, h: 0.6, fontSize: 13, fontFace: FONT, italic: true,
      color: C.slate900, valign: "top",
    });
    s.addText("Votre usage est-il à haut risque ?", {
      x: 0.6, y: 3.3, w: 12.1, h: 0.4, fontSize: 16, fontFace: FONT, bold: true,
      color: C.slate900, align: "center",
    });
    const r = [
      { x: 0.6, color: C.red, light: C.red_light, num: "1",
        desc: "Impact direct sur des décisions concernant des personnes (recrutement, évaluation, scoring, crédit, accès aux soins)" },
      { x: 4.95, color: C.amber, light: C.amber_light, num: "2",
        desc: "Domaine classé à haut risque (santé, justice, RH, infrastructure critique, éducation)" },
      { x: 9.3, color: C.accent, light: C.accent_light, num: "3",
        desc: "Décisions automatisées avec implications juridiques ou significatives, pas une simple aide au travail" },
    ];
    r.forEach(ri => {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: ri.x, y: 3.85, w: 3.4, h: 2.4,
        fill: { color: ri.light }, line: { color: ri.color, width: 1.5 }, rectRadius: 0.1,
      });
      s.addShape(pres.shapes.OVAL, {
        x: ri.x + (3.4 - 0.55) / 2, y: 4.0, w: 0.55, h: 0.55,
        fill: { color: ri.color }, line: { color: ri.color, width: 0 },
      });
      s.addText(ri.num, {
        x: ri.x + (3.4 - 0.55) / 2, y: 4.0, w: 0.55, h: 0.55,
        fontSize: 18, fontFace: FONT, bold: true, color: C.white,
        align: "center", valign: "middle", margin: 0,
      });
      s.addText(ri.desc, {
        x: ri.x + 0.2, y: 4.7, w: 3.0, h: 1.55, fontSize: 11, fontFace: FONT,
        color: C.slate700, align: "center", valign: "top",
      });
    });
    s.addText([
      { text: "Oui à au moins une question ", options: { bold: true, color: C.red_dark, fontSize: 13 } },
      { text: "= usage à haut risque. Évaluation de conformité, documentation, supervision formalisée.", options: { color: C.slate700, fontSize: 13, breakLine: true } },
      { text: "Non aux trois ", options: { bold: true, color: C.sfoi_s_dark, fontSize: 13 } },
      { text: "= usage standard. Règles de bon usage, pas d'obligation réglementaire particulière.", options: { color: C.slate700, fontSize: 13 } },
    ], { x: 0.6, y: 6.4, w: 12.1, h: 0.7, fontFace: FONT, align: "center" });
    addBrand(s);
  }

  // --- 2.13 Coût énergétique (NOUVELLE slide) ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 2 · UN MOT SUR L'IMPACT ENVIRONNEMENTAL",
      "Court mais important.", BLOC);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 2.0, w: 12.1, h: 1.4,
      fill: { color: C.sfoi_s_light }, line: { color: C.sfoi_s, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("Utiliser l'IA a un coût énergétique réel.", {
      x: 0.85, y: 2.15, w: 11.6, h: 0.5, fontSize: 22, fontFace: FONT, bold: true,
      color: C.slate900,
    });
    s.addText("Les data centers consomment de l'électricité et de l'eau en quantité significative.", {
      x: 0.85, y: 2.7, w: 11.6, h: 0.55, fontSize: 14, fontFace: FONT, italic: true,
      color: C.slate700,
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 3.65, w: 5.95, h: 2.9,
      fill: { color: C.slate50 }, line: { color: C.slate300, width: 1 }, rectRadius: 0.1,
    });
    s.addText("CE N'EST PAS", {
      x: 0.85, y: 3.8, w: 5.5, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.slate500, charSpacing: 2,
    });
    s.addText("Une raison de ne pas utiliser l'IA.", {
      x: 0.85, y: 4.15, w: 5.5, h: 0.45, fontSize: 16, fontFace: FONT, bold: true,
      color: C.slate700,
    });
    s.addText("Pas une injonction à la culpabilité.", {
      x: 0.85, y: 4.65, w: 5.5, h: 0.4, fontSize: 13, fontFace: FONT, italic: true,
      color: C.slate500,
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 6.75, y: 3.65, w: 5.95, h: 2.9,
      fill: { color: C.sfoi_s_light }, line: { color: C.sfoi_s, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("C'EST", {
      x: 7.0, y: 3.8, w: 5.5, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.sfoi_s_dark, charSpacing: 2,
    });
    s.addText("Une raison de l'utiliser à bon escient.", {
      x: 7.0, y: 4.15, w: 5.5, h: 0.45, fontSize: 16, fontFace: FONT, bold: true,
      color: C.slate900,
    });
    s.addText("Un usage réfléchi, ciblé sur des tâches où l'IA apporte vraiment de la valeur, est plus efficace pour vous, et plus frugal.", {
      x: 7.0, y: 4.65, w: 5.5, h: 1.5, fontSize: 13, fontFace: FONT,
      color: C.slate700, valign: "top",
    });
    s.addText("Un prompt inutile consomme autant qu'un prompt utile.", {
      x: 0.6, y: 6.7, w: 12.1, h: 0.4, fontSize: 14, fontFace: FONT, bold: true, italic: true,
      color: C.sfoi_s_dark, align: "center",
    });
    addBrand(s);
  }

  // --- 2.14 Clôture · 3 règles ---
  {
    const s = pres.addSlide();
    s.background = { color: C.white };
    addHeader(s, pres, "BLOC 2 · CLÔTURE", "Trois risques. Trois règles essentielles.", BLOC);
    const rules = [
      { x: 0.6, color: C.primary, light: C.primary_light, label: "L'EXFILTRATION",
        rule: "Avant de coller : posez la question publique. Vérifiez votre type de licence." },
      { x: 4.95, color: C.amber, light: C.amber_light, label: "LA RELECTURE",
        rule: "Avant de publier, des yeux humains relisent dates, chiffres, références, engagements." },
      { x: 9.3, color: C.accent, light: C.accent_light, label: "L'INDUSTRIALISATION",
        rule: "Avant d'automatiser, vérifiez la validation et la supervision humaine maintenue." },
    ];
    rules.forEach(r => {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: r.x, y: 2.0, w: 3.4, h: 2.95,
        fill: { color: r.light }, line: { color: r.color, width: 1.5 }, rectRadius: 0.1,
      });
      s.addText("LA RÈGLE DE", {
        x: r.x, y: 2.2, w: 3.4, h: 0.3, fontSize: 10, fontFace: FONT, bold: true,
        color: r.color, charSpacing: 2, align: "center",
      });
      s.addText(r.label, {
        x: r.x, y: 2.55, w: 3.4, h: 0.5, fontSize: 18, fontFace: FONT, bold: true,
        color: r.color, align: "center",
      });
      s.addText(r.rule, {
        x: r.x + 0.2, y: 3.25, w: 3.0, h: 1.55, fontSize: 12, fontFace: FONT,
        color: C.slate700, align: "center", valign: "top",
      });
    });
    s.addText("Ces trois règles ne ralentissent pas votre usage de l'IA. Elles permettent de l'accélérer en toute confiance.", {
      x: 0.6, y: 5.7, w: 12.1, h: 0.5, fontSize: 14, fontFace: FONT, italic: true,
      color: C.slate700, align: "center",
    });
    s.addText("L'organisation qui pose ces règles tôt va plus vite que celle qui les découvre par une erreur coûteuse.", {
      x: 0.6, y: 6.45, w: 12.1, h: 0.5, fontSize: 14, fontFace: FONT, bold: true, italic: true,
      color: C.slate900, align: "center",
    });
    addBrand(s);
  }
};