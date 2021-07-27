import * as React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Button, Card, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

export const TravelCard = (props) => {
    return (
        <div className="experiencias">
            <div className="filters">

            </div>

            <Card className="card-container mb-3 animate__animated  animate__zoomIn" style={{ color: "#000"} }>

                <div className="overflow">
                    <Card.Img src={props.image} className="card-img-top"/>
                </div>

                <Card.Body>
                    <Card.Header >{props.header}</Card.Header>
                    <Card.Title>{props.title}</Card.Title>

                    <div className={"card__details"}>
                        <Card.Img className="bike" src={props.bike} alt={"bike"} />
                        <Card.Text className="bicicleta__duracion">{}</Card.Text>
                        <Card.Img className="clock" src={props.clock} alt={"Duration"} />
                        <Card.Text className="card__duracion">{}</Card.Text>
                        <Card.Img className="allAges" src={props.age} alt={"Todas las edades"} />
                        <Card.Text className="todasLasEdades__duration">{props.text}</Card.Text>
                    </div>

                    <div className="card__reviews">
                        <Card.Img className="star" src={props.stars} alt={"Reviews icon"} />
                        <Card.Img className="star" src={props.stars} alt={"Reviews icon"} />
                        <Card.Img className="star" src={props.stars} alt={"Reviews icon"} />
                        <Card.Img className="star" src={props.stars} alt={"Reviews icon"} />
                        <Card.Img className="star" src={props.stars} alt={"Reviews icon"} />

                    </div>
                    <Button className="btn btn-outline-success" variant="success" >Book now </Button>
                </Card.Body>
            </Card>




        </div>

    )
}
