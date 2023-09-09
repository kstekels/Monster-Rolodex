import { ChangeEvent } from "react";
import "./search-box.styles.css";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  onSearchChange,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type="search"
    placeholder={placeholder}
    onChange={onSearchChange}
  />
);

export default SearchBox;
