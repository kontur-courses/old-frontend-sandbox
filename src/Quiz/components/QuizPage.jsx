import React from 'react';
import QuestionList from './QuestionList.jsx';
import { AppBar, RaisedButton, CircularProgress, TextField } from 'material-ui';
import { Link } from 'react-router';

export default class QuizPage extends React.Component {
    constructor() {
        super();
        this.state = {
            showResultCounter: false,
            amountRightAnswers: 0,
            name: ""
        };
    }

    componentWillMount() {
        if (!this.props.questions && this.props.onLoadQuestions) {
            this.props.onLoadQuestions();
        }
    }

    render() {
        const { questions } = this.props;
        const { showResultCounter, amountRightAnswers } = this.state;

        return (
            <div style={{margin: '0 auto', maxWidth: '600px'}}>
                <AppBar
                    title='Викторина'
                    showMenuIconButton={false}
                />
                {this.props.loading &&
                <CircularProgress
                    style={{margin: '50px auto', display: 'block'}}
                    size={80}
                />
                }
                {questions && questions.length !== 0 &&
                <div style={{marginTop: '20px'}}>
                    <QuestionList
                        questions={questions}
                        onChange={this.props.onChange}
                    />
                </div>
                }
                <div>
                    <TextField
                        hintText='Меня зовут'
                        value={this.state.name}
                        onChange={(event, value) => this.setState({name: value})}
                    />
                </div>
                {questions && questions.length !== 0 &&
                <RaisedButton
                    style={{marginTop: '10px'}}
                    label='Проверить'
                    primary
                    disabled={showResultCounter}
                    onClick={() => this.checkAnswers()}
                />
                }
                
                <Link to='/result'>
                    <RaisedButton
                        style={{marginTop: '10px'}}
                        label='Посмотреть результаты'
                    />
                </Link>
                {showResultCounter &&
                    <p>
                        Правильных ответов: {amountRightAnswers}/{questions.length}
                    </p>
                }
            </div>
        );
    }

    checkAnswers() {
        if (!this.state.name) return;
        
        const { questions, answers } = this.props;
        const rightAnswers = answers && answers.filter((item, index) => {
            const variants = questions[index].variants;
            const option = variants.find(option => option.value === item);
            return option ? option.isRight : false;
        }).length;

        this.setState({
            showResultCounter: true,
            amountRightAnswers: rightAnswers || 0
        });
        this.props.onSubmit({ name: this.state.name, score: rightAnswers || 0 });
    }
}