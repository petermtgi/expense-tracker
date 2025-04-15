function SearchBar({ search, onSearchChange }) {
    return (
      <input
        type="text"
        placeholder="Search expenses..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%" }}
      />
    );
  }
  
  export default SearchBar;
  