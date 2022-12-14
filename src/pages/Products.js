import React from 'react'
import { Link } from "react-router-dom";
import { Container } from 'reactstrap';
import { useAllProducts } from "../hooks/useAllProducts";
import { image } from '../components/Images';


const Products = () => {
    const data = useAllProducts();
    const products = data.apiData
    return (
        <>
            <Container className='text-center'>
                <h1>All Products</h1>
                <div className="products-container justify-content-center">
                    {products.map((product, index) => (
                        <div className="products-item" key={index}>
                            <Link to={`/ProductDetail/${product.id}`}>
                                <img alt="" src={image[product.image]} />
                                <div className="products-description">
                                    <h3>{product.name}</h3>
                                    <h5>$ {product.price}</h5>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </Container>
        </>
    );
};

export default Products;