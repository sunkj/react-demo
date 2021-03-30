import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders CI/CD react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/CI\/CD/i);
  expect(linkElement).toBeInTheDocument();
});
