import React, { Component } from 'react'
import { NONE, LOADING, ERROR, SUCCESS } from '../../../utils/requestStates';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import adminTeachersActions from './teachers.actions';
import { Header, Loader, Modal } from 'semantic-ui-react';
import MyTable from '../../common/MyTable/MyTable';
import { I18n } from 'react-redux-i18n';
import { CLOSED, PREVIEW, EDIT, NEW, DELETE } from '../../../utils/modalStates';
import { ModalPreview, ModalNew, ModalDelete } from './Modals';

const initialState = { 
    modalState: CLOSED,
    selectedTeacher: null,
}

class Teachers extends Component {
    state = initialState;

    render() {
        return (
            <div className='card'>
                    <div className='head'>
                        <Header>Profesores</Header>
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

    handlePreview = data => this.setState({modalState: PREVIEW, data: data})
    handleDelete = data => this.setState({modalState: DELETE, data: data})

    renderTable() {
        const { teachers, getTeachersStatus } = this.props;

        switch (getTeachersStatus) {
            case (NONE || LOADING): return <Loader/>
            case ERROR: return <p>{I18n.t('admin.teachers.items')}</p>
            case SUCCESS:
                return (
                    <MyTable
                        data={teachers}
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

    handleNewTeacherSubmit = data => {
        console.log('haro')
        console.log(data)
        const { modalState } = this.state;
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
        const { modalState, selectedTeacher } = this.props;
        return ([
            <ModalPreview   
                data={selectedTeacher}         
                isOpen={modalState === PREVIEW} 
                onClose={this.handleModalClose} 
                onEdit={() => this.setState({...this.state, modalState: EDIT})}/>,
            // ModalNew with not null data is ModalEdit
            <ModalNew         
                data={selectedTeacher}         
                isOpen={modalState === (NEW || EDIT)}    
                onClose={this.handleModalClose} 
                onSubmit={this.handleNewTeacherSubmit}/>,
            <ModalDelete    
                data={selectedTeacher}         
                isOpen={modalState === DELETE}  
                onClose={this.handleModalClose} 
                onConfirm={() => this.props.deleteTeacher(selectedTeacher.id)}/>,
        ])
    }
}

const mapStateToProps = state => ({
    teachers:           state.admin.main.teachers,
    getTeachersStatus:  state.admin.main.getTeachersStatus,
    
    createTeacherStatus:       state.admin.teachers.createStatus,
    updateTeacherStatus:       state.admin.teachers.updateStatus,
    deleteTeacherStatus:       state.admin.teachers.deleteStatus,
})

const mapDispatchToProps = dispatch => ({
    createTeacher: (data) => dispatch(adminTeachersActions.createTeacher(data)),
    updateTeacher: (data) => dispatch(adminTeachersActions.updateTeacher(data)),
    deleteTeacher: (id) => dispatch(adminTeachersActions.deleteTeacher(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Teachers))
