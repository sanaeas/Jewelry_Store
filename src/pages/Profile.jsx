import axios from "axios";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ProfileImg from "../assets/user-profile.png";
import ShopNavbar from "../components/ShopNavbar";
import "../styles/Profile.css";
import { useStateValue } from "../useStateValue";

const Profile = () => {
  const [{ user, products }, dispatch] = useStateValue();
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const verifyCookie = async () => {
      if (cookies.token !== undefined) {
        try {
          const { data } = await axios.post(
            "http://localhost:3000",
            {},
            { withCredentials: true }
          );
          const { status, username, email } = data;
          dispatch({
            type: "SET_USER",
            user: status ? { username, email } : null,
          });
          if (status) {
            toast(`Hello ${username}`, {
              position: "top-right",
            });
          } else {
            removeCookie("token");
            navigate("/login");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
    verifyCookie();

    const fetchOrders = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3000/api/orders?user=${user.email}`
        );
        setOrders(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cookies, navigate, removeCookie, dispatch]);

  const Logout = () => {
    removeCookie("token");
    dispatch({
      type: "SET_USER",
      user: null,
    });
    navigate("/login");
  };

  function find(productId) {
    const found = products.find((product) => product._id == productId);
    return found;
  }

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
                          Ordered:{' '}
                          <span>
                            {format(order.createdAt, 'EEE dd MMM yyyy')}
                          </span>
                        </h4>
                        <p className="order__total">${order.total}</p>
                      </div>
                      {order.items.map((product) => (
                        <div key={product._id} className="order__product">
                          <div className="order__product--img">
                            <img
                              src={find(product.product).img_url}
                              alt={`${find(product.product).name} Image`}
                            />
                          </div>
                          <div className="order__product--details">
                            <h5 className="order__product--name">
                              {find(product.product).name}
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
