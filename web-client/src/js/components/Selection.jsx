import * as React from "react";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


export const Selection = () => {
    return(
        <div className="select__bar">
            <FloatingLabel controlId="floatingSelect" className="select-bar" >
                <h4 className={"title__search"}>Buscas una experiencia?  Te ayudamos</h4>
                <div className="select__form">
                    <Form.Select  className={"select__group"} aria-label="Floating label select example">
                        <option>Experiencias</option>
                        <option value="1">Montaña</option>
                        <option value="2">Campo</option>
                        <option value="3">Ciudad</option>
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