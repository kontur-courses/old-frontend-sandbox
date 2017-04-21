import React from 'react';
import Question from './Question.jsx';

export default class QuestionList extends React.Component {
    render() {
        return (
            <div>
                {this.props.questions.map((item, index) =>
                    <Question
                        key={index}
                        index={index + 1}
                        image={item.image}
                        text={item.text}
                        variants={item.variants}
                        onChange={value => this.props.onChange(value, index)}
                    />
                )}
            </div>
        );
    }
}