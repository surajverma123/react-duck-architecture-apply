import types from "./types";

export const increaseCounter = () => {
  console.log('increaseCounter ACTIONS')
  return {
    type: types.INCREASE_COUNTER,
  };
};

export default {
  increaseCounter,
};