import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
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
    <h1>Similar Results</h1>
    <div className="electronics-maincontainer">
      <div className="electronics-sidediv">
      <NavLink className="navlink-names splnames" to="/mobile/iphone">Iphone</NavLink>
      <NavLink className="navlink-names splnames" to="/mobile/mimobiles">Mi mobiles</NavLink>
     <NavLink className="navlink-names splnames" to="/laptop/lenovolaptops">Lenovo</NavLink>
    <NavLink className="navlink-names splnames" to="/laptop/hplaptops">Hp</NavLink>
    <NavLink className="navlink-names splnames" to="/fashion/mensfashion">Mens</NavLink>
    <NavLink className="navlink-names splnames" to="/fashion/womensfashion">Womens</NavLink>
      </div>
      <div className="electronics-conatiner">
        {data.map((item, index) => {
               const {
                id = item.id,
                image = item.image,
                price = (item.price),
                model = item.model,
                quantity = (item.quantity),
              } = item;
          return (
            
            <div key={index} className="electronics-child_conatinercard">
              <NavLink to={`/detailpage/${item.id}`} className="specialdivnavlink">
              <div>
              <p>{item.model}</p>
             <div className="electronics-child_containercard-image">
             <img
                src={item.image}
                alt="Not Found"
              />
             </div>
            
              <p>Price:{item.price}</p>
              <h4>
                {item.RAM} {item.ROM}<br></br>
                </h4>
              </div>
              </NavLink>
                <button className="electronics-commonbutton" onClick={() =>
                    dispatch(addtoCart({ id, image, price, quantity, model }))
                  }>Buy Now</button>
            </div>
           
          );
        })}
      </div>
    </div>
  </>
  );
};

export default SearchProduct;