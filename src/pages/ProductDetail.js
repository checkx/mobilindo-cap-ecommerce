import React, { useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAllProducts } from '../hooks/useAllProducts';
import { Col, Container, Row } from 'reactstrap';
import { image } from '../components/Images';
import { useDispatch } from 'react-redux';
import { addProductToCart } from "../config/redux/action";


const ProductDetail = () => {
  const{id} = useParams()
  const dispatch = useDispatch();
  let data = useAllProducts(id);
  let product = data.apiData;
  const [user] = useAuthState(auth);
  const [detailOrder, setDetailOrder] = useState({
    quantity: 0
  });

  const handleAddToCart = () => {
    const { id, name, description, image, price} = product;
    const { quantity } = detailOrder;
      const data = { id, name, description, image, price, quantity };
      if (quantity === 0) {
        alert("Fill Quantity");
      } else {
        dispatch(addProductToCart(data));
        alert('Added to cart');
      }
  };

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
          <h4>$ {product.price}</h4>
          <input type="number" min="0" max="3" defaultValue={"0"}
                style={{padding: '5px',
                  textAlign: 'center',
                  width: '60px',
                  marginRight: '10px'}}
                onChange={e =>
                setDetailOrder({ ...detailOrder, quantity: e.target.value })}
              />
              <br/>
          <Link to ={user ? "#" : "/Login"} className="btncart" onClick={handleAddToCart}>Add to Cart</Link>
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