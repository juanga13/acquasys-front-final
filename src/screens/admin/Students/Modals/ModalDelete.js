import React, { Component } from 'react'
import { Modal, Button, Loader } from 'semantic-ui-react'
import './Modals.scss'

class ModalDelete extends Component {
    handleConfirm = () => {
        this.props.onConfirm();
        this.props.onClose()
    }

    render() {
        return (
            <Modal
                className='admin-student-modal-delete' 
                dimmer='blurring' 
                open={this.props.isOpen} 
                onClose={this.props.onClose} 
                size='mini'
            >
                
                {/* TODO: title and description to I18n */}
                <Modal.Header>Desea eliminar este usuario?</Modal.Header>
                <Modal.Content>
                    <p>Esta seguro de que quiere eliminar a </p>
                    {this.props.loading && <Loader/>}
                </Modal.Content>
                <Modal.Actions>
                    <Button negative icon='close' labelPosition='right' content='No' onClick={this.props.onClose}/>
                    <Button positive icon='check' labelPosition='right' content='Yes' onClick={this.handleConfirm}/>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ModalDelete
