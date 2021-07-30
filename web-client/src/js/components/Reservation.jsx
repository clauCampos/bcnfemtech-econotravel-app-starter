import * as React from 'react';
import {ImagenesFooter} from "./ImagenesFooter";

import {FormikContainer} from "./FormikContainer";
import {MiniCard} from "./MiniCard";


export const Reservation = () => {
    return (
        <section className="reservasSection">
            <div className="wrapper">
                <h3>Reservas</h3>
                <div className="reservas">
                    <div className="reservas__description">
                        <h4>Paseo en bicicleta por el Montseny</h4>
                        <h5>Descripción de la actividad:</h5>
                        <p className="reservas__text--intro">Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natural del Montseny.
                            Una escapada veraniega perfecta para parejas, familias y amigos que nos permitirá conocer
                            nuevos y sorprendentes lugares.</p>
                        <p>El recorrido que os proponemos comienza con una larga subida con algunos descansos, combinando
                            asfalto y pistas anchas, culminando en un mirador con magníficas vistas del Vallés y el mar.
                            Desde aquí continuaremos la bajada combinando senderos, pistas y algún tramo de carretera y
                            terreno mixto para visitar la zona de Santa Fe, donde descubriremos la Ermita y el Bosque de las Secuoyas.</p>
                        <p> Para finalizar, acudiremos al restaurante María Rosa de Palautordera, donde disfrutaremos de una excelente comida casera
                            con butifarra blanca y negra y munxetes del Montseny.</p>
                        <div className={"reservas__icons"}>
                            <MiniCard />
                        </div>
                    </div>
                    <div className={"reservas__form"}>
                        <h4>Haz tu reserva!</h4>
                        <FormikContainer />
                    </div>
                </div>
                <div className="imgGallery">
                    <ImagenesFooter />
                </div>
            </div>
        </section>

)
}
