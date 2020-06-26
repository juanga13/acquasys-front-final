import React from 'react'
import { Form, Dropdown, Checkbox, Header, Button } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import './Input.scss'
import { I18n } from 'react-redux-i18n'

const Input = props => {
    if (props.type === 'date') {
        return (
            <Form.Field key={props.key}>
                {props.title && <p style={{fontWeight: 'bold'}}>{props.title}</p>}
                {/* // TODO: the back needs to send dates in milliseconds 
                <DatePicker
                    id={props.id}
                    placeholder={props.label}       
                    onBlur={props.onBlur}
                    error={props.error}
                    selected={new Date(props.value)}
                    onChange={(value) => props.onChange(props.id, value.getMilliseconds())}/> */}
            </Form.Field>
        )
    } else if (props.type === 'boolean') {
        return (
            <Form.Field key={props.key}>
                {props.title && <p style={{fontWeight: 'bold'}}>{props.title}</p>}
                <Checkbox/>
            </Form.Field>
        )
    } else if (props.type === 'sex') {
        // TODO: working properly?
        return (
            <Form.Field key={props.key}>
                {props.title && <p style={{fontWeight: 'bold'}}>{props.title}</p>}
                <Dropdown
                    style={{maxWidth: '300px'}}
                    selection
                    options={[
                        // {key: 'dropdown-male-option', value: I18n.t('common.input.male')},
                        // {key: 'dropdown-female-option', value: I18n.t('common.input.female')}
                        {key: 'dropdown-male-option', value: 'Femenino', text: 'Femenino'},
                        {key: 'dropdown-female-option', value: 'Masculino', text: 'Masculino'}
                    ]}
                    defaultValue={props.value}
                    onChange={(e, data) => props.onChange(e, data)}
                />
            </Form.Field>
        ) 
    } else if (props.type.includes('list-')) {
        if (props.type === 'list-students' || props.type === 'list-teachers') {
            console.log('render input of students or teachers', props)
            return (
                <Form.Field key={props.key}>
                    {props.title && <p style={{fontWeight: 'bold'}}>{props.title}</p>}
                    <div className='form-field-list'>
                        <Header>{I18n.t('input.list.title-' + props.type.substring(5))}</Header>
                        <div className='list-selectors-container'> 
                            <div className='data-list-selector-container'>
                                <Header h5>{I18n.t('input.list.selector.title-data')}</Header>
                                {props.data.length === 0 
                                    ? <p>{I18n.t('input.list.noDataSelected')}</p>
                                    : props.data.map(item => (
                                        <Button onClick={(e) => props.onRemoveItem(e, props.key)}>
                                            {item.name + ', ' + item.surname}
                                        </Button>
                                    ))}
                            </div>
                            <div className='availableData-list-selector-container'>
                                <Header h5>{I18n.t('input.list.selector.title-availableData')}</Header>
                                {props.availableData.length === 0 
                                    ? <p>{I18n.t('input.list.noAvailableDataSelected')}</p>
                                    : props.availableData.map((item, id) => (
                                        <Button id={id} onClick={(e) => props.onAddItem({event: e, id: props.id})}>
                                            {item.name + ', ' + item.surname}
                                        </Button>
                                    ))}
                            </div>
                        </div>
                    </div>
                </Form.Field>
            )
        } else {
            console.log('render input of weekdays', props)
            return (
                <Form.Field key={props.key}>
                    {props.title && <p style={{fontWeight: 'bold'}}>{props.title}</p>}
                    <div className='form-field-list'>    
                        {props.data.map(item => (<p>{'- ' + item.name}</p>))}
                        <p>----------------------------------------</p>
                        {props.availableData.map(item => (<p>{'- ' + item.name}</p>))}
                    </div>
                </Form.Field>
            )
        }
    }else {
        return (
            <Form.Field key={props.key}>
                {props.title && <p style={{fontWeight: 'bold'}}>{props.title}</p>}
                <Form.Input
                    id={props.id}
                    type={props.type}
                    value={props.value || ''}
                    placeholder={props.label}
                    onChange={props.onChange}
                    onBlur={props.onBlur}
                    autoFocus={props.autoFocus}
                    icon={props.icon}
                    iconPosition='left'
                    error={props.error}
                />
            </Form.Field>
        )
    }
}

export default Input
