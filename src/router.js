import React from 'react';
import PropTypes from 'prop-types';
import { routerRedux, Switch, Route, Redirect } from 'dva/router';
const { ConnectedRouter } = routerRedux
import dynamic from 'dva/dynamic';
import App from './routes/app';

function Routers({ history, app }) {

  const routes = [
    {
      path: '/',
      component: () => import('./routes/home/'),
    }, 
    {
      path: '/users',
      models: () => [import('./models/users')],
      component: () => import('./routes/users/'),
    },
    {
      path: '*',
      component: () => import('./routes/error/')
    }
  ];

  return (
    <ConnectedRouter history={history} routes={routes}>
      <App>
        <Switch>
          {
            routes.map(({ path, ...dynamics }, key) => (
              <Route key={key}
                exact
                path={path}
                component={dynamic({
                  app,
                  ...dynamics,
                })}
              />
            ))
          }
        </Switch>
      </App>
    </ConnectedRouter>
  );
}

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}

export default Routers;
