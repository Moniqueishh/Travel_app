import { useEffect, useState } from "react";
// import axios from "axios";
import SearchBar from "../components/SearchBar";

const Results = () =>{
    const [data, setData] = useState({});
    useEffect(() => {
      const getWeatherFromApiAsync = async () => {
        const resopnse = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?units=imperial&q=chicago&appid=dc3ef453ab3d9fcae3c05cb7809a765b"
        );
        const resopnseJson = await resopnse.json();
        console.log("json", resopnseJson);
        setData(resopnseJson);
      };
      getWeatherFromApiAsync();
    }, []);
  
    return (
<div>


<div className="flex flex-col w-full lg:flex-row">
<div className="grid flex-grow h-32 place-items-center">
        <h1>{data?.name}</h1>
                </div>
            </div>
            {/* <Button variant="danger" onClick={clearTrip}>Clear Trips</Button> */}
{/* Styling for cards */}

<div className="flex flex-col w-full lg:flex-row mt-6 mb-24">
<div className="grid flex-grow h-32 place-items-center">
    
    {/* Actual card with info */}

    <div className="card w-96 bg-secondary text-primary-content">
        <div className="card-body">
            <h2 className="card-title">Weather for {data?.name}</h2>
            {/* <p>{data?.name} </p> */}
            <p>Current Temp: {data?.main?.temp} °F</p>
            <p>Min Temp: {data?.main?.temp_min} °F</p>
            <p>High Temp: {data?.main?.temp_max} °F</p>
            <div className="card-actions justify-end">
            </div>
        </div>
        </div>
    
    </div> 
    
<div className="divider lg:divider-horizontal"></div> 

</div>


 




</div>
    )
}

export default Results;