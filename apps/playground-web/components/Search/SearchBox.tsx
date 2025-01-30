'use client';

import { useMemo, useRef, useState } from 'react';
import { Search } from 'lucide-react';
import { DiceCmds, DiceCmdMeta } from '@/data/command';
import CommandPage from './CommandPage';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);
  const filteredCommands = useMemo(
    () =>
      Object.values(DiceCmds).filter((cmd: DiceCmdMeta) =>
        cmd.title.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );

  return (
    <div
      className="h-full w-full max-w-3xl mx-auto overflow-hidden"
      data-testid="search-container"
    >
      <div className="">
        <div className="flex items-center bg-gray-200 border border-gray-200 rounded px-2">
          <Search className="text-gray-900 mr-2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search commands..."
            className="bg-transparent border-none outline-none w-full py-2 text-gray-900 font-assistant"
            data-testid="search-input"
          />
        </div>
      </div>
      <div
        ref={scrollRef}
        className="mt-4 max-w-full space-y-4 font-mono h-full pr-1 pb-[130px] mobile-scrollbar overflow-y-auto"
      >
        {filteredCommands.map((cmdMeta) => (
          <CommandPage
            key={cmdMeta.title}
            title={cmdMeta.title}
            syntax={cmdMeta.syntax}
            body={cmdMeta.body}
            url={cmdMeta.url}
            data-testid={`command-title-${cmdMeta.title}`}
          />
        ))}

        <button
          onClick={() =>
            scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
          }
          className="fixed bottom-4 right-4 bg-gray-700 hover:bg-gray-800 text-white rounded-full p-3 shadow-lg transition-all duration-300"
          aria-label="Scroll to top"
          data-testid="scroll-to-top"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
        {filteredCommands.length === 0 && <NotFoundPage />}
      </div>
    </div>
  );
}

const NotFoundPage = () => {
  return (
    <div className="w-full p-6 bg-gray-100 text-white rounded-lg shadow-lg border border-gray-700 mb-4">
      <h2 className="text-gray-700 text-2xl font-semibold mb-4">
        No matching data was found🥺
      </h2>

      <div className="flex items-center justify-between mb-4 pt-4">
        <h3 className="text-gray-700 text-l font-medium">
          Try refining your search or browse the documentation for common
          commands.
        </h3>
      </div>
      <a
        href="https://dicedb.io/commands/auth/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-300 underline font-medium transition-colors duration-200"
      >
        View Documentation
      </a>
    </div>
  );
};
