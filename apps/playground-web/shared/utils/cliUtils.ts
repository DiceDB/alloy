// src/shared/utils/cliUtils.ts

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
    setOutput((prevOutput) => [...prevOutput, newOutput, 'Invalid command']);
    return;
  }

  switch (cmd.toUpperCase()) {
    case 'GET':
      if (args.length < 1) {
        setOutput((prevOutput) => [
          ...prevOutput,
          newOutput,
          'Invalid command. Usage: GET key',
        ]);
        return;
      }

      try {
        const [key] = args;
        const cmdOptions = { key: key };
        result = await executeShellCommandOnServer(cmd, cmdOptions);
        handleResult({ result, newOutput, setOutput, onCommandExecuted });
      } catch (error: unknown) {
        console.error('Error executing command:', error);
        return `Error: ${String(error)}`;
      }
      break;

    case 'SET':
      if (args.length === 2) {
        const [key, value] = args;
        try {
          const cmdOptions = { key: key, value: value };
          result = await executeShellCommandOnServer(cmd, cmdOptions);
          handleResult({ result, newOutput, setOutput, onCommandExecuted });
        } catch (error: unknown) {
          console.error('Error executing command:', error);
          setOutput((prevOutput) => [
            ...prevOutput,
            newOutput,
            'Error executing command',
          ]);
          return `Error: ${String((error as Error).message || error)}`;
        }
      } else {
        setOutput((prevOutput) => [
          ...prevOutput,
          newOutput,
          'Invalid command. Usage: SET key value',
        ]);
      }
      break;

    case 'DEL':
      if (args.length <= 1) {
        const [keys] = args;
        try {
          const cmdOptions = { keys: [keys] };
          result = await executeShellCommandOnServer(cmd, cmdOptions);
          handleResult({ result, newOutput, setOutput, onCommandExecuted });
        } catch (error: unknown) {
          console.error('Error executing command:', error);
          setOutput((prevOutput) => [
            ...prevOutput,
            newOutput,
            'Error executing command',
          ]);
          return `Error: ${String((error as Error).message || error)}`;
        }
      } else {
        setOutput((prevOutput) => [
          ...prevOutput,
          newOutput,
          'Invalid command. Usage: DEL key1 key2 ....',
        ]);
      }
      break;

    default:
      setOutput((prevOutput) => [
        ...prevOutput,
        newOutput,
        `Unknown command: ${cmd}`,
      ]);
  }
};
