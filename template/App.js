import React from "react";
import gongju from "../src/index.js"
import RouterManager from "./Router.js";

export const App = () => {
    React.useEffect(() => {
        console.log('gongju: ', gongju)
    })

    return <RouterManager />
}


export default App;