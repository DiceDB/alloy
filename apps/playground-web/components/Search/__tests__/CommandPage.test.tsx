import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CommandPage from '../CommandPage';
import { DiceCmdMeta } from '@/data/command';

const testCmd: DiceCmdMeta = {
  title: 'TEST',
  syntax: 'TEST key value',
  body: 'The TEST command for testing purposes.',
  url: 'https://dicedb.io/commands/test/',
};

const setupTest = () => {
  const utils = render(<CommandPage {...testCmd} />);

  const titleElement = screen.getByTestId('command-title');
  const syntaxElement = screen.getByTestId('command-syntax');
  const bodyElement = screen.getByTestId('command-body');
  const linkElement = screen.getByTestId('command-link');
  const copyButton = screen.getByTestId('copy-button');

  return {
    titleElement,
    syntaxElement,
    bodyElement,
    linkElement,
    copyButton,
    ...utils,
  };
};

// Mocking the Clipboard API
const originalClipboard = navigator.clipboard;
const mockedWriteText = jest.fn().mockResolvedValue(undefined);

const setUpClipboard = () => {
  Object.defineProperty(navigator, 'clipboard', {
    value: {
      writeText: mockedWriteText,
    },
    writable: true,
    configurable: true,
  });
};

const tearDownClipboard = () => {
  Object.assign(navigator.clipboard, originalClipboard);
  jest.restoreAllMocks();
};

describe('CommandPage Component', () => {
  beforeEach(() => {
    setUpClipboard();
  });

  afterEach(() => {
    tearDownClipboard();
  });

  it('should have testCmd Meta', () => {
    const { titleElement, syntaxElement, bodyElement, linkElement } =
      setupTest();

    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent(testCmd.title);
    expect(syntaxElement).toBeInTheDocument();
    expect(syntaxElement).toHaveTextContent(testCmd.syntax);
    expect(bodyElement).toBeInTheDocument();
    expect(bodyElement).toHaveTextContent(testCmd.body);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', testCmd.url);
  });

  it('should copy text to clipboard when copy button is clicked', async () => {
    const { copyButton } = setupTest();

    await userEvent.click(copyButton);
    expect(mockedWriteText).toHaveBeenCalledTimes(1);
    expect(mockedWriteText).toHaveBeenCalledWith(testCmd.syntax);
  });

  it('displays "Copied!" message when copy button is clicked', async () => {
    const { copyButton } = setupTest();

    await act(async () => {
      await userEvent.click(copyButton);
    });
    const copiedMessage = await screen.getByTestId('copied-message');
    expect(copiedMessage).toBeInTheDocument();

    await act(async () => {
      await new Promise((r) => setTimeout(r, 1000));
    });
    expect(copiedMessage).not.toBeInTheDocument();
  });
});
