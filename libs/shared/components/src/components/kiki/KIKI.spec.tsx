import React from 'react';
import { render } from '@testing-library/react-native';

import KIKI from './KIKI';

describe('KIKI', () => {
  it('should render successfully', () => {
    const { container } = render(<KIKI />);
    expect(container).toBeTruthy();
  });
});
