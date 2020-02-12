import React, { Component } from 'react'
import _ from 'lodash'
import { Table, Icon, Button } from 'semantic-ui-react'
import './MyTable.scss'
import { getColor } from '../../../utils/iconColorGetter'
import { I18n } from 'react-redux-i18n'

class MyTable extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            sortingColumn: null,
            direction: null,
        }
    }

    handleSort = (clickedColumn) => () => {
        const { column, data, direction } = this.state
    
        if (column !== clickedColumn) {
          this.setState({
            column: clickedColumn,
            data: _.sortBy(data, [clickedColumn]),
            direction: 'ascending',
          })
    
          return
        }
    
        this.setState({
          data: data.reverse(),
          direction: direction === 'ascending' ? 'descending' : 'ascending',
        })
    }

    render() {
        const { sortingColumn, direction } = this.state;
        const { data, columns, actions } = this.props;
        const keys = Object.keys(data[0]).filter(key => columns.includes(key));
        return (
            <div className='table-container'>
                <Table fixed padded striped celled>
                    <Table.Header>
                    <Table.Row>
                        {keys.map((key) => (
                            <Table.HeaderCell
                                key={'header-' + key}
                                sorted={sortingColumn === key ? direction : null}
                                onClick={this.handleSort(key)}
                            >{I18n.t('components.table.title.' + key)}</Table.HeaderCell>
                        )).concat(<Table.HeaderCell key={'header-actions'} colSpan='3'>Acciones</Table.HeaderCell>)}
                    </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {data.map((item, id) => (
                            <Table.Row key={id}>
                                {keys.map((key) => (
                                    <Table.Cell key={id + '-' + key + '-cell'}>{item[key]}</Table.Cell> 
                                )).concat(
                                    <Table.Cell key={id + '-actions'} colSpan='3'>
                                        {actions.map(({type, action}) => (
                                            <Button 
                                                key={id + '-' + type + '-button'}
                                                color={getColor(type)}
                                                onClick={() => action(item)}>
                                                
                                                <Icon name={type}/>
                                                {I18n.t('components.table.cells.' + type)}
                                            </Button>
                                        ))}
                                    </Table.Cell>
                                )}
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        )
    }
}

export default MyTable
