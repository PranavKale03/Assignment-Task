import React from "react";
import info from "../../assets/info.svg";
import "./style.css";

const Checkout = (props) => {
  return (
    <div className="checkout-container">
      <div className="coupon">
        <p className="coupon-header">COUPONS</p>
        <div className="coupon-details">
          <p>Lorem ipsum dolor sit amet</p>
          <button type="button" className="btn btn-outline-secondary">
            Apply
          </button>
        </div>
      </div>
      <div className="priceDetails">
        <p className="priceText">PRICE DETAILS ( ITEM) </p>
        <div>
          <p>Subtotal</p>
          <p>&#8377; {props.totalAmount}</p>
        </div>
        <div>
          <p>Discount On MRP</p>
          <p>&#8377; 0.0</p>
        </div>
        <div>
          <p>Coupon Discount</p>
          <p style={{color: '#C6AC8F', fontSize: '14px', fontWeight: 500}}>Not Applied</p>
        </div>
        <div>
          <p>
            Shipping Cost{" "}
            <span style={{ color: "#EB2606", textDecoration: "underline" }}>
              Change Pin
            </span>
          </p>
          <p style={{color: '#C6AC8F', fontSize: '14px', fontWeight: 500}}>Not Applied</p>
        </div>
        <div>
          <p>
            ODA Shipping Charges <img src={info} />
          </p>
          <p style={{color: '#C6AC8F', fontSize: '14px', fontWeight: 500}}>Not Applied</p>
        </div>
        <div className="pinContainer">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <button type="button" className="btn btn-light">Enter Pin Code</button>
        </div>
      </div>
      <div className="amount">
        <p>Total Amount</p>
        <p>&#8377; {props.totalAmount}</p>
      </div>
      <div className="checkoutBtn">
        <span>Checkout</span>|<span style={{color: '#FFF', fontSize: '14px', fontWeight: 600}}>&#8377; {props.totalAmount}</span> 
      </div>
    </div>
  );
};

export default Checkout;
