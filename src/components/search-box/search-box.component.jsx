import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { className, onSearchChange, placeholder } = this.props;
    return (
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onSearchChange}
      />
    );
  }
}

export default SearchBox;
