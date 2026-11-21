import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const article = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/article' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Короткое описание для поисковиков и соцсетей */
      description: z.string(),
      date: z.coerce.date(),
      authors: z.array(z.string()).default([]),
      /** Фото в шапке: 1 — на всю колонку, 2–3 — в ряд */
      cover: z.array(z.object({ src: image(), alt: z.string() })).min(1),
      coverCaption: z.string().optional(),
      /** Подписи в конце: «Текст: …», «Фото: …», «Редактор: …» */
      credits: z.array(z.string()).default([]),
    }),
});

export const collections = { article };
