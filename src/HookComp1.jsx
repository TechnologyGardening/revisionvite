import * as React from "react";
export default function HookComp1() {
  const [name, setName] = React.useState("Nikunj");
  const [company, setCompany] = React.useState("RKU");
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
      <input value={company} onChange={(e) => setCompany(e.target.value)} />
      <p>{company}</p>
    </div>
  );
}
// state and props ( class -> state, setState) (function -> )
// all react hooks will start with use
// useState, useReducer, useEffect, useRef, useContext, useMemo
//  Redux
