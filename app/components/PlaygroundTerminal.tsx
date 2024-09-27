'use client';

import { useEffect, useRef } from 'react';
import { Dice1 } from 'lucide-react';

interface PlaygroundTerminalProps {
  output: string[];
  command: string;
  setCommand: (value: string) => void;
  handleCommand: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export default function PlaygroundTerminal({ output, command, setCommand, handleCommand }: PlaygroundTerminalProps) {
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="flex-grow flex flex-col">
      <div ref={terminalRef} className="flex-grow overflow-auto mb-4 font-mono">
        {output.map((line, index) => (
          <div key={index} className={line.startsWith('dice>') ? 'text-blue-400' : 'text-green-400'}>
            {line}
          </div>
        ))}
      </div>
      <div className="flex items-center bg-gray-700 rounded px-2 mb-4">
        <Dice1 className="w-4 h-4 text-green-500 mr-2" />
        <span className="text-green-500">dice&gt;</span>
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          onKeyDown={handleCommand}
          placeholder="Enter DiceDB command..."
          className="bg-transparent border-none outline-none w-full py-2 text-white placeholder-gray-500 ml-2"
        />
      </div>
    </div>
  );
}