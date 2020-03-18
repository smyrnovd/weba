import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./ClockPage.css";
import Clock from "./clock/Clock";
import { getRandomColor } from "../../utils";

export const ClockPage: React.FC = () => {
  let [index, setIndex] = useState(1);
  let [color, setColor] = useState(getRandomColor());
  let titlePage: string = `Clock view №${index}`;
  return (
    <>
      <Helmet>
        <title>{titlePage}</title>
      </Helmet>
      <div
        className="ClockPage"
        style={{ background: color }}
        onClick={() => {
          index < 4 ? setIndex(index + 1) : setIndex(1);
          setColor(getRandomColor());
        }}
      >
        <Clock view={index} />
      </div>
    </>
  );
};

export default ClockPage;
