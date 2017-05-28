import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainLayout from './containers/MainLayout';
import PageNotFound from './containers/PageNotFound';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={MainLayout} />
      <Route component={PageNotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
