import { HTMLAttributes } from "react";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface PlatformSelectorProps extends HTMLAttributes<HTMLElement> {
  // Extend with more props or import from react-bootstrap if needed
  onSelectPlatform?: (platform: Platform) => void; // Optional callback when a platform is selected
  selectedPlatform?: Platform | null; // Optional prop to indicate the currently selected platform
}
