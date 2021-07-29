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
      <Experience />
    </div>
  )
}
