import React, { Component } from 'react'
import { Modal, Image, Button, Grid, Divider, Menu, Transition } from 'semantic-ui-react';
import { dummyAvatar } from '../../../../assets/index'
import DataValuePair from '../../../common/DataValuePair/DatValuePair';
import './Modals.scss'

class ModalPreview extends Component {
    state = {
        activeMenu: 0,
    }

    render() {
        const { data, isOpen } = this.props;
        console.log('render modal preview', data)
        return (
            <Modal 
                className='admin-student-modal-preview' 
                dimmer='blurring' 
                open={isOpen} 
                onClose={this.props.onClose}
            >
                
                <Modal.Header>Planilla de datos - Modo vista previa</Modal.Header>
                {data !== null && <Modal.Content image>
                    <Image wrapped size='medium' src={data.avatarUrl || dummyAvatar} />
                    <Modal.Description style={{ width: '100%' }}>
                        <Menu tabular>
                            <Menu.Item name='Datos personales' active={this.state.activeMenu === 0} onClick={() => this.setState({ activeMenu: 0 })} />
                            <Menu.Item name='Datos de los padres' active={this.state.activeMenu === 1} onClick={() => this.setState({ activeMenu: 1 })} />
                        </Menu>
                        {this.state.activeMenu === 0
                            ? (<Grid style={{
                                width: '100%',
                                border: '1px solid lightgrey',
                                borderTop: 'none',
                                marginLeft: 0,
                            }}>

                                <DataValuePair name='Nombre: ' value={data.name} />
                                <DataValuePair name='Apellido: ' value={data.surname} />
                                <DataValuePair name='DNI: ' value={data.dni} />
                                <DataValuePair name='Email: ' value={data.email} />
                                <DataValuePair name='Telefono: ' value={data.phoneNumber} />
                                <DataValuePair name='Sexo: ' value={data.sex} />
                                <DataValuePair name='Direccion: ' value={data.address} />
                                <DataValuePair name='Fecha de nacimiento: ' value={data.birthday} />
                                <Divider />
                                <DataValuePair name='Plan social: ' value={data.socialPlan} />
                                <DataValuePair name='Numero de afiliado: ' value={data.affiliateNumber} />
                                <Divider />
                                <DataValuePair name='Esta verificado: ' icon value={data.verified ? 'check' : 'close'} />
                            </Grid>)
                            : (<Grid style={{
                                width: '100%',
                                border: '1px solid lightgrey',
                                borderTop: 'none',
                                marginLeft: 0,
                            }}>

                                <DataValuePair name='Nombre: ' value={data.fatherName} />
                                <DataValuePair name='Apellido: ' value={data.fatherSurname} />
                                <DataValuePair name='Telefono: ' value={data.fatherPhone} />
                                <DataValuePair name='Email: ' value={data.fatherEmail} />
                                <Divider />
                                <DataValuePair name='Nombre: ' value={data.motherName} />
                                <DataValuePair name='Apellido: ' value={data.motherSurname} />
                                <DataValuePair name='Telefono: ' value={data.motherPhone} />
                                <DataValuePair name='Email: ' value={data.motherEmail} />
                            </Grid>)
                        }
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
    }
}

export default ModalPreview
