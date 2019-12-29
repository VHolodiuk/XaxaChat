import React from "react";
import Chats from './Chats';
import WrapAccount from './WrapAccount';
import Logo from '../Logo';

function WrapChat(props) {
    return(
        <section className="WrapChat">
            <Chats 
                selectLanguage={props.selectLanguage}
                state={props.state}
                rooms={props.rooms}
                SendMessage={props.SendMessage}
            />
            <div className="Wrap">
                <Logo/>
                <WrapAccount
                    swapRoom={props.swapRoom}
                    selectLanguage={props.selectLanguage}
                    state={props.state}
                    rooms={props.rooms}
                />
            </div>
        </section>
    )
}

export default WrapChat;