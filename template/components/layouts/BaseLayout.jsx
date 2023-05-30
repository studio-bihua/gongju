import React from "react";

const BaseLayout = ({ children }) => {
    return (
        <>
            <main>
                {children}
            </main>
        </>
    )
}

export default BaseLayout;