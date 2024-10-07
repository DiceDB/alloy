// src/lib/api.ts
import { WebService } from '@/services/webServices';

export const executeShellCommandOnServer = async (
  cmd: string,
  cmdOptions: object,
) => {
  const cmdExecURL = `/shell/exec/${cmd}`;

  try {
    const response = await WebService.post(cmdExecURL, cmdOptions);
    if (response?.data) {
      return response.data;
    } else {
      throw new Error('Unexpected response structure');
    }
  } catch (error: unknown) {
    console.error('Error executing command:', error);
    return `Error: ${error}`;
  }
};
