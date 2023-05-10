

import { useState } from "react";
import Axios from "axios";
import SearchPage from "./SearchPage";
import SearchResults from "./SearchResults";


const WeatherApi = () =>{

    const [city, updateCity] = useState();
    const [weather, updateWeather] = useState();
    const fetchWeather = async (e) => {
      e.preventDefault();
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&appid=dc3ef453ab3d9fcae3c05cb7809a765b`,);
        let data = await response.json();
        console.log(data);
      updateWeather(response.data);

let cityy = data.name;
let temp = data.main.temp;
let temp_high = data.main.temp_max;
let temp_low = data.main.temp_min
console.log(cityy, temp, temp_high, temp_low)




    };

    return (
        <div>
          <div>React Weather App</div>
          {city && weather ? (
            <SearchResults weather={weather} city={city} />
          ) : (
            <SearchPage updateCity={updateCity} fetchWeather={fetchWeather} />
          )}
       </div>
      );
    }
export default WeatherApi;


