import { useStateValue } from "../useStateValue";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

// eslint-disable-next-line react/prop-types
const CartProduct = ({ id, image, quantity, name, price }) => {
  const [, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  const updateQuantity = (value) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      id: id,
      quantity: +value,
    });
  };

  return (
    <div className="cart__product">
      <div className="cart__product--info">
        <div className="cart__product--img">
          <img src={image} alt={name} />
        </div>
        <div className="cart__product--info-remove">
          <div>
            <h2 className="cart__product--title">{name}</h2>
            <p className="cart__product--type">${price}</p>
          </div>
          <div className="remove__product" onClick={removeFromCart}>
            <DeleteOutlinedIcon />
          </div>
        </div>
      </div>
      <div className="cart__product--price">
        <h3 className="product__price">
          $<span>{(price * quantity).toFixed(2)}</span>
        </h3>
        <input
          type="number"
          min={1}
          value={quantity}
          onChange={(e) => updateQuantity(e.target.value)}
          className="product__quantity"
        />
      </div>
    </div>
  );
};

export default CartProduct;
