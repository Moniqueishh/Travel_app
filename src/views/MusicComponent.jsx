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

const MusicContainer = styled.div`
display: flex;
width: 40%;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
flex-wrap: wrap;
`;

const MusicInfoContainer = styled.div`
  width: 90%;
`;


const MusicInfoComponent = (props) => {
    const {name, value} = props;
    return (
        
            <div>{value}{name}</div>
     
    );
};
const MusicComponent = (props) => {
    const {music} = props;
 
    return (
        <>
            <MusicContainer>
                <Condition>
                    <span>{`${(music?.playlists?.items[3]['name'])}`}</span>
                    {/* {`    ${music?.weather[0].description}`} */}
                </Condition>
           
            </MusicContainer>

         
            <MusicInfoContainer>
                <MusicInfoComponent name={"Name"} value={`${(music?.playlists?.items[3]['name'])}`}/>
                <MusicInfoComponent name={"Image"} value={`${(music?.playlists?.items[3]['images'][0]['url'])}`}/>
                <MusicInfoComponent name={"Tracks"} value={`${(music?.playlists?.items[3]['tracks']['href'])}`}/>
            </MusicInfoContainer>

        </>
    );
};

export default MusicComponent;