import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { MdEditDocument } from "react-icons/md";
import { Link } from "react-router-dom";
import { useRef } from "react";
import img1 from '../../assets/img/accueil/plomberie.jpg'
import img2 from '../../assets/img/accueil/electricite.jpg'
import img3 from '../../assets/img/accueil/installation.jpg'
import img4 from '../../assets/img/accueil/nettoyage.jpg'
import img5 from '../../assets/img/accueil/debarrassage.jpg'
import img6 from '../../assets/img/accueil/prestation.jpg'

const OppoScroll = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  return (
    <>
      <div className=" container bg-transparent text-orange-400 p-4 grid place-items-center">
      <h1 className="w-full text-right py-3 mt-3 text-3xl md:text-5xl">Nos Prestation Multiservices</h1>
      </div>
      <section ref={targetRef} className="flex bg-transparent text-white">
        <Content content={items} />
        <Images content={items} scrollYProgress={scrollYProgress} />
      </section>
    </>
  );
};

const RoundedSlideButton = () => {
  return (
    <button
      className={`
        relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
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

const Content = ({ content }) => {
  return (
    <div className="w-full">
      {content.map(({ id, title, description }, idx) => (
        <div
          key={id}
          className={`p-8 h-screen flex flex-col text-center justify-center items-center ${
            idx % 2 ? "bg-white text-black rounded-xl" : "bg-tra text-white"
          }`}
        >
          <h3 className="text-3xl md:text-7xl font-medium">{title}</h3>
          <p className="font-light md:text-2xl w-full max-w-lg">{description}</p>
          <Link to="/contact" className="no-underline"><RoundedSlideButton /></Link>
        </div>
      ))}
    </div>
  );
};

const Images = ({ content, scrollYProgress }) => {
  const top = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${(content.length - 1) * 100}vh`, "0vh"]
  );

  return (
    <div className="h-screen overflow-hidden sticky top-0 w-[50%] md:w-full">
      <motion.div style={{ top }} className="absolute left-0 right-0">
        {[...content].reverse().map(({ img, id, title }) => (
          <img
            key={id}
            alt={title}
            className="h-screen w-full object-cover"
            src={img}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default OppoScroll;

const items = [
  {
    id: 1,
    title: "Plomberie",
    description: "Services de plomberie complets, incluant installations, réparations et entretien, assurant le bon fonctionnement de vos installations sanitaires.",
    img: img1,
  },
  {
    id: 2,
    title: "Electricite",
    description:
    "Offrons des services électriques fiables et sécurisés, de l'installation au dépannage, conformes aux normes en vigueur",
    img: img2
  },
  {
    id: 3,
    title: "Installation",
    description:
    "Spécialistes en conception et installation de cuisines et salles de bains sur mesure, combinant fonctionnalité et esthétique",
    img: img3
  },
  {
    id: 4,
    title: "Nettoyage complet",
    description:
    "Fournissons des services de remise en état et nettoyage complet, redonnant éclat et propreté à votre espace après travaux ou pour un entretien régulier",
    img: img4
  },
  {
    id: 5,
    title: "Debarrassage",
    description:
    "Offrons un service efficace de débarrassage d'encombrants, aidant à libérer de l'espace et à éliminer les déchets en toute sécurité.",
    img: img5
  },
  {
    id: 6,
    title: "Prestation sur demande",
    description:
    "Proposons des prestations personnalisées sur demande, répondant à des besoins spécifiques en matière de rénovation et d'aménagement d'espace.",
    img: img6
  },
];