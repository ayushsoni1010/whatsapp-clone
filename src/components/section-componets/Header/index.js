import React from "react";
import "./style.header.css";
import profilePic from "../../../assets/profilePicture.png";

export default function Header() {
  return (
    <header className="header">
      <div className="header-profile">
        <a href="/">
          <img src={profilePic} alt="Profile Pic" />
        </a>
      </div>
      <div className="header-options-wrapper">
        <a href="/">
          <i className="fas fa-spinner"></i>
        </a>
        <a href="/">
          <i className="fas fa-plus"></i>
        </a>
        <button>
          <i className="fas fa-ellipsis-h"></i>
        </button>
      </div>
    </header>
  );
}
