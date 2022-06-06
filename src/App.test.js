import { render, screen } from '@testing-library/react';
import App from './App';
import HomePage from './stock/Home';
import data from '../data.json';

describe('This is login page', () => {
  beforeEach(() => {
    render(<HomePage />);
  })

  test('h3 Login to access your account', () => {
    const linkElement = screen.getByText(/Price source/);
    expect(linkElement).toBeInTheDocument();
  });

  test('To check if data has changed', () => {
    const linkElement = screen.getByText(/Price source/);
    expect(linkElement).toMatchSnapshot();
  });

  test('h3 Login to access your account', () => {
    const linkElement = screen.getByText(/Ticker/);
    expect(linkElement).toBeInTheDocument();
  });

  test('To check if data has changed', () => {
    const linkElement = screen.getByText(/Ticker/);
    expect(linkElement).toMatchSnapshot();
  });

  test('select check', () => {
    const linkElement = screen.getAllByRole('select');
    fireEvent.click(linkElement);
    expect(linkElement).toHaveLength(1);
  })

  test('check Price source', () => {
    expect(data.pricesource.map(data => data.source)).toEqual([
      "SRC1",
      "SRC2"
    ]);
  })

  test('check Ticker', () => {
    expect(data.ticker.map(data => data.company)).toEqual([
      "IBM",
      "SONY"
    ]);
  })
  
  test('check SRC1 length', () => {
    expect(data.SRC1).toHaveLength(11);
  })

  test('check SRC2 length', () => {
    expect(data.SRC2).toHaveLength(11);
  })

  test('check album id', () => {
    expect(data.pricesource.map(data => data.id)).toEqual([1, 2]);
  })

  test('check', () => {
    expect(data.ticker.map(data => data.id)).toEqual([1, 2]);
  })
})