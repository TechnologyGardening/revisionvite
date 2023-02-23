import * as React from "react";
import { UserProvider } from "./HookComp4";
import { Page1, Page2, Page3 } from "./HookComp42";
function ChoosePage({ page }) {
  const Page = [Page1, Page2, Page3][page];
  return <Page />;
}
function HookComp43() {
  const [page, setPage] = React.useState(0);
  return (
    <UserProvider>
      <button
        onClick={() => {
          setPage(0);
        }}
        disabled={page === 0}
      >
        Page1
      </button>
      <button
        onClick={() => {
          setPage(1);
        }}
        disabled={page === 1}
      >
        Page2
      </button>
      <button
        onClick={() => {
          setPage(2);
        }}
        disabled={page === 2}
      >
        Page3
      </button>
      <ChoosePage page={page} />
    </UserProvider>
  );
}
export default HookComp43;
