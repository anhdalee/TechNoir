import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";
import { assets, menu_list } from "../../assets/assets";
const Header = ({ setShowLogin }) => {
  const [isListVisible, setIsListVisible] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [language, setLanguage] = useState("English");
  const [currency, setCurrency] = useState("USD - US Dollar");
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

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

  const handleFocus = () => {
    setIsListVisible(true);
  };

  const handleBlur = () => {
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
              <img src={assets.logo} alt="Logo" />
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

              {isListVisible && (
                <div className="header__search-list">
                  <ul className="search__list">
                    <li className="search__list-item">Iphone 16 Pro Max</li>
                    <li className="search__list-item">SamSung S23 Utral</li>
                    <li className="search__list-item">Laptop Asus Gaming</li>
                  </ul>
                </div>
              )}
            </div>

            <div className="header-container">
              <div className="header-right">
                <div className="language-currency" onClick={toggleDropdown}>
                  <span>
                    {language} - {currency.split(" ")[0]}
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

          {/* Navbar */}
          <nav className="header__navbar">
            <ul className="header__navbar-list">
              {/* Wrap "All Categories" and the dropdown together */}
              <li className="header__navbar-item header__navbar-item-has-category">
                All Categories
                <div className="navbar__item-categories grid__full-width">
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
              </li>
              <li className="header__navbar-item header__navbar-item-has-trade">
                Đảm bảo thương mại
                <div className="navbar__item-trade">
                  <div className="trade-content">
                    <div className="trade-info">
                      <img
                        src="https://s.alicdn.com/@img/imgextra/i2/O1CN01d18R1Z1H1GuiHHzpS_!!6000000000697-55-tps-212-32.svg"
                        alt=""
                      />
                      <h2>Enjoy protection from payment to delivery.</h2>
                      <button>Learn more</button>
                    </div>
                    <div className="trade-cards">
                      <a href="" className="trade-link">
                        <img
                          src="https://s.alicdn.com/@img/imgextra/i4/O1CN010KADAP2638vcOIcv4_!!6000000007605-55-tps-70-70.svg"
                          alt=""
                        />
                        <div className="trade-text">
                          <h3>Safe & easy payments</h3>
                          <p>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </p>
                        </div>
                      </a>
                      <a href="" className="trade-link">
                        <img
                          src="https://s.alicdn.com/@img/imgextra/i3/O1CN01viHX2926YHrS5jYvf_!!6000000007673-55-tps-70-70.svg"
                          alt=""
                        />
                        <div className="trade-text">
                          <h3>Money-back policy</h3>
                          <p>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </p>
                        </div>
                      </a>
                      <a href="" className="trade-link">
                        <img
                          src="https://s.alicdn.com/@img/imgextra/i2/O1CN01Zsnn5f28yyAQPbYyz_!!6000000008002-55-tps-70-70.svg"
                          alt=""
                        />
                        <div className="trade-text">
                          <h3>Shipping & logistics services</h3>
                          <p>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </p>
                        </div>
                      </a>
                      <a href="" className="trade-link">
                        <img
                          src="https://s.alicdn.com/@img/imgextra/i4/O1CN01hoxDoj1HV2eSjAU58_!!6000000000762-55-tps-70-70.svg"
                          alt=""
                        />
                        <div className="trade-text">
                          <h3>After-sales protections</h3>
                          <p>
                            <FontAwesomeIcon icon={faArrowRight} />
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <ul className="header__navbar-list">
              <li className="header__navbar-item header__navbar-item-has-help">
                Trung tâm trợ giúp
                <div className="navbar__item-help">
                  <div className="help-content">
                    <div className="help-link">
                      <a href="" className="help-item">
                        <img src={assets.buyer} alt="" />
                        <p>For buyers</p>
                      </a>
                      <a href="" className="help-item">
                        <img src={assets.suppliers} alt="" />
                        <p>For Suppliers</p>
                      </a>
                    </div>
                    <div className="help-link-center">
                      <ul>
                        <li>
                          <a href="">Mở cuộc tranh chấp</a>
                        </li>
                        <li>
                          <a href="">Báo cáo vi phạm IPR</a>
                        </li>
                        <li>
                          <a href="">Báo cáo lạm dụng</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="header__navbar-item">Tải ứng dụng</li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
