import React from 'react'
import offer from '../../assets/offer.svg'

import './style.css'

const OfferList = () => {
  return (
    <div className='offerContainer'>
        <div className='offerList'>
            <img src={offer} alt='Offer' />
            <p>OFFER LIST</p>
        </div>
        <div className='offerDetails'>
            <li>Whistles! Get extra 20% Cashback on prepaid orders above Rs.499. Coupon code - NEW20.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
        </div>
        <div className='shipping'>
            <p>Get Free <span style={{fontWeight: 700}}>Shipping</span> for orders over <span style={{color: 'red'}}>$10,000.00</span></p>
        </div>
    </div>
  )
}

export default OfferList