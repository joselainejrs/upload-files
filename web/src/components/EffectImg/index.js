import React, { Component } from 'react';
import filesize from 'filesize';

import api from '../../services/api';

import { BsFillTrashFill } from "react-icons/bs";

import '../../assets/styles/global.css'
import './styles.css'


export default class EffectImg extends Component{
        state ={
            uploadedFiles: []
        }

       async componentDidMount(){
            const response = await api.get('posts')
                // console.log(response)
                this.setState({
                    uploadedFiles: response.data.map(file => ({
                        id: file._id,
                        name: file.name,
                        readableSize: filesize(file.size),
                        preview: file.url,
                        uploaded: true,
                        url: file.url,
                    }))
                });
            }

    render(){
        const { uploadedFiles } = this.state;

          return(
            <div id="box-effect">

            {this.state.uploadedFiles.map( data => (
                <div 
                    key={data.id}
                    className="dropdown"
                >

                    <button 
                        type="submit" 
                        className="dropdown-icon"
                    > 
                        <BsFillTrashFill  size="3rem" className="icon-select"/>
                    </button>
                    <img src={uploadedFiles.files} className="avatarImg" alt="Avatar"/> 
                </div> 
            ))}                

            </div>
        
        )
    }
}
