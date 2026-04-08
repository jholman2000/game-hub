import React from "react";
import { SearchInputProps } from "./SearchInput.types";
import styles from "./SearchInput.module.css";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const SearchInput: React.FC<SearchInputProps> = ({ className, ...rest }) => {
  return (
    <InputGroup className={className}>
      <InputGroup.Text>
        <FaSearch />
      </InputGroup.Text>

      <Form.Control
        type="text"
        id="searchGames"
        placeholder="Search games..."
        {...rest}
      />
    </InputGroup>
  );
};

export default SearchInput;
