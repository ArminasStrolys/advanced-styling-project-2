import React from 'react';
import hotel1 from '../../images/hotel1.jpg';
import hotel2 from '../../images/hotel2.jpg';
import hotel3 from '../../images/hotel3.jpg';
import starFilled from '../../images/svg/star2.svg';
import starEmpty from '../../images/svg/star1.svg';
import location from '../../images/svg/location.svg';
import friend1 from '../../images/friend1.jpg';
import friend2 from '../../images/friend2.jpg';
import friend3 from '../../images/friend3.jpg';
import friend4 from '../../images/friend4.jpg';

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
              className="overview__location-icon"
              src={location}
              alt="location pin icon"
            />
            <button className="btn-inline">Somewhereville, Pacific</button>
          </div>
          <div className="overview__rating">
            <div className="overview__rating-avg">8.9</div>
            <div className="overview__rating-votes">2652 votes</div>
          </div>
        </div>
        <div className="detail">
          <div className="description">
            <p className="paragraph margin-bottom">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              neque eos quod ad assumenda. Consectetur odit illum recusandae
              officia excepturi voluptatum, inventore debitis enim ullam, itaque
              aperiam mollitia, laudantium adipisci quo laborum esse ab expedita
              qui error assumenda facere nostrum.
            </p>
            <p className="paragraph margin-bottom">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
              aliquam officiis voluptate provident minus ipsa harum blanditiis
              expedita recusandae assumenda sapiente nobis, magnam repellendus
              autem!
            </p>
            <ul className="list margin-bottom">
              <li className="list__item">Lorem ipsum dolor sit amet.</li>
              <li className="list__item">Lorem ipsum dolor amet.</li>
              <li className="list__item">Lorem ipsum dolor sit amet.</li>
              <li className="list__item">Lorem ipsum sit amet.</li>
              <li className="list__item">Lorem dolor amet.</li>
              <li className="list__item">Lorem amet.</li>
              <li className="list__item">Lorem ipsum dolor.</li>
              <li className="list__item">Lorem dolor sit amet.</li>
            </ul>
            <div className="recommend">
              <p className="recommend__count">
                Richard and 42 other recommend this hotel.
              </p>
              <div className="recommend__friends">
                <img
                  src={friend2}
                  alt="Friend who recommends this hotel icon 2"
                  className="recommend__photo"
                />
                <img
                  src={friend1}
                  alt="Friend who recommends this hotel icon 1"
                  className="recommend__photo"
                />
                <img
                  src={friend3}
                  alt="Friend who recommends this hotel icon 3"
                  className="recommend__photo"
                />
                <img
                  src={friend4}
                  alt="Friend who recommends this hotel icon 4"
                  className="recommend__photo"
                />

                <div className="recommend__photo recommend__photo--empty">
                  <span className="recommend__photo-others">+38</span>
                </div>
              </div>
            </div>
          </div>
          <div className="user-reviews">
            <figure className="review">
              <blockquote className="review__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Asperiores, illum sit ullam debitis, natus cupiditate fuga
                commodi, inventore explicabo dicta esse nesciunt minus quia
                molestiae labore laboriosam aliquid eius reiciendis.
              </blockquote>
              <figcaption className="review__user">
                <img src="" alt="User 1" className="review__photo" />
                <div className="review__user-box">
                  <p className="review__user-name">Matt Harrison</p>
                  <p className="review__user-date">Sep 2nd, 2035</p>
                </div>
                <div className="review__rating">8.7</div>
              </figcaption>
            </figure>
            <figure className="review">
              <blockquote className="review__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                nostrum asperiores libero. Culpa sint quia porro dolor est
                voluptatem nemo, nobis repellendus fuga error dolore enim optio
                commodi, quidem dolores officia atque! Temporibus doloremque
                maxime iusto alias blanditiis commodi neque minima officiis
                consequuntur?
              </blockquote>
              <figcaption className="review__user">
                <img src="" alt="User 1" className="review__photo" />
                <div className="review__user-box">
                  <p className="review__user-name">Jake Freshfield</p>
                  <p className="review__user-date">Dec 24th, 2027</p>
                </div>
                <div className="review__rating">9.3</div>
              </figcaption>
            </figure>
          </div>
        </div>
      </main>
    </>
  );
};

export default Content;
