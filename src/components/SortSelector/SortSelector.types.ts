import { HTMLAttributes } from "react";

export interface SortSelectorProps extends HTMLAttributes<HTMLElement> {
  // Extend with more props or import from react-bootstrap if needed
  currentSort?: string; // Example prop for the currently selected sort order
  onSelectSort?: (sort: string) => void; // Example prop for handling sort selection
}
