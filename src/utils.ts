import Np from "number-precision";

export const incomeTaxCalculatorArray = (money: number): any => {
  let amount = money - 5000;
  let res = [];
  let map = [
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
  ];
  // 税改后需纳税计算
  if (amount <= 0) {
    amount = 0;
  } else if (amount > 0 && amount <= 5000) {
    amount = amount * 0.1;
    res.push(...map.slice(0, 1), {
      label: "5000 < x <= 10000 (10%)",
      value: amount,
    });
  } else if (amount > 5000 && amount <= 15000) {
    amount = Np.round((amount - 5000) * 0.2, 2);
    res.push(...map.slice(0, 2), {
      label: "10000 < x <= 20000 (20%)",
      value: amount,
    });
  } else if (amount > 15000 && amount <= 45000) {
    amount = Np.round((amount - 15000) * 0.3, 2);
    res.push(...map.slice(0, 3), {
      label: "20000 < x <= 50000 (30%)",
      value: amount,
    });
  } else if (amount > 45000) {
    amount = Np.round((amount - 45000) * 0.45, 2);
    res.push(...map.slice(0, 4), {
      label: "50000 < x <= max (45%)",
      value: amount,
    });
  }
  res.push({
    label: "total",
    value: res.reduce((sum, cur) => Np.plus(sum, cur.value), 0),
  });
  return res;
};
