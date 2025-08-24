import { render, screen } from '@testing-library/react';
import LearnPage from '../app/learn/page';

describe('Learn Page', () => {
  it('renders headline', () => {
    render(<LearnPage />);
    expect(screen.getByText(/Learn/)).toBeInTheDocument();
  });
});
