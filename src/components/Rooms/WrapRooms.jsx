import React from 'react';
import WrapOutput from '../OneComponent/WrapOutput';
import {NavLink} from "react-router-dom";

function WrapRooms(props) {

    let WrapMap = props.rooms[props.state.TakeRoom].username.map( date => <WrapOutput text={date.name}/>);

//   if (props.state.data.name) return <Redirect to={'/Chat/AddRoom'} />;

    return(
        <div className="WrapRooms">
            <div className="top">
                <div onClick={(side) => props.swapRoom('left') } className="BtnArrow leftArrow">
                    <p>{'<'}</p>                  
                </div>
                <div className="RoomWrap">
                    <title>
                        {props.rooms[props.state.TakeRoom].name}
                    </title>
                    {WrapMap}
                </div>
                <div onClick={(side) => props.swapRoom('right') } className="BtnArrow rightArrow">
                    <p>{'>'}</p>
                </div>
            </div>
            <div className="bottom">
                <button>
                    <NavLink to="/Chat/AddRoom">
                        {props.state.TextsApp[props.state.currentEn].rooms}
                    </NavLink>
                </button>
            </div>
        </div>
    );
}

export default WrapRooms;