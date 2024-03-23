import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartProduct from '../components/CartProduct';
import ShopNavbar from '../components/ShopNavbar';
import '../styles/Cart.css';
import { useStateValue } from '../useStateValue';

const Cart = () => {
  const [{ cart, user }] = useStateValue();
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let total = cart.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.quantity,
      0
    );
    setTotal(total);
  }, [cart]);

  const handlePayment = () => {
    if (!user) {
      return navigate('/login');
    }
    fetch('http://localhost:3000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: user.email,
        cart: cart,
      }),
    })
      .then((response) => {
        if (response.ok) return response.json();
        return response.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((err) => {
        console.error(err.error);
      });
  };

  return (
    <>
      <ShopNavbar />
      <main>
        <section id="cart">
          <div className="container">
            <h1 className="cart__title">My Cart</h1>
            <div className="cart__wrapper">
              <div className="cart__products">
                {cart.map((product) => (
                  <CartProduct
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price.toFixed(2)}
                    quantity={product.quantity}
                  />
                ))}
              </div>
              <div className="order__summary">
                <h3 className="order__summary--title">Order Summary</h3>
                <div className="order__subtotal">
                  <h4>{cart.length} items</h4>
                  <h4>${total.toFixed(2)}</h4>
                </div>
                <div className="order__total">
                  <p>Shipping:</p>
                  <p>
                    <span>Free</span>
                  </p>
                </div>
                <div className="order__total">
                  <p>Total:</p>
                  <p className="order__total--price">
                    $<span>{total && total.toFixed(2)}</span>
                  </p>
                </div>
                <div className="order__checkout">
                  <Link onClick={handlePayment}>Checkout</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Cart;
