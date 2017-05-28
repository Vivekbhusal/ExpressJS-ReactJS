import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './containers/MainLayout';
import PageNotFound from './containers/PageNotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={MainLayout}/>
            <Route component={MainLayout}/>
        </Switch>
    </BrowserRouter>
);

export default Router;