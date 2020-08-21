import React from 'react';

import avatarImg from '../../assets/avatar.jpeg'
import selectImg from '../../assets/icon/select2.svg'
import { BsCheckCircle } from "react-icons/bs";


import '../../assets/styles/global.css'
import './styles.css'


function EffectImg(props){
    return(
    <div id="box-effect">
        <div className="dropdown">

            <button type="submit" className="dropdown-icon"> <BsCheckCircle  size="4rem" className="icon-select"/></button>

            <img src={avatarImg} className="avatarImg" alt="Avatar"/> 
        </div> 

        <div className="dropdown">
            <button type="submit" className="dropdown-icon"> <BsCheckCircle size="4rem" className="icon-select"/></button>

            <img src={avatarImg} className="avatarImg" alt="Avatar"/> 
        </div> 

        <div className="dropdown">
            <button type="submit" className="dropdown-icon"> <BsCheckCircle size="4rem" className="icon-select"/></button>

            <img src={avatarImg} className="avatarImg" alt="Avatar"/> 
        </div> 

    </div>
        
    )
}

export default EffectImg;