import React, { Component } from 'react'
import { Modal, Image, Button, Grid, Divider, Menu, Header } from 'semantic-ui-react';
import { dummyAvatar } from '../../../../assets/index'
import DataValuePair from '../../../common/DataValuePair/DatValuePair';

class ModalPreview extends Component {
    state = {
        activeMenu: 0,
    }

    /* selectedTeacher: {
        id: 200
        email: "Ismael978@teacher.com"
        password: "$2a$10$7fzwHZJZH7Mohrqq09sX/ewk35NX8SyQem6X9mkCJRwVH3HZ2OBgi"
        name: "Ismael"
        surname: "Fernandez"
        dni: 38015030
        sex: "Femenino"
        avatarUrl: null
        phoneNumber: "12021844"
        cuil: "20-38015030-7"
        role: "TEACHER"
    } */
    render() {
        const { data, isOpen } = this.props;
        if (data)
            return (
                <Modal dimmer='blurring' open={isOpen} onClose={this.props.onClose}>
                    <Modal.Header>Planilla de datos - Modo vista previa</Modal.Header>
                    {data !== null && <Modal.Content image>
                        <Image wrapped size='medium' src={data.avatarUrl || dummyAvatar} />
                        <Modal.Description style={{ width: '100%' }}>
                            <Header as='h3' active={this.state.activeMenu === 0} onClick={() => this.setState({ activeMenu: 0 })}>Datos personales</Header>
                            <Grid style={{
                                width: '100%',
                                marginTop: '10px',
                                marginLeft: '20px'
                            }}>

                                <DataValuePair name='Nombre: ' value={data.name} />
                                <DataValuePair name='Apellido: ' value={data.surname} />
                                <DataValuePair name='DNI: ' value={data.dni} />
                                <DataValuePair name='CUIL: ' value={data.cuil} />
                                <DataValuePair name='Email: ' value={data.email} />
                                <DataValuePair name='Telefono: ' value={data.phoneNumber} />
                                <DataValuePair name='Sexo: ' value={data.sex} />
                                {/* <DataValuePair name='Direccion: ' value={data.address} /> */}
                                {/* <DataValuePair name='Fecha de nacimiento: ' value={data.birthday} /> */}
                            </Grid>
                        </Modal.Description>
                    </Modal.Content>}
                    <Modal.Actions>
                        <Button
                            onClick={this.props.onEdit}
                            color='blue'
                            labelPosition='right'
                            icon='edit'
                            content='Editar alumno' />
                    </Modal.Actions>
                </Modal>
            )
        return null
    }
}

export default ModalPreview
