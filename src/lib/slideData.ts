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
    titre: "Comprendre l'IA générative",
    phase: 'Comprendre', phaseColor: 'bg-blue-600', tagColor: 'bg-blue-100 text-blue-700',
    desc: "Le moteur LLM, la plateforme et ce qui change. Mécanisme de prédiction, hallucinations, date de coupure.",
    category: 'intro', duree: '~14 min',
    scriptPath: 'Intro/01-comprendre-ia/script-v4.md',
  },
  {
    id: 'bloc-02', ordre: 2,
    titre: 'Risques, cadre et responsabilités',
    phase: 'Comprendre', phaseColor: 'bg-blue-600', tagColor: 'bg-blue-100 text-blue-700',
    desc: "Les 3 risques professionnels — exfiltration, réputationnel, industrialisation prématurée. Les règles simples pour ne pas les subir.",
    category: 'intro', duree: '~16 min',
    scriptPath: 'Intro/02-risques-cadre/script-v4.md',
    takeawayPath: 'Intro/03-langage-commun/checklist-v3.md',
  },
  {
    id: 'bloc-03', ordre: 3,
    titre: 'Choisir son prompt',
    phase: 'Choisir', phaseColor: 'bg-green-600', tagColor: 'bg-green-100 text-green-700',
    desc: "Quatre intentions, quatre gabarits — Exploration, Structuration, Production, Vérification. Un mauvais type génère une mauvaise réponse.",
    category: 'partie1', duree: '~18 min',
    scriptPath: 'Partie1/01-choisir-son-prompt/script-v6.md',
    takeawayPath: 'Partie1/01-choisir-son-prompt/memo-takeaway-v1.md',
  },
  {
    id: 'bloc-04', ordre: 4,
    titre: 'La méthode S.F.O.I.',
    phase: 'Méthode', phaseColor: 'bg-amber-500', tagColor: 'bg-amber-100 text-amber-700',
    desc: "Quatre actes pour travailler avec un assistant IA — Structurer, Fiabiliser, Optimiser, Industrialiser. Cas appliqué en conditions réelles.",
    category: 'partie2', duree: '~18 min',
    scriptPath: 'Partie2/01-methode-fg4/script-v7.md',
    takeawayPath: 'Partie2/01-methode-fg4/memo-takeaway-v1.md',
  },
  {
    id: 'bloc-05', ordre: 5,
    titre: "Ce qu'un assistant augmenté change",
    phase: 'Ouverture', phaseColor: 'bg-purple-600', tagColor: 'bg-purple-100 text-purple-700',
    desc: "De la méthode personnelle à la maturité organisationnelle. Boucles systémiques, IMIA, et le rôle d'AI Practice Steward.",
    category: 'partie3', duree: '~22 min',
    scriptPath: 'Partie3/04-skills-coach-ia/script-v3.md',
  },
];

// Takeaway PDF mapping
export const TAKEAWAY_URLS: Record<string, string> = {
  'bloc-02': '/assets/takeaways/Takeaway-Bloc-02-Risques-cadre-responsabilites.pdf',
  'bloc-03': '/assets/takeaways/Takeaway-Bloc-03-Choisir-son-prompt.pdf',
  'bloc-04': '/assets/takeaways/Takeaway-Bloc-04-Methode-SFOI.pdf',
};

export function getSlidesForBloc(blocId: string): Slide[] {
  const bloc = BLOCS.find(b => b.id === blocId);
  if (!bloc) return [];
  return parseScript(bloc.scriptPath, bloc.category);
}

export function getBlocByIndex(ordre: number): BlocConfig | undefined {
  return BLOCS.find(b => b.ordre === ordre);
}
