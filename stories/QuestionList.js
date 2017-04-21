import React from 'react';
import QuestionList from '../src/components/QuestionList.jsx';
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

storiesOf('QuestionList', module)
    .add('default', () => (
        <MuiThemeProvider>
            <QuestionList
                questions={questions}
                onChange={action('onChange')}
            />
        </MuiThemeProvider>
    ));