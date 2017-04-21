import React from 'react';
import MessageList from '../src/components/MessageList.jsx';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { storiesOf, action } from '@kadira/storybook';

storiesOf('MessageList', module)
    .add('default', () => (
    <MuiThemeProvider>
        <MessageList
            messages={[
                {user: 'First', text: 'My First text'},
                {user: 'Second', text:'Я тотчас подошел к княжне, приглашая её вальсировать.'},
                {user: 'Third', text: 'Он отворотился и пошел от нее к окну.'},
            ]}
            onSend={action('Send')}
        />
    </MuiThemeProvider>
    ));