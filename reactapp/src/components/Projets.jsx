import { useScroll, useTransform, motion } from "framer-motion";
import { MdEditDocument } from "react-icons/md";
import { AiFillApple, AiFillFileImage } from "react-icons/ai";
import { useRef } from "react";

import img1 from '../assets/img/accueil/header.png'
import img2 from '../assets/img/accueil/amenagement.png'
import img3 from '../assets/img/accueil/installation.png'
import img4 from '../assets/img/accueil/revetement.jpg'
import img5 from '../assets/img/accueil/carrelage.jpg'
import img6 from '../assets/img/accueil/electricite.jpg'

const Projets = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });


  return (
    <>
      <section ref={targetRef} className="bg-transparent h-[350vh]">
        <div className="h-screen sticky top-0 z-0 grid grid-cols-3 grid-rows-3 gap-4 p-4 overflow-hidden">
          <Copy scrollYProgress={scrollYProgress} />
          <Images scrollYProgress={scrollYProgress} />
          <Circles />
        </div>
      </section>

      <div className="h-[20vh] bg-transparent text-white flex items-center justify-center">
        <span>Merci de revenir plus tard {":)"}</span>
      </div>
      
    </>
  );
};



const Copy = ({ scrollYProgress }) => {
  
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
        <span>Demande un devis</span>
      </button>
    );
  };

  const copyScale = useTransform(scrollYProgress, [0, 0.75], [1, 0.5]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const copyY = useTransform(scrollYProgress, [0, 0.75], ["0%", "7.5%"]);

  return (
    <motion.div
      style={{
        scale: copyScale,
        opacity: copyOpacity,
        y: copyY,
      }}
      className="absolute px-8 w-full h-screen z-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-orange-400 text-5xl md:text-7xl font-bold text-center max-w-xl">
        Nos derniers projets
      </h1>
      <p className="text-white text-sm md:text-lg text-center max-w-3xl my-6">
        Les realisations JBY Renovation et les temoignages de nos hereux proprietaires,
        Si vous etes interesse aussi de etre impresione par nos travaux,<br /><br /> Il faut juste ...
      </p>
      <div className="flex items-center gap-4">
        <RoundedSlideButton />
      </div>
    </motion.div>
  );
};

const Images = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const image1Offset = useTransform(scrollYProgress, [0, 1], ["-35%", "0%"]);

  const image2OffsetX = useTransform(scrollYProgress, [0, 1], ["30%", "0%"]);
  const image2OffsetY = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  const image3OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image3OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image4OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image4OffsetY = useTransform(scrollYProgress, [0, 1], ["-145%", "0%"]);

  const image5OffsetX = useTransform(scrollYProgress, [0, 1], ["-25%", "0%"]);
  const image5OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image6OffsetX = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);
  const image6OffsetY = useTransform(scrollYProgress, [0, 1], ["25%", "0%"]);

  const image1 = "url("+ img1 + ")"
  const image2 = "url("+ img2 + ")"
  const image3 = "url("+ img3 + ")"
  const image4 = "url("+ img4 + ")"
  const image5 = "url("+ img5 + ")"
  const image6 = "url("+ img6 + ")"

  return (
    <>
      <motion.div
        className="col-span-2 relative z-10 rounded-xl"
        style={{
          backgroundImage: image1,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image1Offset,
          y: image1Offset,
        }}
      />
      <motion.div
        className="row-span-2 relative z-10 rounded-xl"
        style={{
          backgroundImage: image2,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image2OffsetX,
          y: image2OffsetY,
        }}
      />

      <motion.div
        className="row-span-2 relative z-10 rounded-xl"
        style={{
          backgroundImage: image3,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image3OffsetX,
          y: image3OffsetY,
        }}
      />
      <motion.div
        className="relative z-10 rounded-xl"
        style={{
          backgroundImage: image4,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image4OffsetX,
          y: image4OffsetY,
        }}
      />

      <motion.div
        className="relative z-10 rounded-xl"
        style={{
          backgroundImage: image5,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image5OffsetX,
          y: image5OffsetY,
        }}
      />
      <motion.div
        className="relative z-10 rounded-xl"
        style={{
          backgroundImage: image6,
          backgroundSize: "cover",
          backgroundPosition: "center",
          scale,
          x: image6OffsetX,
          y: image6OffsetY,
        }}
      />
    </>
  );
};

const Circles = () => (
  <>
    <div className="w-3/5 max-w-[850px] min-w-[400px] aspect-square border-[8px] border-orange-300 rounded-full absolute z-0 left-0 top-0 -translate-x-[50%] -translate-y-[50%]" />
    <div className="w-1/2 max-w-[600px] min-w-[300px] aspect-square border-[8px] border-orange-300 rounded-full absolute z-0 right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
  </>
);

export default Projets;