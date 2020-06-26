import React, { Component } from 'react'
import { NONE, LOADING, ERROR, SUCCESS } from '../../../utils/requestStates';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import adminTeachersActions from './teachers.actions';
import { Header, Loader, Button } from 'semantic-ui-react';
import MyTable from '../../common/MyTable/MyTable';
import { I18n } from 'react-redux-i18n';
import { CLOSED, PREVIEW, EDIT, NEW, DELETE } from '../../../utils/modalStates';
import { ModalPreview, ModalEdit, ModalDelete } from './Modals/index';

/* selectedTeacher: {
    id: 200
    email: "Ismael978@teacher.com"
    password: "$2a$10$7fzwHZJZH7Mohrqq09sX/ewk35NX8SyQem6X9mkCJRwVH3HZ2OBgi"
    name: "Ismael"
    surname: "Fernandez"
    dni: 38015030
    sex: "Femenino"
    avatarUrl: null
    phoneNumber: "12021844"
    cuil: "20-38015030-7"
    role: "TEACHER"
} */
const initialState = {
    modalState: CLOSED,
    selectedTeacher: null,
}

class Teachers extends Component {
    state = initialState;

    componentDidUpdate(prevProps) {
        if (prevProps.teachers !== this.props.teachers) {
            console.log('props students changed!')
        }
    }

    handleNew = e => { e.preventDefault(); this.setState({ ...this.state, modalState: NEW }) };

    render() {
        console.log('render teachers', this.state, this.props);
        return (
            <div className='card'>
                <div className='head'>
                    <Header>Profesores</Header>
                    {/* TODO: i18n */}
                    <Button onClick={this.handleNew}>Agregar nuevo profesor</Button>
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

    handlePreview = data => this.setState({ modalState: PREVIEW, selectedTeacher: data })
    handleDelete = data => this.setState({ modalState: DELETE, selectedTeacher: data })

    renderTable() {
        const { teachers, getTeachersStatus } = this.props;

        switch (getTeachersStatus) {
            case (NONE || LOADING): return <Loader />
            case ERROR: return <p>{I18n.t('admin.teachers.items')}</p>
            case SUCCESS:
                return (
                    <MyTable
                        data={teachers}
                        columns={['name', 'surname', 'dni']}
                        actions={[
                            { type: 'file alternate', action: this.handlePreview },
                            { type: 'user delete', action: this.handleDelete }
                        ]}
                    />
                )

            default: return <h1>default</h1>
        }
    }

    handleModalClose = e => { e.preventDefault(); this.setState(initialState); }
    handleEdit = e => { e.preventDefault(); this.setState({ ...this.state, modalState: EDIT }) }

    handleNewTeacherSubmit = data => {
        const { modalState } = this.state;
        // console.log('handlign submit teacher ', data);
        if (modalState === NEW) {
            console.log('creating new teacher')
            this.props.createTeacher(data);
        } else {
            console.log('updating teacher')
            this.props.updateTeacher(data);
        }
    }

    handleDeleteTeacherSubmit = id => {
        console.log('deleting teacher')
        this.props.deleteTeacher(id)
    }

    renderModals() {
        const { modalState, selectedTeacher } = this.state;
        return ([
            <ModalPreview
                key='teachers-modal-preview'
                data={selectedTeacher}
                isOpen={modalState === PREVIEW}
                onClose={this.handleModalClose}
                onEdit={() => this.setState({ ...this.state, modalState: EDIT })}
            />,
            // ModelEdit with not null data is new
            <ModalEdit
                key='teachers-modal-edit'
                data={selectedTeacher}
                isOpen={modalState === NEW || modalState === EDIT}
                onClose={this.handleModalClose}
                onSubmit={this.handleNewTeacherSubmit}
                onPreview={() => this.handlePreview(selectedTeacher)}
            />,
            <ModalDelete
                key='teachers-modal-delete'
                data={selectedTeacher}
                isOpen={modalState === DELETE}
                onClose={this.handleModalClose}
                onConfirm={() => this.props.deleteTeacher(selectedTeacher.id)} 
            />,
        ])
    }
}

const mapStateToProps = state => ({
    teachers: state.admin.main.teachers,
    getTeachersStatus: state.admin.main.getTeachersStatus,

    createTeacherStatus: state.admin.teachers.createTeacherStatus,
    updateTeacherStatus: state.admin.teachers.updateTeacherStatus,
    deleteTeacherStatus: state.admin.teachers.deleteTeacherStatus,
})

const mapDispatchToProps = dispatch => ({
    createTeacher: (data) => dispatch(adminTeachersActions.createTeacher(data)),
    updateTeacher: (data) => dispatch(adminTeachersActions.updateTeacher(data)),
    deleteTeacher: (id) => dispatch(adminTeachersActions.deleteTeacher(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Teachers))
