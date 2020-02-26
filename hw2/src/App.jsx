import React from "react";
import "./App.scss";
import Clock from "./clock/Clock";

class App extends React.Component {
  state = {
    index: 1,
    color: 0
  };
  render() {
    let bgclass = "screen" + this.state.color;
    return (
      <div
        className={bgclass}
        onClick={() => {
          this.state.index < 4
            ? this.setState({ index: this.state.index + 1 })
            : this.setState({ index: 1 });
          this.setState({ color: Math.floor(Math.random() * 10) });
        }}
      >
        <Clock view={this.state.index} />
      </div>
    );
  }
}

export default App;
