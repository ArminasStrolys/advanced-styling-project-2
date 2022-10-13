import React from 'react';
import item_1 from '../../images/svg/hotel.svg';
import item_2 from '../../images/svg/car.svg';
import item_3 from '../../images/svg/flight.svg';
import item_4 from '../../images/svg/tours.svg';

const Navbar = () => {
  return (
    <>
      <nav className="sidebar">
        <ul className="side-nav">
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <img src={item_1} alt="Hotel icon" />
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <img src={item_2} alt="Car icon" />
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <img src={item_3} alt="Airplane icon" />
            </a>
          </li>
          <li className="side-nav__item">
            <a href="#" className="side-nav__link">
              <img src={item_4} alt="Tours icon" />
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
