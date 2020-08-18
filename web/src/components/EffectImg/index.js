import React from 'react';

import avatarImg from '../../assets/avatar.jpeg'

import '../../assets/styles/global.css'
import './styles.css'


function EffectImg(){
    return(
        <div>
                <img src={avatarImg} className="avatarImg" alt="Avatar"/>
                <img src={avatarImg} className="avatarImg" alt="Avatar"/>
                <img src={avatarImg} className="avatarImg" alt="Avatar"/>
                <img src={avatarImg} className="avatarImg" alt="Avatar"/>
        </div>
    )
}

export default EffectImg;