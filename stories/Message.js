import React from 'react';
import Message from '../src/components/Message.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { storiesOf } from '@kadira/storybook';

storiesOf('Message', module)
    .add('default', () => (
        <MuiThemeProvider>
            <Message user='Username' text='Текст сообщения' />
        </MuiThemeProvider>
    ))
    .add('with smile', () => (
        <MuiThemeProvider>
            <Message user='Username' text='Текст сообщения :)' />
        </MuiThemeProvider>
    ));