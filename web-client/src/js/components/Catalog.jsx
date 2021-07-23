import * as React from "react";

import {TravelCard} from "./TravelCard";

export const Catalog = (props) => (
    <section className="catalogoSection">

        { props.experiencias.map( experiencias =>
          <TravelCard experiencias={experiencias}/>

        )}

    </section>
)
