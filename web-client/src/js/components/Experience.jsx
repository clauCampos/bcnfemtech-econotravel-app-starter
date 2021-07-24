import * as React from "react";

import {TravelCard} from "./TravelCard";

export const Experience = () => {
  return (
    <section className="ExperienceSection">
      <TravelCard />
      {/* {props.experiences.map(experiences =>
        <TravelCard experiences={experiences}/>
      )}*/}
    </section>
  )
}
