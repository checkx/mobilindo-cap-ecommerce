import React, { useState } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAllProducts } from '../hooks/useAllProducts';
import { Col, Container, Row } from 'reactstrap';
import { image } from '../components/Images';
import { useDispatch } from 'react-redux';
import { addProductToCart } from "../config/redux/action";
import swal from 'sweetalert';

const ProductDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let data = useAllProducts(id);
  let product = data.apiData;
  const [user] = useAuthState(auth);
  const [detailOrder, setDetailOrder] = useState({
    quantity: 0
  });

  const handleAddToCart = () => {
    const { id, name, description, image, price } = product;
    const { quantity } = detailOrder;
    const data = { id, name, description, image, price, quantity };
    if (!user){
      swal("You Must Login!", "Please Login First", "warning");
      navigate("/Login");
    } else if (quantity < 1) {
      swal("Failed add to cart!", "Please fill quantity item before add to cart!", "warning");
    } else {
      dispatch(addProductToCart(data));
      swal("Success", "Success Add to cart", "success");
      navigate("/Cart");
    }
  };

  return (
    <>
      {/* <!-- main contain --> */}
      <Container className='small-container min-vh-100'>
        <Row style={{
          marginTop: '30px'
        }}>
          <Col xs='12' md='6' className='text-center product-detail'>
            <img alt="" className='rounded' src={image[product.image]} width='450px' height='450px' />
          </Col>
          <Col xs='12' md='6'>
            <h2>{product.name}</h2>
            <h4>$ {product.price}</h4>
            <input type="number" min="0" defaultValue={"0"}
              style={{
                padding: '5px',
                textAlign: 'center',
                width: '60px',
                marginRight: '10px'
              }}
              onChange={e =>
                setDetailOrder({ ...detailOrder, quantity: e.target.value })}
            />
            <br />
            <button className="btncart" onClick={handleAddToCart}>Add to Cart</button>
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