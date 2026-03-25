import React from "react";
import { ButtonGroup, Dropdown, DropdownProps } from "react-bootstrap";
import { PlatformSelectorProps } from "./PlatformSelector.types";
import styles from "./PlatformSelector.module.css";
import usePlatforms from "../../hooks/usePlatforms";

const PlatformSelector: React.FC<PlatformSelectorProps> = ({
  className,
  ...rest
}) => {
  const { apiData, isLoading, error } = usePlatforms();

  if (error) return <div>Error: {error}</div>;
  if (isLoading) return <div>Loading...</div>;
  return (
    <Dropdown as={ButtonGroup} data-bs-theme="dark">
      {/* This is the trigger button */}
      <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        Platforms
      </Dropdown.Toggle>

      {/* This is the menu list */}
      <Dropdown.Menu>
        {apiData.map((platform) => (
          <Dropdown.Item key={platform.id} href={`#/platform/${platform.slug}`}>
            {platform.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default PlatformSelector;
