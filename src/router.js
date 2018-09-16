import React from 'react';
import { Route, Switch, routerRedux, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic'
import App from './routes/app';
const { ConnectedRouter } = routerRedux;

const routes = [
  {
    path: '/home',
    models: () => [import('./models/home')],
    component: () => import('./routes/home'),
  },
  {
    path: '/_test',
    models: () => [import('./models/_test')],
    component: () => import('./routes/_test'),
  },
]

function Routers(e) {
  const { history, app } = e;
  const error = dynamic({
    app,
    component: () => import('./routes/error'),
  })

  return (
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" render={() => (<Redirect to="/home" />)} />
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
          <Route component={error} />
        </Switch>
      </App>
    </ConnectedRouter>
  );
}

export default Routers;
