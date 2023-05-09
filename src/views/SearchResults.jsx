// import { useEffect, useState } from "react";
// import {SearchBar} from "../components/SearchBar"

const SearchResults = ({results}) =>{
  console.log(results)
    return (
        <div className="results-list">
<div>{results}</div>

              <div className="flex flex-col w-full lg:flex-row">
<div className="grid flex-grow h-32 place-items-center">
        <h1>{results}</h1>
                </div>
            </div>
            {/* <Button variant="danger" onClick={clearTrip}>Clear Trips</Button> */}
{/* Styling for cards */}

<div className="flex flex-col w-full lg:flex-row mt-6 mb-24">
<div className="grid flex-grow h-32 place-items-center">
    
    {/* Actual card with info */}

    <div className="card w-96 bg-secondary text-primary-content">
        <div className="card-body">
            <h2 className="card-title">Weather for {results}</h2>
            {/* <p>{results?.name} </p> */}
            <p>Current Temp: {results?.main?.temp} °F</p>
            <p>Min Temp: {results?.main?.temp_min} °F</p>
            <p>High Temp: {results?.main?.temp_max} °F</p>
            <div className="card-actions justify-end">
            </div>
        </div>
        </div>
    
    </div> 
    
<div className="divider lg:divider-horizontal"></div> 

</div>


        </div>
      );
    
}

export default SearchResults;