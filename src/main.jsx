import React from "react";
import ReactDOM from "react-dom/client";
import MonolithicComp from "./MonolithicComp";
const root = ReactDOM.createRoot(document.getElementById("sample"));
function render() {
  root.render(
    <main>
      <MonolithicComp />
    </main>
  );
}
render();
