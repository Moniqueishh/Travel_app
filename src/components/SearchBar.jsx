// import axios from "axios";
import { useContext } from "react";
// import { Send } from "react-feather";
// import { toast } from "react-hot-toast";
// import { z } from "zod";
import { AuthContext } from "../context/AuthProvider";
// import { WEB_URL } from "../lib/CONSTANTS";
import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";


const SearchBar = () => {



  const { user } = useContext(AuthContext);

  const [searchInput, setSearchInput] = useState("");

  const cities = [

    { name: "Chicago"},
    { name: "Paris"},
    { name: "New York"},
    { name: "Berlin"},
    { name: "San Francisco"},
    { name: "Amsterdam"},
    { name: "Milan"},
    { name: "London"},
    { name: "Austin"},
    { name: "Dallas"},
    { name: "Portland"},
    { name: "Seattle" },
    { name: "Los Angeles"},
    { name: "Miami"},
    { name: "San Antonio"},
    { name: "Washington DC"},
    { name: "San Jose" },
    { name: "San Diego" },
    { name: "Munich"},
    { name: "Cape Town"},
    { name: "Waco" },
    { name: "Lubbock"},
    { name: "Paris" },
    { name: "Dublin" },
  
  ];
  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };
  
  if (searchInput.length > 0) {
      cities.filter((city) => {
      return city.name.match(searchInput);
  });
  }
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path ='/results'; 
    navigate(path);
  }
  if (!user.loggedIn) return;

  return (
  <div>
          <input type="text" placeholder="Enter City Here!" className="input input-bordered input-secondary max-w-xs"
              onChange={handleChange} value={searchInput}
              /> <button className="btn btn-active text-white ml-1" onClick={routeChange}>Search</button>
            
</div>

  );
};

export default SearchBar ;