import React, { Component } from 'react'
import { Modal, Image, Header, Button } from 'semantic-ui-react'

class ModalDelete extends Component {
    render() {
        const { isOpen } = this.props;

        return (
            <Modal 
                dimmer='blurring' 
                open={isOpen} 
                onClose={this.props.onClose} 
                size='mini'>
                
                <Modal.Header>Desea eliminar este usuario?</Modal.Header>
                <Modal.Content>
                    <p>Esta seguro de que quiere eliminar a </p>
                </Modal.Content>
                <Modal.Actions>
                    <Button negative icon='cross' labelPosition='right' content='No' onClick={this.props.onClose}/>
                    <Button positive icon='check' labelPosition='right' content='Yes' onClick={this.props.onConfirm}/>
                </Modal.Actions>
            </Modal>
        )
    }
}

export default ModalDelete
