import React from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { removeItem, increase, decrease } from '../control/cartSlice';
import '../styles/Basket.css'

function BasketItem({ id, image, content, price, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="cartItem">
      <img src={image} alt="" />
      <div className="cartInfo">
        <h4>{id}</h4>
        <h4>{content}</h4>
        <h4>{price}TL</h4>
        <div>
          <button
            className="cartQuantityButton"
            onClick={() => {
              dispatch(increase(id));
            }}
          >
            <BsChevronUp />
          </button>
          <p className="cartQuantity">{quantity}</p>
          <button
            className="cartQuantityButton"
            onClick={() => {
              dispatch(decrease(id));
            }}
          >
            <BsChevronDown />
          </button>
        </div>
        <button
          className="cartDeleteButtton"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Sil
        </button>
      </div>
    </div>
  );
}

export default BasketItem;
