import React from 'react';
import LogoImg from '../img/logo.png';
import {NavLink} from 'react-router-dom';
 
function Logo(props) {
    return(
        <div className="Logo">            
        <NavLink to="/my-app" className="NavLink">
            <img src={LogoImg} alt="XaXaChat"/>
        </NavLink>
        </div>
    );
}

export default Logo;