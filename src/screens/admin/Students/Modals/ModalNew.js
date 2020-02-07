import React, { Component } from 'react'
import { Modal, Image, Header, Button, Segment } from 'semantic-ui-react'
import { dummyAvatar } from '../../../../assets/index'
import './ModalNew.scss'
import Input from '../../../common/Input/Input'
import ModalNewForm from './ModalNewForm'

class ModalNew extends Component {
    render() {
        const { data, isOpen } = this.props;
        const editingMode = (data !== undefined);

        return (
            <Modal dimmer='blurring' open={isOpen} onClose={this.props.onClose}>
                <Modal.Header>{editingMode ? 'Planilla de datos - Modo edición' : 'Agregar un nuevo alumno'}</Modal.Header>
                <Modal.Content image>
                    <Segment className='image-container'>
                        <Image wrapped size='small' src={editingMode ? (data.avatarUrl || dummyAvatar) : dummyAvatar}/>
                        <Input type='file' accept=".png, .jpeg"/>
                    </Segment>
                    <Modal.Description>
                        <ModalNewForm data={data}/>                            
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

export default ModalNew
