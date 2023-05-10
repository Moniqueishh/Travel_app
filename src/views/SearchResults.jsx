import React, { useState } from "react";
import Axios from "axios";
import CityComponent from "./CityComponent"
import WeatherComponent from "./WeatherComponent"


function App() {
    const [city, updateCity] = useState();
    const [weather, updateWeather] = useState();
    const fetchWeather = async (e) => {
      e.preventDefault();
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&appid=dc3ef453ab3d9fcae3c05cb7809a765b`,
      );
      updateWeather(response.data);
      console.log(response)
    };
    return (
        <>

<div className="flex flex-col w-full">
  <div className="grid h-20 card rounded-box place-items-center mt-10 mb-5 ml-7 mr-7 text-5xl bg-secondary">{city}</div> 
  <div className="divider"></div> 
</div>
        
       
     

     

<div className="flex flex-col w-full lg:flex-row mb-32 mt-24">
<div className="grid flex-grow h-32 card  rounded-box place-items-center">

<div className="card w-96 bg-base-100 shadow-xl image-full ">
<figure><img src="/" alt="" /></figure>
<div className="card-body">
    <h1>{city} Weather Details</h1>
    <h2 className="card-title">
    {city && weather ? (
          <WeatherComponent weather={weather} city={city} />
        ) : (
          <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
        )}

    </h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    <div className="card-actions justify-end">
    </div>
</div>
</div>


</div> 
<div className="divider lg:divider-horizontal">& </div> 
<div className="grid flex-grow h-32 card  rounded-box place-items-center">

{/* Beginning of second card  */}
<div className="card w-96 bg-base-100 shadow-xl image-full">
<figure><img src="/" alt="" /></figure>
<div className="card-body">
    <h2 className="card-title">Paris</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    <div className="card-actions justify-end">

    </div>
</div>
</div>
{/* End of card */}

</div>
</div>
</>
    );
  }
  
  export default App;
