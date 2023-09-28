import Link from 'next/link';

import { ChevronLeftIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';

interface Props {
  topic: string;
  page: string | undefined;
  prevPage: string | null;
  nextPage: string | null;
}

const Footer = ({ topic, page, prevPage, nextPage }: Props) => {
  if (!prevPage && !nextPage) return;

  const pageNums: number[] = [];

  if (prevPage && nextPage) {
    for (let i = parseInt(prevPage) + 1; i < parseInt(nextPage); i++) {
      pageNums.push(i);
    }
  }

  return (
    <footer className='flex items-center justify-center py-8'>
      <ul className='flex items-center'>
        {prevPage && (
          <li>
            <Link
              href={`/search/${topic}/${prevPage}`}
              className={cn(
                'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2',
                !nextPage && 'mx-auto',
              )}
            >
              <ChevronLeftIcon className='h-5 w-5' />
              {!nextPage ? 'Back' : null}
            </Link>
          </li>
        )}

        {pageNums.map((num, i) =>
          page && num === parseInt(page) ? (
            <span
              key={i}
              className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground h-10 px-4 py-2'
            >
              {num}
            </span>
          ) : (
            <Link
              key={i}
              href={`/search/${topic}/${num}`}
              className='inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2'
            >
              {num}
            </Link>
          ),
        )}

        {nextPage && (
          <li>
            <Link
              href={`/search/${topic}/${nextPage}`}
              className={cn(
                'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2',
                !prevPage && 'mx-auto',
              )}
            >
              {!prevPage ? 'More' : null}
              <DoubleArrowRightIcon className='h-5 w-5' />
            </Link>
          </li>
        )}
      </ul>
    </footer>
  );
};

export default Footer;
