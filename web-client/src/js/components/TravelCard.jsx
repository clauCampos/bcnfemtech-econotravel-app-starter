import * as React from "react";

export const TravelCard = (props) => {
  return (
    <div className="experiencias">
      <div>{props.experiencias.title}</div>
      <div>{props.experiencias.tag}</div>
    </div>
  )
}
