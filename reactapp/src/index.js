import * as React from "react";
import * as ReactDOM from "react-dom/client";


const div = document.getElementById("root");
const root = ReactDOM.createRoot(div);
const h1 = React.createElement("h1", null, "Hello rom React");
root.render(h1);