import * as React from "react";
class MyCompo extends React.Component {
  xyz = {
    first: true,
    second: false,
  };
  render() {
    const { first, second } = this.xyz;
    return (
      <main>
        <button disabled={first}>First</button>
        <button disabled={second}>Second</button>
      </main>
    );
  }
}
export default MyCompo;
