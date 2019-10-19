import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../views/Home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route component={<div>This route does not exist</div>} />
  </Switch>
);
export default Routes;
