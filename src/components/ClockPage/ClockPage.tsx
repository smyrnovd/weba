import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./ClockPageColors.scss";
import Clock from "./clock/Clock";
import { randomNumber } from "../../utils/randomNumber";

export const ClockPage = () => {
  let [index, setIndex] = useState(1);
  let [color, setColor] = useState(0);
  let bgclass: string = `screen${color}`;
  let titlePage: string = `Clock view №${index}`;
  return (
    <>
      <Helmet>
        <title>{titlePage}</title>
      </Helmet>
      <div
        className={bgclass}
        onClick={() => {
          index < 4 ? setIndex(index + 1) : setIndex(1);
          setColor(randomNumber());
        }}
      >
        <Clock view={index} />
      </div>
    </>
  );
};

export default ClockPage;
