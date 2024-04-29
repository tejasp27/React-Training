import React, {useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import React from 'react'

const ProductDetail = () => {
    const [product, setProduct] = useState();

    useEffect(()=>{
        fetchProduct();
    },[]);

    const params = useParams(); //using params from the url
    console.log(params);

    const fetchProduct = async() => {
        const data = await fetch("https://dummyjson.com/products/"+params.id);
        const jsonData = await data.json();
        setProduct(jsonData);
    }   

    if(product) {
        const {title, description, category, thumbnail, brand, price} = product;
        return(
            <div>
                <h1>{title}</h1>
                <img src={thumbnail}/>
                <h2>{description}</h2>
                <p>{category}</p>
            </div>
        )
    }


  return (
    <div>
      Loading
    </div>
  )
}

export default ProductDetail

