import React from "react";
import PropTypes from "prop-types";

export default class Person extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return <h1>{this.props.id + 123} {this.props.name}</h1>
    }

}

Person.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
  //  creations: PropTypes.arrayOf(PropTypes)
}