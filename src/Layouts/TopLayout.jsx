import React from 'react'
import {NavLink, Outlet} from "react-router-dom"
import { Phone, Heart, User, ShoppingBag } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'; 

const TopLayout = () => {
    const activeStyle={
        "color": "#c29865",
        "textDecoration":"underline",
        
    }
  return (
    <>
    <nav className="navbar">
      <div className="nav-links">
        <NavLink 
        to="men"
        style={({isActive})=> isActive ? activeStyle : null}>
            Men
        </NavLink>
        <NavLink 
        to="women"
        style={({isActive})=> isActive ? activeStyle : null}>
            Women
        </NavLink>
        <NavLink 
        to="jewellery"
        style={({isActive})=> isActive ? activeStyle : null}>
            Jewellery
        </NavLink>
        <NavLink 
        to="electronic"
        style={({isActive})=> isActive ? activeStyle : null}>
            Electronic
        </NavLink>
        <NavLink 
        to="discover"
        style={({isActive})=> isActive ? activeStyle : null}>
            Discover More
        </NavLink>
      </div>
      <NavLink to="/" className="home-link">
          ShopSphere
        </NavLink>

      <div className="nav-icons">
        <Phone className="icon" />
        <Heart className="icon" />
        <User className="icon" />
        <ShoppingBag className="icon" />
      </div>
    </nav>
    <Outlet/>
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="new">New Arrivials</NavLink>
            </li>
            <li>
              <NavLink to="men">Men</NavLink>
            </li>
            <li>
              <NavLink to="women">Women</NavLink>
            </li>
            <li>
                <NavLink to="jewellery">Jewellery</NavLink>
            </li>
            <li>
                <NavLink to="electronic">Electronics</NavLink>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />  Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />  Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />  Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />  LinkedIn
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />  YouTube
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-newsletter">
          <h3>Subscribe to Our Newsletter</h3>
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
        </div>

        <div className="footer-company-info">
          <h3>Company Info</h3>
          <p>Londan, UK</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: shopsphere@example.com</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-left">
          <p>&copy; 2025 My Website. All rights reserved.</p>
        </div>
        <div className="footer-bottom-right">
          <select>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
      </div>
    </footer>
    </>
  )
}

export default TopLayout