---
bloc: 3
slug: choisir
titre: Choisir son prompt
sous_titre: Quatre intentions, quatre gabarits
duree_min: 18
badge: Pratique
ordre: 3
statut: en-revision
audio_complet: false
illustrations_validees: false
sources_archive:
  - "Formation_prompting/audios_et_illustrations/03-1. Accroche terrain.txt"
  - "Formation_prompting/audios_et_illustrations/03-2. Type 1 - Prompt de production.txt"
  - "Formation_prompting/audios_et_illustrations/03-3. Type 2 - Prompt d'exploration.txt"
  - "Formation_prompting/audios_et_illustrations/03-4. Type 3 - Prompt de structuration.txt"
  - "Formation_prompting/audios_et_illustrations/03-5. Type 4 — Prompt de vérification.txt"
  - "Formation_prompting/audios_et_illustrations/03-6. Synthèse.txt"
  - "Formation_prompting/audios_et_illustrations/03. final quiz.md"
---

# Bloc 3 — Choisir son prompt

> **Intention pédagogique.** Apprendre à choisir l'intention d'un prompt — Exploration, Structuration, Production, Vérification — avant de l'écrire. À la sortie du bloc, l'apprenant a une grille mentale qui transforme la question « comment mieux écrire mon prompt » en « quel type de prompt me faut-il ».

> **Décisions de révision (avril 2026).**
> 1. **Réordonnancement E-S-P-V** (retour Olivier). L'ordre passe de Production → Exploration → Structuration → Vérification à **Exploration → Structuration → Production → Vérification**. Logique pédagogique : on commence par ce qu'on fait naturellement avec un assistant (explorer un sujet), on apprend à organiser, puis on apprend à produire et vérifier.
> 2. **Suppression du tic « je vais vous raconter une erreur que je vois chaque semaine »** (retour Olivier — phrase typiquement « générée par IA »). Reformulation neutre.
> 3. **Suppression de la mention « bloc Constituer son assistant »** (le bloc 5 actuel est retiré). Reformulation pour rester générique.
> 4. **Mention sobre du prompt agentique** en clôture, sans le rattacher à un bloc spécifique.

> **Convention sur les marqueurs TIMELINE.**
> Les marqueurs `<!-- TIMELINE: show NOM-ELEMENT -->` indiquent les éléments visuels qui doivent apparaître à l'écran à un moment précis de la voix off. Ils ne sont pas lus par ElevenLabs (commentaires HTML).

> **Convention sur les gabarits de prompt.**
> Ce bloc présente quatre gabarits techniques (un par type de prompt). Pour éviter une bande son inaudible où la voix lirait *« Rôle deux points expert dans le domaine, Sujet deux points ce qu'on veut explorer… »*, chaque slide qui contient un gabarit le présente en deux flux distincts :
> - `[VOIX OFF]` — ce que la voix prononce (commentaire de la logique du gabarit, jamais sa lecture champ par champ).
> - `[À L'ÉCRAN]` — ce qui apparaît visuellement (le gabarit complet en code block, lu silencieusement par l'apprenant pendant que la voix commente).
>
> L'apprenant peut télécharger la fiche mémo en fin de bloc pour réutiliser les gabarits. La voix n'a pas à se substituer au document de référence.

---

## Slide 1 — Accroche · le bon prompt n'existe pas, le bon type oui

**Audio** : `[À ENREGISTRER — ancien : Formation_prompting/.../03-1. Accroche terrain.m4a — RÉÉCRITURE]`
**Illustration** : `[À PRODUIRE — un manager devant son écran, frustré par 3 réponses successives]`
**Durée cible** : 1 min 30 s

### Script

Voici une situation qu'on rencontre très souvent.

Un manager a une tâche à faire — disons analyser trois offres concurrentes avant une réunion stratégique. Il ouvre un assistant et il écrit : « Analyse ces trois offres et dis-moi laquelle choisir. »

L'assistant produit une réponse longue, bien structurée, avec des comparaisons. Mais quelque chose cloche. Les critères d'analyse ne sont pas les siens. Le format n'est pas ce dont il avait besoin. Et la recommandation finale est trop catégorique — elle ne tient pas compte du contexte.

Il recommence. Même résultat. Il se dit que l'assistant n'est pas vraiment utile pour ce genre de tâche.

Ce qu'il ne savait pas, c'est qu'il utilisait le **mauvais type de prompt**.

Il avait besoin d'un **prompt d'exploration** — *« cartographie-moi les options avec leurs critères »*. Il a utilisé un **prompt de production** — *« fais le choix à ma place »*.

Ce bloc va vous apprendre à distinguer les **quatre types de prompts**. Parce qu'un mauvais type génère une mauvaise catégorie de réponse, même si le prompt est parfaitement rédigé.

<!-- TIMELINE: show 4-intentions -->

Les quatre types ne sont pas des niveaux de complexité. Ce sont des **intentions différentes** : Exploration, Structuration, Production, Vérification. Chacun a son gabarit, ses règles, ses pièges.

<!-- TIMELINE: show intention-exploration -->
<!-- TIMELINE: show intention-structuration -->
<!-- TIMELINE: show intention-production -->
<!-- TIMELINE: show intention-verification -->

### Notes de production

- Suppression du tic langagier « je vais vous raconter une erreur que je vois chaque semaine ». Remplacé par « Voici une situation qu'on rencontre très souvent ». Olivier a signalé le pattern, on le retire systématiquement.
- L'animation : montrer l'enchaînement frustrant — 3 réponses qui ne conviennent pas — puis bascule vers les 4 types qui apparaissent en grille.
- L'ordre des 4 types à l'écran : **Exploration · Structuration · Production · Vérification**. Cet ordre doit être respecté dans toutes les illustrations du bloc.

---

## Slide 2 — Le prompt d'exploration

**Audio** : `[À ENREGISTRER — ancien : Formation_prompting/.../03-3. Type 2 - Prompt d'exploration.m4a — désormais slide 2]`
**Illustration** : `[À PRODUIRE — gabarit exploration + cas du manager]`
**Durée cible** : 4 min

### Script

Le premier type qu'on aborde, c'est le **prompt d'exploration**.

Vous l'utilisez quand vous **ne savez pas encore** ce que vous voulez produire, mais que vous avez besoin de comprendre un sujet, de cartographier des options, d'identifier des risques ou de préparer une décision.

Retour à notre manager. Il devait analyser trois offres concurrentes. Il n'avait pas encore de critères clairs. Il avait besoin de définir les axes d'analyse avant de choisir. C'est un prompt d'exploration.

La distinction-clé : dans l'exploration, le livrable attendu est une **cartographie d'options ou une analyse structurée**, pas une décision finale.

---

<!-- TIMELINE: show gabarit-exploration -->

**[VOIX OFF]**

Le gabarit d'exploration repose sur sept champs, qui tournent autour de trois questions. Qui interroger — c'est le **rôle**. Quoi explorer — c'est le **sujet** et le **périmètre**. Comment hiérarchiser — c'est le **format final**. Deux champs s'ajoutent : le **cadre d'analyse** que l'assistant utilise, et un champ critique que je vais détailler — la **réflexion**.

**[À L'ÉCRAN]**

```
Rôle :              [Expert dans le domaine]
Sujet :             [Ce qu'on veut explorer]
Périmètre :         [Limites de l'analyse — quoi inclure, quoi exclure]
Cadre d'analyse :   [Voir note ci-dessous]
Critères :          [Ce qui doit être hiérarchisé ou priorisé]
Format :            [Tableau + synthèse ; toujours conclure par une recommandation]
Réflexion :         [Réfléchis étape par étape avant de répondre.
                     Montre ton raisonnement entre balises <thinking>.]
```

---

**Une note sur le cadre d'analyse — SWOT et PESTEL.**

Vous trouverez souvent des recommandations d'utiliser des outils comme le SWOT ou le PESTEL.

**SWOT** : Forces · Faiblesses · Opportunités · Menaces. Un cadre pour évaluer la position d'une entreprise ou d'un projet sur deux axes — interne et externe.

**PESTEL** : Politique · Économique · Social · Technologique · Environnemental · Légal. Un cadre pour analyser le contexte macro-environnemental qui influence une activité.

Si vous connaissez ces cadres, utilisez-les. Si ce sont des sigles que vous ne pratiquez pas, demandez simplement à l'assistant de **choisir le cadre le plus pertinent et de justifier son choix** — c'est une option valide et souvent plus adaptée.

---

**Le champ Réflexion — pourquoi il change tout.**

Quand vous demandez à l'assistant de « montrer son raisonnement », il ralentit sa prédiction et décompose son analyse étape par étape avant de conclure. C'est ce qu'on appelle le *Chain of Thought* — raisonnement en chaîne.

Concrètement : l'assistant commence par identifier les éléments pertinents, les organise, teste ses hypothèses, puis donne une réponse. Au lieu de sauter directement à la conclusion.

Les sources techniques d'Anthropic — éditeur de Claude — qualifient cette technique d'« arme secrète » pour les prompts d'exploration et de vérification. Elle réduit les erreurs de raisonnement, rend les inférences plus fiables, et vous permet de comprendre où l'assistant a peut-être mal interprété votre question.

---

**Une précaution sur l'exploration.**

Si votre analyse porte sur des données récentes — évolutions sectorielles, réglementations 2025-2026, chiffres de marché — l'assistant peut ne pas les connaître. Sa date de coupure l'empêche d'accéder aux informations postérieures à son entraînement.

Pour une analyse qui dépend de données récentes, vous devez les fournir directement. Les espaces de travail des plateformes (Projets, instructions personnalisées) permettent de charger des documents de référence actualisés une fois pour toutes.

---

**Le risque de l'exploration : la dispersion.**

L'assistant peut générer beaucoup — trop de critères, trop de scénarios, trop d'angles. Pour éviter ça, ajoutez toujours à la fin : *« Conclue par 3 recommandations prioritaires »* ou *« Hiérarchise par impact décroissant »*.

Sans cette instruction, vous obtenez un catalogue. Avec elle, vous obtenez un outil d'aide à la décision.

### Notes de production

- L'ordre du bloc commence par Exploration — c'est la décision pédagogique. L'illustration de la slide 2 doit montrer la grille des 4 types **avec Exploration mis en avant**.
- Pour le « manager qui explore » : reprise visuelle du même personnage que la slide 1 (continuité narrative).
- Pour la note sur Anthropic : c'est factuel, ça crédibilise sans appuyer.

### Quiz inline

```yaml
id: bloc-03-q1
question: "Vous avez besoin d'une analyse des forces et faiblesses de trois offres fournisseurs avant une réunion de décision. Quel type de prompt est adapté ?"
options:
  - texte: "Production — vous demandez à l'assistant de choisir la meilleure offre"
    correct: false
  - texte: "Vérification — vous demandez à l'assistant de contrôler la conformité des offres"
    correct: false
  - texte: "Exploration — vous demandez à l'assistant de cartographier les options et leurs critères"
    correct: true
  - texte: "Structuration — vous donnez les offres brutes et demandez à l'assistant de les réorganiser"
    correct: false
explication: "Vous n'avez pas encore de livrable défini ni de contenu à organiser. Vous avez besoin de comprendre le terrain avant de décider. C'est la définition du prompt d'exploration : cartographier les options, pas produire une décision."
```

---

## Slide 3 — Le prompt de structuration

**Audio** : `[À ENREGISTRER — ancien : Formation_prompting/.../03-4. Type 3 - Prompt de structuration.m4a — désormais slide 3]`
**Illustration** : `[À PRODUIRE — gabarit structuration + matière brute → plan]`
**Durée cible** : 3 min 30 s

### Script

Le deuxième type, c'est le **prompt de structuration**.

Vous l'utilisez quand vous avez du **contenu brut** — notes de réunion, transcription, email long, informations éparses — et que vous voulez l'organiser **sans rien perdre**.

La différence avec la production : vous ne demandez pas à l'assistant de créer. Vous lui donnez une matière brute et vous lui demandez de la **mettre en ordre**.

C'est l'un des usages les plus puissants et les moins risqués de l'IA — parce que vous fournissez toutes les données. L'assistant n'a pas à inventer. Son seul rôle est d'organiser.

---

<!-- TIMELINE: show gabarit-structuration -->

**[VOIX OFF]**

Le gabarit de structuration tient en six champs. La logique est plus simple que pour l'exploration : vous précisez le rôle, vous collez le contenu source, vous décidez du format cible — plan, tableau, checklist —, et vous fixez deux contraintes essentielles. Ne rien supprimer. Ajouter une section pour les ambiguïtés. Le sixième champ — le suivi — est pour les chantiers en plusieurs sessions.

**[À L'ÉCRAN]**

```
Rôle :           [Expert en structuration documentaire]
Contenu source : [Le texte brut, copié-collé dans le prompt]
Objectif :       [Quel type de document en livrable]
Format cible :   [Plan hiérarchique / tableau / checklist / sections numérotées]
Contraintes :    [Ne rien supprimer, ajouter une section "Points à clarifier"]
Suivi :          [À chaque itération, liste ce qui a été traité et ce qui reste à traiter]
```

---

**Le champ Suivi.**

Particulièrement utile quand vous travaillez sur un document long ou un chantier en plusieurs sessions.

Demander à l'assistant de lister ce qui a été traité et ce qui reste à faire lui permet de ne pas perdre le fil entre deux échanges. Sans cette instruction, l'assistant repart de zéro à chaque message et peut oublier des sections déjà traitées ou en reprendre d'autres arbitrairement.

Formulation simple : *« À chaque réponse, commence par une ligne indiquant les sections déjà structurées et celles restant à traiter. »*

---

**La règle d'or de la structuration : zéro perte d'information.**

L'assistant a tendance à synthétiser quand il structure. Ce n'est pas ce que vous lui demandez — vous lui demandez d'organiser.

La formulation **« Ne supprimer aucune information »** doit être présente dans tous vos prompts de structuration. Ajoutez systématiquement la demande d'une section **« Points à clarifier »** — c'est là que l'assistant signale les ambiguïtés plutôt que de les résoudre arbitrairement.

### Notes de production

- L'illustration : montrer un avant/après — à gauche, des notes désorganisées (post-it, bullets éparses), à droite, un plan hiérarchique propre. Apparition progressive : d'abord le brut, puis le structuré.

### Quiz inline

```yaml
id: bloc-03-q2
question: "Vous utilisez un prompt de structuration pour organiser les notes d'une réunion importante. Quelle instruction est indispensable ?"
options:
  - texte: "« Synthétise les points les plus importants » — pour obtenir un document concis"
    correct: false
  - texte: "« Ne supprime aucune information — ajoute une section Points à clarifier pour les éléments ambigus »"
    correct: true
  - texte: "« Réfléchis étape par étape avant de structurer »"
    correct: false
  - texte: "« Utilise le format SWOT pour organiser le contenu »"
    correct: false
explication: "La règle d'or du prompt de structuration est zéro perte d'information. L'assistant a tendance à synthétiser quand il structure — ce n'est pas ce qu'on lui demande. « Ne supprime aucune information » prévient ce biais. La section « Points à clarifier » évite que l'assistant résolve arbitrairement les ambiguïtés."
```

---

## Slide 4 — Le prompt de production

**Audio** : `[À ENREGISTRER — ancien : Formation_prompting/.../03-2. Type 1 - Prompt de production.m4a — désormais slide 4]`
**Illustration** : `[À PRODUIRE — gabarit production + champ Exemples mis en avant]`
**Durée cible** : 4 min

### Script

Le troisième type, c'est le **prompt de production**.

Vous l'utilisez quand vous **savez exactement ce que vous voulez obtenir** et que vous avez besoin que l'assistant le produise pour vous.

Un email. Une synthèse. Un plan. Un compte rendu. Une proposition commerciale. Un script. Une fiche produit.

La condition : que le livrable soit **défini**. Si vous ne savez pas encore ce que vous voulez produire, c'est de l'exploration — qu'on a vu juste avant.

---

<!-- TIMELINE: show gabarit-production -->

**[VOIX OFF]**

Le gabarit de production a sept champs. Quatre champs cadrent le **quoi** : rôle, objectif, contexte, données. Deux champs cadrent le **comment** : format et contraintes. Et un septième champ, souvent oublié, qui change tout — les exemples. J'y reviens dans une seconde.

**[À L'ÉCRAN]**

```
Rôle :        [Qui est l'assistant dans ce contexte ?]
Objectif :    [Quel livrable précis doit être produit ?]
Contexte :    [Pour qui, dans quel cadre ?]
Données :     [Ce que vous fournissez, anonymisé]
Format :      [Structure exacte attendue en livrable]
Contraintes : [Longueur, ton, ce qu'il faut éviter]
Exemples :    [Coller 1-2 exemples du format attendu]
```

---

**Pourquoi le champ Exemples.**

Ce dernier champ — les **exemples** — est celui que la plupart des gens oublient. Et c'est souvent le plus efficace.

L'assistant produit par imitation autant que par instruction. Lui montrer un exemple de ce que vous attendez — une réponse que vous avez déjà validée, un format que vous aimez, un ton que vous utilisez — est la méthode la plus fiable pour cadrer son livrable.

Si vous avez déjà un email bien rédigé dans ce style, collez-le. Si vous avez un format de compte rendu que votre direction apprécie, montrez-le. L'assistant va s'en servir comme référence.

C'est ce que les experts appellent le **few-shot prompting** — *few-shot* parce que quelques exemples suffisent. Un ou deux, pas dix.

---

**[VOIX OFF]**

Voici à quoi ressemble un prompt de production complet, pour annoncer une politique IA en interne. Vous voyez à l'écran un cadrage précis : un rôle de consultant en communication interne, un objectif clair, un public ciblé, un format court avec contraintes de ton, et un exemple en référence. Chaque champ apporte une contrainte précise. Plus les champs sont renseignés, moins l'assistant doit deviner — et moins il se trompe.

**[À L'ÉCRAN]**

```
Rôle :        Consultant en communication interne
Objectif :    Rédiger un email annonçant la nouvelle politique d'usage de l'IA
Contexte :    Public — managers non experts
Format :      Email court, paragraphes courts
Contraintes : 250 mots max · ton pédagogique et rassurant, pas alarmiste ·
              mentionner le respect du RGPD et le maintien du contrôle humain
Exemples :    [Voici un email de ce type que nous avons envoyé en janvier
              et qui a bien été reçu : ...]
```

**[VOIX OFF]**

Le point-clé du prompt de production : si vous ne précisez pas le format, l'assistant choisit. Et son choix n'est pas toujours le vôtre.

### Notes de production

- L'animation des 7 champs en synchro avec la voix — chaque champ apparaît au moment où il est mentionné.
- Le champ Exemples doit être visuellement distingué (encadré différent) — c'est le levier le plus sous-utilisé.

---

## Slide 5 — Le prompt de vérification

**Audio** : `[À ENREGISTRER — ancien : Formation_prompting/.../03-5. Type 4 — Prompt de vérification.m4a]`
**Illustration** : `[À PRODUIRE — gabarit vérification + rapport d'écarts]`
**Durée cible** : 3 min 30 s

### Script

Le quatrième type, c'est le **prompt de vérification**.

Vous l'utilisez quand vous avez un **document existant** et que vous voulez le soumettre à un contrôle — vérifier sa conformité, identifier ses lacunes, détecter des incohérences, valider sa structure.

La différence fondamentale avec les trois autres types : vous ne demandez pas à l'assistant de produire ni d'organiser. Vous lui demandez de **contrôler**.

C'est le type de prompt qui requiert le plus de rigueur dans le cadrage — parce que la valeur d'une vérification dépend entièrement des **critères** que vous fournissez.

---

<!-- TIMELINE: show gabarit-verification -->

**[VOIX OFF]**

Le gabarit de vérification ressemble à celui de l'exploration, avec une différence-clé. Les champs structurants sont l'élément à vérifier, les critères de référence, le format du retour, et la règle de citation. Et comme pour l'exploration, le champ réflexion est obligatoire — j'explique pourquoi juste après.

**[À L'ÉCRAN]**

```
Rôle :      [Expert dans le domaine concerné]
Élément :   [Le document à vérifier, collé dans le prompt]
Critères :  [Les standards, normes, règles auxquels comparer]
Retour :    [Rapport d'écarts structuré]
Règle :     [Cite les passages utilisés · Si absent, indique-le ·
             Signale les zones d'incertitude]
Réflexion : [Réfléchis étape par étape avant de vérifier.
             Montre ton raisonnement entre balises <thinking>.]
```

---

**Pourquoi la Réflexion est indispensable en vérification.**

Sur un prompt de vérification, le champ Réflexion **n'est pas optionnel**.

Sans lui, l'assistant peut appliquer ses critères trop vite et rater des nuances. Valider un passage ambigu parce qu'il ressemble à quelque chose de conforme. Signaler une alerte sur un élément qui est en fait correctement géré.

Avec le raisonnement explicité, vous voyez comment l'assistant a interprété chaque critère. Vous pouvez corriger son interprétation si elle est fausse — avant qu'elle ne contamine toute la vérification.

---

**Un exemple — vérification d'une charte IA interne.**

**[VOIX OFF]**

Imaginons que vous voulez vérifier la conformité d'une charte IA interne au RGPD, en particulier à l'article 22 sur les décisions automatisées. Le prompt précise le rôle d'expert RGPD, fournit le projet de charte en élément à contrôler, et impose une règle de citation rigoureuse. Le champ réflexion est obligatoire ici — il oblige l'assistant à montrer comment il a interprété chaque critère.

**[À L'ÉCRAN]**

```
Rôle :      Expert conformité RGPD
Élément :   [Projet de charte IA interne, ci-dessous]
Critères :  Article 22 RGPD (décisions automatisées) + exigence de contrôle humain
Retour :    Rapport d'écarts — conforme / manquant / ambigu
Règle :     Cite les articles RGPD mobilisés
            Si un critère n'est pas couvrable sans source externe, indique-le
            Signale toute zone d'interprétation
Réflexion : Réfléchis étape par étape, montre ton raisonnement entre balises <thinking>
```

---

**L'avertissement.**

La vérification par l'assistant **ne remplace pas** la vérification par un expert humain.

Elle est utile pour détecter des lacunes évidentes, structurer un premier audit, préparer un avis juridique. Mais sur des sujets à fort enjeu — RGPD, droit du travail, conformité sectorielle — la relecture d'un expert reste indispensable.

L'assistant peut rater une obligation légale récente (date de coupure), mal interpréter une nuance juridique, ou citer un article avec une formulation incorrecte. La vérification par l'assistant est un **premier filtre**, pas un certificat de conformité.

### Notes de production

- L'illustration : un document à gauche, un rapport d'écarts à droite, avec des annotations colorées (vert/orange/rouge — conforme/ambigu/manquant).
- La balise `<thinking>` est mentionnée mais pas explicitée — l'apprenant n'a pas besoin de comprendre la mécanique technique, juste de savoir que ça active un mode de raisonnement.

### Quiz inline

```yaml
id: bloc-03-q3
question: "Un responsable RH demande à l'assistant : « Vérifie si notre processus de recrutement respecte le RGPD », sans joindre ni le document du processus ni les articles RGPD pertinents. Quelle est la conséquence probable ?"
options:
  - texte: "L'assistant refusera de répondre faute de sources"
    correct: false
  - texte: "L'assistant produira une vérification superficielle basée sur des connaissances générales, sans garantie"
    correct: true
  - texte: "L'assistant demandera automatiquement les documents manquants"
    correct: false
  - texte: "L'assistant produira une réponse correcte si le RGPD est bien dans son entraînement"
    correct: false
explication: "Sans documents fournis, l'assistant vérifie à partir de sa connaissance générale — il peut rater des obligations récentes (date de coupure) et produire une validation sans garantie. La vérification sans source = vérification superficielle."
```

---

## Slide 6 — Synthèse · la carte mentale

**Audio** : `[À ENREGISTRER — ancien : Formation_prompting/.../03-6. Synthèse.m4a — RÉÉCRITURE PARTIELLE]`
**Illustration** : `[À PRODUIRE — tableau récapitulatif des 4 types]`
**Durée cible** : 2 min 30 s

### Script

<!-- TIMELINE: show synthese-4-types -->

Voici la carte mentale des quatre types.

| Type | Intention | Quand l'utiliser | Risque si mal choisi |
|------|-----------|------------------|----------------------|
| **Exploration** | Comprendre | Sujet ouvert, pas de livrable défini | Dispersion sans décision |
| **Structuration** | Organiser | Contenu brut existant | Perte d'information |
| **Production** | Créer | Livrable défini | Résultat générique |
| **Vérification** | Contrôler | Document existant + critères | Validation superficielle |

---

**La question-clé** avant chaque prompt :

*« Qu'est-ce que je veux que l'assistant fasse — comprendre, organiser, créer ou contrôler ? »*

La réponse à cette question détermine le gabarit. Et le gabarit détermine la qualité du résultat.

---

Un manager qui sait distinguer ces quatre intentions obtient en général un résultat utilisable dès le premier prompt. Celui qui ne les distingue pas passe en moyenne trois tentatives à reformuler avant d'arriver au même résultat.

Ce n'est pas une question de talent. C'est une question de méthode.

---

**Un mot sur un cinquième type qui émerge en 2026 — le prompt agentique.**

Il ne demande pas un livrable. Il ne demande pas une analyse. Il confie une **mission entière** à l'assistant, avec une autonomie de recherche, de décision intermédiaire et d'exécution.

Exemple : *« Analyse les 10 derniers contrats clients, identifie les 3 clauses les plus négociées, compare avec nos conditions générales et produis un mémo de recommandations. »*

L'assistant ne répond pas en une fois — il orchestre une séquence de tâches, consulte des sources, produit des résultats intermédiaires et synthétise.

Ce type de prompt exige une infrastructure différente — outils dédiés, supervision humaine formalisée, gestion du risque adaptée. C'est un sujet à part. Pour l'instant, retenez que les **quatre types de ce bloc** couvrent l'essentiel de vos usages quotidiens. Le prompt agentique, c'est la prochaine étape — pas la première.

---

Au bloc suivant, on va **enchaîner** ces quatre types dans une méthode de travail au quotidien. C'est S.F.O.I.

### Notes de production

- Le tableau récapitulatif respecte l'ordre **E-S-P-V**. Cohérence avec la slide 1.
- Suppression de l'ancienne référence à « le bloc Constituer son assistant » (bloc 5 retiré). Reformulation pour rester générique.
- Le passage sur le prompt agentique est conservé mais raccourci.

---

## Quiz final du bloc

**Seuil de passage** : 6 bonnes réponses sur 8 (75 %).

```yaml
- id: bloc-03-final-q1
  question: "Votre direction vous demande d'analyser 4 offres logicielles concurrentes avant de choisir. Vous n'avez pas encore de critères définis. Quel type de prompt utilisez-vous ?"
  options:
    - "Production — vous savez ce que vous voulez obtenir"
    - "Exploration — vous avez besoin de cartographier les options avant de décider"
    - "Vérification — vous voulez contrôler des documents existants"
    - "Structuration — vous avez du contenu brut à organiser"
  correct: 2
  explication: "Quand le livrable n'est pas encore défini et que vous avez besoin de comprendre le terrain, c'est de l'exploration. La production s'utilise quand vous savez exactement ce que vous voulez produire."

- id: bloc-03-final-q2
  question: "Vous avez 4 pages de notes prises pendant une réunion stratégique. Vous devez en faire un compte rendu structuré. Quel type de prompt ?"
  options:
    - "Production — vous produisez un livrable"
    - "Exploration — vous cherchez à comprendre vos notes"
    - "Structuration — vous organisez du contenu brut sans le recréer"
    - "Vérification — vous contrôlez si les notes sont complètes"
  correct: 3
  explication: "La distinction-clé : dans la structuration, vous fournissez toute la matière — l'assistant organise sans inventer. Dans la production, l'assistant crée à partir de vos consignes."

- id: bloc-03-final-q3
  question: "Votre juriste vous a envoyé un projet de contrat fournisseur. Vous voulez vérifier s'il couvre bien vos exigences de confidentialité. Quel type de prompt ?"
  options:
    - "Production — demandez à l'assistant de réécrire le contrat"
    - "Exploration — cartographiez les clauses possibles"
    - "Structuration — réorganisez le contrat"
    - "Vérification — contrôlez le document existant sur des critères précis"
  correct: 4
  explication: "La vérification s'utilise quand vous avez un document existant à soumettre à des critères précis. L'assistant ne produit pas — il contrôle et identifie les écarts."

- id: bloc-03-final-q4
  question: "Un manager utilise ce prompt : « Rédige un email de présentation de notre nouvelle offre pour nos clients PME. » Quel type est-ce — et quel champ critique manque ?"
  options:
    - "Exploration — il manque le périmètre d'analyse"
    - "Production — il manque le format attendu et les contraintes"
    - "Structuration — il manque le contenu source à organiser"
    - "Vérification — il manque les critères de contrôle"
  correct: 2
  explication: "C'est un prompt de production (livrable défini : un email), mais sans format ni contraintes précisées. L'assistant va choisir la longueur, le ton, la structure à sa place."

- id: bloc-03-final-q5
  question: "Quelle est la règle d'or du prompt de structuration ?"
  options:
    - "Toujours fournir un exemple de document similaire"
    - "Zéro perte d'information — ne rien supprimer, ajouter une section « Points à clarifier »"
    - "Demander à l'assistant de reformuler pour améliorer la clarté"
    - "Limiter le contenu source à une page maximum"
  correct: 2
  explication: "La valeur de la structuration réside dans l'organisation sans perte. L'assistant tend à synthétiser — l'instruction « ne supprimer aucune information » contre cette tendance."

- id: bloc-03-final-q6
  question: "Un responsable RH demande à l'assistant de vérifier si son processus de recrutement respecte le RGPD, sans joindre ni le document du processus ni les articles RGPD pertinents. Quelle est la conséquence probable ?"
  options:
    - "L'assistant refuse de répondre faute de sources"
    - "L'assistant produit une vérification superficielle basée sur des connaissances générales, sans garantie"
    - "L'assistant demande automatiquement les documents manquants"
    - "L'assistant produit une réponse correcte si le RGPD est bien dans son entraînement"
  correct: 2
  explication: "Sans documents fournis, l'assistant vérifie à partir de sa connaissance générale — il peut rater des obligations récentes (date de coupure) et produire une validation sans garantie."

- id: bloc-03-final-q7
  question: "Un manager a besoin d'un support de présentation pour le COMEX sur la stratégie IA de l'entreprise. Il dispose de plusieurs analyses internes désorganisées. Quelle séquence de prompts est la plus efficace ?"
  options:
    - "Production directement — demander la présentation finale"
    - "Vérification → Production — contrôler d'abord, puis créer"
    - "Structuration → Production — organiser la matière, puis créer le livrable"
    - "Exploration → Vérification → Production"
  correct: 3
  explication: "La séquence optimale pour transformer des analyses désorganisées en livrable : d'abord structurer le contenu brut (zéro perte), puis produire le support sur une base organisée."

- id: bloc-03-final-q8
  question: "En prompt d'exploration, pourquoi est-il indispensable de terminer par « hiérarchise par impact » ou « conclue par 3 recommandations » ?"
  options:
    - "Pour limiter la longueur de la réponse"
    - "Pour forcer l'assistant à ne pas sortir du périmètre"
    - "Pour éviter la dispersion et transformer l'exploration en aide à la décision"
    - "Pour respecter le format Markdown"
  correct: 3
  explication: "Sans instruction de hiérarchisation, l'exploration produit un catalogue exhaustif sans priorisation. La valeur vient de la recommandation finale, pas de l'exhaustivité."
```

---

## Takeaway · fiche mémo du bloc

### Les quatre intentions

| Type | Intention | Question-clé |
|------|-----------|--------------|
| **Exploration** | Comprendre | « Je ne sais pas encore ce que je cherche » |
| **Structuration** | Organiser | « J'ai du brut, je veux le mettre en ordre » |
| **Production** | Créer | « Je sais ce que je veux produire » |
| **Vérification** | Contrôler | « J'ai un document, je veux le valider » |

### La question-clé avant chaque prompt

*« Qu'est-ce que je veux que l'assistant fasse — comprendre, organiser, créer ou contrôler ? »*

### Les pièges à éviter

- **Exploration** sans hiérarchisation finale → catalogue sans décision.
- **Structuration** sans « ne supprime aucune information » → l'assistant synthétise.
- **Production** sans champ Format ni Exemples → résultat générique.
- **Vérification** sans documents de référence → validation superficielle.

### Le champ Réflexion

Indispensable pour Exploration et Vérification. Active le raisonnement étape par étape (*Chain of Thought*) — l'assistant montre comment il a interprété la consigne, vous pouvez corriger avant que l'erreur ne contamine la suite.

### La règle d'or

> Un mauvais type de prompt génère une mauvaise catégorie de réponse, même si le prompt est parfaitement rédigé.
