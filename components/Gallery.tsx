import PhotoContainer from './PhotoContainer';
import Footer from './Footer';
import type { ImagesResult } from '@/schemas';
import fetchImages from '@/lib/fetchImages';
import addBlurredDataUrls from '@/lib/getBase64';
import { getPrevPage, getNextPage } from '@/lib/pagination';

interface Props {
  topic?: string | undefined;
  page?: string | undefined;
}

const Gallery = async ({ topic = 'curated', page }: Props) => {
  let url;

  if (topic === 'curated' && page) {
    url = `https://api.pexels.com/v1/curated?page=${page}`;
  } else if (topic === 'curated') {
    url = 'https://api.pexels.com/v1/curated';
  } else if (!page) {
    url = `https://api.pexels.com/v1/search?query=${topic}`;
  } else {
    url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`;
  }

  const images: ImagesResult | undefined = await fetchImages(url);

  if (!images || images.per_page === 0) {
    return <h2 className='text-2xl font-black m-4'>No Images Found</h2>;
  }

  const photosWithBlur = await addBlurredDataUrls(images);
  const prevPage = getPrevPage(images);
  const nextPage = getNextPage(images);

  return (
    <>
      <section className='my-6 mx-auto columns-1 sm:columns-2 md:columns-3 xl:columns-4 gap-x-6'>
        {photosWithBlur.map((photo) => (
          <PhotoContainer key={photo.id} photo={photo} />
        ))}
      </section>

      <Footer
        topic={topic}
        page={page}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  );
};

export default Gallery;
