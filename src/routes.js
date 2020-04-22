// Node Modules imports
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Local imports
import Home from './Pages/Home';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={ Home } />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;