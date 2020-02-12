import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
import Input from '../../../common/Input/Input'
import getInputType from '../../../../utils/inputTypeByKey'
import { I18n } from 'react-redux-i18n'

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

class ModalNewForm extends Component {
    state = {
        values: this.props.data || emptyValues,
        errors: emptyErrors,
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            this.setState({...this.state, values: this.props.data});
        }
    }

    verifyForm = () => {

    }

    handleChange = e => {
        e.preventDefault(); 
        this.setState({...this.state, value: {...this.state.values, [e.target.id]: e.target.value }});
    }

    handleSubmit = e => {
        e.preventDefault(); 
        console.log('handle submit');
    }

    render() {
        const { values, errors } = this.state;
        
        return (
            <Form> 
                {Object.keys(values).map((key, id) => (
                    <Input
                        key={'modal-new-form-input-' + key + '-' + id} 
                        title={I18n.t(key) + ':'}
                        id={key} 
                        type={getInputType(key)} 
                        value={values[key]} 
                        placeholder={I18n.t(key)} 
                        onChange={this.handleChange} 
                        autoFocus={id === 0}
                        error={errors[key]}/>
                ))}
            </Form>
        )
    }
}

export default ModalNewForm