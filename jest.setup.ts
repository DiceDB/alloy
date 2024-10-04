import '@testing-library/jest-dom';

// @ts-expect-error not all properties are required here to mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: 'success' }),
  }),
);
