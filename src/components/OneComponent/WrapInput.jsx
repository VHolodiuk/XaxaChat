import React  from 'react';

function WrapInput(props) {

    return(
        <div className="WrapInput">
            <p>{props.text}</p>
            <input type={props.type} ref={props.Input} placeholder={props.text} value={props.value}/>
        </div>
    );
}

export default WrapInput;