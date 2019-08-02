import React, {Fragment} from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from 'routes/index';
import PrivateRoute from 'components/private-route'

const Main = () => (
  <Fragment>
    <Switch>
      {
        routes.map(({
          title,
          component: Component,
          url,
          exact,
          requirePermission,
        }) => {
          if(requirePermission ) {
            return (
              <PrivateRoute 
                key={url}
                path={url}
                title={title}
                exact={exact}
                component={Component}
              />
            )
          }
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
