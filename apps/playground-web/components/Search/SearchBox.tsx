'use client';

import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { DiceCmds, DiceCmdMeta } from '@/data/command';
import CommandPage from './command';

export default function SearchBox() {
  const [search, setSearch] = useState('');
  const filteredCommands = useMemo(
    () =>
      Object.values(DiceCmds).filter((cmd: DiceCmdMeta) =>
        cmd.title.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="mb-4">
        <div className="flex items-center bg-gray-200 border border-gray-200 rounded px-2">
          <Search className="text-gray-900 mr-2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search commands..."
            className="bg-transparent border-none outline-none w-full py-2 text-gray-900 font-assistant"
          />
        </div>
      </div>
      <div className="mt-4 space-y-4 max-h-[500px] lg:max-h-[870px] xl:max-h-[890px] overflow-y-auto">
        {search.length > 1 &&
          filteredCommands.map((cmdMeta) => (
            <CommandPage
              key={cmdMeta.title}
              title={cmdMeta.title}
              syntax={cmdMeta.syntax}
              body={cmdMeta.body}
              url={cmdMeta.url}
            />
          ))}
      </div>
    </div>
  );
}
