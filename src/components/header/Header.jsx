import React from 'react';
import search from '../../images/svg/search.svg';
import banner from '../../images/svg/banner.svg';
import message from '../../images/svg/message.svg';
import logo from '../../images/svg/logo.svg';
import user from '../../images/user.jpg';

const Header = () => {
  return (
    <>
      <header className="header">
        <img src={logo} alt="logo of the site" className="logo" />
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
            <img
              src={banner}
              alt=""
              className="user-nav__icon user-nav__icon--banner"
            />
          </div>
          <span className="user-nav__notification">5</span>
          <div className="user-nav__icon-box">
            <img
              src={message}
              alt=""
              className="user-nav__icon user-nav__icon--message"
            />
            <span className="user-nav__notification">16</span>
          </div>
          <div className="user-nav__user">
            <img
              src={user}
              alt="small user avatar"
              className="user-nav__user-photo"
            />
            <span className="user-nav__user-name">Loreta</span>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
