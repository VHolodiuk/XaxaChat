import React from "react";

function WrapButton(props) {

    return(
        <div className="WrapButton">
            <p>{props.text}</p>
            <button onClick={props.click}>
                {props.text}
            </button>
        </div>
    );
}

export default WrapButton;