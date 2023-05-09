


const SavedTrips = () =>{



// For each trip I Heart(like)
// Return a card with the name of the trip below:


    return(
<div>
        
        <div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-grow h-32 place-items-center">
        <h1>My Trips</h1>
                </div>
            </div>

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
      <button className="btn btn-primary">Remove</button>
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