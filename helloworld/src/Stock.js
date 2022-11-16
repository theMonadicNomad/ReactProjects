import React from "react";


export default class Stock extends React.Component {
    constructor(props) {
        super(props); //(parameters passed to component)
        this.time = new Date(); //FIELDS (iNTERNAL data, not passed as props)
        this.state = { time: new Date() };
        this.ref = this.refresh.bind(this);

    }
    refresh() {
        // this.time = new Date();
        this.setState({ time: new Date() });
        console.log("Refresh called", this.state.time.toLocaleTimeString());
    }
    render() {

        return <><h1>Sensex {this.props.sensex} at {this.state.time.toLocaleTimeString()}</h1>
            <button onClick={this.ref}>Refresh</button></>;
    }
}