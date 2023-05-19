import React from 'react';

export default function Tag({ children }: React.PropsWithChildren) {
  return (
    <div className="rounded-full inline-block px-4 py-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 dark:hover:text-gray-100 hover:text-gray-900 text-xs cursor-default transition-colors duration-300">
      {children}
    </div>
  );
}
