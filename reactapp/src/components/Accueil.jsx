import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import 'animate.css'
import '../index.css'
import '../assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import styles from '../assets/css/accueil.module.css'
import Footer from './elements/Footer'
import Img1 from '../assets/img/accueil/1.png'
import Img2 from '../assets/img/accueil/2.png'
import Img3 from '../assets/img/accueil/3.png'
import Services from './elements/Service'
import AnimatedDiv from './elements/AnimatedDiv';
// import Portfolio from './elements/Portfolio'
import 'animate.css'
import Services2 from './elements/Service2'

const Accueil = () => {

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
            <Link to="/contact"><button className='animate__animated animate__fadeInLeft animate__delay-1s'>En savoir plus</button></Link>
          </div>
          <div className={`${styles.imgContainer} animate__animated animate__fadeInRight`}>
            <div></div>
          </div>
      </div>
    </section>
    <section className={`${styles.subHero} container mb-5`}> 
      <div className='row justify-content-between align-items-baseline'>
        
        <div className='col-12 col-md-4'>
        <AnimatedDiv xInitial={"-300"} xFinal={0}>
          <img src={Img2} alt="" width={"100%"} />
        </AnimatedDiv>
        </div>
        <div className='col-12 col-md-7 mt-4 md:mt-0'>
        <AnimatedDiv xInitial={"300"} xFinal={0}>
          <img src={Img1} alt="" width={"100%"} />
        </AnimatedDiv>
        </div>
        
      </div>
      <div className='row d-flex flex-row justify-content-center align-items-center mt-4 md:mt-5'>
        <div className='col-12 col-md-6'>
        <AnimatedDiv xInitial={"-300"} xFinal={0}>
          <img src={Img3} alt="" width={"100%"} />
        </AnimatedDiv>
        </div>
        <div className='col-12 col-md-6'> 
        <AnimatedDiv xInitial={"300"} xFinal={0}>        
          <div className={`${styles.subheroText}`}>
            <h2>Comment on travaille</h2>
            <p>
            Avec des compétences variées, nous pouvons vous apporter notre expertise et notre savoir-faire dans différents domaines de la rénovation intérieure.
            Les travaux de maçonnerie, la rénovation de l'électricité ou du chauffage, la remise à neuf des installations sanitaires ou encore les travaux de menuiserie font partie de nos interventions les plus courantes.
            </p>
          </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
    <section className={`${styles.servicesSection}`} id='services'>
      <Services />
      <Services2 />
    </section>
    <section className={`${styles.portfolioSection} mb-5`}>
      
    </section>
    <section className={styles.blogSection}>

    </section>
    <section className={`${styles.contactSection}`}>

    </section>

    </div>
  </div>
    
    </>
  )
}

export default Accueil