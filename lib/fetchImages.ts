import { env } from './env';
import { ImagesResponseSchema, type ImagesResult } from '@/schemas';

export default async function fetchImages(
  url: string,
): Promise<ImagesResult | undefined> {
  try {
    const res = await fetch(url, {
      headers: {
        Authorization: env.PEXELS_API_KEY,
      },
    });

    if (!res.ok) throw new Error('Failed to fetch images');

    const images: ImagesResult = await res.json();

    const parsedData = ImagesResponseSchema.parse(images);

    return parsedData;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.stack);
    }
  }
}
