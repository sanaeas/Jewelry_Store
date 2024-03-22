import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import ShopNavbar from "../components/ShopNavbar";
import SingleProduct from "../components/SingleProduct";
import "../styles/Products.css";
import "../styles/Shop.css";
import { useStateValue } from "../useStateValue";

const Shop = () => {
  const [{ products }] = useStateValue();
  const { category } = useParams();

  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <>
      <ShopNavbar />
      <main>
        <section id="shop">
          <div className="container">
            <h2 className="shop__title">Shop</h2>
            <div className="products">
              {filteredProducts.map((product) => (
                <SingleProduct
                  key={product._id}
                  id={product._id}
                  name={product.name}
                  price={product.price}
                  image={product.img_url}
                />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Shop;
