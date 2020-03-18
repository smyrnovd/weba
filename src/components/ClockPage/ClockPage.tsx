import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./ClockPage.css";
import Clock from "./clock/Clock";
import { getRandomColor } from "../../utils";

export const ClockPage: React.FC = (): JSX.Element => {
  let [index, setIndex] = useState(1);
  let [color, setColor] = useState(getRandomColor());

  let titlePage: string = `Clock view №${index}`;

  const changeColorAndClockView = (): void => {
    index < 4 ? setIndex(index + 1) : setIndex(1);
    setColor(getRandomColor());
  };

  return (
    <>
      <Helmet>
        <title>{titlePage}</title>
      </Helmet>
      <div
        className="ClockPage"
        style={{ background: color }}
        onClick={changeColorAndClockView}
      >
        <Clock view={index} />
      </div>
    </>
  );
};

export default ClockPage;
