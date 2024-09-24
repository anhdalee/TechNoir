import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { assets, menu_list } from "../../assets/assets";
const Header = ({ setShowLogin }) => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD - US Dollar");
  const dropdownRef = useRef(null); // Ref để theo dõi vùng dropdown

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  // Hàm để đóng dropdown nếu click ra ngoài vùng dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  // Sử dụng useEffect để thêm và loại bỏ sự kiện khi component mount/unmount
  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);
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
                <div className="language-currency" onClick={toggleDropdown}>
                  <span>
                    {language}-{currency.split(" ")[0]}
                  </span>
                </div>

                {isDropdownOpen && (
                  <div className="dropdown" ref={dropdownRef}>
                    <h3>Set language and currency</h3>
                    <p>
                      Select your preferred language and currency. You can
                      update the settings at any time.
                    </p>

                    <div className="dropdown-selection">
                      <label htmlFor="language">Language</label>
                      <select
                        id="language"
                        value={language}
                        onChange={handleLanguageChange}
                      >
                        <option value="English">English</option>
                        <option value="Vietnamese">Vietnamese</option>
                        <option value="Chinese">Chinese</option>
                      </select>
                    </div>

                    <div className="dropdown-selection">
                      <label htmlFor="currency">Currency</label>
                      <select
                        id="currency"
                        value={currency}
                        onChange={handleCurrencyChange}
                      >
                        <option value="USD - US Dollar">USD - US Dollar</option>
                        <option value="VND - Vietnamese Dong">
                          VND - Vietnamese Dong
                        </option>
                        <option value="CNY - Chinese Yuan">
                          CNY - Chinese Yuan
                        </option>
                      </select>
                    </div>

                    <button className="save-btn" onClick={toggleDropdown}>
                      Save
                    </button>
                  </div>
                )}
                <div className="user-actions">
                  <span onClick={() => setShowLogin(true)}>Sign in</span>
                </div>
              </div>
            </div>
          </div>
          <nav className="header__navbar">
            <ul className="header__navbar-list">
              <li
                className="header__navbar-item header__navbar-item-has-category"
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
              >
                All Categories
              </li>
              <li className="header__navbar-item">Đảm bảo thương mại</li>
            </ul>
            <ul className="header__navbar-list">
              <li className="header__navbar-item">Trung tâm trợ giúp</li>
              <li className="header__navbar-item">Tải ứng dụng</li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Hiển thị navbar__item-categories nếu showCategories là true */}
      {showCategories && (
        <div
          className={`navbar__item-categories grid__full-width ${
            showCategories ? "dropdown-active" : ""
          }`}
        >
          <h2>Danh mục</h2>
          <ul className="category__list grid">
            {menu_list.map((item, index) => (
              <li key={index}>
                <img src={item.menu_image} alt={item.menu_name} />
                <p>{item.menu_name}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
