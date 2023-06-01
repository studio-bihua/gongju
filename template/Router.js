import React from "react";
import { Link, Route, Router, Switch } from "wouter";

import Home from "./pages/Home";
import Contact from "./pages/Contact";

import BaseLayout from "./components/layouts/BaseLayout";

export const RouterManager = () => {
    return (
        <Router>
            <BaseLayout>
            <Switch>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                   <Home />
                </Route>
            </Switch>
            </BaseLayout>

        </Router>
    )
}


export default RouterManager;
