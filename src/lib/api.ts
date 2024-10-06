// src/lib/api.ts
import { WebService } from '@/services/webService';

export const executeShellCommandOnServer = async (
  cmd: string,
  cmdOptions: object,
) => {
  try {
    const response = await WebService.post(`shell/exec`, cmdOptions);
    // TODO: This needs to be looked at
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
