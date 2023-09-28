import { z } from 'zod';

const envSchema = z.object({
  PEXELS_API_KEY: z.string().nonempty(),
});

export const env = envSchema.parse(process.env);
