import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Carousel} from "react-bootstrap";
import img1 from './assets/imgLibrary/montserrat.jpg'
import img2 from './assets/imgLibrary/sagrada.jpg'
import img3 from './assets/imgLibrary/hotelW.jpg'



export const MainCarousel = () => {
  return (
      <Carousel>
        <Carousel.Item>
          <img
              className="d-block w-100"
              src={img1}
              alt="First slide"
          />
          <Carousel.Caption>
            <h3>Paseo en bicicleta por el Montseny</h3>
            <p>Una escapada veraniega perfecta para parejas, familias y amigos que nos permitirá conocer nuevos y sorprendentes lugares.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Descubre la costa en barco de vela</h3>
            <p>Disfruta de un hermoso paseo acuático en barco de vela por la increíble costa de Barcelona.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Descubre la Barcelona Modernista de noche</h3>
            <p>Descubre los principales emblemas del modernismo y visitaremos los templos y edificios más célebres del arquitecto Gaudí.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  )
}
