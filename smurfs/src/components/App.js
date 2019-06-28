import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf } from "../actions/index";
import { bindActionCreators } from "redux";
import './App.css';


import styled from "styled-components";
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount = () => {
    this.props.fetchSmurfs();
  }


  render() {
    const { smurfs, fetchingSmurfs } = this.props;
    if (fetchingSmurfs) {
      return <div>Smurfs are coming :D</div>;
    }
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your Redux version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    addingSmurf: state.addingSmurf,
  };
};

const matchDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchSmurfs,
      addSmurf
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(App);




///Styled Component

