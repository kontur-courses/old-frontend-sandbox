import FakeApi from './api/fakeApi';
const api = new FakeApi();

export function getQuestions () {
    return async function (dispatch) {
        dispatch({type: 'loadingStart'});
        const result = await api.getQuestions();
        dispatch({type: 'loadedQuestions', questions: result});
    }
}

export function getResults () {
    return async function (dispatch) {
        dispatch({type: 'loadingStart'});
        const result = await api.getResults();
        dispatch({type: 'loadedResults', results: result});
    }
}

export function addAnswer (result) {
    return async function () {
        await api.addResult(result);
    }
}