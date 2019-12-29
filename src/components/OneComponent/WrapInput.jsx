import React  from 'react';

function WrapInput(props) {
    return(
        <div className="WrapInput">
            <p>{props.text}</p>
            <input type="text" ref={props.Input} placeholder={props.text}/>
        </div>
    );
}

export default WrapInput;