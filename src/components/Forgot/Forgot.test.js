import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Forgot from './Forgot';

describe('<Forgot />', () => {
  test('it should mount', () => {
    render(<Forgot />);
    
    const forgot = screen.getByTestId('Forgot');

    expect(forgot).toBeInTheDocument();
  });
});