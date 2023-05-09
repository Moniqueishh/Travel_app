import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";



  export const SearchBar = ({ setResults }) => {
    const [input, setInput] = useState('');
  
let url=`https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${input}&appid=dc3ef453ab3d9fcae3c05cb7809a765b`

    const fetchData = (value) => {
          fetch(url).then((response) => response.json())
          .then((json) => {
            console.log(json)
            const values = Object.values(json);
            const results = values.filter((city) => {
              return value && city && city.name && city.name.toLowercase().includes(value)

              // return console.log(results) 
            })

    // const getInputData = (event) => {
    //   if (event.key === 'Enter') {
    //     axios.get(url).then((response) =>{
    //       setInput(response.data)
    //     })
    //   }
    // }
              
            setResults(results);
            
          });
          
      };
  
    const handleChange = (value) => {
      setInput(value);
      fetchData(value);
    };

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path ='/results'; 
      navigate(path);
    }
  
    return (
      <div className="input-wrapper">
        <input type="text" placeholder="Enter City Here!" className="input input-bordered input-secondary max-w-xs"
          value={input}
          onChange={(e) => handleChange(e.target.value)}/>
          <button className="btn btn-active text-white ml-1" onClick={routeChange}>Search</button>
      </div>
    );
  };

export default SearchBar ;