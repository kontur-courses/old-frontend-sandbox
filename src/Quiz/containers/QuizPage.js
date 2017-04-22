import QuizPage from '../components/QuizPage.jsx';
import { connect } from 'react-redux';
import { getQuestions } from '../actions';

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
        onSubmit: (...args) => console.log(args),
        onLoadQuestions: () => dispatch(getQuestions())
    }
}

export default connect(props, actions)(QuizPage);