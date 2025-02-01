//without jsx:
// ReactDOM.render(
//     React.createElement(
//         "input",
//         {
//             placeholder: "help text",
//             onClick: () => console.log("clicked"),
//             onMouseEnter: () => console.log("Mouse over")
//         }
//     ),
//     document.getElementById("app")
// );

const inputClick = () => {
    console.log("clicked")
}

const mouseOver = () => {
    console.log("mouseOver")
}

const helpText = "Help text"

const elements = <div className={}>
    <h1>{helpText}</h1>
    <input placeholder={helpText}
           onClick={inputClick}
           onMouseOver={mouseOver}/>
    <p>{helpText === "Help text!" ? "Yes" : "No"}</p>
</div>

const app = document.getElementById("app")
ReactDOM.render(
    elements,
    app
);