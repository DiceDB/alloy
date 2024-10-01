// src/components/CLI/CLI.tsx

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { handleCommand } from '@/shared/utils/cliUtils';

interface CliProps {
  decreaseCommandsLeft: () => void;
}

export default function Cli({ decreaseCommandsLeft }: CliProps) {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleCommandWrapper = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand({ command, setOutput });
      setCommand("");
      decreaseCommandsLeft();
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommand(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommandWrapper(e);
    }
  };

  return (
    <div
      ref={terminalRef}
      className="flex flex-col h-full bg-gray-900 text-white font-mono text-sm overflow-auto top-0 pl-4 pb-2"
      onClick={() => inputRef.current?.focus()}
    >
      {output.map((line, index) => (
        <div key={index} className="text-white p-1">
          {line}
        </div>
      ))}
      <div className="flex items-center">
        <p className="text-green-500 mr-2 p-1">dice ~$</p>
        <div className="flex-grow">
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent outline-none text-white"
          />
        </div>
      </div>
    </div>
  );
}
