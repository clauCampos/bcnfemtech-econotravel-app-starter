import * as React from "react";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


export const Select = () => {
    return(
        <div className="select__bar">
            <FloatingLabel controlId="floatingSelect" className="select-bar" >
                <h4 className={"title__search"}>Buscas una experiencia?  Te ayudamos</h4>
                <div className="select__form">
                    <Form.Select  className={"select__group"} aria-label="Floating label select example">
                        <option>Experiencias</option>
                        <option value="1">Paseo en bicicleta por el Montseny</option>
                        <option value="2">Descubre la costa Brava en barco de vela</option>
                        <option value="3">Descubre la Barcelona Modernista de noche</option>
                    </Form.Select>
                    <Form.Select className={"select__group"} aria-label="Floating label select example">
                        <option>Tipos de tours</option>
                        <option value="1">Barcos</option>
                        <option value="2">Bicicleta</option>
                        <option value="3">Caminata</option>
                    </Form.Select>
                    <Button className="btn btn-outline-success btn-search" variant="success" >Buscar! </Button>
                </div>
            </FloatingLabel>
        </div>
    )
}