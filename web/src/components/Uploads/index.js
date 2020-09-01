import React, {Component} from 'react'
import Dropzone from 'react-dropzone'

import { StyledInput, UploadMessage } from './styles';

export default class Uploads extends Component {

    renderDragMessage = (isDragActive, isDragReject) =>{
        if(!isDragActive){
            return <UploadMessage>Insert image</UploadMessage>
        }
        if(isDragReject){
            return <UploadMessage type="error">Unsupported file</UploadMessage>
        }
        return<UploadMessage type="success">Insert image</UploadMessage>     
    }
    render(){
        const { onUpload } = this.props;
        return(
            <Dropzone accept='image/*' onDropAccepted={onUpload}>
                {({ getRootProps, getInputProps, isDragActive, isDragReject}) => (
                    <StyledInput 
                        {...getRootProps()} 
                        isDragActive={isDragActive}
                        isDragReject={isDragReject}
                    >
                        <input {...getInputProps()} />
                        {this.renderDragMessage(isDragActive, isDragReject)}
                    </StyledInput>
                )}
            </Dropzone>
        );
    }
}
 