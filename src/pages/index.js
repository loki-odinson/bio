import React from "react"
import Header from "../components/header/header.js"
import Body from "../components/main-body/main-body.js"

import "./index.css"

export default () => (
    <div className="start">
        <Header headerText=".collude" buttonValue="Menu"/>
        <Body></Body>
    </div>
)
