import React from 'react'
import "./Contact.css";

function Contact() {
  return (
    <div className='aboutus_page' id = "contact">
      <div className="heading_contact">
        <h1 id="developers">Developers</h1>
      </div>
      <div class="container">
        <div class="card">
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQGJywWNf78iWQ/profile-displayphoto-shrink_800_800/0/1649757780981?e=1661385600&v=beta&t=_HJYdkvZY9mv8GaKnLT-mub53T7PjXOSQGd92vIc-u0" alt="Person" class="card__image"/>
          <p class="card__name">Utsav Sinha<br/><font size="3"><i>2nd Year B.E student</i></font><br/><font size="4"><i>Full Stack Developer</i></font></p>
          <div class="grid-container">
          </div>
          <ul class="social-icons">
            <li><a href="https://www.instagram.com/i_m_utsavs/" target="_blank"><i class="fa fa-instagram"></i></a></li>
            <li><a href="https://github.com/utsavs22" target="_blank"><i class="fa fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/utsav-sinha-704a90216/" target="_blank"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
        <div class="card">
          <img src="https://media-exp1.licdn.com/dms/image/C5603AQGBEdfyAtlQ7A/profile-displayphoto-shrink_800_800/0/1634502615650?e=1661385600&v=beta&t=76zYl6G3JU57eTKKDCRk4H3wc5_j22X8Lr-QTCkYh0k" alt="Person" class="card__image"/>
          <p class="card__name">Saishwar Anand<br/><font size="3"><i>2nd Year B.E student</i></font><br/><font size="4"><i>Full Stack Developer</i></font></p>
          <div class="grid-container">
        </div>
          <ul class="social-icons">
            <li><a href="https://www.instagram.com/saishwar_anand_32/" target="_blank"><i class="fa fa-instagram" target="_blank"></i></a></li>
            <li><a href="https://github.com/saianand32" target="_blank"><i class="fa fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/saishwar-anand-b28673204/?originalSubdomain=in" target="_blank"><i class="fa fa-linkedin"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Contact