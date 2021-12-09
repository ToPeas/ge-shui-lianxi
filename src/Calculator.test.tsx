import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "./Calculator";

// window.HTMLFormElement.prototype.submit = () => {}

describe("<Calculator>", () => {
  // const onSubmit = jest.fn((e) => e.preventDefault())
  const setup = (props = {}) => {
    render(<Calculator {...props} />);
    const { getByText, getByPlaceholderText, getByTestId } = screen;
    const input = getByPlaceholderText("请输入税前工资");
    const button = getByText("Calculate");

    return {
      ...screen,
      getByTestId,
      input,
      button,
    };
  };

  it("has input and a button", () => {
    const { input, button } = setup();
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("changes input", () => {
    const { input } = setup();

    fireEvent.change(input, {
      target: {
        value: "1000",
      },
    });
    expect(input).toHaveAttribute("value", "1000");
  });

  it("input valid value and clear input", () => {
    const { input, button } = setup({});
    fireEvent.change(input, {
      target: {
        value: "1000",
      },
    });

    fireEvent.click(button);
    expect(input).toHaveAttribute("value", "");
  });

  it("input invalid data", () => {
    const { input, button, getByTestId } = setup({});
    // const onSubmit = jest.fn();
    const alertMock = jest.spyOn(window, "alert").mockImplementation();
    fireEvent.change(input, {
      target: {
        value: "-1000",
      },
    });
    const form = getByTestId("form");
    fireEvent.submit(form);
    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});
