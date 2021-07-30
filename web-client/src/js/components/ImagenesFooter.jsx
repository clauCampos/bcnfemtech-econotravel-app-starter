import * as React from "react";
import img1 from './assets/img/free.jpg'
import img2 from './assets/img/puenteTarragona.jpg'
import img3 from './assets/img/dil.jpg'

export const ImagenesFooter = () => {
    return(
        <section className={"imgGallery"}>
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
        </section>
    )
}