import React from "react";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders calculate button", () => {
  // render(<App />);
  // const linkElement = screen.getByText("Calculate");
  // expect(linkElement).toBeInTheDocument();
  const { getByText } = render(<App />);
  const linkElement = getByText(/Calculate/i);
  expect(linkElement).toBeInTheDocument();
});
