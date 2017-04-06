import React from 'react';
import { Provider } from 'react-redux';
import { Route, Router } from 'react-router';

import App from '/imports/app/main/components/App';
// import ContextProvider from '/imports/support/dependencyInjections/ContextProvider';

// import reviewRoutes from '/imports/app/notebooks/routes';

import { store, history } from './store';

export default (
  <Provider store={store}>
    {/* <ContextProvider> */}
    <Router history={history}>
      <Route component={App} path="/">
        {/* <Route > */}
        {/* {reviewRoutes} */}
        {/* </Route> */}
      </Route>
    </Router>
    {/* </ContextProvider> */}
  </Provider>
);
