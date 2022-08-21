import React from 'react'

const Cart = () => {
  return (
    <div>
    {/* <!-- Cart Items Details --> */}
    <div className="small-container cart-page">
      <table/>
        <tr>
          <th>Product</th>
          <th>Subtotal</th>
        </tr>
        <tr>
          <td>
            <div className="cart-info">
              <img src="assets/image/sportcar.jpg" alt="" />
              <div>
                <p>BMW i8</p>
                <small>IDR: 350.000.000</small>
                <br />
                <a href="/">Remove</a>
              </div>
            </div>
          </td>
          <td>Rp. 350.000.000</td>
        </tr>

        <div className="total-price">
          <table>
            <tr>
              <td>Subtotal</td>
              <td>Rp. 350.000.000</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>Rp. 35.000.000</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>Rp. 385.000.000</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;