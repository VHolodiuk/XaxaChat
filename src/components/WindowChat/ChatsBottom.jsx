import React from 'react';
import SendInput from '../OneComponent/SendInput';
import Send from '../../img/Send.png';
import {NavLink} from "react-router-dom";

function ChatsBottom(props) {

    let SInput = React.createRef(); 

    let Sends = () => {
        let message = SInput.current.value;
        props.SendMessage(message);
        SInput.current.value = "";
    }


    return(
        <div className="ChatsBottom">
            <div className='SendToChat'>
                <SendInput Input={SInput}>
                </SendInput>
                <button onClick={Sends}>
                    <img src={Send} alt=""/>
                </button>
            </div>
            <div className='SendButton'>
                <button>
                <NavLink to="/Chat/rules">
                    {props.state.TextsApp[props.state.currentEn].rules}
                </NavLink>
                </button>
                <button>
                    {props.state.TextsApp[props.state.currentEn].invite}
                </button>
                <button>
                    {props.state.TextsApp[props.state.currentEn].ignore}
                </button>
            </div>
            <div className='WrapGame'>
                <div className='left'>
                    <SendInput placeholder={props.state.TextsApp[props.state.currentEn].situation}>

                    </SendInput>
                    <SendInput placeholder={props.state.TextsApp[props.state.currentEn].direct}>

                    </SendInput>
                </div>
                <div className='right'>
                    <button>
                        <img src={Send} alt=""/>
                    </button>
                </div>
            </div>
            <div className='BottomButton'>
                <div className='left'>
                    <button>
                        {props.state.TextsApp[props.state.currentEn].LH}
                    </button>
                    <p>
                        {props.state.TextsApp[props.state.currentEn].ff}
                    </p>
                </div>
                <div className='right'>
                    <p>
                        {props.state.TextsApp[props.state.currentEn].donate}
                    </p>
                    <button>
                        {props.state.TextsApp[props.state.currentEn].iif}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ChatsBottom;