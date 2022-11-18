import React from "react";
import './Home.css'

function Home() {
  return (
    <div className="appContainer" style={{display:"flex",flexDirection:"row"}}>

      <div className="imgSection" style={{display:"flex",justifyContent:"center"}}>
     <img src="https://i.postimg.cc/wTS3mvtR/pngwing-com.png" alt="" width="400px" height="400px" style={{marginTop:"70px"}} />
      </div>
  

      <div className="homeHeading">
        <h1 style={{ marginTop: "1.3em" }}>
          Hello There !!
          <br />
          This is a Custom GeoFence Maker
          <br />It can help you with building custom geofences 
          <br />
          for Alzheimer Patients at home with ease.
          <br />
          <br />
          Continue below to get Started !!
        
        </h1>
      </div>

    </div>
  );
}

export default Home;
