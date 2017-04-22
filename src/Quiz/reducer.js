const initialState = {
    questions: [
        {
            text: 'Какой вид тигров самый крупный?',
            variants: [
                {value: 'amur', label: 'Амурский тигр', isRight: true},
                {value: 'sumatrae', label: 'Суматранский тигр', isRight: false},
                {value: 'indochn', label: 'Индокитайский тигр', isRight: false}
            ]
        },
        {
            text: 'Какая из этих птиц умеет летать?',
            variants: [
                {value: 'kiwi', label: 'Киви', isRight: false},
                {value: 'baklan', label: 'Баклан', isRight: true},
                {value: 'raphinae', label: 'Дронт', isRight: false},
                {value: 'pinguin', label: 'Императорский пингвин', isRight: false}
            ]
        },
    ],
    answers: []
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

    return state;
}