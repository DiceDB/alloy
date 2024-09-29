// src/lib/api.ts
import { CLI_COMMAND_URL } from "@/shared/constants/apiEndpoints";

export const executeCLICommandOnServer = async (cmd: string, cmdOptions: object): Promise<string> => {
  try {
    const response = await fetch(`${CLI_COMMAND_URL}/${cmd}`, {
      method: 'POST',
      body: JSON.stringify(cmdOptions),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    if (Object.prototype.hasOwnProperty.call(data, 'value')) {
      return data.value;
    }
    else if (Object.prototype.hasOwnProperty.call(data, 'result')) {
      return data.result;
    } 
    else if (Object.prototype.hasOwnProperty.call(data, 'error')) {
      return data.error;
    }
    return data;
  } catch (error: unknown) {
    console.error('Error executing command:', error);
    return `Error: ${error}`;
  }
};