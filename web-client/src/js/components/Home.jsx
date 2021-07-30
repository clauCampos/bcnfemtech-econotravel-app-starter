import * as React from 'react';
import {NavigationBar} from "./NavigationBar";
import {Experience} from "./Experience";
import {MainCarousel} from "./MainCarousel";
import {Selection} from "./Selection";




export const Home = () => {
  return (
    <div>
      <NavigationBar />
      <MainCarousel />
      <Selection />
      <section className="wrapper__home">
          <Experience />
      </section>
    </div>
  )
}
