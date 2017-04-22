import React from 'react';
import QuizPage from '../src/Quiz/components/QuizPage.jsx';
import { MuiThemeProvider }  from 'material-ui';
import { storiesOf, action } from '@kadira/storybook';

const questions = [
    {
        text: 'Какой вид тигров самый крупный?',
        variants: [
            {value: 'amur', label: 'Амурский тигр'},
            {value: 'sumatrae', label: 'Суматранский тигр'},
            {value: 'indochn', label: 'Индокитайский тигр'}
        ]
    },
    {
        text: 'Какая из этих птиц умеет летать?',
        variants: [
            {value: 'kiwi', label: 'Киви'},
            {value: 'baklan', label: 'Баклан'},
            {value: 'raphinae', label: 'Дронт'},
            {value: 'pinguin', label: 'Императорский пингвин'}
        ]
    },
];

storiesOf('QuizPage', module)
    .add('without question', () => (
        <MuiThemeProvider>
            <QuizPage
                onChange={action('onChange')}
                onSubmit={action('onSubmit')}
                onLoadQuestions={action('onLoadQuestions')}
            />
        </MuiThemeProvider>
    ))
    .add('with questions', () => (
        <MuiThemeProvider>
            <QuizPage
                questions={questions}
                onChange={action('onChange')}
                onSubmit={action('onSubmit')}
                onLoadQuestions={action('onLoadQuestions')}
            />
        </MuiThemeProvider>
    ));