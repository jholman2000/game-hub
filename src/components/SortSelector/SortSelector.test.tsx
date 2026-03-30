import { render, screen } from "@testing-library/react";
import SortSelector from "./SortSelector";

describe("SortSelector", () => {
  test("renders component", () => {
    render(<SortSelector />);
    expect(screen.getByTestId("sort-selector")).toBeInTheDocument();
  });
});