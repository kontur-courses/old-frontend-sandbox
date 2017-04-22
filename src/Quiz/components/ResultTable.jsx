import React from 'react';
import { Table, TableHeader, TableHeaderColumn, TableBody, TableRow, TableRowColumn } from 'material-ui/Table'

export default class ResultTable extends React.Component {
    render() {
        return (
            <Table>
                <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                    <TableRow>
                        <TableHeaderColumn>
                            Место
                        </TableHeaderColumn>
                        <TableHeaderColumn>
                            Имя
                        </TableHeaderColumn>
                        <TableHeaderColumn>
                            Очки
                        </TableHeaderColumn>
                    </TableRow>
                </TableHeader>
                <TableBody displayRowCheckbox={false}>
                    {this.props.results.map((item, index) => this.renderRow(item, index))}
                </TableBody>
            </Table>
        );
    }

    renderRow(result, index) {
        return (
            <TableRow key={index}>
                <TableRowColumn>
                    {index + 1}
                </TableRowColumn>
                <TableRowColumn>
                    {result.name}
                </TableRowColumn>
                <TableRowColumn>
                    {result.score}
                </TableRowColumn>
            </TableRow>
        );
    }
}