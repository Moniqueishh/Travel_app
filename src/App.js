import "./styles/globals.css"
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import Results from './views/Results';
import { Toaster } from "react-hot-toast";
import SavedTrips from "./views/SavedTrips";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="App">
      <Nav />
      <Toaster containerClassName="mt-16" />
      <Routes>
        <Route children path='/' element={<Home />} />
        <Route children path='/login' element={<Login />} />
        <Route children path='/register' element={<Register />} />
        <Route children path='/results' element={<Results />} />
        <Route children path='/savedtrips' element={<SavedTrips />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
