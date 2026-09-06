const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search w-full max-w-2xl mx-auto">
      <div className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-5 py-3 backdrop-blur">
        <img src="/search.svg" alt="search" className="w-5 h-5 opacity-70" onError={(e) => (e.currentTarget.style.display = 'none')} />
        <input
          type="text"
          placeholder="Search through hundreds of movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full bg-transparent text-white placeholder-gray-400 outline-none"
        />
      </div>
    </div>
  );
};

export default Search;
