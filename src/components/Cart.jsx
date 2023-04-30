// import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import CartProduct from "./cart/CartProduct";

export default function Cart() {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  let total = 0;
  return (
    <div className="cartContainer container">
      <div className="row">
        <div className="col-md-6">
          {state?.map((cartProduct) => {
            return (
              <CartProduct cartProduct={cartProduct} dispatch={dispatch} />
            );
          })}
          {state.length === 0 && (
            <div className="emptyCart container text-center">
              <h1 className="row heading m-3 text-center">
                {" "}
                No hay productos en el carrito
              </h1>
              <div className="row text-center">
                <Link to="./products" className="btn btn-large btn-primary">
                  Ir a la joyería
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className="col-md-6 statusContainer">
          <h2>Total</h2>
          <script>{state.map((x) => {
            total += x.sub_total;
            return total;
          })}</script>
          <div className="total"> $ { parseFloat(total).toFixed(2)}</div>
          <button className="btn btn-light">Checkout</button> 
        </div>
        
      </div>
    </div>
  );
}
