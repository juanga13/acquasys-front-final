import React, { Component } from 'react'
import { Modal, Image, Button, Segment, Form } from 'semantic-ui-react'
import { dummyAvatar } from '../../../../assets/index'
import Input from '../../../common/Input/Input'
import { I18n } from 'react-redux-i18n'
import getInputType from '../../../../utils/inputTypeByKey'
import './ModalNew.scss'

/* selectedTeacher: {
    id: 200
    email: "Ismael978@teacher.com"
    password: "$2a$10$7fzwHZJZH7Mohrqq09sX/ewk35NX8SyQem6X9mkCJRwVH3HZ2OBgi"
    name: "Ismael"
    surname: "Fernandez"
    dni: 38015030
    sex: "Femenino"
    avatarUrl: null
    phoneNumber: "12021844"
    cuil: "20-38015030-7"
    role: "TEACHER"
} */
const emptyValues = {
    id:'', email:'', password:'', name:'', surname:'', 
    dni:'', sex:'', avatarUrl:'', phoneNumber:'', cuil: '', role:'', 
}
const emptyErrors = {};
Object.keys(emptyValues).map(key => emptyErrors[key] = false);

class ModalEdit extends Component {
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
            email, password, name, surname, dni, phoneNumber, cuil
        } = this.state.values;
        const errors = {
            id: false,
            email: email.length < 4,
            password: password.length < 4,  // TODO: password regex
            name: name.length < 0,
            surname: surname.length < 0,
            dni: dni.length < 8,
            sex: false,  // defaulted (dropdown)
            avatarUrl: false,  // optional
            phoneNumber: phoneNumber.length < 8,
            cuil: cuil.length < 11,
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

    handleDateChange = (value, id) => {
        console.log(value)
        this.setState({...this.state, values: {...this.state.values, [id]: value }});
    }

    handleChange = (e) => {
        e.preventDefault();
        console.log('handle change')
        console.log(e.target)
        // TODO: manage dropdown data 
        this.setState({...this.state, values: {...this.state.values, [e.target.id]: e.target.value }});
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('wanting to submit?')
        if (this.verifyForm()) {
            console.log('nice! all data is ok')
            this.props.onSubmit(this.state.values);
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
            case 'completed': return true;
            default: return false;
        }
    }

    render() {
        const { values, errors } = this.state;
        const editing = (this.props.data !== null);
        return (
            <Modal dimmer='blurring' open={this.props.isOpen} onClose={this.props.onClose}>
                <Modal.Header>{editing ? 'Planilla de datos - Modo edición' : 'Agregar un nuevo alumno'}</Modal.Header>
                <Modal.Content image>
                    <div className='image-container'>
                        <Segment className='image'>
                            <Image wrapped size='small' src={editing ? values.avatarUrl : dummyAvatar}/>
                        </Segment>
                        <Input type='file' accept=".png, .jpeg"/>
                    </div>
                    <Modal.Description>
                        <Form loading={this.props.loading}> 
                            {Object.keys(values).map((key, id) => (
                                this.excludeField(key) ? null :
                                    <Input
                                        key={'modal-new-form-input-' + key + '-' + id} 
                                        title={I18n.t(key) + ':'}
                                        id={key} 
                                        type={getInputType(key)} 
                                        value={values[key]} 
                                        placeholder={I18n.t('modal.fields.name.' + key)} 
                                        onChange={getInputType(key) === 'date' ? this.handleDateChange : this.handleChange} 
                                        autoFocus={id === 0}
                                        error={errors[key]}/>
                            ))}
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
