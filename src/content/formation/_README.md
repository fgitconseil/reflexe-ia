# Conventions des markdowns de formation

## Marqueurs TIMELINE

`<!-- TIMELINE: show NOM-ELEMENT -->` — commentaire HTML invisible au rendu, sert à timer l'apparition d'un élément SVG dans la slide. Après enregistrement audio ElevenLabs, le timestamp réel est reporté dans `src/content/formation/timelines/<bloc>-<slide>.json`.

## Convention VOIX OFF / À L'ÉCRAN

`**[VOIX OFF]**` suivi de prose = texte prononcé par la voix off (peut être affiché visuellement en discret, ou totalement masqué).
`**[À L'ÉCRAN]**` suivi d'un code block = contenu mis en valeur à l'écran pendant que la voix off commente.

Le composant qui consommera la collection devra :
- Pour la production audio : extraire seulement la prose hors balises VOIX OFF/À L'ÉCRAN/code blocks et marqueurs HTML.
- Pour le rendu visuel : transformer les balises en deux blocs distincts (voix off discret, à l'écran mis en valeur).

## Endscreen du dernier bloc

La section `## Endscreen · écran de fin de parcours` du bloc 5 spécifie l'écran de fin (badge LinkedIn + CTA accompagnement) qui doit être rendu côté Astro après le quiz final, **pas depuis le markdown**. C'est une spec, pas un contenu rendu.
