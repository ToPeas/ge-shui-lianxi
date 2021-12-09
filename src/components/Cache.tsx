import React, { useState, FC, useEffect } from "react";
type Props = {
  result: {
    money: number;
    tax: number;
  };
};
interface History {
  time: string;
  money: number;
  tax: number;
}

const Cache: FC<Props> = ({ result }: Props) => {
  const [history, setHistory] = useState<History[]>([]);
  useEffect(() => {
    let results = [];
      let tmp = localStorage.getItem("tax_historys");
      if (tmp) {
        results = JSON.parse(tmp);
      }
      setHistory(results);

  }, []);

  useEffect(() => {
    let tmp = JSON.stringify(history);
    localStorage.setItem("tax_historys", tmp);
  }, [history]);

  useEffect(() => {
    if (result.money > 0) {
      setHistory([
        ...history,
        {
          time: new Date().toLocaleString(),
          money: result.money,
          tax: result.tax,
        },
      ]);
    }
  }, [result]);

  return (
    <div>
      <div>历史查询记录:</div>
      <table className="fixed_headers">
        <thead>
          <tr>
            <th>查询时间</th>
            <th>查询金额</th>
            <th>结果</th>
          </tr>
        </thead>
        <tbody>
          {history[0] &&
            history.map((item: any) => {
              return (
                <tr key={item.time}>
                  <td>{item.time}</td>
                  <td>{item.money}</td>
                  <td>{item.tax}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Cache;
