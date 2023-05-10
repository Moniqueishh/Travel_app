import React from "react";
import styled from "styled-components";


const Condition = styled.span`
  margin: 20px auto;
  text-transform: capitalize;
  font-size: 12px;
  & span {
    font-size: 25px;
  }
`;

const BrewContainer = styled.div`
display: flex;
width: 40%;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`;

const BrewInfoContainer = styled.div`
  width: 90%;
`;


const BrewInfoComponent = (props) => {
    const {name, value} = props;
    return (
        
            <div>{value}{name}</div>
     
    );
};
const BrewComponent = (props) => {
    const {brew} = props;
 
    return (
        <>
            <BrewContainer>
                <Condition>
                <span>{`${(brew?.[0].city)}`}</span>
                    {`    ${brew?.[0].name}`}
                </Condition>
           
            </BrewContainer>

         
            <BrewInfoContainer>
                <BrewInfoComponent name={""} value={`${(brew?.[0].address_1)}`}/>
                <BrewInfoComponent name={" : Phone "} value={`${(brew?.[0].phone)}`}/>
            </BrewInfoContainer>
        </>
    );
};

export default BrewComponent;