import * as React from "react";
import {CardCard} from "./CardCard";
import 'bootstrap/dist/css/bootstrap.min.css'
import imgSailing from './assets/sailing.png'
import beach from './assets/playa.png'
import walks from './assets/caminata.png'
import allAge from './assets/allAges.png'
import hours from './assets/clock.png'
import accessible from './assets/acces.png'

const card = [
    {
        id: 58,
        image: imgSailing,
        beach: beach,
        walks:walks,
        allAge: allAge,
        hours:hours,
        accessible: accessible

    }
]

export function MiniCard() {
    return (
        <div className="container">
            <div className="row">
                {
                    card.map(newCard => (
                        <div className="col-md-5" key={newCard.id}>
                            <CardCard image={newCard.image} beach={newCard.beach} walks={newCard.walks} allAge={newCard.allAge} hours={newCard.hours} accessible={newCard.accessible}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
