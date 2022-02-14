import { render, screen } from '@testing-library/react';
import { DashboardScreen } from './index';

describe('Dashboard', () => {
  it('renders without crashing', () => {
    render(<DashboardScreen />);
    expect(screen.getByText('Next + Tailwind ❤️')).toBeInTheDocument();
  });
});
