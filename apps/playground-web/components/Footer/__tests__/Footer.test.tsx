import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

const setupTest = () => {
  const utils = render(<Footer />);

  const footerElement = screen.getByTestId('footer');
  const headingElement = screen.getByTestId('footer-heading');
  const getStartedLinkElement = screen.getByTestId('get-started-link');
  const getStartedButtonElement = screen.getByTestId('get-started-button');
  const githubLinkElement = screen.getByTestId('github-link');
  const githubButtonElement = screen.getByTestId('github-button');
  const quickStartLinkElement = screen.getByTestId('quickstart-link');
  const commandsLinkElement = screen.getByTestId('commands-link');
  const examplesLinkElement = screen.getByTestId('examples-link');
  const leaderboardLinkElement = screen.getByTestId('leaderboard-link');
  const contactLinkElement = screen.getByTestId('contact-link');
  const peopleIconLinkElement = screen.getByTestId('people-icon-link');
  const twitterIconLinkElement = screen.getByTestId('twitter-icon-link');
  const githubIconLinkElement = screen.getByTestId('github-icon-link');

  return {
    footerElement,
    headingElement,
    getStartedLinkElement,
    getStartedButtonElement,
    githubLinkElement,
    githubButtonElement,
    quickStartLinkElement,
    commandsLinkElement,
    examplesLinkElement,
    leaderboardLinkElement,
    contactLinkElement,
    peopleIconLinkElement,
    twitterIconLinkElement,
    githubIconLinkElement,
    ...utils,
  };
};

describe('Footer component', () => {
  it('renders the footer component', () => {
    const {
      footerElement,
      headingElement,
      getStartedLinkElement,
      getStartedButtonElement,
      githubLinkElement,
      githubButtonElement,
      quickStartLinkElement,
      commandsLinkElement,
      examplesLinkElement,
      leaderboardLinkElement,
      contactLinkElement,
      peopleIconLinkElement,
      twitterIconLinkElement,
      githubIconLinkElement,
    } = setupTest();

    // Assert footer and its heading are present
    expect(footerElement).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent('DiceDB');

    // Assert 'Get Started' button and link
    expect(getStartedLinkElement).toBeInTheDocument();
    expect(getStartedButtonElement).toBeInTheDocument();
    expect(getStartedLinkElement).toHaveAttribute(
      'href',
      'https://dicedb.io/get-started/installation/',
    );

    // Assert GitHub button and link
    expect(githubLinkElement).toBeInTheDocument();
    expect(githubButtonElement).toBeInTheDocument();
    expect(githubLinkElement).toHaveAttribute(
      'href',
      'https://github.com/dicedb/dice',
    );

    // Assert developer section links
    expect(quickStartLinkElement).toBeInTheDocument();
    expect(quickStartLinkElement).toHaveAttribute(
      'href',
      'https://dicedb.io/get-started/installation',
    );

    expect(commandsLinkElement).toBeInTheDocument();
    expect(commandsLinkElement).toHaveAttribute(
      'href',
      'https://dicedb.io/commands/get',
    );

    expect(examplesLinkElement).toBeInTheDocument();
    expect(examplesLinkElement).toHaveAttribute(
      'href',
      'https://github.com/DiceDB/dice/tree/master/examples/leaderboard-go',
    );

    // Assert examples section link
    expect(leaderboardLinkElement).toBeInTheDocument();
    expect(leaderboardLinkElement).toHaveAttribute(
      'href',
      'https://github.com/DiceDB/dice/tree/master/examples/leaderboard-go',
    );

    // Assert social media and contact section
    expect(contactLinkElement).toBeInTheDocument();
    expect(contactLinkElement).toHaveAttribute(
      'href',
      'mailto:arpit@dicedb.io',
    );

    expect(peopleIconLinkElement).toBeInTheDocument();
    expect(peopleIconLinkElement).toHaveAttribute(
      'href',
      'https://discord.gg/6r8uXWtXh7',
    );

    expect(twitterIconLinkElement).toBeInTheDocument();
    expect(twitterIconLinkElement).toHaveAttribute(
      'href',
      'https://twitter.com/thedicedb',
    );

    expect(githubIconLinkElement).toBeInTheDocument();
    expect(githubIconLinkElement).toHaveAttribute(
      'href',
      'https://github.com/dicedb/dice',
    );
  });
});
