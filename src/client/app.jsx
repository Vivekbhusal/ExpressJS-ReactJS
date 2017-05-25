import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainLayout from './containers/MainLayout';

injectTapEventPlugin();

const App = () => (
    <MuiThemeProvider>
        <MainLayout/>
    </MuiThemeProvider>
);

ReactDOM.render(
    <App />,
    document.getElementById("main")
);