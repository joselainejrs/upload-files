import styled, { css } from 'styled-components';

const dragActive = css`
    border-color: var(--color-input-success);
    
    background: rgba(197, 117, 124, 0.48);
    

`;

const dragReject = css`
    border-color: var(--color-input-error);
    background: rgba(197, 117, 124, 0.48);
`;

const messageColors ={
    default: '#fff',
    error: '#e57878',
    success: '#1D6052'
}

export const StyledInput = styled.div.attrs({
    className: "dropzone"
})`
    transition: height 0.2s ease;
    border: 2px dashed #fff;
    border-radius: 8px;

    width: 450px;
    height: 80px;
    margin: auto;

    text-align: center;
    line-height: 6.6rem;

    font-weight: 500;
    font-size: 3.6rem;
    
    ${props => props.isDragActive && dragActive}; 
    ${props => props.isDragReject && dragReject}; 
`;


export const UploadMessage = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    
    color: ${props => messageColors[props.type || 'default']}; 
`;