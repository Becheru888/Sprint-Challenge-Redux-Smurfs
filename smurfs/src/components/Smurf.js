import React from "react";
import styled from "styled-components";

const StyledSmurf = styled.li`
    display: flex;
    align-content:center;
    padding: 20px 20px;
    font-size: 18px;
    border-radius: 4px;
    background-color: #e42c64;
    width:200px;
    height:150px;
    margin: 5px auto;

    
  
`;

const Smurf = ({ smurf }) => {
  return (
    <StyledSmurf>
      <span>Name {smurf.name}</span>
      <span>Age  {smurf.age}</span>
      <span>height {smurf.height}</span>
    </StyledSmurf>
  );
};

export default Smurf;