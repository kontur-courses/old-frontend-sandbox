import QuizPage from '../components/QuizPage.jsx';
import { connect } from 'react-redux';
function props(state) {
    return {
        questions: state.questions,
        answers: state.answers
    }
}

function actions (dispatch) {
    return {
        onChange: (value, index) => dispatch({type: 'answerChange', index: index, value: value}),
        onSubmit: (...args) => console.log(args),
    }
}

export default connect(props, actions)(QuizPage);