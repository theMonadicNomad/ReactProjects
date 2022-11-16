import React from "react";

export default class Calendar extends React.Component {

    //lifecycle 1 -call base with props, set initial state
    constructor(props) {
        super(props);
        console.log("constructor called with",
            props);
        this.state = { count: 0, year: "2000" };
    }

    //lifecycle 2 update state from any  dependent props
    static getDerivedStateFromProps() {
        console.log("get called from derived state");
        return { count: 1 };
    }


    render() {

        console.log("render()");
        return <h1> world best calendar</h1>
    }
    componentDidMount() {
        console.log("mount called");
    }
}