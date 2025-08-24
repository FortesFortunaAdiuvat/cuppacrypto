import { render, screen } from '@testing-library/react';
import ShopPage from '../app/shop/page';

describe('Shop Page', () => {
  it('renders headline', () => {
    render(<ShopPage />);
    expect(screen.getByText(/Shop/)).toBeInTheDocument();
  });
});
