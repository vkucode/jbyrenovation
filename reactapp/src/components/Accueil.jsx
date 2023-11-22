import React, {useEffect} from 'react'
import 'animate.css'
import '../index.css'
import '../assets/css/style.css'
import '../assets/css/gsapAccueil.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../assets/css/accueil.module.css'
import Footer from './elements/Footer'
import gsap from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import ScrollTrigger from 'gsap/dist/ScrollTrigger'
import Img1 from '../assets/img/accueil/1.png'
import Img2 from '../assets/img/accueil/2.png'
import Img3 from '../assets/img/accueil/3.png'
import Services from './elements/Service'
import Portfolio from './elements/Portfolio'
import 'animate.css'




const Accueil = () => {
  


  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger ,ScrollSmoother);

 ScrollSmoother.create({
    wrapper: '#smooth-wrapper',
    content: '#smooth-content',
    smooth: 2,
    speed: 3,
    effects: true,
});

  gsap.to(".imgRevealToRight", {
    scrollTrigger: {
      trigger: ".imgRevealToRight",
      start: "-200px center",
      end: "center center",
      scrub: 1,
    },
    x: 300,
    opacity: 1
  });

  gsap.to(".imgRevealToLeft", {
    scrollTrigger: {
      trigger: ".imgRevealToLeft",
      start: "-200px center",
      end: "center center",
      scrub: 1,
    },
    x: -300,
    opacity: 1
  });
  },[]);
  return (
    <>
  <div id="smooth-wrapper">
    <div id="smooth-content">
    <section className={`${styles.heroSection} container mb-5`}>
      <div className='container'>
          <div className={`${styles.textContainer}`}>
            <div className='d-flex flex-row justify-content-start align-items-center animate__animated animate__fadeInLeft'>
              <h5>JBY renovation</h5>
              <h1>nous nous occupons de la création d'un nouvel intérieur de maison moderne</h1>
            </div>
            <button className='animate__animated animate__fadeInLeft animate__delay-1s'>En savoir plus</button>
          </div>
          <div className={`${styles.imgContainer} animate__animated animate__fadeInRight`}>
            <div></div>
          </div>
      </div>
    </section>
    <section className={`${styles.subHero} container mb-5`}> 
      <div className='row justify-content-between align-items-baseline'>
        <div className='col-12 col-md-4'>
        <img src={Img2} alt="" className={`imgRevealToRight`} />
        </div>
        <div className='col-12 col-md-7'>
        <img src={Img1} alt="" className={`imgRevealToLeft`} />
        </div>
        
      </div>
      <div className='row d-flex flex-row justify-content-center align-items-center mt-5'>
        <div className='col-12 col-md-6'>
          <img src={Img3} alt="" className={`imgRevealToLeft`}  />
        </div>
        <div className='col-12 col-md-6'> 
          <div className={`${styles.subheroText} imgRevealToLeft`}>
            <h2>Comment on travaille</h2>
            <p>
            Avec des compétences variées, nous pouvons vous apporter notre expertise et notre savoir-faire dans différents domaines de la rénovation intérieure.
            Les travaux de maçonnerie, la rénovation de l'électricité ou du chauffage, la remise à neuf des installations sanitaires ou encore les travaux de menuiserie font partie de nos interventions les plus courantes.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section className={`${styles.servicesSection} container`} id='services'>
      <Services />
    </section>
    <section className={`${styles.portfolioSection} mb-5`}>
      <Portfolio />
    </section>
    <section className={`${styles.bannerSection}`}>
      
    </section>
    <section className={`${styles.contactSection}`}>

    </section>

    <Footer />
    </div>
  </div>
    
    </>
  )
}

export default Accueil