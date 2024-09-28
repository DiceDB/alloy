'use client';

import React from 'react';
import { Search } from 'lucide-react';
interface SearchBoxProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export default function SearchBox({ search , setSearch}: SearchBoxProps) {
  return (
    <div>
      <div className="mb-4">
        <div className="flex items-center bg-gray-100 rounded px-2">
          <Search className="text-gray-400 mr-2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search commands..."
            className="bg-transparent border-none outline-none w-full py-2 text-gray-900 placeholder-gray-500"
          />
        </div>
      </div>
      <div className="space-y-2">
        {['SET', 'GET', 'DEL'].map((cmd) => (
          <button
            key={cmd}
            className="w-full text-left bg-gray-700 hover:bg-gray-600 rounded p-2 transition-colors"
          >
            {cmd}
          </button>
        ))}
      </div>
    </div>
  );
}