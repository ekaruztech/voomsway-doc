import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'routes/index';

const Main = () => (
  <Fragment>
    <Switch>
      {
        routes.map(({
          title,
          component: Component,
          url,
          exact,
        }) => {
          return (
            <Route
              key={url}
              path={url}
              exact={exact}
              render={(props) => <Component {...props} title={title} />}
            />
          )
        })
      }
    </Switch>
  </Fragment>
);

export default Main;
