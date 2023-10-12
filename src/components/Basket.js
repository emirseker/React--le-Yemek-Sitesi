import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BasketItem from './BasketItem';
import { clearCart } from '../control/cartSlice';
import '../styles/Basket.css'

function Basket() {
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector((store) => store.cart);
  
  return (
    <>
      {total < 1 ? (
        <section className="cart">
          <header>
            <h2>Sepetim</h2>
            <h4>bomboş</h4>
          </header>
          <div>
            {cartItems.map((item) => {
              return <BasketItem key={item.id} {...item} />;
            })}
          </div>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2>Sepetim</h2>
          </header>
          <footer>
            <hr />
            <div>
              <h4>
                Toplam Tutar <span>{total} TL</span>
              </h4>
            </div>
            <button
              className="cartClearButton"
              onClick={() => dispatch(clearCart())}
            >
              Temizle
            </button>
          </footer>
          <div>
            {cartItems.map((item) => {
              return <BasketItem key={item.id} {...item} />;
            })}
          </div>
          
        </section>
      )}
    </>
  );
}

export default Basket;
