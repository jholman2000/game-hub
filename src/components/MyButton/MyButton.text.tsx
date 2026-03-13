import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyButton from "./MyButton";

describe("MyButton", () => {
  test("renders label", () => {
    render(<MyButton label="Save" />);
    expect(screen.getByText("Save")).toBeInTheDocument();
  });

  test("fires click handler", () => {
    const handleClick = jest.fn();

    render(<MyButton label="Click" onClick={handleClick} />);

    fireEvent.click(screen.getByTestId("my-button"));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
