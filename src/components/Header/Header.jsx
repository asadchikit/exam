import React from "react";
import { LuHome } from "react-icons/lu";
import { SlBasket } from "react-icons/sl";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header_number_one">
          <div className="header_left">
            <Link to="/" >
            <button className="header_home_btn">
              <LuHome className="header_icon_btn" />
              Shop4Goodies
            </button>
            </Link>
          </div>
          <div className="header_header">
              <ul>
                <li className="header_link">
                  <Link to="/">Home</Link>
                </li>
                <li className="header_link">
                  <Link to="/admin">Admin </Link>
                </li>
              </ul>
            <Link to="/favorite" >
            <button className="header_korzina"><MdFavoriteBorder /> Favorites </button>
            </Link>
            <Link to="yourcrad" >
            <button className="header_korzina"><SlBasket className="header__btn__icon" /> Your cart </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
