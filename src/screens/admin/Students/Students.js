import React, { Component } from 'react'
import { NONE, LOADING, ERROR, SUCCESS } from '../../../utils/requestStates';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Loader, Header, Button } from 'semantic-ui-react';
import MyTable from '../../common/MyTable/MyTable'
import { ModalPreview, ModalNew, ModalDelete } from './Modals/index';
import { CLOSED, NEW, PREVIEW, EDIT, DELETE } from '../../../utils/modalStates';
import adminStudentsActions from './students.actions'

const initialState = {
    modalState: CLOSED,
    selectedStudent: null,
}

class Students extends Component {
    state = initialState;

    componentDidUpdate(prevProps) {
        if (prevProps.students !== this.props.students) {
            console.log('props students changed!')
        }
    }

    handleNew = e => {e.preventDefault(); this.setState({...this.state, modalState: NEW})};
    
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
    
    handlePreview   = data  => this.setState({ ...this.state, modalState: PREVIEW,  selectedStudent: data })
    handleDelete    = data  => this.setState({ ...this.state, modalState: DELETE,   selectedStudent: data })
    
    renderTable() {
        const { students, getStudentsStatus } = this.props;

        switch (getStudentsStatus) {
            case (NONE || LOADING): return <Loader/>
            case (ERROR): return <div>There was an error with the data</div>
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

            default: return <h1>default</h1>
        }
    }

    handleModalClose = () => { this.setState(initialState); }
    handleEdit = e => { e.preventDefault(); this.setState({...this.state, modalState: EDIT})}

    handleNewStudentSubmit = data => {
        const { modalState } = this.state;
        if (modalState === NEW) this.props.createStudent(data);
        else this.props.updateStudent(data);
    }

    handleVerifyStudent = id => {
        console.log('verifying unregistered student');
        this.props.verifyStudent(id);
    }

    handleDeleteStudentSubmit = id => {
        console.log('deleting student');
        this.props.deleteStudent(id);
    }

    renderModals() {
        const { modalState, selectedStudent } = this.state;
        const { createStatus, updateStatus, deleteStatus } = this.props;
        console.log('renderrrr')
        console.log(selectedStudent)
        return ([
            <ModalPreview
                key='students-modal-preview'
                isOpen={modalState === PREVIEW} 
                onClose={this.handleModalClose} 
                onEdit={this.handleEdit}
                data={selectedStudent}/>,
            // ModalNew with not null data is ModalEdit
            <ModalNew
                key='students-modal-new'
                loading={createStatus === LOADING || updateStatus === LOADING}
                isOpen={modalState === NEW || modalState === EDIT}    
                onClose={this.handleModalClose} 
                onSubmit={this.handleNewStudentSubmit}
                onPreview={() => this.handlePreview(selectedStudent)}
                onVerify={() => this.handleVerifyStudent(selectedStudent.id)}
                data={selectedStudent}/>,
            <ModalDelete
                key='students-modal-delete'
                loading={deleteStatus === LOADING}
                isOpen={modalState === DELETE}  
                onClose={this.handleModalClose} 
                onConfirm={() => this.handleDeleteStudentSubmit(selectedStudent.id)}
                data={selectedStudent}/>,         
        ])
    }
}

const mapStateToProps = state => ({
    students: state.admin.main.students,
    getStudentsStatus: state.admin.main.getStudentsStatus,

    createStudentStatus: state.admin.students.createStudentStatus,
    updateStudentStatus: state.admin.students.updateStudentStatus,
    deleteStudentStatus: state.admin.students.deleteStudentStatus,
    verifyStudentStatus: state.admin.students.verifyStudentStatus,
})

const mapDispatchToProps = dispatch => ({    
    createStudent: (data) => dispatch(adminStudentsActions.createStudent(data)),
    updateStudent: (data) => dispatch(adminStudentsActions.updateStudent(data)),
    deleteStudent: (id) => dispatch(adminStudentsActions.deleteStudent(id)),
    verifyStudent: (id) => dispatch(adminStudentsActions.verifyStudent(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Students))
