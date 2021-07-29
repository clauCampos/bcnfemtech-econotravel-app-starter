import * as React from "react";
import {ImagenesFooter} from "./ImagenesFooter";

export const About = () => {
  return (
  <section className={"aboutSection"}>
    <div className={"wrapper"}>
      <h3>Quiénes Somos</h3>
      <div className={"aboutSection__text"}>
        <p className={"text--intro"}>¡Hola! Somos Econotravel, un equipo de entusiastas de la naturaleza que lleva desde
          2003 ofreciendo experiencias turísticas eco-friendly en el área de Barcelona.</p>
        <p>Nuestra empresa se fundó a raíz de un viaje que nuestra fundadora, Marina Herrán, realizó en bicicleta por
          Cataluña en el verano de 2001. Durante ese periodo, descubrió que las opciones turísticas que ofrecían ciudades
          como Barcelona, Girona y Reus dependían de transportes contaminantes y actividades poco respetuosas con la
          naturaleza y el entorno, algo que causaba un progresivo deterioro de los increíbles parajes naturales de
          Cataluña. Preocupada por la falta de altenativas eco-friendly, Marina se propuso fundar una agencia de experiencias
          turísticas donde el respeto por la naturaleza fuera la principal prioridad.</p>
        <p className={"text__green"}>Así nació Econotravel Barcelona!</p>
      </div>
      <div className={"imgGallery"}>
        <ImagenesFooter />
      </div>
    </div>
  </section>
  )
}
