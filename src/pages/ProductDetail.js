import React from 'react'
import { Link } from "react-router-dom";


const ProductDetail = () => {
  return (
    <div>
    {/* <!-- main contain --> */}
    <div className="small-container single-product">
      <div className="row">
        <div className="col-2">
          <img alt="" src="assets/image/sportcar.jpg" width="100%"/>
        </div>
        <div className="col-2">
          <h2>BMW i8 Limited</h2>
          <h4>IDR 350.000.000</h4>
          <Link to ="/Cart" className="btncart">Add to Cart</Link>
          <h3>Product Details<i className="fa fa-indent"></i></h3>
          <br />
          <p>
            Type Mesin : Turbocharged and intercooled gas/electric inline-3<br/>
            Kapasitas Silinder : 1.5 L/91<br/>
            Daya Maksimum : 357 @ 5800<br/>
            Torsi Maksimum : 420<br/>
            Fuel Delivery : Direct injection<br/>
            Kapasitas Bahan Bakar : 11.1 Gal
          </p>
        </div>
      </div>
    </div>


    </div>
  );
};

export default ProductDetail;