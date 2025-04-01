function SearchBar({ query, setQuery }) {
    return (
      <input
        type="text"
        placeholder="Search news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="p-2 border rounded w-full"
      />
    );
  }
  
  export default SearchBar;
  