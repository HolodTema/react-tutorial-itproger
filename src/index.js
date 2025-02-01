import React from "react"
import * as ReactDOMClient from "react-dom/client"

class Header extends React.Component {
    render() {
        return (
            <header>{this.props.title}</header>
        )
    }
}

class App extends React.Component {
    helpText = "Help text"

    render() {
        return (
            <div className="mydiv">
                <Header title="Site header"/>
                <Header title="lslsl"/>
                <Header title="alhhahah"/>
                <h1>{this.helpText}</h1>
                <input placeholder={this.helpText}
                       onClick={this.inputClick}
                       onMouseOver={this.mouseOver}/>
                <p>{this.helpText === "Help text!" ? "Yes" : "No"}</p>
            </div>
        )
    }

    inputClick() {
        console.log("clicked")
    }
    mouseOver() {
        console.log("mouseOver")
    }
}


const app = ReactDOMClient.createRoot(document.getElementById("app"))

app.render(<App/>)