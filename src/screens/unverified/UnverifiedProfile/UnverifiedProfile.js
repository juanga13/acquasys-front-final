import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {ERROR, LOADING, NONE, SUCCESS} from "../../../utils/requestStates";
import unverifiedActions from "../unverified.actions";
import ModalNew from "./Modals/ModalNew";
import {Button} from "semantic-ui-react";

class UnverifiedProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
    }
    render() {
        const { getStudentProfileStatus, studentProfile } = this.props;
        const modal = <ModalNew
          key='students-modal-new'
          loading={false}
          isOpen={this.state.modalOpen}
          onClose={() => this.setState({modalOpen: false})}
          onSubmit={this.editProfile}
          onPreview={() => this.handlePreview(studentProfile)}
          data={studentProfile}/>;

        const txt = <h1> Tu perfil no esta completo, para poder ingresar debes completar tu perfil </h1>;
        const button = <Button class="ui primary basic button" onClick={ () => this.setState({modalOpen: true})}>Completar perfil</Button>;
        const incomplete = [txt,button];
        const complete = [<h1>Tu perfil esta completo!</h1>, <h2>para poder inscribirte a clases tu perfil debe ser verificado por un administrador</h2>];
        switch (getStudentProfileStatus) {
            case (NONE):
                return <h1>none</h1>
            case (LOADING):
                return <h1>loading</h1>
            case (ERROR):
                return <h1>error</h1>
            case (SUCCESS):
                return [modal,studentProfile.complete ? complete : incomplete];
                //if complete return message else button to open edit modal

            default:
                return <h1>default</h1>
        }
    }
}

const mapStateToProps = state => ({
    studentProfile: state.unverified.studentProfile,
    getStudentProfileStatus: state.unverified.getStudentProfileStatus,
})

const mapDispatchToProps = (dispatch) => ({
    editProfile: (profile) => dispatch(unverifiedActions.editProfile(profile)),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UnverifiedProfile))