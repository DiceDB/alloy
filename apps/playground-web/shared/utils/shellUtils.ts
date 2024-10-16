// src/shared/utils/shellUtils.ts

import { executeShellCommandOnServer } from '@/lib/api';
import { CommandHandler } from '@/types';
import { handleResult } from '@/shared/utils/commonUtils';

export const handleCommand = async ({
  command,
  setOutput,
  onCommandExecuted,
}: CommandHandler) => {
  const newOutput = `dice > ${command}`;
  let result: any;

  const [cmd, ...args] = command.split(' ');

  if (!cmd) {
    return;
  }
  try {
    result = await executeShellCommandOnServer(cmd, args);
    handleResult({ result, newOutput, setOutput, onCommandExecuted });
  } catch (error: unknown) {
    console.error('Error executing command:', error);
    result = 'Error executing command';
    return `Error: ${String(error)}`;
  }
};
