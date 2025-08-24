import { render, screen } from '@testing-library/react';
import NewsPage from '../app/news/page';

describe('News Page', () => {
  it('renders headline', () => {
    render(<NewsPage />);
    expect(screen.getByText(/News/)).toBeInTheDocument();
  });
});
