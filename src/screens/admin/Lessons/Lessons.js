import React, { Component } from 'react'
import { NONE, LOADING, ERROR, SUCCESS } from '../../../utils/requestStates';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import MyTable from '../../common/MyTable/MyTable';
import { CLOSED, NEW, PREVIEW, EDIT, DELETE } from '../../../utils/modalStates';
import { Loader, Header, Button } from 'semantic-ui-react';
import { ModalPreview, ModalNew, ModalDelete } from './Modals';
import adminLessonsActions from './lessons.actions';

const initialState = {
    modalState: CLOSED,
    selectedStudent: null,
}

class Lessons extends Component {
    state = initialState;

    componentDidUpdate(prevProps) {
        if (prevProps.students !== this.props.students) {
            console.log('props students changed!')
        }
    }

    handleNew = e => {e.preventDefault(); this.setState({...this.state, modalState: NEW})};
    
    render() {
        return (
            <div className='card'>
                <div className='head'>
                    {/* insert i18n */}
                    <Header>Clases</Header>
                    <Button onClick={this.handleNew}>Agregar nueva clase</Button>
                </div>
                <div className='body'>
                    {this.renderTable()}
                </div>
                <div className='footer'>

                </div>
                {this.renderModals()}
            </div>
        )
    }
    
    handlePreview   = data  => {
        this.setState({ ...this.state, modalState: PREVIEW,  selectedStudent: data })
    }
    handleDelete    = data  => this.setState({ ...this.state, modalState: DELETE,   selectedStudent: data })

    renderTable() {
        const { lessons, getStudentsStatus, getTeachersStatus, getLessonsStatus } = this.props;
        switch (getLessonsStatus) {
            case (NONE || LOADING): return <Loader/>
            case (ERROR): return <div>There was an error with the data</div>
            case (SUCCESS):
                
                return (
                    <MyTable
                        data={lessons}
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
        this.props.verifyStudent(id);
    }

    handleDeleteStudentSubmit = id => {
        this.props.deleteStudent(id);
    }

    renderModals() {
        const { modalState, selectedLesson } = this.state;
        const { createStatus, updateStatus, deleteStatus } = this.props;
        const { getStudentsStatus, getTeachersStatus, students, teachers } = this.props;
        let fetchingStudentsAndTeachers = false;
        if (getStudentsStatus === SUCCESS && getTeachersStatus === SUCCESS) 
            fetchingStudentsAndTeachers = true;
        return ([
            <ModalPreview
                key='students-modal-preview'
                isOpen={modalState === PREVIEW} 
                onClose={this.handleModalClose} 
                onEdit={this.handleEdit}
                data={selectedLesson}/>,
            // ModalNew with not null data is ModalEdit
            <ModalNew
                key='students-modal-new'
                loading={createStatus === LOADING || updateStatus === LOADING || !fetchingStudentsAndTeachers}
                isOpen={modalState === NEW || modalState === EDIT}    
                onClose={this.handleModalClose} 
                onSubmit={this.handleNewStudentSubmit}
                onPreview={() => this.handlePreview(selectedLesson)}
                onVerify={() => this.handleVerifyStudent(selectedLesson.id)}
                data={selectedLesson}
                availableData={{teachers, students}}
            />,
            <ModalDelete
                key='students-modal-delete'
                loading={deleteStatus === LOADING}
                isOpen={modalState === DELETE}  
                onClose={this.handleModalClose} 
                onConfirm={() => this.handleDeleteStudentSubmit(selectedLesson.id)}
                data={selectedLesson}/>,         
        ])
    }
}

const mapStateToProps = state => ({
    students: state.admin.main.students,
    teachers: state.admin.main.teachers,
    lessons: state.admin.main.lessons,
    getStudentsStatus: state.admin.main.getStudentsStatus,
    getTeachersStatus: state.admin.main.getTeachersStatus,
    getLessonsStatus: state.admin.main.getLessonsStatus,

    createLessonStatus: state.admin.lessons.createLessonStatus,
    updateLessonStatus: state.admin.lessons.updateLessonStatus,
    deleteLessonStatus: state.admin.lessons.deleteLessonStatus,
    verifyLessonStatus: state.admin.lessons.verifyLessonStatus,
})

const mapDispatchToProps = dispatch => ({
    createLesson: (data) => dispatch(adminLessonsActions.createLesson(data)),
    updateLesson: (data) => dispatch(adminLessonsActions.updateLesson(data)),
    deleteLesson: (id) => dispatch(adminLessonsActions.deleteLesson(id)),
    verifyLesson: (id) => dispatch(adminLessonsActions.verifyLesson(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Lessons))
