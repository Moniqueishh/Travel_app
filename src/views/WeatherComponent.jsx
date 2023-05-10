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

const WeatherContainer = styled.div`
display: flex;
width: 40%;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`;

const WeatherInfoContainer = styled.div`
  width: 90%;
`;


const WeatherInfoComponent = (props) => {
    const {name, value} = props;
    return (
        
            <div>{value}{name}</div>
     
    );
};
const WeatherComponent = (props) => {
    const {weather} = props;
 
    return (
        <>
            <WeatherContainer>
                <Condition>
                    <span>{`${Math.round(weather?.main?.temp)}°F`}</span>
                    {`    ${weather?.weather[0].description}`}
                </Condition>
           
            </WeatherContainer>

         
            <WeatherInfoContainer>
                <WeatherInfoComponent name={" : Max Temp"} value={`${Math.round(weather?.main?.temp_max)}°F`}/>
                <WeatherInfoComponent name={" : Min Temp"} value={`${Math.round(weather?.main?.temp_min)}°F`}/>
            </WeatherInfoContainer>
        </>
    );
};

export default WeatherComponent;