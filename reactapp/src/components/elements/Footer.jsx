import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/footer.css'
import { MdEditDocument } from "react-icons/md";
import JBYLogo from '../../assets/img/logo1.png'
import facebookImg from '../../assets/img/facebook.png'
import instagramImg from '../../assets/img/instagram.png'
import vkuLogo from '../../assets/img/vkuLogo.png'


const Footer = () => {

  const RoundedSlideButton = () => {
    return (
      <button
        className={`
          text-lg relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
          border-orange-300 px-4 py-2 font-semibold
          uppercase text-orange-300 transition-all duration-500
          
          before:absolute before:inset-0
          before:-z-10 before:translate-x-[150%]
          before:translate-y-[150%] before:scale-[2.5]
          before:rounded-[100%] before:bg-orange-300
          before:transition-transform before:duration-1000
          before:content-[""]
  
          hover:scale-105 hover:text-neutral-900
          hover:before:translate-x-[0%]
          hover:before:translate-y-[0%]
          active:scale-95`}
      >
        <MdEditDocument />
        <span>Demande de devis</span>
      </button>
    );
  };

    const actualData = new Date().getFullYear()

  return (
    <section className='footerPage'>
      <div className='container'>
        <div className='row'>
        <img src={JBYLogo} alt="" className='footerImg' width={"200px"} />
        <h5>Le spécialiste en rénovations complètes</h5>
        <br /><br />
          <div className='col-12 p-2 col-md-4 mt-3 md:mt-0'>    
            <h3>Liens Utils</h3>
            <div className='linksContainer'>
              <Link to="/">Accueil</Link>
              <Link to="/">Services</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/projets">Projets</Link><br /><br /><br />
              <Link to="/contact"><RoundedSlideButton /></Link>
            </div>
            <br />
          </div>
          <div className='col-12 p-2 col-md-4 mt-3 md:mt-0'>
            <h3>
            Vous avez une question?
            </h3>
            <a href="mailto: contact@jbyrenovation.fr">contact@jbyrenovation.fr</a><br />
            <a href="tel: +33749374090">07 49 37 40 90</a>
        </div>
        <div className='col-12 p-2 col-md-4 mt-3 md:mt-0'>
        <h3>Reseaux Sociaux</h3>
            <div className='linksContainer'>
              <a href="#"><img src={facebookImg} alt="" width={"30px"} /></a>
              <a href="#"><img src={instagramImg} alt="" width={"30px"} /></a>
            </div>
        </div>
        </div>
        <div className='flex flex-row mt-10'> 
          <hr />
          <div className='col-12'>
            <p className='w-full'>
            © Tous droits réservés JbyRenovation.fr - {actualData} - <Link to="mentions_legales" style={{fontSize: "medium"}}>Mentions Legales</Link>
            </p>
            <p className='w-full flex flex-row items-center'>Powered&nbsp;by&nbsp;<a href="https://vkucode.com/"><img src={vkuLogo} alt="" width={"30px"} /></a></p> 
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer