import React from 'react';
import item_1 from '../../images/svg/hotel.svg';
import item_2 from '../../images/svg/car.svg';
import item_3 from '../../images/svg/flight.svg';
import item_4 from '../../images/svg/tours.svg';

const Navbar = () => {
  const date = new Date();
  const years = date.getFullYear();
  return (
    <>
      <nav className="sidebar">
        <ul className="side-nav">
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <img src={item_1} alt="Hotel icon" className="side-nav__icon" />
              <span>Hotels</span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <img src={item_2} alt="Car icon" className="side-nav__icon" />
              <span>Cars for rent</span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <img
                src={item_3}
                alt="Airplane icon"
                className="side-nav__icon"
              />
              <span>Flights</span>
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <img src={item_4} alt="Tours icon" className="side-nav__icon" />
              <span>Tours</span>
            </a>
          </li>
        </ul>
        <div className="legal">
          &copy; {years} Hotelium. All rights reserved.
        </div>
      </nav>
    </>
  );
};

export default Navbar;
