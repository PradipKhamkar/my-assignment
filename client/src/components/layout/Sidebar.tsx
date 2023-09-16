import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import "../../pages/Home.css";
const Sidebar = () => {
  const navData = [
    {
      icon: require("../../assets/images/homeIcon.png"),
      name: "Home",
      path: "home",
    },
    {
      icon: require("../../assets/images/categoryIcon.png"),
      name: "Category",
      path: "category",
    },
    {
      icon: require("../../assets/images/productsIcon.png"),
      name: "Products",
      path: "product",
    },
  ];
  const location = useLocation();

  return (
    <nav className="">
      {navData.map((navItem, index) => (
        <NavLink
          to={navItem.path}
          className={` ${
            location.pathname.includes(navItem.path) ? "bg-[#FFF8B7]" : ""
          }  flex justify-between items-center p-3 cursor-pointer mb-5 px-4`}
          key={index}
        >
          <div className="flex gap-4 items-center justify-center">
            <img src={navItem.icon} alt="" className="w-6" />
            <h1 className="text-base">{navItem.name}</h1>
          </div>
          <div>
            <img
              src={require("../../assets/images/arrowIcon.png")}
              alt=""
              className="w-2"
            />
          </div>
        </NavLink>
      ))}
    </nav>
  );
};

export default Sidebar;
