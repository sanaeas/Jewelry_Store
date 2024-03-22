import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import ProfileImg from "../assets/user-profile.png";
import ShopNavbar from "../components/ShopNavbar";
import "../styles/Profile.css";
import { useStateValue } from "../useStateValue";

const orders = [
  {
    _id: "hbkacea89ebkyq32",
    createdAt: "DD MM YYYY",
    total: 309.98,
    items: [
      {
        _id: "o3bjk237t236w12vde",
        name: "Product number 1",
        img_url:
          "https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/31866/original/0-LABGROWNDIAMONDSBEZEL-BabyBezelSmallHoop-14K-Angled_024.jpg?1709934853",
        price: 98,
        quantity: 1,
      },
    ],
  },
];

const Profile = () => {
  const [{ user }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [, removeCookie] = useCookies([]);

  const Logout = () => {
    removeCookie("token");
    dispatch({
      type: "SET_USER",
      user: null,
    });
    navigate("/login");
  };

  return (
    <>
      <ShopNavbar />
      <main>
        <div className="container profile__wrapper">
          <div className="profile__left">
            <section id="user-profile">
              <div className="user-profile__wrapper">
                <div className="user__img">
                  <img src={ProfileImg} alt="Profile Picture" />
                </div>
                <div className="user__details">
                  <h3 className="user__details--username">
                    Hello, <span>{user?.username}</span>
                  </h3>
                  <p className="user__details--email">{user?.email}</p>
                  <p className="user__details--btn" onClick={Logout}>
                    Log out
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="profile__right">
            <section id="user-orders">
              <div className="user-orders__wrapper">
                <h3 className="user-orders__title">My Orders</h3>
                <div className="orders">
                  {orders?.map((order) => (
                    <div key={order._id} className="order">
                      <div className="order__heading">
                        <h4 className="order__title">
                          Ordered: <span>{order.createdAt}</span>
                        </h4>
                        <p className="order__total">${order.total}</p>
                      </div>
                      {order.items.map((product) => (
                        <div key={product._id} className="order__product">
                          <div className="order__product--img">
                            <img
                              src={product.img_url}
                              alt={`${product.name} Image`}
                            />
                          </div>
                          <div className="order__product--details">
                            <h5 className="order__product--name">
                              {product.name}
                            </h5>
                            <p className="order__product--qtt">
                              Quantity: {product.quantity}
                            </p>
                            <p className="order__product--price">
                              ${product.price} / Total: $
                              {product.price * product.quantity}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
