import React from "react";
import Header from "../molecules/Header/index.jsx";
import Footer from "../molecules/Footer/index.jsx";

import '../../assets/styles/utils/root.scss';

const BaseLayout = ({ children }) => {
    return (
        <>
        <Header />
            <main>
                {children}
            </main>
        <Footer />
        </>
    )
}

export default BaseLayout;