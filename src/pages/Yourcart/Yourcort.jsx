import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { GrFavorite } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";

export const YourCart = () => {
  const {
    cart,
    removeFromCart,
    addToFavorites,
    decreaseQuantity,
    increaseQuantity,
    removeFromFavorites,
    favorites,
  } = useCart();

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  const handleDecreaseQuantity = (id) => {
    decreaseQuantity(id);
  };

  const handleIncreaseQuantity = (id) => {
    increaseQuantity(id);
  };

  const calculateTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const [discount, setDiscount] = useState(0);
  const [totalWithDiscount, setTotalWithDiscount] = useState(0);

  useEffect(() => {
    setTotalWithDiscount(calculateTotal() - discount);
  }, [discount, cart]);

  const handleAddToFavorites = (item) => {
    if (favorites && favorites.find((favorite) => favorite.id === item.id)) {
      removeFromFavorites(item.id);
    } else {
      addToFavorites(item);
    }
  };

  return (
    <div className="container">
      <div className="card_info">
        <div className="card_info_text">
          <h2 className="card_info_title">Summary</h2>
          <button className="order">Enter Discount Coupon Here</button>
          <hr />
          <div className="total_info">
            <p>
              Sub-total<span>€{calculateTotal().toFixed(2)}</span>
            </p>
            <p>
              Shipping<span>€3.98</span>
            </p>
            <p>
              TAX<span>€27.97</span>
            </p>
          </div>
          <hr />
          <h3>
            Total <span>€{totalWithDiscount.toFixed(2)}</span>{" "}
          </h3>
          <p className="total__info">
            Sub-total<span>€{calculateTotal().toFixed(2)}</span>
          </p>
        </div>
      </div>
      <div className="card_block">
        <ul className="card__left">
          {cart.map((item) => (
            <li className="card__wrapper" key={item.id}>
              <div className="card__img">
                <img src={item.image} alt="" />
              </div>
              <div className="card__info">
                <h2>{item.price}</h2>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="card__btns">
                  <button
                    className="cart__btn__like"
                    onClick={() => handleAddToFavorites(item)}
                  >
                    <GrFavorite />
                  </button>
                  <button
                    className="cart__btn"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    <MdDeleteForever />
                  </button>
                  
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default YourCart;
