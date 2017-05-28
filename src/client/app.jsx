import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';
import Store from './store';
import Routes from './routes';

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={Store}>
        <Routes/>
    </Provider>,
    document.getElementById('main'),
);
