import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBox from '../SearchBox';
import { DiceCmds } from '@/data/command';

// Function to get random commands
const getRandomCommands = (num: number) => {
  const keys = Object.keys(DiceCmds);
  const randomKeys: string[] = [];
  while (randomKeys.length < num) {
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    if (randomKey && !randomKeys.includes(randomKey)) {
      randomKeys.push(randomKey);
    }
  }
  console.log(randomKeys);
  return randomKeys.map((key) => DiceCmds[key as keyof typeof DiceCmds]);
};

const setupTest = () => {
  const utils = render(<SearchBox />);
  const searchInputElement = screen.getByTestId('search-input');
  const searchContainerElement = screen.getByTestId('search-container');
  return {
    searchInputElement,
    searchContainerElement,
    ...utils,
  };
};

describe('SearchBox Component', () => {
  it('should render the SearchBox component', () => {
    const { searchContainerElement } = setupTest();
    expect(searchContainerElement).toBeInTheDocument();
  });

  it('should allow input in the search field', async () => {
    const { searchInputElement } = setupTest();
    await userEvent.type(searchInputElement, 'TEST INPUT');
    expect(searchInputElement).toHaveValue('TEST INPUT');
  });

  it('should show correct results for random searches', async () => {
    const randomCommands = getRandomCommands(3); // Get random commands
    const { searchInputElement } = setupTest();

    for (const cmd of randomCommands) {
      if (cmd) {
        await userEvent.type(searchInputElement, cmd.title);

        const displayedCommands = screen.getAllByTestId('command-title');
        const commandTitles = displayedCommands.map((cmd) => cmd.textContent);
        commandTitles.forEach((title) => {
          expect(title).toContain(cmd.title);
        });

        await userEvent.clear(searchInputElement);
      }
    }
  });

  it('should show results for partial matches for random commands', async () => {
    const randomCommands = getRandomCommands(3);
    const { searchInputElement } = setupTest();

    for (const cmd of randomCommands) {
      if (cmd) {
        const partialCommand = cmd.title.slice(0, 3);
        await userEvent.type(searchInputElement, partialCommand);

        const displayedCommands = screen.getAllByTestId('command-title');
        const commandTitles = displayedCommands.map(
          (cmdElement) => cmdElement.textContent,
        );
        commandTitles.forEach((title) => {
          expect(title).toContain(partialCommand);
        });

        await userEvent.clear(searchInputElement);
      }
    }
  });

  it('should show results when search length is 0', async () => {
    expect(screen.getAllByTestId('command-title').length).toBeGreaterThan(0);
  });
});
