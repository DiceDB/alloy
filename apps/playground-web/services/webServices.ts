let PLAYGROUND_MONO_URL = process.env.NEXT_PUBLIC_PLAYGROUND_MONO_URL;

if (!PLAYGROUND_MONO_URL) {
  console.warn(
    'Warning: NEXT_PUBLIC_PLAYGROUND_MONO_URL is not defined. Defaulting to http://localhost:8080',
  );
  PLAYGROUND_MONO_URL = 'http://localhost:8080';
}

type HeadersType = {
  [key: string]: string;
};

type RequestOptions = {
  method: string;
  headers: Record<string, string>;
  body?: string; // Optional body, because not all requests will have one
};

export const WebService = {
  request: async (
    url: string,
    method: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any = null,
    headers: HeadersType,
  ) => {
    const options: RequestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
    };

    // Only add 'body' if the method is not GET and if data is present
    if (data && method !== 'GET') {
      options.body = JSON.stringify(data);
    }

    try {
      const response = await fetch(`${PLAYGROUND_MONO_URL}${url}`, options);

      const headers: { [key: string]: string } = {};
      response?.headers?.forEach((value: string, key: string) => {
        headers[key] = value;
      });

      // Parse the result as JSON
      const body = await response.json();
      return { headers: headers, body: body };
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Error with ${method} request: ${error.message}`);
      }
      throw error;
    }
  },

  get: (url: string, headers: HeadersType = {}) => {
    return WebService.request(url, 'GET', null, headers);
  },

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post: (url: string, data: any, headers: HeadersType = {}) => {
    return WebService.request(url, 'POST', data, headers);
  },
};
