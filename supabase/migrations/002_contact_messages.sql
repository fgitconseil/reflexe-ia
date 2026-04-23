-- Migration 002 — Table contact_messages
-- À exécuter dans Supabase Dashboard → SQL Editor

create table if not exists public.contact_messages (
  id uuid default gen_random_uuid() primary key,
  prenom text not null,
  nom text not null,
  email text not null,
  entreprise text,
  message text not null,
  created_at timestamptz default now()
);

alter table public.contact_messages enable row level security;

-- Insertion anonyme autorisée (pas besoin d'auth pour contacter)
create policy "Anyone can submit contact message"
  on public.contact_messages for insert
  with check (true);
