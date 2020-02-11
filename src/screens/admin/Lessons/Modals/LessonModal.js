import React, { Component } from 'react'
import { Modal, Image, Header, Button, Segment } from 'semantic-ui-react'
import { dummyAvatar } from '../../../../assets/index'
import './LessonModal.scss'
import LessonForm from "./LessonForm";

class LessonModal extends Component {
    render() {
        const { data, isOpen } = this.props;
        const editingMode = (data !== undefined);

        return (
            <Modal dimmer='blurring' open={isOpen} onClose={this.props.onClose}>
                <Modal.Header>{editingMode ? 'Clase: edición' : 'Agregar una nueva clase'}</Modal.Header>
                <Modal.Content image>
                    <Modal.Description>
                        <LessonForm data={data}/>
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
                        onClick={this.props.onSubmit}
                        positive
                        labelPosition='right'
                        icon='check'
                        content='Aceptar'/>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default LessonModal