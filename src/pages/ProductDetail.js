import React from 'react'
import { Link, useParams } from "react-router-dom";
import { auth } from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useAllProducts } from '../hooks/useAllProducts';


const ProductDetail = () => {
  const{id} = useParams()
  let data = useAllProducts(id);
  let product = data.apiData;
  const [user] = useAuthState(auth);
  return (
    <div>
    {/* <!-- main contain --> */}
    <div className="small-container single-product">
      <div className="row">
        <div className="col-2">
          <img alt="" src={product.image} width="100%"/>
        </div>
        <div className="col-2">
          <h2>{product.name}</h2>
          <h4>{product.price}</h4>
          <Link to ={user ? "/Cart" : "/Login"} className="btncart">Add to Cart</Link>
          <h3>Product Details<i className="fa fa-indent"></i></h3>
          <br />
          <p>
           {product.description}
          </p>
        </div>
      </div>
    </div>


    </div>
  );
};

export default ProductDetail;