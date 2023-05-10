import styled from "styled-components";
import React from "react";

const SearchBox = styled.form`
  display: flex;

`;


const City2Component = (props) => {
  const { updateCity, fetchBrew } = props;
  return (
    <>
      
      <SearchBox onSubmit={fetchBrew}>
        <input
          onChange={(e) => updateCity(e.target.value)}
          placeholder="City" className="input input-bordered w-full max-w-xs"
        />
        <button type={"submit"} className="btn btn-secondary ml-2 pt-4 pb-6">Search</button>
      </SearchBox>
    </>
  );
};
export default City2Component;