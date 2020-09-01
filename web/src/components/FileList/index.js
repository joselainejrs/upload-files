import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';

import "react-circular-progressbar/dist/styles.css";

import { MdCheckCircle, MdError } from 'react-icons/md'
import { FileContainer, FileInfo, Preview } from './styles';

import '../../assets/styles/global.css';


const FileList = ({ files, onDelete }) => (
    <FileContainer>
        {files.map(uploadedFile => (
            <li key={uploadedFile.id}>
                <FileInfo>
                    <Preview src={uploadedFile.preview} />
                    <div>
                        <strong>{uploadedFile.name}</strong>
                        <span>
                            {uploadedFile.readableSize}{" "}
                            {uploadedFile.uploaded && (
                                <button onClick={() => onDelete(uploadedFile.id)}>Excluir</button>
                            )}
                        </span>
                    </div>
                </FileInfo>

                <div>
                   {!uploadedFile.uploaded && !uploadedFile.error && (
                        <CircularProgressbar
                            styles={{
                                root: { width: 35 },
                                path: { stroke: '#7159c1'},
                            
                            }}
                            strokeWidth={10}
                            value={uploadedFile.progress}
                        />
                   )}
                    
                    {uploadedFile.uploaded && <MdCheckCircle size={35} color='#1D6052' />}
                    {uploadedFile.error && <MdError size={35} color='#e57878' />}
                </div>
            </li>
        ))}
    </FileContainer>

);

export default FileList;
 