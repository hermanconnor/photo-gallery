import type { ImagesResult } from '@/schemas';

// GET PAGE NUMBER
function getPageNumber(url: string): string | null {
  const { searchParams } = new URL(url);

  return searchParams.get('page');
}

// CALCULATE TOTAL PAGES
function getTotalPages(images: ImagesResult): number {
  return images?.total_results % images.per_page
    ? Math.ceil(images.total_results / images.per_page)
    : images.total_results / images.per_page + 1;
}

// GET PREVIOUS PAGE
export function getPrevPage(images: ImagesResult): string | null {
  return images?.prev_page ? getPageNumber(images.prev_page) : null;
}

// GET NEXT PAGE
export function getNextPage(images: ImagesResult): string | null {
  let nextPage = images?.next_page ? getPageNumber(images.next_page) : null;

  const totalPages = getTotalPages(images);
  const prevPage = getPrevPage(images);

  if (prevPage && parseInt(prevPage) + 5 < totalPages) {
    nextPage = (parseInt(prevPage) + 5).toString();
  }

  if (nextPage && parseInt(nextPage) >= totalPages) {
    nextPage = null;
  }

  return nextPage;
}
