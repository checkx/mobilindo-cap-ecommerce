import React from 'react'
import { Link } from "react-router-dom";
import { Container } from 'reactstrap';


const Products = () => {
    return (
        <>
            <Container className='text-center'>
                <h1>Products BMW</h1>
                <div className="products-container justify-content-center">

                    <div className="products-item">
                        <Link to="/ProductDetail">
                            <img alt="" src="assets/image/sportcar.jpg" />
                            <div className="products-description">
                                <h3>BMW i8</h3>
                                <h5>IDR. 350.000.000</h5>
                            </div>
                        </Link>
                    </div>
                    <div className="products-item">
                        <Link to="/ProductDetail">
                            <img alt="" src="assets/image/sportcar.jpg" />
                            <div className="products-description">
                                <h3>BMW i8</h3>
                                <h5>IDR. 350.000.000</h5>
                            </div>
                        </Link>
                    </div>
                    <div className="products-item">
                        <Link to="/ProductDetail">
                            <img alt="" src="assets/image/sportcar.jpg" />
                            <div className="products-description">
                                <h3>BMW i8</h3>
                                <h5>IDR. 350.000.000</h5>
                            </div>
                        </Link>
                    </div>
                </div>

                <h1>Products Land Rover</h1>
                <div className="products-container justify-content-center">
                    <div className="products-item">
                        <a href="/">
                            <img alt="" src="assets/image/mobilkecil.jpg" />
                            <div className="products-description">
                                <h3>Land Rover</h3>
                                <h5>IDR. 300.000.000</h5>
                            </div>
                        </a>
                    </div>
                    <div className="products-item">
                        <a href="/">
                            <img alt="" src="assets/image/mobilkecil.jpg" />
                            <div className="products-description">
                                <h3>Land Rover</h3>
                                <h5>IDR. 300.000.000</h5>
                            </div>
                        </a>
                    </div>
                    <div className="products-item">
                        <a href="/">
                            <img alt="" src="assets/image/mobilkecil.jpg" />
                            <div className="products-description">
                                <h3>Land Rover</h3>
                                <h5>IDR. 300.000.000</h5>
                            </div>
                        </a>
                    </div>
                </div>

            </Container>
        </>
    );
};

export default Products;