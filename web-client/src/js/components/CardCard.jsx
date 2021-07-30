import * as React from "react";
import {Button, Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


export const CardCard = (props) => {
    return (
        <div className={"card__details"}>
            <Card className={"card-container animate__animated animate__zoomIn card__item"}>
                <Card.Body className={"card__body"}>

                    <Card.Img className={"icon"} src={props.image} alt={"Sailing"}/>
                    <Card.Img className={"icon"} src={props.beach} alt={"Beach"}/>
                    <Card.Text className={"icon__text"}>try</Card.Text>

                    <Card.Img className={"icon"} src={props.walks} alt={"Beach"}/>
                    <Card.Img className={"icon"} src={props.allAge} alt={"Beach"}/>
                    <Card.Text className={"icon__text"}>walks</Card.Text>

                    <Card.Img className={"icon"} src={props.hours} alt={"Beach"}/>
                    <Card.Img className={"icon"} src={props.accessible} alt={"Beach"}/>
                    <Card.Text className={"icon__text"}>Long Walks</Card.Text>

                    <Button to={"/Experience"} className={"btn__card"}>Reserva Ya!</Button>
                    <p>Pasarela para silla de ruedas disponible bajo reserva.</p>
                </Card.Body>
            </Card>
        </div>


    )
}

