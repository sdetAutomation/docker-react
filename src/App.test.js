import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders sdetAutomation link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/This app was created by sdetAutomation. Click here for more information./i);
  expect(linkElement).toBeInTheDocument();
});
