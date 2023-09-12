import React from "react";
import ItemCard from "../../components/Card/ItemCard";

export default function ItemList(props) {
  return props.itemList.length > 0 ? (
    props.itemList.map((item, i) => {
      return (
        <ItemCard
          item={item}
          key={i}
          incrementQuantity={props.incrementQuantity}
          index={i}
          decrementQuantity={props.decrementQuantity}
          totalAmount={props.totalAmount}
          removeItem={props.removeItem}
        />
      );
    })
  ) : (
    <h1>No Products Exists in the Carts</h1>
  );
}