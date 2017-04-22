import React from 'react';
import ResultTable from '../src/Quiz/components/ResultTable.jsx';
import { MuiThemeProvider }  from 'material-ui';
import { storiesOf } from '@kadira/storybook';

storiesOf('ResultTable', module)
    .add('default', () => (
        <MuiThemeProvider>
            <ResultTable
                results={
                    [
                        {name: 'Dohn Joe', score: 120},
                        {name: 'Jann', score: 118},
                        {name: 'Peter', score: 105},
                        {name: 'Helena', score: 100},
                        {name: 'Natalie', score: 70},
                    ]
                }
            />
        </MuiThemeProvider>
    ));
