import React from 'react'
import Menu from '../menu/menu.js'

import './header.css'

export default props => (
    <div className="header">
        <h1>{props.headerText}</h1>
        <Menu></Menu>
    </div>
)
