import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Person from "./Person";
import OrderDetails from "./OrderDetails";

import Stock from './Stock';

const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(<Person id={1} name="Charan "></Person>);

const myDetails = {

    details: {
        customer: {
            id: 1,
            name: 'Charan',
            addr: '123'
        },
        lineItem: [
            {
                productNumber: 454,
                quantity: 2,
                unitPrice: 4


            }
        ]
    }


}
root.render(<OrderDetails details={myDetails}></OrderDetails>);
//root.render(new Person({ id: "2", name: "Charan" }).render());

// React not only creates the object but registers it in mounting
//root.render(<Stock sensex="2" />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
