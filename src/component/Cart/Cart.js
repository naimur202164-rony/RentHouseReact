import React from 'react';
import './Cart.css'

const Cart = (props) => {

    const{cart}=props;

        // adding House Number

        let houseNum=0;
        for(const houses of cart){
            houseNum=houseNum+houses.sum
        }


    // Adding Name
             let namer='';
             for(const names of cart){
                 namer=namer+names.name
             }           


    // Adding Price
    let total=0;
    for(const money of cart){
        total=total+money.price
    }
    return (
        <div className="cart">
            <h3>House Add: {houseNum} </h3>
            <h2>House Cost:{total.toFixed(2)}$</h2>
            <h2>{namer}</h2>
        </div>
    );
};

export default Cart;