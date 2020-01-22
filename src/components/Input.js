import React, { Component } from 'react'
import { Form, Label } from 'semantic-ui-react'

const Input = props => (
    <Form.Field key={props.key}>
        <Form.Input
            id={props.id}
            type={props.type}
            value={props.value}
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

export default Input
