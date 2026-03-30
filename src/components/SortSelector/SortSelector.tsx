import React from "react";
import { ButtonGroup, Dropdown, DropdownProps } from "react-bootstrap";
import { SortSelectorProps } from "./SortSelector.types";
import styles from "./SortSelector.module.css";
//import useSorts from "../../hooks/useSorts";

const SortSelector: React.FC<SortSelectorProps> = ({ className, ...rest }) => {
  //const { apiData, isLoading, error } = useSorts();
  //console.log("selectedSort:", selectedSort);
  //if (error) return <div>Error: {error}</div>;
  //if (isLoading) return <div>Loading...</div>;
  const selectedSort = null; // Replace with actual selected sort from state or props
  return (
    <Dropdown as={ButtonGroup} data-bs-theme="dark">
      {/* This is the trigger button */}
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        {selectedSort ? selectedSort : "Order By: Relevance"}
      </Dropdown.Toggle>

      {/* This is the menu list */}
      <Dropdown.Menu>
        <Dropdown.Item>Relevance</Dropdown.Item>
        <Dropdown.Item>Date added</Dropdown.Item>
        <Dropdown.Item>Name</Dropdown.Item>
        <Dropdown.Item>Release date</Dropdown.Item>
        <Dropdown.Item>Popularity</Dropdown.Item>
        <Dropdown.Item>Average rating</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortSelector;
