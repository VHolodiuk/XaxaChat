import React from "react";
import {NavLink,Redirect} from "react-router-dom";
import WrapInput from '../OneComponent/WrapInput';
import WrapButton from "../OneComponent/WrapButton";

function Enter(props) {
 
    let nickInput = React.createRef();   
    let passwordInput = React.createRef();

    // eslint-disable-next-line
    if (props.state.data.name) return <Redirect to={'/Chat'} />;

    let takeInput = () =>{
        let login = nickInput.current.value;
        let password = passwordInput.current.value;
        props.enterAudit(login, password);
        nickInput.current.value = '';
        passwordInput.current.value = '';
    }

    return(
        <div className="Enter">
            <div className='Inputs'>
                <WrapInput text={props.state.TextsApp[props.state.currentEn].nick} Input={nickInput}/>
                <WrapInput text={props.state.TextsApp[props.state.currentEn].password} Input={passwordInput}/>
            </div>
            <div className='WrapLanguage'>
                <button onClick={ (language) => props.selectLanguage(0)}>{props.state.TextsApp[0].language}</button>
                <button onClick={ (language) => props.selectLanguage(1)}>{props.state.TextsApp[1].language}</button>
                <button onClick={ (language) => props.selectLanguage(2)}>{props.state.TextsApp[2].language}</button>
            </div>
            <div className='Buttons'>
                <WrapButton text={props.state.TextsApp[props.state.currentEn].enter} click={takeInput}/>
                <NavLink to="/my-app/registration">
                    <WrapButton text={props.state.TextsApp[props.state.currentEn].registration}/>
                </NavLink>
            </div>
        </div>
    );
}

export default Enter;