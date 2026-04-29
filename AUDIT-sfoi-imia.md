# Audit S.F.O.I. / IMIA — reflexe-ia.org

**Date :** 22 avril 2026
**Périmètre :** 6 fichiers pages — aucune modification effectuée

---

## Légende

| Étiquette | Signification |
|-----------|---------------|
| `[SFOI-OK]` | Mention correcte, cohérente avec la définition officielle (carte de maturité, progression en 4 niveaux) |
| `[SFOI-AMBIGU]` | Mention qui utilise les termes S.F.O.I. de façon partielle, incohérente entre pages, ou susceptible de créer une confusion |
| `[IMIA-MENTIONNE]` | Mention explicite du concept IMIA |
| `[IMIA-ABSENT-MAIS-ATTENDU]` | Passage où IMIA devrait apparaître au regard du contenu formation, mais ne figure pas |

---

## 1. `src/pages/index.astro`

### Mentions S.F.O.I.

**L63** — Section "Collaborateurs" (3 niveaux d'intervention)
```
Une méthode pour structurer, fiabiliser, optimiser.
```
`[SFOI-AMBIGU]` — Seuls 3 des 4 niveaux sont cités (Industrialiser absent). Le contexte n'identifie pas S.F.O.I. par son sigle. Risque de donner l'impression que la méthode est une méthode de prompting à 3 étapes.

---

**L86** — Heading de section
```
La méthode S.F.O.I.
```
`[SFOI-OK]` — Sigle correct, section dédiée.

---

**L88** — Sous-titre de la section S.F.O.I.
```
Une carte de maturité en quatre niveaux, individuelle et organisationnelle.
```
`[SFOI-OK]` — Formulation alignée avec `methode-sfoi.astro`.

---

**L94–L110** — 4 cartes S.F.O.I. (Structurer, Fiabiliser, Optimiser, Industrialiser)

| Ligne | Niveau | Description homepage |
|-------|--------|----------------------|
| L94–L95 | Structurer | "Cartographier les usages, définir les règles de base, créer un référentiel commun." |
| L99–L100 | Fiabiliser | "Mettre en place les contrôles qualité, gérer les risques, standardiser les pratiques." |
| L104–L105 | Optimiser | "Mesurer la valeur, industrialiser les cas d'usage, former les référents métier." |
| L109–L110 | Industrialiser | "Gouvernance IA intégrée, amélioration continue, culture IA à l'échelle." |

`[SFOI-AMBIGU]` — Les descriptions des 4 niveaux sur la homepage décrivent exclusivement une **logique organisationnelle/collective**, alors que `methode-sfoi.astro` présente chaque niveau avec une **dimension individuelle** (ce que l'individu acquiert) ET une **dimension collective**. En particulier :
- "Optimiser" sur la homepage inclut "industrialiser les cas d'usage" — verbe qui appartient au niveau I dans la page dédiée.
- Les descriptions homepage sont donc incohérentes avec la page de référence `methode-sfoi.astro`.

### Mentions IMIA

Aucune mention.

`[IMIA-ABSENT-MAIS-ATTENDU]` — La section S.F.O.I. (L82–L117) et la section "4 cas" (L119–L165) sont des points naturels pour introduire IMIA comme aboutissement concret de la méthode. Aucune mention.

---

## 2. `src/pages/framework/index.astro`

### Mentions S.F.O.I.

**L42** — Titre de la carte
```
Méthode S.F.O.I.
```
`[SFOI-OK]` — Sigle correct dans le titre de la carte.

---

**L44–L45** — Description de la carte
```
Structurer · Fiabiliser · Optimiser · Industrialiser.
Une carte de maturité des pratiques IA, individuelle et organisationnelle.
```
`[SFOI-OK]` — Les 4 niveaux sont cités, le positionnement "carte de maturité" est correct, la dimension individuelle + organisationnelle est mentionnée.

### Mentions IMIA

Aucune mention.

`[IMIA-ABSENT-MAIS-ATTENDU]` — La page `/framework/` liste les composants du framework. IMIA, s'il constitue un actif ou un concept spécifique du framework, est absent de ce hub.

---

## 3. `src/pages/framework/methode-sfoi.astro`

### Mentions S.F.O.I.

**L14** — `<Layout title>` et texte hero
```
Méthode S.F.O.I.
```
`[SFOI-OK]`

---

**L16** — Accroche hero (passage le plus explicite du site)
```
S.F.O.I. n'est pas une méthode de prompting. C'est une carte de maturité.
Chaque niveau a une dimension individuelle — mais aussi une dimension collective
qui ne peut pas être activée par un individu seul.
```
`[SFOI-OK]` — Définition de référence, conforme, distinction individuel/collectif explicite.

---

**L33, L56, L79, L102** — Headings des 4 niveaux
```
Structurer / Fiabiliser / Optimiser / Industrialiser
```
`[SFOI-OK]` — Structure complète, 4 niveaux présents.

---

**L39, L62, L85, L108** — Description "Ce que l'individu acquiert" pour chaque niveau
```
S → "Organiser sa pensée avant d'agir, formuler sans perte d'information, poser le bon contexte dès le départ."
F → "Rendre chaque affirmation vérifiable, sortir de la confiance implicite, distinguer ce qui est certain de ce qui est probable."
O → "Transformer les sorties IA en outils directement exploitables — pas des ébauches à reformater, des livrables utilisables tels quels."
I → "Comprendre la logique d'un système gouverné — rôles définis, traçabilité, mécanismes d'arrêt, audit possible."
```
`[SFOI-OK]` — Granularité individuelle correcte, cohérente et progressive.

### Mentions IMIA

Aucune mention.

`[IMIA-ABSENT-MAIS-ATTENDU]` — Le niveau **I (Industrialiser)** inclut "comprendre la logique d'un système gouverné, rôles définis, mécanismes d'arrêt". C'est le niveau où la notion d'agent IA métier (IMIA) devrait apparaître comme illustration concrète. Absence notable au L102–L119.

---

## 4. `src/pages/framework/ai-practice-steward.astro`

### Mentions S.F.O.I.

**L38** — Section "Au niveau individuel"
```
Il transmet la méthode S.F.O.I. — une progression en maturité qui permet à chaque
praticien de structurer, fiabiliser, optimiser et industrialiser ses usages IA.
Ce niveau est le point d'entrée. Il n'est pas la destination.
```
`[SFOI-OK]` — Sigle explicite, formulation "progression en maturité" alignée, les 4 verbes sont présents, nuance "point d'entrée / pas destination" conforme à la logique collective de la méthode.

### Mentions IMIA

Aucune mention.

`[IMIA-ABSENT-MAIS-ATTENDU]` — La section "Au niveau organisation" (L47–L53) décrit la capitalisation de savoirs sous forme de "skills". IMIA, s'il désigne un Agent IA Métier produit en mission, est le livrable concret de ce niveau organisationnel. Son absence dans ce passage affaiblit la lisibilité de l'offre réelle.

---

## 5. `src/pages/framework/manifeste.astro`

### Mentions S.F.O.I.

**L99** — Section "Ce que nous construisons"
```
Une méthode ouverte — S.F.O.I. — accessible à tous, sans certification préalable.
```
`[SFOI-OK]` — Mention correcte, positionnement "méthode ouverte" cohérent avec le manifeste.

### Mentions IMIA

Aucune mention.

`[IMIA-ABSENT-MAIS-ATTENDU]` — La section "Ce que nous construisons" (L97–L105) liste : méthode ouverte, rôle reconnaissable, communauté de praticiens. Si IMIA constitue un actif produit par le framework (ex. : Agent IA Métier livré en mission), son absence dans cette liste est un manque de cohérence avec l'offre.

---

## 6. `src/pages/formation/index.astro`

### Mentions S.F.O.I.

**L6** — `<Layout description>` (méta SEO uniquement)
```
6 modules gratuits pour maîtriser le rôle d'AI Practice Steward et la méthode S.F.O.I.
```
`[SFOI-OK]` — Mention dans la méta description, formulation correcte.

Aucune autre mention dans le corps de la page.

### Mentions IMIA

Aucune mention.

`[IMIA-ABSENT-MAIS-ATTENDU]` — La page formation liste 6 blocs. D'après `ARCHIVE-source.md`, le Bloc 4 annonce IMIA en clôture et le Bloc 5 (ex-Bloc 6) couvre "IMIA + APS". Ces blocs sont listés dans la page `/formation/` sans que le concept IMIA ne soit mentionné dans les descriptions (`bloc.desc` via `slideData`). Si les descriptions des blocs 4 et 5 dans `slideData` ne mentionnent pas IMIA, il y a une sous-visibilité de ce concept dès la page liste.

---

## Synthèse

### S.F.O.I.

| Fichier | Mentions OK | Mentions ambiguës |
|---------|-------------|-------------------|
| `index.astro` | L86, L88 | L63 (3 verbes sur 4), L94–L110 (descriptions incohérentes avec methode-sfoi) |
| `framework/index.astro` | L44–L45 | — |
| `framework/methode-sfoi.astro` | L16, L33, L56, L79, L102 + descriptions individuelles | — |
| `framework/ai-practice-steward.astro` | L38 | — |
| `framework/manifeste.astro` | L99 | — |
| `formation/index.astro` | L6 (méta) | — |

**Point de vigilance principal :** les descriptions des 4 cartes S.F.O.I. sur la homepage (`index.astro` L94–L110) sont incohérentes avec celles de `methode-sfoi.astro`. La homepage décrit S.F.O.I. comme une méthode organisationnelle/collective, alors que la page dédiée insiste sur la double dimension individuelle + collective. Cette divergence peut créer une confusion sur ce qu'est la méthode selon la porte d'entrée du visiteur.

### IMIA

**Résultat : zéro mention explicite dans les 6 fichiers audités.**

Les passages où IMIA est le plus attendu :
1. `framework/methode-sfoi.astro` L102–L119 — niveau Industrialiser, où l'agent IA métier est l'illustration naturelle
2. `framework/ai-practice-steward.astro` L47–L53 — niveau organisation, "skills — des actifs permanents"
3. `index.astro` L82–L116 — section S.F.O.I. ou section "4 cas"
4. `formation/index.astro` — descriptions des blocs 4 et 5 (via `slideData`)
5. `framework/manifeste.astro` L97–L105 — liste de ce que le framework construit

Si IMIA est un concept central du framework ou un livrable d'offre, son absence totale du site public est un écart à corriger.
