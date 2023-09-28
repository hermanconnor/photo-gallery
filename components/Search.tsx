'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

const Search = () => {
  const [search, setSearch] = useState<string>('');

  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) router.push(`/search/${search}`);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit} className='relative'>
      <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400'>
        <MagnifyingGlassIcon className='h-5 w-5' />
      </span>

      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='py-2 border border-gray-400 pl-10 pr-4 w-full text-gray-700 dark:text-white rounded-md focus:border-indigo-700 focus:ring-indigo-600 focus:outline-none focus:ring'
        placeholder='Search...'
      />
    </form>
  );
};
export default Search;
