import React from "react";
import Image from "next/image";

// assets
import logo_red from "/assets/images/logo_red.png";
import { FiUser, FiHeart, FiSearch } from "react-icons/fi";
import { AiOutlineSync } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoStorefrontOutline } from "react-icons/io5";

export default function Navbar() {
  return (
    <section className="container mx-auto">
      <div className="flex justify-between py-7 items-center">
        <div className="flex justify-center items-center">
          <Image src={logo_red} />
        </div>
        <div className="flex space-x-10 justify-center items-center">
          <ul className="md:flex space-x-8 hidden justify-center items-center">
            <li className="nav-item">HOME</li>
            <li className="nav-item">ABOUT US</li>
            <li className="nav-item">PAGES</li>
            <li className="nav-item">SHOP</li>
            <li className="nav-item">CONTACTS</li>
          </ul>
          <div className="sm:flex hidden space-x-4 justify-center items-center">
            <span className="nav-icon-button">
              <FiUser />
            </span>
            <span className="nav-icon-button">
              <AiOutlineSync />
              <span className="badge">0</span>
            </span>
            <span className="nav-icon-button">
              <FiHeart />
              <span className="badge">0</span>
            </span>
            <span className="nav-icon-button">
              <BsHandbag />
              <span className="badge">0</span>
            </span>
          </div>
          <span className="text-dark-gray text-4xl px-2 md:hidden">
            <GiHamburgerMenu />
          </span>
        </div>
      </div>
      <div className="bottom-nav-bar">
        <div className="bottom-nav-button">
          <span className="bottom-nav-icon">
            <IoStorefrontOutline />
          </span>
          <p className="botton-nav-title">Store</p>
        </div>
        <div className="bottom-nav-button">
          <span className="bottom-nav-icon">
            <FiSearch />
          </span>
          <p className="botton-nav-title">Search</p>
        </div>
        <div className="bottom-nav-button">
          <span className="bottom-nav-icon">
            <FiHeart />
          </span>
          <p className="botton-nav-title">Wishlist</p>
        </div>
        <div className="bottom-nav-button">
          <span className="bottom-nav-icon">
            <BsHandbag />
          </span>
          <p className="botton-nav-title">Cart</p>
        </div>
        <div className="bottom-nav-button">
          <span className="bottom-nav-icon">
            <FiUser />
          </span>
          <p className="botton-nav-title">Account</p>
        </div>
      </div>
    </section>
  );
}
