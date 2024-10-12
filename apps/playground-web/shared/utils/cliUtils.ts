// src/shared/utils/cliUtils.ts

import { executeShellCommandOnServer } from '@/lib/api';
import { CommandHandler } from '@/types';

export const handleCommand = async ({ command, setOutput, onCommandExecuted }: CommandHandler) => {
  const newOutput = `dice > ${command}`;
  let result: any;

  const [cmd, ...args] = command.split(' ');
  if (!cmd) {
    result = 'Invalid command';
    setOutput((prevOutput) => [...prevOutput, newOutput, result]);
    return;
  }

  switch (cmd.toUpperCase()) {
    case 'GET':
      if (args.length < 1) {
        result = 'Invalid command. Usage: GET key';
        setOutput((prevOutput) => [...prevOutput, newOutput, result]);
        return;
      }

      try {
        const [key] = args;
        const cmdOptions = { key: key };
        result = await executeShellCommandOnServer(cmd, cmdOptions);
        if (result?.body?.data) {
          setOutput((prevOutput) => [...prevOutput, newOutput, result?.body?.data]);
        } else if (result?.body?.error) {
          setOutput((prevOutput) => [...prevOutput, newOutput, result?.body?.error]);
        } 
        const commandsLeft = result?.headers?.['x-ratelimit-remaining'];
        const cleanupTimeLeft = 10;
        onCommandExecuted(commandsLeft, cleanupTimeLeft);
      } catch (error: unknown) {
        console.error('Error executing command:', error);
        result = 'Error executing command';
        return `Error: ${String(error)}`;
      }
      break;

    case 'SET':
      if (args.length === 2) {
        const [key, value] = args;
        try {
          const cmdOptions = { key: key, value: value };
          result = await executeShellCommandOnServer(cmd, cmdOptions);
          if (result?.body?.data) {
            setOutput((prevOutput) => [...prevOutput, newOutput, result?.body?.data]);
          } else if (result?.body?.error) {
            setOutput((prevOutput) => [...prevOutput, newOutput, result?.body?.error]);
          } 
          const commandsLeft = result?.headers?.['x-ratelimit-remaining'];
          const cleanupTimeLeft = 10;
          onCommandExecuted(commandsLeft, cleanupTimeLeft);
        } catch (error: unknown) {
          console.error('Error executing command:', error);
          result = 'Error executing command';
          setOutput((prevOutput) => [...prevOutput, newOutput, result]);
          return `Error: ${String((error as Error).message || error)}`;
        }
      } else {
        result = 'Invalid command. Usage: SET key value';
        setOutput((prevOutput) => [...prevOutput, newOutput, result]);
      }
      break;

    case 'DEL':
      if (args.length <= 1) {
        const [keys] = args;
        try {
          const cmdOptions = { keys: [keys] };
          result = await executeShellCommandOnServer(cmd, cmdOptions);
          if (result?.body?.data) {
            setOutput((prevOutput) => [...prevOutput, newOutput, result?.body?.data]);
          } else if (result?.body?.error) {
            setOutput((prevOutput) => [...prevOutput, newOutput, result?.body?.error]);
          } 
          const commandsLeft = result?.headers?.['x-ratelimit-remaining'];
          const cleanupTimeLeft = 10;
          onCommandExecuted(commandsLeft, cleanupTimeLeft);
        } catch (error: unknown) {
          console.error('Error executing command:', error);
          result = 'Error executing command';
          setOutput((prevOutput) => [...prevOutput, newOutput, result]);
          return `Error: ${String((error as Error).message || error)}`;
        }
      } else {
        result = 'Invalid command. Usage: DEL key1 key2 ....';
        setOutput((prevOutput) => [...prevOutput, newOutput, result]);
      }
      break;

    default:
      result = `Unknown command: ${cmd}`;
      setOutput((prevOutput) => [...prevOutput, newOutput, result]);
  }
};
