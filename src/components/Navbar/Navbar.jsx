import React from "react";
import Logo from '../../assets/Logo.png'
import secureIcon from '../../assets/secureIcon.svg'
import cart from '../../assets/cart.svg'
import wallet from '../../assets/wallet.svg'
import order from '../../assets/order.svg'
import './style.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-custom">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={Logo}
              alt="Frikly"
              width={180}
              height={72}
            />
          </a>
          <div className='secureLogin'><img src={secureIcon} alt="Secure" /><span>100% Secure login</span></div>
        </div>
      </nav>
        <div className="navbar-sec">
          <div className="navbar-item">
              <div style={{backgroundColor: '#22333B'}}><img src={cart} alt="cart" /></div>
              <p>Shopping Cart</p>
          </div>
          <div className="navbar-item">
              <div><img src={wallet} alt="cart" /></div>
              <p>Checkout</p>
          </div>
          <div className="navbar-item">
              <div><img src={order} alt="cart" /></div>
              <p>Order Complete</p>
          </div>
        </div>
    </div>
  );
};

export default Navbar;
