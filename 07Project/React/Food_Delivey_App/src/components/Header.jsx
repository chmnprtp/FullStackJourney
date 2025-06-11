import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [updateLoginBtn, setUpdateLoginBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-green-100 shadow-lg h-30">
      <div className="">
        <img className="w-40 h-30 ml-2" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus? "✅" : "🔴"}</li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/about">About Us</Link></li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocery">Grocery</Link></li>
          <li className="px-4">Cart</li>
          {/* toggle effect */}
          <button className="login" onClick={() => { 
            updateLoginBtn === "Login" ? setUpdateLoginBtn("Logout") : setUpdateLoginBtn("Login");
          }}>
            {updateLoginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
