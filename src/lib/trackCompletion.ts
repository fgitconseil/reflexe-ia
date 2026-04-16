import { supabase } from './supabase';

export async function trackBlocCompletion(blocId: string): Promise<void> {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return;

  await supabase.from('formation_progress').upsert({
    user_id: session.user.id,
    bloc_id: blocId,
  });
}

export function observeEndScreen(blocId: string, onComplete: () => void): void {
  const endScreen = document.getElementById(`end-${blocId}`);
  if (!endScreen) return;

  let fired = false;
  const observer = new MutationObserver(() => {
    if (!fired && endScreen.style.display !== 'none') {
      fired = true;
      onComplete();
    }
  });
  observer.observe(endScreen, { attributes: true, attributeFilter: ['style'] });
}
