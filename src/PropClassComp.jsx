import * as React from "react";
class MyCustButton extends React.Component {
  render() {
    const { dis, text } = this.props;
    return <button disabled={dis}>{text}</button>;
  }
}
export default MyCustButton;
