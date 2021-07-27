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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
              className="d-block w-100"
              src={img2}
              alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
              className="d-block w-100"
              src={img3}
              alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  )
}
