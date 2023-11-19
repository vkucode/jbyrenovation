import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/navbar.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import JBYLogo from '../../assets/img/logo1.png'
import 'animate.css'
import { FaPhoneAlt } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light animate__animated animate__fadeInDown">
        <div className="container">
        <Link className="navbar-brand" to="/"><img src={JBYLogo} alt="" width={"150px"} /></Link>
        <button className="navbar-toggler d-lg-none" type="button" style={{outline: "none", border: "none"}} data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span><RiMenu3Line style={{color: "white", fontSize:"x-large"}}/></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/accueil">Accueil</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">A propos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Demande de devis</Link>
            </li>
          </ul>
          <div className="d-flex my-2 my-lg-0">
          <a className='NavphoneLink' href="tel: +33695198600"><FaPhoneAlt />&nbsp;06 95 19 86 00</a>
          </div>
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar