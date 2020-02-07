import React, { Component } from 'react'
import adminActions from '../admin.actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import requestStates from '../../../utils/requestStates';
import { Header, Divider, Loader, Segment, Dropdown, Icon, Button, Form } from 'semantic-ui-react';

class Profile extends Component {
    state = {
        editing: false,
        values: {
            name: '',
            surname: '',
            email: '',
        }
    }

    componentDidMount() {
        this.props.getProfile();    
    }

    handleEdit = e => {
        e.preventDefault();
        this.setState({editing: true});
    }

    handleEditSubmit = e => {
        e.preventDefault();
        this.setState({editing: false});
    }

    render() {
        return (
            <div>
                <Header as='h1'>Mi perfil</Header>
                <Divider/>
                <div className='card'>
                    <div className='head'>
                        <Header>Datos de mi cuenta</Header>
                        <Button icon='edit' onClick={this.handleEdit}></Button>
                    </div>
                    <div className='body'>
                        {this.state.editing ? this.renderProfileDataForm() : this.renderProfileData()}
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
        if (getProfileStatus === requestStates.LOADING) return <Loader/>
        if (getProfileStatus === requestStates.ERROR) return <Segment error>Hubo un error</Segment>
        if (getProfileStatus === requestStates.SUCCESS) return ([
            <p>{'Email  : ' + profile.email}</p>,
            <p>{'Name   : ' + profile.name}</p>,
            <p>{'Surname: ' + profile.surname}</p>
        ])
        else return <Loader/>
    }

    renderProfileDataForm() {
        return (
            <Form onSubmit={this.handleEditSubmit}>
                <Form.Input>asd</Form.Input>
            </Form>
        )
    }
}

const mapStateToProps = state => ({
    profile: state.admin.responseProfile,
    getProfileStatus: state.admin.getProfileStatus,
})

const mapDispatchToProps = dispatch => ({
    getProfile: () => dispatch(adminActions.getProfile()),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Profile))
