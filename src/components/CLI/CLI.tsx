'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CliProps {
  output: string[];
  command: string;
  setCommand: React.Dispatch<React.SetStateAction<string>>;
  handleCommand: React.KeyboardEventHandler<HTMLInputElement>;
}

export default function Cli({ output, command, setCommand, handleCommand }: CliProps) {
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [cursorPosition, setCursorPosition] = useState(0);

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
    setCursorPosition(e.target.selectionStart || 0);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(e);
      setCursorPosition(0);
    } else {
      setTimeout(() => {
        setCursorPosition(inputRef.current?.selectionStart || 0);
      }, 0);
    }
  };

  return (
    <div
      ref={terminalRef}
      className="flex flex-col h-full bg-gray-900 text-white font-mono text-sm overflow-auto p-4"
      onClick={() => inputRef.current?.focus()}
    >
      {output.map((line, index) => (
        <div key={index} className={line.startsWith('dice >') ? 'text-gray-300' : 'text-white'}>
          {line}
        </div>
      ))}
      <div className="flex items-center">
        <span className="text-gray-200 mr-2">dice &gt; </span>
        <div className="relative flex-grow p-1">
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent border-none outline-none text-white"
          />
          <div
            className="absolute left-0 top-0 pointer-events-none whitespace-pre"
            aria-hidden="true"
          >
            {command.slice(cursorPosition)}
          </div>
        </div>
      </div>
    </div>
  );
}
