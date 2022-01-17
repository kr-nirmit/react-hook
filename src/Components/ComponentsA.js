import React, { useReducer } from "react";
import ComponentsB from "./ComponentsB";

export const FnameContext = React.createContext();
export const LnameContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function ComponentsA() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <FnameContext.Provider value={"Nirmit"}>
        <LnameContext.Provider value={"Thummar"}>
          <CountContext.Provider
            value={{ countState: count, countDispatch: dispatch }}
          >
            ComponentsA
            <ComponentsB />
          </CountContext.Provider>
        </LnameContext.Provider>
      </FnameContext.Provider>
    </div>
  );
}

export default ComponentsA;
