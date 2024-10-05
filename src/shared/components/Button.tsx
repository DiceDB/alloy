'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline'; // Added default variant
}

export function Button({ children, className = '', variant = 'default' }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = {
    default: 'bg-gray-900 text-white hover:bg-gray-700 focus:ring-gray-400',
    outline: 'border border-gray-900 bg-transparent text-gray-900 hover:bg-gray-200 focus:ring-gray-400'
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`} // Combine all classes
    >
      {children}
    </button>
  );
}
