import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const myElem = screen.getByText('Docs');

    expect(myElem).toBeInTheDocument();
  });
});
