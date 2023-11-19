import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/navbar.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import JBYLogo from '../../assets/img/logo1.png'
import 'animate.css'
import { FaFacebook, FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light animate__animated animate__fadeInDown">
        <div className="container">
        <Link className="navbar-brand" to="/"><img src={JBYLogo} alt="" width={"150px"} /></Link>
        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
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
              <Link className="nav-link" to="/">Contact</Link>
            </li>
          </ul>
          <div className="d-flex my-2 my-lg-0">
            <a href="" className='nav-social'><FaFacebook /></a>
            <a href="" className='nav-social'><FaInstagram /></a>

          </div>
        </div>
      </div>
    </nav>
    
  )
}

export default Navbar