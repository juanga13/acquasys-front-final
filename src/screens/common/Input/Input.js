import React from 'react'
import { Form, Dropdown, Checkbox } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'

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
    } else if (props.type === 'weekdays') {
        return (
            <Form.Field key={props.key}>
                {props.title && <p style={{fontWeight: 'bold'}}>{props.title}</p>}
                {/* IDK */}
            </Form.Field>
        )
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
