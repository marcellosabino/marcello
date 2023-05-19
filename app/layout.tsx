import PrimaryNavigation from '@/components/PrimaryNavigation';
import './globals.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Marcello Sabino - Software Engineer, Runner, and Practical Stoic',
  description:
    'Marcello Sabino is a software engineer, runner, and practical stoic based in Connecticut.',
};

type RootLayoutType = { children: React.ReactNode };

export default function RootLayout({ children }: RootLayoutType) {
  return (
    <html lang="en" className="w-full h-full">
      <body className="bg-gray-100 dark:bg-gray-900">
        <div className="bg-gradient container min-h-screen bg-white dark:bg-gray-800 border-x border-gray-200 dark:border-gray-700 px-6 md:px-12">
          <header className="relative">
            <PrimaryNavigation />
            <Link href="./">
              <Image
                className="inline-block rounded-full w-28 h-28 md:w-32 md:h-32"
                src="/images/marcello.jpg"
                alt="Marcello"
                width={128}
                height={128}
              />
            </Link>
          </header>
          <main className="my-5">{children}</main>
          <footer className="flex flex-col md:flex-row justify-center md:justify-between mt-8 pt-8 pb-16 border-t border-gray-200 dark:border-gray-700 dark:text-gray-500 text-gray-400 gap-3">
            <div className="text-center md:text-left">
              <a
                className="font-bold hover:text-link dark:hover:text-link-dark"
                href="mailto:hey@marcello.codes"
              >
                hey@marcello.codes
              </a>
            </div>
            <div className="text-sm text-center md:text-right">
              &copy; 2023 Marcello Sabino
              <br />
              All Rights Reserved.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
