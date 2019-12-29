import React from 'react';
import ChatsWindow from './ChatsWindow';
import ChatsBottom from './ChatsBottom';

function Chats(props) {
    return(
        <div className="Chats">
            <ChatsWindow
                state={props.state}
                rooms={props.rooms}
            />
            <ChatsBottom 
                state={props.state}
                rooms={props.rooms}    
                SendMessage={props.SendMessage}
            />
        </div>
    )
}

export default Chats;