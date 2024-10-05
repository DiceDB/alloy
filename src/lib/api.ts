// src/lib/api.ts
import { SHELL_COMMAND_URL } from '@/shared/constants/apiEndpoints'; // Updated constant name

export const executeShellCommandOnServer = async (
  // Updated function name
  cmd: string,
  cmdOptions: object,
): Promise<string> => {
  try {
    const response = await fetch(`${SHELL_COMMAND_URL}/${cmd}`, {
      // Updated constant name
      method: 'POST',
      body: JSON.stringify(cmdOptions),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // TODO: This needs to be looked at
    const data = await response.json();
    if (Object.prototype.hasOwnProperty.call(data, 'data')) {
      return data.data;
    } else if (Object.prototype.hasOwnProperty.call(data, 'error')) {
      return data.error;
    }

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return data;
  } catch (error: unknown) {
    console.error('Error executing command:', error);
    return `Error: ${error}`;
  }
};
