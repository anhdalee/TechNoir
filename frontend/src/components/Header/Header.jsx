import React, { useState } from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
const Header = () => {
  const [isListVisible, setIsListVisible] = useState(false);

  // Hiển thị danh sách khi input được focus
  const handleFocus = () => {
    setIsListVisible(true);
  };

  // Ẩn danh sách khi input mất focus
  const handleBlur = () => {
    // Thêm một khoảng thời gian nhỏ để xử lý khi click vào mục danh sách
    setTimeout(() => {
      setIsListVisible(false);
    }, 200);
  };
  return (
    <div>
      <header className="header">
        <div className="grid">
          <div className="header-with-search">
            <div className="header__logo">
              <img src={assets.logo} alt="" />
            </div>
            <div className="header__search">
              <div className="header__search-box">
                <input
                  type="text"
                  className="search-input"
                  placeholder="Bạn đang tìm kiếm gì?"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
                <button className="search-button">
                  <i className="search-icon" /> Tìm kiếm
                </button>
              </div>
              {/* Hiển thị danh sách gợi ý nếu isListVisible là true */}
              {isListVisible && (
                <div className="header__search-list">
                  <ul className="search__list">
                    <li className="search__list-item">Iphone 16 Pro Max</li>
                    <li className="search__list-item">SamSung S23 Utral</li>
                    <li className="search__list-item">Laptop Asus Gamming</li>
                  </ul>
                </div>
              )}
            </div>
            <div className="header-container">
              <div className="header-right">
                <div className="language-currency">
                  <span>English-USD</span>
                </div>
                <div className="user-actions">
                  <span>Sign in</span>
                  <span>Sign up</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
