import React from 'react';
import ReactDom from 'react-dom';
import QuizPage from './containers/QuizPage.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

const store = createStore(reducer);

ReactDom.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <QuizPage />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app'));