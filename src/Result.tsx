import React, { useState, FC } from "react";
import "./App.pcss";

type Props = {
  results: Array<any>;
  money: number,
};

const Result: FC<Props> = ({ results,money }: Props) => {
  return (
    <div>
      <div>查询薪资{money}元，查询结果:</div>
      <div></div>
      <table className="fixed_headers">
        <thead>
          <tr>
            <th>Level</th>
            <th>Tax</th>
          </tr>
        </thead>
        <tbody>
          {results[0] &&
            results.map((item: any) => {
              return (
                <tr key={item.label}>
                  <td>{item.label}</td>
                  <td>{item.value}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Result;
