# Projets, instructions et documents
> Format : Vidéo · Durée cible : ~20 min
> Version script : v5 · Statut : BROUILLON — QUIZ_INLINE ajoutés (Mission 4B)
> Corrections v2 : terminologie Instructions de Projet + 2 exemples extension durée (NotebookLM)
> v3 : clôture mise à jour — transition vers La méthode S.F.O.I. (Partie 2)
> v4 : 2 QUIZ_INLINE ajoutés — idées 10 et 11 (Mission 4B)

---

## Métadonnées

| Champ | Valeur |
|---|---|
| Compétences cibles | C4, C5 — Capitaliser et sécuriser les connaissances en contexte IA |
| Public | Employés ayant complété le bloc La méthode S.F.O.I. |
| Prérequis | La méthode S.F.O.I. |
| Module suivant | Ce qu'un assistant augmenté change |
| Durée cible | 20 min |

---

## Structure du script

```
1. Accroche — le collaborateur qui re-explique le contexte   (2 min)
2. Projets — créer un espace de travail contextuel          (4 min)
3. Artifacts — demander un livrable, pas une réponse         (5 min)
4. Instructions de Projet — donner de la connaissance        (6 min)
5. Clôture + transition Ce qu'un assistant augmenté change  (3 min)
```

---

## 1. Accroche — Le collaborateur qui re-explique tout à chaque fois (2 min)

**[Slide : illustration]**

"Je vais vous décrire quelque chose que vous avez probablement déjà vécu.

Vous avez eu une excellente session de travail avec l'IA. Vous avez construit un contexte solide. L'IA connaissait votre secteur, votre ton, vos contraintes internes, le nom de vos produits. Les réponses étaient précises, pertinentes, directement utilisables.

Le lendemain, vous ouvrez une nouvelle conversation. Et vous re-expliquez tout depuis le début. Le secteur. Le ton. Les contraintes. Le nom des produits. Dix minutes de mise en contexte pour retrouver le niveau de la veille.

C'est le comportement par défaut de l'IA : elle n'a pas de mémoire persistante entre les sessions.

Mais il existe des outils pour changer ça. Des outils qui permettent de donner à l'IA un contexte stable, des documents de référence, et des instructions permanentes — pour que chaque conversation commence là où la précédente s'est arrêtée.

Ce module couvre trois de ces outils : les Projets, les Artifacts, et les Instructions de Projet. Et deux exemples concrets pour que vous voyiez exactement comment ils s'articulent dans un usage professionnel réel."

---

## 2. Projets — créer un espace de travail contextuel (4 min)

**[Slide : titre « Projets — l'espace de travail persistant »]**

"Le premier outil, c'est les Projets.

Un Projet dans Claude, c'est un espace de travail dédié à un sujet ou une mission précise. Tout ce que vous y mettez — documents, instructions, historique — reste accessible d'une session à l'autre.

**[Slide : ce que vous pouvez mettre dans un Projet]**

Dans un Projet, vous pouvez stocker trois types d'éléments :

Des instructions permanentes. Ce sont vos règles de travail : le ton à adopter, les formulations à éviter, les contraintes internes spécifiques à votre organisation.

Des documents de référence. Vos fichiers clés que l'IA peut utiliser pour répondre : charte interne, catalogue produit, compte rendu de dernière réunion, procédures.

Un historique de conversation. Les échanges précédents restent disponibles — l'IA peut s'appuyer sur les décisions déjà prises plutôt que de les redemander.

**[Slide : exemple concret]**

Exemple pratique.

Vous gérez la communication d'une organisation. Vous créez un Projet 'Communication externe' avec :
- Votre charte de marque (ton, interdits, exemples)
- Les 3 derniers communiqués de presse comme exemples de style
- L'instruction : 'Les communiqués font toujours moins de 400 mots et commencent par un fait, pas un titre institutionnel'

Désormais, chaque fois que vous ouvrez ce Projet pour rédiger un communiqué, l'IA sait exactement dans quel cadre elle travaille. Vous ne re-expliquez plus rien.

**[Slide : règle de gestion des Projets]**

Quatre règles pour bien gérer vos Projets :

Ouvrez un Projet par périmètre de travail distinct — ne mélangez pas 'Communication externe' et 'Contrats fournisseurs' dans le même Projet.

Nommez clairement les documents que vous y déposez : version, date, périmètre.

Ouvrez un nouveau Projet quand le sujet change — pas quand la conversation s'allonge.

Nettoyez régulièrement : un Projet encombré produit des réponses moins précises."

<!-- QUIZ_INLINE id="partie1-02-q1" -->
**Pause réflexion :** Vous travaillez chaque semaine sur des rapports de performance pour votre direction. Pourquoi créer un Projet dédié plutôt que d'ouvrir une nouvelle conversation à chaque fois ?

A) Pour accéder à un modèle IA plus puissant dédié à votre organisation
B) Pour conserver le contexte permanent — ton, documents de référence, instructions — d'une session à l'autre, sans tout re-expliquer à chaque ouverture
C) Pour partager automatiquement vos rapports avec votre équipe via l'IA
D) Pour que l'IA mémorise vos préférences personnelles sur tous les outils

> **Réponse : B** — *Un Projet est un espace de travail persistant. Tout ce que vous y configurez — instructions, documents, historique — reste disponible à chaque nouvelle conversation. Sans Projet, vous passez 10 minutes à reconstruire le contexte à chaque session. Avec un Projet bien configuré, vous commencez là où vous en étiez.*
<!-- /QUIZ_INLINE -->

---

## 3. Artifacts — demander un livrable, pas une réponse (5 min)

**[Slide : titre « Artifacts — du contenu structuré, pas de la prose »]**

"Le deuxième outil change la façon dont vous recevez les réponses.

Par défaut, une IA répond en prose. Vous posez une question, elle développe une réponse en paragraphes. C'est utile pour comprendre — mais ce n'est pas toujours ce dont vous avez besoin.

Souvent, ce dont vous avez besoin, c'est d'un livrable. Quelque chose que vous pouvez directement copier, coller, partager, ou télécharger.

C'est à ça que servent les Artifacts.

**[Slide : qu'est-ce qu'un Artifact ?]**

Un Artifact, c'est un livrable structuré produit par l'IA dans un format directement exploitable :

- Un tableau au format Markdown que vous copiez dans Excel
- Un bloc de code documenté que vous intégrez directement
- Un document formaté que vous téléchargez
- Un formulaire ou une checklist prête à l'usage
- Un tableau de bord interactif en HTML ou React

La différence avec une réponse classique : l'Artifact est un objet autonome — pas une explication.

**[Slide : comment demander un Artifact]**

Pour demander un Artifact, la formulation change.

Au lieu de : 'Explique-moi comment organiser une réunion hebdomadaire'

Vous écrivez : 'Produis une checklist de préparation de réunion hebdomadaire en 3 sections, format Markdown, que je peux télécharger et partager directement avec mon équipe.'

La différence est dans l'intention : vous demandez à l'IA de produire un objet, pas de vous répondre.

**[Slide : exemple étendu — tableau de bord Artifact]**

Voici un exemple qui montre jusqu'où peut aller un Artifact.

Contexte : vous avez des données de ventes mensuelles pour 5 familles de produits. Vous en avez besoin pour une réunion de pilotage — pas sous forme de tableau texte, mais sous forme d'un outil que votre équipe peut utiliser directement à l'écran.

**[Gabarit — à copier]**

```
Rôle : Expert en data visualization pour dirigeants d'organisation
Objectif : Créer un tableau de bord de pilotage commercial
Données : [Coller vos données de ventes — anonymisées si besoin]
Format : Artifact React (ou HTML simple si React indisponible)
         — Affichage des ventes par famille de produits
         — Filtre par période (mois / trimestre / année)
         — Indicateurs : CA total · évolution vs période précédente · top 3 produits
Contraintes : Interface lisible sur écran 15 pouces en salle de réunion
              Couleurs sobres (pas de rouge/vert uniquement — accessibilité)
              Aucune donnée client visible dans le rendu final
```

Résultat : un tableau de bord interactif que vous pouvez ouvrir directement dans le navigateur, partager en lien, ou intégrer dans une présentation. Sans développeur. Sans outil de BI dédié.

C'est là qu'un Artifact change vraiment la nature du livrable. Vous n'obtenez plus un texte qui décrit un tableau de bord — vous obtenez le tableau de bord.

**[Slide : règle de l'Artifact]**

La règle de l'Artifact : si vous allez retravailler manuellement la réponse avant de l'utiliser, demandez directement le livrable final.

Demandez toujours : 'Quel format sera directement exploitable sans retraitement ?'
Puis demandez ce format."

---

## 4. Documents et Instructions de Projet — donner de la connaissance à l'IA (6 min)

**[Slide : titre « Documents et Instructions de Projet — l'IA qui connaît votre métier »]**

"On vient de voir comment organiser le contexte de travail avec les Projets, et comment demander des livrables avec les Artifacts.

Il y a un troisième axe : donner à l'IA une connaissance métier qu'elle n'a pas par défaut.

**[Slide : le problème de la connaissance par défaut]**

Un LLM entraîné sur des données génériques ne connaît pas :

- Votre secteur spécifique et ses usages
- Vos documents internes (procédures, offres, contrats types)
- Vos clients, leurs noms, leurs historiques
- Votre vocabulaire maison, vos abréviations, votre culture d'entreprise

Résultat : chaque fois que vous avez besoin d'une réponse ancrée dans votre réalité, vous devez re-fournir les données depuis le début.

Deux approches permettent de changer ça : le Documents et les Instructions de Projet.

**[Slide : Documents de Projet]**

Imaginez une bibliothèque interne que vous auriez constituée avec vos propres documents. L'IA y puise avant de vous répondre, au lieu de s'appuyer sur sa connaissance générale.

Au lieu de répondre à partir de sa connaissance générale, l'IA va d'abord chercher les documents pertinents dans votre base, puis construire sa réponse à partir de ces documents.

Exemple concret : un assistant RH ayant accès à votre convention collective, votre règlement intérieur, vos procédures de recrutement. Quand un manager pose une question sur les congés, l'IA répond à partir de votre convention — pas d'une règle générique.

**[Slide : ce que le Document de Projet ne garantit pas]**

Attention — et c'est important :

Le Document de Projet garantit l'accessibilité contextuelle de vos documents. Il ne garantit pas l'exactitude.

Si vos documents sont contradictoires entre eux — plusieurs versions d'une même procédure — l'IA peut mélanger les sources. Si un document est obsolète, l'IA peut citer une règle qui ne s'applique plus.

La discipline 🟡 Fiabiliser reste indispensable : plus vos données sont accessibles à l'IA, plus la vérification humaine est critique.

**[Slide : Instructions de Projet — la capitalisation accessible à tous]**

Les Instructions de Projet, ça parait plus simple et plus accessible pour une organisation qui commence.

Dans les paramètres de chaque Projet, vous trouvez un champ 'Instructions du projet'. C'est là que vous écrivez les règles permanentes qui s'appliquent à toutes les conversations de ce Projet.

Exemples d'Instructions de Projet :
- 'Rédige toujours en français, avec un ton professionnel sobre. Évite le jargon conseil.'
- 'Notre convention collective est la métallurgie. Cite-la explicitement quand tu réponds à des questions RH.'
- 'Format par défaut : sections numérotées + tableau récapitulatif en fin de réponse.'

Vous créez les instructions une fois. Elles s'appliquent à chaque nouvelle conversation dans ce Projet.

Mais si on veut aller plus loin dans le respect des méthodes de travail de l'entreprise, il faut réussir à les formaliser. C'est un peu plus complexe et nous en reparlerons. 

<!-- QUIZ_INLINE id="partie1-02-q2" -->
**Pause réflexion :** Vous écrivez une fois dans les Instructions de Projet : "Rédige toujours en français, ton sobre, pas de jargon. Cite les sources sur les faits." Qu'est-ce que ça change pour les conversations suivantes dans ce Projet ?

A) L'IA applique ces règles automatiquement à chaque conversation sans que vous ayez à les répéter
B) L'IA vous demande confirmation à l'ouverture de chaque conversation pour valider les règles
C) Ces instructions s'appliquent uniquement au premier message de chaque nouvelle session
D) L'IA les stocke mais n'applique les règles que si vous les citez explicitement dans votre prompt

> **Réponse : A** — *Les Instructions de Projet s'appliquent automatiquement à toutes les conversations du Projet. Vous configurez une fois — le comportement est permanent. C'est la différence entre répéter le contexte à chaque session et avoir un assistant qui commence déjà dans votre cadre de travail.*
<!-- /QUIZ_INLINE -->

**[Slide : exemple étendu — analyse de conformité contractuelle]**

Voici un exemple qui articule les trois outils ensemble.

Contexte : vous gérez une organisation de services. Un prestataire vous envoie un nouveau contrat. Vous devez vérifier rapidement s'il respecte votre charte de sécurité interne — sans avoir le temps d'envoyer ça à un avocat pour un premier tri.

Configuration du Projet :

Dans le Projet 'Contrats prestataires', vous avez chargé :
- Votre charte de sécurité interne (version en vigueur)
- Vos conditions générales d'achat
- Une fiche des 5 clauses à surveiller systématiquement (clause de confidentialité, sous-traitance autorisée, responsabilité en cas d'incident, conditions de résiliation, propriété intellectuelle)

**[Gabarit — à copier]**

```
Rôle : Expert en conformité contractuelle pour organisation de services
Objectif : Vérifier si ce contrat prestataire respecte notre charte de sécurité

Étape 1 — Identifier :
Lis le contrat ci-dessous et identifie les clauses qui couvrent (ou ne couvrent pas) :
- Confidentialité des données
- Sous-traitance autorisée
- Responsabilité en cas d'incident
- Conditions de résiliation
- Propriété intellectuelle des livrables

Étape 2 — Comparer :
Pour chaque clause identifiée, compare avec les exigences de notre charte de sécurité
[chargée dans le Projet].
Signale explicitement : conforme / non conforme / absent / ambigu.

Étape 3 — Synthèse :
Produis un Artifact — tableau de conformité avec 4 colonnes :
Clause | Présente dans le contrat | Conforme à notre charte | Action recommandée

Règle : Cite les articles du contrat mobilisés.
        Si une exigence de la charte n'est pas couverte, signale-le explicitement.
        Ne prends pas de décision de signature — fournis le diagnostic pour décision humaine.
```

Ce gabarit enchaîne trois tâches : identifier → comparer → synthétiser. C'est ce qu'on appelle du prompt chaining — l'IA traite les tâches dans l'ordre plutôt qu'en une seule passe floue.

Résultat : un tableau de conformité en 5 minutes. Pas un avis juridique — un outil de première lecture pour savoir si ça vaut la peine d'appeler l'avocat.

**[Slide : tableau récapitulatif des 3 outils]**

| Outil | Usage | Avantage |
|-------|-------|----------|
| Projets | Contexte persistant par sujet | Re-explication zéro |
| Artifacts | Livrable structuré direct | Zéro retraitement manuel |
| Documents / Instructions de Projet | Connaissance métier intégrée | Réponses ancrées dans votre réalité |

Ces trois outils fonctionnent ensemble. Un Projet bien construit + des Instructions de Projet + des demandes d'Artifact = un flux de travail IA que vous n'avez plus besoin de reconfigurer à chaque session."

---

## 5. Clôture + transition Partie 2 (3 min)

**[Retour caméra — ton direct]**

"Si je résume ce que vous avez dans la Partie 1 :

Dans le bloc Choisir son prompt, vous avez appris à choisir l'intention de votre demande — production, exploration, structuration, vérification. Vous ne subissez plus vos prompts.

Dans ce bloc, vous avez appris à ne plus repartir de zéro à chaque session. Un Projet bien construit, des instructions de référence, des Artifacts structurés — le travail s'accumule au lieu de se répéter.

C'est la différence entre l'usage opportuniste — quand ça marche, tant mieux — et l'usage structuré : un résultat fiable, reproductible, capitalisé.

Dans la Partie 2, on va aller plus loin.

Parce que savoir utiliser les outils, c'est bien. Garantir la qualité de ce que vous produisez avec eux — c'est ce qui fait la différence dans un contexte professionnel.

La Partie 2 commence avec la méthode S.F.O.I. : Structurer · Fiabiliser · Optimiser · Industrialiser. C'est la progression qui transforme un bon départ en livrable fiable.

Le quiz juste après valide ce que vous venez de voir dans ce bloc. Si votre score est en dessous de 70%, revenez sur les points concernés — la méthode S.F.O.I. s'appuie directement sur les outils que vous venez d'apprendre."

---

## Notes de production

- **Ton** : pratique et concret — ce module est plus outillé que les blocs conceptuels
- **Visuels** : captures d'écran ou schémas pour Projets et Artifacts — les apprenants doivent voir à quoi ça ressemble
- **Gabarits** : afficher chaque gabarit en bloc visuel distinct à l'écran avec le titre "[Gabarit — à copier]" — permettre une pause pour que les apprenants puissent les noter ou photographier
- **Exemple tableau de bord** : si possible, montrer un vrai Artifact React à l'écran — même simple, l'effet visuel est fort
- **Exemple conformité** : présenter le prompt chaining comme une méthode en 3 étapes numérotées — afficher à l'écran pendant la lecture
- **Point fort** : le tableau récapitulatif des 3 outils (Projets/Artifacts/Documents-Instructions) — à garder à l'écran 30 secondes
- **À soigner** : l'avertissement Documents — éviter de le lire comme une mise en garde anxiogène, le formuler comme une exigence de discipline
- **Lien avec le bloc La méthode S.F.O.I.** : le cas Marc se retrouve dans la section Artifacts (tableau des usages de la charte) — maintenir la continuité narrative
- **Transition vers la conclusion** : clôture sobre, ouvrir vers la dimension organisationnelle
