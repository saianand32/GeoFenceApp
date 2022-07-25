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
            <b className='number_color'>1.</b> Select the websites you want to block in the "<i><b>Select Websites to Block</b></i>" section of the website.
            <br/>
            <b className='number_color'>2.</b> If you want to block any other website other than the specified websites, then enter the name of the website or the url of the website. The domain name to be blocked will be automatically detected.
            <br/>
            <b className='number_color'>3.</b> After selecting the websites click "<i><b>Click and Download File</b></i>" button.
            <font size="3">--after waiting for 3 seconds a .zip file will be downloaded--</font>
            <br/>
            <b className='number_color'>4.</b> Unzip the file at any place on your pc.
            <br/>
            <b className='number_color'>5.</b> Now go to "<i><b>Manage Extensions</b></i>" of chrome and select "<i><b>Load Unpacked</b></i>" at top left corner of the page.
            <br/>
            <b className='number_color'>6.</b> Now navigate to the zipped file and select it.
            <br/>
            <b className='number_color'>7.</b> Switch on the extension and volla !! It's done.
           </p>
        </div>
    </div>
  )
}

export default About