"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const Search = () => {
  const [search, setSearch] = useState<string>("");

  const router = useRouter();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) router.push(`/search/${search}`);
    setSearch("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
        <MagnifyingGlassIcon className="h-5 w-5" />
      </span>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-md border border-gray-400 py-2 pl-10 pr-4 text-gray-700 focus:border-indigo-700 focus:outline-none focus:ring focus:ring-indigo-600 dark:text-white"
        placeholder="Search..."
      />
    </form>
  );
};
export default Search;
