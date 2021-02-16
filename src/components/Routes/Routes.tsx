import { Route, Switch } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import Form from '../Form/Form';
import Page404 from '../Page404/Page404';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/form' component={Form} />
        <Route exact path='/' component={Dashboard} />
        <Route component={Page404} />
      </Switch>
    </>
  );
};

export default Routes;
