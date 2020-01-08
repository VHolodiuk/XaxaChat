import React from "react";
import Chats from './Chats';
import WrapAccount from './WrapAccount';
import Logo from '../Logo';
import { Route } from "react-router-dom";
import CreateRoom from '../popup/CreateRoom';
import GameRules from "../popup/GameRules";

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
            <Route path="/Chat/AddRoom" render ={
                ()=> <CreateRoom
                    createRoom={props.createRoom}
                    selectLanguage={props.selectLanguage}
                    state={props.state}
                    rooms={props.rooms}
                />
            }/>
            <Route path="/Chat/rules" render ={
                ()=> <GameRules
                    selectLanguage={props.selectLanguage}
                    state={props.state}
                    rooms={props.rooms}
                />
            }/>
        </section>
    )
}

export default WrapChat;