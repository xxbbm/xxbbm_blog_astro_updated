import { defineCollection, z } from 'astro:content';

const notesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string().default('Note'),
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
  }),
});

export const collections = {
  'notes': notesCollection,
};
