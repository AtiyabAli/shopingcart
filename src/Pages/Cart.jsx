import { useContext } from "react";
import { CartContext } from "../features/ContextProvider";
import CartProducts from "../components/CartProducts";
import { totalItem, totalPrice } from "../features/CartReducer";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="container m-3">
      <div className="row">
        <div className="col-8">
          {cart.map((p) => (
            <CartProducts product={p} />
          ))}
        </div>
        <div className="col-4">
            <div className="bg-secondary">
                <h5>Total Item : {totalItem(cart)}</h5>
                <h5>Total Price : ${totalPrice(cart)}</h5>
                <button>Check out</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
