import React from "react";
import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import "./mystyle.css";
import Person from "./App.js";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Person, {
  id: "1",
  name: "charan"
}), /*#__PURE__*/React.createElement(Person, {
  id: "2",
  name: "deep"
}))); // you can reuse the components 
//root.render(new Person ({id: "10", name: "charan"})).render();
