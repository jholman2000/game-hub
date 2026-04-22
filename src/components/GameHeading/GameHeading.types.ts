import { GameQuery } from "@/App";
import { HTMLAttributes } from "react";

export interface GameHeadingProps extends HTMLAttributes<HTMLElement> {
  // Extend with more props or import from react-bootstrap if needed
  gameQuery?: GameQuery;
}
