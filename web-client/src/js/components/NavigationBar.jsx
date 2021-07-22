import * as React from "react";
import {Link} from "react-router-dom";
import logo from './assets/econoTravel-logo.png';
<<<<<<< HEAD
=======

>>>>>>> 4ff28238eef1ff071d2da1a0acc49aeb96b82f71
export const NavigationBar = () =>(
    <nav className={"navigationBar"}>
<<<<<<< HEAD
        <img className={"logo"} src={logo} alt={'EconoTravel logo'} />
=======

        <img className={"logo"} src={logo} alt={'EconoTravel logo'} />

>>>>>>> 4ff28238eef1ff071d2da1a0acc49aeb96b82f71
        <div className={"menu__links"}>
            <Link to={"/home"}>EconoTravel</Link>
            <Link to={"/about"}>Quienes somos</Link>
            <Link to={"/Catalog"}>Experiencias</Link>
            <Link to={"/reservas"}>Reservas</Link>
        </div>
        <div className={"searchBar"}>
            <label htmlFor={"Encuenta tu experiencia"}></label>
            <input type={"text"} placeholder={"Encuenta tu experiencia"} />
            <input type={"submit"} value={"Buscar"} />
        </div>
        <div className={"socialBar"}>
            <Link to={"/home"}>Facebook</Link>
            <Link to={"/about"}>Instagram</Link>
        </div>
    </nav>
)