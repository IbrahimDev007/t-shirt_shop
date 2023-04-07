import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";
import "./Home.css";

const Home = () => {
	const tshirts = useLoaderData();
	const [cart, setCart] = useState([]);
	const handaleAddedCart = (tshirt,id) => {
		//    const newCart=;
      const exist=  cart.find((cart) => cart._id == id);
      if(exist){
  alert('already exist')
  return;
      }else{
        setCart([...cart, tshirt]);}
		
	};
	const handleRemoveCart = (id) => {
		const removeItem = cart.filter((cart) => cart._id!== id);
		setCart(removeItem);
	};

	return (
		<div className="home-contaier">
			<div className="t-shirts-container">
				{tshirts.map((tshirt) => (
					<Tshirt
						key={tshirt._id}
						tshirt={tshirt}
						handaleAddedCart={handaleAddedCart}
					/>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart} handleRemoveCart={handleRemoveCart} />
			</div>
		</div>
	);
};

export default Home;
