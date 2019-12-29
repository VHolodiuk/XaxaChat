import React from 'react';
import { Redirect } from 'react-router-dom';
function ListLanguages(props) {

    if (props.state.EnterChange === "1") return <Redirect to={'/my-app/registration'} />;

    return(
        
        <div className='ListLanguages'>
            <div>
                <span>{'English'}</span>
                <button onClick={ (language, ch) => props.selectLanguage(0,'1')}>{props.state.TextsApp[0].language}</button>
            </div>
            <div>
                <span>{'Українська'}</span>
                <button onClick={ (language, ch) => props.selectLanguage(1,'1')}>{props.state.TextsApp[1].language}</button>
            </div>
            <div>
                <span>{'Русский'}</span>
                <button onClick={ (language, ch) => props.selectLanguage(2,'1')}>{props.state.TextsApp[2].language}</button>
            </div>
        </div>
    )
}

export default ListLanguages;