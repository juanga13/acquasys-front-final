import React, { Component } from 'react'
import { Modal, Image, Header, Button, Segment, Form } from 'semantic-ui-react'
import { dummyAvatar } from '../../../../assets/index'
import './ModalNew.scss'
import Input from '../../../common/Input/Input'
import { I18n } from 'react-redux-i18n'
import getInputType from '../../../../utils/inputTypeByKey'
import regex from '../../../../utils/regex'

const emptyValues = {
    id:'', email:'', password:'', name:'', surname:'', 
    dni:'', sex:'', avatarUrl:'', phoneNumber:'', 
    fatherName:'', fatherSurname:'', fatherPhone:'', fatherEmail:'', 
    motherName:'', motherSurname:'', motherPhone:'', motherEmail:'', 
    socialPlan:'', affiliateNumber:'', address:'', birthday:'', 
    verified:'', inscriptionDate:'', role:'', 
}
const emptyErrors = {};
Object.keys(emptyValues).map(key => emptyErrors[key] = false);

class ModalNew extends Component {
    state = {
        values: emptyValues,
        errors: emptyErrors,
    }

    componentDidUpdate(prevProps) {
        if(prevProps.data !== this.props.data) this.setState({
            values: this.props.data || emptyValues,
            errors: emptyErrors,
        })
    }

    /** 
     * Returns true if the data inputted is valid
     */
    verifyForm = () => {
        const { 
            id, email, password, name, surname, dni, sex, avatarUrl, phoneNumber, 
            fatherName, fatherSurname, fatherPhone, fatherEmail, 
            motherName, motherSurname, motherPhone, motherEmail, 
            socialPlan, affiliateNumber, address, birthday, 
            verified, inscriptionDate, role, 
         } = this.state.values;
        const errors = {
            id: false,
            email: !regex.email.test(email),
            password: password.length < 4,  // TODO: password regex
            name: name.length < 0,
            surname: surname.length < 0,
            dni: dni.length < 8,
            sex: false,  // defaulted (dropdown)
            avatarUrl: false,  // optional
            phoneNumber: phoneNumber.length < 8,
            fatherName: false,  // optional
            fatherSurname: false,  // optional
            fatherPhone: false,  // optional
            fatherEmail: false,  // optional
            motherName: false,  // optional
            motherSurname: false,  // optional
            motherPhone: false,  // optional
            motherEmail: false,  // optional
            socialPlan: socialPlan.length < 0,
            affiliateNumber: affiliateNumber.length < 0,
            address: address.length < 0,
            birthday: false,  // defaulted (date)
            verified: false,  // defaulted (dropdown)
            inscriptionDate: false,  // defaulted (date)
            role: false,  // defaulted (dropdown)
        }

        if (Object.values(errors).every((value) => !value)) {
            this.setState({...this.state, errors: emptyErrors})
            return true; 
        } else {
            this.setState({...this.state, errors: errors});
            return false;  
        }
    }

    handleChange = e => {
        e.preventDefault(); 
        this.setState({...this.state, value: {...this.state.values, [e.target.id]: e.target.value }});
    }

    handleSubmit = e => {
        console.log('wanting to submit?')
        e.preventDefault();
        if (this.verifyForm()) {
            console.log('nice! all data is ok')
            this.props.onSubmit(this.state.values);
        } else {
            console.log('too bad, some data is wrong')
        }
    }

    /**
     * some data variables are not meant to be edited/created/seen
     * - id
     * - role
     */
    excludeField(type) {
        switch (type) {
            case 'id': return true;
            case 'role': return true;
            default: return false;
        }
    }

    render() {
        console.log('AAAAAAAAAAAAAAAAAAAAA')
        console.log(this.state)
        const { values, errors } = this.state;
        const editing = (this.props.data !== null);
        return (
            <Modal dimmer='blurring' open={this.props.isOpen} onClose={this.props.onClose}>
                <Modal.Header>{editing ? 'Planilla de datos - Modo edición' : 'Agregar un nuevo alumno'}</Modal.Header>
                <Modal.Content image>
                    <Segment className='image-container'>
                        <Image wrapped size='small' src={editing ? values.avatarUrl : dummyAvatar}/>
                        <Input type='file' accept=".png, .jpeg"/>
                    </Segment>
                    <Modal.Description>
                        <Form> 
                            {Object.keys(values).map((key, id) => (
                                this.excludeField(key) ? null :
                                    <Input
                                        key={'modal-new-form-input-' + key + '-' + id} 
                                        title={I18n.t(key) + ':'}
                                        id={key} 
                                        type={getInputType(key)} 
                                        value={key === 'password' ? '' : values[key] } 
                                        placeholder={I18n.t('modal.fields.name.' + key)} 
                                        onChange={this.handleChange} 
                                        autoFocus={id === 0}
                                        error={errors[key]}/>
                            ))}
                        </Form>                          
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
                        onClick={this.handleSubmit}
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
