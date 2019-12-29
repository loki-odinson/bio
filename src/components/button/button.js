import React from "react"
import "./button.css"

export default props => (
    <div className="button-container">
        <button>
        {props.buttonValue}
        </button>
    </div>
)