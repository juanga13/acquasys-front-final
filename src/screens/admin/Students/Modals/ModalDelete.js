import React, { Component } from 'react'
import { Modal, Image, Header, Button } from 'semantic-ui-react'

class ModalDelete extends Component {
    render() {
        return (
            <Modal 
                dimmer='blurring' 
                open={this.props.isOpen} 
                onClose={this.props.onClose} 
                size='mini'>
                
                {/* TODO: title and description to I18n */}
                <Modal.Header>Desea eliminar este usuario?</Modal.Header>
                <Modal.Content>
                    <p>Esta seguro de que quiere eliminar a </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative icon='close' labelPosition='right' content='No' onClick={this.props.onClose}/>
                    <Button positive icon='check' labelPosition='right' content='Yes' onClick={this.props.onConfirm}/>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ModalDelete
