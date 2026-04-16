import fs from 'fs';
import path from 'path';

const CONTENT_BASE = path.join(process.cwd(), 'content', 'modules');

export interface QuizOption {
  letter: string;
  text: string;
}

export interface QuizItem {
  id: string;
  question: string;
  options: QuizOption[];
  correct: string;
  explanation: string;
}

export interface Slide {
  index:        number;
  title:        string;
  keyMessage:   string;
  narration:    string;
  category:     string;
  illustration: string;
  quiz?:        QuizItem;
}

// ─── Illustration mapping ────────────────────────────────────────────────────

const ILLU_BASE = '/illustrations/';

const CATEGORY_FALLBACK: Record<string, string> = {
  intro:    'machine-learning.svg',
  partie1:  'prompt.svg',
  partie2:  'sfoi.svg',
  partie3:  'coach.svg',
};

function getIllustration(title: string, category: string): string {
  const t = title.toLowerCase();

  if (
    t.includes('risque') || t.includes('sécurité') || t.includes('donnée') ||
    t.includes('limite') || t.includes('cadre') || t.includes('responsab') ||
    t.includes('verrou') || t.includes('sensib')
  ) return ILLU_BASE + 'risques.svg';

  if (
    t.includes('prompt') || t.includes('intention') || t.includes('type') ||
    t.includes('clarif') || t.includes('demande') || t.includes('choisir') ||
    (t.includes('structur') && category === 'partie1')
  ) return ILLU_BASE + 'prompt.svg';

  if (
    t.includes('structur') || t.includes('fiabiliser') || t.includes('sfoi') ||
    t.includes('optimis') || t.includes('industrialis') || t.includes('méthode') ||
    t.includes('niveau') || t.includes('fg4') || t.includes('s.f.o.i')
  ) return ILLU_BASE + 'sfoi.svg';

  if (
    t.includes('projet') || t.includes('instruction') || t.includes('artifact') ||
    t.includes('document') || t.includes('base de connais') || t.includes('rag') ||
    t.includes('mémoire') || t.includes('connaissance')
  ) return ILLU_BASE + 'projets.svg';

  if (
    t.includes('skill') || t.includes('boucle') || t.includes('steward') ||
    t.includes('assistant') || t.includes('augment') || t.includes('constituer') ||
    t.includes('practice')
  ) return ILLU_BASE + 'coach.svg';

  return ILLU_BASE + (CATEGORY_FALLBACK[category] ?? 'machine-learning.svg');
}

// ─── keyMessage extraction ───────────────────────────────────────────────────

function extractKeyMessage(text: string): string {
  const plain = text
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\*\*([^*\n]+)\*\*/g, '$1')
    .replace(/\*([^*\n]+)\*/g, '$1')
    .replace(/^#{1,6}\s+/gm, '')
    .replace(/^>\s*/gm, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^\s*[-*+]\s+/gm, '')
    .replace(/^\s*\d+\.\s+/gm, '')
    .replace(/\n{2,}/g, '\n')
    .trim();

  if (!plain) return '';

  const sentenceRe = /[^.!?\n]*(?:[.!?](?=\s|$)|\n)/g;
  const sentences: string[] = [];
  let totalLen = 0;
  let match: RegExpExecArray | null;

  while ((match = sentenceRe.exec(plain)) !== null) {
    const s = match[0].replace(/\n/g, ' ').trim();
    if (!s || s.length < 8) continue;
    sentences.push(s);
    totalLen += s.length;
    if (totalLen >= 180 || sentences.length >= 3) break;
  }

  if (sentences.length > 0) return sentences.join(' ');

  const truncated = plain.length > 180 ? plain.slice(0, 180) : plain;
  const lastSpace = truncated.lastIndexOf(' ');
  return (plain.length > 180 && lastSpace > 80)
    ? truncated.slice(0, lastSpace) + '…'
    : truncated;
}

// ─── Main parser ─────────────────────────────────────────────────────────────

export function parseScript(relPath: string, category: string = 'intro'): Slide[] {
  const fullPath = path.join(CONTENT_BASE, relPath);
  let raw: string;
  try {
    raw = fs.readFileSync(fullPath, 'utf-8');
  } catch {
    return [];
  }

  const notesIdx = raw.indexOf('\n## Notes de production');
  if (notesIdx !== -1) raw = raw.slice(0, notesIdx);

  const lines = raw.split('\n');
  const slides: Slide[] = [];

  const slideMarkerRe = /^\*\*\[Slide(?:\s+simple)?\s*:\s*(.*?)\]\*\*$/;

  interface Chunk { title: string; startLine: number; }
  const chunks: Chunk[] = [];

  for (let i = 0; i < lines.length; i++) {
    const m = lines[i].trim().match(slideMarkerRe);
    if (m) chunks.push({ title: m[1].trim(), startLine: i + 1 });
  }

  if (chunks.length === 0) return [];

  for (let c = 0; c < chunks.length; c++) {
    const start = chunks[c].startLine;
    const end = c + 1 < chunks.length ? chunks[c + 1].startLine - 2 : lines.length;

    const bodyLines = lines.slice(start, end).filter(line => {
      const t = line.trim();
      if (t.startsWith('#')) return false;
      if (t.startsWith('**[Slide')) return false;
      if (t.startsWith('**[À caméra')) return false;
      if (t.startsWith('**[Retour caméra')) return false;
      if (t.startsWith('**[Gabarit')) return false;
      return true;
    });

    const chunkText = bodyLines.join('\n');

    const quizRe = /<!--\s*QUIZ_INLINE\s+id="([^"]+)"\s*-->([\s\S]*?)<!--\s*\/QUIZ_INLINE\s*-->/;
    const quizMatch = chunkText.match(quizRe);

    let bodyText = quizMatch ? chunkText.replace(quizRe, '').trim() : chunkText;
    const quiz = quizMatch ? parseQuizBlock(quizMatch[1], quizMatch[2]) : undefined;

    bodyText = bodyText
      .replace(/\*\*\[.*?\]\*\*/g, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim();

    if (bodyText || quiz) {
      const title = chunks[c].title;
      slides.push({
        index:        c,
        title,
        keyMessage:   extractKeyMessage(bodyText),
        narration:    bodyText,
        category,
        illustration: getIllustration(title, category),
        quiz,
      });
    }
  }

  return slides;
}

// ─── Quiz parser ─────────────────────────────────────────────────────────────

function parseQuizBlock(id: string, raw: string): QuizItem {
  const lines = raw.trim().split('\n');

  let question = '';
  const options: QuizOption[] = [];
  let correct = '';
  let explanation = '';
  let inAnswer = false;

  for (const line of lines) {
    const t = line.trim();
    if (!t) continue;

    if (!question) {
      if (t.startsWith('**Pause réflexion')) {
        const afterColon = t.replace(/^\*\*Pause réflexion\s*:\*\*\s*/i, '').replace(/\*\*/g, '').trim();
        if (afterColon) question = afterColon;
        continue;
      }
      if (t.startsWith('**') && !t.match(/^[A-D][).]/)) {
        question = t.replace(/\*\*/g, '').trim();
        continue;
      }
      if (question === '' && !t.startsWith('>') && !t.match(/^[A-D][).]/)) {
        question = t.replace(/\*\*/g, '').trim();
        continue;
      }
    }

    const optMatch = t.match(/^([A-D])[).]\s+(.+)$/);
    if (optMatch) { options.push({ letter: optMatch[1], text: optMatch[2] }); continue; }

    const answerMatch = t.match(/^>\s*\*\*Réponse\s*:\s*([A-D])\*\*/);
    if (answerMatch) {
      correct = answerMatch[1];
      inAnswer = true;
      const dashIdx = t.indexOf(' — ');
      if (dashIdx !== -1) explanation = t.slice(dashIdx + 3).replace(/\*([^*]+)\*/g, '$1').trim();
      continue;
    }

    if (inAnswer && t.startsWith('>')) {
      const more = t.replace(/^>\s*/, '').replace(/\*([^*]+)\*/g, '$1').trim();
      if (more) explanation += ' ' + more;
    }
  }

  return { id, question, options, correct, explanation };
}
