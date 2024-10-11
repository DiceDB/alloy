// src/shared/utils/shellUtils.ts

import { executeShellCommandOnServer } from '@/lib/api';
import { CommandHandler } from '@/types';

export const handleCommand = async ({ command, setOutput, onCommandExecuted }: CommandHandler) => {
  const newOutput = `dice > ${command}`;
  let result: any;

  const [cmd, ...args] = command.split(' ');

  if (!cmd) {
    return;
  }
  try {
    result = await executeShellCommandOnServer(cmd, args);
    setOutput((prevOutput) => [...prevOutput, newOutput, result?.body?.data]);
    const commandsLeft = result.headers['x-ratelimit-remaining'];
    const cleanupTimeLeft = 10;
    onCommandExecuted(commandsLeft, cleanupTimeLeft);
  } catch (error: unknown) {
    console.error('Error executing command:', error);
    result = 'Error executing command';
    return `Error: ${String(error)}`;
  }
};
