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

    <div className="card w-96 bg-secondary text-primary-content weather">
        <div className="card-body content">
            <h2 className="card-title">Weather for {results}</h2>
            {/* <p>{results?.name} </p> */}
            <h2 className="temp_high">High Temp</h2>
            <h1 className="temp">72<span id="F">&#8457;</span></h1>
            <h2 className="temp_low">Temp low:</h2>
            <h1 className="city">City:<i class="material-icons locationIcon">place</i> Raleigh, NC</h1>
                  
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