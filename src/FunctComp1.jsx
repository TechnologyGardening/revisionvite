import * as React from "react";
const FunctComp1 = ({ arg1, arg2 }) => (
  <div>
    <button disabled={arg1}>{arg2}</button>
  </div>
);
FunctComp1.defaultProps = {
  arg1: false,
  arg2: "Custom Text",
};
export default FunctComp1;
