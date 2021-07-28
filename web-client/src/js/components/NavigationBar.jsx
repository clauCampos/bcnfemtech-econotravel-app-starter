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
                <Link to={"/experience"}>Experiencias</Link>
                <Link to={"/reservas"}>Reservas</Link>
            </div>
            <div className={"menuIcons"}>
                <ul>
                    <li>
                        <Link><FontAwesomeIcon icon={faPhoneAlt} /> Contáctanos</Link>
                    </li>
                    <li>
                        <Link><FontAwesomeIcon icon={faFacebook} /> Facebook</Link>
                    </li>
                    <li>
                        <Link><FontAwesomeIcon icon={faInstagram} /> Instagram</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}