import * as React from "react";
import img1 from './assets/imgLibrary/free.jpg'
import img2 from './assets/imgLibrary/puenteTarragona.jpg'
import img3 from './assets/imgLibrary/dil.jpg'

export const ImagenesFooter = () => {
    return(
        <div>

                <img src={img1} style={{width: '505px', height: '250px'}}/>
                <img src={img2}  style={{width: '505px', height: '250px'}}/>
                <img src={img3}  style={{width: '505px', height: '250px'}}/>

        </div>

        )

}