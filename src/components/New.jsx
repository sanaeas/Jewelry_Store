import "../styles/Products.css";
import { useStateValue } from "../useStateValue";
import SingleProduct from "./SingleProduct";

const New = () => {
  const [{ products }] = useStateValue();

  return (
    <section id="new">
      <div className="container">
        <h2 className="section__title">New Arrivals</h2>
        <div className="products">
          {products.slice(0, 4).map((prod) => (
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
  );
};

export default New;
