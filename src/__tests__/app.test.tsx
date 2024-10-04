import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Page from '../app/page'

describe('Render Page', () => {
  it('should render app component', async () => {
    render(<Page />);
    expect(screen.getByTestId('main-content')).toBeInTheDocument();
  });
});
