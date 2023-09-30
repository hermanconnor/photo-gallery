import Link from "next/link";
import Image from "next/image";

import type { Photo } from "@/schemas";

interface Props {
  photo: Photo;
}

const PhotoContainer = ({ photo }: Props) => {
  return (
    <div className="group relative mb-6 w-full break-inside-avoid overflow-hidden rounded-xl shadow">
      <Link href={photo.url} target="_blank" rel="noreferrer noopener">
        <Image
          src={photo.src.large}
          alt={photo.alt}
          height={photo.height}
          width={photo.width}
          placeholder="blur"
          blurDataURL={photo.blurredDataUrl}
          className="max-w-full transition-opacity duration-300 group-hover:opacity-75"
        />
      </Link>
      <div className="absolute bottom-0 left-0 right-0 bg-black/40 px-4 py-3 text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
        <div className="flex w-full justify-between">
          <p>
            <Link
              href={photo.photographer_url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="block text-sm">Photographer</span>
              {photo.photographer}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoContainer;
