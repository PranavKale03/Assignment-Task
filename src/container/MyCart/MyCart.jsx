import React, {useState} from 'react'
import OfferList from '../../components/OfferList/OfferList';
import ItemList from '../ItemList/ItemList';
import Checkout from '../Checkout/Checkout';
import './style.css'

const MyCart = () => {

  const itemInfo = [
    {
      title: "Dorset Door Handles / Vitra - VIT OR HG",
      discountedPrice: 130,
      price: 160,
      discount: "50% off",
      date: "Tues, Jul 24",
      delivery: "FREE Fast Delivery",
      buyCondition: "To place an order, add at least 10 units to your cart.",
      quantity: 0,
    },
    {
      title: "Dorset Door Handles / Vitra - VIT OR HG",
      discountedPrice: 130,
      price: 160,
      discount: "50% off",
      date: "Tues, Jul 24",
      delivery: "Rs. 504 Shipping Charge",
      buyCondition: "To place an order, add at least 10 units to your cart.",
      quantity: 0,
    },
  ];

  let [itemList, setItemList] = useState(itemInfo);
  let [totalAmount, setTotalAmount] = useState(0);
  let [totalItem, setTotalItem] = useState(0)

  const incrementQuantity = (index) => {
    let newItemList = [...itemList];
    let newTotalAmount = totalAmount;
    newItemList[index].quantity++;
    newTotalAmount += newItemList[index].price;
    setTotalAmount(newTotalAmount);
    setItemList(newItemList);
  };

  const decrementQuantity = (index) => {
    let newItemList = [...itemList];
    let newTotalAmount = totalAmount;
    if (newItemList[index].quantity > 0) {
      newItemList[index].quantity--;
      newTotalAmount -= newItemList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setItemList(newItemList);
  };

  // const resetQuantity = () => {
  //   let newProductList = [...productList];
  //   newProductList.map((products) => {
  //     products.quantity = 0;
  //   });
  //   setProductList(newProductList);
  //   setTotalAmount(0);
  // };

  const removeItem = (index) => {
    let newItemList = [...itemList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newItemList[index].quantity * newItemList[index].price;
    newItemList.splice(index, 1);
    setItemList(newItemList);
    setTotalAmount(newTotalAmount);
  };

  // const addItem = () => {
  //   let newProductList = [...productList];
  //   newProductList.push({

  //   });
  //   setProductList(newProductList);
  // };    

  return (
    <div className='cartContainer'>
      <div className='leftSection'>
        <OfferList />
        <div className='cartCardList'>
          <p className='cartHeader'>My Cart</p>
          <ItemList
            itemList={itemList}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            removeItem={removeItem}
        />
        </div>
      </div>
      <div className='rightSection'>
        <Checkout  totalAmount={totalAmount}  />
      </div>
    </div>
  )
}

export default MyCart;