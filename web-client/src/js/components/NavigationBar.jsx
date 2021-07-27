import * as React from "react";
import {Link} from "react-router-dom";
import logo from './assets/econoTravel-logo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons'

export const NavigationBar = () => {
  return (
    <nav className={"navigationBar"}>
      <img className={"logo"} src={logo} alt={'EconoTravel logo'}/>
      <div className={"menu__links"}>
        <Link to={"/"}>EconoTravel</Link>
        <Link to={"/about"}>Quienes somos</Link>
        <Link to={"/Experience"}>Experiencias</Link>
        <Link to={"/reservas"}>Reservas</Link>
      </div>
        <ul>
          <li>
            <Link><FontAwesomeIcon icon={faPhoneAlt} /> Contáctanos </Link>
          </li>
          <li>
            <Link><FontAwesomeIcon icon={faFacebook} /></Link>
          </li>
          <li>
            <Link><FontAwesomeIcon icon={faInstagram} /></Link>
          </li>
        </ul>
        {/*
        <div className={"searchBar"}>
        <input type={"text"} placeholder={"Encuenta tu experiencia"}/>
        <input type={"submit"} value={"Buscar"}/>
      </div>

       */ }

    </nav>
    )

}
