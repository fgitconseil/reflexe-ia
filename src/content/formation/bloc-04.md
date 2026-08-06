---
bloc: 4
titre: "La méthode S.F.O.I."
duree_estimee: "~8 min"
accroche: "Quatre actes pour travailler avec l'IA — Structurer · Fiabiliser · Optimiser · Industrialiser. La méthode démontrée sur le cas Marc (RH, charte IA)."
categorie: "Méthode"
takeaway: "/assets/takeaways/bloc-04.png"
slides:
  - index: 0
    titre: "Accroche · l'histoire de Marc"
    audio: "/assets/audio/blocs/4.1.mp3"
    duration: 83.176
    visuels:
      - { fichier: "Diapositive31.png", t_start: 0,  marqueurs: ["methode-titre"] }
      - { fichier: "Diapositive30.png", t_start: 23, marqueurs: ["sfoi-acronyme"] }
  - index: 1
    titre: "Les quatre actes"
    audio: "/assets/audio/blocs/4.2.mp3"
    duration: 166.576
    visuels:
      - { fichier: "Diapositive32.png", t_start: 0, marqueurs: ["acte-S", "acte-F", "acte-O", "acte-I"] }
  - index: 2
    titre: "Marc applique Structurer puis Fiabiliser"
    audio: "/assets/audio/blocs/4.3.mp3"
    duration: 73.110
    visuels:
      - { fichier: "Diapositive33.png", t_start: 0,  marqueurs: ["marc-applique-titre", "marc-structurer"] }
      - { fichier: "Diapositive34.png", t_start: 25, marqueurs: ["marc-fiabiliser"] }
  - index: 3
    titre: "Les trois erreurs qui font sauter les niveaux"
    audio: "/assets/audio/blocs/4.4.mp3"
    duration: 62.827
    visuels:
      - { fichier: "Diapositive35.png", t_start: 0, marqueurs: ["3-erreurs-titre", "erreur-confusion-structurer", "erreur-saut-fiabiliser", "erreur-saut-optimiser"] }
  - index: 4
    titre: "Clôture · de la méthode à la maturité"
    audio: "/assets/audio/blocs/4.5.mp3"
    duration: 90.710
    visuels:
      - { fichier: "Diapositive36.png", t_start: 0,  marqueurs: ["cloture-marc-livre", "sfoi-universel-livrables", "sfoi-question-quotidien"] }
      - { fichier: "Diapositive37.png", t_start: 41, marqueurs: ["bascule-echelle-organisation", "bascule-quatre-questions-org", "imia-acronyme", "sfoi-imia-conclusion"] }
quiz_inline:
  - after_slide: 1
    question: "🟢 Structurer signifie..."
    options:
      - "Résumer le contenu brut en gardant l'essentiel"
      - "Organiser 100 % de la matière sans perdre un seul élément"
      - "Produire un premier jet rapidement pour l'améliorer ensuite"
      - "Vérifier que le contenu est factuel avant de le présenter"
    answer: 1
    explanation: "Structurer n'est pas résumer. Résumer supprime. Structurer réorganise sans rien enlever. Le critère de passage strict est : zéro information perdue. Un plan bien structuré peut encore contenir des informations incorrectes, c'est le travail de Fiabiliser."
  - after_slide: 2
    question: "Marc demande à l'assistant de vérifier si son plan respecte les obligations RGPD. Pourquoi est-il indispensable qu'il lui fournisse le texte du RGPD en référence ?"
    options:
      - "Pour que l'assistant aille plus vite dans son analyse"
      - "Parce que l'assistant n'a pas accès à Internet sans texte de référence"
      - "Parce que sans source de référence fournie, l'assistant peut inventer des manques inexistants ou valider des absences qui n'en sont pas, la vérification est aussi bonne que la source donnée"
      - "Pour respecter les règles de confidentialité du document"
    answer: 2
    explanation: "Une vérification sans source de référence, c'est l'assistant qui travaille dans le vide. Il peut halluciner des obligations manquantes, ou valider ce qui devrait être signalé. La qualité de Fiabiliser dépend directement de la qualité du document de référence fourni."
  - after_slide: 3
    question: "Votre équipe vient de produire un compte rendu de réunion bien structuré. Un collègue propose de le mettre directement dans un workflow automatisé pour gagner du temps. Pourquoi est-ce risqué ?"
    options:
      - "Les workflows automatisés sont encore trop coûteux pour les organisations"
      - "L'industrialisation d'un contenu non fiabilisé amplifie les erreurs à grande échelle, il faut d'abord passer par Fiabiliser et Optimiser"
      - "Le workflow pourrait ne pas accepter le format du compte rendu"
      - "Industrialiser est réservé aux outils Enterprise"
    answer: 1
    explanation: "Passer directement de Structurer à Industrialiser, c'est industrialiser du contenu non vérifié. Si le compte rendu contient des erreurs, le workflow les répercutera à chaque exécution, amplifiées et invisibles. Fiabiliser puis Optimiser ne sont pas des étapes optionnelles."
quiz_final:
  - question: "Marc a structuré ses notes avec le niveau Structurer. Le résultat lui semble très bien fait. Il décide de l'envoyer directement à la direction. Quelle erreur commet-il ?"
    options:
      - "Il n'a pas utilisé le bon type de prompt"
      - "Il saute Fiabiliser, le document n'est pas encore vérifié"
      - "Il n'a pas demandé une critique interne à l'assistant"
      - "Il aurait dû commencer par Optimiser"
    answer: 1
    explanation: "Un plan bien structuré n'est pas un plan fiabilisé. L'assistant peut organiser parfaitement des informations incorrectes ou incomplètes. Fiabiliser est obligatoire avant toute diffusion."
  - question: "Quel est le critère de passage du niveau Structurer ?"
    options:
      - "Le résultat est suffisamment court pour être lu en 5 minutes"
      - "L'assistant a résumé les points essentiels"
      - "Aucune information n'a été supprimée, le chaos est devenu un plan"
      - "La direction a approuvé la structure"
    answer: 2
    explanation: "Structurer = réorganiser sans perte. Le critère n'est pas la qualité esthétique du résultat, c'est l'exhaustivité. Si une information a disparu, le niveau Structurer n'est pas atteint."
  - question: "Quelle instruction est indispensable dans un prompt de niveau Fiabiliser ?"
    options:
      - "« Reformule dans un style plus professionnel »"
      - "« Cite les passages utilisés. Si absent, indique-le. Signale les zones d'incertitude. »"
      - "« Transforme en kit opérationnel directement utilisable »"
      - "« Optimise pour un public non expert »"
    answer: 1
    explanation: "Fiabiliser rend le contenu vérifiable. Cela impose la citation explicite des sources, le signalement des absences, et l'identification des zones d'incertitude. Sans ça, la vérification est superficielle."
  - question: "Pourquoi ne peut-on jamais passer directement de Structurer à Industrialiser ?"
    options:
      - "Parce qu'Industrialiser requiert des compétences techniques avancées"
      - "Parce qu'Industrialiser amplifie les erreurs, sans Fiabiliser ni Optimiser, les erreurs se propagent à grande échelle"
      - "Parce qu'Industrialiser est réservé aux grandes entreprises"
      - "Parce qu'Optimiser est le niveau le plus important de la méthode"
    answer: 1
    explanation: "Industrialiser un contenu non fiabilisé, c'est automatiser des erreurs. L'impact n'est plus individuel, il est systémique. C'est pourquoi chaque acte est une barrière de sécurité."
  - question: "Quelle est la différence entre structurer et résumer ?"
    options:
      - "Structurer produit un document plus court"
      - "Résumer garde 100 % des informations, structurer en supprime"
      - "Structurer réorganise 100 % du contenu sans suppression, résumer en supprime une partie"
      - "Les deux sont équivalents, c'est une question de style"
    answer: 2
    explanation: "C'est l'erreur la plus fréquente du niveau Structurer. Résumer = réduire. Structurer = réorganiser sans perte. Si la sortie est plus courte que l'entrée, l'assistant a résumé, pas structuré."
  - question: "Marc est au niveau Optimiser. Il met sa charte au format FAQ et checklist. À ce stade, la validation juridique :"
    options:
      - "N'est plus nécessaire, l'assistant a déjà vérifié au niveau Fiabiliser"
      - "Reste obligatoire, l'assistant ne remplace pas la validation humaine experte"
      - "Doit être refaite entièrement car le format a changé"
      - "Est optionnelle si le public cible n'est pas juridique"
    answer: 1
    explanation: "La validation juridique finale est toujours humaine. L'assistant au niveau Fiabiliser identifie les écarts, il ne certifie pas la conformité. Un juriste reste indispensable avant diffusion."
  - question: "Un service marketing utilise depuis deux semaines un assistant pour générer des briefs créatifs, avec de bons retours. À quel niveau de la méthode se trouvent-ils ?"
    options:
      - "Déjà à Industrialiser, ils ont automatisé"
      - "À Structurer, ils viennent de commencer à utiliser l'assistant"
      - "Probablement entre Structurer et Fiabiliser, il faut vérifier et optimiser avant toute automatisation"
      - "À Optimiser, les bons retours le prouvent"
    answer: 2
    explanation: "Deux semaines de bons retours ne valent pas un contenu fiabilisé et optimisé. Avant tout passage à Industrialiser, il faut valider Fiabiliser (vérification) et Optimiser (mise en forme directement exploitable) avec supervision humaine."
  - question: "S.F.O.I. et IMIA, quelle est la bonne lecture ?"
    options:
      - "S.F.O.I. et IMIA sont deux noms du même concept"
      - "S.F.O.I. est la méthode personnelle ; IMIA est la carte de maturité de l'organisation"
      - "S.F.O.I. concerne l'individu, IMIA concerne uniquement l'équipe"
      - "IMIA est une version simplifiée de S.F.O.I."
    answer: 1
    explanation: "S.F.O.I. dit comment travailler avec l'assistant, quatre actes, dans l'ordre, à chaque livrable. L'IMIA dit où en est l'organisation, un score sur 100, cinq dimensions, mesuré dans le temps. La méthode reste la même ; ce qui change, c'est l'échelle d'observation."
---

## Accroche · l'histoire de Marc

Vous y êtes. Vous avez choisi vos prompts, vous savez ce qu'un LLM peut faire et ce qu'il ne peut pas faire. Maintenant vous allez apprendre à enchaîner.

Une méthode. Quatre actes, toujours dans le même ordre. Une règle absolue : ne jamais sauter d'étape.

**Structurer · Fiabiliser · Optimiser · Industrialiser.** C'est S.F.O.I.

Pour vous montrer ce que ça change concrètement, je vais vous présenter Marc.

Marc travaille aux Ressources Humaines. Mercredi matin, on lui demande une charte interne d'usage de l'IA pour vendredi.

Il a trois heures de notes prises en réunion avec la direction, le juridique et l'IT. Désorganisées. Parfois contradictoires. Il y a des exigences RGPD qu'il n'a pas le temps de relire. Des contraintes internes qu'il ne maîtrise pas toutes.

La direction veut un document zéro risque. Marc n'est pas expert IA.

Alors Marc fait ce que font la plupart des gens dans cette situation. Il ouvre un assistant et il tape : « Rédige-moi une charte d'usage de l'IA pour notre entreprise. »

L'assistant produit quelque chose. C'est bien structuré. Ça ressemble à une charte. Mais ce n'est pas la sienne. Ce ne sont pas ses contraintes. Ce ne sont pas ses décisions.

Marc a sauté les étapes.

Ce bloc va vous montrer pourquoi les étapes existent, et comment Marc aurait dû procéder. Ce qu'il va apprendre s'applique à n'importe quel document de travail.

## Les quatre actes

Posons le cadre avant de voir Marc en action.

S.F.O.I. est une méthode de travail. Quatre actes, dans cet ordre, à chaque livrable important.

**🟢 Structurer.**

Objectif : organiser cent pour cent de la matière brute, sans en perdre un seul élément.

Ce n'est pas résumer. Résumer supprime. Structurer réorganise.

Critère de passage : aucune information n'a disparu. Le chaos est devenu un plan.

**🟡 Fiabiliser.**

Objectif : rendre chaque affirmation vérifiable. Sortir de la confiance implicite.

Ce n'est pas produire quelque chose de nouveau. C'est passer le contenu structuré au tamis de la vérification.

Critère de passage : les sources sont citées, les obligations manquantes sont identifiées, les zones d'incertitude sont signalées.

Pour que l'assistant identifie ce qui manque dans votre document, vous devez lui fournir une source de référence : le texte de loi, la politique interne, le contrat type. Sans cette source, l'assistant travaille dans le vide. Il peut inventer des manques inexistants ou valider des absences qui n'en sont pas. **La vérification est aussi bonne que la source que vous fournissez.**

Si votre plateforme dispose d'une fonction de recherche web, l'accès à des informations récentes ne réduit pas l'exigence de vérification, il l'augmente. Date de publication, fiabilité de la source, croisement : les réflexes restent les mêmes.

**🔵 Optimiser.**

Objectif : transformer le contenu fiabilisé en outil directement exploitable, sans retraitement manuel.

Ce n'est plus vérifier ni organiser. C'est adapter à l'usage réel, au format, au destinataire, au contexte.

Critère de passage : le livrable peut être utilisé tel quel par son destinataire final. Collaborateurs, managers, clients.

**🟣 Industrialiser.**

Objectif : intégrer le livrable dans un système qui l'exécute sans intervention manuelle à chaque fois.

Ce n'est plus une tâche individuelle. C'est un système gouverné.

Industrialiser, ce n'est pas automatiser en oubliant. C'est automatiser en maîtrisant. Avec des rôles définis. Une traçabilité. Des mécanismes d'arrêt si quelque chose dérive.

Critère de passage : le workflow est documenté, testé, supervisé, mesuré. Quelqu'un sait quoi faire si la dérive apparaît.

Ce niveau dépasse l'individu. Il engage l'organisation. Nous y revenons au bloc 5.

**La règle absolue.**

On ne saute pas d'étape. Jamais.

On ne passe pas de Structurer à Industrialiser directement, même si le résultat de Structurer semble suffisamment bon. On ne commence pas à Optimiser sans avoir fiabilisé.

Chaque acte est une barrière de sécurité. Pas une case à cocher.

## Marc applique Structurer puis Fiabiliser

Revenons à Marc.

Marc commence par **Structurer**. Il colle ses notes et envoie un prompt simple : il demande à l'assistant de transformer ses notes en plan hiérarchique, sans rien supprimer, et d'ajouter une section « Points à clarifier ».

```
Transforme ces notes en plan hiérarchique.
Ne supprime aucune information.
Ajoute une section "Points à clarifier".
```

L'assistant produit un plan en huit sections. La section « Points à clarifier » contient les questions exactes qu'un juriste lui posera. Marc a mis de l'ordre dans le chaos. Et il a identifié ses angles morts.

Marc passe à **Fiabiliser**. Il envoie son plan, **avec le texte du RGPD et de l'AI Act en référence**. Le prompt est plus exigeant : il demande à l'assistant de signaler ce qui manque, de citer les passages exacts utilisés, et surtout de ne faire aucune hypothèse implicite.

```
Vérifie si ce plan respecte les obligations du RGPD et de l'AI Act ci-joints.
- Si une obligation manque, indique-le.
- Cite les passages exacts utilisés.
- Si une information n'est pas présente dans les documents de référence, dis-le explicitement.
- N'effectue aucune hypothèse implicite.
```

L'assistant lui répond avec un rapport d'écarts. Voici un exemple, simulé pour cette formation, mais représentatif de ce que vous obtiendrez :

```
⚠️ Le plan ne mentionne pas le droit de recours des salariés
en cas de décision partiellement automatisée.

Référence : RGPD, Article 22, Décisions individuelles automatisées.

Suggestion : ajouter une sous-section « Droits des personnes
concernées » dans le chapitre Transparence, incluant :
- droit d'obtenir une intervention humaine,
- droit d'exprimer son point de vue,
- droit de contester la décision.
```

Marc a obtenu en quelques minutes ce qui lui aurait pris une journée. L'assistant a préparé le travail. Il n'a rien certifié, le juriste reste indispensable pour valider.

**Structurer** transforme le chaos en plan. **Fiabiliser** transforme le plan en document sécurisé. Marc peut maintenant passer à **Optimiser**, mettre le contenu au format charte interne, FAQ, checklist d'usage. Et **Industrialiser**, si l'organisation décide un jour d'automatiser la diffusion ou la mise à jour de cette charte.

## Les trois erreurs qui font sauter les niveaux

Trois erreurs reviennent souvent. Elles ont toutes la même cause : sauter un niveau.

**Erreur de la confusion structurer / résumer.**

Structurer, c'est réorganiser cent pour cent du contenu. Résumer, c'est en supprimer une partie. Quand vous êtes au niveau Structurer, votre seul objectif est zéro perte d'information. Si la sortie est plus courte que l'entrée, l'assistant a résumé. Pas structuré.

**Erreur du saut de Fiabiliser parce que le résultat semble bien.**

Un plan bien structuré n'est pas un plan fiabilisé. L'assistant peut organiser parfaitement des informations incorrectes. La vérification est indépendante de la structuration. C'est l'erreur que Marc aurait commise s'il avait envoyé son plan directement à la direction.

**Erreur du démarrage direct à Optimiser ou Industrialiser parce qu'on est pressé.**

La pression de la deadline pousse à sauter. Marc l'a ressentie mercredi matin. Mais sauter les niveaux, c'est fragiliser la base. Un livrable mis en forme professionnelle, prêt à être diffusé, qui repose sur du contenu non vérifié, c'est un risque amplifié, pas un gain de temps.

## Clôture · de la méthode à la maturité

Marc a livré sa charte vendredi matin. Solide. Parce qu'il avait suivi les actes dans l'ordre.

Ce que vous venez d'apprendre ne s'applique pas qu'aux chartes RH. Cela s'applique à n'importe quel document de travail. Un rapport d'analyse. Une proposition commerciale. Un plan de projet. Une note stratégique.

La prochaine fois que vous avez un livrable important à produire avec l'assistant, posez-vous la question : à quel acte suis-je ? Ai-je fait le précédent ?

S.F.O.I., c'est ça. Une méthode de travail au quotidien. Quatre actes, toujours dans l'ordre.

Mais regardons maintenant ces quatre actes à une autre échelle. Pas ce que vous faites, vous, devant votre écran. Ce que **votre organisation** sait faire collectivement.

- Vos équipes structurent-elles vraiment leurs usages ? Ou chacun improvise dans son coin ?
- La vérification est-elle un réflexe partagé, ou une affaire individuelle ?
- Les sorties sont-elles capitalisées comme des outils réutilisables, ou produites une fois et perdues ?
- Les usages industrialisés sont-ils gouvernés, rôles, traçabilité, mécanismes d'arrêt, ou simplement automatisés et laissés à eux-mêmes ?

Cette grille devient une **carte de maturité organisationnelle**. On l'appelle **IMIA**, l'instrument qui mesure l'écart entre l'intention stratégique de la direction et les pratiques IA réelles.

L'IMIA mesure ce que votre organisation sait faire, pas ce qu'elle fait. Cinq dimensions, un score sur 100.

S.F.O.I. est la méthode personnelle. L'IMIA est la lecture collective. Vous venez de poser la première. La seconde, c'est le sujet du bloc suivant.
