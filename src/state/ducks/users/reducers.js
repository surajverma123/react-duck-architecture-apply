import { combineReducers } from 'redux';

const initialState = {
  name: ''
}

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER_NAME":
      return Object.assign({}, state, {
        name: action.name
      })
    default:
      return state;
  }
}

const userReducers = combineReducers({
  user,
});

export default userReducers;