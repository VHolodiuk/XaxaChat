import React from 'react';
import WrapMessage from './WrapMessage';

function WrapCanvas(props) {
    
    let MessagRend = props.rooms[props.state.TakeRoom].texts.map( date => <WrapMessage nick={date.nick} text={date.text} time={date.time}/>);

    let Changed = () =>{
        console.log("works");
    }

    return(
        <div className="WrapCanvas" onChange={Changed}>
            {MessagRend}
        </div>
    );
    
}

export default WrapCanvas;