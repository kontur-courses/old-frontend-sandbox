import React from 'react';
import { AppBar, CircularProgress } from 'material-ui';
import ResultTable from './ResultTable.jsx'

export default class ResultPage extends React.Component {

    componentWillMount() {
        if (!this.props.results) {
            this.props.onLoadResults();
        }
    }

    render() {
        const { loading, results } = this.props;
        return (
            <div style={{margin: '0 auto', maxWidth: '600px'}}>
                <AppBar
                    title='Результаты'
                    showMenuIconButton={false}
                />
                {loading &&
                    <CircularProgress
                        style={{margin: '50px auto', display: 'block'}}
                        size={80}/>
                }
                {results &&
                    <ResultTable results={results} />
                }
            </div>
        );
    }
}