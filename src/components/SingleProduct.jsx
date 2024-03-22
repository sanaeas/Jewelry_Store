import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../styles/Products.css";
import { useStateValue } from "../useStateValue";

const SingleProduct = ({ id, name, price, image }) => {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        name: name,
        image: image,
        price: price,
        quantity: 1,
      },
    });
  };

  function existOnCart() {
    return cart.find((product) => product.id === id);
  }

  return (
    <div className="product">
      <Link to={`/products/${id}`}>
        <figure className="product__img">
          <img src={image} alt="" />
        </figure>
      </Link>
      <Link to={`/products/${id}`}>
        <h3 className="product__name">{name}</h3>
      </Link>
      <div className="price__btn--wrapper">
        <p className="product__price">${price.toFixed(2)}</p>
        {existOnCart() ? (
          <Link to={`/cart`}>
            <div className="product__btn">Checkout</div>
          </Link>
        ) : (
          <div className="product__btn" onClick={addToCart}>
            Add To Cart
            <ShoppingCartIcon />
          </div>
        )}
      </div>
    </div>
  );
};

SingleProduct.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
};

export default SingleProduct;
