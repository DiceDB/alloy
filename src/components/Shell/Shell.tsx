// src/components/Shell/Shell.tsx
'use client';

// hooks
import { useShell } from './hooks/useShell';

interface ShellProps {
  // Changed from CliProps to ShellProps
  decreaseCommandsLeft: () => void;
}

export default function Shell({ decreaseCommandsLeft }: ShellProps) {
  // Updated interface name
  const {
    handleInputChange,
    handleKeyDown,
    terminalRef,
    inputRef,
    output,
    command,
  } = useShell(decreaseCommandsLeft);
  return (
    <div
      ref={terminalRef}
      className="flex flex-col h-full bg-gray-900 text-white font-mono text-sm overflow-auto top-0 pl-4 pb-2"
      data-testid="terminal"
      onClick={() => inputRef.current?.focus()}
    >
      {output.map((line, index) => (
        <div
          key={index}
          data-testid="terminal-output"
          className="text-white p-1"
        >
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
            data-testid="shell-input" // Changed from cli-input to shell-input
            className="w-full bg-transparent outline-none text-white"
          />
        </div>
      </div>
    </div>
  );
}
