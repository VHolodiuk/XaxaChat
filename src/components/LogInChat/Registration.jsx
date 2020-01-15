import React from "react";
import WrapInput from "../OneComponent/WrapInput";
import WrapButton from "../OneComponent/WrapButton";
import { Redirect, NavLink } from 'react-router-dom';

function Registration(props) { 
    let nickInput = React.createRef();
    let passwordInput = React.createRef();
    let rePasswordInput = React.createRef();
   // let nativLInput = React.createRef();
    let mailInput = React.createRef();
    let yearInput = React.createRef();
    
    let takeInput = () =>{
        let login = nickInput.current.value;
        let password = passwordInput.current.value;
        let repassword = rePasswordInput.current.value;
        //let nativleng = nativLInput.current.value;
        // eslint-disable-next-line
        let mail = mailInput.current.value;
        let year = yearInput.current.value;
        props.registrationUser(login, password, repassword, mail, year);
    }

    if (props.state.data.name) return <Redirect to={'/Chat'} />;

    return(
        <div className="Registration">
            <WrapInput Input={nickInput} text={props.state.TextsApp[props.state.currentEn].nick} type={"text"}/>
            <WrapInput Input={passwordInput} text={props.state.TextsApp[props.state.currentEn].password} type={"password"}/>
            <WrapInput Input={rePasswordInput} text={props.state.TextsApp[props.state.currentEn].repeatpass} type={"password"}/>
            <div className='leng'>
                <p>{props.state.TextsApp[props.state.currentEn].nativleng}</p>
                <NavLink to="/my-app/registration/ListLanguages" className='NavLink'>
                    {props.state.TextsApp[props.state.currentEn].language}
                </NavLink>
            </div>
            <WrapInput Input={mailInput} text={props.state.TextsApp[props.state.currentEn].mail} type={"text"}/>
            <WrapInput Input={yearInput} text={props.state.TextsApp[props.state.currentEn].year} type={"text"}/>
            <WrapButton click={takeInput} text={props.state.TextsApp[props.state.currentEn].registration} type={"text"}/>
        </div>
    );
}

export default Registration;