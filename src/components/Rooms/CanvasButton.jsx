import React from 'react';

function CanvasButton(props) {
    return(
        <div className="CanvasButton">
            <div className='NowRoom'>
                <span>
                    {props.rooms[props.state.TakeRoom].name}
                </span>
            </div>
            <div className='Create'>
                <span>
                    {props.state.TextsApp[props.state.currentEn].addRoom}
                </span>
            </div>
        </div>
    );
}

export default CanvasButton;