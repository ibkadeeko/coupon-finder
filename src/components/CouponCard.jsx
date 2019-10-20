import React from 'react';
import PropTypes from 'prop-types';
import './CouponCard.scss';
import formatDate from '../utils/formatDate';

const CouponCards = ({ offer: coupon }) => {
  const {
    image_url: img, title, coupon_code: couponCode, categories,
    affiliate_url: affiliateUrl, end_date: endDate,
  } = coupon;

  const category = Object.values(categories)[0];
  return (
    <div className="CouponCard">
      <a href={affiliateUrl} target="_blank" rel="noopener noreferrer" >
        <div className="CouponCard-image">
          <img src={img} alt="store image" />
        </div>
        <h2 className="CouponCard-title">{title}</h2>
        {couponCode && <p>Coupon Code: {couponCode}</p>}
        <p>Category: {category}</p>
        <p>Promo ends {formatDate(endDate)}</p>
      </a>
    </div>
  );
};

CouponCards.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number,
    camapign_id: PropTypes.number,
    campaign: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    terms_and_condition: PropTypes.string,
    coupon_code: PropTypes.string,
    image_url: PropTypes.string,
    type: PropTypes.string,
    shipping_charge: PropTypes.string,
    status: PropTypes.string,
    url: PropTypes.string,
    affiliate_url: PropTypes.string,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
    categories: PropTypes.shape({}),
  }).isRequired,
};

export default CouponCards;
