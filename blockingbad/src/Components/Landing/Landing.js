import React,{useEffect,useRef}  from 'react'
import "./Landing.css"
import Lottie from 'lottie-web';
import Typewriter from 'typewriter-effect';


function Landing() {

    const container = useRef(null)
    useEffect(()=>{
    const instance = Lottie.loadAnimation({
     container:container.current,
     renderer:'svg',
     loop:true,
     autoplay:true,
     animationData:require('./ghost.json')
    })
  

    return () => instance.destroy();
  
  },[]);

  return (
    <div className = "landContainer">
       
      <div className='lotti_container'>
    
        
        <div className="container landImgSection" ref = {container} />
        
        
      </div>

        <div className='landHeading' > 
           
        <h1 style={{marginTop:"1.3em"}}>
          <Typewriter
            onInit={(typewriter)=>{
              typewriter
              .typeString("Hello There !!")
              .pauseFor(500)
              .typeString("<br>It's me, <span style= 'color:#fc7c21'> Blocking Bad </span>")
              .pauseFor(800)
              .typeString("<br>I can help you with blocking<br>unwanted sites for your children and<br>")
              .pauseFor(800)
              .typeString("if you are in your work mode,<br> then I can be helpful in <br>enhancing your productivity.")
              .start()
            }} 
          />
        </h1>
        

        </div>
    </div>
  )
}

export default Landing