import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home Page', () => {
  it('renders headline', () => {
    render(<Home />);
    expect(screen.getByText(/Welcome to CuppaCrypto/)).toBeInTheDocument();
  });
});
