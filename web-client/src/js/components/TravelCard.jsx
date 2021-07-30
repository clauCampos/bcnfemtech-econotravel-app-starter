import * as React from "react";
import {Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from "react-router-dom";


export const TravelCard = (props) => {
    return (
        <section className={"cardsSection"}>
            <div className={"wrapper__cards"}>
                <Card className={"card-container animate__animated animate__zoomIn card__item"}>
                    <div className={"card__image"}>
                        <Card.Img className={"card-img-top"} src={props.image} />
                        <p className={"card__price"}>250€ p/p</p>
                    </div>
                    <Card.Body className={"card__body"}>
                        <Card.Header className={"card__title"}>{props.header}</Card.Header>
                        <Card.Title className={"card__text"}>{props.title}</Card.Title>
                        <div className={"card__details"}>
                            <ul className={"details__icons"}>
                                <li>
                                    <Card.Img className={"icon"} src={props.bike} alt={"Bicicleta"} />
                                    <p className="details__icons--text">Bicicleta</p>
                                </li>
                                <li>
                                    <Card.Img className={"icon"} src={props.toWalk} alt={"Caminata"} />
                                    <p className="details__icons--text">Caminata</p>
                                </li>
                                <li>
                                    <Card.Img className={"icon"} src={props.clock} alt={"Duración"} />
                                    <p className="details__icons--text">4 horas</p>
                                </li>
                                <li>
                                    <Card.Img className={"icon"} src={props.age} alt={"Todas las edades"} />
                                    <p className="details__icons--text">Todas las edades</p>
                                </li>
                            </ul>
                        </div>
                        <div className={"card__reviews"}>
                            <ul className={"reviews__icons"}>
                                <li><Card.Img className={"star"} src={props.stars} alt={"Reviews icon"} /></li>
                                <li><Card.Img className={"star"} src={props.stars} alt={"Reviews icon"} /></li>
                                <li><Card.Img className={"star"} src={props.stars} alt={"Reviews icon"} /></li>
                                <li><Card.Img className={"star"} src={props.stars} alt={"Reviews icon"} /></li>
                                <li><Card.Img className={"star"} src={props.stars} alt={"Reviews icon"} /></li>
                                <li><Card.Text className={"reviews__text"}>{props.text}</Card.Text></li>
                            </ul>
                        </div>
                        <Link to={"/reservas"} className="btn__card">Ver experiencia</Link>
                    </Card.Body>
                </Card>
            </div>
        </section>
    )
}
