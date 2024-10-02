// src/shared/utils/cliUtils.ts

import { executeCLICommandOnServer } from "@/lib/api";
import { CommandHandler } from "@/types";

export const handleCommand = async ({ command, setOutput }: CommandHandler) => {
  const newOutput = `dice > ${command}`;
  let result: string;

  const [cmd, ...args] = command.split(" ");

  switch (cmd.toUpperCase()) {
    case "GET":
      if (args.length < 1) {
        result = "Invalid command. Usage: GET key";
        setOutput((prevOutput) => [...prevOutput, newOutput, result]);
        return;
      }

      try {
        const [key] = args;
        const cmdOptions = { key: key };
        result = await executeCLICommandOnServer(cmd, cmdOptions);
        setOutput((prevOutput) => [...prevOutput, newOutput, result]);
      } catch (error: unknown) {
        console.error("Error executing command:", error);
        result = "Error executing command";
        return `Error: ${String(error)}`;
      }
      break;

    case "SET":
      if (args.length === 2) {
        const [key, value] = args;
        try {
          const cmdOptions = { key: key, value: value };
          result = await executeCLICommandOnServer(cmd, cmdOptions);
          setOutput((prevOutput) => [...prevOutput, newOutput, result]);
        } catch (error: unknown) {
          console.error("Error executing command:", error);
          result = "Error executing command";
          setOutput((prevOutput) => [...prevOutput, newOutput, result]);
          return `Error: ${String((error as Error).message || error)}`;
        }
      } else {
        result = "Invalid command. Usage: SET key value";
        setOutput((prevOutput) => [...prevOutput, newOutput, result]);
      }
      break;

    case "DEL":
      if (args.length <= 1) {
        const [keys] = args;
        try {
          const cmdOptions = { keys: [keys] };
          result = await executeCLICommandOnServer(cmd, cmdOptions);
          setOutput((prevOutput) => [...prevOutput, newOutput, result]);
        } catch (error: unknown) {
          console.error("Error executing command:", error);
          result = "Error executing command";
          setOutput((prevOutput) => [...prevOutput, newOutput, result]);
          return `Error: ${String((error as Error).message || error)}`;
        }
      } else {
        result = "Invalid command. Usage: DEL key1 key2 ....";
        setOutput((prevOutput) => [...prevOutput, newOutput, result]);
      }
      break;

    default:
      result = `Unknown command: ${cmd}`;
      setOutput((prevOutput) => [...prevOutput, newOutput, result]);
  }
};
