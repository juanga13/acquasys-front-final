import React, { Component } from 'react'
import { Modal, Button, Form } from 'semantic-ui-react'
import Input from '../../../common/Input/Input'
import { I18n } from 'react-redux-i18n'
import getInputType from '../../../../utils/inputTypeByKey'
import './ModalNew.scss'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

/*
    id: 94
    teachers: (4) [{…}, {…}, {…}, {…}]
    weekdays: (3) [{…}, {…}, {…}]
    name: "Pilates"
    startDate: 1577847600000
    endDate: 1609470000000
    students: (11) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    */
const emptyData = {
    id:'', teachers: [], weekdays: [], name: '', startDate: new Date(), endDate: new Date(), students: [],
}
const emptyErrors = {};
Object.keys(emptyData).map(key => emptyErrors[key] = false);

const availableWeekdays = [
    {name: 'monday'},
    {name: 'tuesday'},
    {name: 'wednesday'},
    {name: 'thursday'},
    {name: 'friday'},
    {name: 'saturday'},
    {name: 'sunday'},
]

class ModalNew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data || emptyData,
            availableData: this.props.availableData,
            errors: emptyErrors,
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) this.setState({
            ...this.state,
            data: this.props.data || emptyData,
            errors: emptyErrors,
        })
    }

    /** 
     * Returns true if the data inputted is valid
     */
    verifyForm = () => {
        const { 
            id, teachers, weekdays, name, 
            startDate, endDate, students
        } = this.state.data;
        const errors = {
            id: id, teachers: teachers, weekdays: weekdays, 
            name: name, startDate: startDate, 
            endDate: endDate, students: students,
        }
        if (Object.data(errors).every((value) => !value)) {
            this.setState({...this.state, errors: emptyErrors})
            return true; 
        } else {
            this.setState({...this.state, errors: errors});
            return false;  
        }
    }

    handleDateChange = (id, value) => {
        this.setState({...this.state, data: {...this.state.data, [id]: value }});
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({...this.state, data: {...this.state.data, [e.target.id]: e.target.value }});
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.verifyForm()) {
            this.props.onSubmit(this.state.data);
            this.props.onClose();
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
            case 'avatarUrl': return true;
            default: return false;
        }
    }

    handleAddItem = ({event, id}) => {
        event.preventDefault();
        
        let data = this.state.data[id];
        const addingItem = null;
        this.props.availableData[id].find(item => {
            if (item.id === id) addingItem = item;
        });
        data = data.concat(addingItem);

        let availableData = this.state.availableData[id].filter(item => item.id !== id);
        this.setState({
            ...this.state, 
            data,
            availableData,
        })
    }
    
    handleRemoveItem = (e, type) => {
        e.preventDefault();
    }

    /*
        id: 94
        teachers: (4) [{…}, {…}, {…}, {…}]
        weekdays: (3) [{…}, {…}, {…}]
        name: "Pilates"
        startDate: 1577847600000
        endDate: 1609470000000
        students: (11) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
     */
    render() {
        const { data, errors } = this.state;
        const editing = (this.props.data !== null);
        return (
            <Modal dimmer='blurring' open={this.props.isOpen} onClose={this.props.onClose}>
                {/* TODO: change to i18n */}
                <Modal.Header>{editing ? 'Planilla de datos - Modo edición' : 'Agregar un nueva clase'}</Modal.Header>
                <Modal.Content>
                    <Modal.Description>
                        <Form loading={this.props.loading}> 
                            {Object.keys(data).map((key, id) => {
                                if (this.excludeField(key)) return null;
                                const type = getInputType(key);
                                if (key === 'weekdays' || key === 'students' || key === 'teachers') {
                                    console.log('rendering list')
                                    let data = []; 
                                    let availableData = [];
                                    if (key === 'weekdays') {
                                        data = this.state.data.weekdays;
                                        availableData = availableWeekdays;
                                    } else {
                                        data = this.state.data[key];
                                        availableData = this.props.availableData[key];
                                    }
                                    return (
                                        <Input
                                            key={'modal-new-form-input-' + key + '-' + id} 
                                            title={I18n.t(key) + ': '}
                                            id={key} 
                                            type={type} 
                                            error={errors[key]}
                                            data={data}
                                            availableData={availableData}
                                            onAddItem={this.handleAddItem}
                                            onRemoveItem={this.handleRemoveItem}
                                        />    
                                    )
                                } else {
                                    return (
                                        <Input
                                            key={'modal-new-form-input-' + key + '-' + id} 
                                            title={I18n.t(key) + ': '}
                                            id={key} 
                                            type={type} 
                                            value={data[key]} 
                                            placeholder={I18n.t('modal.fields.name.' + key)} 
                                            onChange={this.handleChange} 
                                            autoFocus={id === 0}
                                            error={errors[key]}
                                        />    
                                    )
                                }    
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
                        content='Atras'/>}
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

export default withRouter(ModalNew);