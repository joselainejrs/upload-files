import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';


import logoImg from '../../assets/logo.png';

import '../../assets/styles/global.css'
import './styles.css'

export default function Home(){
    return(
        <div id="page-home">
            <div className="backgroundimg">
            </div>
          
            
            <div id="page-container" className="container">
                
                    <section>
                        <img src={logoImg} className="logo-img" alt="Logo"/>
                    </section>

                    <section id="page-content">
                        <p className="description">Send your photo with safety</p>                
                    
                        <form action="">
                            <div  className="input" >
                                <input 
                                    type="file" 
                                    placeholder="Insert image"
                                />
                                <p>Insert image</p>
                            </div>
                        </form>

                        <div className="link">
                            <Link to="/files" className="link-page"> Consult image </Link>

                            <BsArrowRight  size="45" />

                        </div>
                        
                    </section>
            </div>
        </div>
    )
}
