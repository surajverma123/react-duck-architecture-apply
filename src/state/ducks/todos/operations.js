import actions from './actions';

const increaseCounter = () => {
  // return dispatch => {
  //   dispatch(actions.increaseCounter());
  // };
  actions.increaseCounter()
}

export default {
  increaseCounter
}