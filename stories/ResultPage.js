import React from 'react';
import ResultPage from '../src/Quiz/components/ResultPage.jsx';
import { MuiThemeProvider }  from 'material-ui';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('ResultPage', module)
    .add('default', () => (
        <MuiThemeProvider>
            <ResultPage
                results={
                    [
                        {name: 'Dohn Joe', score: 120},
                        {name: 'Jann', score: 118},
                        {name: 'Peter', score: 105},
                        {name: 'Helena', score: 100},
                        {name: 'Natalie', score: 70},
                    ]
                }
                onLoadResults={action('onLoadResults')}
            />
        </MuiThemeProvider>
    ))
    .add('loading', () => (
        <MuiThemeProvider>
            <ResultPage
                loading={true}
                onLoadResults={action('onLoadResults')}
            />
        </MuiThemeProvider>
    ));

