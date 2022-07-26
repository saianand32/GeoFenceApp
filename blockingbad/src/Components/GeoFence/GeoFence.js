import React,{useState,useRef} from 'react';
import { GoogleMap, LoadScript,Marker,Polyline } from '@react-google-maps/api';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import axios from 'axios'
import './GeoFence.css'
const url = 'http://127.0.0.1:8000/fencepoints/boy'
const url2 = 'http://127.0.0.1:8000/livelocationtemp/live'
// const url = 'https://geofenceserver.herokuapp.com/fencepoints/boy'
// const url2 = 'https://geofenceserver.herokuapp.com/livelocation/live'
// const url2 = 'https://25e7-210-212-203-67.in.ngrok.io/livelocationtemp/live'


let tempLat = 13.129397

let tempLon = 77.587236
let strlat = ""
let strlon = ""

// let triangleCoords = [
//   {lat: 13.13072394060702, lng: 77.58632404893493},
//   {lat: 13.129647760978992, lng: 77.58904917329406},
//   {lat: 13.127432696808459, lng: 77.58904917369406},
//   {lat: 13.13072394060702, lng: 77.58632404893493}

// ];



function GeoFence() {

    // let strlat2 = latref.current.value
    // let strlon = ""
    
    
const [triangleCoords,setTriangleCoords] = useState([]);
    
 

    const [bool,setBool] = useState("false")
    const latref = useRef(null);
    const lonref = useRef(null);
    const livelat = useRef(null);
    const livelon = useRef(null);
    const polypath = useRef(null);
  
    const handleOnClick = async() => {
      let latitude = latref.current.value;
      let longitude = lonref.current.value;
      latref.current.value = ""
      lonref.current.value = ""
      strlat="";
      strlon="";
  
      try {
        const resp = await axios.post(url,{fencelat:latitude,fencelon:longitude});
        setTriangleCoords([]);
       
        // console.log(resp.data);
        // setDownloadMessage("Your download will start shortly")
      } catch (error) {
        console.log("frontend error")
      }
    }

    function handleOnChange(){
        strlat = latref.current.value
        strlon = lonref.current.value
    }
  
  
    const getBool= async()=>{
    
        let resp = await axios.get(url);
       
        // let val = (resp.data);
        console.log(resp.data)
        setBool(resp.data.toString());
    
  
        setTimeout(() => {
          getBool();
        }, 3000);
      
    }
  
    const livesend = async() =>{
      let livelati = livelat.current.value
      let livelongi = livelon.current.value
      let response= await axios.post(url2,{livelat:livelati,livelon:livelongi})
    }
  
  
  
    const mapStyles = {        
      height: "60vh",
      width: "86vw",
      border:"6px solid rgba(252, 125, 33, 1)",
      borderRadius:"10px"
      // background: "linear-gradient(90deg, rgba(87, 123, 221, 1) 0%, rgba(252, 125, 33, 1) 46%, rgba(252, 125, 33, 1) 60%)",
      // webkitMask: "linear-gradient(#fff 0 0) content-box,linear-gradient(#fff 0 0)",
      // webkitMaskComposite: "xor",
      // maskComposite: "exclude",
      // boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px"
    
    };
     
   
        const [ currentPosition, setCurrentPosition ] = useState({
          lat: 13.129397, lng: 77.587236
        });
        console.log("herr")
  
        const onMarkerDragEnd = (e) => {
          const lat = e.latLng.lat();
          const lng = e.latLng.lng();
          setCurrentPosition({ lat, lng})
          console.log(lat)
          tempLat = lat
          tempLon = lng
          latref.current.value = strlat+=tempLat+","
          lonref.current.value = strlon+=tempLon+","
          let temparr = triangleCoords;
          temparr.push({lat:tempLat,lng:tempLon});
          setTriangleCoords(temparr)
          console.log(triangleCoords)
         
        };
  
        const mapPointAdd = () =>{
        //   latArr.push(tempLat)
        //   lonArr.push(tempLon)
        //   console.log(latArr+"\n"+lonArr)
          latref.current.value = strlat+=tempLat+","
          lonref.current.value = strlon+=tempLon+","
          let temparr = triangleCoords;
          temparr.push({lat:tempLat,lng:tempLon});
          setTriangleCoords(temparr);
          console.log(triangleCoords);
        }

        const PolyPathLine=()=>{
          console.log(triangleCoords,"hdshgxg")

          return(
            <div>
              <Polyline
          
          path={triangleCoords}
          strokeColor="#FF5733"
          strokeOpacity={0.8}
          strokeWeight={2} 
          id  = "polypath"
          ref = {polypath}/>
            </div>
          )
        }
  
  
  
    return (
      <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",maxHeight:"100vh"}} id = "create">
      <div style={{textAlign:"center",marginTop:"22vh"}}>
        <h1 id="geoHeading">Customize Your GeoFence</h1>
      <LoadScript
         googleMapsApiKey='AIzaSyB0fs4ZMf6ItAB0z0t_osPQBr8DbTS3tpw'>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            
            //  center={currentPosition}
          />
        {console.log("hello")}
       </LoadScript>
       
       <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={currentPosition} //************************************************************************************************************************************************************** */
            >
          {/* {console.log("hello11")} */}
          {
              currentPosition.lat ? 
              <Marker
              position={currentPosition}
              onDragEnd={(e) => onMarkerDragEnd(e)}
              draggable={true} /> :
              null
            }
            {/* <Polyline
          
          path={triangleCoords}
          strokeColor="#0000FF"
          strokeOpacity={0.8}
          strokeWeight={2} 
          id  = "polypath"
          ref = {polypath}/> */}
          <PolyPathLine />
       </GoogleMap>
  
       {/* <button style={{width:"100px",height:"50px"}} onClick = {mapPointAdd}>ADD</button> */}
      </div>
     <div>
     
     <input type="text" name="" id="" ref = {latref} onChange={handleOnChange} />
     <input type="text" name="" id="" ref = {lonref} onChange={handleOnChange}  />

     <Link to="alert">
     <button className='activateButton' onClick={handleOnClick}>Add Fence</button>
     </Link>
  {/* <br /> */}
     <input type="text" name="" id="" ref = {livelat}/>
    <input type="text" name="" id="" ref = {livelon}/>
    <button style={{width:"90px",height:"40px"}} onClick={livesend}>livelocsend</button>
     {/* <h1>point isInside boolVal = {bool}</h1>
     <button style={{width:"90px",height:"30px"}} onClick={getBool}> get bool</button> */}
     </div>

    
     </div>
    );
}

export default GeoFence