const SearchBar = ({ onSearch }) => {
    return (
      <input
        type="text"
        placeholder="Search by description..."
        onChange={(e) => onSearch(e.target.value)}
      />
    );
  };
  
  export default SearchBar;
  