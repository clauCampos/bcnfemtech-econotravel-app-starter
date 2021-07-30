import * as React from "react";
import {TravelCard} from "./TravelCard";
import img1 from './assets/img/lake.jpg'
import img2 from './assets/img/port.jpg'
import img3 from './assets/img/beach.jpg'
import img4 from './assets/img/arco.jpg'
import img5 from './assets/img/parkGuell.jpg'
import img6 from './assets/img/guell.jpg'
import stars from './assets/img/star.png'
import bike from './assets/bici.png'
import clock from './assets/clock.png'
import age from './assets/allAges.png'
import toWalk from './assets/caminata.png'

const cards = [
    {
        id:1,
        header: 'Paseo en bicicleta por el Montseny',
        title: 'Disfruta de un paseo en bicicleta por el increíble Parque Natural del Montseny. Una escapada perfecta para parejas, familias y amigos que nos permitirá conocer nuevos y sorprendentes lugares.',
        image: img1,
        bike: bike,
        toWalk: toWalk,
        clock : clock,
        age: age,
        stars: stars,
        text: '(18 Reviews)'
    },
    {
        id:2,
        header: 'Descubre la costa en barco de vela',
        title: 'Disfruta de un hermoso paseo acuático en barco de vela por la increíble costa de Barcelona. Descubre los encantadores alrededores  y visita desde el mar sus más impresionantes playas y calas.',
        image: img2,
        bike: bike,
        toWalk: toWalk,
        clock: clock,
        age: age,
        stars: stars,
        text: '(20 Reviews)',
    },
    {
        id:3,
        header: 'Barcelona Modernista de noche',
        title: 'Desplazarse a pie es una de las mejores formas de descubrir las maravillas modernistas que se esconden en el barcelonés distrito del Eixample, ubicado en el centro de la ciudad. Descubriremos los principales emblemas del modernismo y visitaremos los templos y edificios más célebres del arquitecto Gaudí. ',
        image: img3,
        bike: bike,
        toWalk: toWalk,
        clock: clock,
        age: age,
        stars: stars,
        text: '(43 Reviews)'
    },
    {
        id:4,
        header: 'Arc de Triomf',
        title: 'Desplazarse a pie es una de las mejores formas de descubrir las maravillas modernistas que se esconden en el barcelonés distrito del Eixample, ubicado en el centro de la ciudad. Descubriremos los principales emblemas del modernismo y visitaremos los templos y edificios más célebres del arquitecto Gaudí. ',
        image: img4,
        bike: bike,
        toWalk: toWalk,
        clock: clock,
        age: age,
        stars: stars,
        text : '(20 Reviews)'
    },
    {
        id:5,
        header: 'Park Guell',
        title: 'Desplazarse a pie es una de las mejores formas de descubrir las maravillas modernistas que se esconden en el barcelonés distrito del Eixample, ubicado en el centro de la ciudad. Descubriremos los principales emblemas del modernismo y visitaremos los templos y edificios más célebres del arquitecto Gaudí. ',
        image: img5,
        bike: bike,
        toWalk: toWalk,
        clock: clock,
        age: age,
        stars:stars,
        text: '(12 Reviews)'
    },
    {
        id:6,
        header: 'Montjuic',
        title: 'Desplazarse a pie es una de las mejores formas de descubrir las maravillas modernistas que se esconden en el barcelonés distrito del Eixample, ubicado en el centro de la ciudad. Descubriremos los principales emblemas del modernismo y visitaremos los templos y edificios más célebres del arquitecto Gaudí. ',
        image: img6,
        bike: bike,
        toWalk: toWalk,
        clock: clock,
        age: age,
        stars: stars,
        text: '(26 Reviews)'
    }
]
export function Cards(){
    return(
        <div className="container">
            <div className="row">
                {
                    cards.map(card =>(
                        <div className="col-md-5" key={card.id}>
                            <TravelCard header={card.header} title={card.title} text={card.text} image={card.image} bike={card.bike} toWalk={card.toWalk}  stars={card.stars} clock={card.clock} age={card.age}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
