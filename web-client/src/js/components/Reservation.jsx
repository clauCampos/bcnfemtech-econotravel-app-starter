import * as React from 'react';
import {ImagenesFooter} from "./ImagenesFooter";

import {FormikContainer} from "./FormikContainer";


export const Reservation = () => {
    return (
        <section className="reservasSection">
            <div className={"wrapper"}>
                <div className={"reservas"}>
                    <h3>Reservas</h3>
                    <p>Aqui deberia ir mas contenio</p>
                </div>
                <div className={"reservas__form"}>
                    <FormikContainer/>
                </div>
                <div className={"imgGallery"}>
                    <ImagenesFooter/>
                </div>
            </div>
        </section>

    )
}