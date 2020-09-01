import React, {Component } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';

import api from '../../services/api';

import { BsArrowRight } from "react-icons/bs";
import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.png';

import '../../assets/styles/global.css'
// import GlobalStyle from '../../assets/styles/global';

import Uploads from '../../components/Uploads';
import FileList from '../../components/FileList';
import './styles.css'

export default class Home extends Component{
    state = {
        uploadedFiles: []
    };

    async componentDidMount(){
        const response = await api.get('posts');

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

    handleUpload = files => {
        const uploadedFiles = files.map(file => ({
            file,
            id: uniqueId(),
            name: file.name,
            readableSize: filesize(file.size),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: false,
            error: false,
            // url: null
        }))

        this.setState({
            uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles)
        });

        uploadedFiles.forEach(this.processUpload);
    };

    updateFile = (id, data) => {
        this.setState({ 
            uploadedFiles: this.state.uploadedFiles.map(uploadedFile => {
                return id === uploadedFile.id ? { ...uploadedFile, ...data } : uploadedFile;
            }) 
        });
    };

    
    processUpload = (uploadedFile) => {
        const data = new FormData();

        data.append('file', uploadedFile.file, uploadedFile.name);

        api.post('posts', data, {
            onUploadProgress: e => {
                const progress = parseInt(Math.round((e.loaded * 100) / e.total));

                this.updateFile(uploadedFile.id, {
                    progress,
                });
            }
        }).then( response => {
            this.updateFile(uploadedFile.id,{
                uploaded: true,
                id: response.data_id,
                url: response.data.url,
            });
        }).catch(() => {
            this.updateFile(uploadedFile.id,{
                error: true,
            });
        });
    }

    handleDelete = async id => {
        await api.delete(`posts/${id}`);

        this.setState({
            uploadedFiles: this.state.uploadedFiles.filter(file => file.id !== id),
        });
    };

    componentWillUnmount(){
        this.state.uploadedFiles.forEach(file => URL.revokeObjectURL(file.preview));
    }
    render(){
        const { uploadedFiles } = this.state;

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
                                <div className="input">
                                    < Uploads onUpload={this.handleUpload} />
                                    { !! uploadedFiles.length && 
                                        < FileList files={uploadedFiles} 
                                        onDelete={this.handleDelete}/>
                                    }
                                </div>
                                
                                <div className="link">
                                    <Link to="/files" className="link-page"> Consult image 
        
                                    <BsArrowRight  size="45" /></Link>
        
                                </div>
                                
                            </section>
                    </div>
                </div>
            
        )
    }    
}
