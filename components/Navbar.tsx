import Link from "next/link";
import { Lobster } from "next/font/google";

import Search from "@/components/Search";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { cn } from "@/lib/utils";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 bg-neutral-700 shadow-md dark:bg-neutral-800">
      <nav className="container flex flex-col items-center justify-between space-y-4 py-4 sm:flex-row sm:space-y-0">
        <h1
          className={cn(
            "whitespace-nowrap text-center text-2xl sm:text-3xl",
            lobster.className,
          )}
        >
          <Link href="/" className="text-white">
            Photo Gallery
          </Link>
        </h1>

        <div className="flex items-center space-x-6">
          <Search />

          <ThemeSwitcher />
        </div>
      </nav>
    </header>
  );
}
