import React from 'react'
// import { auth } from '../config/firebase';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { image } from '../components/Images';
import { removeProductToCart } from '../config/redux/action';
import { useSelector, useDispatch } from 'react-redux';


const Cart = () => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.productOrder);
  const subTotalPrice = data.reduce(
    (acc, curr) => acc + curr.price * curr.quantity * 1000,
    0
  );
  const tax = ((10 / 100) * subTotalPrice);
  const totalPrice = (subTotalPrice + parseFloat(tax));


  return (
    <div>
      {/* <!-- Cart Items Details --> */}
      <div className="small-container cart-page bg-light vh-100">
        <table>
          <tr>
            <th>Product</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>
                <div className="cart-info">
                  <img src={image[item.image]} alt="" />
                  <div>
                    <p>{item.name}</p>
                    <small>$ {item.price}</small>
                    <br />
                    <Link to="/Cart" onClick={() => dispatch(removeProductToCart(item))}>Remove</Link>
                  </div>
                </div>
              </td>
              <td><input
                type="number"
                style={{
                  textAlign: 'center',
                  width: '60px',
                  marginRight: '10px'
                }}
                defaultValue={item.quantity}
                min={1}
                onClick={e => dispatch({
                  type: 'CHANGE_QUANTITY_ITEM',
                  value: e.target.value,
                  id: item.id
                })} />
              </td>
              <td>$ {item.price * item.quantity * 1000}</td>
            </tr>
          ))}
        </table>

        <div className="total-price">
          <table>
            <tr>
              <td>Subtotal</td>
              <td>$ {subTotalPrice}</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>$ {tax}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td>$ {totalPrice}</td>
            </tr>
            <button className='btncart'>Process Checkout</button>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;