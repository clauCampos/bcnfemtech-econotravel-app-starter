import * as React from "react";
import {TravelCard} from "./TravelCard";
import img1 from './assets/imgLibrary/lake.jpg'
import img2 from './assets/imgLibrary/beach.jpg'
import img3 from './assets/imgLibrary/barcelona.jpg'
import img4 from './assets/imgLibrary/arco.jpg'


const cards = [
    {
        id:1,
        title: 'Costa Brava',
        text: 'This is one of the best lakes a have ever seen  ',
        image:img1
    },
    {
        id:2,
        title: 'Tarragona',
        text: 'Been there a few times',
        image: img2
    },
    {
        id:3,
        title: 'Barcelona',
        text: 'Currently living here, nice place to live!',
        image: img3
    },
    {
        id:4,
        title: 'Sitges',
        text: 'Nice beaches, had a great time there',
        image: img4
    },
    {
        id:5,
        title: 'Salou',
        text: "Had on of the best party's ever there",
        image: img2
    },
    {
        id:6,
        title: 'cards web',
        text: 'nice view, would like to go there',
        image: img2
    }

]

export function Cards(){
    return(
        <div className="container">
            <div className="row">
                {
                    cards.map(card =>(
                        <div className="col-md-5" key={card.id}>
                            <TravelCard title={card.title} text={card.text} image={card.image}/>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}