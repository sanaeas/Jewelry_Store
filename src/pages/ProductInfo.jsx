import { Link, useParams } from "react-router-dom";
import ShopNavbar from "../components/ShopNavbar";
import "../styles/ProductInfo.css";
import { useStateValue } from "../useStateValue";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SingleProduct from "../components/SingleProduct";

const ProductInfo = () => {
  const { id } = useParams();
  const [{ products, cart }, dispatch] = useStateValue();

  const product = products.find((product) => product._id === id);

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: product._id,
        name: product.name,
        image: product.img_url,
        price: product.price,
        quantity: 1,
      },
    });
  };

  function existOnCart() {
    return cart.find((product) => product.id === id);
  }

  const similarProducts = products.filter(
    (pro) => pro.category === product.category
  );

  return (
    <>
      <ShopNavbar />
      <main>
        <section id="product-info">
          <div className="container">
            <div className="product-info">
              <div className="product-info__img">
                <img src={product.img_url} alt="" />
              </div>
              <div className="product-info__details">
                <h2 className="product-info__title">{product.name}</h2>
                <p className="product-info__price">
                  ${product.price.toFixed(2)}
                </p>
                <p className="product-info__color">
                  Color: <span>{product.color}</span>
                </p>
                <div className="product-info__description">
                  <h3>Description:</h3>
                  <p>{product.description}</p>
                </div>
                <div className="product-info__btn">
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
            </div>
          </div>
        </section>

        <section id="similar">
          <div className="container">
            <h2 className="section__title">Similar Products</h2>
            <div className="products">
              {similarProducts.slice(0, 4).map((prod) => (
                <SingleProduct
                  key={prod._id}
                  id={prod._id}
                  name={prod.name}
                  price={prod.price}
                  image={prod.img_url}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ProductInfo;
