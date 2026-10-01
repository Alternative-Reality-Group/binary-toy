import { cleanup, render, screen } from '@testing-library/react';
import App from '../src/App';
import { expect, test, beforeEach, afterEach } from 'vitest'

let interaction: InstanceType<typeof HTMLElement>

beforeEach(async () =>{
  render(<App />);
  interaction = screen.getByTestId('bit-interaction');
})

afterEach(async () => {
  cleanup()
})

test('App renders BitInteraction', () => {
  expect(interaction).toBeInTheDocument();
});

test('BitInteraction is visible in DOM', () => {
  expect(interaction).toBeVisible();
});

test('Footer shows Alternative Reality Group copyright', () => {
  const year = new Date().getFullYear();
  const footer = screen.getByRole('contentinfo');
  expect(footer).toHaveTextContent(`© ${year} Alternative Reality Group. All rights reserved.`);
  const link = screen.getByRole('link', { name: 'Alternative Reality Group' });
  expect(link).toHaveAttribute('href', 'https://alternativereality.com');
});