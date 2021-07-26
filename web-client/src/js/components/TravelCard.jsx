import * as React from "react";
import {BrowserRouter as Router, Link} from "react-router-dom";
import {Button, Card, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'



export const TravelCard = (props) => {
    return (
        <div className="experiencias">
            <div className="filters">

            </div>
            { /*<div className="tarjetas">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="single_place">
                            <div className="thumb">
                                <img className="card1" src={img} alt=""/>
                                <Link to="#" className="prise">$500</Link>
                            </div>
                            <div className="place_info">
                                <Link className={"card__title"} to={"/reservas"} ><h3>California</h3></Link>
                                <p>United State of America</p>
                                <div className="rating_days d-flex justify-content-between">
                                        <span className="d-flex justify-content-center align-items-center">
                                             <p className="">Icono estrella</p>
                                             <p className="">Icono estrella</p>
                                             <p className="">Icono estrella</p>
                                             <p className="">Icono estrella</p>
                                             <p className="">Icono estrella</p>
                                             <a href="#">(20 Review)</a>
                                        </span>
                                    <div className="days">
                                        <p className="">Otro icono</p>
                                        <Link className={"card__price"} to={"/reservas"} >5 Days</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            <Card className="card-container mb-3 animate__animated  animate__zoomIn" style={{ color: "#000"} }>

                <div className="overflow">
                    <Card.Img src={props.image} className="card-img-top"/>
                </div>

                <Card.Body>
                    <Card.Title >{props.title}</Card.Title>
                    <Card.Text>{props.text}</Card.Text>
                    <Button className="btn btn-outline-success" variant="success" >Book now </Button>
                </Card.Body>
            </Card>


        </div>

    )
}
