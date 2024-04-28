import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./components/Product";
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
      <h1>Welcome! Start Shopping!</h1>
      <Product title="iPhone" price={799}></Product>
      <Product title="Samsung" price={698}></Product>
      <Product title="Huawei" price={567}></Product>
      <ProductList></ProductList>
            

            
        </div>
         
    )
}

// function Product(props) {
//     const {name} = props;
//     return(
//         <>
//             {name}
//         </>
//     )
// }





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);