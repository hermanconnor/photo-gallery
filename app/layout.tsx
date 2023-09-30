import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Navbar from "@/components/Navbar";
import ThemeProvider from "@/providers/ThemeProvider";

export const revalidate = 3600; // 1hour

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Photo Gallery",
  description: "Photo gallery app using Next.js and TailwindCSS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="container">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
