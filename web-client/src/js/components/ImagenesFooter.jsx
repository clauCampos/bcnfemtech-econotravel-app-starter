import * as React from "react";
import img1 from './assets/imgLibrary/free.jpg'
import img2 from './assets/imgLibrary/puenteTarragona.jpg'
import img3 from './assets/imgLibrary/dil.jpg'

export const ImagenesFooter = () => {
    return(
        <section className={"imgGallery"}>
            <img src={img1} />
            <img src={img2} />
            <img src={img3} />
        </section>
    )
}