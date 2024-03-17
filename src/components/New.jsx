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
          {products.map((prod) => (
            <SingleProduct
              key={prod.id}
              id={prod.id}
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
