import { HTMLAttributes } from "react";

export interface SearchInputProps extends HTMLAttributes<HTMLElement> {
  // Extend with more props or import from react-bootstrap if needed
  onSearch?: (searchTerm: string) => void; // Example prop for handling search input changes
}
