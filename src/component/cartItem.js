import * as React from "react";
import {
  divCartItem,
  divCartItemDetails,
  divCartItemName,
  divItemPrice, divItemQuantity,
  imgCartItem, pItemDiscountPrice,
  pItemName, pItemPrice, pItemQuantity, pItemQuantityButton
} from "./cartItem.module.css";

const CartItem = (
  {name, cartImage, discountPrice, originalPrice, calculateTotalAmount}
) => {
  return (
    <div className={divCartItem}>
      <img alt={"Item"} src={cartImage} className={imgCartItem}/>
      <div className={divCartItemDetails}>
        <div className={divCartItemName}>
          <p className={pItemName}>{name}</p>
          <div className={divItemPrice}>
            <span className={pItemDiscountPrice}>${discountPrice}</span>
            &nbsp;&nbsp;
            <span className={pItemPrice}>${originalPrice}</span>
          </div>
        </div>
        <div className={divItemQuantity}>
          <p
            className={`material-icons ${pItemQuantityButton}`}
            onClick={() => calculateTotalAmount(-1*discountPrice)}
          >remove</p>
          <p className={pItemQuantity}>1</p>
          <p
            className={`material-icons ${pItemQuantityButton}`}
            onClick={() => calculateTotalAmount(discountPrice)}
          >add</p>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
