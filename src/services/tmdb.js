const API_BASE_URL = 'https://api.themoviedb.org/3';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
};

/**
 * Fetch movies from TMDB.
 * If `query` is provided it searches for that title, otherwise it
 * returns movies sorted by popularity (discover endpoint).
 */
export const fetchMovies = async (query = '') => {
  const endpoint = query
    ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
    : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, API_OPTIONS);

  if (!response.ok) {
    throw new Error(`Failed to fetch movies (status ${response.status})`);
  }

  const data = await response.json();

  return data.results || [];
};

export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';
