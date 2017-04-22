import React from 'react';
import ReactDom from 'react-dom';
import QuizPage from './containers/QuizPage.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

const middleware = applyMiddleware(promise(), thunk);
const store = createStore(reducer, middleware);

ReactDom.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <QuizPage />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app'));