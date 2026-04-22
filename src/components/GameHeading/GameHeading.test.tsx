import { render, screen } from "@testing-library/react";
import GameHeading from "./GameHeading";

describe("GameHeading", () => {
  test("renders component", () => {
    render(<GameHeading />);
    expect(screen.getByTestId("game-heading")).toBeInTheDocument();
  });
});