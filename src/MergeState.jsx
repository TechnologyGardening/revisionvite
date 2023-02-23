import * as React from "react";
class MergeComp extends React.Component {
  state = {
    first: "loading...",
    second: "loading...",
    third: "loading...",
    fourth: "loading...",
    finish: "loading...",
    a: "20%",
    b: "40%",
    c: "60%",
    d: "80%",
    e: "fully loaded...",
  };
  constructor() {
    super();
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        first: state.a,
      }));
    }, 3000);
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        second: state.b,
      }));
    }, 6000);
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        third: state.c,
      }));
    }, 9000);
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        fourth: state.d,
      }));
    }, 12000);
    setTimeout(() => {
      this.setState((state) => ({
        ...state,
        finish: state.e,
      }));
    }, 15000);
  }
  render() {
    var arr2 = ["a", "b", "c", "d", "e"];
    // filter((key)=> key !== "a")
    return (
      <ul>
        {Object.keys(this.state)
          .filter((key) => !arr2.includes(key))
          .map((i) => (
            <li key={i}>
              <strong>{i}</strong>:{this.state[i]}
            </li>
          ))}
      </ul>
    );
  }
}
export default MergeComp;
