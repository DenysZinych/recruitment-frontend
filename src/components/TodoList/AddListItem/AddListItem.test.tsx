import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { AddListItem } from "./AddListItem";

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
}));

describe("AddListItem Component", () => {
  it("renders without errors", () => {
    render(<AddListItem />);
    expect(screen.getByTestId("itemContainer")).toBeInTheDocument();
  });

  it("initializes with an empty input field", () => {
    render(<AddListItem />);
    const input = screen.getByTestId("listItem") as HTMLInputElement;
    expect(input).toHaveValue("");
  });

  it("handles input change and updates state", () => {
    render(<AddListItem />);
    const input = screen.getByTestId("listItem") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "Test Todo" } });
    expect(input.value).toBe("Test Todo");
  });

  it("displays an error when trying to add an empty 'todo' item", () => {
    render(<AddListItem />);
    const button = screen.getByRole("button", { name: /add/i });
    fireEvent.click(button);

    const errorParagraph = screen.getByText("Please enter a 'todo' item.");
    expect(errorParagraph).toBeInTheDocument();
  });
});
