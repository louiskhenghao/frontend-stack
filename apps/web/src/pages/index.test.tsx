import { render, screen } from '@testing-library/react';
import Page from './index';

describe('Home', () => {
  it('renders without crashing', () => {
    render(<Page />);
    expect(screen.getByText('Next + Tailwind ❤️')).toBeInTheDocument();
  });
});
