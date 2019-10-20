import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';
import CouponCard from '../components/CouponCard';
import './Home.scss';

class Home extends Component {
  static propTypes = {
    coupons: PropTypes.shape({
      total_count: PropTypes.number,
      offers: PropTypes.arrayOf(PropTypes.shape({})),
    }).isRequired,
  }

  renderCards = () => {
    const { coupons } = this.props;

    if (Object.entries(coupons).length === 0 && coupons.constructor === Object) {
      return null;
    }

    const { total_count: count, offers } = coupons;

    if (count === 0) {
      return (
        <p>Sorry, no offers for this store</p>
      );
    }
    return (
      <div className="Home-coupon-display">
        {offers.map((offer) => (
          <CouponCard offer={offer} key={offer} />
        ))}
      </div>
    );
  };

  render() {
    return (
      <div className="Home">
        <h1>Coupon Finder</h1>
        <h3>Find offers from the stores you love</h3>
        <SearchBar />
        <div className="Home-coupons">
          {this.renderCards()}
        </div>
      </div >
    );
  }
}

const mapStateToProps = ({ coupons }) => ({
  coupons,
});

export default connect(mapStateToProps)(Home);
