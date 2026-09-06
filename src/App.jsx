import { useEffect, useState } from 'react';
import { useDebounce } from 'react-use';

import Search from './components/Search';
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';

import { fetchMovies } from './services/tmdb';
import { getTrendingMovies, updateSearchCount } from './services/appwrite';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [trendingMovies, setTrendingMovies] = useState([]);
  const [trendingError, setTrendingError] = useState('');

  // Debounce the search term so we don't hit the TMDB API on every keystroke
  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  const loadMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const movies = await fetchMovies(query);
      setMovieList(movies);

      if (query && movies.length > 0) {
        // fire and forget - don't block the UI on analytics
        updateSearchCount(query, movies[0]);
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      setErrorMessage('Something went wrong while fetching movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const loadTrendingMovies = async () => {
    try {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    } catch (error) {
      console.error('Error fetching trending movies:', error);
      setTrendingError('Could not load trending movies.');
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional data fetch on search change
    loadMovies(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional one-time data fetch on mount
    loadTrendingMovies();
  }, []);

  return (
    <main className="min-h-screen bg-[#030014] text-white">
      <div className="max-w-6xl mx-auto px-5 pt-10 pb-20">
        <header className="text-center mb-14">
          <img
            src="/hero-img.png"
            alt="Hero banner"
            className="mx-auto w-full max-w-lg mb-6"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <h1 className="text-4xl sm:text-5xl font-extrabold">
            Find <span className="bg-gradient-to-r from-indigo-400 to-fuchsia-500 bg-clip-text text-transparent">Movies</span> You'll Enjoy Without the Hassle
          </h1>

          <div className="mt-8">
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>
        </header>

        <section className="mb-14">
            <h2 className="text-2xl font-bold mb-5">Trending Movies</h2>
            <ul className="flex gap-5 overflow-x-auto pb-3">
              {trendingMovies.map((movie, index) => (
                <li key={movie.$id} className="min-w-[150px] flex items-center gap-3">
                  <p className="text-5xl font-extrabold text-white/20">{index + 1}</p>
                  <img
                    src={movie.poster_url || 'https://placehold.co/128x180/1a1a2e/ffffff?text=No+Poster'}
                    alt={movie.searchTerm}
                    className="w-28 h-40 object-cover rounded-lg"
                  />
                </li>
              ))}
            </ul>
          {trendingMovies.length === 0 && !trendingError && (
            <p className="text-gray-400">No trending searches yet — search for a few movies to populate this section.</p>
          )}
        </section>
        {trendingError && <p className="text-red-400 mb-10">{trendingError}</p>}

        <section>
          <h2 className="text-2xl font-bold mb-5">All Movies</h2>

          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className="text-red-400">{errorMessage}</p>
          ) : (
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;
