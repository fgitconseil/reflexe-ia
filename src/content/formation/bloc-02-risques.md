---
bloc: 2
slug: risques
titre: Risques, cadre et responsabilités
sous_titre: Trois risques professionnels et les règles qui vont avec
duree_min: 16
badge: Cadre
ordre: 2
statut: en-revision
audio_complet: false
illustrations_validees: false
sources_archive:
  - "Formation_prompting/audios_et_illustrations/02-1. Accroche terrain.txt"
  - "Formation_prompting/audios_et_illustrations/02-2. Risque 1 - Exfiltration de données.txt"
  - "Formation_prompting/audios_et_illustrations/02-3. Risque 2 — Réputationnel et usurpation.txt"
  - "Formation_prompting/audios_et_illustrations/02-4. Risque 3 — Industrialisation prématurée.txt"
  - "Formation_prompting/audios_et_illustrations/02-5. Message de clôture.txt"
  - "Formation_prompting/audios_et_illustrations/02-6. Un mot sur l'impact environnemental.txt"
  - "Formation_prompting/audios_et_illustrations/02. final quiz.md"
---

# Bloc 2 — Risques, cadre et responsabilités

> **Intention pédagogique.** Donner trois grilles de lecture nommées (pas numérotées) qui restent disponibles dans la mémoire de l'apprenant : risque d'**exfiltration**, risque **réputationnel** (et son corollaire l'**usurpation**), risque d'**industrialisation prématurée**. Poser les règles minimales pour les éviter, sans alarmisme. Donner une grille de lecture sobre sur l'AI Act.

> **Décisions de révision (avril 2026).**
> 1. **Risques labellisés, jamais numérotés** (retour Olivier). Plus aucune référence à « Risque 1, 2, 3 » dans les supports — toujours le nom complet : *risque d'exfiltration*, *risque réputationnel*, *risque d'industrialisation prématurée*.
> 2. Quiz final Q8 reformulé pour ne plus parler du « Risque 3 » mais nommer la règle d'industrialisation prématurée.
> 3. Bloc structurellement préservé — les retours Florian/Olivier ne touchent pas le fond conceptuel, qui était jugé solide.

---

> **Convention sur les marqueurs TIMELINE.**
> Les marqueurs `<!-- TIMELINE: show NOM-ELEMENT -->` indiquent les éléments visuels qui doivent apparaître à l'écran à un moment précis de la voix off. Ils ne sont pas lus par ElevenLabs.

---

## Slide 1 — Accroche · une situation qu'on rencontre souvent

**Audio** : `[À ENREGISTRER — ancien : Formation_prompting/.../02-1. Accroche terrain.m4a]`
**Illustration** : `[À REFAIRE — manager devant son écran le soir, données collées]`
**Durée cible** : 1 min 15 s

### Script

Voici une situation qu'on rencontre régulièrement dans des entreprises françaises.

Un manager reçoit une demande urgente. Il doit rédiger une réponse à un appel d'offres pour le lendemain. Il est 18 h. Il copie-colle l'intégralité du cahier des charges dans un assistant — avec les noms des clients, les volumes commandés, les prix actuels.

Il obtient une réponse excellente. Proposition envoyée. Appel d'offres gagné.

Sauf que ce soir-là, il a transmis des données commerciales confidentielles à un serveur externe. Sans le savoir. Sans en parler à personne. Sans mesurer les conséquences.

Ce n'est pas un cas isolé. C'est le type de situation qu'on observe régulièrement dans les organisations qui n'ont pas encore posé les règles de base sur l'usage de l'IA.

Ce bloc va vous donner trois grilles de lecture pour reconnaître ces situations et poser les bonnes règles. Pas pour vous décourager d'utiliser l'IA — pour vous permettre de l'utiliser avec confiance.

### Notes de production

- Suppression du tic « je vais vous raconter quelque chose » → « voici une situation ». Olivier a signalé le pattern, on le retire partout.
- L'illustration : un manager seul devant son écran, le soir, les bras de l'horloge marquant 18 h. Pas de visage caricatural.

---

## Slide 2 — Le risque d'exfiltration

**Audio** : `[À ENREGISTRER — ancien : Formation_prompting/.../02-2. Risque 1 - Exfiltration de données.m4a]`
**Illustration** : `[À REFAIRE — schéma : périmètre entreprise → fuite invisible vers serveur externe]`
**Durée cible** : 4 min

### Script

Le premier risque qu'on aborde — et le plus invisible — c'est le **risque d'exfiltration**.

<!-- TIMELINE: show exfiltration-definition -->

Exfiltration, ça veut dire : des informations confidentielles de votre entreprise qui quittent votre périmètre de sécurité pour atterrir dans un système externe.

Avec l'IA, ça se passe sans bruit. Vous n'avez pas l'impression d'envoyer un fichier à quelqu'un. Vous posez juste une question. Mais ce que vous collez dans la fenêtre de chat, vous le transmettez à un serveur.

---

<!-- TIMELINE: show 4-categories-donnees -->

**Quatre catégories de données à risque.**

<!-- TIMELINE: show categorie-clients -->

Première catégorie : les **données clients**. Noms, coordonnées, historiques d'achat, contrats, prix négociés. Tout ce qui identifie un client ou décrit votre relation commerciale avec lui.

<!-- TIMELINE: show categorie-rh -->

Deuxième catégorie : les **données RH**. Salaires, évaluations, situations personnelles, projets de réorganisation. Particulièrement protégées par le RGPD — toute fuite peut engager la responsabilité de l'entreprise.

<!-- TIMELINE: show categorie-strategiques -->

Troisième catégorie : les **données stratégiques**. Plans de développement, analyses concurrentielles, projets de rachat, données financières non publiées.

<!-- TIMELINE: show categorie-code -->

Quatrième catégorie : le **code propriétaire**. Si vous développez des outils internes, le code source est un actif stratégique.

---

<!-- TIMELINE: show 3-questions-regle -->

**La règle des trois questions** avant de coller quoi que ce soit :

<!-- TIMELINE: show question-1-public -->

Première question : cette information peut-elle être rendue publique sans conséquence pour l'entreprise ?

<!-- TIMELINE: show question-2-personnes -->

Deuxième question : concerne-t-elle des personnes identifiables ?

<!-- TIMELINE: show question-3-strategique -->

Troisième question : représente-t-elle un avantage concurrentiel ou une information stratégique ?

Si vous répondez non à la première, ou oui à l'une des deux suivantes, vous n'utilisez pas un assistant public pour cette tâche. Vous anonymisez d'abord, ou vous attendez d'être sur un outil sécurisé.

---

<!-- TIMELINE: show 3-niveaux-protection -->

**Trois niveaux de protection** selon l'outil. Une idée reçue répandue : tous les outils utiliseraient les données pour entraîner les modèles. Ce n'est pas aussi simple.

<!-- TIMELINE: show niveau-public -->

**Niveau public gratuit.** Sur ces outils, vos données peuvent effectivement être utilisées pour améliorer les modèles. Niveau de risque le plus élevé pour des données professionnelles.

<!-- TIMELINE: show niveau-pro -->

**Niveau Pro ou Teams.** L'entraînement sur les données utilisateurs est désactivé par défaut, ou une option dédiée existe dans les paramètres. Protection sensiblement meilleure, à condition d'avoir vérifié les paramètres de votre compte.

<!-- TIMELINE: show niveau-enterprise -->

**Niveau Enterprise.** Les politiques de non-rétention sont garanties contractuellement. Vos données ne quittent pas l'environnement sécurisé configuré par votre organisation.

La règle de base : vérifiez le type de licence avant tout usage avec des données professionnelles. Si vous ne savez pas quelle instance vous utilisez et quelle est sa politique, posez la question à votre DSI ou à votre prestataire IT avant d'utiliser l'outil avec des données sensibles. Ce n'est pas une question technique. C'est une question de responsabilité.

### Notes de production

- L'animation : faire apparaître **les 4 catégories de données une par une**, puis **les 3 questions une par une**, puis **les 3 niveaux une par une** (cf. retour Florian).
- Le titre de la slide doit dire « Le risque d'exfiltration » — pas « Risque 1 ».
- Schéma central : un périmètre dessiné autour de l'entreprise, une flèche fine qui sort vers un serveur externe. La flèche est en pointillés — invisible.

### Quiz inline

```yaml
id: bloc-02-q1
question: "Vous recevez une demande urgente d'un client. Pour rédiger rapidement votre réponse, vous copiez-collez son email complet — avec ses coordonnées, le montant du contrat et ses conditions particulières — dans l'interface gratuite d'un assistant. Quel risque avez-vous pris ?"
options:
  - texte: "Aucun — les assistants sont conçus pour traiter ce type de demandes professionnelles"
    correct: false
  - texte: "Un risque d'exfiltration : des données client confidentielles ont quitté votre périmètre vers un serveur externe sans garantie de confidentialité"
    correct: true
  - texte: "Un risque réputationnel uniquement si la réponse contient des erreurs"
    correct: false
  - texte: "Un risque d'industrialisation prématurée — vous n'avez pas encore validé le processus"
    correct: false
explication: "En collant des données client dans un outil public gratuit, vous transmettez des informations confidentielles à un serveur externe. C'est le risque d'exfiltration dans sa forme la plus courante : invisible, immédiate, sans incident apparent — jusqu'à ce que ça compte."
```

---

## Slide 3 — Le risque réputationnel et l'usurpation

**Audio** : `[À ENREGISTRER — ancien : Formation_prompting/.../02-3. Risque 2 — Réputationnel et usurpation.m4a]`
**Illustration** : `[À REFAIRE — 4 zones de risque réputationnel + visuel deepfake]`
**Durée cible** : 4 min

### Script

Le deuxième risque qu'on aborde est double : le **risque réputationnel**, que vous avez probablement déjà envisagé, et le **risque d'usurpation**, souvent sous-estimé.

---

<!-- TIMELINE: show 4-zones-reputation -->

**Quatre zones de risque réputationnel.**

Comme vu au bloc 1, l'assistant peut halluciner. Voici les conséquences concrètes quand une erreur sort de votre bureau.

<!-- TIMELINE: show zone-dates -->

**Les dates.** L'assistant peut confondre des années, des délais légaux, des dates d'entrée en vigueur. Une date erronée dans un contrat ou une proposition commerciale peut créer un engagement involontaire.

<!-- TIMELINE: show zone-chiffres -->

**Les chiffres.** Statistiques, pourcentages, données financières. L'assistant peut générer des données plausibles mais fausses. Si vous les publiez dans un rapport ou une présentation stratégique, votre crédibilité est exposée.

<!-- TIMELINE: show zone-citations -->

**Les citations et références légales.** Vous en avez vu un exemple au bloc 1 avec la citation juridique inventée. Ça vaut aussi pour les normes techniques et les réglementations sectorielles.

<!-- TIMELINE: show zone-engagements -->

**Les engagements contractuels.** Si vous utilisez l'assistant pour rédiger des emails clients ou des propositions, relisez chaque engagement. L'assistant peut formuler des garanties ou des conditions que vous n'offrez pas réellement.

---

<!-- TIMELINE: show usurpation-deepfakes -->

**Le risque d'usurpation — les deepfakes.**

Le second volet monte en puissance depuis 2024. Les hypertrucages, ou *deepfakes*, permettent aujourd'hui de recréer la voix ou l'image d'une personne de façon convaincante. La CNIL alerte sur ce risque en croissance pour les entreprises.

<!-- TIMELINE: show deepfakes-exemples -->

Concrètement : un fraudeur peut générer un faux message vocal de votre PDG demandant un virement urgent. Une vidéo ou un enregistrement semblant provenir d'un dirigeant pour manipuler un employé, un client ou un partenaire. Une usurpation de votre marque dans une campagne externe.

Ce n'est plus de la science-fiction. C'est une technique disponible et utilisée.

---

Un mot personnel, maintenant que vous entendez ma voix.

Ce que vous entendez dans cette formation, ce n'est pas ma voix réelle. Et ce n'est pas non plus généré par un assistant IA — c'est une voix de synthèse classique.

Deux choses : l'IA n'est pas toujours utile. Et vous verrez et entendrez de plus en plus de contenus où la distinction avec le réel n'est plus évidente. **L'entraînement à douter devient une compétence utile.**

Deux réflexes de base : établir un protocole de vérification pour toute demande urgente inhabituelle hors des canaux normaux — même si elle semble provenir d'un dirigeant. Et sensibiliser vos équipes à ce risque avant qu'elles n'en soient victimes.

---

<!-- TIMELINE: show protocole-3-temps -->

**Le protocole de vérification en trois temps.**

Pour le risque réputationnel classique :

<!-- TIMELINE: show etape-identifier -->

**Identifier** les zones sensibles dans le texte généré — tout chiffre, toute date, toute référence normative, tout engagement.

<!-- TIMELINE: show etape-verifier -->

**Vérifier** chaque zone dans un document de référence. Pas en redemandant à l'assistant — il peut confirmer une erreur avec la même assurance. Allez à la source : site officiel, texte de loi, document contractuel.

<!-- TIMELINE: show etape-relire -->

**Relire** humainement et systématiquement avant tout envoi externe. Jamais un livrable IA ne part chez un client, un partenaire ou une administration sans passer sous des yeux humains.

### Notes de production

- Suppression de la coquille « surpirse » → « ce n'est pas non plus généré par un assistant IA ».
- L'animation des 4 zones : pictogramme par zone (calendrier pour dates, graphique pour chiffres, livre pour références, contrat pour engagements).
- Sur les deepfakes : pas d'image anxiogène. Une silhouette stylisée avec un effet de pixellisation suffit.

### Quiz inline

```yaml
id: bloc-02-q2
question: "Un collaborateur vous dit : « L'AI Act impose des obligations strictes à toutes les entreprises qui utilisent l'IA — on doit s'y conformer immédiatement. » Quelle est la nuance importante qu'il manque ?"
options:
  - texte: "L'AI Act ne concerne que les entreprises de plus de 250 salariés"
    correct: false
  - texte: "L'AI Act est en vigueur seulement en France, pas dans toute l'Europe"
    correct: false
  - texte: "Pour la plupart des organisations qui n'utilisent pas l'IA dans des usages à haut risque, c'est surtout de la bonne pratique et de la veille — les obligations strictes s'appliquent d'abord aux concepteurs et déployeurs de systèmes à haut risque"
    correct: true
  - texte: "L'AI Act ne sera applicable qu'en 2027 — aucune action n'est nécessaire avant"
    correct: false
explication: "L'AI Act est réel et progresse. Mais pour une organisation qui n'utilise pas l'IA pour des décisions affectant des individus dans des domaines classés à haut risque, c'est aujourd'hui de la bonne pratique et de la veille, pas une contrainte directe. S'y préparer, oui. Paniquer, non."
```

---

## Slide 4 — Le risque d'industrialisation prématurée

**Audio** : `[À ENREGISTRER — ancien : Formation_prompting/.../02-4. Risque 3 — Industrialisation prématurée.m4a]`
**Illustration** : `[À REFAIRE — scénario propositions automatiques + grille S.F.O.I.]`
**Durée cible** : 4 min

### Script

Le troisième risque qu'on aborde est le plus insidieux. C'est celui que les entreprises découvrent le plus tard, souvent après un incident coûteux.

<!-- TIMELINE: show industrialisation-prematuree -->

**L'industrialisation prématurée**, c'est automatiser avec l'IA quelque chose qu'on n'a pas encore sécurisé.

<!-- TIMELINE: show scenario-commercial -->

Voici le scénario.

Une équipe commerciale utilise l'assistant pour rédiger des propositions clients. Ça fonctionne bien. Les commerciaux sont satisfaits. Un responsable décide d'automatiser : désormais, un script génère les propositions la nuit et les envoie aux clients le matin.

<!-- TIMELINE: show scenario-erreur-multipliee -->

Sauf que personne n'avait remarqué que l'assistant confondait régulièrement deux offres tarifaires. À faible volume, l'erreur était corrigée par le commercial avant l'envoi. Automatisée, elle part chez deux cents clients.

C'est pour éviter ça que la formation s'appuie sur une progression en quatre niveaux.

---

<!-- TIMELINE: show progression-sfoi-aperçu -->

**La progression S.F.O.I.** — qu'on développe au bloc 4.

<!-- TIMELINE: show sfoi-S -->

🟢 **Structurer** : vous organisez votre matière. Vous vérifiez que rien n'est perdu.

<!-- TIMELINE: show sfoi-F -->

🟡 **Fiabiliser** : vous rendez chaque affirmation vérifiable. Vous contrôlez les sources, les chiffres, les engagements.

<!-- TIMELINE: show sfoi-O -->

🔵 **Optimiser** : vous transformez le contenu validé en outil directement exploitable.

<!-- TIMELINE: show sfoi-I -->

🟣 **Industrialiser** : vous intégrez l'outil dans un système automatisé, avec rôles définis, traçabilité, supervision, mécanismes d'arrêt.

<!-- TIMELINE: show sfoi-regle-absolue -->

**La règle absolue : on ne passe pas directement de Structurer à Industrialiser. On ne saute pas les étapes.**

---

<!-- TIMELINE: show 3-questions-automatiser -->

**Trois questions avant d'automatiser.**

Avant d'automatiser quoi que ce soit avec l'IA, posez-vous ces trois questions :

<!-- TIMELINE: show q-validation-humaine -->

Le contenu a-t-il été validé humainement pendant une durée suffisante ou sur assez d'exemples ?

<!-- TIMELINE: show q-erreurs-corrigees -->

Les erreurs ont-elles été identifiées et corrigées avant automatisation ?

<!-- TIMELINE: show q-supervision -->

Y a-t-il une supervision humaine dans le processus — pas seulement à la fin, mais en cours de route ?

Si vous répondez non à l'une de ces trois questions, vous n'êtes pas prêt à automatiser.

---

<!-- TIMELINE: show ai-act-article-4 -->

**Un point de contexte réglementaire — l'AI Act.**

Le règlement européen sur l'intelligence artificielle entre en application progressive depuis 2024. Son **Article 4** impose aux organisations d'assurer un niveau suffisant de maîtrise de l'IA pour leur personnel — en particulier pour ceux qui utilisent ou déploient des systèmes d'IA.

Concrètement : former vos équipes à l'usage responsable de l'IA n'est plus seulement une bonne pratique. Pour de nombreuses organisations, c'est une obligation légale. Cette formation est précisément ce que l'Article 4 exige.

---

**Votre usage est-il à haut risque ?** L'AI Act distingue les usages selon leur niveau de risque. Trois questions d'auto-évaluation :

L'usage de l'IA a-t-il un impact direct sur des décisions concernant des personnes — recrutement, évaluation, accès à des services, crédit, assurance ?

L'usage concerne-t-il des domaines classés à haut risque par l'AI Act — santé, justice, ressources humaines, infrastructure critique, éducation ?

Des décisions partiellement ou totalement automatisées produisent-elles des effets juridiques ou significatifs sur des individus ?

Si vous répondez **oui** à l'une de ces questions, votre usage entre dans la catégorie « à haut risque ». Cela implique des obligations spécifiques : évaluation de conformité, documentation, supervision humaine formalisée. Consultez votre service juridique ou un expert avant de déployer à grande échelle.

Si vous répondez **non** aux trois, vous êtes probablement dans un usage standard. Cela ne dispense pas des règles de base de ce bloc, mais n'implique pas d'obligations réglementaires particulières.

### Notes de production

- L'animation de la progression S.F.O.I. : faire apparaître les 4 niveaux **un par un**, en synchro avec la voix. Mêmes couleurs (🟢🟡🔵🟣) qu'au bloc 4 — cohérence visuelle critique.
- Pour le scénario, séquence narrative simple : commerciaux → script automatique → erreur multipliée. Pas de dramatisation.
- Sur l'AI Act : présentation sobre. C'est de la pédagogie, pas une vente d'audit conformité.

### Quiz inline

```yaml
id: bloc-02-q3
question: "Une équipe utilise un assistant pour rédiger ses propositions commerciales depuis deux semaines avec de bons retours. Le manager veut automatiser entièrement l'envoi. C'est :"
options:
  - texte: "Une bonne décision — si ça marche bien, autant l'automatiser"
    correct: false
  - texte: "Prématuré — le contenu n'a pas été suffisamment validé et supervisé pour être industrialisé"
    correct: true
  - texte: "Acceptable si un manager relit 10 % des propositions au hasard"
    correct: false
  - texte: "Acceptable si l'assistant est un modèle premium"
    correct: false
explication: "Deux semaines ne suffisent pas pour valider un contenu avant automatisation. C'est précisément le risque d'industrialisation prématurée : les erreurs non détectées vont se propager à grande échelle, multipliées et invisibles."
```

---

## Slide 5 — Clôture · les trois règles

**Audio** : `[À ENREGISTRER — ancien : Formation_prompting/.../02-5. Message de clôture.m4a]`
**Illustration** : `[À PRODUIRE — récap des 3 règles labellisées]`
**Durée cible** : 1 min 30 s

### Script

Trois risques. Trois règles essentielles.

---

**La règle de l'exfiltration.**

Avant de coller dans un assistant, posez la question : cette information peut-elle être rendue publique sans conséquence ? Et vérifiez quel outil vous utilisez et sa politique de données. Public gratuit, Pro ou Teams, Enterprise — ce n'est pas la même chose.

---

**La règle de la relecture.**

Avant de publier ou d'envoyer un livrable IA, une paire d'yeux humains relit les zones à risque — dates, chiffres, références, engagements. Et pour les communications inhabituelles urgentes, vérifiez par un canal indépendant que la source est bien celle qu'elle prétend être.

---

**La règle de l'industrialisation.**

Avant d'automatiser, vérifiez que le contenu a été validé et que la supervision humaine est maintenue dans le processus.

---

Ces trois règles ne ralentissent pas votre usage de l'IA. Elles permettent de l'accélérer en toute confiance, et d'être en conformité avec les exigences croissantes de l'AI Act.

Pour une organisation non spécialisée IA — la grande majorité des entreprises françaises — l'AI Act, à ce stade, c'est de la bonne pratique et de la veille, pas encore une contrainte légale directe. Les obligations strictes s'appliquent d'abord aux concepteurs et déployeurs de systèmes à haut risque.

Pourquoi en parler ici ? Parce que si le sujet émerge dans votre organisation — et il va émerger — vous avez maintenant les éléments pour répondre sans être démuni. Ni alarmiste, ni naïf.

L'organisation qui pose ces règles tôt va plus vite que celle qui les découvre à travers une erreur coûteuse.

### Notes de production

- Les trois règles sont **nommées**, pas numérotées (cf. décision révision).
- Récap visuel sobre — 3 cartouches, pas de mise en scène anxiogène.

---

## Slide 6 — Un mot sur l'impact environnemental

**Audio** : `[À ENREGISTRER — ancien : Formation_prompting/.../02-6. Un mot sur l'impact environnemental.m4a]`
**Illustration** : `[À PRODUIRE — visuel sobre, pas culpabilisant]`
**Durée cible** : 1 min

### Script

Un dernier point — court mais important.

Utiliser l'IA a un coût énergétique réel. Les data centers qui font tourner ces modèles consomment de l'électricité et de l'eau en quantité significative. Ce n'est pas une raison de ne pas utiliser l'IA. C'est une raison de l'utiliser **à bon escient**.

Un prompt inutile consomme autant qu'un prompt utile. Un usage réfléchi, ciblé sur des tâches où l'IA apporte vraiment de la valeur, est plus efficace pour vous, et plus frugal.

Ce n'est pas une injonction à la culpabilité. C'est une invitation à la conscience.

La frugalité dans l'usage de l'IA est une bonne pratique à part entière. Elle s'intègre dans une démarche responsable, et elle vous pousse à ne solliciter l'outil que quand il en vaut vraiment la peine.

### Notes de production

- Voix calme, sans posture morale.
- Visuel : une ampoule sobre, ou un compteur. Pas de glaciers qui fondent.

---

## Quiz final du bloc

**Seuil de passage** : 6 bonnes réponses sur 8 (75 %).

```yaml
- id: bloc-02-final-q1
  question: "Un manager copie-colle un contrat client dans un assistant public pour en extraire les dates clés. Ce comportement est :"
  options:
    - "Acceptable — l'assistant ne stocke pas les données"
    - "Acceptable — si c'est pour un usage interne uniquement"
    - "Risqué — il vient de transmettre des données client à un serveur externe"
    - "Interdit uniquement si le contrat est marqué « confidentiel »"
  correct: 3
  explication: "Dès qu'une information est copiée dans un assistant public, elle quitte le périmètre de l'entreprise. Le niveau de confidentialité affiché sur le document n'y change rien."

- id: bloc-02-final-q2
  question: "Quelles données sont à risque si soumises à un assistant public ?"
  options:
    - "Données clients, données RH, informations stratégiques"
    - "Données clients uniquement"
    - "Données publiquement accessibles sur le site web de l'entreprise"
    - "Toutes les données sauf les données financières"
  correct: 1
  explication: "Trois catégories sont à risque : données clients (RGPD), données RH (particulièrement protégées), informations stratégiques (avantage concurrentiel). Le code propriétaire entre aussi dans cette logique pour les organisations qui développent."

- id: bloc-02-final-q3
  question: "L'assistant vous produit un texte avec une référence à « l'article 42 de la loi du 12 mars 2023 ». Que faites-vous ?"
  options:
    - "Vous l'utilisez — l'assistant ne cite que des sources réelles"
    - "Vous vérifiez cet article dans le texte officiel avant tout usage"
    - "Vous demandez à l'assistant de confirmer que cet article existe"
    - "Vous l'utilisez si l'assistant indique un niveau de confiance élevé"
  correct: 2
  explication: "La vérification se fait dans une source primaire, pas en redemandant à l'assistant. L'assistant peut confirmer une erreur avec la même assurance qu'une information correcte."

- id: bloc-02-final-q4
  question: "Dans un livrable IA, quelles zones méritent une vérification humaine systématique ?"
  options:
    - "Uniquement les parties rédigées en langage juridique"
    - "Les conclusions finales seulement"
    - "Dates, chiffres, citations, références réglementaires, engagements"
    - "Seulement si l'assistant a averti d'une incertitude"
  correct: 3
  explication: "Ces cinq catégories constituent les zones à risque réputationnel — à vérifier dans une source primaire avant tout envoi ou publication externe."

- id: bloc-02-final-q5
  question: "Une équipe commerciale utilise l'assistant pour rédiger des emails clients depuis deux semaines avec de bons résultats. Elle décide d'automatiser complètement l'envoi. C'est :"
  options:
    - "Une bonne décision — si ça marche, autant l'automatiser"
    - "Prématuré — le contenu n'a pas été suffisamment validé et supervisé"
    - "Acceptable si un manager relit 10 % des emails au hasard"
    - "Acceptable si l'assistant est un modèle premium"
  correct: 2
  explication: "Deux semaines ne suffisent pas pour valider un contenu avant automatisation. Les erreurs non détectées vont se propager à grande échelle."

- id: bloc-02-final-q6
  question: "Quelle est la progression correcte avant d'industrialiser un usage IA ?"
  options:
    - "Structurer → Industrialiser directement si les résultats sont bons"
    - "Structurer → Fiabiliser → Optimiser → Industrialiser"
    - "Fiabiliser → Structurer → Industrialiser"
    - "L'ordre n'a pas d'importance, l'essentiel est d'arriver à Industrialiser"
  correct: 2
  explication: "La progression S.F.O.I. est une barrière de sécurité organisationnelle. Aucun passage direct de Structurer à Industrialiser n'est acceptable."

- id: bloc-02-final-q7
  question: "Quelle est la différence entre un assistant public et une instance Enterprise configurée par la DSI ?"
  options:
    - "Aucune différence — les deux envoient les données aux mêmes serveurs"
    - "L'instance Enterprise peut avoir une politique de non-rétention des données garantie contractuellement"
    - "L'instance Enterprise est moins performante mais plus sécurisée"
    - "La différence ne concerne que les données techniques, pas les données métier"
  correct: 2
  explication: "Une instance Enterprise correctement configurée peut inclure une politique de non-rétention : les données ne servent pas à l'entraînement des modèles. À vérifier avec la DSI."

- id: bloc-02-final-q8
  question: "Quelle est la règle fondamentale du risque d'industrialisation prématurée ?"
  options:
    - "Ne jamais utiliser l'IA pour des tâches répétitives"
    - "Toujours garder un humain dans la boucle de validation finale"
    - "Ne jamais transformer un brouillon non fiabilisé en processus automatisé"
    - "Automatiser uniquement les tâches à faible valeur ajoutée"
  correct: 3
  explication: "Un contenu doit d'abord être structuré, fiabilisé et optimisé avant d'entrer dans un processus automatisé. Industrialiser un contenu non vérifié, c'est automatiser des erreurs à grande échelle."
```

---

## Takeaway · fiche mémo du bloc

### Trois risques nommés

| Risque | Mécanisme | Règle |
|--------|-----------|-------|
| **Exfiltration** | Données qui quittent votre périmètre vers un serveur externe | Trois questions avant de coller · vérifier le niveau de licence |
| **Réputationnel & usurpation** | Hallucination publiée + deepfakes en croissance | Identifier · vérifier en source primaire · relecture humaine |
| **Industrialisation prématurée** | Automatiser un contenu non validé multiplie les erreurs | Pas de saut Structurer → Industrialiser · supervision en cours de route |

### La règle des trois questions (exfiltration)

1. Cette information peut-elle être rendue publique sans conséquence ?
2. Concerne-t-elle des personnes identifiables ?
3. Représente-t-elle un avantage concurrentiel ?

### Les trois niveaux de protection

- **Public gratuit** — risque le plus élevé pour des données pro.
- **Pro / Teams** — entraînement désactivé par défaut, à vérifier dans les paramètres.
- **Enterprise** — non-rétention garantie contractuellement.

### AI Act — la lecture sobre

Pour une organisation qui n'utilise pas l'IA dans des usages classés à haut risque (RH, santé, justice, crédit, infrastructure critique), c'est de la bonne pratique et de la veille — pas une contrainte légale directe. **L'Article 4** impose toutefois de former le personnel à l'usage responsable. Cette formation y répond.

### La règle d'or

> Trois risques, trois règles. Posées tôt, elles accélèrent l'usage. Découvertes tard, elles coûtent cher.
