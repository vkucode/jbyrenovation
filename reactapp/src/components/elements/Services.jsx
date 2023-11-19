import React from 'react'
import styles from '../../assets/css/accueil.module.css'
import perintureImg from '../../assets/img/accueil/peinture.jpg'
import enduitImg from '../../assets/img/accueil/enduit.jpg'
import revetementImg from '../../assets/img/accueil/revetement.png'
import carrelageImg from '../../assets/img/accueil/carrelage.jpg'
import isolationImg from '../../assets/img/accueil/isolation.jpg'
import amenagementImg from '../../assets/img/accueil/amenagement.png'
import plomberieImg from '../../assets/img/accueil/plomberie.jpg'
import electriciteImg from '../../assets/img/accueil/electricite.jpg'
import installationImg from '../../assets/img/accueil/installation.png'
import nettoyageImg from '../../assets/img/accueil/nettoyage.jpg'
import debarrassageImg from '../../assets/img/accueil/debarrassage.jpg'
import prestationImg from '../../assets/img/accueil/prestation.jpg'

const Services = () => {

    const ServiceCard = ({title, img, description}) => {

        function serviceCardAnim(){
          
        }
      
        return(
          <>
            <div className={`${styles.serviceCard} col-12 col-md-6 col-lg-4`} onMouseEnter={serviceCardAnim}>
              <div className={`${styles.serviceCardText}`}>
              <div className={`${styles.serviceCardTitle}`}>
                  <h2>{title}</h2>
                  <br />
                  <h2>{title}</h2>
                </div>
                <p>{description}</p>
              </div>
                
                <img src={img} alt="" className={`${styles.serviceCardImage}`} />
            </div>
          </>
        )
      }

  return (
    <>
        <div className='row'>
        <div className='col-10'>
          <h1>Nos Services</h1>
          <h3>Vous souhaitez moderniser votre appartement ou votre maison afin de gagner en confort au quotidien ?</h3>
        </div>
      </div>
      <hr />
      <div className='row'>
        <h1 style={{textAlign: "right", width: "100%"}}>Renovation et amenagement d'interieur</h1>
        <div className={`${styles.servicesWrap} row`}>
          <ServiceCard title="Peinture" img={perintureImg} description="Offrons des services de peinture professionnelle pour espaces neufs et anciens, garantissant une finition impeccable et durable, adaptée à chaque style et préférence"></ServiceCard>
          <ServiceCard title="Enduit General " img={enduitImg} description="Spécialisés en enduits généraux et rebouchages locaux pour une finition lisse et parfaite, préparant vos murs et plafonds pour la peinture ou tout autre revêtement."></ServiceCard>
          <ServiceCard title="Revêtements" img={revetementImg} description="Fournissons une large gamme de revêtements pour sols et murs, incluant des options modernes et traditionnelles pour transformer et valoriser votre espace"></ServiceCard>
          <ServiceCard title="Carrelage & Parquet" img={carrelageImg} description="Expertise en pose de carrelage et parquet, offrant une variété de styles et de motifs pour créer des espaces uniques et élégants"></ServiceCard>
          <ServiceCard title="Isolation & Placo" img={isolationImg} description="Proposons des solutions d'isolation et d'installation de plaques de plâtre (placo) pour améliorer le confort et l'efficacité énergétique de votre habitat"></ServiceCard>
          <ServiceCard title="Decoration d'interieur" img={amenagementImg} description={"Services d'aménagement et de décoration d'intérieur pour créer des espaces harmonieux et fonctionnels, reflétant votre personnalité et style de vie."}></ServiceCard> 
        </div>
      </div>
      <hr />
      <div className='row'>
        <h1 style={{textAlign: "left"}}>Nos Prestation Multiservices</h1>
        <div className={`${styles.servicesWrap}`}>
          <ServiceCard title="Plomberie" img={plomberieImg} description="Services de plomberie complets, incluant installations, réparations et entretien, assurant le bon fonctionnement de vos installations sanitaires."></ServiceCard>
          <ServiceCard title="Electricite" img={electriciteImg} description="Offrons des services électriques fiables et sécurisés, de l'installation au dépannage, conformes aux normes en vigueur"></ServiceCard>
          <ServiceCard title="Installation" img={installationImg} description="Spécialistes en conception et installation de cuisines et salles de bains sur mesure, combinant fonctionnalité et esthétique"></ServiceCard>
          <ServiceCard title="Nettoyage complet" img={nettoyageImg} description="Fournissons des services de remise en état et nettoyage complet, redonnant éclat et propreté à votre espace après travaux ou pour un entretien régulier"></ServiceCard>
          <ServiceCard title="Debarrassage" img={debarrassageImg} description="Offrons un service efficace de débarrassage d'encombrants, aidant à libérer de l'espace et à éliminer les déchets en toute sécurité."></ServiceCard>
          <ServiceCard title="Prestation sur demande" img={prestationImg} description={"Proposons des prestations personnalisées sur demande, répondant à des besoins spécifiques en matière de rénovation et d'aménagement d'espace."}></ServiceCard> 
        </div>
      </div>
      <hr />
      </>
  )
}

export default Services