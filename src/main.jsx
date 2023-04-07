import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Component/Layout/Main";
import OrderReview from "./Component/OrderReview/OrderReview";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Main/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader:()=>fetch('tshirt.json'),
      },
      {
        path:'/orderreview',
        element:<OrderReview/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
    ]
	},
]);
ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
