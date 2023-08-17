import "./search-box.styles.css";

const SearchBox = ({ className, onSearchChange, placeholder }) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onSearchChange}
  />
);

export default SearchBox;
