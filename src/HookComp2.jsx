import * as React from "react";
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Rku" });
    }, 3000);
  });
}
function HookComp2() {
  const [id, setId] = React.useState("loading...");
  const [name, setName] = React.useState("loading....");
  React.useEffect(() => {
    fetchUser().then((user) => {
      setId(user.id);
      setName(user.name);
    });
  }, []);
  // by default useEffect will be executed everytime there is change in state variable
  // if you want to prevent calling useEffect everytime and want to call only
  // once then put empty square brackets [] at the end of the useEffect
  // it will call useEffect only for one time
  // if you want to execute useEffect specificically for some set of the
  // state variable then put those state variables into array in square brackets
  return (
    <div>
      <p>Name : {name}</p>
      <p>Id : {id} </p>
    </div>
  );
}
export default HookComp2;
