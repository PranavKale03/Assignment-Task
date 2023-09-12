import React from "react";
import item from "../../assets/Item.png";
import cancel from "../../assets/cancel.svg";
import "./style.css";

const ItemCard = (props) => {
  return (
    <div className="mb-4 itemCard" style={{ maxWidth: 740 }}>
      <div className="row">
        <div className="col-md-4 p-4">
          <img src={item} className="img-fluid rounded-start" alt="item" />
        </div>
        <div className="col-md-6 mt-5">
          <div className="card-body">
            <p className="card-title">{props.item.title}</p>
            <p className="card-text">
              <span style={{ color: "#001C30", fontWeight: 500 }}>
                &#8377;{props.item.discountedPrice}
              </span>
              <span
                style={{
                  color: "#73777B",
                  textDecoration: "line-through",
                  marginLeft: "1rem",
                }}
              >
                &#8377;{props.item.price}
              </span>
              <span style={{ color: "#EB2606", marginLeft: "1rem" }}>
                {props.item.discount}
              </span>
            </p>
            <p className="card-text">
              <span>Get it {props.item.date}</span>
              <span style={{ marginLeft: "1rem" }}>{props.item.delivery}</span>
            </p>
            <p className="card-text">{props.item.buyCondition}</p>
          </div>
        </div>
        <div className="col-md-2 justify-content-sm align-items-center card-right-section">
          <img
            src={cancel}
            alt="Cancel"
            onClick={() => {
              props.removeItem(props.index);
            }}
          />
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-decrement"
              onClick={() => {
                props.decrementQuantity(props.index);
              }}
            >
              -
            </button>
            <button type="button" className="btn btn-count">
              {props.item.quantity}
            </button>
            <button
              type="button"
              className="btn btn-increment"
              onClick={() => {
                props.incrementQuantity(props.index);
              }}
            >
              +
            </button>
          </div>
          <p style={{ color: "#001C30", fontWeight: 500 }}>
            &#8377;{props.totalAmount}
          </p>
          <p className="btn-wishlist">Add to Wishlist</p>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
