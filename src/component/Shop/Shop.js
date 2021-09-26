import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Hourse from '../House/Hourse';
import './Shop.css'

const Shop = () => {
    const [houses,setHouse]=useState([]);
    const [cart,setCart]=useState([]);






    useEffect(()=>{
        fetch('./rent.JSON')
        .then(res=>res.json())
        .then(data=>setHouse(data))
    },[]);

    const handleAddToCart=(house)=>{
        const newCart=[...cart,house]
        setCart(newCart);
    }



    return (
        <div className="shop-container">
            <div className="house-container">
                {
                    houses.map(house=>
                            <Hourse 
                            handleAddToCart={handleAddToCart}
                                house={house}
                            >
                            </Hourse>
                        
                        )
                }
            </div>
            <div className="Cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;