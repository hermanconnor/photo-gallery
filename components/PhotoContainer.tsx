import Link from 'next/link';
import Image from 'next/image';

import type { Photo } from '@/schemas';

interface Props {
  photo: Photo;
}

const PhotoContainer = ({ photo }: Props) => {
  return (
    <div className='w-full mb-6 rounded-xl overflow-hidden break-inside-avoid group shadow relative'>
      <Link href={photo.url} target='_blank' rel='noreferrer noopener'>
        <Image
          src={photo.src.large}
          alt={photo.alt}
          height={photo.height}
          width={photo.width}
          placeholder='blur'
          blurDataURL={photo.blurredDataUrl}
          className='max-w-full group-hover:opacity-75 transition-opacity duration-300'
        />
      </Link>
      <div className='absolute bottom-0 left-0 right-0 px-4 py-3 text-white bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300'>
        <div className='flex justify-between w-full'>
          <p>
            <Link
              href={photo.photographer_url}
              target='_blank'
              rel='noreferrer noopener'
            >
              <span className='block text-sm'>Photographer</span>
              {photo.photographer}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoContainer;
