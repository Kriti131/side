import React from "react";
import "./Header.css";
import userData from "../assets/userdata";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <input
          type="text"
          placeholder="Search vehicle"
          className="search-bar"
        />
        <nav>
          <a href="#home"> Home </a> <a href="#features"> Features </a>{" "}
          <a href="#how-it-works"> How it works </a>{" "}
          <a href="#contact"> Contact </a>{" "}
        </nav>{" "}
      </div>{" "}
      <div className="header-right">
        <span> {userData.name} </span>{" "}
        <img src={userData.avatarUrl} alt="User Avatar" className="avatar" />
      </div>{" "}
    </header>
  );
};

export default Header;
s