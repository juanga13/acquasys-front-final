import React, { Component } from 'react'
import adminActions from '../admin.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { LOADING, SUCCESS, ERROR } from '../../../utils/requestStates';
import { Header, Loader, Segment, Button, Form, Grid } from 'semantic-ui-react';
import Input from '../../common/Input/Input';
import { I18n } from 'react-redux-i18n';
import getInputType from '../../../utils/inputTypeByKey';
import regex from '../../../utils/regex';
import { ERROR_NOTIFICATION } from '../../../utils/typesOfNotification';
import DataValuePair from '../../common/DataValuePair/DatValuePair';
import './Profile.scss'
import sessionActions from '../../session/session.actions';

const initialState = {
    editing: false,
    values: {
        email: '',
        name: '',
        surname: '',
    },
    errors: {
        email: '',
        name: '',
        surname: '',
    }
}

class Profile extends Component {
    state = initialState;

    componentDidMount() {
        this.props.getProfile();    
    }

    handleEdit = e => {
        e.preventDefault();
        this.setState({editing: true});
    }

    validateForm() {
        const { email, name, surname } = this.state.values;
        const errors = {
            email: !regex.email.test(email),
            name: name.length < 0,
            surname: surname.length < 4,
        }
        if (Object.values(errors).every((value) => !value)) {
            this.setState({...this.state, errors: initialState.errors})
            return true; 
        } else {
            this.setState({...this.state, errors: errors});
            return false;  
        }
    }

    handleEditSubmit = e => {
        e.preventDefault();
        if (this.validateForm()) {
            this.setState({editing: false});
            this.props.notify(ERROR_NOTIFICATION, I18n.t('admin.profile.errors.generic'))
        } else {

        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                
                <div className='card'>
                    <div className='head'>
                        <Header as='h1'>Mi perfil</Header>
                        <Button icon='edit' onClick={this.handleEdit}></Button>
                    </div>
                    <div className='body profile-grid'>
                        {this.renderProfileData()}
                    </div>
                    <div className='footer'>
                        {this.state.editing ? <Button icon='tick'/> : null}
                    </div>
                </div>
            </div>
        )
    }

    renderProfileData() {
        const { getProfileStatus, profile } = this.props;
        const { values, errors } = this.state;
        if (getProfileStatus === LOADING) return <Loader/>
        if (getProfileStatus === ERROR) return <Segment error>Hubo un error</Segment>
        if (getProfileStatus === SUCCESS) {
            if (this.state.editing) {
                return (
                    <Form onSubmit={this.handleEditSubmit}>
                        {Object.keys(profile).map((key, id) => 
                            <Input
                                key={'admin-profile-form-input-' + key + '-' + id} 
                                title={I18n.t(key) + ':'}
                                id={key} 
                                type={getInputType(key)} 
                                value={values[key]} 
                                placeholder={I18n.t('modal.fields.name.' + key)} 
                                onChange={this.handleChange} 
                                autoFocus={id === 0}
                                error={errors[key]}/>
                        )}
                    </Form>
                )
            } else return (
                <Grid>
                    {Object.keys(profile).map((key, id) => (
                        <DataValuePair name={I18n.t(key) + ':'} value={profile[key]}/>
                    ))}
                </Grid>
            )
        }
        else return <Loader/>
    }
}

const mapStateToProps = state => ({
    profile: state.session.responseProfile,
    getProfileStatus: state.session.getProfileStatus,
})

const mapDispatchToProps = dispatch => ({
    getProfile: () => dispatch(sessionActions.getProfile()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile))
