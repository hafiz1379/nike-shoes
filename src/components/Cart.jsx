/* eslint-disable */
import CartItem from "./CartItem";

function Cart({ cartItems }) {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-5">Carts</h2>
      <ul className="space-y-5">
        {cartItems.map((cartItem) => <li key={cartItem.product.id}>
            <CartItem item={cartItem}/>
        </li>)}
      </ul>
    </div>
  );
}

export default Cart;
