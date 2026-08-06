// BLOC 5 — L'assistant augmenté · 10 slides
// Palette plus contemplative (fond crème C.paper)
module.exports = function(pres, H) {
  const { C, FONT, addBrand, addHeader, hLine, vLine,
          drawBoucleAmplificatrice, drawRedditionCognitive,
          drawIMIARadar, drawStewardEmbleme, drawMilleFeuille } = H;
  const BLOC = 5;
  const BG = C.paper;

  // --- 5.1 Récap chemin parcouru ---
  {
    const s = pres.addSlide();
    s.background = { color: BG };
    addHeader(s, pres, "BLOC 5 · L'ASSISTANT AUGMENTÉ",
      "Vous y êtes. Dernier bloc. Et il est un peu différent des autres.", BLOC);
    const blocs = [
      { num: "01", title: "LLM & PLATEFORME", desc: "Vous savez ce qu'un LLM prédit, et ce qu'une plateforme ajoute par-dessus.", color: C.primary, light: C.primary_light },
      { num: "02", title: "RISQUES & CADRE", desc: "Exfiltration, réputationnel, industrialisation. Trois règles essentielles.", color: C.amber, light: C.amber_light },
      { num: "03", title: "LES 4 INTENTIONS", desc: "Exploration, structuration, production, vérification. Le bon type avant le bon prompt.", color: C.sfoi_o, light: C.sfoi_o_light },
      { num: "04", title: "MÉTHODE S.F.O.I.", desc: "Marc a livré sa charte vendredi. Solide. Parce qu'il a suivi les actes dans l'ordre.", color: C.sfoi_s, light: C.sfoi_s_light },
    ];
    blocs.forEach((b, i) => {
      const x = 0.6 + i * 3.05;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x, y: 2.0, w: 2.95, h: 2.7,
        fill: { color: b.light }, line: { color: b.color, width: 1.5 }, rectRadius: 0.1,
      });
      s.addText(b.num, {
        x, y: 2.15, w: 2.95, h: 0.4, fontSize: 12, fontFace: FONT, bold: true,
        color: b.color, charSpacing: 3, align: "center",
      });
      s.addText(b.title, {
        x: x + 0.1, y: 2.55, w: 2.75, h: 0.6, fontSize: 14, fontFace: FONT, bold: true,
        color: C.slate900, align: "center",
      });
      s.addText(b.desc, {
        x: x + 0.2, y: 3.2, w: 2.55, h: 1.4, fontSize: 11, fontFace: FONT,
        color: C.slate700, align: "center", valign: "top",
      });
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 5.0, w: 12.1, h: 1.05,
      fill: { color: C.white }, line: { color: C.slate300, width: 1 }, rectRadius: 0.1,
    });
    s.addText("Vous avez une compétence individuelle réelle.", {
      x: 0.85, y: 5.15, w: 11.6, h: 0.5, fontSize: 20, fontFace: FONT, bold: true,
      color: C.slate900, align: "center",
    });
    s.addText("Ce n'est pas rien.", {
      x: 0.85, y: 5.6, w: 11.6, h: 0.4, fontSize: 14, fontFace: FONT, italic: true,
      color: C.slate500, align: "center",
    });
    s.addText("Et pourtant, il y a quelque chose que cette formation ne peut pas résoudre à votre place.", {
      x: 0.6, y: 6.4, w: 12.1, h: 0.5, fontSize: 14, fontFace: FONT, italic: true,
      color: C.slate700, align: "center",
    });
    addBrand(s);
  }

  // --- 5.2 Ce que la formation ne résout pas + mille-feuille ---
  {
    const s = pres.addSlide();
    s.background = { color: BG };
    addHeader(s, pres, "BLOC 5 · CE QUE LA FORMATION NE RÉSOUT PAS", null, BLOC);
    s.addText("Un individu bien formé dans un système qui ne l'est pas", {
      x: 0.6, y: 1.4, w: 12.1, h: 0.55, fontSize: 22, fontFace: FONT, bold: true,
      color: C.slate900, align: "center",
    });
    s.addText("finit souvent par s'aligner sur le système. Pas l'inverse.", {
      x: 0.6, y: 1.95, w: 12.1, h: 0.55, fontSize: 22, fontFace: FONT, bold: true, italic: true,
      color: C.accent_dark, align: "center",
    });
    drawMilleFeuille(s, pres, 2.5, 2.95, 8.0, 3.5);
    s.addText("Ce que cette formation a fait : le niveau Individu. Ce qui reste à faire : Équipe et Organisation.", {
      x: 0.6, y: 6.7, w: 12.1, h: 0.4, fontSize: 13, fontFace: FONT, italic: true,
      color: C.slate500, align: "center",
    });
    addBrand(s);
  }

  // --- 5.3 Vue d'ensemble : 2 boucles ---
  {
    const s = pres.addSlide();
    s.background = { color: BG };
    addHeader(s, pres, "BLOC 5 · LES 2 BOUCLES",
      "Quand un assistant devient courant, deux mécanismes s'installent silencieusement.", BLOC);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 1.95, w: 12.1, h: 0.85,
      fill: { color: C.white }, line: { color: C.accent, width: 1 }, rectRadius: 0.08,
    });
    s.addText("Une capacité nouvelle crée une responsabilité nouvelle.", {
      x: 0.85, y: 2.05, w: 11.6, h: 0.4, fontSize: 16, fontFace: FONT, bold: true,
      color: C.accent_dark,
    });
    s.addText("La responsabilité ne disparaît pas dans la délégation. Elle se déplace vers le haut.", {
      x: 0.85, y: 2.45, w: 11.6, h: 0.4, fontSize: 13, fontFace: FONT, italic: true,
      color: C.slate700,
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 3.05, w: 5.95, h: 3.6,
      fill: { color: C.red_light }, line: { color: C.red, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("BOUCLE 1", { x: 0.85, y: 3.2, w: 5.5, h: 0.3, fontSize: 11, fontFace: FONT, bold: true, color: C.red, charSpacing: 3 });
    s.addText("La boucle amplificatrice", { x: 0.85, y: 3.55, w: 5.5, h: 0.5, fontSize: 20, fontFace: FONT, bold: true, color: C.slate900 });
    s.addText("Bruyante · rapide", { x: 0.85, y: 4.1, w: 5.5, h: 0.35, fontSize: 13, fontFace: FONT, italic: true, color: C.red_dark });
    hLine(s, pres, 0.85, 4.55, 5.5, C.red);
    s.addText("Usage ↑ · Vérification ↓ · Erreur non détectée\n→ Choc correcteur", { x: 0.85, y: 4.7, w: 5.5, h: 1.4, fontSize: 14, fontFace: FONT, color: C.slate900, valign: "top" });
    s.addText("Cette boucle ne s'arrête pas d'elle-même.", { x: 0.85, y: 6.15, w: 5.5, h: 0.4, fontSize: 12, fontFace: FONT, italic: true, color: C.slate700 });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 6.75, y: 3.05, w: 5.95, h: 3.6,
      fill: { color: C.slate100 }, line: { color: C.slate500, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("BOUCLE 2", { x: 7.0, y: 3.2, w: 5.5, h: 0.3, fontSize: 11, fontFace: FONT, bold: true, color: C.slate700, charSpacing: 3 });
    s.addText("La reddition cognitive", { x: 7.0, y: 3.55, w: 5.5, h: 0.5, fontSize: 20, fontFace: FONT, bold: true, color: C.slate900 });
    s.addText("Silencieuse · lente", { x: 7.0, y: 4.1, w: 5.5, h: 0.35, fontSize: 13, fontFace: FONT, italic: true, color: C.slate700 });
    hLine(s, pres, 7.0, 4.55, 5.5, C.slate500);
    s.addText("Usage stable · Capacité de vérification ↘\n→ Atrophie collective", { x: 7.0, y: 4.7, w: 5.5, h: 1.4, fontSize: 14, fontFace: FONT, color: C.slate900, valign: "top" });
    s.addText("Pas de l'addiction. L'atrophie d'une capacité collective.", { x: 7.0, y: 6.15, w: 5.5, h: 0.4, fontSize: 12, fontFace: FONT, italic: true, color: C.slate700 });
    s.addText("Visibles quand on sait quoi regarder. Interruptibles. Pas un travail individuel.", {
      x: 0.6, y: 6.85, w: 12.1, h: 0.35, fontSize: 13, fontFace: FONT, italic: true, bold: true,
      color: C.slate900, align: "center",
    });
    addBrand(s);
  }

  // --- 5.4 Boucle amplificatrice ---
  {
    const s = pres.addSlide();
    s.background = { color: BG };
    addHeader(s, pres, "BLOC 5 · BOUCLE 1 · AMPLIFICATRICE",
      "Bruyante. Rapide. Le choc correcteur arrête la boucle — pas l'organisation.", BLOC);
    drawBoucleAmplificatrice(s, pres, 0.6, 1.9, 7.0, 4.7);
    const steps = [
      { txt: "L'usage croît.", color: C.red },
      { txt: "Les résultats semblent satisfaisants.", color: C.red },
      { txt: "La vérification diminue, discrètement.", color: C.red_dark },
      { txt: "Une erreur non détectée cause un tort.", color: C.red_dark },
      { txt: "La confiance se rompt brutalement.", color: C.red_dark, bold: true },
    ];
    steps.forEach((st, i) => {
      const y = 2.0 + i * 0.85;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 7.7, y, w: 5.0, h: 0.7,
        fill: { color: C.white }, line: { color: st.color, width: 1 }, rectRadius: 0.06,
      });
      s.addText(String(i + 1), {
        x: 7.85, y: y + 0.15, w: 0.4, h: 0.4, fontSize: 14, fontFace: FONT, bold: true,
        color: st.color, align: "center", valign: "middle", margin: 0,
      });
      s.addText(st.txt, {
        x: 8.3, y, w: 4.6, h: 0.7, fontSize: 13, fontFace: FONT, bold: !!st.bold,
        color: st.color, valign: "middle",
      });
    });
    s.addText("Cette boucle ne s'arrête pas d'elle-même. Elle s'emballe jusqu'au choc correcteur.", {
      x: 0.6, y: 6.85, w: 12.1, h: 0.4, fontSize: 13, fontFace: FONT, italic: true,
      color: C.red_dark, align: "center",
    });
    addBrand(s);
  }

  // --- 5.5 Reddition cognitive ---
  {
    const s = pres.addSlide();
    s.background = { color: BG };
    addHeader(s, pres, "BLOC 5 · BOUCLE 2 · REDDITION COGNITIVE",
      "Silencieuse. Lente. Ce qui s'érode, c'est la capacité collective à voir.", BLOC);
    drawRedditionCognitive(s, pres, 0.6, 1.9, 7.0, 4.7);
    const jalons = [
      "L'équipe délègue son raisonnement à l'outil.",
      "Sans décision collective. Juste par accumulation.",
      "L'équipe perd la compétence même de vérification.",
    ];
    jalons.forEach((j, i) => {
      const y = 2.2 + i * 0.85;
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: 7.7, y, w: 5.0, h: 0.7,
        fill: { color: C.white }, line: { color: C.slate500, width: 1 }, rectRadius: 0.06,
      });
      s.addText(String(i + 1), {
        x: 7.85, y: y + 0.15, w: 0.4, h: 0.4, fontSize: 14, fontFace: FONT, bold: true,
        color: C.slate700, align: "center", valign: "middle", margin: 0,
      });
      s.addText(j, {
        x: 8.3, y, w: 4.6, h: 0.7, fontSize: 13, fontFace: FONT,
        color: C.slate900, valign: "middle",
      });
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 7.7, y: 4.85, w: 5.0, h: 1.7,
      fill: { color: C.primary_light }, line: { color: C.primary, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("LA QUESTION PIVOT", {
      x: 7.95, y: 5.0, w: 4.5, h: 0.3, fontSize: 10, fontFace: FONT, bold: true,
      color: C.primary_dark, charSpacing: 2,
    });
    s.addText("« Sommes-nous encore capables de le détecter ? »", {
      x: 7.95, y: 5.35, w: 4.5, h: 1.1, fontSize: 14, fontFace: FONT, bold: true, italic: true,
      color: C.slate900, valign: "middle",
    });
    s.addText("Pas une addiction. L'atrophie d'une capacité collective.", {
      x: 0.6, y: 6.85, w: 12.1, h: 0.4, fontSize: 13, fontFace: FONT, italic: true,
      color: C.slate700, align: "center",
    });
    addBrand(s);
  }

  // --- 5.6 IMIA ---
  {
    const s = pres.addSlide();
    s.background = { color: BG };
    addHeader(s, pres, "BLOC 5 · IMIA",
      "Indice de Maturité IA Organisationnelle — la carte, pas la photo.", BLOC);
    drawIMIARadar(s, pres, 1.0, 1.95, 6.5, 4.7);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 8.0, y: 1.95, w: 4.7, h: 4.7,
      fill: { color: C.white }, line: { color: C.slate300, width: 1 }, rectRadius: 0.1,
    });
    s.addText("CE QUE MESURE L'IMIA", {
      x: 8.25, y: 2.1, w: 4.4, h: 0.3, fontSize: 11, fontFace: FONT, bold: true,
      color: C.primary_dark, charSpacing: 2,
    });
    s.addText("Ce que votre organisation sait faire.\nPas ce qu'elle fait.", {
      x: 8.25, y: 2.5, w: 4.4, h: 0.95, fontSize: 16, fontFace: FONT, bold: true,
      color: C.slate900,
    });
    hLine(s, pres, 8.25, 3.55, 4.2, C.slate300);
    s.addText([
      { text: "Une capacité installée — ", options: { bold: true, color: C.slate900, fontSize: 12 } },
      { text: "pas un volume d'usage.\nNombre d'utilisateurs ou de licences ne disent rien sur la maturité.", options: { color: C.slate700, fontSize: 12, italic: true } },
    ], { x: 8.25, y: 3.7, w: 4.4, h: 1.3, fontFace: FONT, valign: "top" });
    s.addText("CADENCE DE MESURE", {
      x: 8.25, y: 5.1, w: 4.4, h: 0.3, fontSize: 10, fontFace: FONT, bold: true,
      color: C.amber_dark, charSpacing: 2,
    });
    s.addText("T0 — T+90 jours — chaque trimestre.\nIndicateur de pilotage, pas photo.", {
      x: 8.25, y: 5.45, w: 4.4, h: 1.0, fontSize: 12, fontFace: FONT,
      color: C.slate700,
    });
    s.addText("S.F.O.I. est ce que vous faites. L'IMIA est ce que votre organisation devient.", {
      x: 0.6, y: 6.85, w: 12.1, h: 0.4, fontSize: 13, fontFace: FONT, italic: true, bold: true,
      color: C.primary_dark, align: "center",
    });
    addBrand(s);
  }

  // --- 5.7 AI Practice Steward emblème ---
  {
    const s = pres.addSlide();
    s.background = { color: BG };
    addHeader(s, pres, "BLOC 5 · LE RÔLE QUI ÉMERGE",
      "Trois rôles circulent autour de l'IA. Souvent confondus. Pas interchangeables.", BLOC);
    const roles = [
      { x: 0.6, label: "FORMATEUR", desc: "Enseigne ce qui est. Transmet une méthode.", color: C.primary, light: C.primary_light, isSteward: false },
      { x: 4.95, label: "CONSULTANT", desc: "Prescrit une solution. Mission ponctuelle.", color: C.amber, light: C.amber_light, isSteward: false },
      { x: 9.3, label: "AI PRACTICE STEWARD", desc: "Travaille sur ce qui ne se voit pas encore. Boucles, normes, dérives.", color: C.accent, light: C.accent_light, isSteward: true },
    ];
    roles.forEach(r => {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: r.x, y: 1.95, w: 3.4, h: 1.65,
        fill: { color: r.light }, line: { color: r.color, width: r.isSteward ? 2.5 : 1 }, rectRadius: 0.1,
      });
      s.addText(r.label, {
        x: r.x, y: 2.15, w: 3.4, h: 0.35, fontSize: 12, fontFace: FONT, bold: true,
        color: r.color, charSpacing: 2, align: "center",
      });
      s.addText(r.desc, {
        x: r.x + 0.2, y: 2.6, w: 3.0, h: 0.95, fontSize: 12, fontFace: FONT,
        color: C.slate700, align: "center", valign: "top",
      });
    });
    drawStewardEmbleme(s, pres, 1.5, 3.7, 10.3, 3.0);
    s.addText("Le succès d'une mission ne se mesure pas à sa reconduction. Il se mesure à la capacité du client à se passer du steward.", {
      x: 0.6, y: 6.85, w: 12.1, h: 0.4, fontSize: 12, fontFace: FONT, italic: true,
      color: C.accent_dark, align: "center",
    });
    addBrand(s);
  }

  // --- 5.8 Le steward au sens originel · 3 caractéristiques (NOUVELLE) ---
  {
    const s = pres.addSlide();
    s.background = { color: BG };
    addHeader(s, pres, "BLOC 5 · LE STEWARD",
      "Au sens originel : quelqu'un à qui on délègue l'autorité sur un périmètre — pas le propriétaire, mais responsable.", BLOC);
    s.addText("Trois choses caractérisent cette responsabilité.", {
      x: 0.6, y: 2.4, w: 12.1, h: 0.4, fontSize: 16, fontFace: FONT, bold: true,
      color: C.slate900, align: "center",
    });
    const carac = [
      { x: 0.6, num: "1", color: C.primary, dark: C.primary_dark, light: C.primary_light,
        label: "Extreme ownership", title: "Il assume\nentièrement\nson périmètre",
        desc: "Faire avancer les choses. Lever les blocages. Aller chercher les ressources — humaines, intellectuelles, organisationnelles. Si quelque chose ne va pas dans son périmètre, c'est sa responsabilité, qu'il en soit ou non la cause directe." },
      { x: 4.95, num: "2", color: C.sfoi_s, dark: C.sfoi_s_dark, light: C.sfoi_s_light,
        label: "Soin des personnes", title: "Il prend soin\ndes personnes\ndans son périmètre",
        desc: "Pas seulement les processus. Les gens — leur motivation, leur progression, leur engagement. Un steward qui livre un système qui fonctionne mais qui détruit l'envie de ceux qui l'utilisent a échoué." },
      { x: 9.3, num: "3", color: C.accent, dark: C.accent_dark, light: C.accent_light,
        label: "Liens avec les voisins", title: "Il entretient\ndes liens avec\nses voisins",
        desc: "Pas là pour conquérir des territoires. Là pour faire circuler ce qui marche, apprendre ce que les autres font mieux, construire des partenariats. En interne avec les autres équipes, en externe avec d'autres praticiens." },
    ];
    carac.forEach(c2 => {
      s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
        x: c2.x, y: 2.95, w: 3.4, h: 3.7,
        fill: { color: c2.light }, line: { color: c2.color, width: 1.5 }, rectRadius: 0.1,
      });
      s.addShape(pres.shapes.OVAL, {
        x: c2.x + (3.4 - 0.7) / 2, y: 3.15, w: 0.7, h: 0.7,
        fill: { color: c2.color }, line: { color: c2.color, width: 0 },
      });
      s.addText(c2.num, {
        x: c2.x + (3.4 - 0.7) / 2, y: 3.15, w: 0.7, h: 0.7,
        fontSize: 24, fontFace: FONT, bold: true, color: C.white,
        align: "center", valign: "middle", margin: 0,
      });
      s.addText(c2.label, {
        x: c2.x, y: 4.0, w: 3.4, h: 0.3, fontSize: 11, fontFace: FONT, bold: true, italic: true,
        color: c2.dark, align: "center",
      });
      s.addText(c2.title, {
        x: c2.x + 0.15, y: 4.4, w: 3.1, h: 1.1, fontSize: 15, fontFace: FONT, bold: true,
        color: C.slate900, align: "center",
      });
      s.addText(c2.desc, {
        x: c2.x + 0.25, y: 5.55, w: 2.9, h: 1.05, fontSize: 10, fontFace: FONT,
        color: C.slate700, align: "center", valign: "top",
      });
    });
    s.addText("L'AI Practice Steward applique cette posture aux pratiques IA d'une organisation. C'est son périmètre.", {
      x: 0.6, y: 6.85, w: 12.1, h: 0.4, fontSize: 13, fontFace: FONT, italic: true, bold: true,
      color: C.slate700, align: "center",
    });
    addBrand(s);
  }

  // --- 5.9 Livrables Steward (NOUVELLE) ---
  {
    const s = pres.addSlide();
    s.background = { color: BG };
    addHeader(s, pres, "BLOC 5 · LIVRABLES",
      "Concrètement, ce que livre l'AI Practice Steward — et ce qu'il ne fait pas.", BLOC);
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 0.6, y: 2.0, w: 7.6, h: 4.55,
      fill: { color: C.primary_light }, line: { color: C.primary, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("CE QU'IL LIVRE", {
      x: 0.95, y: 2.2, w: 7.0, h: 0.35, fontSize: 12, fontFace: FONT, bold: true,
      color: C.primary_dark, charSpacing: 2,
    });
    const livre = [
      { title: "Diagnostic IMIA", desc: "au début de mission, et mesure de progression à 90 jours" },
      { title: "Normes d'équipe co-construites", desc: "qui vérifie quoi, comment, contre quelle référence" },
      { title: "Skills", desc: "actifs permanents qui capturent un savoir tacite critique, restent dans l'organisation, survivent au départ de l'expert" },
      { title: "Transfert de posture", desc: "vers un ou deux AI Practice Stewards internes, pour que la gouvernance tienne sans présence externe permanente" },
    ];
    livre.forEach((l, i) => {
      const ly = 2.7 + i * 0.95;
      s.addShape(pres.shapes.OVAL, {
        x: 0.95, y: ly + 0.05, w: 0.4, h: 0.4,
        fill: { color: C.primary }, line: { color: C.primary, width: 0 },
      });
      s.addText("✓", {
        x: 0.95, y: ly + 0.05, w: 0.4, h: 0.4, fontSize: 16, fontFace: FONT, bold: true,
        color: C.white, align: "center", valign: "middle", margin: 0,
      });
      s.addText(l.title, {
        x: 1.5, y: ly, w: 6.5, h: 0.35, fontSize: 14, fontFace: FONT, bold: true,
        color: C.slate900,
      });
      s.addText(l.desc, {
        x: 1.5, y: ly + 0.35, w: 6.5, h: 0.55, fontSize: 11, fontFace: FONT, italic: true,
        color: C.slate700, valign: "top",
      });
    });
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x: 8.4, y: 2.0, w: 4.3, h: 4.55,
      fill: { color: C.slate100 }, line: { color: C.slate400, width: 1.5 }, rectRadius: 0.1,
    });
    s.addText("CE QU'IL NE FAIT PAS", {
      x: 8.7, y: 2.2, w: 4.0, h: 0.35, fontSize: 12, fontFace: FONT, bold: true,
      color: C.slate700, charSpacing: 2,
    });
    const neFaitPas = [
      "Prendre la place de l'organisation",
      "Centraliser",
      "Devenir indispensable",
    ];
    neFaitPas.forEach((n, i) => {
      const ly = 3.0 + i * 0.95;
      s.addShape(pres.shapes.OVAL, {
        x: 8.7, y: ly, w: 0.4, h: 0.4,
        fill: { color: C.slate500 }, line: { color: C.slate500, width: 0 },
      });
      s.addText("✗", {
        x: 8.7, y: ly, w: 0.4, h: 0.4, fontSize: 16, fontFace: FONT, bold: true,
        color: C.white, align: "center", valign: "middle", margin: 0,
      });
      s.addText(n, {
        x: 9.25, y: ly, w: 3.4, h: 0.4, fontSize: 13, fontFace: FONT, bold: true,
        color: C.slate900, valign: "middle",
      });
    });
    s.addShape(pres.shapes.RECTANGLE, {
      x: 0.6, y: 6.7, w: 12.1, h: 0.55,
      fill: { color: C.ink }, line: { color: C.ink, width: 0 },
    });
    s.addText("Le succès se mesure à la capacité du client à se passer du steward.", {
      x: 0.85, y: 6.7, w: 11.6, h: 0.55, fontSize: 14, fontFace: FONT, bold: true, italic: true,
      color: C.white, align: "center", valign: "middle", margin: 0,
    });
    addBrand(s);
  }

  // --- 5.10 Clôture ---
  {
    const s = pres.addSlide();
    s.background = { color: BG };
    addHeader(s, pres, "BLOC 5 · CLÔTURE", null, BLOC);
    s.addText("Pas une formation de plus.", {
      x: 0.6, y: 2.7, w: 12.1, h: 0.85, fontSize: 42, fontFace: FONT, bold: true,
      color: C.slate900, align: "center",
    });
    s.addText("Un travail sur le système.", {
      x: 0.6, y: 3.55, w: 12.1, h: 0.85, fontSize: 42, fontFace: FONT, bold: true, italic: true,
      color: C.accent_dark, align: "center",
    });
    hLine(s, pres, 5.5, 4.7, 2.3, C.slate400);
    s.addText("Si cette question vous parle, la porte est ouverte.", {
      x: 0.6, y: 5.0, w: 12.1, h: 0.5, fontSize: 18, fontFace: FONT, italic: true,
      color: C.slate700, align: "center",
    });
    addBrand(s);
  }
};