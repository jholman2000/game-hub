import React from "react";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import { SortSelectorProps } from "./SortSelector.types";

const SortSelector: React.FC<SortSelectorProps> = ({
  className,
  currentSort,
  onSelectSort,
  ...rest
}) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average rating" },
  ];

  // Pick the key-value pair from sortOrders that matches the currentSort value. If no match is found, selectedSort will be undefined.
  const selectedSort = sortOrders.find((order) => order.value === currentSort);

  return (
    <Dropdown as={ButtonGroup} data-bs-theme="dark">
      {/* This is the trigger button */}
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Order by: {selectedSort ? selectedSort.label : "Relevance"}
      </Dropdown.Toggle>

      {/* This is the menu list */}
      <Dropdown.Menu>
        {sortOrders.map((sort) => (
          <Dropdown.Item
            key={sort.value}
            eventKey={sort.value}
            onClick={() => {
              if (onSelectSort) {
                onSelectSort(sort.value);
              }
            }}
          >
            {sort.label}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SortSelector;
