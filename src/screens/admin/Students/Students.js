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

    handleNew = e => {e.preventDefault(); this.setState({...this.state, modalState: NEW})};
    
    render() {
        console.log(this.state)
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

    handleModalClose = e => { e.preventDefault(); this.setState(initialState); }
    handleEdit = e => { e.preventDefault(); this.setState({...this.state, modalState: EDIT})}

    handleNewStudentSubmit = data => {
        console.log('haro')
        console.log(data)
        const { modalState } = this.state;
        if (modalState === NEW) {
            console.log('creating new student')
            this.props.createStudent(data);
        } else {
            console.log('updating student')
            this.props.updateStudent(data);
        }
    }

    handleDeleteStudentSubmit = id => {
        console.log('deleting student')
        this.props.deleteStudent(id)
    }

    renderModals() {
        const { modalState, selectedStudent } = this.state;
        return ([
            <ModalPreview   
                isOpen={modalState === PREVIEW} 
                onClose={this.handleModalClose} 
                onEdit={this.handleEdit}
                data={selectedStudent}/>,
            // ModalNew with not null data is ModalEdit
            <ModalNew    
                isOpen={modalState === NEW || modalState === EDIT}    
                onClose={this.handleModalClose} 
                onSubmit={this.handleNewStudentSubmit}
                data={selectedStudent}/>,
            <ModalDelete    
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
})

const mapDispatchToProps = dispatch => ({    
    createStudent: (data) => dispatch(adminStudentsActions.create(data)),
    updateStudent: (data) => dispatch(adminStudentsActions.update(data)),
    deleteStudent: (id) => dispatch(adminStudentsActions.delete(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Students))
