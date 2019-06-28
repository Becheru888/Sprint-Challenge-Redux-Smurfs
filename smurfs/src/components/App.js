import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchSmurfs, addSmurf } from "../actions/index";
import { bindActionCreators } from "redux";
import Smurf from './Smurf';
import AddSmurf from './AddSmurf'
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
       <StyledH2>SMURFS! 2.0 W/ Redux</StyledH2>
        <StyledUl>
          {smurfs.map(smurf => (
            <Smurf smurf={smurf} key={smurf.id} />
          ))}
        </StyledUl>
        <AddSmurf addSmurf={this.props.addSmurf} />
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

const StyledH2 = styled.h2`
  font-size: 25px;
  text-align: center;
  text-transform: uppercase;
`;

const StyledUl = styled.ul`
  padding: 0;
  margin: 0;
`;