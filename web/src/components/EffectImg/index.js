import React, {Component} from 'react';

import avatarImg from '../../assets/avatar.jpeg'
import { BsCheckCircle } from "react-icons/bs";


import '../../assets/styles/global.css'
import './styles.css'


class EffectImg extends Component{
    render(){
        return(
            <div id="box-effect">
                <div className="dropdown">

                    <button type="submit" className="dropdown-icon"> 
                        <BsCheckCircle  size="4rem" className="icon-select"/>
                    </button>
                    <img src={avatarImg} className="avatarImg" alt="Avatar"/> 
                </div> 

                <div className="dropdown">

                    <button type="submit" className="dropdown-icon"> 
                        <BsCheckCircle size="4rem" className="icon-select"/>
                    </button>
                    <img src={avatarImg} className="avatarImg" alt="Avatar"/> 
                </div> 

                <div className="dropdown">

                    <button type="submit" className="dropdown-icon"> 
                        <BsCheckCircle size="4rem" className="icon-select"/>
                    </button>
                    <img src={avatarImg} className="avatarImg" alt="Avatar"/> 
                </div> 

            </div>
        
        )
    }
}

export default EffectImg;