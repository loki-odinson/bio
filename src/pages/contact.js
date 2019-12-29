import React from "react"
import {Link} from "gatsby"
import Header from "../components/header/header.js"
import Button from "../components/button/button.js"

export default () => (
    <div>
        <Link to="/">Home</Link>
        <Header headerText="Contact"/>
        <Button buttonValue="Send Message"/>
    </div>
)