import * as React from "react";
import {Link} from "react-router-dom";
import logo from './assets/econoTravel-logo.png';


export const NavigationBar = () =>(
    <nav className={"navigationBar"}>
        <img className={"logo"} src={logo} alt={'EconoTravel logo'} />
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
    </nav>
)