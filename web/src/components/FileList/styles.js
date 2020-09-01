import styled from 'styled-components';

import 'react-circular-progressbar/dist/styles.css';

export const FileContainer = styled.ul`
    margin: 1rem;
    

    li{
        display: flex;
        justify-content:space-between;
        align-items:center;

        color: rgba(255, 255, 255, 0.85);

        & + li {
            margin-top: 2rem;
        }
    }

`;

export const FileInfo = styled.div`
display: flex;
align-items: center;

    
div{
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    
        span{
            font-size: 1.8rem;
            color: rgba(255, 255, 255, 0.74);;
           
            button{
                border:0;
                font-size: 1.8rem;
                font-weight: 500px;

                background: transparent;
                color: var(--color-input-error);
                
                margin-left: 1rem;
                cursor: pointer;    
                
            }
        }
    }
`;


export const Preview = styled.div`
    width: 3.6rem;
    height:3.6rem;
    border-radius: 5px;
    background-image:url(${props => props.src});
    background-repeat: no-repeat;
    background-size:cover;
    background-position: 30% 30%;
    margin-left: 1rem;
    margin-right: 1rem;
    
    `;
