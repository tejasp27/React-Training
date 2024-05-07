import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const useProduct = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetchProduct();
    },[]);

    const params = useParams(); //using params from the url
    console.log(params);

    const fetchProduct = async() => {
        const data = await fetch("https://dummyjson.com/products/"+params.id);  // product fetch API
        const jsonData = await data.json();
        setProducts(jsonData);
    }   
  return products       // RETURNS products
}

export default useProduct
