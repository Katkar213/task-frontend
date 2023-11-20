import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { addtoCart } from "../Component/Redux/Slicing";
import { useDispatch } from "react-redux";
const SearchProduct = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  console.log(location);
  const [data] = location.state;
  console.log(data)
  return (
    <>
   <h1>hello</h1>
      <div className="Welcome">Mobile & Accessories</div>
      <div className="maincontainer">
        <div className="sidediv">
          <Link className="sidebarLink" to="/mobile/iphone">
            Iphone
          </Link>
          <Link className="sidebarLink" to="/mobile/oneplus">
            Oneplus
          </Link>
          <Link className="sidebarLink" to="/mobile/samsung">
            Samsung
          </Link>
          <Link className="sidebarLink" to="/">
            Home
          </Link>
          <Link className="sidebarLink" to="/electronic">
            Electronic
          </Link>
          <Link className="sidebarLink" to="/clothes">
            Clothes
          </Link>
        </div>
        <div className="conatiner">
          {data.map((item, index) => {
            const {
              id = item.id,
              image = item.image,
              price = parseInt(item.price),
              model = item.model,
              quantity = item.quantity,
            } = item;
            return (
              <div key={index} className="child_conatiner">
                <Link to={`/single/${item.id}`}>
                  <img
                    className="Mobile_image"
                    src={item.image}
                    alt="Not Found"
                  />
                </Link>
                <div className="modelName"> {item.model}</div>
                <div className="Price-of-All">{item.price}</div>
                <button
                  className="buttonforAll"
                  onClick={() =>
                    dispatch(addtoCart({ id, image, price, quantity, model }))
                  }
                >
                  Add Cart
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>
                <div></div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchProduct;