import * as React from "react";
import {Card} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


export const CardCard = (props) => {
    return (

        <div className={"reservasCard__details"}>
            <Card.Body className={"card__body"}>
                <ul className={"reservasCard__icons"}>
                    <li>
                        <Card.Img className={"icon"} src={props.image} alt={"Sailing"}/>
                        <p className="reservasCard__icons--text">Sailing</p>
                    </li>
                    <li>
                        <Card.Img className={"icon"} src={props.accessible} alt={"Accesibilidad"}/>
                        <p className="reservasCard__icons--text">Accesibilidad</p>
                    </li>
                    <li>
                        <Card.Img className={"icon"} src={props.hours} alt={"Beach"}/>
                        <p className="reservasCard__icons--text">4 horas</p>
                    </li>
                    <li>
                        <Card.Img className={"icon"} src={props.walks} alt={"Beach"}/>
                        <p className="reservasCard__icons--text">Caminata</p>
                    </li>
                    <li>
                        <Card.Img className={"icon"} src={props.allAge} alt={"All ages"}/>
                        <p className="reservasCard__icons--text">Todas las edades</p>
                    </li>
                </ul>
            </Card.Body>
        </div>

    )
}

