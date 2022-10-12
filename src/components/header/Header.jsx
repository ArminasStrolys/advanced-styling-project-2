import React from 'react';

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
          <button className="search__button"></button>
        </form>
      </header>
    </>
  );
};

export default Header;
