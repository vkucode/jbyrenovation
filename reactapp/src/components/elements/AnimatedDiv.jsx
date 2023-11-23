import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedDiv = ({ children, xInitial, xFinal }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { x: xFinal, opacity: 1, transition: { duration: 1 } },
        hidden: { x: xInitial, opacity: 0 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
