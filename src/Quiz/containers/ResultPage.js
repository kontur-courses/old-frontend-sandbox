import ResultPage from '../components/ResultPage.jsx';
import { connect } from 'react-redux';
import { getResults } from '../actions';

function props(state) {
    return {
        results: state.results,
        loading: state.loading,
    }
}

function actions (dispatch) {
    return {
        onLoadResults: () => dispatch(getResults())
    }
}

export default connect(props, actions)(ResultPage)

