import React from 'react';
import SearchBox from '../Search/SearchBox';
import { Terminal, X } from 'lucide-react';
import { useCommandContext } from '@/context/command';

const CommandPanel = () => {
  const { setIsOpen, isOpen } = useCommandContext();

  return (
    <div
      className={`h-[100vh] px-4 bg-white border-l border-gray-200 transition-all duration-300 w-[25%] fixed top-0 right-0 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex py-4 items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5" />
          <p className="text-lg font-medium">DiceDB Commands</p>
        </div>

        <button
          onClick={() => setIsOpen(false)}
          className="flex items-center hover:cursor-pointer hover:bg-gray-100 rounded-md p-1 gap-2"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      <SearchBox />
    </div>
  );
};

export default CommandPanel;
