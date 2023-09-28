import { getPlaiceholder } from 'plaiceholder';

import type { Photo, ImagesResult } from '@/schemas';

async function getBase64(imageUrl: string): Promise<string | undefined> {
  try {
    const res = await fetch(imageUrl);

    if (!res.ok) {
      throw new Error(`Failed to fetch image: ${res.status} ${res.statusText}`);
    }

    const buffer = await res.arrayBuffer();
    const { base64 } = await getPlaiceholder(Buffer.from(buffer));

    return base64;
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.stack);
    }
  }
}

export default async function addBlurredDataUrls(
  images: ImagesResult,
): Promise<Photo[]> {
  const base64Promises = images.photos.map((photo) =>
    getBase64(photo.src.large),
  );

  const base64Results = await Promise.all(base64Promises);

  const imagesWithBlur = images.photos.map((photo, index) => {
    photo.blurredDataUrl = base64Results[index];

    return photo;
  });

  return imagesWithBlur;
}
