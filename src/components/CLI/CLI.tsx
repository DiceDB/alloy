// src/components/CLI/CLI.tsx
"use client";

// hooks
import { useCli } from "./hooks/useCli";

interface CliProps {
  decreaseCommandsLeft: () => void;
}

export default function Cli({ decreaseCommandsLeft }: CliProps) {
  const {
    handleInputChange,
    handleKeyDown,
    terminalRef,
    inputRef,
    output,
    command,
  } = useCli(decreaseCommandsLeft);
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
