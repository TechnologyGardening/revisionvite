import * as React from "react";
const intialState = {
  options: [
    { id: 1, name: "first", value: 15 },
    { id: 2, name: "second", value: 25 },
    { id: 3, name: "third", value: 35 },
    { id: 4, name: "fourth", value: 45 },
  ],
  qunatity: 1,
  selected: 1,
};
// this function will decide whether increment or decrement button
// should be disabled or not.
// if qunatity is 0 then decrement button will be disabled
// if qunatity is 10 then increment button should be disabled
function reduceButtonState(state) {
  return {
    ...state,
    decrementDisabled: state.qunatity === 0,
    incrementDisabled: state.qunatity === 10,
  };
}
// this function will update the total.
// quantity will be multiplied by individual rates
// every time there is change in quantity this function should be called
function reduceTotal(state) {
  const option = state.options.find((x) => x.id === state.selected);
  return { ...state, total: state.qunatity * option.value };
}
function reducer(state, action) {
  let newState;
  switch (action.type) {
    // this case will initialize the state variables.
    case "init":
      newState = reduceTotal(state);
      return reduceButtonState(newState);
    // this case will decrement the quantity and update the total state varibles.
    // this case will update 3 state variables. ( qunatity, total, decrement button )
    case "decrementQunatity":
      newState = { ...state, qunatity: state.qunatity - 1 };
      newState = reduceTotal(newState);
      return reduceButtonState(newState);
    // this case will increment the quantity and update the total state variables.
    // this case will update 3 state variables. ( qunatity, total, increment button)
    case "incrementQunatity":
      newState = { ...state, qunatity: state.qunatity + 1 };
      newState = reduceTotal(newState);
      return reduceButtonState(newState);
    // this case will update the index of the selected item as well as
    // it will also update total.
    // this case deals with 2 varibles ( selected index, total)
    case "selectItem":
      newState = { ...state, selected: Number(action.id) };
      return reduceTotal(newState);
    default:
      throw new Error(`${action.type} is not a supported action type`);
  }
}
export default function HookComp6() {
  const [
    {
      options,
      selected,
      qunatity,
      total,
      decrementDisabled,
      incrementDisabled,
    },
    dispatch,
  ] = React.useReducer(reducer, intialState);
  React.useEffect(() => {
    dispatch({ type: "init" });
  }, []);
  return (
    <>
      <button
        disabled={decrementDisabled}
        onClick={() => dispatch({ type: "decrementQunatity" })}
      >
        -
      </button>
      <button
        disabled={incrementDisabled}
        onClick={() => dispatch({ type: "incrementQunatity" })}
      >
        +
      </button>
      <input value={qunatity} readOnly />
      <br />
      <select
        value={selected}
        onChange={(e) => dispatch({ type: "selectItem", id: e.target.value })}
      >
        {options.map((o) => (
          <option key={o.id} value={o.id}>
            {o.name}-{o.value}
          </option>
        ))}
      </select>
      {total}
    </>
  );
}
