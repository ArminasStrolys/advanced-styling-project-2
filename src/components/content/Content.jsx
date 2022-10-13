import React from 'react';
import hotel1 from '../../images/hotel1.jpg';
import hotel2 from '../../images/hotel2.jpg';
import hotel3 from '../../images/hotel3.jpg';
import starFilled from '../../images/svg/star2.svg';
import starEmpty from '../../images/svg/star1.svg';
import location from '../../images/svg/location.svg';

const Content = () => {
  return (
    <>
      <main className="hotel-view">
        <div className="gallery">
          <figure className="gallery__item">
            <img
              src={hotel1}
              alt="Hotel view number 1"
              className="gallery__photo"
            />
          </figure>
          <figure className="gallery__item">
            <img
              src={hotel2}
              alt="Hotel view number 2"
              className="gallery__photo"
            />
          </figure>
          <figure className="gallery__item">
            <img
              src={hotel3}
              alt="Hotel view number 3"
              className="gallery__photo"
            />
          </figure>
        </div>
        <div className="overview">
          <h1 className="overview__heading">Hotel Victorium</h1>
          <div className="overview__star-rating">
            <img
              className="overview__star-rating-icon"
              src={starFilled}
              alt="rating star filled"
            />
            <img
              className="overview__star-rating-icon"
              src={starFilled}
              alt="rating star filled"
            />
            <img
              className="overview__star-rating-icon"
              src={starFilled}
              alt="rating star filled"
            />
            <img
              className="overview__star-rating-icon"
              src={starFilled}
              alt="rating star filled"
            />
            <img
              className="overview__star-rating-icon"
              src={starEmpty}
              alt="rating star empty"
            />
          </div>
          <div className="overview__location">
            <img
              className="overview__star-rating-icon"
              src={location}
              alt="location pin icon"
            />
            <button className="btn-inline">Somewhereville, Pacific</button>
          </div>
          <div className="overview__rating">
            <div className="overview__rating-avg">9.1</div>
            <div className="overview__rating-votes">2652 votes</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Content;
