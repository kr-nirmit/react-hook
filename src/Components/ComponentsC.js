import React, { useContext } from "react";
import { CountContext, FnameContext, LnameContext } from "./ComponentsA";

function ComponentsC() {
  const fname = useContext(FnameContext);
  const lname = useContext(LnameContext);

  const countContext = useContext(CountContext);
  return (
    <div>
      ComponentsC
      <p>
        Your Name : {fname} {lname}
      </p>
      <div>Count - {countContext.countState}</div>
      <button onClick={() => countContext.countDispatch("increment")}>Increment</button>
      <button onClick={() => countContext.countDispatch("decrement")}>decrement</button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentsC;
