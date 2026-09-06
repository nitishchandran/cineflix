import { IMAGE_BASE_URL } from '../services/tmdb';

const MovieCard = ({ movie }) => {
  const { title, vote_average, poster_path, release_date, original_language } = movie;

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-3 hover:-translate-y-1 transition-transform duration-200">
      <img
        src={poster_path ? `${IMAGE_BASE_URL}${poster_path}` : '/no-movie.png'}
        alt={title}
        className="rounded-xl w-full h-auto aspect-[2/3] object-cover bg-white/10"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src =
            'https://placehold.co/400x600/1a1a2e/ffffff?text=No+Poster';
        }}
      />

      <div className="mt-3">
        <h3 className="text-white font-semibold text-sm line-clamp-1">{title}</h3>

        <div className="flex items-center gap-2 mt-2 text-sm text-gray-300">
          <div className="flex items-center gap-1">
            <span className="text-yellow-400">★</span>
            <span>{vote_average ? vote_average.toFixed(1) : 'N/A'}</span>
          </div>
          <span className="opacity-50">•</span>
          <span className="uppercase">{original_language}</span>
          <span className="opacity-50">•</span>
          <span>{release_date ? release_date.split('-')[0] : 'N/A'}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
