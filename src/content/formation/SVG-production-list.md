# Production SVG · Formation Reflexe IA

> **Document de référence** pour la production des illustrations vectorielles de la formation.
> Chaque SVG est spécifié pour produire **un résultat directement intégrable** dans le composant Astro de la formation.
>
> **Conventions strictes :**
> - Format : viewBox `0 0 1280 720` (16:9), occupation pleine du canvas, marges intérieures 60px.
> - Charte : voir `CHARTE-SVG-Reflexe-IA.md` (palette dérivée du site, typo Inter, palette S.F.O.I. encodée).
> - Typo : sous-titres dans le SVG 22-24px, étiquettes 18-20px, captions 16px. Jamais sous 14px.
> - **Titre principal de la slide hors SVG** — c'est le composant Astro qui rend le titre, le SVG ne contient que la mécanique illustrée.
> - Identifiants : chaque élément animable porte un attribut `id` correspondant à un marqueur `<!-- TIMELINE: show NOM-ELEMENT -->` du markdown du bloc.
> - Style pédagogique : chaque SVG montre une **mécanique** (avant→après, transformation, comparaison), pas une liste décorative.

---

## Cohérence marqueurs ↔ SVG

102 marqueurs `TIMELINE` répartis sur les 5 blocs. Chacun est :
- soit attrapé par un `id` dans un SVG (animation visuelle),
- soit déclaré comme **animation textuelle** (titre de slide, transition de paragraphe — gérée par le composant Astro hors SVG).

**Rappel :** les titres de slide ne sont **pas** dans le SVG — ils sont rendus par le composant Astro et apparaissent indépendamment.

---

## Index des SVG par bloc

| Bloc | SVG | Titre | Nb marqueurs | Priorité |
|------|-----|-------|--------------|----------|
| 1 | 1.1 | Le LLM, machine à prédire | 3 | Haute |
| 1 | 1.2 | Le stagiaire cultivé | 1 | Moyenne |
| 1 | 1.3 | Plateforme vs LLM brut | 2 | Haute |
| 1 | 1.4 | L'hallucination | 2 | Haute |
| 1 | 1.5 | Les 3 limites | 3 | Haute |
| 1 | 1.6 | Les 4 implications | 4 | Haute |
| 2 | 2.1 | Exfiltration : 4 catégories de données | 5 | Haute |
| 2 | 2.2 | Les 3 questions filtres | 4 | Haute |
| 2 | 2.3 | Les 3 niveaux de protection | 4 | Haute |
| 2 | 2.4 | Risque réputationnel — 4 zones | 5 | Moyenne |
| 2 | 2.5 | Usurpation et deepfakes | 2 | Moyenne |
| 2 | 2.6 | Protocole de vérification 3 temps | 4 | Moyenne |
| 2 | 2.7 | Industrialisation prématurée | 3 | Moyenne |
| 2 | 2.8 | Aperçu S.F.O.I. (annonce bloc 4) | 5 | Basse |
| 2 | 2.9 | 3 questions avant d'automatiser | 4 | Moyenne |
| 2 | 2.10 | AI Act · Article 4 | 1 | Basse |
| 3 | 3.1 | Les 4 intentions de prompt | 5 | Haute |
| 3 | 3.2 | Gabarit Exploration | 1 | Moyenne |
| 3 | 3.3 | Gabarit Structuration | 1 | Moyenne |
| 3 | 3.4 | Gabarit Production | 1 | Moyenne |
| 3 | 3.5 | Gabarit Vérification | 1 | Moyenne |
| 3 | 3.6 | Synthèse des 4 gabarits | 1 | Moyenne |
| 4 | 4.1 | Les 4 actes S.F.O.I. | 4 | **Critique** |
| 4 | 4.2 | Marc applique S puis F | 2 | Haute |
| 4 | 4.3 | Les 3 erreurs fréquentes | 3 | Haute |
| 5 | 5.1 | La boucle amplificatrice | 6 | **Critique** |
| 5 | 5.2 | La reddition cognitive | 5 | **Critique** |
| 5 | 5.3 | Les 5 dimensions IMIA | 3 | **À REFAIRE** ⚠ |
| 5 | 5.4 | Les 3 capacités du Steward | 4 | **Critique** |
| 5 | 5.5 | Les 3 niveaux d'intervention du Steward | 3 | Haute |
| 5 | 5.6 | Les skills comme actifs métiers | 4 | Moyenne |

**Total : 31 SVG** (vs 22 initialement — augmentation due à la couverture exhaustive des marqueurs).

---

## Marqueurs hors SVG (animations textuelles, gérées par Astro)

Ces marqueurs déclenchent l'apparition d'éléments **textuels** dans le composant Astro (titre, paragraphe, transition narrative). Ils ne sont pas attrapés par un SVG.

### Bloc 4
- `methode-titre` — apparition du titre de slide « Les quatre actes »
- `sfoi-acronyme` — apparition du sigle « S.F.O.I. » en gros à l'écran
- `marc-applique-titre` — apparition du titre « Marc applique Structurer puis Fiabiliser »
- `3-erreurs-titre` — apparition du titre « Les trois erreurs qui font sauter les niveaux »

### Bloc 5
- `recap-chemin` — apparition du texte de récap de l'ensemble du parcours

**Au total : 5 marqueurs hors SVG.** Le composant Astro doit les gérer comme apparitions de texte (fade-in), en synchro avec l'audio, exactement comme les éléments SVG.

---

# Bloc 1 — Comprendre l'IA générative

## SVG 1.1 — Le LLM, machine à prédire

**Marqueurs cibles :**
- `id="llm-acronym"` — badge ou pavé « LLM = Large Language Model »
- `id="llm-definition"` — bandeau définition « modèle statistique entraîné sur des milliards de textes »
- `id="llm-predicts-not-understands"` — flèche rouge sur le cylindre + label « il prédit, il ne comprend pas »

**Mécanique pédagogique :** un input texte entre dans un cylindre étiqueté « moteur de prédiction » avec engrenages visibles ; au-dessus, un nuage de mots probabilistes avec barres de probabilité décroissantes ; en sortie, le texte continué.

**Composants :**
- Bulle d'input à gauche (prompt utilisateur stylisé)
- Cylindre central avec 2-3 engrenages et label `Moteur de prédiction`
- Au-dessus du cylindre : 4-5 mots candidats avec barres de probabilité (« le » 87 %, « un » 8 %, « ce » 3 %, « la » 2 %)
- Bulle de sortie à droite (texte continué)
- Légende sous le cylindre : *« Prédit le mot suivant le plus probable, ne comprend pas le sens »*

**Couleurs :** Cylindre bleu primaire (`#2563eb`). Engrenages slate-700.

---

## SVG 1.2 — Le stagiaire cultivé

**Marqueurs cibles :**
- `id="metaphore-stagiaire"` — groupe complet de la métaphore

**Mécanique :** silhouette ligne d'un stagiaire au centre. À gauche, bulle « 📚 Savoir général ». À droite, bulle barrée « ❌ Contexte de votre entreprise ». Deux scénarios opposés en dessous.

---

## SVG 1.3 — Plateforme vs LLM brut

**Marqueurs cibles :**
- `id="plateforme-vs-llm"` — groupe complet de comparaison (les deux schémas côte à côte)
- `id="plateforme-mecanismes"` — les 4 anneaux concentriques (recherche, mémoire, outils, code)

**Mécanique :** comparaison côte à côte. Cercle « LLM » nu à gauche, cercle entouré de 4 couches concentriques à droite.

**Animation :** les 4 anneaux apparaissent en séquence (un par un) — pour cela, le SVG peut imbriquer 4 sous-ids (`plateforme-anneau-web`, `plateforme-anneau-memoire`, etc.) sous le parent `plateforme-mecanismes`. À documenter dans le code SVG.

---

## SVG 1.4 — L'hallucination

**Marqueurs cibles :**
- `id="hallucination-concept"` — document central encadré (la fausse réponse formatée)
- `id="hallucination-exemple"` — loupe + timbre rouge `INVENTÉ`

**Mécanique :** un prompt à gauche (« Cite-moi un article de loi »). Au centre, une réponse formatée parfaitement (style juridique). À droite, une loupe qui révèle un sceau rouge `Article inexistant`.

---

## SVG 1.5 — Les 3 limites

**Marqueurs cibles :**
- `id="limite-1-cutoff"` — colonne 1 : horloge barrée
- `id="limite-2-fichiers"` — colonne 2 : œil barré sur dossier
- `id="limite-3-incertitude"` — colonne 3 : bulle pleine d'assurance

**Mécanique :** trois colonnes côte à côte avec pictogramme central pour chaque.

---

## SVG 1.6 — Les 4 implications

**Marqueurs cibles :**
- `id="implication-1-qualite-demande"` — carte 1 (haut gauche) : qualité demande → qualité réponse
- `id="implication-2-verifier-faits"` — carte 2 (haut droite) : vérifier les faits sensibles
- `id="implication-3-responsabilite"` — carte 3 (bas gauche) : responsabilité humaine
- `id="implication-4-bons-outils"` — carte 4 (bas droite) : bons outils pour usages récurrents

**Mécanique :** 4 cartes empilées en grille 2×2.

---

# Bloc 2 — Risques, cadre et responsabilités

## SVG 2.1 — Exfiltration : 4 catégories de données

**Marqueurs cibles :**
- `id="4-categories-donnees"` — groupe parent (apparition du titre/cadre)
- `id="categorie-clients"` — case 1 (bleu)
- `id="categorie-rh"` — case 2 (jaune)
- `id="categorie-strategiques"` — case 3 (rouge)
- `id="categorie-code"` — case 4 (violet)

**Mécanique :** matrice 2×2, chaque case avec pictogramme + titre + 2-3 exemples concrets.

---

## SVG 2.2 — Les 3 questions filtres

**Marqueurs cibles :**
- `id="3-questions-regle"` — entonnoir parent
- `id="question-1-public"` — niveau 1 du filtre
- `id="question-2-personnes"` — niveau 2
- `id="question-3-strategique"` — niveau 3

**Mécanique :** entonnoir vertical à 3 niveaux. Donnée entrante par le haut, OK en bas, sorties latérales rouges aux 3 niveaux.

---

## SVG 2.3 — Les 3 niveaux de protection

**Marqueurs cibles :**
- `id="3-niveaux-protection"` — escalier parent
- `id="niveau-public"` — marche 1 (rouge clair)
- `id="niveau-pro"` — marche 2 (jaune clair)
- `id="niveau-enterprise"` — marche 3 (vert clair)

**Mécanique :** escalier à 3 marches avec cadenas progressivement fermés.

---

## SVG 2.4 — Risque réputationnel — 4 zones

**Marqueurs cibles :**
- `id="4-zones-reputation"` — groupe parent
- `id="zone-dates"` — pictogramme calendrier
- `id="zone-chiffres"` — pictogramme graphique
- `id="zone-citations"` — pictogramme livre
- `id="zone-engagements"` — pictogramme contrat

**Mécanique :** 4 zones en grille avec pictogramme distinctif et exemple court par zone.

---

## SVG 2.5 — Usurpation et deepfakes

**Marqueurs cibles :**
- `id="usurpation-deepfakes"` — groupe parent (titre + cadre)
- `id="deepfakes-exemples"` — 3 vignettes de scénarios (faux vocal PDG, fausse vidéo, usurpation marque)

**Mécanique :** silhouette stylisée à gauche avec effet de pixellisation/dédoublement, 3 scénarios à droite illustrés par pictogrammes (téléphone, vidéo, logo).

---

## SVG 2.6 — Protocole de vérification 3 temps

**Marqueurs cibles :**
- `id="protocole-3-temps"` — flèche horizontale parent (3 étapes en séquence)
- `id="etape-identifier"` — étape 1 : loupe sur document, marquage des zones sensibles
- `id="etape-verifier"` — étape 2 : confrontation à un document de référence
- `id="etape-relire"` — étape 3 : œil humain au-dessus du livrable final

**Mécanique :** 3 étapes successives, séparées par flèches, chacune avec son pictogramme.

---

## SVG 2.7 — Industrialisation prématurée

**Marqueurs cibles :**
- `id="industrialisation-prematuree"` — groupe parent
- `id="scenario-commercial"` — scène : équipe commerciale + assistant qui marche bien
- `id="scenario-erreur-multipliee"` — scène : script automatique + erreur démultipliée chez 200 clients

**Mécanique :** pyramide inversée. En haut large : « 1 cas qui marche ». En bas étroit : « 1 000 cas automatisés ». Au milieu, fissures rouges qui se propagent.

---

## SVG 2.8 — Aperçu S.F.O.I. (annonce du bloc 4)

**Marqueurs cibles :**
- `id="exfiltration-definition"` — bandeau d'introduction (déclencheur du SVG)
- `id="sfoi-S"` — niveau Structurer (vert)
- `id="sfoi-F"` — niveau Fiabiliser (jaune)
- `id="sfoi-O"` — niveau Optimiser (bleu)
- `id="sfoi-I"` — niveau Industrialiser (violet)
- `id="sfoi-regle-absolue"` — bandeau « ne pas sauter d'étape »

**Note :** version simplifiée du SVG 4.1 — pas la version pédagogique pleine, juste un aperçu rapide à 4 niveaux empilés. Réutiliser les pastilles colorées et les libellés.

---

## SVG 2.9 — 3 questions avant d'automatiser

**Marqueurs cibles :**
- `id="3-questions-automatiser"` — groupe parent
- `id="q-validation-humaine"` — question 1 (cocher si validation humaine suffisante)
- `id="q-erreurs-corrigees"` — question 2 (cocher si erreurs identifiées et corrigées)
- `id="q-supervision"` — question 3 (cocher si supervision humaine en cours de route)

**Mécanique :** checklist visuelle à 3 cases, pictogramme distinctif par question.

---

## SVG 2.10 — AI Act · Article 4

**Marqueurs cibles :**
- `id="ai-act-article-4"` — pavé citation Article 4

**Mécanique :** simple bandeau réglementaire — drapeau européen + Article 4 + citation courte. Très peu d'éléments graphiques, beaucoup d'autorité visuelle.

---

# Bloc 3 — Choisir son prompt

## SVG 3.1 — Les 4 intentions de prompt

**Marqueurs cibles :**
- `id="4-intentions"` — groupe parent (titre + cadre)
- `id="intention-exploration"` — carte 1 : 🔍 Exploration
- `id="intention-structuration"` — carte 2 : 🗂 Structuration
- `id="intention-production"` — carte 3 : ✏️ Production
- `id="intention-verification"` — carte 4 : ⚖️ Vérification

**Mécanique :** 4 cartes en ligne horizontale (E-S-P-V — ordre critique). Chaque carte avec verbe, pictogramme, cas d'usage typique en une phrase.

---

## SVG 3.2 — Gabarit Exploration

**Marqueurs cibles :** `id="gabarit-exploration"` — fiche complète du gabarit

**Mécanique :** fiche structurée, 7 champs avec icône + nom + valeur type. Champ `Réflexion` mis en évidence (encadré rouge — champ critique).

---

## SVG 3.3 — Gabarit Structuration

**Marqueurs cibles :** `id="gabarit-structuration"`

**Mécanique :** entonnoir illustratif à gauche (notes brutes → plan), 6 champs à droite.

---

## SVG 3.4 — Gabarit Production

**Marqueurs cibles :** `id="gabarit-production"`

**Mécanique :** 7 champs en deux blocs : « le QUOI » à gauche (rôle, objectif, contexte, données), « le COMMENT » à droite (format, contraintes, exemples). Champ `Exemples` en encadré rouge.

---

## SVG 3.5 — Gabarit Vérification

**Marqueurs cibles :** `id="gabarit-verification"`

**Mécanique :** document à gauche, critères au centre, rapport à droite avec ✓/⚠/✗ alignés. Champs `Critères` et `Réflexion` en encadré rouge.

---

## SVG 3.6 — Synthèse des 4 gabarits

**Marqueurs cibles :** `id="synthese-4-types"`

**Mécanique :** matrice 4 colonnes × 4 lignes. Lignes : `Verbe-clé`, `Champ critique`, `Type de livrable`, `Piège le plus courant`. Colonnes : Exploration, Structuration, Production, Vérification.

---

# Bloc 4 — La méthode S.F.O.I.

## SVG 4.1 — Les 4 actes S.F.O.I. ⭐ **CRITIQUE — étalon de la charte**

**Marqueurs cibles :**
- `id="acte-S"` — quadrant Structurer (haut gauche)
- `id="acte-F"` — quadrant Fiabiliser (bas gauche)
- `id="acte-O"` — quadrant Optimiser (haut droite)
- `id="acte-I"` — quadrant Industrialiser (bas droite)

**Améliorations vs version v1 :**
- Occupation pleine du viewBox 1280×720 (zéro marge blanche excessive)
- Typo agrandie : sous-titres 22px, captions 16px
- Pastilles S/F/O/I à r=36, lettre 28px
- Pictogrammes des mécaniques agrandis 50 %
- Bandeau « règle absolue » plein largeur en pied

**Quadrants :**
- 🟢 **Structurer** : 3 documents éparpillés → flèche → plan structuré
- 🟡 **Fiabiliser** : plan + source de référence → flèche → plan vérifié + écarts identifiés
- 🔵 **Optimiser** : plan vérifié → flèche → checklist + FAQ formatées
- 🟣 **Industrialiser** : livrable → flèche → système gouverné (engrenages + cadenas + Rôles · Trace · Arrêt)

**Bandeau pied :** noir plein, texte blanc 18px : *« Règle absolue : on ne saute pas d'étape »*.

---

## SVG 4.2 — Marc applique Structurer puis Fiabiliser

**Marqueurs cibles :**
- `id="marc-structurer"` — phase 1 : notes mardi soir → plan structuré
- `id="marc-fiabiliser"` — phase 2 : plan + textes RGPD/AI Act → rapport d'écarts

**Mécanique :** timeline horizontale en deux phases. Bandeau temporel haut : `Mardi soir 22h → Mercredi matin 8h`. Personnage Marc en silhouette à gauche.

---

## SVG 4.3 — Les 3 erreurs fréquentes

**Marqueurs cibles :**
- `id="erreur-confusion-structurer"` — ligne 1 : confondre Structurer / Résumer
- `id="erreur-saut-fiabiliser"` — ligne 2 : sauter Fiabiliser
- `id="erreur-saut-optimiser"` — ligne 3 : démarrer à Optimiser ou Industrialiser

**Mécanique :** 3 lignes horizontales empilées. Chaque ligne : geste fautif (pictogramme + titre) → flèche rouge → conséquence.

---

# Bloc 5 — Ce qu'un assistant augmenté change

## SVG 5.1 — La boucle amplificatrice ⭐ **CRITIQUE**

**Marqueurs cibles :**
- `id="boucle-amplificatrice"` — spirale parent
- `id="ampli-etape-1"` — jalon 1 : 📈 Usage croît
- `id="ampli-etape-2"` — jalon 2 : 🤝 Confiance augmente
- `id="ampli-etape-3"` — jalon 3 : 👁 Vérification diminue
- `id="ampli-etape-4"` — jalon 4 : ⚠ Erreurs non détectées
- `id="ampli-choc"` — déchirure rouge finale + texte « Choc correcteur »

**Mécanique :** spirale ascendante en pointillés bleus, 4 étapes successives, déchirure rouge à la fin.

**Animation :** tracé progressif de la spirale via `stroke-dasharray` + `stroke-dashoffset` (1.5s ease-in-out) + apparition successive des 4 jalons + apparition de la déchirure.

---

## SVG 5.2 — La reddition cognitive ⭐ **CRITIQUE**

**Marqueurs cibles :**
- `id="reddition-cognitive"` — courbe parent
- `id="reddition-jalon-1"` — délégation initiale
- `id="reddition-jalon-2"` — perte de réflexe de vérification
- `id="reddition-jalon-3"` — atrophie du jugement
- `id="reddition-question"` — point d'interrogation orange final

**Mécanique :** courbe **linéaire descendante** (pas spirale — c'est silencieux). Axe X = temps, axe Y = capacité de jugement. À la fin, `?` orange : *« Sommes-nous encore capables de vérifier ? »*.

**Animation :** tracé progressif de la courbe + apparition successive des jalons + apparition du point d'interrogation final.

---

## SVG 5.3 — Les 5 dimensions IMIA

**Marqueurs cibles :**
- `id="imia-pentagone"` — pentagone radar parent (5 axes)
- `id="imia-tableau-5-dimensions"` — tableau associé avec poids
- `id="imia-trace-organisation"` — polygone tracé d'une organisation type sur le radar

**Mécanique :** pentagone radar avec 5 axes pondérés. Polygone tracé d'une organisation type, montrant les déséquilibres typiques (souvent forte sur Outils déployés et Compétences individuelles, plus faible sur Gouvernance et Capital intellectuel).

**Composants :**
- Axes : **Gouvernance et cadre (30)** · **Pratique S.F.O.I. (20)** · **Capital intellectuel (20)** · **Capacités humaines (20)** · **Infrastructure et outils (10)**
- Tableau associé en bas ou à côté avec les pondérations explicites
- L'axe **Gouvernance** est mis en valeur (poids le plus lourd) — pastille en couleur primaire site (`#2563eb`)
- L'axe **Outils** est en gris plus discret (poids le plus faible — message volontaire)
- Les 3 axes intermédiaires (S.F.O.I., Capital, Capacités) en couleur neutre uniforme

**Note importante :** ne pas utiliser les couleurs S.F.O.I. (vert/jaune/bleu/violet) sur les axes IMIA — l'IMIA n'est pas une lecture organisationnelle de S.F.O.I., c'est une carte des **piliers du framework Reflexe IA**. La confusion entre les deux est précisément ce qu'on corrige avec cette refonte.

**Encart pédagogique latéral** (à conserver) :
- Titre : « Lecture du tracé »
- 3 puces décrivant un exemple d'organisation type
- Mention essentielle : *« Le score mesure une capacité installée, pas un volume d'activité »*

---

## SVG 5.4 — Les 3 capacités du Steward ⭐ **CRITIQUE**

**Marqueurs cibles :**
- `id="steward-titre"` — silhouette + cadre Steward
- `id="capacite-voir-boucles"` — capacité 1 : 👁 Voir les boucles
- `id="capacite-niveaux"` — capacité 2 : ⚙️ Travailler à plusieurs niveaux
- `id="capacite-resistance"` — capacité 3 : 🛡 Tenir la résistance

**Mécanique :** silhouette Steward au centre, 3 capacités distribuées autour (rayonnant), chacune avec pictogramme + titre court + une phrase d'explication.

---

## SVG 5.5 — Les 3 niveaux d'intervention du Steward

**Marqueurs cibles :**
- `id="steward-niveau-individu"` — cartouche bas : 👤 Individu
- `id="steward-niveau-equipe"` — cartouche milieu : 👥 Équipe
- `id="steward-niveau-organisation"` — cartouche haut : 🏢 Organisation

**Mécanique :** 3 cartouches horizontaux empilés (du bas vers le haut), reliés par des flèches verticales bidirectionnelles. Le Steward (silhouette discrète à gauche) est connecté aux 3 niveaux par des liens visibles.

---

## SVG 5.6 — Les skills comme actifs métiers

**Marqueurs cibles :**
- `id="skills-expert"` — silhouette experte gauche avec bulles de pensée
- `id="skills-capture"` — dispositif de capture central (loupe + grille)
- `id="skills-cartouche"` — cartouche `Skill` au centre droit
- `id="skills-cas-usage"` — 3 cas d'usage en bas qui consomment le skill

**Mécanique :** transfert de savoir tacite (humain) vers actif réutilisable. Bandeau bas : *« Le skill reste, même quand l'expert part ou que l'outil change »*.

---

## Production en masse par Claude Code

CC peut produire les SVG si on lui fournit :
1. La charte SVG (`CHARTE-SVG-Reflexe-IA.md`)
2. Cette liste avec spécifications par SVG
3. Un SVG de référence validé (4.1 v2) qui sert de modèle stylistique

**Recommandation :** produire CC par **lots de 4-5 SVG** par passe, en validant la qualité avant de continuer. Les SVG critiques (4.1, 5.1, 5.2, 5.4) doivent être produits en premier et validés avant que CC produise les autres en suivant le même style.

**Ordre recommandé :**
1. **SVG 4.1 v2 (étalon)** — production guidée par l'humain
2. **SVG 5.1 + 5.2 (les deux boucles)** — animations de tracé progressif
3. **SVG 5.4 (Steward)** — figure centrale du positionnement
4. **SVG 5.3 (IMIA pentagone)** — différenciateur conceptuel
5. SVG 1.x (6 SVG bloc 1)
6. SVG 2.x (10 SVG bloc 2)
7. SVG 3.x (6 SVG bloc 3)
8. SVG 4.2 + 4.3 (compléments bloc 4)
9. SVG 5.5 + 5.6 (compléments bloc 5)

**Sortie attendue :** chaque SVG dans `D:\Fayaz\Documents\git\@fgitconseil\reflexe-ia\public\illustrations\formation\bloc-XX\NN-titre.svg`.

---

## Bilan de cohérence

| Indicateur | Valeur |
|------------|--------|
| Marqueurs TIMELINE dans les markdowns | **102** |
| Marqueurs attrapés par un SVG | **97** |
| Marqueurs en animation textuelle (hors SVG) | **5** |
| SVG à produire | **31** |
| Marqueurs orphelins | **0** ✓ |
| Total marqueurs couverts | **102 / 102** ✓ |
