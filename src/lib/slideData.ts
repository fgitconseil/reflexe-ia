import { parseScript } from './slides';
import type { Slide } from './slides';

export interface BlocConfig {
  id:          string;
  ordre:       number;
  titre:       string;
  phase:       string;
  desc:        string;
  duree:       string;
  category:    string;
  scriptPath:  string;
  takeawayPath?: string;
  phaseColor:  string;
  tagColor:    string;  // CSS class for tag background
}

export const BLOCS: BlocConfig[] = [
  {
    id: 'bloc-01', ordre: 1,
    titre: "Comprendre l'IA Gen",
    phase: 'Comprendre', phaseColor: 'bg-blue-600', tagColor: 'bg-blue-100 text-blue-700',
    desc: "Ce qu'est vraiment un LLM : moteur de prédiction, pas de vérité. Mécanisme, cut-off, hallucinations.",
    category: 'intro', duree: '~20 min',
    scriptPath: 'Intro/01-comprendre-ia/script-v4.md',
  },
  {
    id: 'bloc-02', ordre: 2,
    titre: 'Risques, cadre et responsabilités',
    phase: 'Comprendre', phaseColor: 'bg-blue-600', tagColor: 'bg-blue-100 text-blue-700',
    desc: "Les 3 risques professionnels réels — exfiltration, réputationnel, industrialisation prématurée. Les règles simples pour ne pas les subir.",
    category: 'intro', duree: '~20 min',
    scriptPath: 'Intro/02-risques-cadre/script-v4.md',
    takeawayPath: 'Intro/03-langage-commun/checklist-v3.md',
  },
  {
    id: 'bloc-03', ordre: 3,
    titre: 'Choisir son prompt',
    phase: 'Choisir', phaseColor: 'bg-green-600', tagColor: 'bg-green-100 text-green-700',
    desc: "Les 4 intentions de prompt — Production, Exploration, Structuration, Vérification. Un mauvais type génère une mauvaise réponse.",
    category: 'partie1', duree: '~20 min',
    scriptPath: 'Partie1/01-choisir-son-prompt/script-v6.md',
    takeawayPath: 'Partie1/01-choisir-son-prompt/memo-takeaway-v1.md',
  },
  {
    id: 'bloc-04', ordre: 4,
    titre: 'La méthode S.F.O.I.',
    phase: 'Méthode', phaseColor: 'bg-amber-500', tagColor: 'bg-amber-100 text-amber-700',
    desc: "🟢 Structurer · 🟡 Fiabiliser · 🔵 Optimiser · 🟣 Industrialiser. Cas appliqué en conditions réelles.",
    category: 'partie2', duree: '~20 min',
    scriptPath: 'Partie2/01-methode-fg4/script-v7.md',
    takeawayPath: 'Partie2/01-methode-fg4/memo-takeaway-v1.md',
  },
  {
    id: 'bloc-05', ordre: 5,
    titre: 'Projets, instructions et documents',
    phase: 'Outiller', phaseColor: 'bg-green-600', tagColor: 'bg-green-100 text-green-700',
    desc: "Ne plus repartir de zéro. Projets persistants, Artifacts exploitables, Instructions de Projet pour capitaliser son contexte métier.",
    category: 'partie1', duree: '~20 min',
    scriptPath: 'Partie1/02-projets-instructions/script-v6.md',
    takeawayPath: 'Partie1/02-projets-instructions/memo-takeaway-v1.md',
  },
  {
    id: 'bloc-06', ordre: 6,
    titre: "Ce qu'un assistant augmenté change",
    phase: 'Conclusion', phaseColor: 'bg-purple-600', tagColor: 'bg-purple-100 text-purple-700',
    desc: "Skills, responsabilité déplacée, boucle amplificatrice et reddition cognitive. Ce que la formation individuelle ne résout pas.",
    category: 'partie3', duree: '~15 min',
    scriptPath: 'Partie3/04-skills-coach-ia/script-v3.md',
  },
];

// Takeaway URL mapping (public HTML files)
export const TAKEAWAY_URLS: Record<string, string> = {
  'bloc-02': '/takeaways/takeaway-intro-checklist.html',
  'bloc-03': '/takeaways/takeaway-p1-01-4types.html',
  'bloc-04': '/takeaways/takeaway-p2-01-sfoi.html',
  'bloc-05': '/takeaways/takeaway-p1-02-projets.html',
};

export function getSlidesForBloc(blocId: string): Slide[] {
  const bloc = BLOCS.find(b => b.id === blocId);
  if (!bloc) return [];
  return parseScript(bloc.scriptPath, bloc.category);
}

export function getBlocByIndex(ordre: number): BlocConfig | undefined {
  return BLOCS.find(b => b.ordre === ordre);
}
