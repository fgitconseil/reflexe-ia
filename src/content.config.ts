import { defineCollection, z } from 'astro:content';

const formation = defineCollection({
  type: 'content',
  schema: z.object({
    bloc: z.number().int().min(1).max(5),
    slug: z.string(),
    titre: z.string(),
    sous_titre: z.string().optional(),
    duree_min: z.number().int().positive(),
    badge: z.string(),
    ordre: z.number().int().positive(),
    statut: z.enum(['en-revision', 'valide', 'enregistre']),
    audio_complet: z.boolean().default(false),
    illustrations_validees: z.boolean().default(false),
    sources_archive: z.array(z.string()).default([]),
  }),
});

export const collections = {
  formation,
};
