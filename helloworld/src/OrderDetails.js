import PropTypes from "prop-types";
import React from "react";
export default class OrderDetails extends React.Component {


    static propTypes = {
        details: PropTypes.shape({
            customer: PropTypes.shape({

                id: PropTypes.number,
                name: PropTypes.string,
                addr: PropTypes.string
            }),

            lineItem: PropTypes.arrayOf(

                PropTypes.shape({
                    prodcutNumber: PropTypes.number,
                    quantity: PropTypes.number,
                    unitPrice: PropTypes.number
                }),
            ),
        }),
    }
    render() {
        return <>
            <h1>Customer {this.props.details.customer.id}</h1>
            <p>Customer{this.props.details.customer.name} {this.props.details.customer.addr} </p>

        </>
    }


}