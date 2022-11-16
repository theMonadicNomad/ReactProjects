import React from "react";
import './App.css';



/*class Person extends React.Component {
    // class components must have render() method which returns a jsx
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="person">
                    <h1> {this.props.id}</h1>
                    <p> {this.props.name}</p>
                    <p>Welcome </p>
                </div>

            </>
        )
    }


}
*/

function Person(props) {

    return (
        <>
            <div className="person">
                <h1> {props.id}</h1>
                <p> {props.name}</p>
                <p>Welcome </p>
            </div>

        </>
    )

}


export default Person;