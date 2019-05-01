import { combineReducers } from "redux";

const initialState = {
  counter: 0,
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      return Object.assign({}, state, {
        counter: 1
      })
      
    default:
      return state;
  }
};

const counterReducer = combineReducers({
  counter,
});

export default counterReducer;
