import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PropTypes from "prop-types";
import "../styles/Products.css";
import { Link } from "react-router-dom";

const SingleProduct = ({ id, name, price, image }) => {
  return (
    <div className="product">
      <Link to={`/shop/${id}`}>
        <figure className="product__img">
          <img src={image} alt="" />
        </figure>
      </Link>
      <Link to={`/shop/${id}`}>
        <h3 className="product__name">{name}</h3>
      </Link>
      <div className="price__btn--wrapper">
        <p className="product__price">${price.toFixed(2)}</p>
        <div className="product__btn">
          Add To Cart
          <ShoppingCartIcon />
        </div>
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
