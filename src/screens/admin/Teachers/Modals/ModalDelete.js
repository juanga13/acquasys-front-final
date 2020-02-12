import React, { Component } from 'react'
import { Modal, Image, Header, Button } from 'semantic-ui-react'
import { I18n } from 'react-redux-i18n';
import adminTeachersActions from '../teachers.actions';
import { CLOSED } from '../../../../utils/modalStates';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class ModalDelete extends Component {
    render() {
        const { selectedTeacher } = this.props;
        console.log(selectedTeacher)
        return (
            <Modal 
                dimmer='blurring' 
                open={this.props.isOpen} 
                onClose={this.props.closeModal} 
                size='mini'>
                
                <Modal.Header>{I18n.t('admin.teachers.delete.title')}</Modal.Header>
                <Modal.Content>
                    {selectedTeacher && <p>{I18n.t('admin.teachers.delete.description') + selectedTeacher.first_name + ', ' + selectedTeacher.last_name}</p>}
                </Modal.Content>
                <Modal.Actions>
                    <Button negative icon='close' labelPosition='right' content='No' onClick={this.props.closeModal}/>
                    <Button positive icon='check' labelPosition='right' content='Yes' onClick={this.props.onConfirm}/>
                </Modal.Actions>
            </Modal>
        )
    }
}

const mapStateToProps = state => ({
    selectedTeacher: state.admin.teachers.selectedTeacher,
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(adminTeachersActions.changeModalState(CLOSED)),
    deleteTeacher: (id) => dispatch(adminTeachersActions.delete(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ModalDelete))
