export default class FakeApi {
    async getQuestions() {
        await delay(1000);
        return [
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
        ];
    }

    async getResults() {
        await delay(1300);
        return [
            {name: 'Dohn Joe', score: 120},
            {name: 'Jann', score: 118},
            {name: 'Peter', score: 105},
            {name: 'Helena', score: 100},
            {name: 'Natalie', score: 70},
        ];
    }
}

function delay(timeout) {
    return new Promise(f => setTimeout(f, timeout));
}