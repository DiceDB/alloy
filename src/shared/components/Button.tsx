
'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'outline';
}

export function Button({ children, className }: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 ${className}`}
    >
      {children}
    </button>
  );
}