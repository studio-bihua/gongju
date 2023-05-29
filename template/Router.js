import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export const RouterManager = () => {
    return (<Router>
        <Switch>
            <Route path="/contact">
                <>Contact</>
                {/* <Contact /> */}
            </Route>

            <Route path="/">
                <>Home</>
                {/* <Home /> */}
            </Route>
        </Switch>
    </Router> )
}


export default RouterManager;
