import React, {Component} from 'react';
import { Link } from 'react-router-dom';


import { AiOutlineSetting } from "react-icons/ai";

import EffectImg from   '../../components/EffectImg';
import arrowIms from '../../assets/icon/arrow.svg'
import logoImg from '../../assets/logo.svg'
import '../../assets/styles/global.css'
import './styles.css'

import { BsDownload } from "react-icons/bs";


export default class Files extends Component{
        constructor(props){
            this.state ={
                file: ''
            }
        }

    render() {
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
    
                        <form action="" >
                            <label htmlFor="">
                                <BsDownload size="50" color="#B32B38" className="icon" /> 
                            </label>
                            <input 
                                onChange={this.handleUploadFiles}
                                accept="image/*"
                                type="file" 
                                name="" 
                                id=""
                            />
    
                        </form>
                                       
                        <AiOutlineSetting size="50" color="#B32B38" className="icon"/>
                    </div>
                   < EffectImg />
                </div>
            </div>
        )
    }
}

    