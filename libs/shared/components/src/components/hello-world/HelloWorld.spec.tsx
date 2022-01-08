import React from 'react';
import { render } from '@testing-library/react-native';

import HelloWorld from './HelloWorld';

describe('HelloWorld', () => {
  it('should render successfully', () => {
    const { container } = render(<HelloWorld />);
    expect(container).toBeTruthy();
  });
});
