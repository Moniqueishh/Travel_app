// import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import Axios from "axios";
import CityComponent from "./CityComponent"
import WeatherComponent from "./WeatherComponent"
// import { useNavigate } from "react-router-dom";


const SearchPage = (props) =>{

    const [city, updateCity] = useState();
    const [weather, updateWeather] = useState();
    const fetchWeather = async (e) => {
      e.preventDefault();
      const response = await Axios.get(
        `https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&appid=dc3ef453ab3d9fcae3c05cb7809a765b`,
      );
      updateWeather(response.data);

      }
    // let navigate = useNavigate(); 
    // const routeChange = () =>{ 
    //   let path ='/results'; 
    //   navigate(path);
    // }

    
    return(
<div>
<div className="flex flex-col w-full lg:flex-row mt-16 mb-24">
< div className="grid flex-grow h-23 place-items-center">
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="https://i.pinimg.com/736x/5e/7d/1a/5e7d1a01e56ec6063e7ba7adea8ccc2e.jpg" alt="" />
    </div>
  </div>
  <div className="chat-header">
    Obi-Wan Kenobi
    <time className="text-xs opacity-50">  12:45</time>
  </div>
  <div className="chat-bubble">Wanna go to Vegas this weekend? 🎰🍾</div>
  <div className="chat-footer opacity-50">
    Delivered
  </div>
</div>

<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="https://external-preview.redd.it/Tz6nNKdrp6UlZhO26SIFcl8Tl1aH_eF7YLYK7A7N3RU.jpg?auto=webp&s=a9189138061b013f03beefdc3111d4dc97d97a1a"alt="" />
    </div>
  </div>
  <div className="chat-header">
    Yoda
    <time className="text-xs opacity-50">  12:46</time>
  </div>
  <div className="chat-bubble">A great Fortune I see 🌟</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>

<div className="chat chat-end">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img src="https://i.pinimg.com/736x/66/25/5c/66255ce9b80364fadf15f743ce53c4db--hayden-christensen-sith-lord.jpg"alt="" />
    </div>
  </div>
  <div className="chat-header">
    Anakin
    <time className="text-xs opacity-50">  12:46</time>
  </div>
  <div className="chat-bubble">I'm in! Lets check Monique's Travel app! ⚫🤖⚔️</div>
  <div className="chat-footer opacity-50">
    Seen at 12:46
  </div>
</div>

        <div onSubmit={fetchWeather} className ="mt-20 pb-2 search">
            <form action="">
            {city && weather ? (
          <WeatherComponent weather={weather} city={city} />
        ) : (
          <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
        )}
        </form>
        </div>
</div>
</div>
</div>


    )
}

export default SearchPage;