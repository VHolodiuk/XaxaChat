import React from 'react';
import Footer from '../Footer';
import Logo from '../Logo';
import Login from './Login';
 
function WrapLogin(props) {

    return(
        <section className="WrapLogin">
            <div className="WrapLogo">
                <Logo/>
            </div>
            <Login 
                enterAudit={props.enterAudit}
                selectLanguage={props.selectLanguage}
                registrationUser={props.registrationUser}
                state={props.state}
            />
            <Footer/>
        </section>
    );
}

export default WrapLogin;