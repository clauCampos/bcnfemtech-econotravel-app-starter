import * as React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {NavigationBar} from "./NavigationBar";
import {Home} from "./";
import {About} from "./About";
import {Experience} from "./Experience";
import {Reservation} from "./Reservation";
import {Footer} from "./Footer";


export const App = () => {
    return <Router>
        <NavigationBar />
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/experience">
                <Experience />
            </Route>
            <Route path="/reservas">
                <Reservation />
            </Route>
        </Switch>
        <Footer />
    </Router>

}
