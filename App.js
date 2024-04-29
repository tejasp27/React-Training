import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ProductDetail from "./components/ProductDetail";



const fetchProducts = fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data=> console.log(data))
    .then(error => console.log(error));



const App = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            {/* <Banner/>
            <ProductList></ProductList> */}
        </div>
         
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <><Banner/><ProductList/></>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",   //routing using dom
                element: <Contact/>
            },
            {
                path: "/product/:id",   //routing using params
                element: <ProductDetail/>
            }
        ],
        errorElement: <Error/>
    }
])




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);