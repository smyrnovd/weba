import React, { useState, useEffect } from "react";
import styles from "./Clock.module.scss";

const Clock = props => {
  const tick = () => {
    setDate(new Date());
  };

  useEffect(() => {
    setInterval(() => tick(), 1000);
  });
  const [date, setDate] = useState(new Date());
  const months = {
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
  let clockView1 = date.toLocaleTimeString("en-US");
  let clockView2 = date.toLocaleDateString("en-US");
  // let clockView3 = `${months[date.getMonth()]} ${date.getDate()}th ${date
  //   .getFullYear()
  //   .toString()
  //   .slice(2, 4)}`;
  let clockView4 = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div>
      <h1
        className={`${styles.text} ${props.view === 1 ? styles.visible : ""}`}
      >
        {clockView1}
      </h1>

      <h1
        className={`${styles.text} ${props.view === 2 ? styles.visible : ""}`}
      >
        {clockView2}
      </h1>

      <h1
        className={`${styles.text}  ${props.view === 3 ? styles.visible : ""}`}
      >
        {`${months[date.getMonth()]}`}
        <br />
        {`${date.getDate()}th ${date
          .getFullYear()
          .toString()
          .slice(2, 4)}`}
      </h1>

      <h1
        className={`${styles.text} ${props.view === 4 ? styles.visible : ""}`}
      >
        {clockView4}
      </h1>
    </div>
  );
};

export default Clock;

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date()
//     };
//   }
//   componentDidMount() {
//     setInterval(() => this.tick(), 1000);
//   }

//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
//   render() {
//     const months = {
//       0: "January",
//       1: "February",
//       2: "March",
//       3: "April",
//       4: "May",
//       5: "June",
//       6: "July",
//       7: "August",
//       8: "September",
//       9: "October",
//       10: "November",
//       11: "December"
//     };
//     return (
//       <div>
//         <h1
//           className={`${styles.text} ${
//             this.props.view === 1 ? styles.visible : ""
//           }`}
//         >
//           {this.state.date.toLocaleTimeString("en-US")}
//         </h1>

//         <h1
//           className={`${styles.text} ${
//             this.props.view === 2 ? styles.visible : ""
//           }`}
//         >
//           {this.state.date.toLocaleDateString("en-US")}
//         </h1>

//         <h1
//           className={`${styles.text} ${styles.view3} ${
//             this.props.view === 3 ? styles.visible : ""
//           }`}
//         >
//           {months[this.state.date.getMonth()]}
//           <br />
//           {this.state.date.getDate() + "th "}
//           {this.state.date
//             .getFullYear()
//             .toString()
//             .slice(2, 4)}
//         </h1>

//         <h1
//           className={`${styles.text} ${
//             this.props.view === 4 ? styles.visible : ""
//           }`}
//         >
//           {this.state.date.toLocaleTimeString("en-US", {
//             hour: "2-digit",
//             minute: "2-digit"
//           })}
//         </h1>
//       </div>
//     );
//   }
// }
