import React from 'react';
import Question from '../src/components/Question.jsx';
import {MuiThemeProvider} from 'material-ui';
import { storiesOf, action } from '@kadira/storybook';
import tigerImage from '../src/images/tiger.jpg';

storiesOf('Question', module)
    .add('default', () => (
       <MuiThemeProvider>
           <Question
               index={5}
               text='Какой вид тигров самый крупный?'
               variants={[
                   {value: 'amur', label: 'Амурский тигр'},
                   {value: 'sumatrae', label: 'Суматранский тигр'},
                   {value: 'indochn', label: 'Индокитайский тигр'},
               ]}
               onChange={action('onChange')}
           />
       </MuiThemeProvider>
   ))
   .add('with image', () => (
       <MuiThemeProvider>
           <Question
               index={5}
               image={tigerImage}
               text='Какой вид тигров самый крупный?'
               variants={[
                   {value: 'amur', label: 'Амурский тигр'},
                   {value: 'sumatrae', label: 'Суматранский тигр'},
                   {value: 'indochn', label: 'Индокитайский тигр'},
               ]}
               onChange={action('onChange')}
           />
       </MuiThemeProvider>
   ));