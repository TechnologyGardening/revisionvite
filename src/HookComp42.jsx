import * as React from "react";
import { UserContext } from "./HookComp4";
function UserName() {
  const user = React.useContext(UserContext);
  return (
    <p>
      Logged in as Name: {user.name} with Id : {user.id}
    </p>
  );
}
export function Page1() {
  return (
    <>
      <h1>Page1</h1>
      <UserName />
    </>
  );
}
export function Page2() {
  return (
    <>
      <h1>Page2</h1>
      <UserName />
    </>
  );
}
export function Page3() {
  return (
    <>
      <h1>Page3</h1>
      <UserName />
    </>
  );
}
