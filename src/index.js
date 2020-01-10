import React from 'react';
import ReactDOM from 'react-dom';

import routes from './screens/routes/routes';

import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
    <Provider store={store.store}>
        <ConnectedRouter history={store.history}>
            {Routes}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);