import React from "react";
import Button from "react-bootstrap/Button";
import styles from "./MyButton.module.css";
import { MyButtonProps } from "./MyButton.types";

/* ...rest is a common pattern in React components that allows you to pass any additional 
props to the underlying component (in this case, the Button from react-bootstrap). 
This is useful because it makes your MyButton component more flexible and reusable. 
For example, if you want to add a custom class or a data attribute to the Button, you can 
do so without having to modify the MyButton component itself. The ...rest syntax collects all 
the remaining props that are not explicitly destructured (like label and onClick) and passes 
them down to the Button component. */

const MyButton: React.FC<MyButtonProps> = ({ label, className, ...rest }) => {
  return (
    <Button
      {...rest}
      className={`${styles.myButton} ${className ?? ""}`}
      data-testid="my-button"
    >
      {label}
    </Button>
  );
};

export default MyButton;
