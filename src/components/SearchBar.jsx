import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as couponActions from '../store/actions/couponActions';
import './SearchBar.scss';

class SearchBar extends Component {
  static propTypes = {
    searchCouponRequest: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      store: '',
      searching: false,
    };
  }

  handleChange = (evt) => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { store } = this.state;
      const { searchCouponRequest } = this.props;
      await this.setState({ searching: true });
      await searchCouponRequest({ store });
      await this.setState({ searching: false, store: '' });
    } catch (error) {
      this.setState({ saving: false });
    }
  }

  render() {
    const { store, searching } = this.state;
    return (
      <form id="search-bar" className="SearchBar" onSubmit={this.handleSubmit} >
        <input
          name="store"
          type="text"
          placeholder="Search for any store here"
          onChange={this.handleChange}
          value={store}
          autoFocus
          required
        />

        <button disabled={searching}>{searching ? <i className="fa fa-spinner fa-spin"></i> : 'Search'}</button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  searchCouponRequest: couponActions.searchCouponRequest,
};

export default connect(null, mapDispatchToProps)(SearchBar);
