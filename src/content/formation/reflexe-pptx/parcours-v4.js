// ===================================================================
// PARCOURS Reflexe IA v4 — 5 blocs, 47 slides
// ===================================================================
const pptxgen = require("pptxgenjs");
const H = require("./_helpers.js");

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE";
pres.title = "Reflexe IA — Formation v4";
pres.author = "Reflexe IA";
pres.company = "FGIT Conseil";

// BLOC 1 — Comprendre l'IA générative (8 slides)
require("./blocs/bloc1.js")(pres, H);
// BLOC 2 — Risques (14 slides : 13 + slide coût énergétique)
require("./blocs/bloc2.js")(pres, H);
// BLOC 3 — Choisir le bon prompt (7 slides)
require("./blocs/bloc3.js")(pres, H);
// BLOC 4 — Méthode S.F.O.I. (8 slides)
require("./blocs/bloc4.js")(pres, H);
// BLOC 5 — Assistant augmenté (10 slides : 8 + 2 nouvelles Steward)
require("./blocs/bloc5.js")(pres, H);

pres.writeFile({ fileName: "Reflexe-IA-Formation-v4.pptx" }).then(() => {
  console.log("✓ Parcours v4 généré (47 slides) → Reflexe-IA-Formation-v4.pptx");
});