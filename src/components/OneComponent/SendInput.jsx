import React from 'react';

function SendInput(props) {
    return(
        <div className="SendInput">
            <input type="text" ref={props.Input} placeholder={props.placeholder}/>
        </div>
    );
}

export default SendInput;