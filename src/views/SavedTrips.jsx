// import { useContext } from "react";
// import { DataContext } from "../context/DataProvider";
import { Button } from "react-bootstrap";
// import { useDatabase, useUser } from "reactfire";
// import { set, ref } from "firebase/database";
// import { Link } from "react-router-dom";

const SavedTrips = () =>{



return (

<div>
        
        <div className="flex flex-col w-full lg:flex-row">
<div className="grid flex-grow h-32 place-items-center">
        <h1 class="text-3xl">My Saves 🤍</h1>
                </div>
            </div>
            {/* <Button variant="danger" onClick={clearTrip}>Clear Trips</Button> */}
{/* Styling for cards */}

<div className="flex flex-col w-full lg:flex-row mt-6 mb-24">
<div className="grid flex-grow h-32 place-items-center">
    
    {/* Actual card with info */}

    <div className="card w-96 bg-base-100 shadow-xl image-full">
<figure><img src="/" alt="" /></figure>
<div className="card-body">
    <h2 className="card-title">Paris</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    <div className="card-actions justify-end">
    <Button variant="warning" id="r-item" >Remove</Button>
    </div>
</div>
</div>
    
    </div> 
    
<div className="divider lg:divider-horizontal"></div> 

</div>
</div>


)



}


export default SavedTrips;

