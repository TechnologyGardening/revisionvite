import * as React from "react";
import MyClassList from "./PropClassList";
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(["a", "b", "c", "d", "e"]);
    }, 3000);
  });
}
class MyContainerComp extends React.Component {
  state = { items: [] };
  componentDidMount() {
    fetchData().then((items) => this.setState({ items }));
  }
  render() {
    return <MyClassList items={this.state.items} />;
  }
}
export default MyContainerComp;
