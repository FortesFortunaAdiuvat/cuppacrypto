import { render, screen } from '@testing-library/react';
import Home from '../app/page';

describe('Home', () => {
  it('renders headline', () => {
    render(<Home />);
    expect(screen.getByText(/CuppaCrypto/)).toBeInTheDocument();
  });
});
