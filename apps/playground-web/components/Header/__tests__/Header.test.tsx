import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../Header';

const setupTest = () => {
  const utils = render(<Header />);

  const headerElement = screen.getByTestId('header');

  return {
    headerElement,
    ...utils,
  };
};

describe('Header component', () => {
  it('should render header', () => {
    const { headerElement } = setupTest();
    expect(headerElement).toBeInTheDocument();
  });
});
