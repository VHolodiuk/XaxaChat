import React from 'react';
import WrapCanvas from '../Rooms/WrapCanvas';
import CanvasButton from '../Rooms/CanvasButton';

function ChatsWindow(props) {
    return(
        <div className='ChatsWindow'>
            <WrapCanvas 
                state={props.state}
                rooms={props.rooms}
            />
            <CanvasButton          
                state={props.state}
                rooms={props.rooms} 
            />
        </div>
    );
}

export default ChatsWindow;