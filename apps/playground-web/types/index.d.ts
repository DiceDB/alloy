import * as React from 'react';

export interface CommandHandler {
  command: string;
  setOutput: React.Dispatch<React.SetStateAction<string[]>>;
  onCommandExecuted: (commandsLeft: number, cleanupTimeLeft: number) => void;
}

export interface BlockedCommandHandler {
  command: string;
  setOutput: React.Dispatch<React.SetStateAction<string[]>>;
}
