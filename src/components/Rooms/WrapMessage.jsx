import React from 'react';

function WrapMessage(props) {
    return(
        <div className='WrapMessage'>
            <p className='nick'>{props.nick}</p>
            <p className='text'>{props.text}</p>
            <p className='time'>{props.time}</p>
        </div>
    )
}

export default WrapMessage;
