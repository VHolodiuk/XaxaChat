import React from 'react';
import {NavLink} from "react-router-dom";

function GameRules(props) {
    return(
        <div className='GameRules'>
            <NavLink to="/Chat" className='exit'>
               X
            </NavLink>
            <p className='text'>
                {props.state.TextsApp[props.state.currentEn].rulesText}
            </p>
        </div>
    )
}

export default GameRules;