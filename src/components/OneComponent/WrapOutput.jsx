import React  from 'react';

function WrapOutput(props) {
    return(
        <div className="WrapOutput">
            <p>{props.text}</p>
        </div>
    );
}

export default WrapOutput;