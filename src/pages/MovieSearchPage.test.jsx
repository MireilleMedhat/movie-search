import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MovieSearchPage from './MovieSearchPage';
import * as useSearch from '../hooks/useSearch';

describe('Movie Search Page', () => {
  it('renders movie search page', () => {
    render(<MovieSearchPage />);
    expect(screen.getByTestId('movie-search-page')).toBeInTheDocument();
  });

  it('renders search bar', async () => {
    const useSearchHookSpy = jest.spyOn(useSearch, 'default');
    render(<MovieSearchPage />);
    expect(useSearchHookSpy).toHaveReturnedWith({
      data: undefined,
      loading: false,
      error: undefined,
    });
    const searchBar = screen.getByTestId('search-bar');
    const searchInputText = screen.getByTestId('search-input-text');
    const searchButton = screen.getByTestId('search-button');
    expect(searchBar).toBeInTheDocument();
    expect(searchInputText).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
    const user = userEvent.setup();
    await user.type(searchInputText, 'abc');
    await user.click(searchButton);

    expect(
      useSearchHookSpy.mock.calls[useSearchHookSpy.mock.calls.length - 1]
    ).toEqual(['abc', 1]);
    // expect(
    //   useSearchHookSpy.mock.results[useSearchHookSpy.mock.results.length - 1]
    // ).toBe(20);
  });
  it('fails gracefully', () => {
    const alertSpy = jest.spyOn(window, 'alert');
    const errorMessageText = 'test error';
    jest.spyOn(useSearch, 'default').mockReturnValueOnce({
      data: undefined,
      loading: false,
      error: errorMessageText,
    });
    render(<MovieSearchPage />);
    expect(alertSpy).toHaveBeenCalledWith(errorMessageText);
  });
});
