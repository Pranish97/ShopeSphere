import { useEffect, useState } from "react";
import BackgroundImg from "../assets/images/background.jpg";
import { NavLink, Outlet } from "react-router-dom";
import { Outdent } from "lucide-react";

const MyComponent = () => {
    const activeStyle={
        "color": "#c29865",
        "textDecoration":"underline",
        
    }

  return (
    <>
    <div className="home-container">
      <img src={BackgroundImg} alt="Shop Banner" />
      <div className="home-content">
        <h1>Discover Fashion, Tech & Elegance</h1>
        <p>
          Upgrade your style with trendy clothing, cutting-edge electronics, and
          timeless jewelry – all in one place.
        </p>
        <button><NavLink to="discover">Discover More</NavLink></button>
      </div>
    </div>
    <h1 className="home-title">All Products</h1>
    <nav className="homebar">
        <div className="home-links">
        <NavLink to="."
        style={({isActive})=> isActive ? activeStyle : null}>
            All
        </NavLink>
        <NavLink to="menProducts"
        style={({isActive})=> isActive ? activeStyle : null}>
            Men
        </NavLink>
        <NavLink to="womenProducts"
        style={({isActive})=> isActive ? activeStyle : null}>
            Women
        </NavLink>
        <NavLink to="jewelleryProducts"
        style={({isActive})=> isActive ? activeStyle : null}>
            Jewellery
        </NavLink>
        <NavLink to="electronicProducts"
        style={({isActive})=> isActive ? activeStyle : null}>
            Electronic
        </NavLink>
        </div>
    </nav>
    <Outlet/>
    </>
  );
};

export default MyComponent;
