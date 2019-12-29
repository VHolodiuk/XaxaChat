import React from "react";
import { Route } from 'react-router-dom';

import Enter from './Enter';
import Registration from './Registration';
import Adds from '../Adds';
import ListLanguages from "../popup/ListLanguages";


function Login(props) {
    return(
        <div className="Login">
            <Route exact path="/my-app" render = {
                () => <Enter
                    enterAudit={props.enterAudit}
                    selectLanguage={props.selectLanguage}
                    state={props.state}
                />
            }/>
            <Route path="/my-app/registration" render = {
                () => <Registration
                    registrationUser={props.registrationUser}
                    selectLanguage={props.selectLanguage}
                    state={props.state}
                />
            }/>
            <Route path="/my-app/registration/ListLanguages" render = {
                () => <ListLanguages                    
                    selectLanguage={props.selectLanguage}
                    state={props.state}
                />
            }/>
            <Route exact path="/my-app" render = {
                () => <Adds styless="Adds AddsMin"/>
            }/>
        </div>
    );
}

export default Login;