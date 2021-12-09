import React from "react";
import { render, screen } from "@testing-library/react";
import Cache from "./Cache";

describe("<Cache/>", () => {
  let total = {
    money: 1000000,
    tax: 439000,
  };
  const setup = () => {
    render(<Cache result={total} />);
    const { getByText, getAllByText } = screen;
    return {
      ...screen,
      getAllByText,
      getByText,
    };
  };

  it("add new data,renders detail properly", () => {
    const { getByText } = setup();
    getByText(total.money);
    getByText(total.tax);
  });
});
