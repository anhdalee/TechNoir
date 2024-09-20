import React from 'react'
import "./Header.css"
import { assets } from '../../assets/assets'
const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="grid">
          <div className="header-with-search">
            <div className="header__logo">
              <img src={assets.logo} alt="" />
            </div>
            <div className="header__search-box">
              <select className="product-dropdown">
                <option>Các sản phẩm</option>
              </select>
              <input
                type="text"
                className="search-input"
                placeholder="Bạn đang tìm kiếm gì?"
              />
              <button className="search-button">
                <i className="search-icon" /> Tìm kiếm
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header
