import React, { useState } from 'react';
import './House.css'
const Hourse = (props) => {
    
    const{name,price,img,seller,location}=props.house;

    
    return (
        <div className="card">
           <div>
            <img src={img} alt=""/>
           </div>
           <div className="card-body">
               <h2>{name}</h2>
               <h3>house Cost:{price}$</h3>
               <h6> Seller :{seller}</h6>
               <h5>Location:{location}</h5>

               <button className="btn"  onClick={()=>props.handleAddToCart(props.house)}>Bye Now</button>
           </div>
        </div>
    );
};

export default Hourse;