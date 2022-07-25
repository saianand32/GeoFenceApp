import React,{useState} from 'react'
import './Alert.css'
import axios from 'axios'
const url = 'http://127.0.0.1:8000/fencepoints/boy'
// const url = 'https://geofenceserver.herokuapp.com/fencepoints/boy'



function Alert() {

  const [bool, setBool]  = useState("false")

  const activateGeo=async()=>{
    try {
      let resp = await axios.get(url);
      setBool(resp.data.toString());
      console.log("hii")
      setTimeout(() => {
        activateGeo();
      }, 3000);
    } catch (error) {
      console.log(error.response.data);
    }
  
  }
  
  

  return (
    <>
    <div className='alertContainer' style={{marginTop:"40vh"}}>

    {/* <h1 >boolval = {mode}</h1> */}
    <h1 >Your GeoFence is {bool} !!!</h1>
    <div className="alertanim">

    </div>
    <button className='activateButton' onClick={activateGeo} style={{background:"white"}}>Activate Geofence</button>

    </div>
    </>
  )
}

export default Alert