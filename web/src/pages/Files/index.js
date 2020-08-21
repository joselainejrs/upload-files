import React from 'react';
import { Link } from 'react-router-dom';


import { AiOutlineSetting } from "react-icons/ai";
import { BsDownload } from "react-icons/bs";

import EffectImg from   '../../components/EffectImg';
import arrowIms from '../../assets/icon/arrow.svg'
import logoImg from '../../assets/logo.svg'
import '../../assets/styles/global.css'
import './styles.css'


function Files(){
    return(
        <div id="page-file"  className="container">

            <div className="bar">
                <header>
                    <Link to="/"> <img src={arrowIms} alt="Seta para voltar"/></Link>
                    <img src={logoImg} alt="Logo"/>
                </header>
                <p className="description">
                Consult your images whenever you want
                </p>
            </div>

            <div className="content">
                <div className="box-info">
                    <p>Images</p>
                    <form className="file">
                        <BsDownload size="50" color="#B32B38" className="icon"/> 
                        <input   type="file" name="" id=""  /> 
                    </form>
                    <AiOutlineSetting size="50" color="#B32B38" className="icon"/>
                </div>
               < EffectImg />
            </div>
        </div>
    )
}

export default Files;