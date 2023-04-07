import React from 'react';
import './Tshirt.css'
const Tshirt = ({tshirt,handaleAddedCart}) => {
const {_id,index,price,picture,gender,name}=tshirt
    return (
        <div className='t-shirt'>
            <img src={picture} alt=""/>
            <h4>{name}</h4>
            <p>Price:${price}</p>
            <button onClick={()=>handaleAddedCart(tshirt,_id)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;