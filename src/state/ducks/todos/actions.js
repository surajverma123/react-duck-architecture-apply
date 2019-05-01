import types from "./types";

export const increaseCounter = () => {
  return {
    type: types.INCREASE_COUNTER,
  };
};

export default {
  increaseCounter,
};