import React from 'react'
import "./About.css"

function About() {
  return (
    <div id="about">
      <div id="heading_how_div">
        <h1 id="heading_how">How to use</h1>
      </div>
        <div className='how_to_use' > 
           <p className='text_how_to_uses'>
            <b className='number_color'>1.</b> Click on the "<i><b>Create</b></i>" option in navbar.
            <br/>
            <b className='number_color'>2.</b> Use the given marker on the maps interface to draw the required geofence around the location.
            <br/>
            <b className='number_color'>3.</b> After drawing the geofence, click on the "<i><b>Add Geofence button</b></i>" .
           
            <br/>
            <b className='number_color'>4.</b> This will take you to the activate fence page.
            <br/>
            <b className='number_color'>5.</b> Now go to "<i><b>Your Mobile App</b></i>" and click the button to send "<i><b>Location</b></i>" to the server.
            <br/>
            <b className='number_color'>6.</b> Now on the activate fence page click on the "<i><b>Activate Fence</b></i>" button to activate your fence.
            <br/>
            <b className='number_color'>7.</b>Now Your fence is up and running !!!
           </p>
        </div>
    </div>
  )
}

export default About