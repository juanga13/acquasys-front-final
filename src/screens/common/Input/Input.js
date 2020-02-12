import React from 'react'
import { Form, Dropdown, Checkbox } from 'semantic-ui-react'

const Input = props => {
    if (props.type === 'date') {
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
    } else if (props.type === 'boolean') {
        return (
            <Form.Field key={props.key}>
                {props.title && <p style={{fontWeight: 'bold'}}>{props.title}</p>}
                <Checkbox/>
            </Form.Field>
        )
    } else if (props.type === 'sex') {
        return (
            <Form.Field key={props.key}>
                {props.title && <p style={{fontWeight: 'bold'}}>{props.title}</p>}
                <Dropdown><Dropdown.Menu>
                    <Dropdown.Item text='Masculino'/>
                    <Dropdown.Item text='Femenino'/>
                </Dropdown.Menu></Dropdown>
            </Form.Field>
        ) 
    } else {
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
