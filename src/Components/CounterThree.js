import React, { useReducer } from "react";

const initialState = {
  counter: 0
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + action.value };
    case "decrement":
      return { counter: state.counter - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterThree() {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count1, dispatch1] = useReducer(reducer, initialState);

  return (
    <div>
      <div>
        <div>Count - {count.counter}</div>
        <button onClick={() => dispatch({ type: "increment", value: 1 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          decrement
        </button>

        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          Increment 5
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
          decrement 5
        </button>

        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      <div>
        <div>Count - {count1.counter}</div>
        <button onClick={() => dispatch1({ type: "increment", value: 10 })}>
          Increment 10
        </button>
        <button onClick={() => dispatch1({ type: "decrement", value: 10 })}>
          decrement 10
        </button>
        <button onClick={() => dispatch1({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}

export default CounterThree;
