import "../styles/Products.css";
import "../styles/Shop.css";
import Footer from "../components/Footer";
import ShopNavbar from "../components/ShopNavbar";
import SingleProduct from "../components/SingleProduct";
import { useStateValue } from "../useStateValue";

const Shop = () => {
  const [{ products }] = useStateValue();

  return (
    <>
      <ShopNavbar />
      <main>
        <section id="shop">
          <div className="container">
            <h2 className="shop__title">Shop</h2>
            <div className="products">
              {products.map((product) => (
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
