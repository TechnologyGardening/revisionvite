import * as React from "react";
class MyComp2 extends React.Component {
  state = {
    heading: "this is the initial heading...",
    context: "Loading.....",
  };
  constructor() {
    super();
    setTimeout(() => {
      this.setState({
        heading: "this is the new heading",
        context: "Loading done.....",
      });
    }, 3000);
  }
  render() {
    const { heading, context } = this.state;
    return (
      <main>
        <h1>{heading}</h1>
        <p>{context}</p>
      </main>
    );
  }
}
export default MyComp2;
