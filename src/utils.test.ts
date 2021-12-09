import { incomeTaxCalculatorArray } from "./utils";

describe("incomeTaxCalculatorArray function", () => {
  it("test 5200 tax ", () => {
    let money = 5200;
    let res = incomeTaxCalculatorArray(money);
    const valueValidator = {
      value: 20,
    };
    expect(res.length).toBe(3);
    expect(res[res.length - 1]).toMatchObject(valueValidator);
  });

  it("test 3000 tax ", () => {
    let money = 3000;
    let res = incomeTaxCalculatorArray(money);
    const valueValidator = {
      value: 0,
    };
    expect(res.length).toBe(2);
    expect(res[res.length - 1]).toMatchObject(valueValidator);
  });

  it("test 1000000 tax ", () => {
    let money = 1000000;
    let res = incomeTaxCalculatorArray(money);
    const valueValidator = {
      value: 439000,
    };
    expect(res.length).toBe(6);
    expect(res[res.length - 1]).toMatchObject(valueValidator);
  });

  it("test 1000000 tax ", () => {
    let money = 1000000;
    let res = incomeTaxCalculatorArray(money);
    const valueValidator = {
      value: 439000,
    };
    expect(res.length).toBe(6);
    expect(res[res.length - 1]).toMatchObject(valueValidator);
  });

  it("test 16000 tax ", () => {
    let money = 16000;
    let res = incomeTaxCalculatorArray(money);
    const valueValidator = {
      value: 1700,
    };
    expect(res.length).toBe(4);
    expect(res[res.length - 1]).toMatchObject(valueValidator);
  });

  it("test 38000 tax ", () => {
    let money = 38000;
    let res = incomeTaxCalculatorArray(money);
    const valueValidator = {
      value: 7900,
    };
    expect(res.length).toBe(5);
    expect(res[res.length - 1]).toMatchObject(valueValidator);
  });


});
