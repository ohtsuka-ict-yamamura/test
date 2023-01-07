import { render, screen } from '@testing-library/react';
import Home from '@/pages/index';

it('displays `hello, world', () => {
  render(<Home />);

  const text = screen.getByText(/hello, world/i);

  expect(text).toBeInTheDocument();
});
