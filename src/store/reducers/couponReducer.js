import * as types from '../actions/actionTypes';
import initialState from './initialState';

const { coupons } = initialState;

const {
  LOAD_COUPON_SUCCESS,
  LOAD_COUPON_FAILURE,
  SEARCH_COUPON_SUCCESS,
  SEARCH_COUPON_FAILURE,
} = types;

export default function (state = coupons, { type, payload }) {
  switch (type) {
    case LOAD_COUPON_SUCCESS:
      return { ...state };
    case LOAD_COUPON_FAILURE:
      return { ...state, error: payload.error };
    case SEARCH_COUPON_SUCCESS:
      return {};
    case SEARCH_COUPON_FAILURE:
      return { ...state, error: payload.error };
    default:
      return state;
  }
}
