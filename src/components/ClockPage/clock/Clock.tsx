import React, { useState, useEffect } from "react";
import styles from "./Clock.module.scss";

type ClockType = {
  view: number;
};

type MonthsType = {
  [index: number]: string;
};

const Clock: React.FC<ClockType> = (props): JSX.Element => {
  const tick = (): void => {
    setDate(new Date());
  };

  useEffect(() => {
    setInterval(() => tick(), 1000);
  });
  const [date, setDate] = useState(new Date());

  const months: MonthsType = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
  };
  let clockView1: string = date.toLocaleTimeString("en-US");
  let clockView2: string = date.toLocaleDateString("en-US");
  let clockView4: string = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div className="mx-auto">
      <h1 className={props.view === 1 ? `${styles.visible}` : ""}>
        {clockView1}
      </h1>
      <h1 className={props.view === 2 ? `${styles.visible}` : ""}>
        {clockView2}
      </h1>

      <h1
        className={props.view === 3 ? `${styles.visible} ${styles.lefted}` : ""}
      >
        {`${months[date.getMonth()]}`}
        <br />
        {`${date.getDate()}th ${date
          .getFullYear()
          .toString()
          .slice(2, 4)}`}
      </h1>

      <h1 className={props.view === 4 ? `${styles.visible}` : ""}>
        {clockView4}
      </h1>
    </div>
  );
};

export default Clock;
