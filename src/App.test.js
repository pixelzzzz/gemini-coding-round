import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders homepage with create watchlist button', () => {
  render(<App />);
  const isCreateWatchlistButtonPresent = screen.getByText(/Create Watchlist/i);
  expect(isCreateWatchlistButtonPresent).toBeInTheDocument();
});

test('renders add cryptos in watchlist modal', () => {
  render(<App />);
  const createWatchlistButton = screen.getByRole('button');
  fireEvent.click(createWatchlistButton);
  const watchlistNameHeading = screen.getByText(/Watchlist name/i);
  expect(watchlistNameHeading).toBeInTheDocument();
});

test('Create a watchlist', () => {
  render(<App />);
  const createWatchlistModalButton = screen.getByRole('button');
  fireEvent.click(createWatchlistModalButton);
  const watchlistNameInput = screen.getByLabelText(/Watchlist name/i);
  fireEvent.change(watchlistNameInput, { target: { value: 'BTC Watchlist' } })
  const btcAddButton = screen.getAllByRole('button', {
    name: /Add/i
  })[0]
  fireEvent.click(btcAddButton);
  const createWatchlistButton = screen.getAllByRole('button', {
    name: /Create Watchlist/i
  })[1]
  fireEvent.click(createWatchlistButton);
  const watchlistName = screen.getByText(/BTC Watchlist/i);
  expect(watchlistName).toBeInTheDocument();
});
