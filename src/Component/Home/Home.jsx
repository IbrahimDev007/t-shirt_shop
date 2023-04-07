import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import Tshirt from "../Tshirt/Tshirt";

const Home = () => {
	const tshirts = useLoaderData();

	return (
		<div className="home-contaier">
			<div className="t-shirts-container">
				{tshirts.map((tshirt) => (
					<Tshirt key={tshirt._id} tshirt={tshirt} />
				))}
			</div>
			<div className="cart-container">
				<Cart />
			</div>
		</div>
	);
};

export default Home;
