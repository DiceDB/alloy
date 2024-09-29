'use client';

import React, { useEffect, useRef, useState } from 'react';

interface CliProps {
  decreaseCommandsLeft: () => void; // Add prop for decreasing commands left
}

export default function Cli({ decreaseCommandsLeft }: CliProps) {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [store, setStore] = useState<{ [key: string]: string }>({});

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const newOutput = `dice ~$ ${command}`;
      let result = "";
      const [cmd, ...args] = command.split(" ");

      switch (cmd.toUpperCase()) {
        case "GET":
          result = store[args[0]] || "(nil)";
          break;
        case "SET":
          if (args.length === 2) {
            const [key, value] = args;
            setStore((prevStore) => ({ ...prevStore, [key]: value }));
            result = "OK";
          } else {
            result = "Invalid command. Usage: SET key value";
          }
          break;
        case "CLEAR":
          setOutput([]);
          setCommand("");
          return;
        case "":
          setCommand("");
          return;
        default:
          setCommand("");
          return;
      }

      setOutput((prevOutput) => [...prevOutput, newOutput, result]);
      setCommand("");
      decreaseCommandsLeft(); // Decrease the command count
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
      handleCommand(e);
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
