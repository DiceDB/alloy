// src/components/Shell/Shell.tsx
'use client';

import React from 'react';
// hooks
import { useShell } from './hooks/useShell';
import { SyntaxPart } from '@/data/commandSyntaxMap';

interface ShellProps {
  decreaseCommandsLeft: () => void;
}

const InlineHint = ({ part }: { part: SyntaxPart }) => (
  <span className="border-b border-dotted border-gray-600">
    {' ' + part.syntax}
  </span>
);

export default function Shell({ decreaseCommandsLeft }: ShellProps) {
  const {
    handleInputChange,
    handleKeyDown,
    terminalRef,
    inputRef,
    output,
    command,
    remainingSyntax,
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
        <p className="text-green-500 mr-2 p-1 flex-shrink-0">dice ~$</p>
        <div className="flex-grow relative">
          <input
            ref={inputRef}
            type="text"
            value={command}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            data-testid="shell-input"
            className="w-full bg-transparent outline-none text-white"
          />
          <div
            className="absolute top-0 left-0 text-gray-500 pointer-events-none whitespace-wrap overflow-x-auto"
            style={{ paddingLeft: `${command.length + 1}ch ` }}
            data-testid="inline-hint"
          >
            {remainingSyntax.map((part, index) => (
              <React.Fragment key={index}>
                {index > 0}
                <InlineHint part={part} />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
