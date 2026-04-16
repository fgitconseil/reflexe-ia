# Créer un langage commun — Checklist premiers réflexes
> Format : Référence · À imprimer ou garder à portée
> Validation : Cocher les 10 points avant tout usage professionnel régulier de l'IA

---

## Avant de prompter

---

### ✅ 1. Clarifier son intention

**Action** : Avant de taper quoi que ce soit, nommer le livrable attendu en une phrase.
*"Je veux obtenir [un email / une synthèse / une liste / une analyse] pour [qui] dans [quel but]."*

**Pourquoi** : Un LLM répond à la question posée. Une intention floue produit une réponse floue — même si elle semble structurée.

**Signal d'alerte** : Vous commencez à taper sans savoir exactement ce que vous voulez obtenir à la fin.
→ Arrêtez. Écrivez d'abord votre objectif sur une ligne, puis promptez.

---

### ✅ 2. Vérifier les données avant de les coller

**Action** : Appliquez le filtre de sécurité (3 questions) avant tout usage. Si oui à l'une des deux dernières ou non à la première → anonymiser ou ne pas coller.

**Pourquoi** : L'exfiltration est toujours involontaire. Le réflexe de copier-coller est automatique — la vérification doit l'être aussi.

**Signal d'alerte** : Vous vous apprêtez à coller un document qui contient des noms, des chiffres contractuels ou des données RH.
→ Anonymisez d'abord ou vérifiez que vous êtes sur une instance sécurisée (vérification DSI).

---

### ✅ 3. Choisir le bon outil pour le niveau de risque

**Action** : Évaluer le niveau de sensibilité de la tâche et choisir l'outil en conséquence.

| Sensibilité | Outil adapté |
|-------------|-------------|
| Faible (texte générique, brouillon personnel) | LLM public acceptable |
| Moyenne (données métier non nominatives) | Vérifier la politique de l'instance |
| Élevée (données clients, RH, stratégiques) | Instance entreprise avec non-rétention |

**Pourquoi** : Tous les outils IA ne sont pas équivalents sur la sécurité des données. L'outil "pratique" n'est pas forcément l'outil sûr.

**Signal d'alerte** : Vous utilisez ChatGPT public pour une tâche avec des données internes sans avoir vérifié la politique de données.
→ Posez la question à votre DSI avant, pas après.

---

## Pendant l'interaction

---

### ✅ 4. Itérer, ne pas répéter

**Action** : Si la réponse ne correspond pas, reformuler la demande — pas la répéter.
Ajouter une précision, changer le format demandé, clarifier le public cible.

**Pourquoi** : Re-demander la même chose produit la même réponse. L'amélioration vient du recadrage, pas de l'insistance.

**Signal d'alerte** : Vous avez envoyé la même demande (ou presque) deux fois consécutives et êtes frustré du résultat.
→ Reformulez en ajoutant : ce que vous vouliez, ce que vous avez obtenu, ce qui manque.

---

### ✅ 5. Exiger les sources sur les faits critiques

**Action** : Pour toute information factuelle (date, chiffre, référence légale, statistique), ajouter dans le prompt :
*"Cite les passages ou sources sur lesquels tu t'appuies."*

**Pourquoi** : L'IA peut inventer des références avec conviction. Exiger la citation force l'IA à signaler l'absence de source plutôt que d'en inventer une.

**Signal d'alerte** : Votre prompt contient une question factuelle précise et vous n'avez pas demandé de justification.
→ Ajoutez la ligne de demande de citation avant d'envoyer.

---

### ✅ 6. Autoriser explicitement "je ne sais pas"

**Action** : Ajouter dans les prompts où la précision est critique :
*"Si tu n'as pas d'information certaine sur ce point, dis-le explicitement plutôt que d'estimer."*

**Pourquoi** : Par défaut, un LLM produit toujours une réponse. Il ne signale pas spontanément son incertitude. Cette autorisation doit être explicite.

**Signal d'alerte** : Vous posez une question précise sur un sujet récent ou spécialisé sans avoir donné cette instruction.
→ L'IA va estimer avec confiance. Ajoutez l'autorisation.

---

### ✅ 7. Ne pas ajouter de nouvelles données sensibles en cours d'échange

**Action** : Si vous avez commencé une session avec des données génériques, ne rajoutez pas de données sensibles au fil de la conversation sous prétexte que "ça allait bien".

**Pourquoi** : La session reste ouverte et les données restent dans le contexte. Chaque nouvelle donnée sensible ajoutée élargit le risque d'exfiltration.

**Signal d'alerte** : Vous êtes en train d'affiner un texte et vous êtes sur le point de coller un contrat ou une fiche client "juste pour un détail".
→ Ouvrez une nouvelle session sécurisée dédiée, ou anonymisez.

---

## Après la réponse

---

### ✅ 8. Vérifier les faits critiques dans une source officielle

**Action** : Identifier les zones à risque dans l'output (dates, chiffres, citations, références légales, engagements) et les vérifier dans une source officielle — pas en re-demandant à l'IA.

**Pourquoi** : L'IA peut confirmer une erreur avec la même assurance qu'une vérité. La vérification ne se fait que dans une source externe.

**Signal d'alerte** : Votre output contient des références réglementaires ou des chiffres de marché et vous n'avez pas encore consulté la source officielle.
→ Vérifiez avant tout envoi ou publication externe.

---

### ✅ 9. Garder la main avant tout envoi

**Action** : Relire l'output en se posant la question : *"Est-ce que je valide chaque phrase de ce texte ?"*
Un output IA ne part jamais chez un client, partenaire ou supérieur sans relecture humaine.

**Pourquoi** : L'IA propose. L'humain décide. La responsabilité reste toujours du côté de l'émetteur — pas de l'outil.

**Signal d'alerte** : Vous copiez-collez directement l'output dans un email sans le relire.
→ Ce n'est pas un gain de temps, c'est un risque réputationnel non maîtrisé.

---

### ✅ 10. Capitaliser les prompts qui ont bien fonctionné

**Action** : Quand un prompt produit un résultat excellent, le noter dans votre bibliothèque personnelle (un fichier texte, un répertoire dédié, un outil de notes).
Indiquer : la tâche, le prompt, le contexte, le résultat obtenu.

**Pourquoi** : Un bon prompt est un actif. Ne pas le noter, c'est recommencer de zéro à chaque fois — et perdre la moitié de la valeur produite.

**Signal d'alerte** : Vous vous souvenez d'avoir obtenu un résultat excellent il y a 3 semaines mais vous ne retrouvez plus le prompt.
→ Commencez votre bibliothèque maintenant, même avec 3 entrées.

---

## Mémo synthétique (à afficher)

```
AVANT   → Clarifier · Vérifier les données · Bon outil
PENDANT → Itérer · Citer les sources · "Je ne sais pas" · Ne pas ajouter
APRÈS   → Vérifier les faits · Garder la main · Capitaliser
```

<!-- QUIZ_INLINE id="intro-03-q1" -->
**Pause réflexion :** Vous êtes sur le point de coller une fiche client dans l'IA pour rédiger un email de relance. Quel réflexe de la checklist s'applique en priorité ?

A) Réflexe 1 — Clarifier votre intention avant de prompter
B) Réflexe 2 — Vérifier les données avant de les coller : la fiche contient des données nominatives
C) Réflexe 9 — Garder la main avant tout envoi
D) Réflexe 10 — Capitaliser le prompt si le résultat est bon

> **Réponse : B** — *Une fiche client contient des données nominatives. Avant de la coller, appliquer le filtre : ces données sont-elles sensibles ? Oui → anonymiser ou utiliser une instance sécurisée. L'exfiltration est toujours involontaire — le réflexe doit devenir automatique.*
<!-- /QUIZ_INLINE -->
