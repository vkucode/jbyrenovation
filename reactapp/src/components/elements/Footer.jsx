import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/footer.css'
import JBYLogo from '../../assets/img/logo1.png'
import facebookImg from '../../assets/img/facebook.png'
import instagramImg from '../../assets/img/instagram.png'
import vkuLogo from '../../assets/img/vkuLogo.png'

const Footer = () => {

    const actualData = new Date().getFullYear()

  return (
    <section className='footerPage'>
      <div className='container'>
        <div className='row'>
        <img src={JBYLogo} alt="" className='footerImg' width={"200px"} />
        <h5>Le spécialiste en rénovations complètes</h5>
        <br /><br /><br />
          <div className='col-12 col-md-4 mt-3'>    
            <h3>Liens Utils</h3>
            <div className='linksContainer'>
              <a href="#">Accueil</a>
              <a href="#">Services</a>
              <a href="#">Info</a>
              <a href="#">Nos Projets</a>
              <a href="#">Demande de devis</a>
            </div>
            <br />
          </div>
          <div className='col-12 col-md-4 mt-3'>
            <h3>
            Vous avez une question?
            </h3>
            <a href="mailto: contact@jbyrenovation.fr">contact@jbyrenovation.fr</a><br />
            <a href="tel: +33695198600">06 95 19 86 00</a>
        </div>
        <div className='col-12 col-md-4 mt-5'>
        <h3>Reseaux Sociaux</h3>
            <div className='linksContainer'>
              <a href="#"><img src={facebookImg} alt="" width={"30px"} /></a>
              <a href="#"><img src={instagramImg} alt="" width={"30px"} /></a>
            </div>
        </div>
        </div>
        <div className='row mt-5'> 
          <hr />
          <div className='col-12'>
            <p>
            © Tous droits réservés JbyRenovation.fr - {actualData} - <Link to="mentions_legales" style={{fontSize: "medium"}}>Mentions Legales</Link> | 
            Powered by <a href="https://vkucode.com/"><img src={vkuLogo} alt="" width={"30px"} /></a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer