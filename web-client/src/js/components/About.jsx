import * as React from "react";
import aboutBanner from './assets/about-banner.jpg';

export const About = () => <section className={"aboutSection"}>
    <div className={"aboutSection__text"}>
        <h3>Quienes Somos</h3>
        <p className={"text--intro"}>¡Hola! Somos ECONOTRAVEL
            , un equipo de entusiastas de la naturaleza que lleva desde 2003 ofreciendo experiencias turísticas eco-friendly en el área de Barcelona.</p>
        <p>Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora, Marina Herrán, realizó en bicicleta por Cataluña en el verano de 2001. Durante ese periodo, descubrió que las opciones turísticas que ofrecían ciudades como Barcelona, Girona y Reus dependían de transportes contaminantes y actividades poco respetuosas con la naturaleza y el entorno, algo que causaba un progresivo deterioro de los increíbles parajes naturales de Cataluña.</p>
        <p>Preocupada por la falta de altenativas eco-friendly, Marina se propuso fundar una agencia de experiencias turísticas donde el respeto por la naturaleza fuera la principal prioridad. Así nació Econotravel Barcelona.</p>
    </div>
    <div className={"aboutSection__img"}>
        <img className={"aboutBanner"} src={aboutBanner} alt={'EconoTravel logo'} />
    </div>
</section>