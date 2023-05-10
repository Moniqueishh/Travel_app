import "./styles/globals.css"
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import SearchResults from './views/SearchResults';
import { Toaster } from "react-hot-toast";
import SavedTrips from "./views/SavedTrips";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import SearchPage from "./views/SearchPage";
import WeatherApi from "./views/WeatherApi";
import CityComponent from "./views/CityComponent";
import WeatherComponent from "./views/WeatherComponent";




function App() {

  const [results, setResults] = useState([]);
  

  return (
    <div className="App">
      <Nav ><SearchBar setResults={setResults}/></Nav>
      <Toaster containerClassName="mt-16" />
      <Routes>
        <Route children path='/' element={<Home />} />
        <Route children path='/login' element={<Login />} />
        <Route children path='/register' element={<Register />} />
        <Route children path='/results' element={<SearchResults results={results}/>} />
        <Route children path='/savedtrips' element={<SavedTrips />} />
        <Route children path='/searchpage' element={<SearchPage />} />
        <Route children path='/weatherapi' element={<WeatherApi />} />
        <Route children path='/weathercomponent' element={<WeatherComponent />} />
        <Route children path='/citycomponent' element={<CityComponent />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


