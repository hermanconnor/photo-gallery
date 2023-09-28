import { z } from 'zod';

// SCHEMAS
const PhotoSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  photographer: z.string(),
  photographer_url: z.string(),
  photographer_id: z.number(),
  avg_color: z.string(),
  src: z.object({
    original: z.string(),
    large2x: z.string(),
    large: z.string(),
    medium: z.string(),
    small: z.string(),
    portrait: z.string(),
    landscape: z.string(),
    tiny: z.string(),
  }),

  liked: z.boolean(),
  alt: z.string(),
  blurredDataUrl: z.string().optional(),
});

export const ImagesResponseSchema = z.object({
  page: z.number(),
  total_results: z.number(),
  photos: z.array(PhotoSchema),
  per_page: z.number(),
  prev_page: z.string().optional(),
  next_page: z.string().optional(),
});

// TYPES
export type Photo = z.infer<typeof PhotoSchema>;
export type ImagesResult = z.infer<typeof ImagesResponseSchema>;
