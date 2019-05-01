import React, { Component } from 'react';
import { connect } from 'react-redux';

import counterOperation from '../state/ducks/todos/operations';

class App extends Component {
  render() {
    const { increaseCounter } = this.props;
    console.log("PROPS=============", this.props);
    return (
      <div className="App">
        <button onClick={increaseCounter}> dddddd</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("==================STATe==================", state)
  return {

  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    increaseCounter: () => dispatch(counterOperation.increaseCounter),
  } 
} 
export default connect(mapStateToProps, mapStateToDispatch) (App);
