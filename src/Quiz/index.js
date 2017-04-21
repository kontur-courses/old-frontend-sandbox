import React from 'react';
import ReactDom from 'react-dom';
import QuizPage from './components/QuizPage.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDom.render(
    <MuiThemeProvider>
        <QuizPage />
    </MuiThemeProvider>,
    document.getElementById('app'));