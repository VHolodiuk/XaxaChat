import React from 'react';
import Avatar from '../../img/avatar.png';

function Profile(props) {
    return(
        <div className="Profile">
            <div className="top">
                <div className="WrapAvatar">
                    <img src={Avatar} alt=""/>
                </div>
                <div className="WrapData">
                    <p className="LabelNick">
                        {props.state.data.name}
                    </p>
                    <div className="star">
                        <svg className="starIco" id="v2" viewBox="0 0 16 16">
                            <path d="M7.5 0.25 L9.375 6 h5.625 L10.375 9.25 L12.25 14.875 L7.5 11.375 L2.75 14.875 L4.625 9.25 L0 6 h5.625 Z"/> 
                        </svg>
                    </div>
                    <p className="LabelRate"> 
                        {props.state.data.rate}
                    </p>
                </div>
            </div>
            <div className='bottom'>
            </div>
        </div>
    )
}
export default Profile;
