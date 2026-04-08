import { render, screen } from "@testing-library/react";
import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  test("renders component", () => {
    render(<SearchInput />);
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });
});