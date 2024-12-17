import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Playground from '../Playground';

const setupTest = () => {
  const utils = render(<Playground />);

  const playgroundElement = screen.getByTestId('playground');
  const playgroundHeaderElement = screen.getByTestId('playground-header');
  const playgroundMainElement = screen.getByTestId('playground-main');
  const terminalContainerElement = screen.getByTestId('terminal-container');
  const searchBoxContainerElement = screen.getByTestId('searchbox-container');
  const searchBoxWrapperElement = screen.getByTestId('searchbox-wrapper');
  const submitIssueButtonElement = screen.getByTestId('submit-issue-button');
  const submitIssueLinkElement = screen.getByTestId('submit-issue-link');
  const dicedbLinkElement = screen.getByTestId('dicedb-url-link');
  const dicedbImageElement = dicedbLinkElement.querySelector('img');

  return {
    playgroundElement,
    playgroundHeaderElement,
    playgroundMainElement,
    terminalContainerElement,
    searchBoxContainerElement,
    searchBoxWrapperElement,
    submitIssueButtonElement,
    submitIssueLinkElement,
    dicedbLinkElement,
    dicedbImageElement,
    ...utils,
  };
};

describe('Playground component', () => {
  it('renders the playground with all elements', () => {
    const {
      playgroundElement,
      playgroundHeaderElement,
      playgroundMainElement,
      terminalContainerElement,
      searchBoxContainerElement,
      searchBoxWrapperElement,
    } = setupTest();

    expect(playgroundElement).toBeInTheDocument();
    expect(playgroundHeaderElement).toBeInTheDocument();
    expect(playgroundMainElement).toBeInTheDocument();
    expect(searchBoxContainerElement).toBeInTheDocument();
    expect(searchBoxWrapperElement).toBeInTheDocument();
  });

  it('renders the "DiceDB" image', () => {
    const { dicedbLinkElement, dicedbImageElement } = setupTest();

    expect(dicedbLinkElement).toBeInTheDocument();
    expect(dicedbLinkElement).toHaveAttribute('href', 'https://dicedb.io');
    expect(dicedbLinkElement).toHaveAttribute('target', '_blank');
    expect(dicedbLinkElement).toHaveAttribute('rel', 'noopener noreferrer');

    expect(dicedbImageElement).toBeInTheDocument();
    expect(dicedbImageElement).toHaveAttribute(
      'src',
      '/images/dicedb-logo-light.png',
    );
    expect(dicedbImageElement).toHaveAttribute('alt', 'DiceDB logo');
  });

  it('renders the "Submit an Issue" button', () => {
    const { submitIssueButtonElement, submitIssueLinkElement } = setupTest();

    expect(submitIssueButtonElement).toBeInTheDocument();
    expect(submitIssueLinkElement).toBeInTheDocument();
    expect(submitIssueLinkElement).toHaveAttribute(
      'href',
      'https://github.com/DiceDB/playground-mono/issues/new/choose',
    );
    expect(submitIssueLinkElement).toHaveAttribute(
      'aria-label',
      'Submit an issue or feedback',
    );
  });
});
