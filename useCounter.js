import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [state, setState] = useState(initialState); //10

  const increment = () => {
    setState(state + 1);
  };

  const reset = () => {
    console.log(initialState);
    setState(initialState);
  };

  const decrement = () => {
    setState(state - 1);
  };

  return {
    counter: state,
    increment,
    reset,
    decrement,
  };
};
