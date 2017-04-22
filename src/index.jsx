import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { Route, Router, hashHistory } from 'react-router';

import App from './components/App.jsx';
import QuizPage from './Quiz/containers/QuizPage.js';
import ResultPage from './Quiz/containers/ResultPage.js';
import reducer from './Quiz/reducer';

const middleware = applyMiddleware(promise(), thunk);
const store = createStore(reducer, middleware);

ReactDom.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <Router history={hashHistory}>
                <Route path='/' component={App}/>
                <Route path='/result' component={ResultPage}/>
                <Route path='/quiz' component={QuizPage}/>
            </Router>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app'));