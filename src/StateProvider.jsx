import { createContext, useReducer } from "react";

export const StateContext = createContext();

// eslint-disable-next-line react/prop-types
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};
