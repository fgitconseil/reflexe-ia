-- Migration 001 — Trigger auto-création user_profile à l'inscription
-- À exécuter dans Supabase Dashboard → SQL Editor

-- 1. Fonction qui crée un user_profile à la création d'un auth.users
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.user_profiles (id, prenom, nom, entreprise, consent_contact)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'prenom', ''),
    coalesce(new.raw_user_meta_data->>'nom', ''),
    new.raw_user_meta_data->>'entreprise',
    coalesce((new.raw_user_meta_data->>'consent_contact')::boolean, true)
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

-- 2. Trigger after insert on auth.users
drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 3. Réparer les utilisateurs existants sans profile
insert into public.user_profiles (id, prenom, nom, entreprise, consent_contact)
select
  u.id,
  coalesce(u.raw_user_meta_data->>'prenom', 'Inconnu'),
  coalesce(u.raw_user_meta_data->>'nom', 'Inconnu'),
  u.raw_user_meta_data->>'entreprise',
  coalesce((u.raw_user_meta_data->>'consent_contact')::boolean, true)
from auth.users u
left join public.user_profiles p on p.id = u.id
where p.id is null;
