import * as React from "react";

export const Catalog = (props) => (
    <section className="catalogoSection">

        { props.experiencias.map( experiencias =>
            <div className="experiencias">
                <div>{ experiencias.title }</div>
                <div>{ experiencias.tag}</div>
            </div>

        )}

    </section>
)