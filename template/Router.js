import React from "react";
import { Link, Route, Router, Switch } from "wouter";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

export const RouterManager = () => {
    return (
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
    )
}


export default RouterManager;
