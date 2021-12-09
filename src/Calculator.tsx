import React, { useState, FC, useCallback } from "react";
import Cache from "./Cache";
import Result from "./Result";
import "./Calculator.pcss";
import { incomeTaxCalculatorArray } from "./utils";

type Props = {};

const Calculator: FC<Props> = ({}: Props) => {
  const [value, setValue] = useState("");
  const [total, setTotal] = useState({
    money: 0,
    tax: 0,
  });
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e: any) => {
      const re = /^[1-9]\d*$/;
      if (!re.test(value)) {
        alert("必须为正整数");
        return;
      }
      e.preventDefault();
      let amount = parseInt(value);
      console.log(amount)
      let resultsArr = incomeTaxCalculatorArray(amount);
      console.log(resultsArr)
      setResults(resultsArr);
      if (resultsArr.length > 1) {
        setTotal({
          money: amount,
          tax: resultsArr[resultsArr.length - 1].value,
        });
      }
      setValue("");
    },
    [value]
  );
  const [results, setResults] = useState([]);
  return (
    <div>
      <Cache result={total}></Cache>
      <form className="main" onSubmit={onSubmit} data-testid="form">
        <input
          type="text"
          className="input"
          placeholder="请输入税前工资"
          value={value}
          onChange={onChange}
        />
        <button type="submit">Calculate</button>
      </form>
      <Result results={results} money={total.money}></Result>
    </div>
  );
};

export default Calculator;
