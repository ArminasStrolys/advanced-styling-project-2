import React from 'react';
import search from '../../images/svg/search.svg';
import banner from '../../images/svg/banner.svg';
import message from '../../images/svg/message.svg';

const Header = () => {
  return (
    <>
      <header className="header">
        <img src="" alt="logo of the site" className="logo" />
        <form action="#" className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search hotels"
          />
          <button className="search__button">
            <img src={search} alt="search icon" className="search__icon" />
          </button>
        </form>
        <nav className="user-nav">
          <div className="user-nav__icon-box">
            <img src={banner} alt="" className="user-nav__icon" />
          </div>
          <span className="user-nav__notification">5</span>
          <div className="user-nav__icon-box">
            <img src={message} alt="" className="user-nav__icon" />
          </div>
          <span className="user-nav__notification">16</span>
        </nav>
      </header>
    </>
  );
};

export default Header;
