import React from "react";
import "./style.searchInput.css";

export default function SearchInput() {
  return (
    <div className="search-input-wrapper">
      <label htmlFor="search" className="search-input">
        <button>
          <i className="fas fa-search"></i>
        </button>
        <input
          type="text"
          name="search"
          id="search"
          className="input-element"
          placeholder="Search or start new chat"
        />
      </label>
    </div>
  );
}
