import { render, screen } from "@testing-library/react";
import PlatformSelector from "./PlatformSelector";

describe("PlatformSelector", () => {
  test("renders component", () => {
    render(<PlatformSelector />);
    expect(screen.getByTestId("platform-selector")).toBeInTheDocument();
  });
});