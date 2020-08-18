import React from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';

import Home from './pages/Home'
import Files from './pages/Files'

export default function Routes(){
    return(
        <BrowserRouter>
        <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/files" component={Files} />
        </Switch>
        </BrowserRouter>
    );
}