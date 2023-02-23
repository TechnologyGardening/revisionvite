import * as React from "react";
import { Promise } from "bluebird";
Promise.config({ cancellation: true });
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Rku" });
    }, 4000);
  });
}
function HookComp3() {
  const [id, setId] = React.useState("loading...");
  const [name, setName] = React.useState("loading....");
  React.useEffect(() => {
    const Promise = fetchUser().then((user) => {
      setId(user.id);
      setName(user.name);
    });
    return () => {
      Promise.cancel();
    };
  });
  return (
    <div>
      <p>Name : {name}</p>
      <p>Id : {id} </p>
    </div>
  );
}
export default HookComp3;
