import React from 'react';
import Profile from '../Profile/Profile';
import WrapRooms from '../Rooms/WrapRooms';

function WrapAccount(props) {
    return(
        <div className="WrapAccount">
            <Profile 
                selectLanguage={props.selectLanguage}
                state={props.state}
            />
            <WrapRooms 
                swapRoom={props.swapRoom}
                selectLanguage={props.selectLanguage}
                state={props.state}
                rooms={props.rooms}
            />
        </div>
    );
}

export default WrapAccount;