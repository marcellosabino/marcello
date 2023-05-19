/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import React from 'react';

export default function Modal({
  title,
  children,
  isVisible,
  onClose,
}: {
  title: string;
  isVisible: boolean;
  onClose: Function;
  children: React.ReactNode;
}) {
  function handleClose(event: MouseEvent | any) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  if (!isVisible) {
    return <div />;
  }

  return (
    <div
      role="dialog"
      className="z-50 fixed top-0 left-0 h-screen w-full bg-gray-600/50 dark:bg-gray-700/50 backdrop-blur-md"
      onClick={(event) => handleClose(event)}
    >
      <div className="absolute top-6 flex w-full px-6">
        <div className="flex flex-col gap-3 mx-auto md:max-w-xl w-full bg-white dark:bg-gray-900 p-5 rounded-lg shadow-lg">
          <div className="flex justify-between text-xl w-full">
            <h1 className="font-medium">{title}</h1>
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              onClick={() => onClose()}
            >
              <i className="bi bi-x-lg" />
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
