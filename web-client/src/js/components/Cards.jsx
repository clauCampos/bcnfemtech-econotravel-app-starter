import * as React from "react";
import {TravelCard} from "./TravelCard";
import img1 from './assets/imgLibrary/lake.jpg'
import img2 from './assets/imgLibrary/beach.jpg'
import img3 from './assets/imgLibrary/barcelona.jpg'
import img4 from './assets/imgLibrary/arco.jpg'
import stars from './assets/star.png'
import bike from './assets/bici.png'
import clock from './assets/clock.png'
import age from './assets/allAges.png'


const cards = [
    {
        id:1,
        header: 'Costa Brava',
        title: 'Disfruta de un hermoso paseo en bicicleta por el increíble Parque Natural del Montseny. Una escapada veraniega perfecta para parejas, familias y amigos que nos permitirá conocer nuevos y sorprendentes lugares.',
        image:img1,
        bike: bike,
        clock : clock,
        age: age,
        stars:stars,
        text : '(18 Reviews)'

    },
    {
        id:2,
        header: 'Tarragona',
        title: 'Been there a few times',
        image: img2,
        bike: bike,
        clock : clock,
        age: age,
        stars:stars,
        text : '(20 Reviews)'
    },
    {
        id:3,
        header: 'Barcelona',
        title: 'Currently living here, nice place to live!',
        image: img3,
        bike: bike,
        clock : clock,
        age: age,
        stars:stars,
        text : '(43 Reviews)'
    },
    {
        id:4,
        header: 'Sitges',
        title: 'Nice beaches, had a great time there',
        image: img4,
        bike: bike,
        clock : clock,
        age: age,
        stars:stars,
        text : '(20 Reviews)'
    },
    {
        id:5,
        header: 'Salou',
        title: "Had on of the best party's ever there",
        image: img2,
        bike: bike,
        clock : clock,
        age: age,
        stars:stars,
        text : '(12 Reviews)'
    },
    {
        id:6,
        header: 'cards web',
        title: 'nice view, would like to go there',
        image: img2,
        bike: bike,
        clock : clock,
        age: age,
        stars:stars,
        text : '(26 Reviews)'
    }

]

export function Cards(){
    return(
        <div className="container">
            <div className="row">
                {
                    cards.map(card =>(
                        <div className="col-md-5" key={card.id}>
                            <TravelCard header={card.header} title={card.title} text={card.text} image={card.image} bike={card.bike} stars={card.stars} clock={card.clock} age={card.age}/>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}