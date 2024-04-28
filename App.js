import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";


const fetchProducts = fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data=> console.log(data))
    .then(error => console.log(error));

    console.log("s");

    // products.map(product=>{
    //     console.log(product.brand);
    // })

    // const[products, setProducts] = useState();



const App = () => {
    return (
        <div>
            <NavBar/>
      <Banner/>
      <ProductList></ProductList>
            

            
        </div>
         
    )
}




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);