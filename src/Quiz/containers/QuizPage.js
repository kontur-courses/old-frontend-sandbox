import QuizPage from '../components/QuizPage.jsx';
import { connect } from 'react-redux';
import { getQuestions, addAnswer } from '../actions';

function props(state) {
    return {
        questions: state.questions,
        answers: state.answers,
        loading: state.loading
    }
}

function actions (dispatch) {
    return {
        onChange: (value, index) => dispatch({type: 'answerChange', index: index, value: value}),
        onSubmit: (result) => dispatch(addAnswer(result)),
        onLoadQuestions: () => dispatch(getQuestions())
    }
}

export default connect(props, actions)(QuizPage);