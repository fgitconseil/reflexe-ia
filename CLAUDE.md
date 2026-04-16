# CLAUDE.md — Repo reflexe-ia

## Ce projet

Site Astro pour **reflexe-ia.org** — positionnement autour du rôle AI Practice Steward.

Ce repo est **séparé** de `Formation_prompting` (contenu formation) et de `knowledge_extraction` (skills).

---

## Principe de base — charte graphique

**Charte graphique** : celle de `Formation_prompting/site` — light theme, blanc, Inter, gradients bleu/violet, cards, tokens CSS existants.
→ Copier tel quel `Formation_prompting/site/src/styles/global.css` comme base.
→ Ne pas adopter le dark theme Lovable.

**Structure/organisation** : celle du design Lovable (screenshots dans `03-website/design lovable/`)
→ Logo "Reflexe IA" (pas "FGIT Conseil — Formation IA")
→ Navigation et footer : voir section dédiée ci-dessous

**Résumé** : charte graphique Formation_prompting + structure Lovable.

---

## Logo

Texte `Reflexe IA` en lieu et place du logo FGIT Conseil.
- "Reflexe" : couleur `--primary-600` ou blanc selon le fond
- "IA" : couleur `--accent-500` (violet) ou teal selon le contexte

---

## Stack

- Astro + Tailwind v4 (identique à `Formation_prompting/site`)
- `package.json` et `astro.config.mjs` : copier depuis `Formation_prompting/site` et adapter
- GitHub Pages via GitHub Actions
- Domaine : reflexe-ia.org
- `site: 'https://reflexe-ia.org'` dans `astro.config.mjs`

---

## Formation — réutilisation intégrale

**Le site Formation_prompting fonctionne parfaitement. Réutiliser sans tout reconstruire.**

Copier depuis `Formation_prompting/site/src/` :
- `components/SlidePlayer.astro` → à adapter si besoin
- `pages/formation/bloc-01.astro` → base pour les autres blocs
- `pages/formation/index.astro` → page liste des blocs
- `lib/slideData.ts` · `lib/slides.ts` · `lib/modules.ts`

**Seul changement sur la formation** :
- Logo et navigation mis à jour (Reflexe IA, pas FGIT Conseil)
- `bloc-06.astro` : terminologie Coach IA → AI Practice Steward (script déjà mis à jour dans `audios_et_illustrations/`)
- Mettre à jour les liens `/coach-ia/` → `/ai-practice-steward/`

**Source des blocs** : `Formation_prompting/audios_et_illustrations/`
- Scripts : `0X-Y. Titre.txt`
- Audios : `0X-Y. Titre.m4a` / `.mp3`
- Images : `0X-Y. Titre.png`
- Quizz : `0X-Y. Quizz.txt`

**Assets formation** : copier depuis `Formation_prompting/site/public/assets/` → `public/assets/`
**Illustrations** : copier depuis `Formation_prompting/site/public/illustrations/` → `public/illustrations/`
**Takeaways** : copier depuis `Formation_prompting/site/public/takeaways/` → `public/takeaways/`

---

## Sources contenu

| Source | Contenu |
|--------|---------|
| `03-website/pages/00-homepage.md` | Contenu homepage |
| `03-website/pages/01-formation.md` | Contenu page formation |
| `03-website/pages/02-ai-practice-steward.md` | Contenu page rôle APS |
| `03-website/pages/03-manifeste.md` | Contenu page manifeste |
| `03-website/pages/04-offres.md` | Contenu pages offres (sous Framework) |
| `03-website/pages/05-pages-secondaires.md` | Mainteneurs · Contact · CGU · RGPD |
| `01-positionning/Manifeste-Reflexe-IA.md` | Texte complet du manifeste |
| `01-positionning/Definition-Role-AI-Practice-Steward.md` | Texte complet définition rôle |
| `02-offer/` | Textes complets des offres |

---

## Architecture des pages

```
/                           → homepage
/formation                  → liste des 6 blocs (existant adapté)
/formation/bloc-01          → bloc 1 (existant)
/formation/bloc-02          → bloc 2
/formation/bloc-03          → bloc 3
/formation/bloc-04          → bloc 4
/formation/bloc-05          → bloc 5
/formation/bloc-06          → bloc 6 (terminologie APS mise à jour)
/ai-practice-steward        → page rôle
/framework                  → hub Framework (manifeste + méthode + accompagnement + skills)
/framework/manifeste        → manifeste complet
/framework/methode-sfoi     → méthode S.F.O.I.
/framework/accompagnement   → offre accompagnement APS
/framework/skills           → offre skills
/mainteneurs                → page mainteneurs
/contact                    → formulaire contact
/cgu                        → CGU
/politique-confidentialite  → RGPD
```

---

## Navigation

```
Header :
  Logo : "Reflexe IA"
  Nav  : Formation · AI Practice Steward · Framework ▾ · Mainteneurs · Contact
  CTA  : "Formation →" → /formation

  Dropdown Framework :
    Manifeste          → /framework/manifeste
    Méthode S.F.O.I.   → /framework/methode-sfoi
    Accompagnement     → /framework/accompagnement
    Skills             → /framework/skills

Footer (3 colonnes) :
  Col 1 — Brand : logo "Reflexe IA" + description courte + légal FGIT Conseil
  Col 2 — Navigation : Accueil · Formation · AI Practice Steward · Framework · Mainteneurs
  Col 3 — Contact : contact@reflexe-ia.org · reflexe-ia.org
  Bottom : © 2026 Reflexe IA. Tous droits réservés.
```

---

## Tokens CSS à conserver (depuis Formation_prompting/site)

```css
:root {
  --primary-600: #2563eb;
  --primary-700: #1d4ed8;
  --primary-500: #3b82f6;
  --accent-500:  #8b5cf6;
  --accent-600:  #7c3aed;
  --slate-900:   #0f172a;
  --slate-800:   #1e293b;
  --sfoi-s: #22c55e;
  --sfoi-f: #eab308;
  --sfoi-o: #3b82f6;
  --sfoi-i: #a855f7;
}
```

---

## Conventions

- **Jamais "Coach IA"** — toujours "AI Practice Steward"
- **Source formation** : `Formation_prompting/audios_et_illustrations/` (pas `content/`)
- Pages courtes, texte dense, pas de remplissage marketing
- Le site existant Formation_prompting est la base technique — le réutiliser

---

## Déploiement

```yaml
# .github/workflows/deploy.yml — identique à Formation_prompting/site/.github/workflows/deploy.yml
```

`public/CNAME` : `reflexe-ia.org`
