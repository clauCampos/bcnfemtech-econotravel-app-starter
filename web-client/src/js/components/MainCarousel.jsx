import * as React from "react";
import {Carousel} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './assets/imgLibrary/montserrat.jpg';
import img2 from './assets/imgLibrary/sagrada.jpg';
import img3 from './assets/imgLibrary/hotelW.jpg';



export const MainCarousel = () => {
  return (
      <Carousel>
        <Carousel.Item className="carousel__item">
          <img className="d-block w-100" src={img1} alt="Paseo en bicicleta por el Montseny" />
          <Carousel.Caption>
            <h1>Paseo en bicicleta por el Montseny</h1>
            <p className="carousel__text">Una escapada veraniega perfecta para parejas, familias y amigos que nos permitirá conocer nuevos y sorprendentes lugares.</p>
          </Carousel.Caption>
        </Carousel.Item>
          <Carousel.Item className="carousel__item">
          <img className="d-block w-100" src={img2} alt="Descubre la Barcelona Modernista de noche" />
          <Carousel.Caption>
              <h1>Descubre la Barcelona Modernista de noche</h1>
              <p className="carousel__text">Descubre los principales emblemas del modernismo y visitaremos los templos y edificios más célebres del arquitecto Gaudí.</p>
          </Carousel.Caption>
        </Carousel.Item>
          <Carousel.Item className="carousel__item">
          <img className="d-block w-100" src={img3} alt="Descubre la costa en barco de vela" />
          <Carousel.Caption>
              <h1>Descubre la costa en barco de vela</h1>
              <p className="carousel__text">Disfruta de un hermoso paseo acuático en barco de vela por la increíble costa de Barcelona. Una escapada veraniega apta incluso para los días más calurosos del año.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  )
}
