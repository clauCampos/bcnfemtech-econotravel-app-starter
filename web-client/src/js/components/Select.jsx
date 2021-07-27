import * as React from "react";
import {Button, FloatingLabel, Form} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


export const Select = () => {
    return(
        <div className="select-bar">
            <FloatingLabel controlId="floatingSelect" label="Works with selects">
                <h4>Buscas un tour? te ayudamos</h4>
                <Form.Select aria-label="Floating label select example">
                    <option>Experiencias</option>
                    <option value="1">Paseo en bicicleta por el Montseny</option>
                    <option value="2">Descubre la costa Brava en barco de vela</option>
                    <option value="3">Descubre la Barcelona Modernista de noche</option>
                </Form.Select>

                <Form.Select aria-label="Floating label select example">
                    <option>Tipos de tours</option>
                    <option value="1">Barcos</option>
                    <option value="2">Bicicleta</option>
                    <option value="3">Caminata</option>
                </Form.Select>
                <Button className="btn btn-outline-success btn-green" variant="success" >Buscar! </Button>
            </FloatingLabel>


        </div>

    )
}