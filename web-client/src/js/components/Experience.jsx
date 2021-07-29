import * as React from "react";
import {Cards} from "./Cards";


export const Experience = () => {
    return (
        <section className={"experienceSection"}>
            <div className={"wrapper"}>
                <h3>Experiencias</h3>
                <div className={"cardsSection"}>
                    <Cards/>
                </div>
            </div>
        </section>
    )
}
