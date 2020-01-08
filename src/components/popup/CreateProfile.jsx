import React from 'react';
import {NavLink} from "react-router-dom";

function CreateProfile(props) {

    // let nameInput = React.createRef(); 

    // let takeInput = () =>{
    //     let name = nameInput.current.value;
    //     props.createRoom(name);
    //     nameInput.current.value = '';
    // }

    return(
        <div className='CreateProfile'>
            {/* <p className='text'>
                {props.state.TextsApp[props.state.currentEn].addRoom}
            </p>
            <NavLink to="/Chat" className='exit'>
               X
            </NavLink>
            <input ref={nameInput} />
            <button onClick={takeInput}>
            </button> */}
        </div>
    )    
}

export default CreateProfile;