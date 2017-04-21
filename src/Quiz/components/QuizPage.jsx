import React from 'react';
import QuestionList from './QuestionList.jsx';
import { AppBar, RaisedButton } from 'material-ui'

export default class QuizPage extends React.Component {
    render() {
        return (
            <div style={{margin: '0 auto', maxWidth: '600px'}}>
                <AppBar
                    title='Викторина'
                    showMenuIconButton={false}
                />
                {this.props.questions && this.props.questions.length !== 0 &&
                <div style={{marginTop: '20px'}}>
                    <QuestionList
                        questions={this.props.questions}
                        onChange={this.props.onChange}
                    />
                </div>
                }
                {this.props.questions && this.props.questions.length !== 0 &&
                <RaisedButton
                    style={{marginTop: '10px'}}
                    label='Проверить'
                    primary
                    onClick={this.props.onSubmit}
                />
                }
            </div>
        );
    }
}