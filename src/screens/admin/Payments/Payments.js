import React, { Component } from 'react'
import requestStates from '../../../utils/requestStates';

export class Payments extends Component {
    componentDidMount() {
        this.props.getPayments();
    }

    render() {
        const { payments, getPaymentsStatus } = this.props;
        return (
            <div>
                {getPaymentsStatus === requestStates.SUCCESS && <div style={{margin: '10px', border: '1px solid gray'}}>
                    <h3>Payments</h3>
                    <ul>
                        <h5>Name, Surname</h5>
                        {payments.map((payment) => (
                        <li>{payment.name + ', ' + payment.surname}</li>
                    ))}</ul>
                </div>}
            </div>
        )
    }
}

export default Payments
