import React, { Component } from 'react'
import { NONE, LOADING, ERROR, SUCCESS } from '../../../utils/requestStates';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Loader, Header, Button } from 'semantic-ui-react';
import MyTable from '../../common/MyTable/MyTable'
import { ModalPreview, ModalNew, ModalDelete } from './Modals/index';

const modalStates = {CLOSED: 'CLOSED', NEW: 'NEW', PREVIEW: 'PREVIEW', EDIT: 'EDIT', DELETE: 'DELETE'};
const initialState = {
    modalState: modalStates.CLOSED,
    data: [],
}

class Students extends Component {
    state = initialState;
    
    render() {
        return (
            <div>
                <div className='card'>
                    <div className='head'>
                        <Header>Alumnos</Header>
                        <Button onClick={this.handleNew}>Agregar nuevo alumno</Button>
                    </div>
                    <div className='body table'>
                        {this.renderTable()}
                    </div>
                    <div className='footer'>

                    </div>
                </div>
                {this.renderModals()}
            </div>
        )
    }
    
    // change state
    handleNew       = ()        => this.setState({ ...this.state, modalState: modalStates.NEW,      data: []})
    handlePreview   = itemData  => this.setState({ ...this.state, modalState: modalStates.PREVIEW,  data: itemData })
    handleEdit      = ()        => this.setState({ ...this.state, modalState: modalStates.EDIT })
    handleDelete    = itemData  => this.setState({ ...this.state, modalState: modalStates.DELETE,   data: itemData })
    
    // upload 
    handleNewStudentSubmit = e => {
        e.preventDefault();
        console.log('handle new student submit');
    }
    handleEditSubmit = e => { 
        e.preventDefault();
        console.log('handle edit submit');
    }
    handleDeleteConfirm = e => {
        e.preventDefault();
        console.log('handle delete confirm');
    }

    handleModalClose = e => { e.preventDefault(); this.setState(initialState); }

    renderTable() {
        const { students, getStudentsStatus } = this.props;

        switch (getStudentsStatus) {
            case (NONE || LOADING):
                return <Loader/>
            case (ERROR):
                return <div>There was an error with the data</div>
            case (SUCCESS):
                return (
                    <MyTable
                        data={students}
                        columns={['name', 'surname', 'dni']}
                        actions={[
                            {type: 'file alternate', action: this.handlePreview}, 
                            {type: 'user delete', action: this.handleDelete}
                        ]}
                    />
                )
            default:
                return <h1>default</h1>
        }
    }

    // modal

    renderModals() {
        const { modalState, data } = this.state;

        return ([
            <ModalPreview   data={data}         isOpen={modalState === modalStates.PREVIEW} onClose={this.handleModalClose} onEdit={this.handleEdit}/>,
            <ModalNew                           isOpen={modalState === modalStates.NEW}     onClose={this.handleModalClose} onSubmit={this.handleNewStudentSubmit}/>,
            // ModalNew with data renders an edition mode form.
            <ModalNew       data={data}         isOpen={modalState === modalStates.EDIT}    onClose={this.handleModalClose} onSubmit={this.handleEditSubmit}/>,
            <ModalDelete    data={data}         isOpen={modalState === modalStates.DELETE}  onClose={this.handleModalClose} onConfirm={this.handleDeleteConfirm}/>,
        ])
    }
}

const mapStateToProps = state => ({
    students: state.admin.responseStudents,
    getStudentsStatus: state.admin.getStudentsStatus,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Students))
