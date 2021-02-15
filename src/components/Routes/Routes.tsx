import { Route, Switch } from 'react-router-dom';

import Dashboard from '../Dashboard/Dashboard';
import Form from '../Form/Form';

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path='/form' component={Form} />
        <Route exact path='/' component={Dashboard} />
      </Switch>
    </>
  );
};

export default Routes;
