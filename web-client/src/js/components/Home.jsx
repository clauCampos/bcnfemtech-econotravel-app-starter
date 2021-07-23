import * as React from 'react';
import {NavigationBar} from "./NavigationBar";
import {Experience} from "./Experience";
import {MainCarousel} from "./MainCarousel";
import {Footer} from "./Footer";


export const Home = () => {
  return (
    <div>
      <NavigationBar />
      <MainCarousel />
      <Experience />
      <Footer />
    </div>
  )
}
