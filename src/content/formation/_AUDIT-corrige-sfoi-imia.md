# Audit corrigé S.F.O.I. / IMIA — patches site

**Date :** 29 avril 2026
**Pourquoi cette refonte de l'audit.** L'audit produit par CC le 22 avril classait `[SFOI-OK]` plusieurs passages qui disent littéralement *« S.F.O.I. = carte de maturité »* — exactement la formulation qu'on a décidé de corriger. CC a appliqué le critère « S.F.O.I. présent et bien orthographié » au lieu de « S.F.O.I. présenté comme méthode et non comme carte de maturité ». Cet audit reprend la classification avec le bon critère.

**Critère de référence (rappel).**
- **S.F.O.I.** = méthode de travail (4 verbes d'action — Structurer, Fiabiliser, Optimiser, Industrialiser).
- **IMIA** = carte de maturité organisationnelle (5 dimensions, score sur 100, mesuré T0 / T+90j / trimestriel).

S.F.O.I. dit *comment travailler*. IMIA dit *où en est l'organisation*.

---

## Synthèse des patches à appliquer

| Fichier | Type de modification |
|---------|----------------------|
| `src/pages/index.astro` | 2 modifications (description SFOI homepage + section "Trois niveaux") + ajout section IMIA |
| `src/pages/framework/index.astro` | 1 modification (description SFOI) + ajout d'une 4ᵉ carte IMIA |
| `src/pages/framework/methode-sfoi.astro` | 1 modification majeure (hero) + ajout section IMIA en bas |
| `src/pages/framework/ai-practice-steward.astro` | 1 modification (niveau organisation, mention IMIA) |
| `src/pages/framework/manifeste.astro` | 1 modification (ajout IMIA dans "Ce que nous construisons") |
| `src/pages/formation/index.astro` | 1 modification (méta description) |

Les patches ci-dessous sont fournis sous forme `OLD → NEW` à coller dans Claude Code.

---

## 1. `src/pages/index.astro`

### Patch 1.1 — Section "Trois niveaux de réponse" (collaborateurs)

**Contexte (ligne ~63)** : la description de la carte « Collaborateurs » liste seulement 3 verbes sur 4 et laisse penser que S.F.O.I. est une méthode de prompting individuel.

**OLD :**
```html
<p class="text-slate-500 text-sm leading-relaxed flex-1">Une méthode pour structurer, fiabiliser, optimiser. Chaque collaborateur acquiert des réflexes vérifiables, pas des astuces.</p>
```

**NEW :**
```html
<p class="text-slate-500 text-sm leading-relaxed flex-1">La méthode S.F.O.I. — quatre actes pour travailler avec un assistant IA au quotidien. Chaque collaborateur acquiert des réflexes vérifiables, pas des astuces.</p>
```

**Justification** : remplace l'énumération partielle par une référence claire à la méthode complète, qualifiée comme « quatre actes pour travailler » plutôt que comme grille de progression individuelle.

---

### Patch 1.2 — Section "Méthode S.F.O.I." (sous-titre)

**Contexte (ligne 88)** : le sous-titre dit explicitement « Une carte de maturité en quatre niveaux ». C'est l'erreur principale à corriger.

**OLD :**
```html
<h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-3">La méthode S.F.O.I.</h2>
<p class="text-slate-500 text-base max-w-2xl mx-auto">
  Une carte de maturité en quatre niveaux, individuelle et organisationnelle.
</p>
```

**NEW :**
```html
<h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-3">La méthode S.F.O.I.</h2>
<p class="text-slate-500 text-base max-w-2xl mx-auto">
  Quatre actes pour travailler avec l'IA au quotidien. Structurer, Fiabiliser, Optimiser, Industrialiser — toujours dans cet ordre.
</p>
```

**Justification** : la méthode est nommée comme méthode de travail, pas comme carte. La carte de maturité (IMIA) sera introduite dans une section dédiée en aval.

---

### Patch 1.3 — Ajustement des descriptions des 4 cartes S.F.O.I.

**Contexte (lignes 93-110)** : les descriptions actuelles parlent de logique organisationnelle (« cartographier les usages », « industrialiser les cas d'usage », « gouvernance IA intégrée »), incohérentes avec la page `methode-sfoi.astro` qui présente S.F.O.I. comme méthode de travail. À reformuler en orientation méthode personnelle au quotidien.

**OLD (carte Structurer) :**
```html
<p class="text-slate-500 text-sm leading-relaxed">Cartographier les usages, définir les règles de base, créer un référentiel commun.</p>
```

**NEW :**
```html
<p class="text-slate-500 text-sm leading-relaxed">Organiser sa pensée avant d'agir. Zéro perte d'information.</p>
```

---

**OLD (carte Fiabiliser) :**
```html
<p class="text-slate-500 text-sm leading-relaxed">Mettre en place les contrôles qualité, gérer les risques, standardiser les pratiques.</p>
```

**NEW :**
```html
<p class="text-slate-500 text-sm leading-relaxed">Rendre chaque affirmation vérifiable. Sortir de la confiance implicite.</p>
```

---

**OLD (carte Optimiser) :**
```html
<p class="text-slate-500 text-sm leading-relaxed">Mesurer la valeur, industrialiser les cas d'usage, former les référents métier.</p>
```

**NEW :**
```html
<p class="text-slate-500 text-sm leading-relaxed">Transformer les sorties en outils directement exploitables. Zéro retraitement manuel.</p>
```

---

**OLD (carte Industrialiser) :**
```html
<p class="text-slate-500 text-sm leading-relaxed">Gouvernance IA intégrée, amélioration continue, culture IA à l'échelle.</p>
```

**NEW :**
```html
<p class="text-slate-500 text-sm leading-relaxed">Intégrer dans un système gouverné. Rôles définis, traçabilité, mécanismes d'arrêt.</p>
```

**Justification** : les 4 descriptions deviennent cohérentes avec `methode-sfoi.astro`. Elles décrivent ce que l'individu acquiert / fait, pas une logique organisationnelle abstraite.

---

### Patch 1.4 — Nouvelle section IMIA après la section S.F.O.I.

**Contexte** : aujourd'hui, la homepage ne mentionne nulle part l'IMIA. Il faut ajouter une section qui pose la distinction et introduit la carte de maturité organisationnelle.

**Action CC** : ajouter cette section **juste après le `</section>` qui ferme la section S.F.O.I.** (ligne ~117) et **avant le commentaire `<!-- ── Les 4 cas ── -->`**.

**Code à insérer :**
```html
<!-- ── IMIA ── -->
<section class="bg-slate-50 py-20">
  <div class="max-w-5xl mx-auto px-6">
    <div class="text-center mb-12">
      <p class="text-sm font-bold tracking-widest uppercase text-blue-600 mb-3">Carte de maturité</p>
      <h2 class="text-2xl md:text-3xl font-bold text-slate-900 mb-3">L'IMIA — Indice de Maturité IA Organisationnelle</h2>
      <p class="text-slate-500 text-base max-w-2xl mx-auto">
        S.F.O.I. dit comment on travaille. L'IMIA dit où en est l'organisation. Cinq dimensions, un score sur 100, mesuré T0 / T+90 jours / trimestriel.
      </p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
      <div class="card text-center">
        <div class="text-2xl font-bold mb-2" style="color:var(--sfoi-s)">15</div>
        <h3 class="font-semibold text-slate-900 text-sm mb-1">Structurer</h3>
      </div>
      <div class="card text-center">
        <div class="text-2xl font-bold mb-2" style="color:var(--sfoi-f)">30</div>
        <h3 class="font-semibold text-slate-900 text-sm mb-1">Fiabiliser</h3>
      </div>
      <div class="card text-center">
        <div class="text-2xl font-bold mb-2" style="color:var(--sfoi-o)">20</div>
        <h3 class="font-semibold text-slate-900 text-sm mb-1">Optimiser</h3>
      </div>
      <div class="card text-center">
        <div class="text-2xl font-bold mb-2" style="color:var(--sfoi-i)">25</div>
        <h3 class="font-semibold text-slate-900 text-sm mb-1">Industrialiser</h3>
      </div>
      <div class="card text-center" style="border-color:var(--primary-600)">
        <div class="text-2xl font-bold mb-2" style="color:var(--primary-600)">10</div>
        <h3 class="font-semibold text-slate-900 text-sm mb-1">Autonomie collective</h3>
      </div>
    </div>
    <p class="text-center text-slate-500 text-sm mt-8 max-w-2xl mx-auto">
      L'IMIA mesure ce que l'organisation <em>sait faire</em>, pas ce qu'elle fait. La cinquième dimension — l'autonomie collective — est la capacité à détecter et corriger une erreur d'un assistant sans intervention externe.
    </p>
  </div>
</section>
```

**Justification** : section sobre, factuelle, qui pose la distinction sans surcharger la page d'accueil. Pas de chiffres mis en avant comme « score à atteindre » — juste les 5 dimensions et leur pondération.

---

## 2. `src/pages/framework/index.astro`

### Patch 2.1 — Description de la carte Méthode S.F.O.I.

**Contexte (ligne 45)** : « Une carte de maturité des pratiques IA, individuelle et organisationnelle » — même problème qu'en homepage.

**OLD :**
```html
<p class="text-slate-500 text-sm leading-relaxed flex-1 mb-6">
  Structurer · Fiabiliser · Optimiser · Industrialiser. Une carte de maturité des pratiques IA, individuelle et organisationnelle.
</p>
```

**NEW :**
```html
<p class="text-slate-500 text-sm leading-relaxed flex-1 mb-6">
  Structurer · Fiabiliser · Optimiser · Industrialiser. Quatre actes pour travailler avec un assistant IA au quotidien.
</p>
```

---

### Patch 2.2 — Ajout d'une 4ᵉ carte IMIA dans la grille framework

**Contexte** : la page framework affiche aujourd'hui 3 cartes (Manifeste, Méthode S.F.O.I., AI Practice Steward) en grille `md:grid-cols-3`. Ajouter une 4ᵉ carte IMIA.

**Action CC** :
1. Modifier la grille de `md:grid-cols-3` à `md:grid-cols-2 lg:grid-cols-4`.
2. Ajouter une carte IMIA juste avant la fermeture du `</div>` de la grille.

**OLD (ligne ~22) :**
```html
<div class="grid md:grid-cols-3 gap-6">
```

**NEW :**
```html
<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
```

**Code à insérer** juste avant la fermeture `</div>` de la grille (entre la carte AI Practice Steward et `</div>`) :

```html
<a href={`${base}framework/imia/`} class="card group no-underline flex flex-col">
  <div class="flex items-center gap-3 mb-4">
    <div class="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold" style="background:var(--accent-500)">I</div>
    <h2 class="font-bold text-slate-900 text-lg">IMIA</h2>
  </div>
  <p class="text-slate-500 text-sm leading-relaxed flex-1 mb-6">
    Indice de Maturité IA Organisationnelle. Cinq dimensions, un score sur 100, mesuré dans le temps. La carte de maturité de votre organisation.
  </p>
  <span class="text-blue-600 text-sm font-semibold group-hover:underline">Découvrir l'IMIA →</span>
</a>
```

**Note pour CC** : la page `framework/imia.astro` n'existe pas encore. Le lien renverra une 404 jusqu'à ce qu'elle soit créée. C'est volontaire — la carte signale l'existence du concept, la page dédiée sera produite ensuite. Une alternative est de pointer temporairement vers `methode-sfoi/#imia` une fois la section IMIA ajoutée à `methode-sfoi.astro` (cf. patch 3.2).

---

## 3. `src/pages/framework/methode-sfoi.astro`

### Patch 3.1 — Hero (la modification la plus importante)

**Contexte (ligne 16)** : la page dédiée à la méthode dit explicitement « S.F.O.I. n'est pas une méthode de prompting. C'est une carte de maturité. » Cette phrase est exactement ce qu'on a décidé de corriger.

**OLD :**
```html
<p class="text-slate-300 text-lg leading-relaxed max-w-2xl">
  S.F.O.I. n'est pas une méthode de prompting. C'est une carte de maturité. Chaque niveau a une dimension individuelle — mais aussi une dimension collective qui ne peut pas être activée par un individu seul.
</p>
```

**NEW :**
```html
<p class="text-slate-300 text-lg leading-relaxed max-w-2xl">
  S.F.O.I. est une méthode de travail au quotidien. Quatre actes — Structurer, Fiabiliser, Optimiser, Industrialiser — toujours dans le même ordre, jamais sautés. Chaque acte a une dimension individuelle. Et chacun a une dimension collective qu'un individu ne peut pas activer seul.
</p>
```

**Justification** : pose explicitement que S.F.O.I. est une méthode (pas une carte de maturité), conserve la nuance précieuse sur la dimension collective, prépare l'introduction de l'IMIA en aval. Le mot « méthode de prompting » disparaît parce qu'il n'est plus nécessaire de se distinguer du prompting (la formation a posé la distinction au bloc 3).

---

### Patch 3.2 — Aussi : description meta du Layout

**Contexte (ligne 5)** : la description SEO contient « Une carte de maturité des pratiques IA — individuelle et organisationnelle. »

**OLD :**
```html
<Layout title="Méthode S.F.O.I." description="Structurer · Fiabiliser · Optimiser · Industrialiser. Une carte de maturité des pratiques IA — individuelle et organisationnelle.">
```

**NEW :**
```html
<Layout title="Méthode S.F.O.I." description="Structurer · Fiabiliser · Optimiser · Industrialiser. Quatre actes pour travailler avec un assistant IA au quotidien.">
```

---

### Patch 3.3 — Ajout d'une section IMIA en bas de page

**Contexte** : la page detaille les 4 niveaux et les 3 niveaux d'intervention, mais ne mentionne jamais l'IMIA. C'est précisément ici que la transition méthode → carte de maturité doit être posée.

**Action CC** : ajouter cette section **juste avant la section "Principe directeur"** (ligne ~157, juste après la fermeture `</section>` des "3 niveaux d'intervention").

**Code à insérer :**
```html
<!-- IMIA — la carte de maturité -->
<section id="imia">
  <h2 class="text-2xl font-bold text-slate-900 mb-4">De la méthode à la maturité — l'IMIA</h2>
  <p class="text-slate-600 text-base leading-relaxed mb-8">
    S.F.O.I. répond à une question : <em>comment je travaille, moi, avec un assistant ?</em> L'IMIA répond à une autre : <em>où en est mon organisation, collectivement ?</em>
  </p>
  <p class="text-slate-600 text-base leading-relaxed mb-8">
    L'IMIA — Indice de Maturité IA Organisationnelle — est un score composite sur 100 points, construit pour être observable, auditable et mesurable dans le temps. Il mesure ce que l'organisation <em>sait faire</em>, pas ce qu'elle fait. Mesuré à T0, à T+90 jours, puis chaque trimestre.
  </p>
  <div class="overflow-x-auto rounded-xl border border-slate-200 mb-6">
    <table class="w-full text-sm">
      <thead>
        <tr class="bg-slate-50 border-b border-slate-200">
          <th class="text-left px-4 py-3 font-semibold text-slate-700">Dimension</th>
          <th class="text-left px-4 py-3 font-semibold text-slate-700">Mesure</th>
          <th class="text-right px-4 py-3 font-semibold text-slate-700">Poids</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border-b border-slate-100">
          <td class="px-4 py-3 font-semibold" style="color:var(--sfoi-s)">Structurer</td>
          <td class="px-4 py-3 text-slate-600">Briefs structurés, délai de cadrage avant prompt</td>
          <td class="px-4 py-3 text-right font-semibold">15</td>
        </tr>
        <tr class="border-b border-slate-100">
          <td class="px-4 py-3 font-semibold" style="color:var(--sfoi-f)">Fiabiliser</td>
          <td class="px-4 py-3 text-slate-600">Vérifications documentées, dette de vérification</td>
          <td class="px-4 py-3 text-right font-semibold">30</td>
        </tr>
        <tr class="border-b border-slate-100">
          <td class="px-4 py-3 font-semibold" style="color:var(--sfoi-o)">Optimiser</td>
          <td class="px-4 py-3 text-slate-600">Réutilisation des sorties, réduction du temps de cycle</td>
          <td class="px-4 py-3 text-right font-semibold">20</td>
        </tr>
        <tr class="border-b border-slate-100">
          <td class="px-4 py-3 font-semibold" style="color:var(--sfoi-i)">Industrialiser</td>
          <td class="px-4 py-3 text-slate-600">Skills déployés, gouvernance, traçabilité, mécanismes d'arrêt</td>
          <td class="px-4 py-3 text-right font-semibold">25</td>
        </tr>
        <tr>
          <td class="px-4 py-3 font-semibold" style="color:var(--primary-600)">Autonomie collective</td>
          <td class="px-4 py-3 text-slate-600">Capacité à détecter et corriger une erreur sans intervention externe</td>
          <td class="px-4 py-3 text-right font-semibold">10</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p class="text-slate-500 text-sm leading-relaxed">
    Quatre dimensions reprennent S.F.O.I. avec des pondérations différenciées — Fiabiliser pèse le plus, parce que c'est là que les organisations bloquent. La cinquième — l'autonomie collective — mesure ce qui n'est mesuré nulle part ailleurs : la capacité à voir l'erreur quand elle survient.
  </p>
</section>
```

**Justification** : la section pose la distinction méthode/maturité au bon endroit (page de référence S.F.O.I.), introduit les 5 dimensions avec leur pondération, et crée l'ancre `#imia` qui peut être ciblée depuis le framework hub.

---

## 4. `src/pages/framework/ai-practice-steward.astro`

### Patch 4.1 — Section "Au niveau organisation"

**Contexte (lignes ~47-53)** : la section décrit la capitalisation en skills mais ne mentionne pas l'IMIA, qui est pourtant la boussole opérationnelle du rôle (T0 / T+90j).

**OLD :**
```html
<div class="card">
  <h3 class="font-semibold text-slate-900 mb-2 text-sm uppercase tracking-wide" style="color:var(--sfoi-i)">Au niveau organisation</h3>
  <p class="text-slate-600 text-sm leading-relaxed">
    Il capitalise les savoirs tacites critiques sous forme de skills — des actifs permanents qui restent dans l'organisation après chaque mission — et met en place les mécanismes de gouvernance légers.
  </p>
</div>
```

**NEW :**
```html
<div class="card">
  <h3 class="font-semibold text-slate-900 mb-2 text-sm uppercase tracking-wide" style="color:var(--sfoi-i)">Au niveau organisation</h3>
  <p class="text-slate-600 text-sm leading-relaxed">
    Il diagnostique la maturité de l'organisation avec l'IMIA — Indice de Maturité IA Organisationnelle — et s'engage sur une progression mesurable à T+90 jours. Il capitalise les savoirs tacites critiques sous forme de skills, des actifs permanents qui restent dans l'organisation après chaque mission, et met en place les mécanismes de gouvernance légers.
  </p>
</div>
```

**Justification** : l'IMIA est nommé comme l'instrument de pilotage du rôle. La phrase reste sobre — pas de mise en avant commerciale du chiffre, juste la nature de l'engagement (mesurable, à 90 jours).

---

## 5. `src/pages/framework/manifeste.astro`

### Patch 5.1 — Section "Ce que nous construisons"

**Contexte (ligne ~99)** : la liste de ce que le framework construit cite la méthode S.F.O.I., le rôle d'AI Practice Steward et la communauté des Mainteneurs. L'IMIA est absente — ce qui crée un manque de cohérence avec le principe 10 du manifeste (« gouverner les usages dans la durée »), dont l'IMIA est précisément l'instrument.

**OLD :**
```html
<div class="space-y-4 text-slate-700 text-base leading-relaxed">
  <p>Une méthode ouverte — S.F.O.I. — accessible à tous, sans certification préalable.</p>
  <p>Un rôle reconnaissable — l'AI Practice Steward — pour ceux qui veulent agir sur les pratiques IA de leur organisation, pas seulement les utiliser.</p>
  <p>Une communauté de praticiens — les Mainteneurs — qui font vivre ce framework par leur pratique terrain, co-construisent les standards et font évoluer la méthode par retour d'expérience.</p>
  <p>Pas un cabinet. Pas une école. Pas un framework de 200 pages.</p>
  <p class="font-medium text-slate-900">Un système ouvert, ancré dans la pratique, conçu pour durer.</p>
</div>
```

**NEW :**
```html
<div class="space-y-4 text-slate-700 text-base leading-relaxed">
  <p>Une méthode ouverte — S.F.O.I. — quatre actes pour travailler avec un assistant IA, accessibles à tous sans certification préalable.</p>
  <p>Une carte de maturité — l'IMIA — qui rend mesurable ce qu'une organisation sait faire avec l'IA, pas seulement ce qu'elle fait.</p>
  <p>Un rôle reconnaissable — l'AI Practice Steward — pour ceux qui veulent agir sur les pratiques IA de leur organisation, pas seulement les utiliser.</p>
  <p>Une communauté de praticiens — les Mainteneurs — qui font vivre ce framework par leur pratique terrain, co-construisent les standards et font évoluer la méthode par retour d'expérience.</p>
  <p>Pas un cabinet. Pas une école. Pas un framework de 200 pages.</p>
  <p class="font-medium text-slate-900">Un système ouvert, ancré dans la pratique, conçu pour durer.</p>
</div>
```

**Justification** : ajout de la ligne IMIA en deuxième position (après S.F.O.I., avant le rôle) — ordre logique : la méthode, l'instrument de mesure, le rôle qui les met en œuvre, la communauté qui les fait vivre.

---

## 6. `src/pages/formation/index.astro`

### Patch 6.1 — Méta description

**Contexte (ligne 6)** : la description SEO mentionne « 6 modules » alors que le parcours est passé à **5 blocs** (le bloc 5 actuel sur Projets/Instructions/Documents est retiré, l'ancien bloc 6 devient le bloc 5).

**OLD :**
```html
<Layout title="Formation AI Practice Steward" description="6 modules gratuits pour maîtriser le rôle d'AI Practice Steward et la méthode S.F.O.I.">
```

**NEW :**
```html
<Layout title="Formation Reflexe IA" description="5 blocs gratuits pour maîtriser la méthode S.F.O.I. et comprendre le rôle d'AI Practice Steward.">
```

**Justification** : aligne la description sur le nouveau parcours à 5 blocs. Reformulation : c'est la formation Reflexe IA d'abord, l'AI Practice Steward étant ce qu'elle ouvre, pas ce qu'elle promet de transformer l'apprenant en.

---

### Patch 6.2 — H1 et sous-titre

**Contexte (lignes ~13-15)** : le H1 dit « 6 blocs · À votre rythme ».

**OLD :**
```html
<p class="text-sm font-semibold uppercase tracking-wide mb-2" style="color:var(--primary-600)">Formation IA — Parcours distanciel</p>
<h1 class="text-3xl font-bold text-slate-900 mb-3">6 blocs · À votre rythme</h1>
<p class="text-slate-500 text-base max-w-2xl">
  De la compréhension à la mise en pratique organisationnelle. Chaque bloc dure environ 20 minutes.
</p>
```

**NEW :**
```html
<p class="text-sm font-semibold uppercase tracking-wide mb-2" style="color:var(--primary-600)">Formation Reflexe IA — Parcours distanciel</p>
<h1 class="text-3xl font-bold text-slate-900 mb-3">5 blocs · À votre rythme</h1>
<p class="text-slate-500 text-base max-w-2xl">
  De la compréhension à la maturité organisationnelle. Chaque bloc dure 15 à 20 minutes.
</p>
```

**Note pour CC** : il faut aussi mettre à jour le fichier `src/lib/slideData.ts` pour qu'il ne contienne plus que 5 blocs et que le bloc actuellement appelé bloc 6 soit renommé bloc 5. Ce travail est lié à la migration vers `src/content/formation/` (déjà initiée). À ne pas faire dans cette passe — le sujet est traité séparément quand les markdowns Astro Content seront déposés.

---

## Récapitulatif — ordre d'application recommandé

1. **Patch 6 (formation/index.astro)** — méta description et H1, indépendant des autres modifications, sans risque.
2. **Patch 5 (manifeste.astro)** — ajout d'une ligne IMIA, sans risque.
3. **Patch 4 (ai-practice-steward.astro)** — modification d'une description de carte, sans risque.
4. **Patch 3 (methode-sfoi.astro)** — refonte du hero + ajout section IMIA. **Modification la plus structurante** — c'est ici que la distinction se pose le plus clairement.
5. **Patch 2 (framework/index.astro)** — ajout 4ᵉ carte. Attention au lien `framework/imia/` qui n'existera pas encore — choix volontaire (cf. note dans le patch 2.2).
6. **Patch 1 (index.astro)** — refonte de la section S.F.O.I. + ajout section IMIA. Plus de modifications, à faire en dernier pour valider la cohérence globale après tout le reste.

Une fois tous les patches appliqués, lancer `npm run build` et vérifier visuellement chaque page pour confirmer qu'aucune coquille n'est passée et que la cohérence S.F.O.I.=méthode / IMIA=carte est partout respectée.
