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

const YoutubeContainer = styled.div`
display: flex;
width: 40%;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`;

const YoutubeInfoContainer = styled.div`
  width: 90%;
`;


const YoutubeInfoComponent = (props) => {
    const {name, value} = props;
    return (
        
            <div>{value}{name}</div>
     
    );
};
const YoutubeComponent = (props) => {
    const {weather} = props;
 
    return (
        <>
            <YoutubeContainer>
                <Condition>
                    {/* <span>{`${Math.round(weather?.main?.temp)}°F`}</span>
                    {`    ${weather?.weather[0].description}`} */}
                </Condition>
           
            </YoutubeContainer>

         
            <YoutubeInfoContainer>
                <YoutubeInfoComponent name={" Title"} value={`${Math.round(weather?.main?.temp_max)}`}/>
                {/* <YoutubeInfoComponent name={" : Min Temp"} value={`${Math.round(weather?.main?.temp_min)}°F`}/> */}
            </YoutubeInfoContainer>
        </>
    );
};

export default YoutubeComponent;