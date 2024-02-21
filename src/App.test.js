import { render, screen } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('rendersLanding page in App component', () =>{
    render(<App />);
    const linkElement = screen.getByText(/Code Prep/i);
    expect(linkElement).toBeInTheDocument();
  })
});
