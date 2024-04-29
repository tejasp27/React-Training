import React from "react";
import Container from "react-bootstrap/Container";
import Product from "./Product";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
const ProductList = () => {

    //use state hook
    const [products, setProducts] = useState([]);
    const [searchText, setSearchText] = useState("");

    //use effect hook
    useEffect(() => {
        fetchProducts();
    }, []);

    // fetch json using Async Await
    const fetchProducts = async() => {
        const products = await fetch("https://dummyjson.com/products");
        const jsonProducts = await products.json();
        setProducts(jsonProducts.products);
        //console.log(jsonProducts.products);
    }

    // filter products using filter
    const handleFilter = () => {
        const filteredProducts = products.filter((product)=> {
            return product.rating>4.5;
        });
        setProducts(filteredProducts);
        console.log(filteredProducts);
    };

        //filtering products using search
    const handleSearch = () => {
        const matchedproduct = products.filter((product) => {
            return product.title.toLowerCase().includes(searchText.toLowerCase())
        });
        setProducts(matchedproduct);
    }

    //on key down event
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    

  return (
                <Container>
                    <Form className="d-flex">
                        <div className="col-auto m-3">
                                <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                value={searchText}
                                onChange={(e) => {setSearchText(e.target.value)}}
                                onKeyDown={handleKeyPress}
                                />
                        </div>
                        <div className="col-auto m-3">
                                <Button variant="outline-success" onClick={handleSearch} >Search</Button>
                        </div>
                    </Form>
                    <span>
                        {products.length} products found
                    </span>
                        <Button
                            onClick={() => {
                                handleFilter();
                            }}
                            className="m-3"
                            variant="primary"
                        >
                            Filter
                        </Button>
                        <div className="d-flex flex-wrap gap-3" >
                            {products.map((product,index)=>(
                                <Link key={index} to={"/product/" + product.id}><Product  product={product}/>  </Link> 
                                // Routing to details Page with dynamic product ID
                              
                            ))
                            }

                        </div>
            </Container>
  )
}

export default ProductList
