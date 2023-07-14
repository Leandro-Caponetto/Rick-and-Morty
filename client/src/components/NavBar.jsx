/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import style from "../styles/NavBar.module.css";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCharacters } from "../redux/actions";
import imagen from "../assets/images/icons8-logout-64.png"
import logo from "../assets/images/pngwing.com.png"
import menu from "../assets/images/icons8-menu-64.png"

export default function NavBar({  logout }) {
  const dispatch = useDispatch();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`${style.nav} ${menuOpen ? style.menuOpen : ""}`}>
      
      <div className={style.menuToggle} onClick={handleMenuToggle}>
        <img src={menu} alt="" />
      
      </div>

      <img className={style.logo} src={logo} alt="" />

      

      <div className={style.menuItems}>
        <Link className={style.home}  onClick={() => dispatch(resetCharacters())} to={"/home"}>
         <p>Home</p>
        </Link>
        <Link className={style.link} to={"/about"}>
          <p>About</p>
        </Link>
        <Link className={style.link} to={"/favorites"}>
          <p>Favorites</p>
        </Link>
        <Link className={style.link} to={"/create"}>
          <p>Create</p>
        </Link>

      </div>
        <Link className={style.link} to={"/"}>
        <a className={style.logout} href="#" onClick={logout}>
          <img src={imagen} alt="" /> 
          <p>logout</p>
        </a>
      </Link>
      
    </div>
  );
}
