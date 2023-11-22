import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
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
  return (
    <div className="p-4 md:p-8 bg-transparent">
        <h1 className="w-full text-right py-3 mt-3 text-3xl md:text-5xl">Renovation et amenagement d'interieur</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
            <Card
            heading="Peinture"
            description="Offrons des services de peinture professionnelle pour espaces neufs et anciens, garantissant une finition impeccable et durable, adaptée à chaque style et préférence"
            imgSrc={perintureImg}
            />
            <Card
            heading="Enduit General"
            description="Spécialisés en enduits généraux et rebouchages locaux pour une finition lisse et parfaite, préparant vos murs et plafonds pour la peinture ou tout autre revêtement."
            imgSrc={enduitImg}
            />
            <Card
            heading="Revêtements"
            description="Fournissons une large gamme de revêtements pour sols et murs, incluant des options modernes et traditionnelles pour transformer et valoriser votre espace"
            imgSrc={revetementImg}
            />
            <Card
            heading="Carrelage & Parquet"
            description="Expertise en pose de carrelage et parquet, offrant une variété de styles et de motifs pour créer des espaces uniques et élégants"
            imgSrc={carrelageImg}
            />
            <Card
            heading="Isolation & Placo"
            description="Proposons des solutions d'isolation et d'installation de plaques de plâtre (placo) pour améliorer le confort et l'efficacité énergétique de votre habitat"
            imgSrc={isolationImg}
            />
            <Card
            heading="Decoration d'interieur"
            description="Services d'aménagement et de décoration d'intérieur pour créer des espaces harmonieux et fonctionnels, reflétant votre personnalité et style de vie."
            imgSrc={amenagementImg}
            />
        </div>
        <h1 className="w-full text-right py-3 mt-3 text-3xl md:text-5xl">Nos Prestation Multiservices</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 w-full max-w-6xl mx-auto">
            <Card
            heading="Plomberie"
            description="Services de plomberie complets, incluant installations, réparations et entretien, assurant le bon fonctionnement de vos installations sanitaires."
            imgSrc={plomberieImg}
            />
            <Card
            heading="Electricite"
            description="Offrons des services électriques fiables et sécurisés, de l'installation au dépannage, conformes aux normes en vigueur"
            imgSrc={electriciteImg}
            />
            <Card
            heading="Installation"
            description="Spécialistes en conception et installation de cuisines et salles de bains sur mesure, combinant fonctionnalité et esthétique"
            imgSrc={installationImg}
            />
            <Card
            heading="Nettoyage complet"
            description="Fournissons des services de remise en état et nettoyage complet, redonnant éclat et propreté à votre espace après travaux ou pour un entretien régulier"
            imgSrc={nettoyageImg}
            />
            <Card
            heading="Debarrassage"
            description="Offrons un service efficace de débarrassage d'encombrants, aidant à libérer de l'espace et à éliminer les déchets en toute sécurité."
            imgSrc={debarrassageImg}
            />
            <Card
            heading="Prestation sur demande"
            description="Proposons des prestations personnalisées sur demande, répondant à des besoins spécifiques en matière de rénovation et d'aménagement d'espace."
            imgSrc={prestationImg}
            />
        </div>
    </div>
  );
};

const Card = ({ heading, description, imgSrc }) => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.035,
      }}
      whileHover="hover"
      className="w-full h-64 bg-slate-300 overflow-hidden cursor-pointer group relative"
    >
      <div
        className="absolute inset-0 saturate-100 md:saturate-0 md:group-hover:saturate-100 group-hover:scale-110 transition-all duration-500"
        style={{
          backgroundImage: `url(${imgSrc})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="p-4 relative z-20 h-full text-slate-300 group-hover:text-white transition-colors duration-500 flex flex-col justify-between">
        <FiArrowRight className="text-3xl group-hover:-rotate-45 transition-transform duration-500 ml-auto" />
        <div>
          <h4>
            {heading.split("").map((l, i) => (
              <ShiftLetter letter={l} key={i} />
            ))}
          </h4>
          <p>{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

const ShiftLetter = ({ letter }) => {
  return (
    <div className="inline-block overflow-hidden h-[36px] font-semibold text-3xl">
      <motion.span
        className="flex flex-col min-w-[4px]"
        style={{
          y: "0%",
        }}
        variants={{
          hover: {
            y: "-50%",
          },
        }}
        transition={{
          duration: 0.5,
        }}
      >
        <span>{letter}</span>
        <span>{letter}</span>
      </motion.span>
    </div>
  );
};

export default Services;