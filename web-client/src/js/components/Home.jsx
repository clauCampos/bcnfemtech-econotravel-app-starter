import * as React from 'react';
import {NavigationBar} from "./NavigationBar";
import {Experience} from "./Experience";
import {MainCarousel} from "./MainCarousel";
import {Select} from "./Select";



export const Home = () => {
  return (
    <div>
      <NavigationBar />
      <MainCarousel />
      <Select />
      <Experience />
    </div>
  )
}
