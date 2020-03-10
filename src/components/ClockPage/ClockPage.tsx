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

// class App extends React.Component {
//   state = {
//     index: 1,
//     color: 0
//   };

//   render() {
//     document.title = `${titlePage}${this.state.index}`;
//     let bgclass = "screen" + this.state.color;
//     return (
//       <div
//         className={bgclass}
//         onClick={() => {
//           this.state.index < 4
//             ? this.setState({ index: this.state.index + 1 })
//             : this.setState({ index: 1 });
//           this.setState({ color: Math.floor(Math.random() * 10) });
//         }}
//       >
//         <Clock view={this.state.index} />
//       </div>
//     );
//   }
// }
