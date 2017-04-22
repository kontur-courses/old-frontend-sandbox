const initialState = {
    questions: null,
    answers: [],
    loading: false
};

export default function (state = initialState, action) {
    if (action.type === 'answerChange') {
        const newAnswers = [].concat(state.answers);
        newAnswers[action.index] = action.value;
        return {
            ...state,
            answers: newAnswers
        }
    }

    if (action.type === 'loadedQuestions') {
        return {
            ...state,
            loading: false,
            questions: action.questions
        }
    }

    if (action.type === 'loadingStart') {
        return {
            ...state,
            loading: true
        }
    }

    if (action.type === 'loadedResults') {
        return {
            ...state,
            loading: false,
            results: action.results
        }
    }

    return state;
}