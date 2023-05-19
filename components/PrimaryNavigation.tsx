'use client';

import Link from 'next/link';
import { useState } from 'react';
import useTheme, { Theme } from '@/hooks/useTheme';
import Modal from './Modal';

type NavigationLink = { href: string; displayText: string };

export default function PrimaryNavigation() {
  const [shouldShowMobileNav, setShouldShowMobileNav] = useState(false);
  const [theme, setTheme] = useTheme();

  const links: NavigationLink[] = [
    { displayText: 'Home', href: '/' },
    { displayText: 'Articles', href: 'articles' },
    { displayText: 'Portfolio', href: 'portfolio' },
    { displayText: 'Office', href: 'office' },
  ];

  function handleModalClose(): void {
    setShouldShowMobileNav(false);
  }

  function handleThemeToggle(): void {
    if (theme === Theme.Light) {
      setTheme(Theme.Dark);
    } else {
      setTheme(Theme.Light);
    }
  }

  return (
    <nav className="w-full flex items-center justify-between sticky top-6">
      <div className="flex-1" />
      <div className="hidden md:flex rounded-full py-2 px-5 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 dark:text-white font-medium shadow">
        <ul className="flex gap-5">
          {links.map((link) => (
            <li key={link.displayText}>
              <Link
                className="hover:text-link dark:hover:text-link-dark"
                href={link.href}
              >
                {link.displayText}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-3 justify-end items-center text-right flex-1 font-medium">
        <button
          className="inline-block md:hidden rounded-full py-2 px-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow dark:text-gray-200 dark:hover:text-white hover:bg-gray-50"
          type="button"
          onClick={() => setShouldShowMobileNav(true)}
        >
          Menu
        </button>
        <button
          className="rounded-full py-2 px-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow text-indigo-600 dark:text-yellow-100 dark:hover:text-yellow-200 hover:text-indigo-700 hover:bg-gray-50"
          type="button"
          onClick={() => handleThemeToggle()}
        >
          <i className="dark:hidden bi bi-moon-stars w-6 h-6" />
          <i className="hidden dark:inline-block bi bi-sun w-6 h-6" />
        </button>
      </div>
      <Modal
        title="Navigation"
        isVisible={shouldShowMobileNav}
        onClose={() => handleModalClose()}
      >
        <ul className="flex flex-col">
          {links.map((link) => (
            <li
              key={link.displayText}
              className="border-b border-gray-200 dark:border-gray-700 last:border-b-0"
            >
              <Link
                className="block hover:text-link py-3 dark:text-gray-200 dark:hover:text-link-dark"
                href={link.href}
                onClick={() => setShouldShowMobileNav(false)}
              >
                {link.displayText}
              </Link>
            </li>
          ))}
        </ul>
      </Modal>
    </nav>
  );
}
