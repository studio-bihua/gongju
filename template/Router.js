import React from "react";
import { Link, Route, Router, Switch } from "wouter";
import { TransitionGroup, CSSTransition } from "react-transition-group";


import Home from "./pages/Home";
import Contact from "./pages/Contact";

export const RouterManager = () => {
    return (<div>
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
        <Router>
            <Switch>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                   <Home />
                </Route>
            </Switch>
        </Router>
    </div>)
}


export default RouterManager;
