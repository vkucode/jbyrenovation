import React from 'react'
import 'animate.css'
import '../assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import imgJbyLogo from '../assets/img/logo.svg'

const Accueil = () => {

  return (
    <>
    <canvas id="gradient-canvas" data-transition-in />
    <div className='container'>
      <div className='row'>
        <div className='col-12 contentLoading'>
          <div className='textLoading'>
            <img src={imgJbyLogo} alt="" />
            <h1>Site en maintenance</h1>
            <h4>Merci de votre compréhension</h4>
          </div>
          <div className="loader">
          </div>
        </div>  
      </div>
    </div>
    
    </>
  )
}

export default Accueil