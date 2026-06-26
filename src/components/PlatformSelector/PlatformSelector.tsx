import React from "react";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import { PlatformSelectorProps } from "./PlatformSelector.types";
import usePlatforms from "../../hooks/usePlatforms";

const PlatformSelector: React.FC<PlatformSelectorProps> = ({
  onSelectPlatform,
  selectedPlatform,
}) => {
  const { apiData, isLoading, error } = usePlatforms();
  if (error) return <p className="text-danger">Failed to load platforms.</p>;
  if (isLoading) return <p className="text-muted">Loading platforms…</p>;
  return (
    <Dropdown as={ButtonGroup} data-bs-theme="dark">
      <Dropdown.Toggle variant="secondary" id="platform-selector-dropdown">
        {selectedPlatform ? selectedPlatform.name : "Select Platform"}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => onSelectPlatform?.(null)}>
          All Platforms
        </Dropdown.Item>
        {apiData.map((platform) => (
          <Dropdown.Item
            key={platform.id}
            onClick={() => onSelectPlatform?.(platform)}
          >
            {platform.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default PlatformSelector;
