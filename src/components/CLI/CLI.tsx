// src/components/CLI/CLI.tsx

'use client';

import React, { useEffect, useRef, useState } from 'react';
import { handleCommand } from '@/shared/utils/cliUtils';

interface CliProps {
  decreaseCommandsLeft: () => void;
}

export default function Cli({ decreaseCommandsLeft }: CliProps) {
  const [command, setCommand] = useState("");
  const [tempCommand, settempCommand] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  //Initialise the command history with sessionStorage
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);

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

  //Load initial command history if present
  useEffect(() => {
    const savedHistory = sessionStorage.getItem('terminalHistory');
    const commandHistory = savedHistory ? JSON.parse(savedHistory) : [];
    setCommandHistory(commandHistory);
  }, [])

  // Save to session storage whenever commandHistory changes
  useEffect(() => {
    sessionStorage.setItem('terminalHistory', JSON.stringify(commandHistory));
  }, [commandHistory]);


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
      setCommandHistory(prev => [...prev, command]);
      setHistoryIndex(-1);
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        if (historyIndex === -1) {
          // Save current input when starting to navigate history
          settempCommand(command);
        }
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > -1) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        if (newIndex === -1) {
          // Restore the saved input when reaching the bottom
          setCommand(tempCommand);
        } else {
          setCommand(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      }
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
