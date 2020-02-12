import React, { Component } from 'react'
import { Modal, Image, Header, Button, Segment } from 'semantic-ui-react'
import { dummyAvatar } from '../../../../assets/index'
import './ModalNew.scss'
import Input from '../../../common/Input/Input'
import ModalNewForm from './ModalNewForm'
import adminTeachersActions from '../teachers.actions'
import { CLOSED, NEW, EDIT } from '../../../../utils/modalStates'

class ModalNew extends Component {
    state = {
        data: this.props.selectedTeacher,
    }

    render() {
        const { selectedTeacher } = this.props;
        const editingMode = (selectedTeacher !== undefined);

        return (
            <Modal dimmer='blurring' open={this.props.isOpen} onClose={this.props.closeModal}>
                {/* TODO: change title to I18n */}
                <Modal.Header>{editingMode ? 'Planilla de datos - Modo edición' : 'Agregar un nuevo alumno'}</Modal.Header>
                <Modal.Content image>
                    <Segment className='image-container'>
                        <Image wrapped size='small' src={editingMode ? (selectedTeacher.avatarUrl || dummyAvatar) : dummyAvatar}/>
                        <Input type='file' accept=".png, .jpeg"/>
                    </Segment>
                    <Modal.Description>
                        <ModalNewForm data={selectedTeacher}/>                            
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Button
                        onClick={this.props.onClose}
                        negative
                        labelPosition='right'
                        icon='close'
                        content='Cancelar'/>
                    <Button
                        onClick={this.handleEditSubmit}
                        positive
                        labelPosition='right'
                        icon='check'
                        content='Aceptar'/>
                </Modal.Actions>
            </Modal>
        )
    }
}

const mapStateToProps = state => ({
    modalState: state.admin.teachers.modalState,
    selectedTeacher: state.admin.teachers.selectedTeacher
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(adminTeachersActions.changeModalState(CLOSED)),
    createTeacher: (data) => dispatch(adminTeachersActions.create(data))
})

export default ModalNew
