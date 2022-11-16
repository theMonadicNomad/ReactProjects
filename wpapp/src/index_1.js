import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import "./mystyle.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<h1> Welcome to webpack app</h1>);
//const h1 = <h1> welcome to webpack app</h1>;

//myStyle is a javascript object - and ; not allowed
// style is an expression where we pass an object, thats why you pass one more pair of {}
const myStyle = {
    backgroundColor: "green",
    color: "black"
}

const h11 = <h1 style={myStyle} > hello</h1>
const h2 = <h2 style={{ backgroundColor: "red" }}>world</h2>
const h3 = <h3> How are you  </h3>
const topLevel = <div>

    <h1 style={myStyle} > New</h1>
    <h2 style={{ backgroundColor: "red" }}>world</h2>
    <h3> Out there  </h3>

</div>;
console.log(<h1> direct</h1>);
console.log(h11);



root.render(topLevel);
//root.render(<> {h11} {h2} {h3} </>);


