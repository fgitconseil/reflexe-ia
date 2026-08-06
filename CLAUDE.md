# CLAUDE.md — Repo the-b-context

## Ce projet

Site Astro pour **the-b-context.com** — vitrine commerciale The B Context.

Le frontstage commercial est : Home · Formation · Interventions · Contact.
Le backstage (crédibilité / communauté) est : Framework · Mainteneurs.

Ce repo est **séparé** de `Formation_prompting` (contenu formation) et de `knowledge_extraction` (skills).

---

## Principe de base — charte graphique

**Charte graphique** : celle de `Formation_prompting/site` — light theme, blanc, Inter, gradients bleu/violet, cards, tokens CSS existants.
→ Copier tel quel `Formation_prompting/site/src/styles/global.css` comme base.
→ Ne pas adopter le dark theme Lovable.

**Structure/organisation** : celle du design Lovable (screenshots dans `03-website/design lovable/`)
→ Logo "The B Context" (pas "FGIT Conseil — Formation IA")
→ Navigation et footer : voir section dédiée ci-dessous

**Résumé** : charte graphique Formation_prompting + structure Lovable.

---

## Logo

Texte `The B Context` en lieu et place du logo FGIT Conseil.
- "The B Context" : "B" en couleur `--accent-500` (violet), reste selon le fond

---

## Stack

- Astro + Tailwind v4 (identique à `Formation_prompting/site`)
- `package.json` et `astro.config.mjs` : copier depuis `Formation_prompting/site` et adapter
- GitHub Pages via GitHub Actions
- Domaine : the-b-context.com
- `site: 'https://the-b-context.com'` dans `astro.config.mjs`

---

## Formation — réutilisation intégrale

**Le site Formation_prompting fonctionne parfaitement. Réutiliser sans tout reconstruire.**

Copier depuis `Formation_prompting/site/src/` :
- `components/SlidePlayer.astro` → à adapter si besoin
- `pages/formation/bloc-01.astro` → base pour les autres blocs
- `pages/formation/index.astro` → page liste des blocs
- `lib/slideData.ts` · `lib/slides.ts` · `lib/modules.ts`

**Seul changement sur la formation** :
- Logo et navigation mis à jour (The B Context, pas FGIT Conseil)
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
/                                   → homepage (refonte)
/formation                          → liste des 6 blocs
/formation/bloc-01 à bloc-06        → blocs formation
/interventions                      → 4 cas clients avec offres adaptées (nouveau)
/contact                            → formulaire contact + Calendly (nouveau)
/framework                          → hub Framework (3 cards : Manifeste · Méthode · APS)
/framework/manifeste                → manifeste complet
/framework/methode-sfoi             → méthode S.F.O.I.
/framework/ai-practice-steward      → rôle APS
/mainteneurs                        → page mainteneurs
/inscription, /connexion            → auth
/cgu, /politique-confidentialite, /mentions-legales → légal
```

---

## Navigation

```
Header :
  Logo : "The B Context"
  Nav  : Formation · Interventions · Framework ▾ · Mainteneurs · LinkedIn · [auth]
  CTA  : "Discuter →" → /contact

  Dropdown Framework :
    Manifeste                → /framework/manifeste
    Méthode S.F.O.I.         → /framework/methode-sfoi
    AI Practice Steward      → /framework/ai-practice-steward

Footer (3 colonnes) :
  Col 1 — Brand : logo "The B Context" + description proposition de valeur
  Col 2 — Navigation : Accueil · Formation · Interventions · Framework · Mainteneurs
  (Pas de lien LinkedIn dans le header — uniquement dans le footer)
  Col 3 — Légal : Mentions légales · CGU · Politique de confidentialité
  Bottom : © 2026 The B Context. Tous droits réservés.
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

## Positionnement commercial

Le site fonctionne sur deux niveaux :
- **Frontstage** (vente) : Home · Formation · Interventions · Contact
- **Backstage** (crédibilité / communauté) : Framework · Mainteneurs

Règles :
- Le rôle AI Practice Steward n'apparaît ni dans le hero, ni dans les titres de situation, ni dans aucune accroche : le visiteur doit reconnaître son problème avant d'avoir à décoder un nom propriétaire. Le rôle est admis dans la description de ce qui reste après une mission (page Interventions, carte "ce qui reste"), où il est le livrable tangible qui distingue la Mission Équipe. Référence : ADR-016.
- Les offres se présentent par **cas client** (4 cas), pas par palier produit
- La formation distancielle gratuite est la porte d'entrée universelle
- Le CTA commercial est **"Discuter"** (vers `/contact/`), pas "Acheter"

Source autoritaire du positionnement : `07-go-to-market/01-ICP-mission-equipe.md` (ICP v1.2).

---

## Conventions

- **Jamais "Coach IA"** — toujours "AI Practice Steward" (et uniquement en backstage)
- **IMIA ne se développe jamais en externe.** Glose canonique obligatoire à la première occurrence de chaque page publique : « IMIA, l'instrument qui mesure l'écart entre l'intention stratégique de la direction et les pratiques IA réelles ». Référence : ADR-013.
- **Un délai ne se présente jamais comme subi du fait du dispositif.** Il s'attribue à l'agenda du client ou au périmètre. Référence : ADR-015.
- **FGIT Conseil** est nommé comme entité juridique dans les mentions légales, les CGU, la politique de confidentialité, la page À propos, et dans le bloc d'attribution de marque (« The B Context est la marque de conseil de FGIT Conseil »). Cette attribution est un signal de crédibilité, elle est admise en frontstage. FGIT Conseil n'est en revanche jamais l'émetteur d'un contenu éditorial ou d'une offre.
- **Source formation** : `Formation_prompting/audios_et_illustrations/` (pas `content/`)
- Pages courtes, texte dense, pas de remplissage marketing
- Le site existant Formation_prompting est la base technique — le réutiliser

---

## Supabase — Authentification & Progression

### Variables d'environnement

```
PUBLIC_SUPABASE_URL=https://xxx.supabase.co
PUBLIC_SUPABASE_ANON_KEY=xxx
```

Créer un fichier `.env` local (non versionné). Pour GitHub Actions, ajouter ces deux variables en tant que **Repository secrets** (`Settings → Secrets → Actions`).

### Client

`src/lib/supabase.ts` — client Supabase partagé (importé dans les `<script>` côté client).
`src/lib/trackCompletion.ts` — utilitaires `trackBlocCompletion(blocId)` et `observeEndScreen(blocId, cb)`.

### Schéma (à créer manuellement dans Supabase Dashboard → SQL Editor)

```sql
-- Profils utilisateurs
create table user_profiles (
  id uuid references auth.users primary key,
  prenom text not null,
  nom text not null,
  entreprise text,
  consent_contact boolean default true,
  created_at timestamptz default now()
);

-- Progression formation
create table formation_progress (
  user_id uuid references auth.users,
  bloc_id text,
  completed_at timestamptz default now(),
  primary key (user_id, bloc_id)
);

-- RLS
alter table user_profiles enable row level security;
alter table formation_progress enable row level security;

create policy "Users manage own profile"
  on user_profiles for all using (auth.uid() = id);

create policy "Users manage own progress"
  on formation_progress for all using (auth.uid() = user_id);
```

### Trigger user_profiles (migration 001)

La création du `user_profile` est gérée côté serveur par un trigger Postgres `handle_new_user()`.
- **Ne pas faire d'insert manuel dans `user_profiles`** depuis le client.
- Passer les métadonnées dans `signUp` via `options.data` : `{ prenom, nom, entreprise, consent_contact }`.
- Le trigger lit `raw_user_meta_data` et insère avec `on conflict (id) do nothing`.
- Fonctionne avec ou sans confirmation d'email (pas de race condition).
- Migration versionnée : `supabase/migrations/001_user_profiles_trigger.sql`.

### Table contact_messages (migration 002)

Table `public.contact_messages` pour les formulaires de contact anonymes.
- Insert anonyme autorisé via policy RLS.
- Fayaz consulte manuellement dans le Dashboard Supabase.
- Migration versionnée : `supabase/migrations/002_contact_messages.sql`.

### Configuration Supabase recommandée

- **Désactiver la confirmation d'email** (Dashboard → Authentication → Settings → "Enable email confirmations" → off) pour une expérience fluide.

### Pages auth

- `/inscription` — Formulaire d'inscription (prénom, nom, email, entreprise, mot de passe, consent CGU)
- `/connexion` — Formulaire de connexion

### Flux

1. Utilisateur visite `/formation/` → redirigé vers `/inscription/?source=formation` si pas de session
2. Inscription → `signUp` avec métadonnées → trigger crée `user_profiles` → redirect `/formation/`
3. Connexion → redirect `/formation/`
4. Sur `/formation/` : charge `formation_progress`, affiche barre X/6, marque les blocs complétés
5. Sur chaque `bloc-0X` : MutationObserver sur l'écran de fin → upsert `formation_progress`
6. Sur `bloc-06` : en plus, injecte badge LinkedIn + CTA accompagnement dans l'écran de fin

---

## Déploiement

```yaml
# .github/workflows/deploy.yml — identique à Formation_prompting/site/.github/workflows/deploy.yml
```

`public/CNAME` : `the-b-context.com`
