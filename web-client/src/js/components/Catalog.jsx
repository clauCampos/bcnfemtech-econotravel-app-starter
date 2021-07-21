import * as React from "react";

import {TravelCard} from "./travelCard";

export const Catalog = (props) => (
    <section className="catalogoSection">

        { props.experiencias.map( experiencias =>
          <TravelCard experiencias={experiencias}/>

        )}

    </section>
)
