import * as React from "react";
import {Link} from "react-router-dom";

export const NavigationBar = () =>(

    <nav className={"navigationBar"}>
        <Link to={"/Catalog"}>Catalogo</Link>
        <Link to={"/about"}>Quienes somos</Link>
    </nav>

)
