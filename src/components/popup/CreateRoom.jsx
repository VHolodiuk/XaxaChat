import React from 'react';
import {NavLink} from "react-router-dom";
import { Redirect} from 'react-router-dom';

function CreateRoom(props) {

    let nameInput = React.createRef(); 

    let takeInput = () =>{
        let name = nameInput.current.value;
        props.createRoom(name);
        nameInput.current.value = '';
    }

    if (props.state.RoomBuild) return <Redirect to={'/Chat'} />;

    return(
        <div className='CreateRoom'>
            <p className='text'>
                {props.state.TextsApp[props.state.currentEn].addRoom}
            </p>
            <NavLink to="/Chat" className='exit'>
               X
            </NavLink>
            <input ref={nameInput} />
            <button onClick={takeInput}>
            </button>
        </div>
    )    
}

export default CreateRoom;