import React from "react";
import ComponentsB from "./ComponentsB";

export const FnameContext = React.createContext();
export const LnameContext = React.createContext();

function ComponentsA() {
  return (
    <div>
      <FnameContext.Provider value={"Nirmit"}>
        <LnameContext.Provider value={"Thummar"}>
          <ComponentsB />
        </LnameContext.Provider>
      </FnameContext.Provider>
    </div>
  );
}

export default ComponentsA;
