---
bloc: 4
slug: methode-sfoi
titre: La méthode S.F.O.I.
sous_titre: Quatre actes pour travailler avec l'IA
duree_min: 18
badge: Méthode
ordre: 4
statut: en-revision
audio_complet: false
illustrations_validees: false
sources_archive:
  - "Formation_prompting/audios_et_illustrations/04-1. Accroche.txt"
  - "Formation_prompting/audios_et_illustrations/04-2. La progression S.F.O.I..txt"
  - "Formation_prompting/audios_et_illustrations/04-3. Marc applique Structurer puis Fiabiliser en direct.txt"
  - "Formation_prompting/audios_et_illustrations/04-4. Les 3 erreurs les plus fréquentes.txt"
  - "Formation_prompting/audios_et_illustrations/04-5. Clôture.txt"
  - "Formation_prompting/audios_et_illustrations/04. final quiz.md"
  - "Formation_prompting/audios_et_illustrations/04. takeaway.md"
---

# Bloc 4 — La méthode S.F.O.I.

> **Intention pédagogique.** Présenter S.F.O.I. comme une **méthode de travail au quotidien** — quatre actes, dans l'ordre, sans saut. Démontrer la méthode sur un cas concret (Marc, charte IA). Lister les trois erreurs qui font sauter les niveaux. Annoncer en clôture que ces quatre actes, vus à l'échelle d'une organisation, produisent une autre lecture — une carte de maturité qu'on appelle l'IMIA — qu'on aborde au bloc 5.

> **Décisions de révision (avril 2026).**
> 1. S.F.O.I. est présenté comme **méthode**, pas comme « carte de maturité organisationnelle ». La carte de maturité, c'est l'IMIA, posé en clôture et développé au bloc 5.
> 2. Suppression de toute référence à Coach IA. Mention unique de l'AI Practice Steward dans la clôture, sans développer.
> 3. Le bloc suivant n'est plus « Skills + Coach IA » mais le bloc 5 « Ce qu'un assistant augmenté change » — la transition de clôture est mise à jour en conséquence.

> **Convention sur les marqueurs TIMELINE.**
> Les marqueurs `<!-- TIMELINE: show NOM-ELEMENT -->` indiquent les éléments visuels qui doivent apparaître à l'écran à un moment précis de la voix off. Ils ne sont pas lus par ElevenLabs (commentaires HTML).

> **Convention sur les prompts à l'écran.**
> Les deux prompts que Marc utilise (Structurer puis Fiabiliser) ne sont **pas lus à voix haute** — leur lecture champ par champ rendrait la bande son inaudible. Ils sont affichés à l'écran pendant que la voix off commente leur logique. Convention :
> - `[VOIX OFF]` — ce que la voix prononce (commentaire et logique).
> - `[À L'ÉCRAN]` — ce qui apparaît visuellement (le prompt en code block, lu silencieusement).

---

## Slide 1 — Accroche · l'histoire de Marc

**Audio** : `[À ENREGISTRER — ancien : Formation_prompting/.../04-1. Accroche.m4a]`
**Illustration** : `[À REFAIRE — ancienne : Formation_prompting/.../04-1. Accroche.png]`
**Durée cible** : 90 s

### Script

Vous y êtes. Vous avez choisi vos prompts, vous savez ce qu'un LLM peut faire et ce qu'il ne peut pas faire. Maintenant vous allez apprendre à enchaîner.

<!-- TIMELINE: show methode-titre -->

Une méthode. Quatre actes, toujours dans le même ordre. Une règle absolue : ne jamais sauter d'étape.

<!-- TIMELINE: show sfoi-acronyme -->

**Structurer · Fiabiliser · Optimiser · Industrialiser.** C'est S.F.O.I.

Pour vous montrer ce que ça change concrètement, je vais vous présenter Marc.

Marc travaille aux Ressources Humaines. Mercredi matin, on lui demande une charte interne d'usage de l'IA pour vendredi.

Il a trois heures de notes prises en réunion avec la direction, le juridique et l'IT. Désorganisées. Parfois contradictoires. Il y a des exigences RGPD qu'il n'a pas le temps de relire. Des contraintes internes qu'il ne maîtrise pas toutes.

La direction veut un document zéro risque. Marc n'est pas expert IA.

Alors Marc fait ce que font la plupart des gens dans cette situation. Il ouvre un assistant et il tape : « Rédige-moi une charte d'usage de l'IA pour notre entreprise. »

L'assistant produit quelque chose. C'est bien structuré. Ça ressemble à une charte. Mais ce n'est pas la sienne. Ce ne sont pas ses contraintes. Ce ne sont pas ses décisions.

Marc a sauté les étapes.

Ce bloc va vous montrer pourquoi les étapes existent, et comment Marc aurait dû procéder. Ce qu'il va apprendre s'applique à n'importe quel document de travail.

### Notes de production

- Voix : ton posé, on ralentit par rapport au bloc 3.
- Animation suggérée (retour Florian) : faire apparaître les 4 lettres S · F · O · I une par une sur 4-5 secondes, en synchro avec la phrase qui les nomme.
- Aucun emoji dans l'audio. Les disques colorés (🟢🟡🔵🟣) sont **visuels uniquement**, repris dans l'illustration et la fiche mémo.

---

## Slide 2 — Les quatre actes

**Audio** : `[À ENREGISTRER — ancien : Formation_prompting/.../04-2. La progression S.F.O.I..m4a]`
**Illustration** : `[À REFAIRE — apparition progressive des 4 niveaux]`
**Durée cible** : 4 min 30 s

### Script

Posons le cadre avant de voir Marc en action.

S.F.O.I. est une méthode de travail. Quatre actes, dans cet ordre, à chaque livrable important.

---

<!-- TIMELINE: show acte-S -->

**🟢 Structurer.**

Objectif : organiser cent pour cent de la matière brute, sans en perdre un seul élément.

Ce n'est pas résumer. Résumer supprime. Structurer réorganise.

Critère de passage : aucune information n'a disparu. Le chaos est devenu un plan.

---

<!-- TIMELINE: show acte-F -->

**🟡 Fiabiliser.**

Objectif : rendre chaque affirmation vérifiable. Sortir de la confiance implicite.

Ce n'est pas produire quelque chose de nouveau. C'est passer le contenu structuré au tamis de la vérification.

Critère de passage : les sources sont citées, les obligations manquantes sont identifiées, les zones d'incertitude sont signalées.

Pour que l'assistant identifie ce qui manque dans votre document, vous devez lui fournir une source de référence : le texte de loi, la politique interne, le contrat type. Sans cette source, l'assistant travaille dans le vide. Il peut inventer des manques inexistants ou valider des absences qui n'en sont pas. **La vérification est aussi bonne que la source que vous fournissez.**

Si votre plateforme dispose d'une fonction de recherche web, l'accès à des informations récentes ne réduit pas l'exigence de vérification — il l'augmente. Date de publication, fiabilité de la source, croisement : les réflexes restent les mêmes.

---

<!-- TIMELINE: show acte-O -->

**🔵 Optimiser.**

Objectif : transformer le contenu fiabilisé en outil directement exploitable, sans retraitement manuel.

Ce n'est plus vérifier ni organiser. C'est adapter à l'usage réel — au format, au destinataire, au contexte.

Critère de passage : le livrable peut être utilisé tel quel par son destinataire final. Collaborateurs, managers, clients.

---

<!-- TIMELINE: show acte-I -->

**🟣 Industrialiser.**

Objectif : intégrer le livrable dans un système qui l'exécute sans intervention manuelle à chaque fois.

Ce n'est plus une tâche individuelle. C'est un système gouverné.

Industrialiser, ce n'est pas automatiser en oubliant. C'est automatiser en maîtrisant. Avec des rôles définis. Une traçabilité. Des mécanismes d'arrêt si quelque chose dérive.

Critère de passage : le workflow est documenté, testé, supervisé, mesuré. Quelqu'un sait quoi faire si la dérive apparaît.

Ce niveau dépasse l'individu. Il engage l'organisation. Nous y revenons au bloc 5.

---

**La règle absolue.**

On ne saute pas d'étape. Jamais.

On ne passe pas de Structurer à Industrialiser directement, même si le résultat de Structurer semble suffisamment bon. On ne commence pas à Optimiser sans avoir fiabilisé.

Chaque acte est une barrière de sécurité. Pas une case à cocher.

### Notes de production

- Animation : faire apparaître les 4 niveaux **un par un**, en synchro avec la voix (cf. retour Florian — l'apparition progressive est ce qui distingue le PowerPoint commenté d'une vraie production pédagogique).
- Pour chaque niveau : pastille colorée (🟢🟡🔵🟣), verbe, objectif, critère de passage. Trois lignes max par niveau à l'écran.
- Suppression de la référence « Coach IA » présente dans l'ancien script. La phrase « ce niveau requiert un support IT et relève du bloc Skills et Coach IA » est remplacée par « Ce niveau dépasse l'individu. Il engage l'organisation. Nous y revenons au bloc 5. »

### Quiz inline

```yaml
id: bloc-04-q1
question: "🟢 Structurer signifie..."
options:
  - texte: "Résumer le contenu brut en gardant l'essentiel"
    correct: false
  - texte: "Organiser 100 % de la matière sans perdre un seul élément"
    correct: true
  - texte: "Produire un premier jet rapidement pour l'améliorer ensuite"
    correct: false
  - texte: "Vérifier que le contenu est factuel avant de le présenter"
    correct: false
explication: "Structurer n'est pas résumer. Résumer supprime. Structurer réorganise sans rien enlever. Le critère de passage strict est : zéro information perdue. Un plan bien structuré peut encore contenir des informations incorrectes — c'est le travail de Fiabiliser."
```

---

## Slide 3 — Marc applique Structurer puis Fiabiliser

**Audio** : `[À ENREGISTRER — ancien : Formation_prompting/.../04-3. Marc applique Structurer puis Fiabiliser en direct.m4a]`
**Illustration** : `[À REFAIRE — captures de prompts + extrait de réponse simulée]`
**Durée cible** : 3 min 30 s

### Script

<!-- TIMELINE: show marc-applique-titre -->

Revenons à Marc.

<!-- TIMELINE: show marc-structurer -->

Marc commence par **Structurer**. Il colle ses notes et envoie un prompt simple : il demande à l'assistant de transformer ses notes en plan hiérarchique, sans rien supprimer, et d'ajouter une section « Points à clarifier ».

**[À L'ÉCRAN — premier prompt]**

```
Transforme ces notes en plan hiérarchique.
Ne supprime aucune information.
Ajoute une section "Points à clarifier".
```

**[VOIX OFF]**

L'assistant produit un plan en huit sections. La section « Points à clarifier » contient les questions exactes qu'un juriste lui posera. Marc a mis de l'ordre dans le chaos. Et il a identifié ses angles morts.

<!-- TIMELINE: show marc-fiabiliser -->

Marc passe à **Fiabiliser**. Il envoie son plan, **avec le texte du RGPD et de l'AI Act en référence**. Le prompt est plus exigeant : il demande à l'assistant de signaler ce qui manque, de citer les passages exacts utilisés, et surtout de ne faire aucune hypothèse implicite.

**[À L'ÉCRAN — second prompt]**

```
Vérifie si ce plan respecte les obligations du RGPD et de l'AI Act ci-joints.
- Si une obligation manque, indique-le.
- Cite les passages exacts utilisés.
- Si une information n'est pas présente dans les documents de référence, dis-le explicitement.
- N'effectue aucune hypothèse implicite.
```

**[VOIX OFF]**

L'assistant lui répond avec un rapport d'écarts. Voici un exemple — simulé pour cette formation, mais représentatif de ce que vous obtiendrez :

**[À L'ÉCRAN — extrait du rapport]**

```
⚠️ Le plan ne mentionne pas le droit de recours des salariés
en cas de décision partiellement automatisée.

Référence : RGPD, Article 22 — Décisions individuelles automatisées.

Suggestion : ajouter une sous-section « Droits des personnes
concernées » dans le chapitre Transparence, incluant :
- droit d'obtenir une intervention humaine,
- droit d'exprimer son point de vue,
- droit de contester la décision.
```

**[VOIX OFF]**

Marc a obtenu en quelques minutes ce qui lui aurait pris une journée. L'assistant a préparé le travail. Il n'a rien certifié — le juriste reste indispensable pour valider.

**Structurer** transforme le chaos en plan. **Fiabiliser** transforme le plan en document sécurisé. Marc peut maintenant passer à **Optimiser** — mettre le contenu au format charte interne, FAQ, checklist d'usage. Et **Industrialiser**, si l'organisation décide un jour d'automatiser la diffusion ou la mise à jour de cette charte.

### Notes de production

- L'ancien script contenait deux phrases doublonnées sur le « gabarit simplifié » de Marc — supprimées dans la révision.
- L'illustration doit montrer **deux captures successives** : (a) prompt Structurer + extrait du plan, puis (b) prompt Fiabiliser + extrait du rapport d'écarts. L'apparition se fait en deux temps, en synchro avec la voix.
- La mention « exemple simulé » à l'écran reste essentielle — déontologie pédagogique.

### Quiz inline

```yaml
id: bloc-04-q2
question: "Marc demande à l'assistant de vérifier si son plan respecte les obligations RGPD. Pourquoi est-il indispensable qu'il lui fournisse le texte du RGPD en référence ?"
options:
  - texte: "Pour que l'assistant aille plus vite dans son analyse"
    correct: false
  - texte: "Parce que l'assistant n'a pas accès à Internet sans texte de référence"
    correct: false
  - texte: "Parce que sans source de référence fournie, l'assistant peut inventer des manques inexistants ou valider des absences qui n'en sont pas — la vérification est aussi bonne que la source donnée"
    correct: true
  - texte: "Pour respecter les règles de confidentialité du document"
    correct: false
explication: "Une vérification sans source de référence, c'est l'assistant qui travaille dans le vide. Il peut halluciner des obligations manquantes, ou valider ce qui devrait être signalé. La qualité de Fiabiliser dépend directement de la qualité du document de référence fourni."
```

---

## Slide 4 — Les trois erreurs qui font sauter les niveaux

**Audio** : `[À ENREGISTRER — ancien : Formation_prompting/.../04-4. Les 3 erreurs les plus fréquentes.m4a]`
**Illustration** : `[À REFAIRE — 3 erreurs labellisées, pas numérotées]`
**Durée cible** : 2 min

### Script

<!-- TIMELINE: show 3-erreurs-titre -->

Trois erreurs reviennent souvent. Elles ont toutes la même cause : sauter un niveau.

---

<!-- TIMELINE: show erreur-confusion-structurer -->

**Erreur de la confusion structurer / résumer.**

Structurer, c'est réorganiser cent pour cent du contenu. Résumer, c'est en supprimer une partie. Quand vous êtes au niveau Structurer, votre seul objectif est zéro perte d'information. Si la sortie est plus courte que l'entrée, l'assistant a résumé. Pas structuré.

---

<!-- TIMELINE: show erreur-saut-fiabiliser -->

**Erreur du saut de Fiabiliser parce que le résultat semble bien.**

Un plan bien structuré n'est pas un plan fiabilisé. L'assistant peut organiser parfaitement des informations incorrectes. La vérification est indépendante de la structuration. C'est l'erreur que Marc aurait commise s'il avait envoyé son plan directement à la direction.

---

<!-- TIMELINE: show erreur-saut-optimiser -->

**Erreur du démarrage direct à Optimiser ou Industrialiser parce qu'on est pressé.**

La pression de la deadline pousse à sauter. Marc l'a ressentie mercredi matin. Mais sauter les niveaux, c'est fragiliser la base. Un livrable mis en forme professionnelle, prêt à être diffusé, qui repose sur du contenu non vérifié — c'est un risque amplifié, pas un gain de temps.

### Notes de production

- Retour Olivier intégré : les erreurs sont **labellisées**, pas numérotées. Plus aucune référence à « Erreur 1, 2, 3 » dans la pédagogie. Quand on s'y réfère plus tard (quiz, fiche mémo), on les nomme.
- Animation : trois cartouches avec un pictogramme commun (croix rouge ou flèche barrée), titre court, une phrase d'explication.

### Quiz inline

```yaml
id: bloc-04-q3
question: "Votre équipe vient de produire un compte rendu de réunion bien structuré. Un collègue propose de le mettre directement dans un workflow automatisé pour gagner du temps. Pourquoi est-ce risqué ?"
options:
  - texte: "Les workflows automatisés sont encore trop coûteux pour les organisations"
    correct: false
  - texte: "L'industrialisation d'un contenu non fiabilisé amplifie les erreurs à grande échelle — il faut d'abord passer par Fiabiliser et Optimiser"
    correct: true
  - texte: "Le workflow pourrait ne pas accepter le format du compte rendu"
    correct: false
  - texte: "Industrialiser est réservé aux outils Enterprise"
    correct: false
explication: "Passer directement de Structurer à Industrialiser, c'est industrialiser du contenu non vérifié. Si le compte rendu contient des erreurs, le workflow les répercutera à chaque exécution — amplifiées et invisibles. Fiabiliser puis Optimiser ne sont pas des étapes optionnelles."
```

---

## Slide 5 — Clôture · de la méthode à la maturité

**Audio** : `[À ENREGISTRER — ancien : Formation_prompting/.../04-5. Clôture.m4a — RÉÉCRITURE COMPLÈTE]`
**Illustration** : `[À PRODUIRE — passage S.F.O.I. méthode → IMIA carte de maturité, 5 dimensions]`
**Durée cible** : 2 min

### Script

Marc a livré sa charte vendredi matin. Solide. Parce qu'il avait suivi les actes dans l'ordre.

Ce que vous venez d'apprendre ne s'applique pas qu'aux chartes RH. Cela s'applique à n'importe quel document de travail. Un rapport d'analyse. Une proposition commerciale. Un plan de projet. Une note stratégique.

La prochaine fois que vous avez un livrable important à produire avec l'assistant, posez-vous la question : à quel acte suis-je ? Ai-je fait le précédent ?

S.F.O.I., c'est ça. Une méthode de travail au quotidien. Quatre actes, toujours dans l'ordre.

---

Mais regardons maintenant ces quatre actes à une autre échelle. Pas ce que vous faites, vous, devant votre écran. Ce que **votre organisation** sait faire collectivement.

- Vos équipes structurent-elles vraiment leurs usages ? Ou chacun improvise dans son coin ?
- La vérification est-elle un réflexe partagé, ou une affaire individuelle ?
- Les sorties sont-elles capitalisées comme des outils réutilisables, ou produites une fois et perdues ?
- Les usages industrialisés sont-ils gouvernés — rôles, traçabilité, mécanismes d'arrêt — ou simplement automatisés et laissés à eux-mêmes ?

La même grille — Structurer, Fiabiliser, Optimiser, Industrialiser — devient une **carte de maturité organisationnelle**. On l'appelle l'**IMIA** : Indice de Maturité IA Organisationnelle.

L'IMIA mesure ce que votre organisation sait faire, pas ce qu'elle fait. Cinq dimensions, un score sur 100. Les quatre premières reprennent S.F.O.I. avec des pondérations différentes — Fiabiliser pèse le plus, parce que c'est là que les organisations bloquent. La cinquième dimension, c'est l'**autonomie collective** : la capacité à détecter et corriger une erreur d'un assistant sans intervention externe.

S.F.O.I. est la méthode personnelle. L'IMIA est la lecture collective. Vous venez de poser la première. La seconde, c'est le sujet du bloc suivant.

### Notes de production

- C'est la transition la plus importante du bloc — celle qui charge le bloc 5. Voix posée, légèrement plus lente.
- L'illustration doit montrer **le passage** : à gauche, S.F.O.I. comme méthode (4 verbes en colonne, vue individuelle) ; à droite, IMIA comme carte (5 dimensions, pondération visible, vue organisationnelle). Une flèche entre les deux. Ne pas surcharger les chiffres — la pondération précise est pour le bloc 5.
- Aucune mention d'AI Practice Steward dans la clôture du bloc 4. Le rôle est posé au bloc 5. Ici on installe seulement le concept de carte de maturité.

---

## Quiz final du bloc

**Seuil de passage** : 6 bonnes réponses sur 8 (75 %).

```yaml
- id: bloc-04-final-q1
  question: "Marc a structuré ses notes avec le niveau Structurer. Le résultat lui semble très bien fait. Il décide de l'envoyer directement à la direction. Quelle erreur commet-il ?"
  options:
    - "Il n'a pas utilisé le bon type de prompt"
    - "Il saute Fiabiliser — le document n'est pas encore vérifié"
    - "Il n'a pas demandé une critique interne à l'assistant"
    - "Il aurait dû commencer par Optimiser"
  correct: 2
  explication: "Un plan bien structuré n'est pas un plan fiabilisé. L'assistant peut organiser parfaitement des informations incorrectes ou incomplètes. Fiabiliser est obligatoire avant toute diffusion."

- id: bloc-04-final-q2
  question: "Quel est le critère de passage du niveau Structurer ?"
  options:
    - "Le résultat est suffisamment court pour être lu en 5 minutes"
    - "L'assistant a résumé les points essentiels"
    - "Aucune information n'a été supprimée — le chaos est devenu un plan"
    - "La direction a approuvé la structure"
  correct: 3
  explication: "Structurer = réorganiser sans perte. Le critère n'est pas la qualité esthétique du résultat, c'est l'exhaustivité. Si une information a disparu, le niveau Structurer n'est pas atteint."

- id: bloc-04-final-q3
  question: "Quelle instruction est indispensable dans un prompt de niveau Fiabiliser ?"
  options:
    - "« Reformule dans un style plus professionnel »"
    - "« Cite les passages utilisés. Si absent, indique-le. Signale les zones d'incertitude. »"
    - "« Transforme en kit opérationnel directement utilisable »"
    - "« Optimise pour un public non expert »"
  correct: 2
  explication: "Fiabiliser rend le contenu vérifiable. Cela impose la citation explicite des sources, le signalement des absences, et l'identification des zones d'incertitude. Sans ça, la vérification est superficielle."

- id: bloc-04-final-q4
  question: "Pourquoi ne peut-on jamais passer directement de Structurer à Industrialiser ?"
  options:
    - "Parce qu'Industrialiser requiert des compétences techniques avancées"
    - "Parce qu'Industrialiser amplifie les erreurs — sans Fiabiliser ni Optimiser, les erreurs se propagent à grande échelle"
    - "Parce qu'Industrialiser est réservé aux grandes entreprises"
    - "Parce qu'Optimiser est le niveau le plus important de la méthode"
  correct: 2
  explication: "Industrialiser un contenu non fiabilisé, c'est automatiser des erreurs. L'impact n'est plus individuel — il est systémique. C'est pourquoi chaque acte est une barrière de sécurité."

- id: bloc-04-final-q5
  question: "Quelle est la différence entre structurer et résumer ?"
  options:
    - "Structurer produit un document plus court"
    - "Résumer garde 100 % des informations, structurer en supprime"
    - "Structurer réorganise 100 % du contenu sans suppression — résumer en supprime une partie"
    - "Les deux sont équivalents — c'est une question de style"
  correct: 3
  explication: "C'est l'erreur la plus fréquente du niveau Structurer. Résumer = réduire. Structurer = réorganiser sans perte. Si la sortie est plus courte que l'entrée, l'assistant a résumé, pas structuré."

- id: bloc-04-final-q6
  question: "Marc est au niveau Optimiser. Il met sa charte au format FAQ et checklist. À ce stade, la validation juridique :"
  options:
    - "N'est plus nécessaire — l'assistant a déjà vérifié au niveau Fiabiliser"
    - "Reste obligatoire — l'assistant ne remplace pas la validation humaine experte"
    - "Doit être refaite entièrement car le format a changé"
    - "Est optionnelle si le public cible n'est pas juridique"
  correct: 2
  explication: "La validation juridique finale est toujours humaine. L'assistant au niveau Fiabiliser identifie les écarts, il ne certifie pas la conformité. Un juriste reste indispensable avant diffusion."

- id: bloc-04-final-q7
  question: "Un service marketing utilise depuis deux semaines un assistant pour générer des briefs créatifs, avec de bons retours. À quel niveau de la méthode se trouvent-ils ?"
  options:
    - "Déjà à Industrialiser — ils ont automatisé"
    - "À Structurer — ils viennent de commencer à utiliser l'assistant"
    - "Probablement entre Structurer et Fiabiliser — il faut vérifier et optimiser avant toute automatisation"
    - "À Optimiser — les bons retours le prouvent"
  correct: 3
  explication: "Deux semaines de bons retours ne valent pas un contenu fiabilisé et optimisé. Avant tout passage à Industrialiser, il faut valider Fiabiliser (vérification) et Optimiser (mise en forme directement exploitable) avec supervision humaine."

- id: bloc-04-final-q8
  question: "S.F.O.I. et IMIA — quelle est la bonne lecture ?"
  options:
    - "S.F.O.I. et IMIA sont deux noms du même concept"
    - "S.F.O.I. est la méthode personnelle ; IMIA est la carte de maturité de l'organisation"
    - "S.F.O.I. concerne l'individu, IMIA concerne uniquement l'équipe"
    - "IMIA est une version simplifiée de S.F.O.I."
  correct: 2
  explication: "S.F.O.I. dit comment travailler avec l'assistant — quatre actes, dans l'ordre, à chaque livrable. L'IMIA dit où en est l'organisation — un score sur 100, cinq dimensions, mesuré dans le temps. La méthode reste la même ; ce qui change, c'est l'échelle d'observation."
```

---

## Takeaway · fiche mémo du bloc

### S.F.O.I. — la méthode en quatre actes

| Acte | Ce que vous faites | Critère de passage strict |
|------|--------------------|---------------------------|
| 🟢 **Structurer** | Organiser 100 % de la matière brute, sans rien supprimer | Zéro perte d'information |
| 🟡 **Fiabiliser** | Rendre chaque affirmation vérifiable et sourcée | Chaque point sensible est traçable |
| 🔵 **Optimiser** | Transformer en livrable directement utilisable | Zéro retraitement manuel |
| 🟣 **Industrialiser** | Intégrer dans un système gouverné | Workflow documenté, testé, supervisé |

### La règle d'or

> On ne saute pas d'étape. Jamais.
> Aucun passage direct de Structurer à Industrialiser n'est acceptable.

### Industrialiser ≠ Automatiser

Industrialiser, c'est automatiser **en maîtrisant** : rôles définis, traçabilité, mécanismes d'arrêt. Un système sans gouvernance n'est pas industrialisé — c'est un risque amplifié.

### Les trois erreurs à éviter

1. **Confusion structurer / résumer** — résumer supprime, structurer réorganise sans perte.
2. **Saut de Fiabiliser** parce que le résultat semble bien — un bon plan peut contenir de fausses informations.
3. **Démarrage direct à Optimiser ou Industrialiser** par pression de la deadline — un livrable bien mis en forme sur du contenu non vérifié est un risque, pas un gain.

### S.F.O.I. et IMIA — deux lectures

- **S.F.O.I.** est la méthode au quotidien. Vous, devant votre écran, à chaque livrable.
- **IMIA** est la carte de maturité de votre organisation. Cinq dimensions, score sur 100, mesuré dans le temps.

Vous venez de poser la première. La seconde est le sujet du bloc suivant.
