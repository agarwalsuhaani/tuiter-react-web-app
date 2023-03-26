import React from "react";
import "./index.css";
import TuitsItemsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return(
        <>
            <h4>Home</h4>
            <WhatsHappening />
            <TuitsItemsList />
        </>
    );
};
export default HomeComponent;
