import React from 'react';

const Cart = ({cart,handleRemoveCart}) => {
    // const {_id,index,price,picture,gender,name}=cart
    // console.log(cart);
    return (
        <div>
         {
            cart.map(tshirt=>
                <p key={tshirt._id}>
                {tshirt.name}<button onClick={()=>handleRemoveCart(tshirt._id)}>X</button>
                </p>
                )
         }   
        </div>
    );
};

export default Cart;