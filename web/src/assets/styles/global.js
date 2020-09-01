import { createGlobalStyle } from 'styled-components';

import 'react-circular-progressbar/dist/styles.css';


export default createGlobalStyle`

:root {
    --color-background-primary: #EEFAF7;
    --color-bar-top: #288F7A;
    --color-title: #B32B38;
    --color-description: #17191A;
    --color-input-success: #1D6052;
    --color-input-error: #e57878;
    
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html,body, #root{
    height: 100vh;
    background: #000;
}

#root{
    display: flex;
    align-items: center;
    justify-content: center;
}

.container{
    width: 90vw;
    /* max-width: 700px; */
    /* margin: auto; */

}

@media(min-width: 700px){
    :root{
        font-size:62.5%;
    }
}
`;