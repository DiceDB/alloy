// src/lib/api.ts
import { SHELL_COMMAND_URL } from '@/shared/constants/apiEndpoints';

export const executeShellCommandOnServer = async (
  cmd: string,
  cmdArgs: object,
): Promise<string> => {
  try {
    const response = await fetch(`${SHELL_COMMAND_URL}/${cmd}`, {
      method: 'POST',
      body: JSON.stringify(cmdArgs),
      headers: {
        'Content-Type': 'application/json',
      },
    });

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
