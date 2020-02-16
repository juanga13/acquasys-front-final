import React, { Component } from 'react'
import { NONE, LOADING, ERROR, SUCCESS } from '../../../utils/requestStates';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Payments extends Component {

    render() {
        const { payments, getPaymentsStatus } = this.props;
        
        switch (getPaymentsStatus) {
            case (NONE):
                return <h1>none</h1>
            case (LOADING):
                return <h1>loading</h1>
            case (ERROR):
                return <h1>error</h1>
            case (SUCCESS):
                return (
                    <div>
                        <div style={{margin: '10px', border: '1px solid gray'}}>
                            <h3>Payments</h3>
                            <ul>
                                <h5>Name, Surname</h5>
                                {payments.map((payment) => (
                                <li>{payment.name + ', ' + payment.surname}</li>
                            ))}</ul>
                        </div>}
                    </div>
                )
            default:
                return <h1>default</h1>
        }
    }
}

const mapStateToProps = state => ({
    payments: state.admin.payments,
    getPaymentsStatus: state.admin.getPaymentsStatus,
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Payments))
