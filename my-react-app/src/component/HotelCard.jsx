import React from "react";
import PropTypes from "prop-types";
import "./HotelCard.css";

const HotelCard = ({ image, name, location, price, rating }) => {
  return (
    <div className="hotel-card">
      <img src={image} alt={name} className="hotel-image" />
      <div className="hotel-info">
        <h3 className="hotel-name">{name}</h3>
        <p className="hotel-location">{location}</p>
        <div className="hotel-footer">
          <span className="hotel-price">${price}/night</span>
          <span className="hotel-rating">⭐ {rating}</span>
        </div>
      </div>
    </div>
  );
};

HotelCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default HotelCard;