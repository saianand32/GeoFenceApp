import React,{useState} from 'react'
import './Alert.css'
import axios from 'axios'
const url = 'http://127.0.0.1:8000/fencepoints/boy'
// const url = 'https://geofenceserver.herokuapp.com/fencepoints/boy'
let num = 0;




function Alert() {

  const [bool, setBool]  = useState("false");
  const [str,setStr] = useState("Dormant....")
  const [borders,setBorders] = useState("wheat");
  const [text,setText] = useState("Click the ActivateFence button below ");
  const [btnTxt,setBtnTxt] = useState("Activate GeoFence");
  const audio = new Audio(
    // "https://vgmsite.com/soundtracks/super-mario-galaxy/hrqhhgxx/2-18%20To%20the%20Observatory%20Grounds%202.mp3"
    // "https://audio.jukehost.co.uk/bNEHcxJ5f5GoKKCILUJyR071DRZ7iHVD"
    "https://audio.jukehost.co.uk/ycbIGmuwvPTWXm50gToWeCFQlaBMOHWg"

  );


  const activateGeo=async()=>{
    try {
      let resp = await axios.get(url);
      setBool(resp.data.toString());
      let a = resp.data.toString();
    

      setStr("Active !!!")
      setBtnTxt("Active")

      if(a=="true"){
        
        setBorders("green");
        setText("Your ward is inside the Safe Zone");
        num=0;
      }
      if(a=="false")
      {
      
        setBorders("red");
        setText("Warning!!! Your ward is outside the fence Zone");
        if(num===0){
          // alert("Warning!! Ward outside the zone");
          audio.play();
          num=1;
        }
      }

      setTimeout(() => {
        activateGeo();
      }, 1000);

    } catch (error) {
      console.log(error.response.data);
    }
  
  }
  
  

  return (
    
    <div  id="alert" style={{marginBottom:"auto" ,height:"100vh"}} className='alertContainer' >

    {/* <h1 >boolval = {mode}</h1> */}
    <div >
    <h1 >Your GeoFence is {str}</h1>
    <div className={borders}>
      <div className='sample' style={{margin:"auto"}}>
        {/* <img src="" alt=""/> */}
       <h2 className="textAlert">{text}</h2>
       <div className="light" > </div>
       
      </div>
    </div>
    <button className='activateButton' onClick={activateGeo}>{btnTxt}</button>
    </div>

    </div>
  
  )
}

export default Alert