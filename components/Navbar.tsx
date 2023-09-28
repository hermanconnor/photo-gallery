import Link from 'next/link';
import { Lobster } from 'next/font/google';

import Search from '@/components/Search';
import ThemeSwitcher from '@/components/ThemeSwitcher';
import { cn } from '@/lib/utils';

const lobster = Lobster({ subsets: ['latin'], weight: '400' });

export default function Navbar() {
  return (
    <header className='sticky top-0 z-10 bg-neutral-700 dark:bg-neutral-800 text-white dark:text-gray-200 shadow-md'>
      <nav className='container py-4 flex flex-col items-center sm:flex-row justify-between space-y-4 sm:space-y-0'>
        <h1
          className={cn(
            'text-2xl sm:text-3xl text-center whitespace-nowrap',
            lobster.className,
          )}
        >
          <Link href='/'>Photo Gallery</Link>
        </h1>

        <div className='flex items-center space-x-6'>
          <Search />

          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
