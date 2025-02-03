import React, { useEffect, useState } from "react";

const Button = (props) => {
    const [click, setClick] = useState(0) //in brackets is default value of state

    useEffect(() => {
        document.title = `You clicked ${click}`
    }, []);

    return (
        <button
            onClick={() => setClick(click + 1)}>
            Button {click}
        </button>
    )
}

Button.defaultProps = {
    text: "Just button"
}

export default Button