import React from "react";
import { SearchInputProps } from "./SearchInput.types";
import styles from "./SearchInput.module.css";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchInput: React.FC<SearchInputProps> = ({
  onSearch,
  className,
  ...rest
}) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchTerm(newValue);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // If Enter key is pressed, call the onSearch prop with the current search term
    if (event.key === "Enter" && onSearch) {
      onSearch(searchTerm);
    }
  };

  return (
    <InputGroup className={className}>
      <InputGroup.Text>
        <FaSearch />
      </InputGroup.Text>

      <Form.Control
        type="text"
        id="searchGames"
        placeholder="Search games..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={(e) => e.target.select()}
        {...rest}
      />
    </InputGroup>
  );
};

export default SearchInput;
