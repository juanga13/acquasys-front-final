import React from 'react'
import { Form } from 'semantic-ui-react'

const Input = props => {
    if (props.type === 'date') {
        return (
            <Form.Field key={props.key}>
                {props.title && <p style={{fontWeight: 'bold'}}>{props.title}</p>}
                {/* TODO: date picker goes here */}
            </Form.Field>
        )
    } else if (props.type === 'boolean') {
        return (
            <Form.Field key={props.key}>
                {props.title && <p style={{fontWeight: 'bold'}}>{props.title}</p>}
                {/* TODO: check box goes here */}
            </Form.Field>
        )
    } else if (props.type === 'sex') {
        return (
            <Form.Field key={props.key}>
                {props.title && <p style={{fontWeight: 'bold'}}>{props.title}</p>}
                {/* TODO: dropdown goes here */}
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
