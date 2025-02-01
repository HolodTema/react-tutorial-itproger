import React from "react"
import * as ReactDOMClient from "react-dom/client"

const inputClick = () => {
    console.log("clicked")
}

const mouseOver = () => {
    console.log("mouseOver")
}

const helpText = "Help text"

const elements = <div className="mydiv">
    <h1>{helpText}</h1>
    <input placeholder={helpText}
           onClick={inputClick}
           onMouseOver={mouseOver}/>
    <p>{helpText === "Help text!" ? "Yes" : "No"}</p>
</div>


const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(elements)