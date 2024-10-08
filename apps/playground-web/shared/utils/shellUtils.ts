// src/shared/utils/shellUtils.ts

import { executeShellCommandOnServer } from '@/lib/api';
import { CommandHandler } from '@/types';

export const handleCommand = async ({ command, setOutput }: CommandHandler) => {
  const newOutput = `dice > ${command}`;
  let result: string;

  const [cmd, ...args] = command.split(' ');

  if (!cmd) {
    return;
  }
  try {
    result = await executeShellCommandOnServer(cmd, args);
    setOutput((prevOutput) => [...prevOutput, newOutput, result]);
  } catch (error: unknown) {
    console.error('Error executing command:', error);
    result = 'Error executing command';
    return `Error: ${String(error)}`;
  }
};
