import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [displayMenu, setDisplayMenu] = useState(false);
  const toggleMenu = () => {
    if (displayMenu === false) {
      setDisplayMenu(true);
    } else {
      setDisplayMenu(false);
    }
  };
  console.log(displayMenu);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="h-14 w-14 object-cover text-white text-lg">
          <img className="w-full object-cover" src={Logo} alt="logo" />
        </div>
        <div
          className={`${
            displayMenu ? "flex " : "hidden"
          } md:flex md:relative absolute right-0 top-14 md:top-0 flex-col md:flex-row text-right bg-gray-800 md:bg-transparent p-6 md:p-0 rounded-md gap-4 md:gap-10`}
        >
          <ul className="flex justify-end space-x-4 text-white">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/aboutus">About Us</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/teams">Teams</Link>
            </li>
          </ul>
        </div>
        <div className="flex md:hidden text-white" onClick={toggleMenu}>
          <IoIosMenu size={24} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
