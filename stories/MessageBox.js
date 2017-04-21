import React from 'react';
import MessageBox from '../src/components/MessageBox.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('MessageBox', module)
    .add('default', () => (
        <MuiThemeProvider>
            <MessageBox onSend={action('Send')} />
        </MuiThemeProvider>
    ));