import React from "react"
import Header from "./components/Header"
import Image from "./components/Image"
import logo from "./img/logo.jpg"


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            helpText: "Help text",
            userData: ""
        }

        this.inputClick = this.inputClick.bind(this)
    }

    helpText = "Help text"

    componentDidUpdate(prevProp) {
        if (this.state.helpText !== "Help") {
            console.log("Some")
        }
    }

    render() {
        return (
            <div className="mydiv">
                <Header title="Site header"/>
                <h1>{this.state.helpText}</h1>
                <h2>{this.state.userData}</h2>
                <input placeholder={this.state.helpText}
                       onChange={
                           event =>
                               this.setState({userData: event.target.value})
                       }
                       onClick={this.inputClick}
                       onMouseOver={this.mouseOver}/>
                <p>{this.state.helpText === "Help text!" ? "Yes" : "No"}</p>
                <Image image={logo}/>
            </div>
        )
    }

    inputClick() {
        this.setState({helpText: "Changed"})
        this.helpText = "Changed"
        console.log("clicked")
    }

    mouseOver() {
        console.log("mouseOver")
    }
}

export default App