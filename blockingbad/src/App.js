import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import GeoFence from './Components/GeoFence/GeoFence';
import Alert from './Components/Alert/Alert';
import Home from './Components/Landing/Home/Home';



function App() {
  
  return (
    <div className="app">
        <div className="sections">
          <Navbar/>
          <Home/>
          {/* <Landing/> */}
          <About/>
          {/* <Link to="/alert">Alert</Link> */}

          <GeoFence  />
          <Alert />
          <Contact/>
        </div>
    </div>
  );
}

export default App;
