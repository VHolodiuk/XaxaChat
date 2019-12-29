import React from 'react';
import WrapOutput from '../OneComponent/WrapOutput';

function WrapRooms(props) {

    let WrapMap = props.rooms[props.state.TakeRoom].username.map( date => <WrapOutput text={date.name}/>);

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
                    {props.state.TextsApp[props.state.currentEn].rooms}
                </button>
            </div>
        </div>
    );
}

export default WrapRooms;