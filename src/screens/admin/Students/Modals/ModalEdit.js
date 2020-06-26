import React, { Component } from 'react'
import { Modal, Image, Button, Segment, Form } from 'semantic-ui-react'
import { dummyAvatar } from '../../../../assets/index'
import Input from '../../../common/Input/Input'
import { I18n } from 'react-redux-i18n'
import getInputType from '../../../../utils/inputTypeByKey'
import './Modals.scss'

const emptyValues = {
    id:'', email:'', password:'', name:'', surname:'', 
    dni:'', sex:'', image:'', phoneNumber:'', 
    fatherName:'', fatherSurname:'', fatherPhone:'', fatherEmail:'', 
    motherName:'', motherSurname:'', motherPhone:'', motherEmail:'', 
    socialPlan:'', affiliateNumber:'', address:'', birthday: new Date('01/01/2005'), 
    verified:'', inscriptionDate: new Date(), role:'', 
}
const emptyErrors = {};
Object.keys(emptyValues).map(key => emptyErrors[key] = false);

class ModalEdit extends Component {
    state = {
        values: emptyValues,
        errors: emptyErrors,
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) this.setState({
            values: this.props.data || emptyValues,
            errors: emptyErrors,
        })
    }

    /** 
     * Returns true if the data inputted is valid
     */
    verifyForm = () => {
        const { 
            email, password, name, surname, dni, phoneNumber, 
            socialPlan, affiliateNumber, address, 
        } = this.state.values;
        const errors = {
            id: false,
            email: email.length < 4,
            password: password.length < 4,  // TODO: password regex
            name: name.length < 0,
            surname: surname.length < 0,
            dni: dni.length < 8,
            sex: false,  // defaulted (dropdown)
            image: false,  // optional
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

    handleDateChange = (id, value) => {
        this.setState({...this.state, values: {...this.state.values, [id]: value }});
    }

    handleChange = (e) => {
        e.preventDefault();
        if (e.target.id === 'image') {
            this.setState({...this.state, values: {...this.state.values, [e.target.id]: e.target.files[0] }});
        } else {
            this.setState({...this.state, values: {...this.state.values, [e.target.id]: e.target.value }});
        }
    }

    handleSubmit = e => {
        console.log('wanting to submit?')
        e.preventDefault();
        if (this.verifyForm()) {
            console.log('nice! all data is ok')
            let submitForm = this.state.values;
            // TODO
            submitForm.birthday = 0;
            submitForm.complete = false;
            submitForm.avatarUrl = '';
            delete submitForm.image;
            submitForm.inscriptionDate = 0;
            submitForm.role = 'STUDENT';
            submitForm.verified = false;

            this.props.onSubmit(submitForm);
            this.props.onClose();
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
            case 'verified': return true;
            case 'complete': return true;
            case 'image': return true;
            default: return false;
        }
    }

    render() {
        const { values, errors } = this.state;
        const editing = (this.props.data !== null);
        const reader = new FileReader();
        const result = values.images ? reader.readAsDataURL(values.image) : null;
        console.log('sdjfhsjdfh', values.image, result);
        return (
            <Modal
                dimmer='blurring' 
                open={this.props.isOpen} 
                onClose={this.props.onClose}
            >
                
                <Modal.Header>{editing ? 'Planilla de datos - Modo edición' : 'Agregar un nuevo alumno'}</Modal.Header>
                <Modal.Content image>
                    <div className='image-container'>
                        <Segment className='image'>
                            <Image wrapped size='medium' src={editing ? (values.image ? reader.readAsDataURL(values.image) : dummyAvatar) : dummyAvatar}/>
                        </Segment>
                        <Input type='file' accept=".png, .jpeg" id='image' onChange={this.handleChange}/>
                    </div>
                    <Modal.Description>
                        <Form loading={this.props.loading}> 
                            {Object.keys(values).map((key, id) => {
                                if (this.excludeField(key)) return null;
                                const type = getInputType(key);
                                return (
                                    <Input
                                        key={'modal-new-form-input-' + key + '-' + id} 
                                        title={I18n.t(key) + ':'}
                                        id={key} 
                                        type={type} 
                                        value={values[key]} 
                                        placeholder={I18n.t('modal.fields.name.' + key)} 
                                        onChange={this.handleChange} 
                                        autoFocus={id === 0}
                                        error={errors[key]}
                                    />    
                                )
                            })}
                        </Form>                          
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    {editing && <Button
                        onClick={this.props.onPreview}
                        color='blue'
                        labelPosition='right'
                        icon='long arrow alternate left'
                        content='Cancelar'/>}
                    {!values.verified && <div>
                        <p>El usuario no esta verificado!</p>
                        <Button
                            onClick={this.props.onVerify}  // TODO: change to handleVerify and dont close modal
                            color='teal'
                            labelPosition='right'
                            icon='form'
                            content='Verificar'/>
                    </div>}
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

export default ModalEdit
