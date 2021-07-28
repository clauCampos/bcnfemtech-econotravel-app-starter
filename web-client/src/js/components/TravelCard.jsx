import * as React from "react";
import {Button, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom";


export const TravelCard = (props) => {
    return (
        <div className="experienciasSection">
            <Card className="card-container mb-3 animate__animated animate__zoomIn card__item" style={{ color: "#000"} }>
                <div className="overflow">
                    <Card.Img className="card-img-top" src={props.image} />
                </div>
                <div className="card__body">
                    <Card.Body>
                        <Card.Header className="card__title">{props.header}</Card.Header>
                        <Card.Title className="card__text">{props.title}</Card.Title>
                        <div>
                            <ul className={"card__details"}>
                                <li>
                                    <Card.Img className="icon" src={props.bike} alt={"Bicicleta"} />
                                    <Card.Text className="card__text">{}</Card.Text>
                                </li>
                                <li>
                                    <Card.Img className="icon" src={props.clock} alt={"Duración"} />
                                    <Card.Text className="card__text">{}</Card.Text>
                                </li>
                                <li>
                                    <Card.Img className="{icon}" src={props.age} alt={"Todas las edades"} />
                                    <Card.Text className="card__text">{}</Card.Text>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul className="card__reviews">
                                <li><Card.Img className={"star"} src={props.stars} alt={"Reviews icon"} /></li>
                                <li><Card.Img className={"star"} src={props.stars} alt={"Reviews icon"} /></li>
                                <li><Card.Img className={"star"} src={props.stars} alt={"Reviews icon"} /></li>
                                <li><Card.Img className={"star"} src={props.stars} alt={"Reviews icon"} /></li>
                                <li><Card.Img className={"star"} src={props.stars} alt={"Reviews icon"} /></li>
                                <li><Card.Text className="reviews__text">{props.text}</Card.Text></li>
                            </ul>
                        </div>
                        <Link to={"/Experience"} className={"btn__card"}>Ver experiencia</Link>
                    </Card.Body>
                </div>
            </Card>
        </div>
    )
}