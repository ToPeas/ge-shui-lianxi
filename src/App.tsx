import React, { FC } from "react";
import Calculator from "./pages/calculator/Calculator";
import "./App.pcss";

type Props = {};

export const App: FC<Props> = ({}) => {
  return (
    <>
      <Calculator></Calculator>
    </>
  );
};
