/* ButtonProps is the type of props that the Button component from react-bootstrap accepts. 
   By extending it, we can add our own custom props (like label and onClick) while still 
   retaining all the functionality of the original Button component. 
*/

import { ButtonProps } from "react-bootstrap/Button";

export interface MyButtonProps extends ButtonProps {
  label: string;

  /** Optional callback for parent */
  onClick?: () => void;
}
