import React from 'react';
import {NavLink} from "react-router-dom";

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
                <NavLink to="/Chat/AddRoom">
                    {props.state.TextsApp[props.state.currentEn].addRoom}
                </NavLink>
                </span>
            </div>
        </div>
    );
}

export default CanvasButton;