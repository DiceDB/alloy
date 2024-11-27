// src/lib/api.ts
import { WebService } from '@/services/webServices';

import { MonoResponse } from './monoResponse';

export const executeShellCommandOnServer = async (
  cmd: string,
  cmdOptions: object,
): Promise<{ headers: { [key: string]: string }; body: MonoResponse }> => {
  const cmdExecURL = `/shell/exec/${cmd}`;

  try {
    const response = await WebService.post(cmdExecURL, cmdOptions);
        // Type guard to check if the body is MonoResponse
        if ('data' in response.body) {
          const body = response?.body as MonoResponse | undefined;
          if (body?.data || body?.error) {
              return { headers: response.headers, body };
          }
          throw new Error('Unexpected response structure');
        }  else {
          throw new Error('Unexpected response structure');
        }
  } catch (error) {
    // Propagate the error from the backend exactly as it is
    console.error('Error executing command:', error);
    throw new Error(`${error}`);
  }
};


// Fetch health check data from the server
export const fetchHealthCheck = async (): Promise<{ commandsLeft: number; cleanupTimeLeft: number }> => {
  const healthCheckURL = `/health`;

  try {
    const response = await WebService.get(healthCheckURL);

    if (response?.headers) {
      const commandsLeft = parseInt(response?.headers['x-commands-left'] || '1000', 10);
      const cleanupTimeLeft = parseInt(response?.headers['x-next-cleanup-time'] || `${15 * 60}`, 10);

      return { commandsLeft, cleanupTimeLeft };
    } else {
      throw new Error('Unexpected response structure: missing headers');
    }
  } catch (error) {
    console.error('Error fetching health check data:', error);
    throw new Error(`${error}`);
  }
};
