import React from "react";
import { render, screen } from "@testing-library/react";
import { Result} from './Result'


describe('<Result>', () => {
  let money = 1000000
  let example = [
    {
      label: "0 < x <= 5000 (0%)",
      value: 0,
    },
    {
      label: "5000 < x <= 10000 (10%)",
      value: 500,
    },
    {
      label: "10000 < x <= 20000 (20%)",
      value: 2000,
    },
    {
      label: "20000 < x <= 50000 (30%)",
      value: 9000,
    },
    {
      label: "50000 < x <= max (45%)",
      value: 427500,
    },
    {
      label: "total",
      value: 439000,
    }
  ]

  const setup = () => {
    render(
      <Result results={example} money={money}  />  
    );
    const { getByText, getAllByText } = screen;
    return {
      ...screen,
      getAllByText,
      getByText,
    }
  }

  it('renders detail properly', () => {
    const { getByText } = setup();
    getByText(new RegExp(String(money)));
    getByText(example[0].label);
    getByText(example[1].label);
    getByText(example[2].label);
    getByText(example[3].label);
    getByText(example[4].label);
    getByText(example[0].value);
    getByText(example[1].value);
    getByText(example[2].value);
    getByText(example[3].value);
    getByText(example[4].value);
  });
})
