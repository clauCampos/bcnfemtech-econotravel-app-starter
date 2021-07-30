import * as React from "react";
import {CardCard} from "./CardCard";
import 'bootstrap/dist/css/bootstrap.min.css'
import imgSailing from './assets/sailing.png'
import beach from './assets/playa.png'

const card = [
    {
        id: 58,
        image: imgSailing,
        beach: beach

    }
]

export function MiniCard() {
    return (
        <div className="container">
            <div className="row">
                {
                    card.map(newCard => (
                        <div className="col-md-5" key={newCard.id}>
                            <CardCard image={newCard.image} imge2={newCard.beach} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
