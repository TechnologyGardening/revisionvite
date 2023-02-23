import * as React from "react";
import HookComp3 from "./HookComp3";
const ShowHideUser = ({ show }) => (show ? <HookComp3 /> : null);
function HookComp32() {
  const [show, setShow] = React.useState(false);
  return (
    <>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show ? "Hide User" : "Show User"}
      </button>
      {/* When you are using any function which is outside the scope of
      current function, you have to call it as a JSX tag. Whatever
      values you want to pass to that component you have to pass it as a 
      props  */}
      <ShowHideUser show={show} />
    </>
  );
}
export default HookComp32;
