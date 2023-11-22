import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiArrowRight, FiPhone} from "react-icons/fi";
import { MdEditDocument } from "react-icons/md";
import { Link } from "react-router-dom";
import styles from '../../assets/css/navbar.module.scss'

import JbyLogo from '../../assets/img/logo1.png'

const FlipNavWrapper = () => {
  return (
    <div className={styles.navbar}>
      <FlipNav />
    </div>
  );
};

const FlipNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-transparent p-4 flex items-center justify-between relative">
      <NavLeft setIsOpen={setIsOpen} />
      <NavRight />
      <NavMenu isOpen={isOpen} />
    </nav>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <img src={JbyLogo} alt="" className="w-[120px]" />
  );
};

const NavLeft = ({ setIsOpen }) => {
  return (
    <div className="flex items-center gap-6">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block lg:hidden text-white text-2xl"
        onClick={() => setIsOpen((pv) => !pv)}
      >
        <FiMenu />
      </motion.button>
      <Logo />
      <NavLink text="A propos" link="#" />
      <NavLink text="Services" link="#" />
      <NavLink text="Projets" link="#"  />
      <NavLink text="blog" link="#"  />
    </div>
  );
};

const NavLink = ({ text, link }) => {
  return (
    <a
      href={link}
      rel="nofollow"
      className="hidden lg:block h-[30px] overflow-hidden no-underline font-medium"
    >
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-white no-underline">{text}</span>
        <span className="flex items-center h-[30px] text-orange-400">
          {text}
        </span>
      </motion.div>
    </a>
  );
};

const NavRight = () => {
  return (
    <div className="flex items-center gap-4">
      <Link to="#contact" className="no-underline">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="px-4 py-2 bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent flex-row items-center font-bold rounded-md whitespace-nowrap md:flex hidden"
      >
      Devis Gratuit&nbsp;<MdEditDocument className="text-orange-600" />
      </motion.button>
      </Link>
      <a href="tel: +33749374090" className="no-underline">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={styles.callButton}
      >
      <FiPhone />&nbsp;&nbsp;07&nbsp;49&nbsp;37&nbsp;40&nbsp;90
      </motion.button>
      </a>
    </div>
  );
};

const NavMenu = ({ isOpen }) => {
  return (
    <motion.div
      variants={menuVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      className={styles.navmenu}
    >
      <MenuLink text="Solutions" link=""/>
      <MenuLink text="Community" link="" />
      <MenuLink text="Pricing" link="" />
      <MenuLink text="Company" link="" />
    </motion.div>
  );
};

const MenuLink = ({ text , link }) => {
  return (
    <motion.a
      variants={menuLinkVariants}
      rel="nofollow"
      href={link}
      className="h-[30px] overflow-hidden font-medium text-lg flex items-start gap-2 no-underline"
    >
      <motion.span variants={menuLinkArrowVariants}>
        <FiArrowRight className="h-[30px] text-white" />
      </motion.span>
      <motion.div whileHover={{ y: -30 }}>
        <span className="flex items-center h-[30px] text-white">{text}</span>
        <span className="flex items-center h-[30px] text-orange-400">
          {text}
        </span>
      </motion.div>
    </motion.a>
  );
};

export default FlipNavWrapper;

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const menuLinkVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: -10,
    opacity: 0,
  },
};

const menuLinkArrowVariants = {
  open: {
    x: 0,
  },
  closed: {
    x: -4,
  },
};