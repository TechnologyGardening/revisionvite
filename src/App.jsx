import MyCustButton from "./PropClassComp";
import MyClassList from "./PropClassList";

function App() {
  return (
    <div>
      <MyCustButton dis={false} text={"hello"} />
      <MyClassList items={["a", "b", "c", "d"]} />
    </div>
  );
}
export default App;
