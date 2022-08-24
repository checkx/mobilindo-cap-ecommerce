import React from 'react'
import { Link, useParams } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAllProducts } from '../hooks/useAllProducts';
import { Col, Container, Row } from 'reactstrap';
import { image } from '../components/Images';


const ProductDetail = () => {
  const{id} = useParams()
  let data = useAllProducts(id);
  let product = data.apiData;
  const [user] = useAuthState(auth);
  return (
    <>
    {/* <!-- main contain --> */}
    <Container className='vh-100'>
      <Row style={{
        marginTop: '30px'
      }}>
        <Col xs='12' md='6' className='text-center product-detail'>
        <img alt="" className='rounded' src={image[product.image]} width='450px' height='450px'/>
        </Col>
        <Col xs='12' md='6'>
        <h2>{product.name}</h2>
          <h4>{product.price}</h4>
          <Link to ={user ? "/Cart" : "/Login"} className="btncart">Add to Cart</Link>
          <h3>Product Details</h3>
          <p>
           {product.description}
          </p>
        </Col>
      </Row>
    </Container>

    </>
  );
};

export default ProductDetail;